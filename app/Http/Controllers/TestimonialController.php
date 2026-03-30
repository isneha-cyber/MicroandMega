<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log as LaravelLog;
use Inertia\Inertia;
use Inertia\Response;

class TestimonialController extends Controller
{
    public function index(Request $request)
    {
        $query = Testimonial::query();

        if ($request->filled('search')) {
            $s = $request->search;
            $query->where(fn($q) =>
                $q->where('client_name', 'like', "%{$s}%")
                  ->orWhere('company', 'like', "%{$s}%")
            );
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $testimonials = $query->latest()->paginate(10);
        
        if ($request->expectsJson() || $request->header('X-Requested-With') === 'XMLHttpRequest') {
            return response()->json($testimonials);
        }
        
        return Inertia::render('Admin/Testimonials/Index', [
            'testimonials' => $testimonials,
            'filters'      => $request->only(['search', 'status']),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'client_name' => 'required|string|max:255',
            'company'     => 'nullable|string|max:255',
            'message'     => 'required|string',
            'photo'       => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'rating'      => 'required|integer|min:1|max:5',
            'status'      => 'required|in:active,inactive',
        ]);

        if ($request->hasFile('photo')) {
            $data['photo'] = $request->file('photo')->store('testimonials', 'public');
        }

        $testimonial = Testimonial::create($data);

        // Log testimonial creation
        Log::create([
            'name'       => auth()->user()?->name ?? 'Guest',
            'ip_address' => $request->ip(),
            'title'      => 'Testimonial Created: ' . $testimonial->client_name,
        ]);

        if ($request->expectsJson() || $request->header('X-Requested-With') === 'XMLHttpRequest') {
            return response()->json($testimonial, 201);
        }

        return back()->with('success', 'Testimonial created successfully.');
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $data = $request->validate([
            'client_name' => 'required|string|max:255',
            'company'     => 'nullable|string|max:255',
            'message'     => 'required|string',
            'photo'       => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'rating'      => 'required|integer|min:1|max:5',
            'status'      => 'required|in:active,inactive',
        ]);

        if ($request->hasFile('photo')) {
            if ($testimonial->photo) Storage::disk('public')->delete($testimonial->photo);
            $data['photo'] = $request->file('photo')->store('testimonials', 'public');
        }

        $testimonial->update($data);

        // Log testimonial update
        Log::create([
            'name'       => auth()->user()?->name ?? 'Guest',
            'ip_address' => $request->ip(),
            'title'      => 'Testimonial Updated: ' . $testimonial->client_name,
        ]);

        if ($request->expectsJson() || $request->header('X-Requested-With') === 'XMLHttpRequest') {
            return response()->json($testimonial);
        }

        return back()->with('success', 'Testimonial updated successfully.');
    }

    public function destroy(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        // Capture client name before deletion for the log
        $clientName = $testimonial->client_name;

        if ($testimonial->photo) Storage::disk('public')->delete($testimonial->photo);
        $testimonial->delete();

        // Log testimonial deletion
        Log::create([
            'name'       => auth()->user()?->name ?? 'Guest',
            'ip_address' => $request->ip(),
            'title'      => 'Testimonial Deleted: ' . $clientName,
        ]);

        if ($request->expectsJson() || $request->header('X-Requested-With') === 'XMLHttpRequest') {
            return response()->json(['message' => 'Testimonial deleted successfully']);
        }

        return back()->with('success', 'Testimonial deleted.');
    }
}