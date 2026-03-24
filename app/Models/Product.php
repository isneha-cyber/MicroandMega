<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'image',
        'category',
        'slug'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($product) {
            $randomNumber = rand(10000, 99999);
            $product->slug = Str::slug($product->name) . '-' . $randomNumber;
        });
        
        // Also handle updating to prevent slug issues
        static::updating(function ($product) {
            if ($product->isDirty('name')) {
                $randomNumber = rand(10000, 99999);
                $product->slug = Str::slug($product->name) . '-' . $randomNumber;
            }
        });
    }
}