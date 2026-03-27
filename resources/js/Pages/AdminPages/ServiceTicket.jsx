import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import MyTable from "@/MyTable/MyTable";
import axios from "axios";
import { Eye } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

const ServiceTicket = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openTicket, setOpenTicket] = useState(null);

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

  const columns = useMemo(
    () => [
      { Header: "Ticket ID", accessor: "ticket_id" },
      { Header: "Requester", accessor: "requester_name" },
      { Header: "Priority", accessor: "priority_level" },
      { Header: "Product", accessor: "product_service" },
      { Header: "Category", accessor: "category_department" },
      { Header: "Status", accessor: "status" },
      {
        Header: "Created",
        accessor: "created_at",
        Cell: ({ value }) => (value ? new Date(value).toLocaleString() : "-"),
      },
      {
        Header: "View",
        id: "view",
        Cell: ({ row }) => (
          <button
            onClick={() => setOpenTicket(row.original)}
            className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
            title="View Details"
          >
            <Eye size={16} />
          </button>
        ),
      },
    ],
    []
  );

  const tableData = useMemo(() => tickets, [tickets]);

  return (
    <AdminWrapper>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-widest text-stone-800 uppercase">
            Service Tickets
          </h1>
        </div>

        {loading ? (
          <div className="text-gray-500">Loading tickets...</div>
        ) : tickets.length === 0 ? (
          <div className="text-gray-500">No service tickets yet.</div>
        ) : (
          <MyTable columns={columns} data={tableData} />
        )}
      </div>
      {openTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenTicket(null)}
          />
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Service Ticket Details</h2>
              <button
                onClick={() => setOpenTicket(null)}
                className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                aria-label="Close"
              >
                x
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500">Ticket ID</div>
                <div className="font-semibold">{openTicket.ticket_id}</div>
              </div>
              <div>
                <div className="text-gray-500">Status</div>
                <div className="font-semibold">{openTicket.status}</div>
              </div>
              <div>
                <div className="text-gray-500">Requester</div>
                <div className="font-semibold">{openTicket.requester_name}</div>
              </div>
              <div>
                <div className="text-gray-500">Email</div>
                <div className="font-semibold">{openTicket.email}</div>
              </div>
              <div>
                <div className="text-gray-500">Priority</div>
                <div className="font-semibold">{openTicket.priority_level}</div>
              </div>
              <div>
                <div className="text-gray-500">Product</div>
                <div className="font-semibold">{openTicket.product_service}</div>
              </div>
              <div>
                <div className="text-gray-500">Category</div>
                <div className="font-semibold">{openTicket.category_department}</div>
              </div>
              <div>
                <div className="text-gray-500">Created</div>
                <div className="font-semibold">
                  {openTicket.created_at
                    ? new Date(openTicket.created_at).toLocaleString()
                    : "-"}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-gray-500 text-sm">Subject</div>
              <div className="font-semibold text-gray-800">{openTicket.subject_line || "-"}</div>
            </div>

            <div className="mt-4">
              <div className="text-gray-500 text-sm">Support For</div>
              <div className="text-gray-800">
                {Array.isArray(openTicket.request_support_for) && openTicket.request_support_for.length > 0
                  ? openTicket.request_support_for.join(", ")
                  : "-"}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-gray-500 text-sm">Description</div>
              <div className="text-gray-800 whitespace-pre-wrap max-h-72 overflow-y-auto pr-1 break-words">
                {openTicket.detailed_description || "-"}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-gray-500 text-sm">Attachments</div>
              {Array.isArray(openTicket.attachments) && openTicket.attachments.length > 0 ? (
                <div className="flex flex-col gap-1 mt-1">
                  {openTicket.attachments.map((a, i) => (
                    <a
                      key={`${openTicket.id}-att-${i}`}
                      href={`/storage/${a}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      Attachment {i + 1}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-gray-800">-</div>
              )}
            </div>
          </div>
        </div>
      )}
    </AdminWrapper>
  );
}

ServiceTicket.layout = (page) => page;

export default ServiceTicket

