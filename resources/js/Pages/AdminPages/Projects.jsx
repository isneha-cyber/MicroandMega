import AddProjects from "@/AddForm/AddProjects";
import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import axios from "axios";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const Projects = () => {
        const [allProjects, setAllProjects] = useState([]);
        const [reloadTrigger, setReloadTrigger] = useState(false);
        const [editingProjects, setEditingProjects] = useState(null);
        const [showAddForm, setShowAddForm] = useState(false);
    
        // For fetching the Projects data
        useEffect(() => {
            const fetchProjects = async () => {
                try {
                    const response = await axios.get(route("ourprojects.index"));
                    setAllProjects(response.data);
                } catch (error) {
                    console.error("fetching error ", error);
                }
            };
    
            fetchProjects();
        }, [reloadTrigger]);
    
        // For delete the Projects
        const handleDelete = async (id) => {
            try {
                const response = await axios.delete(
                    route("ourProjects.destroy", { id: id }),
                );
                console.log(response.data);
                setReloadTrigger((prev) => !prev);
            } catch (error) {
                console.log(error);
            }
        };
    
        // handleedit
        const handleEdit = (projects) => {
            setEditingProjects(projects);
        };
    
        // Handlapdate after the  edit
        const handleUpdate = async (formData, id) => {
            try {
                formData.append("_method", "PUT");
                const response = await axios.post(
                    route("ourprojects.update", { id }),
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
                console.log("Error updating projects", error);
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
                             Projects
                            </h1>
                        </div>
                        <button
                            onClick={() => {
                                setShowAddForm(true);
                            }}
                            className="flex items-center gap-2 bg-indigo-600 text-amber-50 px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Plus size={18} />
                            Create
                        </button>
                    </div>
                    {showAddForm && (
                        <AddProjects
                            editingProjects={editingProjects}
                            setShowForm={setShowAddForm}
                            setEditingProjects={setEditingProjects}
                        />
                    )}
                </div>
            </AdminWrapper>
        </>
    );
};

export default Projects;