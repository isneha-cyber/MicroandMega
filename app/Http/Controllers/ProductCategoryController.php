<?php

namespace App\Http\Controllers;

use App\Models\Log;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductCategoryImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log as LaravelLog;
use Illuminate\Support\Facades\Storage;

class ProductCategoryController extends Controller
{
    // GET /ourproductcategories — all categories (nested tree)
    public function index()
    {
        try {
            $categories = ProductCategory::with(['children', 'images'])
                ->whereNull('parent_id')
                ->where('status', true)
                ->latest()
                ->get();

            return response()->json([
                'status'  => true,
                'data'    => $categories,
                'message' => 'Product categories fetched successfully',
            ]);
        } catch (\Exception $e) {
            LaravelLog::error('Error fetching product categories: ' . $e->getMessage());
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // GET /ourproductcategories/flat — flat list for dropdowns (admin)
    public function flat()
    {
        try {
            $categories = ProductCategory::with('parent')
                ->orderBy('name')
                ->get()
                ->map(fn($c) => [
                    'id'          => $c->id,
                    'name'        => $c->name,
                    'slug'        => $c->slug,
                    'parent_id'   => $c->parent_id,
                    'parent_name' => $c->parent?->name,
                    'icon_image'  => $c->icon_image,
                    'featured_image' => $c->featured_image,
                    'status'      => $c->status,
                ]);

            return response()->json(['status' => true, 'data' => $categories]);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // GET /ourproductcategories/{slug} — single category + its products
    public function show($slug)
    {
        try {
            $category = ProductCategory::with(['children', 'images', 'products.images'])
                ->where('slug', $slug)
                ->where('status', true)
                ->firstOrFail();

            return response()->json([
                'status' => true,
                'data'   => $category,
            ]);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => 'Category not found'], 404);
        }
    }

    // POST /ourproductcategories — create
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name'          => 'required|string|max:255',
                'slug'          => 'nullable|string|unique:product_categories,slug',
                'description'   => 'nullable|string',
                'title'         => 'nullable|string',
                'content'       => 'nullable|string',
                'featured_image'=> 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'icon_image'    => 'nullable|image|mimes:jpg,jpeg,png,webp,svg|max:1024',
                'images.*'      => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'parent_id'     => 'nullable|exists:product_categories,id',
                'status'        => 'boolean',
            ]);

            $featuredPath = null;
            if ($request->hasFile('featured_image')) {
                $featuredPath = $request->file('featured_image')
                    ->store('product-categories/featured', 'public');
            }

            $iconPath = null;
            if ($request->hasFile('icon_image')) {
                $iconPath = $request->file('icon_image')
                    ->store('product-categories/icons', 'public');
            }

            $category = ProductCategory::create([
                'name'           => $validated['name'],
                'slug'           => $validated['slug'] ?? null,
                'description'    => $validated['description'] ?? null,
                'title'          => $validated['title'] ?? null,
                'content'        => $validated['content'] ?? null,
                'featured_image' => $featuredPath,
                'icon_image'     => $iconPath,
                'parent_id'      => $validated['parent_id'] ?? null,
                'status'         => $validated['status'] ?? true,
            ]);

