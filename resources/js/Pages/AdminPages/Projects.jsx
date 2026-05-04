



// import AdminWrapper from "@/AdminDashboard/AdminWrapper";
// import axios from "axios";
// import { Plus, Eye } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { Link } from "@inertiajs/react";
// import AddProjects from "@/AddForm/AddProjects";

// const imgurl = import.meta.env.VITE_IMAGE_PATH;


// const Projects = () => {
//     const [allProjects, setAllProjects] = useState([]);
//     const [reloadTrigger, setReloadTrigger] = useState(false);
//     const [editingProjects, setEditingProjects] = useState(null);
//     const [showAddForm, setShowAddForm] = useState(false);

//     // For fetching the Projects data
//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(
//                     route("ourprojects.index", { status: "all" })
//                 );
//                 setAllProjects(response.data.data || response.data);
//             } catch (error) {
//                 console.error("fetching error ", error);
//             }
//         };

//         fetchProjects();
//     }, [reloadTrigger]);


   

//     // For delete the Projects
//     const handleDelete = async (id) => {
//         if (confirm('Are you sure you want to delete this project?')) {
//             try {
//                 await axios.delete(route("ourprojects.destroy", { id: id }));
//                 setReloadTrigger((prev) => !prev);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     // handle edit
//     const handleEdit = (projects) => {
//         setEditingProjects(projects);
//         setShowAddForm(true);
//     };

//     const handleUpdate = async (formData, id) => {
//         try {
//             if (typeof formData?.get === "function" && !formData.get("_method")) {
//                 formData.append("_method", "PUT");
//             }
//             const response = await axios.post(
//                 route("ourprojects.update", { id }),
//                 formData,
//                 {
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                         "X-HTTP-Method-Override": "PUT",
//                     },
//                 },
//             );
//             const updated = response?.data?.data ?? response?.data ?? null;
//             if (updated?.id) {
//                 setAllProjects((prev) =>
//                     prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
//                 );
//             } else {
//                 setReloadTrigger((prev) => !prev);
//             }
//             return response.data;
//         } catch (error) {
//             console.log("Error updating projects", error);
//             throw error;
//         }
//     };

//     return (
//         <>
//             <AdminWrapper>
//                 <div className="container mx-auto py-4">
//                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//                         <div>
//                             <h1 className="text-4xl font-bold tracking-widest text-stone-800 uppercase">
//                                 Projects
//                             </h1>
//                             <p className="text-gray-600 mt-2">Manage your project portfolio</p>
//                         </div>
//                         <button
//                             onClick={() => {
//                                 setEditingProjects(null);
//                                 setShowAddForm(true);
//                             }}
//                             className="flex items-center gap-2 bg-[#dc2626] text-amber-50 px-6 py-2.5 rounded-lg text-sm font-medium tracking-widest uppercase hover:bg-[#dc2626] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
//                         >
//                             <Plus size={18} />
//                             Create Project
//                         </button>
//                     </div>
                    
//                     {showAddForm && (
//                         <AddProjects
//                             editingProjects={editingProjects}
//                             setShowForm={setShowAddForm}
//                             setEditingProjects={setEditingProjects}
//                             setReloadTrigger={setReloadTrigger}
//                             handleUpdate={handleUpdate}
//                         />
//                     )}
                    
//                     {/* Display projects here */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                         {allProjects.map((project) => (
//                             <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                                 {project.image_url && (
//                                     <img 
//                                         src={`${imgurl}/${project.image_url}`}
//                                         alt={project.title}
//                                         className="w-full h-48 object-cover"
//                                     />
//                                 )}
//                                 <div className="p-4">
//                                     <div className="flex justify-between items-start mb-2">
//                                         <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//                                         <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                             project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//                                         }`}>
//                                             {project.status}
//                                         </span>
//                                     </div>
//                                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">{project.description}</p>
//                                     <div className="flex flex-wrap gap-1 mb-2">
//                                         <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//                                             {project.category}
//                                         </span>
//                                         {project.location && (
//                                             <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//                                                 {project.location}
//                                             </span>
//                                         )}
//                                     </div>
//                                     <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => handleEdit(project)}
//                                                 className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
//                                             >
//                                                 Edit
//                                             </button>
//                                             <button
//                                                 onClick={() => handleDelete(project.id)}
//                                                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                         {/* <Link 
//                                             href={`/project-details/${project.slug}`}
//                                             className="text-[#dc2626] hover:text-[#dc2626] text-sm flex items-center gap-1"
//                                         >
//                                             <Eye size={14} />
//                                             View
//                                         </Link> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
                    
