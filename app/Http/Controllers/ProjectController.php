<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    // ✅ Get all projects with pagination and filtering
    public function index(Request $request)
    {
        try {
            $query = Project::query();
            
            // Apply search filter
            if ($request->has('search') && !empty($request->search)) {
                $search = $request->search;
                $query->where(function($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('name', 'like', "%{$search}%")
                      ->orWhere('client_name', 'like', "%{$search}%")
                      ->orWhere('category', 'like', "%{$search}%");
                });
            }
            
            // Apply category filter
            if ($request->has('category') && !empty($request->category) && $request->category !== 'All') {
                $query->where('category', $request->category);
            }
            
            // Apply status filter - only show active projects for frontend
            if ($request->has('status') && !empty($request->status)) {
                $query->where('status', $request->status);
            } else {
                $query->where('status', 'active');
            }
            
            // Get paginated results
            $perPage = $request->get('per_page', 10);
            $projects = $query->latest()->paginate($perPage);
            
            // Transform the data to include image_url and format for frontend
            $projects->getCollection()->transform(function ($project) {
                return $this->formatProjectData($project);
            });
            
            return response()->json($projects);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch projects',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    // ✅ Get single project by slug
    public function show($slug)
    {
        try {
            $project = Project::where('slug', $slug)->firstOrFail();
            return response()->json($this->formatProjectData($project));
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Project not found',
                'message' => $e->getMessage()
            ], 404);
        }
    }

    // ✅ Store new project
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'name' => 'nullable|string|max:255',
                'description' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'category' => 'nullable|string|max:255',
                'status' => 'required|in:active,inactive',
                'location' => 'nullable|string|max:255',
                'rating' => 'nullable|integer|min:1|max:5',
                'year' => 'nullable|string|max:4',
                'contract_type' => 'nullable|string|max:255',
            ]);

            $imagePath = null;

            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('projects', 'public');
            }

            $project = Project::create([
                'title' => $request->title,
                'name' => $request->name ?? $request->title,
                'description' => $request->description,
                'image' => $imagePath,
                'category' => $request->category,
                'status' => $request->status,
                'location' => $request->location,
                'rating' => $request->rating ?? 4,
                'year' => $request->year,
                'contract_type' => $request->contract_type,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Project created successfully',
                'data' => $this->formatProjectData($project)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'error' => 'Failed to create project',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    // ✅ Update project
    public function update(Request $request, $id)
    {
        try {
            $project = Project::findOrFail($id);

            $request->validate([
                'title' => 'sometimes|string|max:255',
                'name' => 'nullable|string|max:255',
                'description' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'category' => 'nullable|string|max:255',
                'status' => 'sometimes|in:active,inactive',
                'location' => 'nullable|string|max:255',
                'rating' => 'nullable|integer|min:1|max:5',
                'year' => 'nullable|string|max:4',
                'contract_type' => 'nullable|string|max:255',
            ]);

            $updateData = $request->only([
                'title', 'name', 'description', 'category', 
                'status', 'location', 'rating', 'year', 'contract_type'
            ]);

            // Ensure name is set if title is updated
            if ($request->has('title') && !$request->has('name')) {
                $updateData['name'] = $request->title;
            }

            if ($request->hasFile('image')) {
                // Delete old image
                if ($project->image && Storage::disk('public')->exists($project->image)) {
                    Storage::disk('public')->delete($project->image);
                }

                // Store new image
                $updateData['image'] = $request->file('image')->store('projects', 'public');
            }

            $project->update($updateData);

            return response()->json([
                'status' => true,
                'message' => 'Project updated successfully',
                'data' => $this->formatProjectData($project->fresh())
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'error' => 'Failed to update project',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    // ✅ Delete project (Soft delete)
    public function destroy($id)
    {
        try {
            $project = Project::findOrFail($id);
            $project->delete();

            return response()->json([
                'status' => true,
                'message' => 'Project deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'error' => 'Failed to delete project',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    // ✅ Helper method to format project data for frontend
    private function formatProjectData($project)
    {
        return [
            'id' => $project->id,
            'name' => $project->name ?? $project->title,
            'title' => $project->title,
            'description' => $project->description,
            'image' => $project->image_url,
            'image_url' => $project->image_url,
            'category' => $project->category,
            'status' => $project->status,
            'slug' => $project->slug,
            'location' => $project->location ?? 'Various Locations',
            'rating' => $project->rating ?? 4,
            'year' => $project->year ?? date('Y', strtotime($project->created_at)),
            'contractType' => $project->contract_type ?? 'Full Project',
            'created_at' => $project->created_at,
            'updated_at' => $project->updated_at,
        ];
    }
}
