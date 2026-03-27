import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import MyTable from "@/MyTable/MyTable";
import axios from "axios";
import { RefreshCw, Plus } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

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

    const columns = useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "User Name", accessor: "name" },
            { Header: "IP Address", accessor: "ip_address" },
            { Header: "Activity", accessor: "title" },
            {
                Header: "Date & Time",
                accessor: "created_at",
                Cell: ({ value }) => formatDate(value),
            },
        ],
        []
    );

    const tableData = useMemo(() => allLog, [allLog]);

 

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
                        <MyTable columns={columns} data={tableData} />
                    )}
                </div>
            </AdminWrapper>
        </>
    );
};

ActivityLog.layout = (page) => page;

export default ActivityLog;
