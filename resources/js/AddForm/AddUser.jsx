import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddUsers = ({ editingUser, setEditingUser, setShowForm, setReloadTrigger, handleUpdate }) => {
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: null,
    });

    // Use Effect for editing mode
    useEffect(() => {
        if (editingUser) {
            setFormData({
                name: editingUser.name || "",
                email: editingUser.email || "",
                password: "", // Don't populate password for security
                image: null,
            });
        } else {
            setFormData({
                name: "",
                email: "",
                password: "",
                image: null,
            });
        }
    }, [editingUser]);

    // Handle Create User
    const handleCreate = async (formDataToSend) => {
        try {
            await axios.post(route("ourusers.store"), formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.log("Error creating users", error);
            throw error;
        }
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        
        // Append all form data
        if (formData.name) formDataToSend.append("name", formData.name);
        if (formData.email) formDataToSend.append("email", formData.email);
        if (formData.password) formDataToSend.append("password", formData.password);
        if (formData.image) formDataToSend.append("image", formData.image);
        
        try {
            setSubmitting(true);

            if (editingUser) {
                // Editing existing user
                if (handleUpdate) {
                    await handleUpdate(formDataToSend, editingUser.id);
                }
            } else {
                // Creating new user
                await handleCreate(formDataToSend);
            }
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                password: "",
                image: null,
            });
            
            // Close modal
            setShowForm(false);
            setEditingUser(null);
        } catch (error) {
            console.log("Error saving data", error);
            alert(error.response?.data?.message || "Error saving user data");
        } finally {
            setSubmitting(false);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="relative px-6 py-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
                <div className="flex justify-between items-center mb-6 bg-white pb-4 border-b">
                    <h2 className="text-2xl font-bold">
                        {editingUser ? "Edit User" : "Add New User"}
                    </h2>
                    <button
                        type="button"
                        onClick={() => {
                            setShowForm(false);
                            setEditingUser(null);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password {!editingUser && "*"}
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required={!editingUser}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                        {editingUser && (
                            <p className="text-xs text-gray-500 mt-1">
                                Leave blank to keep current password
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Profile Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                        {editingUser && editingUser.image_url && (
                            <div className="mt-2">
                                <img 
                                    src={editingUser.image_url} 
                                    alt="Current" 
                                    className="h-16 w-16 rounded-full object-cover"
                                />
                                <p className="text-xs text-gray-500 mt-1">Current image</p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={() => {
                                setShowForm(false);
                                setEditingUser(null);
                            }}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting 
                                ? (editingUser ? "Updating..." : "Creating...") 
                                : (editingUser ? "Update User" : "Create User")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUsers;