<?php

namespace App\Mail;

use App\Models\ServiceTicket;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ServiceTicketCreatedCustomerMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public ServiceTicket $ticket)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Ticket Confirmation - '.$this->ticket->ticket_id,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.service-ticket-created-customer',
            with: [
                'ticket' => $this->ticket,
                'ticketId' => $this->ticket->ticket_id,
                'name' => $this->ticket->requester_name,
                'status' => $this->ticket->status,
                'createdAt' => optional($this->ticket->created_at)?->format('M d, Y h:i A') ?? now()->format('M d, Y h:i A'),
                'subject' => $this->ticket->subject_line,
                'priority' => $this->ticket->priority_level,
                'product' => $this->ticket->product_service,
                'category' => $this->ticket->category_department,
                'description' => $this->ticket->detailed_description,
                'supportFor' => $this->ticket->request_support_for,
            ],
        );
    }
}