//                     {allProjects.length === 0 && (
//                         <div className="text-center py-12">
//                             <p className="text-gray-500">No projects found. Click "Create Project" to add your first project.</p>
//                         </div>
//                     )}
//                 </div>
//             </AdminWrapper>
//         </>
//     );
// };

// Projects.layout = (page) => page;

// export default Projects;


import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import axios from "axios";
import { Plus, Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import AddProjects from "@/AddForm/AddProjects";

const imgurl = import.meta.env.VITE_IMAGE_PATH;

// Sort helper function
const sortProjectsByOrder = (projects) => {
    if (!Array.isArray(projects)) return projects;
    return [...projects].sort((a, b) => {
        const orderA = Number(a.order);
        const orderB = Number(b.order);
        const normalizedOrderA = Number.isFinite(orderA) && orderA > 0 ? orderA : 999999;
        const normalizedOrderB = Number.isFinite(orderB) && orderB > 0 ? orderB : 999999;
        return normalizedOrderA - normalizedOrderB;
    });
};

const formatOrderPosition = (order) => {
    const value = Number(order);

    if (!Number.isInteger(value) || value < 1) {
        return null;
    }

    const remainder100 = value % 100;
    if (remainder100 >= 11 && remainder100 <= 13) {
        return `${value}th`;
    }

    switch (value % 10) {
        case 1:
            return `${value}st`;
        case 2:
            return `${value}nd`;
        case 3:
            return `${value}rd`;
        default:
            return `${value}th`;
    }
};

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingProjects, setEditingProjects] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    // For fetching the Projects data
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    route("ourprojects.index", { status: "all" })
                );
                const fetchedData = response.data.data || response.data || [];
                // Sort projects by order
                setAllProjects(sortProjectsByOrder(fetchedData));
            } catch (error) {
                console.error("fetching error ", error);
            }
        };

        fetchProjects();
    }, [reloadTrigger]);

    // For delete the Projects
    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            try {
                await axios.delete(route("ourprojects.destroy", { id: id }));
                setReloadTrigger((prev) => !prev);
            } catch (error) {
                console.log(error);
            }
        }
    };

    // handle edit
    const handleEdit = (projects) => {
        setEditingProjects(projects);
        setShowAddForm(true);
    };

    const handleUpdate = async (formData, id) => {
        try {
            if (typeof formData?.get === "function" && !formData.get("_method")) {
                formData.append("_method", "PUT");
            }
            const response = await axios.post(
                route("ourprojects.update", { id }),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-HTTP-Method-Override": "PUT",
                    },
                },
            );
            const updated = response?.data?.data ?? response?.data ?? null;
            if (updated?.id) {
                setAllProjects((prev) =>
                    sortProjectsByOrder(prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p)))
                );
            } else {
                setReloadTrigger((prev) => !prev);
            }
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
                            <p className="text-gray-600 mt-2">Manage your project portfolio</p>
                        </div>
                        <button
                            onClick={() => {
                                setEditingProjects(null);
                                setShowAddForm(true);
                            }}
                            className="flex items-center gap-2 bg-[#dc2626] text-amber-50 px-6 py-2.5 rounded-lg text-sm font-medium tracking-widest uppercase hover:bg-[#dc2626] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Plus size={18} />
                            Create Project
                        </button>
                    </div>
                    
                    {showAddForm && (
                        <AddProjects
                            editingProjects={editingProjects}
                            setShowForm={setShowAddForm}
                            setEditingProjects={setEditingProjects}
                            setReloadTrigger={setReloadTrigger}
                            handleUpdate={handleUpdate}
                        />
                    )}
                    
                    {/* Display projects here */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {allProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                {project.image_url && (
                                    <img 
                                        src={`${imgurl}/${project.image_url}`}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                            {formatOrderPosition(project.order) && (
                                                <span className="text-xs text-gray-500 mt-1 block">
                                                    Position: {formatOrderPosition(project.order)}
                                                </span>
                                            )}
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                        {project.location && (
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                {project.location}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(project)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {allProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No projects found. Click "Create Project" to add your first project.</p>
                        </div>
                    )}
                </div>
            </AdminWrapper>
        </>
    );
};

Projects.layout = (page) => page;

export default Projects;
