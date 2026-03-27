<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('service_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('ticket_id')->unique();
            $table->string('requester_name');
            $table->string('email');
            $table->string('priority_level');
            $table->string('product_service');
            $table->string('category_department');
            $table->string('subject_line');
            $table->text('detailed_description');
            $table->json('request_support_for')->nullable();
            $table->json('attachments')->nullable();
            $table->string('status')->default('open');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('service_tickets');
    }
};
