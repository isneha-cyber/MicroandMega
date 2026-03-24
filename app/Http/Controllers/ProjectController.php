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
        $query = Project::query();
        
        // Apply search filter
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('client_name', 'like', "%{$search}%")
                  ->orWhere('category', 'like', "%{$search}%");
            });
        }
        
        // Apply status filter
        if ($request->has('status') && !empty($request->status)) {
            $query->where('status', $request->status);
        }
        
        // Get paginated results
        $perPage = $request->get('per_page', 10);
        $projects = $query->latest()->paginate($perPage);
        
        // Transform the data to include image_url
        $projects->getCollection()->transform(function ($project) {
            return [
                'id' => $project->id,
                'title' => $project->title,
                'description' => $project->description,
                'image' => $project->image,
                'image_url' => $project->image_url,
                'client_name' => $project->client_name,
                'category' => $project->category,
                'status' => $project->status,
                'slug' => $project->slug,
                'created_at' => $project->created_at,
                'updated_at' => $project->updated_at,
                'deleted_at' => $project->deleted_at,
            ];
        });
        
        return response()->json($projects);
    }

    // ✅ Store new project
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'client_name' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'status' => 'required|in:active,inactive',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
        }

        $project = Project::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imagePath,
            'client_name' => $request->client_name,
            'category' => $request->category,
            'status' => $request->status,
        ]);

        // Return the project with image_url
        $projectData = $project->toArray();
        $projectData['image_url'] = $project->image_url;

        return response()->json([
            'status' => true,
            'message' => 'Project created successfully',
            'data' => $projectData
        ]);
    }

    // ✅ Update project
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'client_name' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'status' => 'sometimes|in:active,inactive',
        ]);

        $updateData = $request->only([
            'title', 'description', 'client_name', 'category', 'status'
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            if ($project->image && Storage::disk('public')->exists($project->image)) {
                Storage::disk('public')->delete($project->image);
            }

            // Store new image
            $updateData['image'] = $request->file('image')->store('projects', 'public');
        }

        $project->update($updateData);

        // Return the updated project with image_url
        $projectData = $project->fresh()->toArray();
        $projectData['image_url'] = $project->image_url;

        return response()->json([
            'status' => true,
            'message' => 'Project updated successfully',
            'data' => $projectData
        ]);
    }

    // ✅ Delete project (Soft delete)
    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return response()->json([
            'status' => true,
            'message' => 'Project deleted successfully'
        ]);
    }
}