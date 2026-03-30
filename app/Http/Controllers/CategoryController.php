<?php
// app/Http/Controllers/CategoryController.php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // Get all categories with their children
    public function index()
    {
        try {
            $categories = Category::with('children')->whereNull('parent_id')->get();
            
            return response()->json([
                'status' => true,
                'data' => $categories,
                'message' => 'Categories fetched successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error fetching categories: ' . $e->getMessage(),
            ], 500);
        }
    }
    
    // Get categories formatted for dropdown (with children nested)
    public function getDropdown()
    {
        try {
            $categories = Category::with('children')->whereNull('parent_id')->get();
            
            return response()->json($categories);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error fetching categories: ' . $e->getMessage(),
            ], 500);
        }
    }
}