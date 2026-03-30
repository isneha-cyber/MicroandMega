<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            if (!Schema::hasColumn('categories', 'title')) {
                $table->string('title')->nullable()->after('description');
            }
            if (!Schema::hasColumn('categories', 'content')) {
                $table->longText('content')->nullable()->after('title');
            }
            if (!Schema::hasColumn('categories', 'icon_image')) {
                $table->string('icon_image')->nullable()->after('content');
            }
            if (!Schema::hasColumn('categories', 'featured_image')) {
                $table->string('featured_image')->nullable()->after('icon_image');
            }
            if (!Schema::hasColumn('categories', 'status')) {
                $table->boolean('status')->default(true)->after('featured_image');
            }
        });

        if (Schema::hasColumn('categories', 'icon') && Schema::hasColumn('categories', 'icon_image')) {
            DB::table('categories')
                ->whereNull('icon_image')
                ->update(['icon_image' => DB::raw('icon')]);
        }

        if (Schema::hasColumn('categories', 'is_active') && Schema::hasColumn('categories', 'status')) {
            DB::table('categories')
                ->whereNull('status')
                ->orWhere('status', '=', 0)
                ->update(['status' => DB::raw('is_active')]);
        }
    }

    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            if (Schema::hasColumn('categories', 'status')) {
                $table->dropColumn('status');
            }
            if (Schema::hasColumn('categories', 'featured_image')) {
                $table->dropColumn('featured_image');
            }
            if (Schema::hasColumn('categories', 'icon_image')) {
                $table->dropColumn('icon_image');
            }
            if (Schema::hasColumn('categories', 'content')) {
                $table->dropColumn('content');
            }
            if (Schema::hasColumn('categories', 'title')) {
                $table->dropColumn('title');
            }
        });
    }
};
