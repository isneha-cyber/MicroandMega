import AddProducts from "@/AddForm/AddProducts";
import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import axios from "axios";
import { ChevronDown, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingProducts, setEditingProducts] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/ourproducts");
                const list = response.data.data || response.data;
                setAllProducts(list);
            } catch (error) {
                console.error("fetching error ", error);
            }
        };

        fetchProducts();
    }, [reloadTrigger]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("/ourproductcategories/flat");
                const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
                setCategories(data);
            } catch (error) {
                console.error("fetching categories error", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredProducts(allProducts);
            return;
        }
        setFilteredProducts(
            allProducts.filter((p) => p.category?.slug === selectedCategory)
        );
    }, [allProducts, selectedCategory]);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(route("ourproducts.destroy", { id }));
            console.log(response.data);
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (products) => {
        setEditingProducts(products);
        setShowAddForm(true);
    };

    const handleUpdate = async (formData, id) => {
        try {
            formData.append("_method", "PUT");
            const response = await axios.post(
                route("ourproducts.update", { id }),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setReloadTrigger((prev) => !prev);
            return response.data;
        } catch (error) {
            console.log("Error updating products", error);
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
                                Products
                            </h1>
                        </div>
                        <button
                            onClick={() => {
                                setEditingProducts(null);
                                setShowAddForm(true);
                            }}
                            className="flex items-center gap-2 bg-[#dc2626] text-amber-50 px-6 py-2.5 rounded-lg text-sm font-medium tracking-widest uppercase  transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Plus size={18} />
                            Create
                        </button>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative w-64">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  appearance-none bg-white"
                            >
                                <option value="all">All Categories</option>
                                {categories.map((c) => (
                                    <option key={c.id} value={c.slug}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Products List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-md p-4"
                            >
                                {product.featured_image && (
                                    <img
                                        src={`/storage/${product.featured_image}`}
                                        alt={product.name}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/images/placeholder.jpg";
                                        }}
                                    />
                                )}
                                <h3 className="text-xl font-semibold mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    {product.description}
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    Category: {product.category?.name || "--"}
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded "
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="bg-[#dc2626] text-white px-4 py-2 rounded "
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {showAddForm && (
                        <AddProducts
                            editingProducts={editingProducts}
                            setShowForm={setShowAddForm}
                            setEditingProducts={setEditingProducts}
                            setReloadTrigger={setReloadTrigger}
                            handleUpdate={handleUpdate}
                        />
                    )}
                </div>
            </AdminWrapper>
        </>
    );
};

Products.layout = (page) => page;

export default Products;
