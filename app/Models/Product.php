<?php
// app/Models/Product.php

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
        'image',           // Make sure this matches your database column
        'category',
        'slug',
        'title',
        'content',
        'featured_image',
        'category_id',
        'status'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($product) {
            $randomNumber = rand(10000, 99999);
            $product->slug = Str::slug($product->name) . '-' . $randomNumber;
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
}