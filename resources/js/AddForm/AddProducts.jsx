// resources/js/AddForm/AddProducts.jsx

import axios from "axios";
import { X, Plus, Trash2, ChevronDown } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";

const AddProducts = ({ 
    editingProducts, 
    setEditingProducts, 
    setShowForm,
    setReloadTrigger,
    handleUpdate 
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [categoriesError, setCategoriesError] = useState("");
    
    const [productForm, setProductForm] = useState({
        name: '', 
        description: '', 
        title: '',
        content: '',
        featured_image: null, 
        images: [],
        category_id: ''
    });

    // Fetch categories on component mount
    useEffect(() => {
        fetchCategories();
    }, []);

    // Populate form when editing
    useEffect(() => {
        if (editingProducts) {
            setProductForm({
                name: editingProducts.name || '',
                description: editingProducts.description || '',
                title: editingProducts.title || '',
                content: editingProducts.content || '',
                featured_image: null,
                images: [],
                category_id: editingProducts.category_id || ''
            });
            setCategoriesError("");
        }
    }, [editingProducts]);

    const fetchCategories = async () => {
        try {
            setCategoriesLoading(true);
            setCategoriesError("");
            const response = await axios.get(route("ourcategories.dropdown"));
            const list = Array.isArray(response.data)
                ? response.data
                : response.data?.data || [];
            setCategories(list);
        } catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
            setCategoriesError("Unable to load categories. Please refresh.");
        } finally {
            setCategoriesLoading(false);
        }
    };

    const handleCreate = async (formData) => {
        try {
            const response = await axios.post("/ourproducts", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setReloadTrigger((prev) => !prev);
            return response;
        } catch (error) {
            console.log("Error creating products", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!productForm.name.trim()) {
            alert("Product name is required");
            return;
        }

        if (!productForm.category_id) {
            alert("Please select a category");
            return;
        }

        const formData = new FormData();
        
        for (const key in productForm) {
            if (key === 'images') {
                productForm.images.forEach((image, index) => {
                    formData.append(`images[${index}]`, image);
                });
            } else if (productForm[key] !== null && productForm[key] !== "") {
                formData.append(key, productForm[key]);
            }
        }

        try {
            setSubmitting(true);

            if (editingProducts) {
                await handleUpdate(formData, editingProducts.id);
            } else {
                await handleCreate(formData);
            }
            
            // Reset form
            setProductForm({
                name: '',
                description: '',
                title: '',
                content: '',
                featured_image: null,
                images: [],
                category_id: ''
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

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            if (name === "featured_image") {
                setProductForm(prev => ({ ...prev, [name]: files[0] }));
            } else if (name === "images") {
                setProductForm(prev => ({ ...prev, images: [...prev.images, ...Array.from(files)] }));
            }
        } else {
            setProductForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const removeImage = (index) => {
        setProductForm(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    // Helper function to render category options with indentation
    const renderCategoryOptions = (categories, level = 0) => {
        return categories.map(category => (
            <React.Fragment key={category.id}>
                <option value={category.id} style={{ paddingLeft: `${level * 20}px` }}>
                    {level > 0 ? '└─ ' : ''}{category.name}
                </option>
                {category.children && category.children.length > 0 && 
                    renderCategoryOptions(category.children, level + 1)
                }
            </React.Fragment>
        ));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="relative px-6 py-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
                <div className="flex justify-between items-center mb-6 bg-white pb-4 border-b sticky top-0 bg-white">
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
                    {/* Category Selection - Using Menu Items */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Category *
                        </label>
                        <div className="relative">
                            <select
                                name="category_id"
                                value={productForm.category_id}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                            >
                                <option value="" disabled hidden>
                                    {categoriesLoading ? "Loading categories..." : "-- Select a category --"}
                                </option>
                                {!categoriesLoading && categories.length === 0 && (
                                    <option value="" disabled>
                                        No categories found
                                    </option>
                                )}
                                {renderCategoryOptions(categories)}
                            </select>
                            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            Select from existing categories (Access Control, Fire Alarm, CCTV, etc.)
                        </p>
                        {categoriesError && (
                            <p className="text-xs text-red-600 mt-1">{categoriesError}</p>
                        )}
                    </div>

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
                            placeholder="e.g., UL Listed Fire Alarm"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Title Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title (for detail page)
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={productForm.title}
                            onChange={handleChange}
                            placeholder="e.g., Fire Alarm Systems: Protecting Lives and Properties"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Short Description Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Short Description
                        </label>
                        <textarea
                            name="description"
                            value={productForm.description}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Brief description of the product..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Detailed Content Field - Rich Text */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Detailed Content (HTML supported)
                        </label>
                        <div className="rounded-md border border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 bg-white">
                            <ReactQuill
                                theme="snow"
                                value={productForm.content}
                                onChange={(value) =>
                                    setProductForm((prev) => ({ ...prev, content: value }))
                                }
                                placeholder="Write product details here..."
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            You can use HTML tags for formatting: h1-h6, p, ul, ol, li, strong, em, etc.
                        </p>
                    </div>

                    {/* Featured Image Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Featured Image
                        </label>
                        {editingProducts && editingProducts.featured_image && (
                            <div className="mb-2">
                                <img 
                                    src={`/storage/${editingProducts.featured_image}`} 
                                    alt="Current featured"
                                    className="h-32 w-32 object-cover rounded-md"
                                />
                                <p className="text-xs text-gray-500 mt-1">Current featured image</p>
                            </div>
                        )}
                        <input
                            type="file"
                            name="featured_image"
                            onChange={handleChange}
                            accept="image/*"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Multiple Images Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Images (Multiple)
                        </label>
                        {editingProducts && editingProducts.images && editingProducts.images.length > 0 && (
                            <div className="mb-2">
                                <p className="text-xs text-gray-500 mb-1">Current additional images:</p>
                                <div className="flex gap-2 flex-wrap">
                                    {editingProducts.images.map((image, idx) => (
                                        <img 
                                            key={idx}
                                            src={`/storage/${image.image_path}`} 
                                            alt="Current"
                                            className="h-20 w-20 object-cover rounded-md"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <input
                            type="file"
                            name="images"
                            onChange={handleChange}
                            accept="image/*"
                            multiple
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {productForm.images.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm font-medium mb-2">Selected Images:</p>
                                <div className="flex gap-2 flex-wrap">
                                    {productForm.images.map((image, idx) => (
                                        <div key={idx} className="relative">
                                            <img 
                                                src={URL.createObjectURL(image)} 
                                                alt={`Preview ${idx}`}
                                                className="h-20 w-20 object-cover rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(idx)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                            >
                                                <Trash2 size={12} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                            You can select multiple images at once (hold Ctrl/Cmd to select multiple)
                        </p>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t sticky bottom-0 bg-white py-4">
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
