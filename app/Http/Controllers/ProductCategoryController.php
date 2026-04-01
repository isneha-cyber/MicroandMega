<?php

namespace App\Http\Controllers;

use App\Models\Log;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log as LaravelLog;
use Illuminate\Support\Facades\Storage;

class ProductCategoryController extends Controller
{
    // GET /ourproductcategories — all categories (nested tree)
    public function index()
    {
        try {
            $categories = ProductCategory::with(['children'])
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
                    'gallery_images' => $c->gallery_images ?? [],
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
            $category = ProductCategory::with(['children', 'products.images'])
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
                'gallery_images' => 'nullable|array',
                'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
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

            // Handle gallery images - store as JSON array
            $galleryPaths = [];
            if ($request->hasFile('gallery_images')) {
                foreach ($request->file('gallery_images') as $image) {
                    $path = $image->store('product-categories/gallery', 'public');
                    $galleryPaths[] = $path;
                }
            }

            $category = ProductCategory::create([
                'name'           => $validated['name'],
                'slug'           => $validated['slug'] ?? null,
                'description'    => $validated['description'] ?? null,
                'title'          => $validated['title'] ?? null,
                'content'        => $validated['content'] ?? null,
                'featured_image' => $featuredPath,
                'icon_image'     => $iconPath,
                'gallery_images' => $galleryPaths,
                'parent_id'      => $validated['parent_id'] ?? null,
                'status'         => $validated['status'] ?? true,
            ]);

            Log::create([
                'name'       => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title'      => 'Product Category Created: ' . $category->name,
            ]);

            return response()->json([
                'status'  => true,
                'message' => 'Product category created successfully',
                'data'    => $category,
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
                'gallery_images' => 'nullable|array',
                'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'remove_gallery_images' => 'nullable|array',
                'remove_gallery_images.*' => 'integer',
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

            // Handle featured image
            if ($request->hasFile('featured_image')) {
                if ($category->featured_image && Storage::disk('public')->exists($category->featured_image)) {
                    Storage::disk('public')->delete($category->featured_image);
                }
                $featuredPath = $request->file('featured_image')
                    ->store('product-categories/featured', 'public');
                $category->featured_image = $featuredPath;
            }

            // Handle icon image
            if ($request->hasFile('icon_image')) {
                if ($category->icon_image && Storage::disk('public')->exists($category->icon_image)) {
                    Storage::disk('public')->delete($category->icon_image);
                }
                $iconPath = $request->file('icon_image')
                    ->store('product-categories/icons', 'public');
                $category->icon_image = $iconPath;
            }

            // Handle removal of specific gallery images
            $currentGallery = $category->gallery_images ?? [];
            if ($request->has('remove_gallery_images')) {
                $toRemove = $request->remove_gallery_images;
                $remaining = [];
                
                foreach ($currentGallery as $index => $imagePath) {
                    if (!in_array($index, $toRemove)) {
                        $remaining[] = $imagePath;
                    } else {
                        // Delete the image file
                        if (Storage::disk('public')->exists($imagePath)) {
                            Storage::disk('public')->delete($imagePath);
                        }
                    }
                }
                $currentGallery = $remaining;
            }

            // Handle new gallery images
            if ($request->hasFile('gallery_images')) {
                foreach ($request->file('gallery_images') as $image) {
                    $path = $image->store('product-categories/gallery', 'public');
                    $currentGallery[] = $path;
                }
            }

            // Update category
            $category->update([
                'name'           => $request->name ?? $category->name,
                'slug'           => $validated['slug'] ?? $category->slug,
                'description'    => $request->description ?? $category->description,
                'title'          => $request->title ?? $category->title,
                'content'        => $request->content ?? $category->content,
                'gallery_images' => $currentGallery,
                'parent_id'      => array_key_exists('parent_id', $validated)
                                    ? $validated['parent_id']
                                    : $category->parent_id,
                'status'         => $request->has('status') ? $request->status : $category->status,
            ]);

            Log::create([
                'name'       => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title'      => 'Product Category Updated: ' . $category->name,
            ]);

            return response()->json([
                'status'  => true,
                'message' => 'Product category updated successfully',
                'data'    => $category->fresh()->load('parent', 'children'),
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
            
            // Delete all gallery images
            if (!empty($category->gallery_images)) {
                foreach ($category->gallery_images as $imagePath) {
                    if (Storage::disk('public')->exists($imagePath)) {
                        Storage::disk('public')->delete($imagePath);
                    }
                }
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

    // DELETE /ourproductcategories/{id}/gallery/{index} — remove one gallery image
    public function destroyGalleryImage(Request $request, $id, $index)
    {
        try {
            $category = ProductCategory::findOrFail($id);
            $galleryImages = $category->gallery_images ?? [];
            
            if (!isset($galleryImages[$index])) {
                return response()->json(['status' => false, 'message' => 'Image not found'], 404);
            }
            
            $imagePath = $galleryImages[$index];
            
            // Delete the file
            if (Storage::disk('public')->exists($imagePath)) {
                Storage::disk('public')->delete($imagePath);
            }
            
            // Remove from array
            unset($galleryImages[$index]);
            $category->gallery_images = array_values($galleryImages); // Reindex array
            $category->save();
            
            return response()->json(['status' => true, 'message' => 'Image deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }
}