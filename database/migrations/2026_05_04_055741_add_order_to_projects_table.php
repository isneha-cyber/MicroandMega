<?php
// database/migrations/2026_05_04_000001_add_order_to_projects_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            // Add order column after rating (keep rating for display only)
            $table->integer('order')->default(0)->after('rating');
            // Add index for faster sorting
            $table->index('order');
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('order');
            $table->dropIndex(['order']);
        });
    }
};