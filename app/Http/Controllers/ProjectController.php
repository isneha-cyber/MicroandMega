<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log as LaravelLog;

class ProjectController extends Controller
{
    // ✅ Get all projects with pagination and filtering

// ✅ Inertia page render with SEO props
public function showPage($slug)
{
    try {
        $project = Project::where('slug', $slug)
            ->where('status', 'active')
            ->firstOrFail();

        $formatted = $this->formatProjectData($project);

        return \Inertia\Inertia::render('ProjectDetailPage', [
            'slug'    => $slug,
            'project' => $formatted,
            'seo'     => [
                'title'       => ($project->title ?: $project->name) . ' | Micro & Mega',
                'description' => $project->description
                                    ? \Illuminate\Support\Str::limit($project->description, 155)
                                    : 'View project details for ' . $project->name . ' by Micro & Mega Nepal.',
                'url'         => url("/project-details/{$slug}"),
                'image'       => $project->image
                                    ? env('VITE_IMAGE_PATH') . '/' . $project->image
                                    : url('/images/og-image.jpg'),
            ],
        ]);
    } catch (\Exception $e) {
        abort(404);
    }
}


    public function index(Request $request)
    {
        try {
            $query = Project::query();
            
            if ($request->has('search') && !empty($request->search)) {
                $search = $request->search;
                $query->where(function($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('name', 'like', "%{$search}%")
                      ->orWhere('client_name', 'like', "%{$search}%")
                      ->orWhere('category', 'like', "%{$search}%");
                });
            }
            
            if ($request->has('category') && !empty($request->category) && $request->category !== 'All') {
                $query->where('category', $request->category);
            }
            
            if ($request->has('status') && !empty($request->status)) {
                // Allow "all" to return both active and inactive (used by admin page)
                if ($request->status !== 'all') {
                    $query->where('status', $request->status);
                }
            } else {
                // Default to active for public listings
                $query->where('status', 'active');
            }
            
            $perPage = $request->get('per_page', 10);
            $projects = $query->latest()->paginate($perPage);
            
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
                'client_name' => 'nullable|string|max:255',
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
                'client_name' => $request->client_name,
                'category' => $request->category,
                'status' => $request->status,
                'location' => $request->location,
                'rating' => $request->rating ?? 4,
                'year' => $request->year,
                'contract_type' => $request->contract_type,
            ]);

            // Log project creation
            Log::create([
                'name' => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title' => 'Project Created: ' . $project->title,
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
                'client_name' => 'nullable|string|max:255',
                'category' => 'nullable|string|max:255',
                'status' => 'sometimes|in:active,inactive',
                'location' => 'nullable|string|max:255',
                'rating' => 'nullable|integer|min:1|max:5',
                'year' => 'nullable|string|max:4',
                'contract_type' => 'nullable|string|max:255',
            ]);

            $updateData = $request->only([
                'title', 'name', 'description', 'category', 
                'status', 'location', 'rating', 'year', 'contract_type',
                'client_name'
            ]);

            if ($request->has('title') && !$request->has('name')) {
                $updateData['name'] = $request->title;
            }

            if ($request->hasFile('image')) {
                if ($project->image && Storage::disk('public')->exists($project->image)) {
                    Storage::disk('public')->delete($project->image);
                }
                $updateData['image'] = $request->file('image')->store('projects', 'public');
            }

            $project->update($updateData);

            // Log project update
            Log::create([
                'name' => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title' => 'Project Updated: ' . $project->title,
            ]);

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

    // ✅ Delete project
    public function destroy(Request $request, $id)
    {
        try {
            $project = Project::findOrFail($id);

            // Capture title before deletion for the log
            $projectTitle = $project->title;

            $project->delete();

            // Log project deletion
            Log::create([
                'name' => auth()->user()?->name ?? 'Guest',
                'ip_address' => $request->ip(),
                'title' => 'Project Deleted: ' . $projectTitle,
            ]);

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
            'client_name' => $project->client_name,
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
