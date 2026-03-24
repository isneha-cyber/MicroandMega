<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    // 📌 Get all products
    public function index()
    {
        try {
            $products = Product::latest()->get();

            return response()->json([
                'status' => true,
                'data' => $products
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching products: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error fetching products'
            ], 500);
        }
    }

    // 📌 Store new product
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048', // Added max size
                'category' => 'nullable|string|max:255',
            ]);

            $imagePath = null;

            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('products', 'public');
            }

            $product = Product::create([
                'name' => $validated['name'],
                'description' => $validated['description'] ?? null,
                'image' => $imagePath,
                'category' => $validated['category'] ?? null,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Product created successfully',
                'data' => $product
            ], 201);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            Log::error('Error creating product: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error creating product: ' . $e->getMessage()
            ], 500);
        }
    }

    // 📌 Update product
    public function update(Request $request, $id)
    {
        try {
            $product = Product::findOrFail($id);

            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
                'description' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'category' => 'nullable|string|max:255',
            ]);

            // Handle image update
            if ($request->hasFile('image')) {
                // delete old image
                if ($product->image && Storage::disk('public')->exists($product->image)) {
                    Storage::disk('public')->delete($product->image);
                }

                $product->image = $request->file('image')->store('products', 'public');
            }

            // Update other fields
            $product->update([
                'name' => $request->name ?? $product->name,
                'description' => $request->description ?? $product->description,
                'category' => $request->category ?? $product->category,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Product updated successfully',
                'data' => $product
            ]);
            
        } catch (\Exception $e) {
            Log::error('Error updating product: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error updating product: ' . $e->getMessage()
            ], 500);
        }
    }

    // 📌 Delete product (Soft delete)
    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);

            // delete image from storage
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
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
                'message' => 'Error deleting product'
            ], 500);
        }
    }
}