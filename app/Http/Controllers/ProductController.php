<?php
// app/Http/Controllers/ProductController.php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    // Get all products
    public function index()
    {
        try {
            $products = Product::with('category', 'images')->latest()->get();
            
            return response()->json([
                'status' => true,
                'data' => $products,
                'message' => 'Products fetched successfully'
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching products: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error fetching products: ' . $e->getMessage()
            ], 500);
        }
    }

    // Get products by category
    public function getByCategory($categorySlug)
    {
        try {
            $category = \App\Models\Category::where('slug', $categorySlug)->first();
            
            if (!$category) {
                return response()->json([
                    'status' => false,
                    'message' => 'Category not found'
                ], 404);
            }
            
            $products = Product::with('category', 'images')
                ->where('category_id', $category->id)
                ->where('status', true)
                ->latest()
                ->get();
            
            return response()->json([
                'status' => true,
                'data' => $products,
                'category' => $category
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching products by category: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error fetching products: ' . $e->getMessage()
            ], 500);
        }
    }

    // Get single product by slug
    public function show($slug)
    {
        try {
            $product = Product::with('category', 'images')
                ->where('slug', $slug)
                ->firstOrFail();

            return response()->json([
                'status' => true,
                'data' => $product
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching product: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Product not found'
            ], 404);
        }
    }

    // Store product
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'title' => 'nullable|string',
                'content' => 'nullable|string',
                'featured_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'category_id' => 'nullable|exists:categories,id',
                'status' => 'boolean'
            ]);

            $featuredImagePath = null;
            if ($request->hasFile('featured_image')) {
                $featuredImagePath = $request->file('featured_image')->store('products', 'public');
            }

            $product = Product::create([
                'name' => $validated['name'],
                'description' => $validated['description'] ?? null,
                'title' => $validated['title'] ?? null,
                'content' => $validated['content'] ?? null,
                'featured_image' => $featuredImagePath,
                'category_id' => $validated['category_id'] ?? null,
                'status' => $validated['status'] ?? true
            ]);

            // Handle multiple images
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $index => $image) {
                    $imagePath = $image->store('product-images', 'public');
                    ProductImage::create([
                        'product_id' => $product->id,
                        'image_path' => $imagePath,
                        'is_primary' => $index === 0,
                        'sort_order' => $index
                    ]);
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'Product created successfully',
                'data' => $product->load('images')
            ], 201);
            
        } catch (\Exception $e) {
            Log::error('Error creating product: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error creating product: ' . $e->getMessage()
            ], 500);
        }
    }

    // Update product
    public function update(Request $request, $id)
    {
        try {
            $product = Product::findOrFail($id);

            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
                'description' => 'nullable|string',
                'title' => 'nullable|string',
                'content' => 'nullable|string',
                'featured_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'category_id' => 'nullable|exists:categories,id',
                'status' => 'boolean'
            ]);

            if ($request->hasFile('featured_image')) {
                if ($product->featured_image && Storage::disk('public')->exists($product->featured_image)) {
                    Storage::disk('public')->delete($product->featured_image);
                }
                $product->featured_image = $request->file('featured_image')->store('products', 'public');
            }

            $product->update([
                'name' => $request->name ?? $product->name,
                'description' => $request->description ?? $product->description,
                'title' => $request->title ?? $product->title,
                'content' => $request->content ?? $product->content,
                'category_id' => $request->category_id ?? $product->category_id,
                'status' => $request->status ?? $product->status
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Product updated successfully',
                'data' => $product->load('images')
            ]);
            
        } catch (\Exception $e) {
            Log::error('Error updating product: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error updating product: ' . $e->getMessage()
            ], 500);
        }
    }

    // Delete product
    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);

            if ($product->featured_image && Storage::disk('public')->exists($product->featured_image)) {
                Storage::disk('public')->delete($product->featured_image);
            }

            foreach ($product->images as $image) {
                if (Storage::disk('public')->exists($image->image_path)) {
                    Storage::disk('public')->delete($image->image_path);
                }
                $image->delete();
            }

            $product->delete();

            return response()->json([
                'status' => true,
                'message' => 'Product deleted successfully'
            ]);
            
        } catch (\Exception $e) {
            Log::error('Error deleting product: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error deleting product: ' . $e->getMessage()
            ], 500);
        }
    }
}
