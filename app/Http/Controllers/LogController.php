<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LogController extends Controller
{
    /**
     * Display a listing of the logs.
     */
    public function index()
    {
        // Store a log entry when someone views the logs page
        try {
            Log::create([
                'name' => auth()->check() ? auth()->user()->name : 'Guest',
                'ip_address' => request()->ip(),
                'title' => 'Viewed Activity Logs Page'
            ]);
        } catch (\Exception $e) {
            // Silent fail
        }
        
        // Get all logs
        $logs = Log::latest()->get();
        
        // Return as JSON for your React component
        return response()->json($logs);
    }
    
    /**
     * Store a new activity log.
     */
    public function store(Request $request)
    {
        try {
            $log = Log::create([
                'name' => $request->name ?? (auth()->check() ? auth()->user()->name : 'Guest'),
                'ip_address' => $request->ip() ?? request()->ip(),
                'title' => $request->title
            ]);
            
            return response()->json(['success' => true, 'log' => $log]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
    
    /**
     * Create sample logs for testing.
     */
    public function createSampleLogs()
    {
        try {
            // Clear existing logs
            Log::truncate();
            
            // Create sample logs
            $sampleLogs = [
                [
                    'name' => 'John Doe',
                    'ip_address' => '192.168.1.1',
                    'title' => 'Logged into the system',
                    'created_at' => now()->subHours(2)
                ],
                [
                    'name' => 'Jane Smith', 
                    'ip_address' => '192.168.1.2',
                    'title' => 'Updated user profile',
                    'created_at' => now()->subHours(3)
                ],
                [
                    'name' => 'Admin User',
                    'ip_address' => '192.168.1.100',
                    'title' => 'Created new product',
                    'created_at' => now()->subHours(5)
                ],
                [
                    'name' => 'Guest',
                    'ip_address' => '192.168.1.50',
                    'title' => 'Visited homepage',
                    'created_at' => now()->subHours(6)
                ],
                [
                    'name' => 'Michael Chen',
                    'ip_address' => '192.168.1.75',
                    'title' => 'Deleted old records',
                    'created_at' => now()->subHours(8)
                ],
                [
                    'name' => 'Sarah Johnson',
                    'ip_address' => '192.168.1.90',
                    'title' => 'Exported data report',
                    'created_at' => now()->subHours(10)
                ]
            ];
            
            foreach ($sampleLogs as $log) {
                Log::create($log);
            }
            
            return response()->json(['success' => true, 'message' => 'Sample logs created successfully']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
}