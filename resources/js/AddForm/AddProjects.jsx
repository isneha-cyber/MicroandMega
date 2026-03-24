import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddProjects = ({ editingProjects, setEditingProjects, setReloadTrigger, setShowForm }) => {
    const [submitting, setSubmitting] = useState(false);
    const [projectsForm, setProjectsForm] = useState({
        name: "",
        description: "",
        image: null,
        category: "",
        status: "",
    });

    //  Use Effect
    useEffect(() => {
        if (editingProjects) {
            setProjectsForm({
                ...editingProjects,
                image: null,
            });
            setShowForm(true);
        } else {
            setProjectsForm({
                 name: "",
        description: "",
        image: null,
        category: "",
        status: "",
            });
        }
    }, [editingProjects]);

    // Handle Create Projects
    const handleCreate = async (formData) => {
        try {
            await axios.post(route("ourprojects.store"), formData, {
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

    // Handle Submit - now clearly separated paths
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        // Append all form data except image if it's empty
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
            setProjectsForm({
                name: "",
        description: "",
        image: null,
        category: "",
        status: "",
            });

            setShowForm(false);
            setEditingProjects(null);
        } catch (error) {
            console.log("Error saving data", error);
        } finally {
            setSubmitting(false);
        }
    };

    // handle  change for image and the others

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
                    <h2 className="text-2xl font-bold">Add Projects</h2>
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
            </div>
        </div>
    );
};

export default AddProjects;