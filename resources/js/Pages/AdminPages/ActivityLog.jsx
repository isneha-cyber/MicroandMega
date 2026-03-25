import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import axios from "axios";
import { RefreshCw, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const ActivityLog = () => {
    const [allLog, setAllLog] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [creatingSample, setCreatingSample] = useState(false);

    // For fetching the log data
    useEffect(() => {
        const fetchLog = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/logs');
                setAllLog(response.data);
                setError(null);
            } catch (error) {
                console.error("fetching error ", error);
                setError("Failed to fetch activity logs. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchLog();
    }, [reloadTrigger]);

    // Function to format date
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleString();
    };

 

    return (
        <>
            <AdminWrapper>
                <div className="container mx-auto py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-4xl font-bold leading-relaxed text-stone-800 uppercase">
                                Activity Logs
                            </h1>
                            <p className="text-gray-600 mt-2">Track all user activities and system events</p>
                        </div>
                    
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <div className="text-gray-500">Loading activity logs...</div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    {/* No Data State */}
                    {!loading && !error && allLog.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No activity logs found.</p>
                            <p className="text-sm text-gray-400 mt-2">
                                Click "Create Sample Logs" to add test data, or "Add Manual Log" to create your own.
                            </p>
                        </div>
                    )}

                    {/* Logs Table */}
                    {!loading && !error && allLog.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            User Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            IP Address
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Activity
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date & Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {allLog.map((log) => (
                                        <tr key={log.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {log.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {log.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {log.ip_address}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {log.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {formatDate(log.created_at)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </AdminWrapper>
        </>
    );
};

ActivityLog.layout = (page) => page;

export default ActivityLog;
