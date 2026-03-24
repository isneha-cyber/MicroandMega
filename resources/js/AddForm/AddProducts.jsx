import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddProducts = ({ 
    editingProducts, 
    setEditingProducts, 
    setShowForm,
    setReloadTrigger,
    handleUpdate 
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [productForm, setProductForm] = useState({
        name: '', 
        description: '', 
        image: null, 
        category: ''
    });

    // Use Effect to populate form when editing
    useEffect(() => {
        if (editingProducts) {
            setProductForm({
                name: editingProducts.name || '',
                description: editingProducts.description || '',
                image: null, // Reset image for new upload
                category: editingProducts.category || ''
            });
        } else {
            setProductForm({
                name: '', 
                description: '', 
                image: null, 
                category: ''
            });
        }
    }, [editingProducts]);

    // Handle Create Products
    const handleCreate = async (formData) => {
        try {
            const response = await axios.post(route("ourproducts.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setReloadTrigger((prev) => !prev);
            return response;
        } catch (error) {
            console.log("Error creating products", error);
            throw error;
        }
    };

    // Handle Submit - now clearly separated paths
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate required fields
        if (!productForm.name.trim()) {
            alert("Product name is required");
            return;
        }

        const formData = new FormData();
        
        // Append all form data
        for (const key in productForm) {
            if (productForm[key] !== null && productForm[key] !== "") {
                formData.append(key, productForm[key]);
            }
        }

        try {
            setSubmitting(true);

            if (editingProducts) {
                // Editing existing products
                await handleUpdate(formData, editingProducts.id);
            } else {
                // Creating new products
                await handleCreate(formData);
            }
            
            // Reset form and close modal
            setProductForm({
                name: '',
                description: '',
                image: null,
                category: '',
            });
            setShowForm(false);
            setEditingProducts(null);
        } catch (error) {
            console.log("Error saving data", error);
            alert("Error saving product. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    // Handle change for image and other fields
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setProductForm((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="relative px-6 py-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
                <div className="flex justify-between items-center mb-6 bg-white pb-4 border-b">
                    <h2 className="text-2xl font-bold">
                        {editingProducts ? "Edit Product" : "Add New Product"}
                    </h2>
                    <button 
                        type="button"
                        onClick={() => {
                            setShowForm(false);
                            setEditingProducts(null);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <X size={24}/>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={productForm.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Category Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            value={productForm.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Description Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={productForm.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Image Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Image
                        </label>
                        {editingProducts && editingProducts.image && (
                            <div className="mb-2">
                                <img 
                                    src={`/storage/${editingProducts.image}`} 
                                    alt="Current product"
                                    className="h-32 w-32 object-cover rounded-md"
                                />
                                <p className="text-xs text-gray-500 mt-1">Current image</p>
                            </div>
                        )}
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            {editingProducts ? "Leave empty to keep current image" : "Upload a product image"}
                        </p>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={() => {
                                setShowForm(false);
                                setEditingProducts(null);
                            }}
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? "Saving..." : editingProducts ? "Update Product" : "Create Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;