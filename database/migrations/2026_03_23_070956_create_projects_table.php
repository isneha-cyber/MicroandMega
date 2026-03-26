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
            $table->string('title');
            $table->string('name')->nullable(); // Add name field for frontend compatibility
            $table->longText('description')->nullable();
            $table->string('image')->nullable();
            $table->string('client_name')->nullable();
            $table->string('category')->nullable();
            $table->string('status')->default('active');
            $table->string('slug')->unique()->nullable();
            
            // Additional fields for frontend display
            $table->string('location')->nullable();
            $table->integer('rating')->default(4);
            $table->string('year')->nullable();
            $table->string('contract_type')->nullable();
            
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
