<?php

namespace App\Mail;

use App\Models\ServiceTicket;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ServiceTicketCreatedAdminMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public ServiceTicket $ticket)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Service Ticket - '.$this->ticket->ticket_id,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.service-ticket-created-admin',
            with: [
                'ticket' => $this->ticket,
            ],
        );
    }
}
