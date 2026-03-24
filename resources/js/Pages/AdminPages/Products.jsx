import AddProducts from "@/AddForm/AddProducts";
import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import axios from "axios";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingProducts, setEditingProducts] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    // For fetching the products data
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(route("ourproducts.index"));
                setAllProducts(response.data.data || response.data);
            } catch (error) {
                console.error("fetching error ", error);
            }
        };

        fetchProducts();
    }, [reloadTrigger]);

    // For delete the products
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                route("ourproducts.destroy", { id: id }),
            );
            console.log(response.data);
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.log(error);
        }
    };

    // handle edit
    const handleEdit = (products) => {
        setEditingProducts(products);
        setShowAddForm(true);
    };

    // Handle update after the edit
    const handleUpdate = async (formData, id) => {
        try {
            formData.append("_method", "PUT");
            const response = await axios.post(
                route("ourproducts.update", { id }), // Fixed route name
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
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
                            className="flex items-center gap-2 bg-indigo-600 text-amber-50 px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Plus size={18} />
                            Create
                        </button>
                    </div>
                    
                    {/* Products List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                                {product.image && (
                                    <img 
                                        src={`/storage/${product.image}`} 
                                        alt={product.name}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                )}
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
                            setReloadTrigger={setReloadTrigger} // Pass this down
                            handleUpdate={handleUpdate} // Pass this down
                        />
                    )}
                </div>
            </AdminWrapper>
        </>
    );
};

export default Products;