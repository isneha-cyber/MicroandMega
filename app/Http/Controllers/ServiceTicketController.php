<?php

namespace App\Http\Controllers;

use App\Models\ServiceTicket;
use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log as LaravelLog;
use Illuminate\Support\Facades\Storage;

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
            LaravelLog::error('Error fetching service tickets: ' . $e->getMessage());
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
                'requesterName'       => 'required|string|max:255',
                'email'               => 'required|email|max:255',
                'priorityLevel'       => 'required|string|max:50',
                'productService'      => 'required|string|max:255',
                'categoryDepartment'  => 'required|string|max:255',
                'subjectLine'         => 'required|string|max:255',
                'detailedDescription' => 'required|string',
                'requestSupportFor'   => 'required',
                'attachment'          => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
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
                    LaravelLog::warning('Skipping invalid attachment upload.');
                }
            }

            $ticket = ServiceTicket::create([
                'ticket_id'            => $ticketId,
                'requester_name'       => $validated['requesterName'],
                'email'                => $validated['email'],
                'priority_level'       => $validated['priorityLevel'],
                'product_service'      => $validated['productService'],
                'category_department'  => $validated['categoryDepartment'],
                'subject_line'         => $validated['subjectLine'],
                'detailed_description' => $validated['detailedDescription'],
                'request_support_for'  => $supportFor,
                'attachments'          => $storedAttachments,
                'status'               => 'open',
            ]);

            // Log ticket creation
            Log::create([
'name' => $ticket->requester_name,  
                'ip_address' => $request->ip(),
                'title'      => 'Service Ticket Created: ' . $ticket->ticket_id . ' - ' . $ticket->subject_line,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Service ticket created successfully',
                'data' => $ticket,
            ], 201);
        } catch (\Exception $e) {
            LaravelLog::error('Error creating service ticket: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error creating service ticket: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $ticket = ServiceTicket::findOrFail($id);

            $validated = $request->validate([
                'requesterName'       => 'sometimes|string|max:255',
                'email'               => 'sometimes|email|max:255',
                'priorityLevel'       => 'sometimes|string|max:50',
                'productService'      => 'sometimes|string|max:255',
                'categoryDepartment'  => 'sometimes|string|max:255',
                'subjectLine'         => 'sometimes|string|max:255',
                'detailedDescription' => 'sometimes|string',
                'requestSupportFor'   => 'sometimes',
                'status'              => 'sometimes|string|in:open,in_progress,resolved,closed',
                'attachment'          => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
            ]);

            $updateData = [];

            if (isset($validated['requesterName']))       $updateData['requester_name']       = $validated['requesterName'];
            if (isset($validated['email']))               $updateData['email']                = $validated['email'];
            if (isset($validated['priorityLevel']))       $updateData['priority_level']       = $validated['priorityLevel'];
            if (isset($validated['productService']))      $updateData['product_service']      = $validated['productService'];
            if (isset($validated['categoryDepartment']))  $updateData['category_department']  = $validated['categoryDepartment'];
            if (isset($validated['subjectLine']))         $updateData['subject_line']         = $validated['subjectLine'];
            if (isset($validated['detailedDescription'])) $updateData['detailed_description'] = $validated['detailedDescription'];
            if (isset($validated['status']))              $updateData['status']               = $validated['status'];

            if (isset($validated['requestSupportFor'])) {
                $supportFor = $validated['requestSupportFor'];
                if (is_string($supportFor)) {
                    $decoded = json_decode($supportFor, true);
                    if (json_last_error() === JSON_ERROR_NONE) {
                        $supportFor = $decoded;
                    }
                }
                $updateData['request_support_for'] = $supportFor;
            }

            if ($request->hasFile('attachment')) {
                $file = $request->file('attachment');
                if ($file && $file->isValid()) {
                    $existingAttachments = $ticket->attachments ?? [];
                    $existingAttachments[] = $file->store('service-tickets', 'public');
                    $updateData['attachments'] = $existingAttachments;
                } else {
                    LaravelLog::warning('Skipping invalid attachment upload on update.');
                }
            }

            $ticket->update($updateData);

            // Log ticket update
            Log::create([
                'name'       => auth()->user()?->name ?? $ticket->requester_name,
                'ip_address' => $request->ip(),
                'title'      => 'Service Ticket Updated: ' . $ticket->ticket_id . ' - ' . $ticket->subject_line,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Service ticket updated successfully',
                'data' => $ticket->fresh(),
            ]);
        } catch (\Exception $e) {
            LaravelLog::error('Error updating service ticket: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error updating service ticket: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function destroy(Request $request, $id)
    {
        try {
            $ticket = ServiceTicket::findOrFail($id);

            // Capture details before deletion for the log
            $ticketId      = $ticket->ticket_id;
            $subjectLine   = $ticket->subject_line;
            $requesterName = $ticket->requester_name;

            // Delete stored attachments from storage
            if (!empty($ticket->attachments)) {
                foreach ($ticket->attachments as $attachment) {
                    if (Storage::disk('public')->exists($attachment)) {
                        Storage::disk('public')->delete($attachment);
                    }
                }
            }

            $ticket->delete();

            // Log ticket deletion
            Log::create([
                'name'       => auth()->user()?->name ?? $requesterName,
                'ip_address' => $request->ip(),
                'title'      => 'Service Ticket Deleted: ' . $ticketId . ' - ' . $subjectLine,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Service ticket deleted successfully',
            ]);
        } catch (\Exception $e) {
            LaravelLog::error('Error deleting service ticket: ' . $e->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Error deleting service ticket: ' . $e->getMessage(),
            ], 500);
        }
    }
}