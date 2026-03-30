import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import MyTable from "@/MyTable/MyTable";
import axios from "axios";
import { Eye } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

const PRIORITY_OPTIONS = [
	"All",
	"Low",
	"Medium",
	"High",
	"Urgent"
];

const STATUS_OPTIONS = ["open", "in_progress", "resolved", "closed"];

const STATUS_STYLES = {
	open: "bg-blue-100 text-blue-700",
	in_progress: "bg-yellow-100 text-yellow-700",
	resolved: "bg-green-100 text-green-700",
	closed: "bg-gray-100 text-gray-600"
};

const STATUS_LABELS = {
	open: "Open",
	in_progress: "In Progress",
	resolved: "Resolved",
	closed: "Closed"
};

const ServiceTicket = () => {
	const [tickets, setTickets] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openTicket, setOpenTicket] = useState(null);
	const [priorityFilter, setPriorityFilter] = useState("All");
	const [updatingStatus, setUpdatingStatus] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState("");
	
	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (openTicket) {
			const scrollY = window.scrollY;

			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.width = '100%';
			document.body.style.overflow = 'hidden';

			return () => {
				document.body.style.position = '';
				document.body.style.top = '';
				document.body.style.width = '';
				document.body.style.overflow = '';
				window.scrollTo(0, scrollY);
			};
		}
	}, [openTicket]);

	useEffect(() => {
		const fetchTickets = async () => {
			try {
				const response = await axios.get("/ourservicetickets");
				const list = response.data?.data || [];
				setTickets(list);
			} catch (error) {
				console.error("Error fetching service tickets:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchTickets();
	}, []);

	const filteredTickets = useMemo(() => {
		if (priorityFilter === "All") 
			return tickets;
		
		return tickets.filter((t) => t.priority_level?.toLowerCase() === priorityFilter.toLowerCase());
	}, [tickets, priorityFilter]);

	// Client-side pagination calculations
	const totalItems = filteredTickets.length;
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentData = filteredTickets.slice(startIndex, endIndex);

	// Reset to first page when changing filter or items per page
	useEffect(() => {
		setCurrentPage(1);
	}, [priorityFilter, itemsPerPage]);

	const handleOpenTicket = (ticket) => {
		setOpenTicket(ticket);
		setSelectedStatus(ticket.status || "open");
	};

	const handleCloseModal = () => {
		setOpenTicket(null);
	};

	const handleStatusUpdate = async () => {
		if (!openTicket || selectedStatus === openTicket.status) 
			return;
		
		setUpdatingStatus(true);
		try {
			const response = await axios.put(`/ourservicetickets/${openTicket.id}`, { status: selectedStatus });

			if (response.data?.status) {
				const updatedTicket = response.data.data;

				// Update the ticket in the list
				setTickets((prev) => prev.map((t) => (t.id === updatedTicket.id ? updatedTicket : t)));

				// Update the open ticket
				setOpenTicket(updatedTicket);
				setSelectedStatus(updatedTicket.status);
			}
		} catch (error) {
			console.error("Error updating ticket status:", error);
			alert("Failed to update status. Please try again.");
		} finally {
			setUpdatingStatus(false);
		}
	};

	const columns = useMemo(() => [
		{
			Header: "ID",
			accessor: (row, i) => startIndex + i + 1,
			id: "rowIndex",
			width: 60
		},
		{
			Header: "Ticket ID",
			accessor: "ticket_id"
		},
		{
			Header: "Requester",
			accessor: "requester_name"
		},
		{
			Header: "Priority",
			accessor: "priority_level"
		}, {
			Header: "Product",
			accessor: "product_service"
		}, {
			Header: "Category",
			accessor: "category_department"
		}, {
			Header: "Status",
			accessor: "status",
			Cell: ({ value }) => (
				<span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[value] || "bg-gray-100 text-gray-600"}`}>
					{STATUS_LABELS[value] || value}
				</span>
			)
		}, {
			Header: "Created",
			accessor: "created_at",
			Cell: ({ value }) => (value ? new Date(value).toLocaleString() : "-")
		}, {
			Header: "View",
			id: "view",
			Cell: ({ row }) => (
				<button onClick={() => handleOpenTicket(row.original)}
					className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
					title="View Details">
					<Eye size={16}/>
				</button>
			)
		},
	], [startIndex]);

	const tableData = useMemo(() => currentData, [currentData]);

	return (
		<AdminWrapper>
			<div className="container mx-auto py-4">
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
					<h1 className="text-3xl font-bold tracking-widest text-stone-800 uppercase">
						Service Tickets
					</h1>

					{/* Priority Filter */}
					<div className="flex items-center gap-2">
						<label htmlFor="priority-filter" className="text-sm font-medium text-gray-600">
							Priority:
						</label>
						<select id="priority-filter"
							value={priorityFilter}
							onChange={(e) => setPriorityFilter(e.target.value)}
							className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]">
							{PRIORITY_OPTIONS.map((opt) => (
								<option key={opt} value={opt}>
									{opt}
								</option>
							))}
						</select>
					</div>
				</div>

				{loading ? (
					<div className="text-gray-500">Loading tickets...</div>
				) : filteredTickets.length === 0 ? (
					<div className="text-gray-500">
						{priorityFilter === "All" ? "No service tickets yet." : `No tickets with "${priorityFilter}" priority.`}
					</div>
				) : (
					<MyTable 
						columns={columns}
						data={tableData}
						pagination={{
							currentPage: currentPage,
							lastPage: totalPages,
							perPage: itemsPerPage,
							onPageChange: setCurrentPage,
							onPerPageChange: setItemsPerPage
						}}
					/>
				)}
			</div>

			{openTicket && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Backdrop with blur effect */}
					<div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
						onClick={handleCloseModal}/> 
					{/* Modal Content */}
					<div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
						<div className="sticky top-0 bg-white rounded-t-xl border-b border-gray-200 px-6 py-4 flex items-center justify-between">
							<h2 className="text-xl font-bold text-gray-800">
								Service Ticket Details
							</h2>
							<button onClick={handleCloseModal}
								className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center"
								aria-label="Close">
								✕
							</button>
						</div>

						<div className="p-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Ticket ID</div>
									<div className="font-semibold text-gray-900 mt-1">
										{openTicket.ticket_id}
									</div>
								</div>

								{/* Status with Update Control */}
								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-1">Status</div>
									<div className="flex items-center gap-2">
										<select value={selectedStatus}
											onChange={(e) => setSelectedStatus(e.target.value)}
											className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#dc2626]">
											{STATUS_OPTIONS.map((s) => (
												<option key={s} value={s}>
													{STATUS_LABELS[s]}
												</option>
											))}
										</select>
										{selectedStatus !== openTicket.status && (
											<button onClick={handleStatusUpdate}
												disabled={updatingStatus}
												className="text-xs px-3 py-1.5 bg-[#dc2626] text-white rounded-lg hover:bg-[#dc2626] disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
												{updatingStatus ? "Saving..." : "Save"}
											</button>
										)}
									</div>
								</div>

								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Requester</div>
									<div className="font-semibold text-gray-900 mt-1">
										{openTicket.requester_name}
									</div>
								</div>
								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Email</div>
									<div className="font-semibold text-gray-900 mt-1 break-all">
										{openTicket.email}
									</div>
								</div>
								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Priority</div>
									<div className="font-semibold text-gray-900 mt-1">
										{openTicket.priority_level}
									</div>
								</div>
								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Product</div>
									<div className="font-semibold text-gray-900 mt-1">
										{openTicket.product_service}
									</div>
								</div>
								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Category</div>
									<div className="font-semibold text-gray-900 mt-1">
										{openTicket.category_department}
									</div>
								</div>
								<div>
									<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Created</div>
									<div className="font-semibold text-gray-900 mt-1">
										{openTicket.created_at ? new Date(openTicket.created_at).toLocaleString() : "-"}
									</div>
								</div>
							</div>

							<div className="mt-6">
								<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Subject</div>
								<div className="font-semibold text-gray-900 mt-1">
									{openTicket.subject_line || "-"}
								</div>
							</div>

							<div className="mt-6">
								<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Support For</div>
								<div className="text-gray-800 mt-1">
									{Array.isArray(openTicket.request_support_for) && openTicket.request_support_for.length > 0 ? openTicket.request_support_for.join(", ") : "-"}
								</div>
							</div>

							<div className="mt-6">
								<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Description</div>
								<div className="text-gray-800 whitespace-pre-wrap max-h-48 overflow-y-auto pr-1 break-words mt-1 bg-gray-50 p-3 rounded-lg">
									{openTicket.detailed_description || "-"}
								</div>
							</div>

							<div className="mt-6">
								<div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Attachments</div>
								<div className="mt-2">
									{Array.isArray(openTicket.attachments) && openTicket.attachments.length > 0 ? (
										<div className="flex flex-col gap-2">
											{openTicket.attachments.map((a, i) => (
												<a key={`${openTicket.id}-att-${i}`}
													href={`/storage/${a}`}
													target="_blank"
													rel="noreferrer"
													className="text-[#dc2626] hover:text-[#dc2626] underline text-sm flex items-center gap-2">
													<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round"
															strokeWidth={2}
															d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
													</svg>
													Attachment {i + 1}
												</a>
											))}
										</div>
									) : (
										<div className="text-gray-500">No attachments</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</AdminWrapper>
	);
};

ServiceTicket.layout = (page) => page;

export default ServiceTicket;