<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Changed from 'name' to 'title' to match controller
            $table->longText('description')->nullable();
            $table->string('image')->nullable();
            $table->string('client_name')->nullable();
            $table->string('category')->nullable();
            $table->string('status')->default('active'); // Added status field
            $table->string('slug')->unique()->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};