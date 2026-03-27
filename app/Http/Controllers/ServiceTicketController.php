<?php

namespace App\Http\Controllers;

use App\Models\ServiceTicket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ServiceTicketController extends Controller
{
    public function index()
    {
        try {
            $tickets = ServiceTicket::latest()->get();

            return response()->json([
                'status' => true,
                'data' => $tickets,
                'message' => 'Service tickets fetched successfully',
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching service tickets: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error fetching service tickets: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'requesterName' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'priorityLevel' => 'required|string|max:50',
                'productService' => 'required|string|max:255',
                'categoryDepartment' => 'required|string|max:255',
                'subjectLine' => 'required|string|max:255',
                'detailedDescription' => 'required|string',
                'requestSupportFor' => 'required',
                'attachment' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
            ]);

            $ticketId = '#TK-' . random_int(1000, 9999);

            $supportFor = $validated['requestSupportFor'];
            if (is_string($supportFor)) {
                $decoded = json_decode($supportFor, true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    $supportFor = $decoded;
                }
            }

            $storedAttachments = [];
            if ($request->hasFile('attachment')) {
                $file = $request->file('attachment');
                if ($file && $file->isValid()) {
                    $storedAttachments[] = $file->store('service-tickets', 'public');
                } else {
                    Log::warning('Skipping invalid attachment upload.');
                }
            }

            $ticket = ServiceTicket::create([
                'ticket_id' => $ticketId,
                'requester_name' => $validated['requesterName'],
                'email' => $validated['email'],
                'priority_level' => $validated['priorityLevel'],
                'product_service' => $validated['productService'],
                'category_department' => $validated['categoryDepartment'],
                'subject_line' => $validated['subjectLine'],
                'detailed_description' => $validated['detailedDescription'],
                'request_support_for' => $supportFor,
                'attachments' => $storedAttachments,
                'status' => 'open',
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Service ticket created successfully',
                'data' => $ticket,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creating service ticket: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error creating service ticket: ' . $e->getMessage(),
            ], 500);
        }
    }
}
