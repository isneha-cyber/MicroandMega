<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class TestimonialController extends Controller
{
    public function index(Request $request): Response
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

        return Inertia::render('Admin/Testimonials/Index', [
            'testimonials' => $query->latest()->paginate(10)->withQueryString(),
            'filters'      => $request->only(['search', 'status']),
        ]);
    }

    public function store(Request $request): RedirectResponse
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

        Testimonial::create($data);

        return back()->with('success', 'Testimonial created successfully.');
    }

    public function update(Request $request, Testimonial $testimonial): RedirectResponse
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
            if ($testimonial->photo) Storage::disk('public')->delete($testimonial->photo);
            $data['photo'] = $request->file('photo')->store('testimonials', 'public');
        }

        $testimonial->update($data);

        return back()->with('success', 'Testimonial updated successfully.');
    }

    public function destroy(Testimonial $testimonial): RedirectResponse
    {
        if ($testimonial->photo) Storage::disk('public')->delete($testimonial->photo);
        $testimonial->delete();

        return back()->with('success', 'Testimonial deleted.');
    }
}