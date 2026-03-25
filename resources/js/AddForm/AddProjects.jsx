import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddProjects = ({ editingProjects, setEditingProjects, setReloadTrigger, setShowForm, handleUpdate }) => {
    const [submitting, setSubmitting] = useState(false);
    const [projectsForm, setProjectsForm] = useState({
        title: "", // Changed from 'name' to 'title' to match database
        description: "",
        image: null,
        client_name: "", // Added client_name field
        category: "",
        status: "active", // Added status field with default value
    });

    // Use Effect for editing
    useEffect(() => {
        if (editingProjects) {
            setProjectsForm({
                title: editingProjects.title || "",
                description: editingProjects.description || "",
                image: null,
                client_name: editingProjects.client_name || "",
                category: editingProjects.category || "",
                status: editingProjects.status || "active",
            });
            setShowForm(true);
        } else {
            setProjectsForm({
                title: "",
                description: "",
                image: null,
                client_name: "",
                category: "",
                status: "active",
            });
        }
    }, [editingProjects, setShowForm]);

 const handleCreate = async (formData) => {
    try {
        await axios.post(route("ourprojects.store"), formData, {  // This will now work with POST
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setReloadTrigger((prev) => !prev);
    } catch (error) {
        console.log("Error creating projects", error);
        throw error;
    }
};

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Append all form data
        for (const key in projectsForm) {
            if (projectsForm[key] !== null && projectsForm[key] !== "") {
                formData.append(key, projectsForm[key]);
            }
        }
        
        try {
            setSubmitting(true);

            if (editingProjects) {
                // Editing existing Projects
                await handleUpdate(formData, editingProjects.id);
            } else {
                // Creating new Projects
                await handleCreate(formData);
            }
            
            // Reset form
            setProjectsForm({
                title: "",
                description: "",
                image: null,
                client_name: "",
                category: "",
                status: "active",
            });

            setShowForm(false);
            setEditingProjects(null);
        } catch (error) {
            console.log("Error saving data", error);
            alert("Error saving project. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    // handle change for image and other fields
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setProjectsForm((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="relative px-6 py-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
                <div className="flex justify-between items-center mb-6 bg-white pb-4 border-b">
                    <h2 className="text-2xl font-bold">
                        {editingProjects ? "Edit Project" : "Add Project"}
                    </h2>
                    <button
                        type="button"
                        onClick={() => {
                            setShowForm(false);
                            setEditingProjects(null);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={projectsForm.title}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={projectsForm.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Client Name
                        </label>
                        <input
                            type="text"
                            name="client_name"
                            value={projectsForm.client_name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            value={projectsForm.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            name="status"
                            value={projectsForm.status}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {editingProjects && editingProjects.image_url && (
                            <div className="mt-2">
                                <img 
                                    src={editingProjects.image_url} 
                                    alt="Current" 
                                    className="h-20 w-20 object-cover rounded"
                                />
                                <p className="text-xs text-gray-500 mt-1">Current image (upload new to replace)</p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => {
                                setShowForm(false);
                                setEditingProjects(null);
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {submitting ? "Saving..." : editingProjects ? "Update" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProjects;