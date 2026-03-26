<?php
// app/Http/Controllers/CategoryController.php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    // Get all categories for menu (with parent-child relationship)
    public function index()
    {
        try {
            // Get all parent categories with their children
            $categories = Category::with('children')->whereNull('parent_id')->where('is_active', true)->get();
            
            return response()->json([
                'status' => true,
                'data' => $categories
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching categories: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error fetching categories'
            ], 500);
        }
    }

    // Get all categories for dropdown (simple list)
    public function getForDropdown()
    {
        try {
            // Get only parent categories with their children for clean dropdown
            $categories = Category::with('children')
                ->whereNull('parent_id')
                ->where('is_active', true)
                ->get();
            
            return response()->json([
                'status' => true,
                'data' => $categories
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching categories: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error fetching categories'
            ], 500);
        }
    }

    // Get single category with products
    public function show($slug)
    {
        try {
            $category = Category::with('products.images')->where('slug', $slug)->firstOrFail();
            
            return response()->json([
                'status' => true,
                'data' => $category
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching category: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Category not found'
            ], 404);
        }
    }

    // Store category (for admin)
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255|unique:categories',
                'description' => 'nullable|string',
                'icon' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'parent_id' => 'nullable|exists:categories,id',
                'is_active' => 'boolean'
            ]);

            $iconPath = null;
            if ($request->hasFile('icon')) {
                $iconPath = $request->file('icon')->store('category-icons', 'public');
            }

            $category = Category::create([
                'name' => $validated['name'],
                'slug' => Str::slug($validated['name']),
                'description' => $validated['description'] ?? null,
                'icon' => $iconPath,
                'parent_id' => $validated['parent_id'] ?? null,
                'is_active' => $validated['is_active'] ?? true
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Category created successfully',
                'data' => $category
            ], 201);
            
        } catch (\Exception $e) {
            Log::error('Error creating category: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error creating category'
            ], 500);
        }
    }

    // Update category
    public function update(Request $request, $id)
    {
        try {
            $category = Category::findOrFail($id);
            
            $validated = $request->validate([
                'name' => 'sometimes|string|max:255|unique:categories,name,' . $id,
                'description' => 'nullable|string',
                'icon' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'parent_id' => 'nullable|exists:categories,id',
                'is_active' => 'boolean'
            ]);

            if ($request->hasFile('icon')) {
                if ($category->icon && Storage::disk('public')->exists($category->icon)) {
                    Storage::disk('public')->delete($category->icon);
                }
                $category->icon = $request->file('icon')->store('category-icons', 'public');
            }

            $category->update([
                'name' => $request->name ?? $category->name,
                'slug' => $request->name ? Str::slug($request->name) : $category->slug,
                'description' => $request->description ?? $category->description,
                'parent_id' => $request->parent_id ?? $category->parent_id,
                'is_active' => $request->is_active ?? $category->is_active
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Category updated successfully',
                'data' => $category
            ]);
            
        } catch (\Exception $e) {
            Log::error('Error updating category: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error updating category'
            ], 500);
        }
    }

    // Delete category
    public function destroy($id)
    {
        try {
            $category = Category::findOrFail($id);
            
            if ($category->icon && Storage::disk('public')->exists($category->icon)) {
                Storage::disk('public')->delete($category->icon);
            }
            
            $category->delete();
            
            return response()->json([
                'status' => true,
                'message' => 'Category deleted successfully'
            ]);
            
        } catch (\Exception $e) {
            Log::error('Error deleting category: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error deleting category'
            ], 500);
        }
    }
}
