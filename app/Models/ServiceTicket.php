<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTicket extends Model
{
    use HasFactory;

    protected $fillable = [
        'ticket_id',
        'requester_name',
        'email',
        'priority_level',
        'product_service',
        'category_department',
        'subject_line',
        'detailed_description',
        'request_support_for',
        'attachments',
        'status',
    ];

    protected $casts = [
        'request_support_for' => 'array',
        'attachments' => 'array',
    ];
}
