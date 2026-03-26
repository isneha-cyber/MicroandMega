<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (!Schema::hasColumn('projects', 'name')) {
                $table->string('name')->nullable()->after('title');
            }
            if (!Schema::hasColumn('projects', 'description')) {
                $table->longText('description')->nullable()->after('name');
            }
            if (!Schema::hasColumn('projects', 'image')) {
                $table->string('image')->nullable()->after('description');
            }
            if (!Schema::hasColumn('projects', 'client_name')) {
                $table->string('client_name')->nullable()->after('image');
            }
            if (!Schema::hasColumn('projects', 'category')) {
                $table->string('category')->nullable()->after('client_name');
            }
            if (!Schema::hasColumn('projects', 'status')) {
                $table->string('status')->default('active')->after('category');
            }
            if (!Schema::hasColumn('projects', 'slug')) {
                $table->string('slug')->unique()->nullable()->after('status');
            }
            if (!Schema::hasColumn('projects', 'location')) {
                $table->string('location')->nullable()->after('slug');
            }
            if (!Schema::hasColumn('projects', 'rating')) {
                $table->integer('rating')->default(4)->after('location');
            }
            if (!Schema::hasColumn('projects', 'year')) {
                $table->string('year')->nullable()->after('rating');
            }
            if (!Schema::hasColumn('projects', 'contract_type')) {
                $table->string('contract_type')->nullable()->after('year');
            }
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (Schema::hasColumn('projects', 'contract_type')) {
                $table->dropColumn('contract_type');
            }
            if (Schema::hasColumn('projects', 'year')) {
                $table->dropColumn('year');
            }
            if (Schema::hasColumn('projects', 'rating')) {
                $table->dropColumn('rating');
            }
            if (Schema::hasColumn('projects', 'location')) {
                $table->dropColumn('location');
            }
            if (Schema::hasColumn('projects', 'slug')) {
                $table->dropColumn('slug');
            }
            if (Schema::hasColumn('projects', 'status')) {
                $table->dropColumn('status');
            }
            if (Schema::hasColumn('projects', 'category')) {
                $table->dropColumn('category');
            }
            if (Schema::hasColumn('projects', 'client_name')) {
                $table->dropColumn('client_name');
            }
            if (Schema::hasColumn('projects', 'image')) {
                $table->dropColumn('image');
            }
            if (Schema::hasColumn('projects', 'description')) {
                $table->dropColumn('description');
            }
            if (Schema::hasColumn('projects', 'name')) {
                $table->dropColumn('name');
            }
        });
    }
};
