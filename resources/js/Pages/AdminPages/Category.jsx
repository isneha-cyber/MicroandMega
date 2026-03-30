import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import AddCategory from "@/AddForm/AddCategory";
import axios from "axios";
import { Plus } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("/ourproductcategories");
                console.log(res.data);
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
                featured_image: item.featured_image
            });
            if (item.children && item.children.length > 0) {
                flatten(item.children, item.name, acc);
            }
        }
        return acc;
    };
    return flatten(categories);
}, [categories]);
    // For delete the Category
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/ourproductcategories/${id}`);
            console.log(response.data);
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.log(error);
        }
    };

    // handle edit
    const handleEdit = (category) => {
        setEditingCategory(category);
        setShowAddForm(true);
    };

    // Handle update after the edit
    const handleUpdate = async (formData, id) => {
        try {
            formData.append("_method", "PUT");
            const response = await axios.post(`/ourproductcategories/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setReloadTrigger((prev) => !prev);
            return response.data;
        } catch (error) {
            console.log("Error updating Category", error);
            throw error;
        }
    };

    

    return (
        <>
            <AdminWrapper>
                <div className="container mx-auto py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-widest text-stone-800 uppercase">
                                Category
                            </h1>
                        </div>
                        <button
                            onClick={() => {
                                setEditingCategory(null);
                                setShowAddForm(true);
                            }}
                            className="flex items-center gap-2 bg-[#dc2626] text-amber-50 px-6 py-2.5 rounded-lg text-sm font-medium tracking-widest uppercase  transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Plus size={18} />
                            Create
                        </button>
                    </div>

                    {/* Category List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {flatCategories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white rounded-lg shadow-md p-4"
                            >
                               
{category.icon_image && (
    <img
        src={`/storage/${category.icon_image}`}
        alt={category.name}
        className="w-full h-48 object-cover rounded-md mb-4"
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/placeholder.jpg";
        }}
    />
)}
                                <h3 className="text-xl font-semibold mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    {category.description || "--"}
                                </p>
                                <div className="text-sm text-gray-500 mb-4 space-y-1">
                                    <div>Slug: {category.slug}</div>
                                    {category.parentName && (
                                        <div>Parent: {category.parentName}</div>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(category)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded "
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(category.id)}
                                        className="bg-[#dc2626] text-white px-4 py-2 rounded "
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

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
        </>
    );
};

Category.layout = (page) => page;

export default Category;
