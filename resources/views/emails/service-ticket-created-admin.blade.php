<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Service Ticket - {{ $ticket->ticket_id }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f7fb;
            color: #1f2937;
            margin: 0;
            padding: 24px;
        }

        .card {
            max-width: 720px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            overflow: hidden;
        }

        .header {
            background: #0f172a;
            color: #ffffff;
            padding: 24px 28px;
        }

        .header h1 {
            margin: 0 0 8px;
            font-size: 24px;
        }

        .header p {
            margin: 0;
            color: #cbd5e1;
            font-size: 14px;
        }

        .body {
            padding: 28px;
        }

        .grid {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
        }

        .grid td {
            padding: 12px 0;
            border-bottom: 1px solid #e5e7eb;
            vertical-align: top;
            font-size: 14px;
        }

        .label {
            width: 220px;
            color: #64748b;
            font-weight: 600;
        }

        .value {
            color: #0f172a;
        }

        .section-title {
            margin: 0 0 10px;
            font-size: 12px;
            font-weight: 700;
            color: #64748b;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 16px;
            margin-bottom: 20px;
        }

        .box p {
            margin: 0;
            white-space: pre-line;
            line-height: 1.7;
        }

        .tag {
            display: inline-block;
            margin: 0 8px 8px 0;
            padding: 6px 10px;
            background: #e0f2fe;
            color: #075985;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h1>New Service Ticket</h1>
            <p>{{ $ticket->ticket_id }} was submitted by {{ $ticket->requester_name }}.</p>
        </div>

        <div class="body">
            <table class="grid">
                <tr>
                    <td class="label">Ticket ID</td>
                    <td class="value">{{ $ticket->ticket_id }}</td>
                </tr>
                <tr>
                    <td class="label">Requester</td>
                    <td class="value">{{ $ticket->requester_name }}</td>
                </tr>
                <tr>
                    <td class="label">Email</td>
                    <td class="value">{{ $ticket->email }}</td>
                </tr>
                <tr>
                    <td class="label">Priority</td>
                    <td class="value">{{ $ticket->priority_level }}</td>
                </tr>
                <tr>
                    <td class="label">Product / Service</td>
                    <td class="value">{{ $ticket->product_service }}</td>
                </tr>
                <tr>
                    <td class="label">Category / Department</td>
                    <td class="value">{{ $ticket->category_department }}</td>
                </tr>
                <tr>
                    <td class="label">Subject</td>
                    <td class="value">{{ $ticket->subject_line }}</td>
                </tr>
                <tr>
                    <td class="label">Status</td>
                    <td class="value">{{ ucfirst(str_replace('_', ' ', $ticket->status)) }}</td>
                </tr>
                <tr>
                    <td class="label">Submitted At</td>
                    <td class="value">{{ optional($ticket->created_at)?->format('M d, Y h:i A') ?? now()->format('M d, Y h:i A') }}</td>
                </tr>
            </table>

            <div class="box">
                <div class="section-title">Detailed Description</div>
                <p>{{ $ticket->detailed_description }}</p>
            </div>

            @if (!empty($ticket->request_support_for))
                <div class="box">
                    <div class="section-title">Requested Support For</div>
                    @foreach ((array) $ticket->request_support_for as $item)
                        <span class="tag">{{ $item }}</span>
                    @endforeach
                </div>
            @endif

            @if (!empty($ticket->attachments))
                <div class="box">
                    <div class="section-title">Attachments</div>
                    @foreach ((array) $ticket->attachments as $attachment)
                        <p>{{ $attachment }}</p>
                    @endforeach
                </div>
            @endif
        </div>
    </div>
</body>
</html>
