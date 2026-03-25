import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddProjects = ({ editingProjects, setEditingProjects, setReloadTrigger, setShowForm, handleUpdate }) => {
    const [submitting, setSubmitting] = useState(false);
    const [projectsForm, setProjectsForm] = useState({
        title: "",
        name: "", // Added name field for frontend compatibility
        description: "",
        image: null,
        client_name: "",
        category: "",
        status: "active",
        location: "", // New field
        rating: 4, // New field with default value
        year: new Date().getFullYear().toString(), // New field
        contract_type: "Full Project", // New field
        tags: [], // New field as array
    });

    const [tagInput, setTagInput] = useState("");

    // Use Effect for editing
    useEffect(() => {
        if (editingProjects) {
            setProjectsForm({
                title: editingProjects.title || "",
                name: editingProjects.name || editingProjects.title || "",
                description: editingProjects.description || "",
                image: null,
                client_name: editingProjects.client_name || "",
                category: editingProjects.category || "",
                status: editingProjects.status || "active",
                location: editingProjects.location || "",
                rating: editingProjects.rating || 4,
                year: editingProjects.year || new Date().getFullYear().toString(),
                contract_type: editingProjects.contractType || editingProjects.contract_type || "Full Project",
                tags: editingProjects.tags || [],
            });
            setShowForm(true);
        } else {
            setProjectsForm({
                title: "",
                name: "",
                description: "",
                image: null,
                client_name: "",
                category: "",
                status: "active",
                location: "",
                rating: 4,
                year: new Date().getFullYear().toString(),
                contract_type: "Full Project",
                tags: [],
            });
        }
    }, [editingProjects, setShowForm]);

    const handleCreate = async (formData) => {
        try {
            const response = await axios.post(route("ourprojects.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error creating projects", error);
            // Log more details about the error
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            }
            throw error;
        }
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Append all form data
        for (const key in projectsForm) {
            if (projectsForm[key] !== null && projectsForm[key] !== "" && projectsForm[key] !== undefined) {
                if (key === 'tags' && Array.isArray(projectsForm[key])) {
                    // Send tags as JSON string
                    formData.append(key, JSON.stringify(projectsForm[key]));
                } else if (key !== 'image') {
                    formData.append(key, projectsForm[key]);
                }
            }
        }
        
        // Append image separately
        if (projectsForm.image) {
            formData.append('image', projectsForm.image);
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
                name: "",
                description: "",
                image: null,
                client_name: "",
                category: "",
                status: "active",
                location: "",
                rating: 4,
                year: new Date().getFullYear().toString(),
                contract_type: "Full Project",
                tags: [],
            });
            setTagInput("");

            setShowForm(false);
            setEditingProjects(null);
            setReloadTrigger(prev => !prev);
        } catch (error) {
            console.error("Error saving data", error);
            alert(`Error saving project: ${error.response?.data?.message || error.message || "Please try again."}`);
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

    // Handle tag addition
    const handleAddTag = () => {
        if (tagInput.trim() && !projectsForm.tags.includes(tagInput.trim())) {
            setProjectsForm(prev => ({
                ...prev,
                tags: [...prev.tags, tagInput.trim()]
            }));
            setTagInput("");
        }
    };

    // Handle tag removal
    const handleRemoveTag = (tagToRemove) => {
        setProjectsForm(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    // Handle key press for tags
    const handleTagKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag();
        }
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
                            Project Title *
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
                            Project Name (Display Name)
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={projectsForm.name}
                            onChange={handleChange}
                            placeholder="Leave blank to use title"
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

                    <div className="grid grid-cols-2 gap-4">
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
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={projectsForm.location}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Project location"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
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
                                placeholder="e.g., Healthcare, Hospitality"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Year
                            </label>
                            <input
                                type="text"
                                name="year"
                                value={projectsForm.year}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g., 2024"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Rating (1-5)
                            </label>
                            <select
                                name="rating"
                                value={projectsForm.rating}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Contract Type
                            </label>
                            <select
                                name="contract_type"
                                value={projectsForm.contract_type}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="Full Project">Full Project</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Maintenance">Maintenance</option>
                                <option value="Design Only">Design Only</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tags
                        </label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyPress={handleTagKeyPress}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Add a tag and press Enter"
                            />
                            <button
                                type="button"
                                onClick={handleAddTag}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {projectsForm.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTag(tag)}
                                        className="hover:text-red-600"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
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
                            Project Image
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