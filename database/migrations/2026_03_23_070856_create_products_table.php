<?php
// database/migrations/2024_01_01_000003_update_products_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('category_id')->nullable()->constrained()->onDelete('set null');
            $table->string('title')->nullable();
            $table->longText('content')->nullable();
            $table->string('featured_image')->nullable();
            $table->boolean('status')->default(true);
            
            // Remove old category column if exists
            if (Schema::hasColumn('products', 'category')) {
                $table->dropColumn('category');
            }
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropColumn(['category_id', 'title', 'content', 'featured_image', 'status']);
            $table->string('category')->nullable();
        });
    }
};