            // Handle gallery images
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $index => $image) {
                    $path = $image->store('product-categories/gallery', 'public');
                    ProductCategoryImage::create([
                        'product_category_id' => $category->id,
                        'image_path'          => $path,
                        'is_primary'          => $index === 0,
                        'sort_order'          => $index,
                    ]);
                }
            }

            Log::create([
                'name'       => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title'      => 'Product Category Created: ' . $category->name,
            ]);

            return response()->json([
                'status'  => true,
                'message' => 'Product category created successfully',
                'data'    => $category->load('images'),
            ], 201);

        } catch (\Exception $e) {
            LaravelLog::error('Error creating product category: ' . $e->getMessage());
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // POST /ourproductcategories/{id} (with _method=PUT) — update
    public function update(Request $request, $id)
    {
        try {
            $category = ProductCategory::findOrFail($id);

            $validated = $request->validate([
                'name'          => 'sometimes|string|max:255',
                'slug'          => 'nullable|string|unique:product_categories,slug,' . $id,
                'description'   => 'nullable|string',
                'title'         => 'nullable|string',
                'content'       => 'nullable|string',
                'featured_image'=> 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'icon_image'    => 'nullable|image|mimes:jpg,jpeg,png,webp,svg|max:1024',
                'images.*'      => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'parent_id'     => 'nullable|exists:product_categories,id',
                'status'        => 'boolean',
            ]);

            // Prevent a category from being its own parent
            if (isset($validated['parent_id']) && $validated['parent_id'] == $id) {
                return response()->json([
                    'status'  => false,
                    'message' => 'A category cannot be its own parent.',
                ], 422);
            }

            if ($request->hasFile('featured_image')) {
                if ($category->featured_image && Storage::disk('public')->exists($category->featured_image)) {
                    Storage::disk('public')->delete($category->featured_image);
                }
                $featuredPath = $request->file('featured_image')
                    ->store('product-categories/featured', 'public');
                $category->featured_image = $featuredPath;
            }

            if ($request->hasFile('icon_image')) {
                if ($category->icon_image && Storage::disk('public')->exists($category->icon_image)) {
                    Storage::disk('public')->delete($category->icon_image);
                }
                $iconPath = $request->file('icon_image')
                    ->store('product-categories/icons', 'public');
                $category->icon_image = $iconPath;
            }

            $category->update([
                'name'        => $request->name ?? $category->name,
                'slug'        => $validated['slug'] ?? $category->slug,
                'description' => $request->description ?? $category->description,
                'title'       => $request->title ?? $category->title,
                'content'     => $request->content ?? $category->content,
                'parent_id'   => array_key_exists('parent_id', $validated)
                                    ? $validated['parent_id']
                                    : $category->parent_id,
                'status'      => $request->has('status') ? $request->status : $category->status,
            ]);

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $index => $image) {
                    $path = $image->store('product-categories/gallery', 'public');
                    ProductCategoryImage::create([
                        'product_category_id' => $category->id,
                        'image_path'          => $path,
                        'is_primary'          => false,
                        'sort_order'          => $category->images()->count() + $index,
                    ]);
                }
            }

            Log::create([
                'name'       => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title'      => 'Product Category Updated: ' . $category->name,
            ]);

            return response()->json([
                'status'  => true,
                'message' => 'Product category updated successfully',
                'data'    => $category->fresh()->load('images', 'parent', 'children'),
            ]);

        } catch (\Exception $e) {
            LaravelLog::error('Error updating product category: ' . $e->getMessage());
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // DELETE /ourproductcategories/{id}
    public function destroy(Request $request, $id)
    {
        try {
            $category = ProductCategory::findOrFail($id);
            $name     = $category->name;

            // Check if category has child categories
            if ($category->children()->count() > 0) {
                return response()->json([
                    'status' => false,
                    'message' => 'Cannot delete category with child categories. Delete child categories first.'
                ], 422);
            }

            // Delete featured image
            if ($category->featured_image && Storage::disk('public')->exists($category->featured_image)) {
                Storage::disk('public')->delete($category->featured_image);
            }
            // Delete icon
            if ($category->icon_image && Storage::disk('public')->exists($category->icon_image)) {
                Storage::disk('public')->delete($category->icon_image);
            }
            // Delete gallery images
            foreach ($category->images as $image) {
                if (Storage::disk('public')->exists($image->image_path)) {
                    Storage::disk('public')->delete($image->image_path);
                }
                $image->delete();
            }

            // Detach products (set product_category_id to null instead of deleting)
            Product::where('product_category_id', $id)->update(['product_category_id' => null]);

            $category->delete(); // soft delete

            Log::create([
                'name'       => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title'      => 'Product Category Deleted: ' . $name,
            ]);

            return response()->json(['status' => true, 'message' => 'Product category deleted successfully']);

        } catch (\Exception $e) {
            LaravelLog::error('Error deleting product category: ' . $e->getMessage());
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // DELETE /ourproductcategories/{id}/images/{imageId} — remove one gallery image
    public function destroyImage(Request $request, $id, $imageId)
    {
        try {
            $image = ProductCategoryImage::where('product_category_id', $id)
                ->findOrFail($imageId);

            if (Storage::disk('public')->exists($image->image_path)) {
                Storage::disk('public')->delete($image->image_path);
            }
            $image->delete();

            return response()->json(['status' => true, 'message' => 'Image deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }
}