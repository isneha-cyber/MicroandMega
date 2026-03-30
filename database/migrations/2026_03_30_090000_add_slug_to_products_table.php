<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
   public function up(): void
{
    Schema::table('products', function (Blueprint $table) {
        $table->foreignId('product_category_id')
              ->nullable()
              ->constrained('product_categories')
              ->nullOnDelete();
    });
}

public function down(): void
{
    Schema::table('products', function (Blueprint $table) {
        $table->dropForeignIdFor(\App\Models\ProductCategory::class);
        $table->dropColumn('product_category_id');
    });
}
};
