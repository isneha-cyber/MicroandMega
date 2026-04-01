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
        'name',
        'description',
        'image',
        'client_name',
        'category',
        'status',
        'slug',
        'location',
        'rating',
        'year',
        'contract_type',
    ];

    protected $casts = [
        'rating' => 'integer',
    ];

    // Add accessor for image URL
    // public function getImageUrlAttribute()
    // {
    //     if ($this->image && Storage::disk('public')->exists($this->image)) {
    //         return asset('storage/' . $this->image);
    //     }
    //     return null;
    // }

    public function getImageUrlAttribute(): ?string
{
    return $this->image ?? null;
}
    // Set default values if not provided
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            // Set name from title if not provided
            if (!$project->name) {
                $project->name = $project->title;
            }
            
            // Generate slug before creating
            $slug = Str::slug($project->title);
            $count = static::where('slug', 'LIKE', "{$slug}%")->count();
            $project->slug = $count ? "{$slug}-{$count}" : $slug;
            
            // Set default year if not provided
            if (!$project->year) {
                $project->year = date('Y');
            }
            
            // Set default contract type if not provided
            if (!$project->contract_type) {
                $project->contract_type = 'Full Project';
            }
            
            // Set default location if not provided
            if (!$project->location) {
                $project->location = 'Various Locations';
            }
            
            // Set default rating if not provided
            if (!$project->rating) {
                $project->rating = 4;
            }
            
        });

        static::created(function ($project) {
            // Update slug with ID if needed
            $slug = Str::slug($project->title) . '-' . $project->id;
            $project->slug = $slug;
            $project->saveQuietly();
        });
        
        static::updating(function ($project) {
            // Update name when title changes
            if ($project->isDirty('title') && !$project->isDirty('name')) {
                $project->name = $project->title;
            }
        });
    }
}
