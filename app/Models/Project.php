<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'image',
        'client_name',
        'category',
        'status',
        'slug',
    ];

    // Add accessor for image URL
    public function getImageUrlAttribute()
    {
        if ($this->image && Storage::disk('public')->exists($this->image)) {
            return asset('storage/' . $this->image);
        }
        return null;
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            // Generate slug before creating
            $slug = Str::slug($project->title);
            $count = static::where('slug', 'LIKE', "{$slug}%")->count();
            $project->slug = $count ? "{$slug}-{$count}" : $slug;
        });

        static::created(function ($project) {
            // Update slug with ID if needed
            $slug = Str::slug($project->title) . '-' . $project->id;
            $project->slug = $slug;
            $project->saveQuietly();
        });
    }
}