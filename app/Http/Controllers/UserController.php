<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Format user data with proper image URL
     */
    private function formatUserWithImageUrl($user)
    {
        if ($user->image) {
            if (filter_var($user->image, FILTER_VALIDATE_URL)) {
                $user->image_url = $user->image;
            } else {
                $user->image_url = asset('storage/' . $user->image);
            }
        } else {
            $user->image_url = null;
        }
        
        return $user;
    }

    /**
     * Display a listing of the users.
     */
    public function index()
    {
        $users = User::all();
        
        $users->transform(function ($user) {
            return $this->formatUserWithImageUrl($user);
        });
        
        return response()->json($users);
    }

    /**
     * Store a newly created user in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'image'    => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('users', 'public');
        }

        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
            'image'    => $imagePath,
        ]);

        // Log user creation
        Log::create([
            'name'       => Auth::check() ? Auth::user()->name : 'Guest',
            'ip_address' => $request->ip(),
            'title'      => 'User Created: ' . $user->name,
        ]);

        $user = $this->formatUserWithImageUrl($user);

        return response()->json([
            'message' => 'User created successfully',
            'user'    => $user,
        ], 201);
    }

    /**
     * Update the specified user in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name'     => 'sometimes|string|max:255',
            'email'    => 'sometimes|email|unique:users,email,' . $user->id,
            'password' => 'sometimes|string|min:6|nullable',
            'image'    => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($user->image && Storage::disk('public')->exists($user->image)) {
                Storage::disk('public')->delete($user->image);
            }
            $validated['image'] = $request->file('image')->store('users', 'public');
        }

        if (!empty($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $user->update($validated);

        // Log user update
        Log::create([
            'name'       => Auth::check() ? Auth::user()->name : 'Guest',
            'ip_address' => $request->ip(),
            'title'      => 'User Updated: ' . $user->name,
        ]);

        $user = $this->formatUserWithImageUrl($user);

        return response()->json([
            'message' => 'User updated successfully',
            'user'    => $user,
        ]);
    }

    /**
     * Remove the specified user from storage.
     */
    public function destroy(Request $request, $id)
    {
        $user = User::findOrFail($id);

        // Capture name before deletion for the log
        $userName = $user->name;

        if ($user->image && Storage::disk('public')->exists($user->image)) {
            Storage::disk('public')->delete($user->image);
        }

        $user->delete();

        // Log user deletion
        Log::create([
            'name'       => Auth::check() ? Auth::user()->name : 'Guest',
            'ip_address' => $request->ip(),
            'title'      => 'User Deleted: ' . $userName,
        ]);

        return response()->json([
            'message' => 'User deleted successfully',
        ]);
    }

    /**
     * Display the specified user.
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        $user = $this->formatUserWithImageUrl($user);
        return response()->json($user);
    }
}