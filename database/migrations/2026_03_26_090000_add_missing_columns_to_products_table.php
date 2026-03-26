<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (!Schema::hasColumn('products', 'category_id')) {
                $table->foreignId('category_id')->nullable()->constrained()->onDelete('set null');
            }
            if (!Schema::hasColumn('products', 'title')) {
                $table->string('title')->nullable();
            }
            if (!Schema::hasColumn('products', 'content')) {
                $table->longText('content')->nullable();
            }
            if (!Schema::hasColumn('products', 'featured_image')) {
                $table->string('featured_image')->nullable();
            }
            if (!Schema::hasColumn('products', 'status')) {
                $table->boolean('status')->default(true);
            }
            if (!Schema::hasColumn('products', 'slug')) {
                $table->string('slug')->nullable()->unique();
            }
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'slug')) {
                $table->dropColumn('slug');
            }
            if (Schema::hasColumn('products', 'status')) {
                $table->dropColumn('status');
            }
            if (Schema::hasColumn('products', 'featured_image')) {
                $table->dropColumn('featured_image');
            }
            if (Schema::hasColumn('products', 'content')) {
                $table->dropColumn('content');
            }
            if (Schema::hasColumn('products', 'title')) {
                $table->dropColumn('title');
            }
            if (Schema::hasColumn('products', 'category_id')) {
                $table->dropForeign(['category_id']);
                $table->dropColumn('category_id');
            }
        });
    }
};
