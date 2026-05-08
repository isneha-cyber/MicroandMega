<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ticket Confirmation - {{ $ticketId }}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f4f6f9;
            color: #333;
            -webkit-font-smoothing: antialiased;
        }

        .wrapper {
            max-width: 620px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .header {
            background: linear-gradient(135deg, #1a56db 0%, #1e429f 100%);
            padding: 36px 40px 28px;
            text-align: center;
        }

        .header .brand {
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: rgba(255,255,255,0.75);
            margin-bottom: 10px;
        }

        .header h1 {
            font-size: 26px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.3;
        }

        .header .ticket-badge {
            display: inline-block;
            margin-top: 14px;
            background: rgba(255,255,255,0.15);
            border: 1px solid rgba(255,255,255,0.3);
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            padding: 6px 18px;
            border-radius: 50px;
            letter-spacing: 0.5px;
        }

        .body {
            padding: 36px 40px;
        }

        .greeting {
            font-size: 17px;
            font-weight: 600;
            color: #1a1a2e;
            margin-bottom: 10px;
        }

        .intro {
            font-size: 14.5px;
            color: #555;
            line-height: 1.7;
            margin-bottom: 28px;
        }

        .status-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 28px;
        }

        .status-label {
            font-size: 13px;
            color: #888;
            font-weight: 500;
        }

        .status-pill {
            display: inline-block;
            padding: 4px 14px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .status-open { background: #dcfce7; color: #16a34a; }
        .status-in_progress { background: #fef3c7; color: #b45309; }
        .status-resolved { background: #dbeafe; color: #1d4ed8; }
        .status-closed { background: #f1f5f9; color: #64748b; }

        .detail-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 28px;
        }

        .detail-card .card-header {
            background: #f1f5f9;
            padding: 12px 18px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #64748b;
            border-bottom: 1px solid #e2e8f0;
        }

        .detail-row {
            display: flex;
            padding: 13px 18px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 14px;
        }

        .detail-row:last-child { border-bottom: none; }

        .detail-row .key {
            width: 42%;
            color: #64748b;
            font-weight: 500;
            flex-shrink: 0;
        }

        .detail-row .value {
            color: #1e293b;
            font-weight: 600;
            word-break: break-word;
        }

        .priority-high { color: #dc2626; }
        .priority-medium { color: #d97706; }
        .priority-low { color: #16a34a; }

        .description-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 18px;
            margin-bottom: 28px;
        }

        .description-box .box-label,
        .tags-box .box-label {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #64748b;
            margin-bottom: 10px;
        }

        .description-box p {
            font-size: 14px;
            color: #334155;
            line-height: 1.75;
            white-space: pre-line;
        }

        .tags-box { margin-bottom: 28px; }

        .tag {
            display: inline-block;
            background: #eff6ff;
            color: #1d4ed8;
            border: 1px solid #bfdbfe;
            border-radius: 50px;
            padding: 4px 12px;
            font-size: 12.5px;
            font-weight: 500;
            margin: 3px 3px 3px 0;
        }

        .notice {
            background: #eff6ff;
            border-left: 4px solid #3b82f6;
            border-radius: 6px;
            padding: 14px 18px;
            font-size: 13.5px;
            color: #1e40af;
            line-height: 1.65;
            margin-bottom: 28px;
        }

        .footer {
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 24px 40px;
            text-align: center;
        }

        .footer p {
            font-size: 12.5px;
            color: #94a3b8;
            line-height: 1.7;
        }

        .footer .company {
            font-weight: 700;
            color: #64748b;
        }

        @media (max-width: 600px) {
            .wrapper { margin: 0; border-radius: 0; }
            .header, .body, .footer { padding: 24px 20px; }
            .detail-row { flex-direction: column; gap: 3px; }
            .detail-row .key { width: 100%; }
        }
    </style>
</head>
<body>
<div class="wrapper">
    <div class="header">
        <div class="brand">Support Centre</div>
        <h1>We've received your request</h1>
        <span class="ticket-badge">{{ $ticketId }}</span>
    </div>

    <div class="body">
        <p class="greeting">Hi {{ $name }},</p>
        <p class="intro">
            Thank you for reaching out. Your support ticket has been successfully submitted
            and our team will review it shortly. You can track the progress of your request
            using the ticket ID above.
        </p>

        <div class="status-row">
            <span class="status-label">Current status:</span>
            <span class="status-pill status-{{ $status }}">
                {{ ucfirst(str_replace('_', ' ', $status)) }}
            </span>
        </div>

        <div class="detail-card">
            <div class="card-header">Ticket Details</div>

            <div class="detail-row">
                <span class="key">Ticket ID</span>
                <span class="value">{{ $ticketId }}</span>
            </div>

            <div class="detail-row">
                <span class="key">Submitted On</span>
                <span class="value">{{ $createdAt }}</span>
            </div>

            <div class="detail-row">
                <span class="key">Subject</span>
                <span class="value">{{ $subject }}</span>
            </div>

            <div class="detail-row">
                <span class="key">Priority</span>
                <span class="value priority-{{ strtolower($priority) }}">
                    {{ ucfirst($priority) }}
                </span>
            </div>

            <div class="detail-row">
                <span class="key">Product / Service</span>
                <span class="value">{{ $product }}</span>
            </div>

            <div class="detail-row">
                <span class="key">Category / Department</span>
                <span class="value">{{ $category }}</span>
            </div>
        </div>

        <div class="description-box">
            <div class="box-label">Your Description</div>
            <p>{{ $description }}</p>
        </div>

        @if (!empty($supportFor))
            <div class="tags-box">
                <div class="box-label">Requested Support For</div>
                @if (is_array($supportFor))
                    @foreach ($supportFor as $item)
                        <span class="tag">{{ $item }}</span>
                    @endforeach
                @else
                    <span class="tag">{{ $supportFor }}</span>
                @endif
            </div>
        @endif

        <div class="notice">
            A member of our support team will respond to this ticket within
            <strong>1-2 business days</strong>. Please do not reply to this email.
            All updates will be sent to <strong>{{ $ticket->email }}</strong>.
        </div>
    </div>

    <div class="footer">
        <p>
            This is an automated confirmation from
            <span class="company">{{ config('app.name') }}</span>.<br />
            If you did not submit this request, please contact us immediately.<br /><br />
            &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
        </p>
    </div>
</div>
</body>
</html>
