

import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import AddCategory from "@/AddForm/AddCategory";
import axios from "axios";
import { Pencil, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import MyTable from "@/MyTable/MyTable";

const imgurl = import.meta.env.VITE_IMAGE_PATH;


const Category = () => {
    const [categories, setCategories] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("/ourproductcategories");
                const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
                setCategories(data);
            } catch (error) {
                console.error("fetching categories error", error);
            }
        };
        fetchCategories();
    }, [reloadTrigger]);
    
  
  

    const flatCategories = useMemo(() => {
        const flatten = (items, parentName = null, acc = []) => {
            for (const item of items || []) {
                acc.push({
                    ...item,
                    parentName,
                    icon_image: item.icon_image,
                    featured_image: item.featured_image,
                });
                if (item.children && item.children.length > 0) {
                    flatten(item.children, item.name, acc);
                }
            }
            return acc;
        };
        return flatten(categories);
    }, [categories]);

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this category?")) return;
        try {
            await axios.delete(`/ourproductcategories/${id}`);
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (category) => {
        setEditingCategory(category);
        setShowAddForm(true);
    };

    const handleUpdate = async (formData, id) => {
        try {
            formData.append("_method", "PUT");
            const response = await axios.post(`/ourproductcategories/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setReloadTrigger((prev) => !prev);
            return response.data;
        } catch (error) {
            console.log("Error updating Category", error);
            throw error;
        }
    };

    // Paginated slice
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * perPage;
        return flatCategories.slice(start, start + perPage);
    }, [flatCategories, currentPage, perPage]);

    const lastPage = useMemo(
        () => Math.max(1, Math.ceil(flatCategories.length / perPage)),
        [flatCategories, perPage]
    );

    const columns = useMemo(
        () => [
            {
                Header: "#",
                id: "index",
                disableSortBy: true,
                Cell: ({ row }) => (
                    <span className="text-gray-500 font-medium">
                        {(currentPage - 1) * perPage + row.index + 1}
                    </span>
                ),
            },
            {
                Header: "Icon",
                accessor: "icon_image",
                disableSortBy: true,
                Cell: ({ value, row }) =>
                    value ? (
                        <img
                            src={`${imgurl}/${value}`}
                            alt={row.original.name}
                            className="w-6 h-6 object-cover rounded"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/images/placeholder.jpg";
                            }}
                        />
                    ) : (
                        <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                            —
                        </div>
                    ),
            },
            {
                Header: "Category Name",
                accessor: "name",
                Cell: ({ value, row }) => (
                    <div>
                        <span className="font-medium text-gray-800">{value}</span>
                        {row.original.parentName && (
                            <span className="ml-2 text-xs text-gray-400">
                                ↳ {row.original.parentName}
                            </span>
                        )}
                    </div>
                ),
            },
            {
                Header: "Page Title",
                accessor: "title",
                Cell: ({ value }) => (
                    <span className="text-gray-600">{value || "—"}</span>
                ),
            },
            {
                Header: "Actions",
                id: "actions",
                disableSortBy: true,
                Cell: ({ row }) => (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleEdit(row.original)}
                            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
                        >
                            <Pencil size={13} />
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(row.original.id)}
                            className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
                        >
                            <Trash2 size={13} />
                            Delete
                        </button>
                    </div>
                ),
            },
        ],
        [currentPage, perPage]
    );

    return (
        <AdminWrapper>
            <div className="container mx-auto py-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <h1 className="text-4xl font-bold tracking-widest text-stone-800 uppercase">
                        Category
                    </h1>
                    <button
                        onClick={() => {
                            setEditingCategory(null);
                            setShowAddForm(true);
                        }}
                        className="flex items-center gap-2 bg-[#dc2626] text-amber-50 px-6 py-2.5 rounded-lg text-sm font-medium tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <Plus size={18} />
                        Create
                    </button>
                </div>

                {/* Count */}
                <p className="text-sm text-gray-500 mb-2">
                    {flatCategories.length} categor{flatCategories.length !== 1 ? "ies" : "y"} total
                </p>

                {/* Table */}
                <MyTable
                    columns={columns}
                    data={paginatedData}
                    pagination={{
                        currentPage,
                        lastPage,
                        perPage,
                        onPageChange: (page) => setCurrentPage(page),
                        onPerPageChange: (size) => {
                            setPerPage(size);
                            setCurrentPage(1);
                        },
                    }}
                />

                {/* Empty state */}
                {flatCategories.length === 0 && (
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-lg font-medium">No categories found</p>
                        <p className="text-sm mt-1">Click Create to add your first category.</p>
                    </div>
                )}

                {/* Add / Edit Modal */}
                {showAddForm && (
                    <AddCategory
                        editingCategory={editingCategory}
                        setShowForm={setShowAddForm}
                        setEditingCategory={setEditingCategory}
                        setReloadTrigger={setReloadTrigger}
                        existingCategories={flatCategories}
                        handleUpdate={handleUpdate}
                    />
                )}
            </div>
        </AdminWrapper>
    );
};

Category.layout = (page) => page;

export default Category;