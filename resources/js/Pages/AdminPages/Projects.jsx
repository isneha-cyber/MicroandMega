// import AddProjects from "@/AddForm/AddProjects";
// import AdminWrapper from "@/AdminDashboard/AdminWrapper";
// import axios from "axios";
// import { Plus } from "lucide-react";
// import React, { useEffect, useState } from "react";

// const Projects = () => {
//     const [allProjects, setAllProjects] = useState([]);
//     const [reloadTrigger, setReloadTrigger] = useState(false);
//     const [editingProjects, setEditingProjects] = useState(null);
//     const [showAddForm, setShowAddForm] = useState(false);

//     // For fetching the Projects data
//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(route("ourprojects.index"));
//                 setAllProjects(response.data.data || response.data); // Handle paginated response
//             } catch (error) {
//                 console.error("fetching error ", error);
//             }
//         };

//         fetchProjects();
//     }, [reloadTrigger]);

//     // For delete the Projects
//     const handleDelete = async (id) => {
//         try {
//             const response = await axios.delete(
//                 route("ourprojects.destroy", { id: id }), // Fixed route name
//             );
//             console.log(response.data);
//             setReloadTrigger((prev) => !prev);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     // handleedit
//     const handleEdit = (projects) => {
//         setEditingProjects(projects);
//         setShowAddForm(true);
//     };

//    // Alternative: Use PUT directly (but ensure your route accepts PUT)
// const handleUpdate = async (formData, id) => {
//     try {
//         const response = await axios.put(
//             route("ourprojects.update", { id }),
//             formData,
//             {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             },
//         );
//         setReloadTrigger((prev) => !prev);
//         return response.data;
//     } catch (error) {
//         console.log("Error updating projects", error);
//         throw error;
//     }
// };

//     return (
//         <>
//             <AdminWrapper>
//                 <div className="container mx-auto py-4">
//                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//                         <div>
//                             <h1 className="text-4xl font-bold tracking-widest text-stone-800 uppercase">
//                                 Projects
//                             </h1>
//                         </div>
//                         <button
//                             onClick={() => {
//                                 setEditingProjects(null);
//                                 setShowAddForm(true);
//                             }}
//                             className="flex items-center gap-2 bg-[#dc2626] text-amber-50 px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-[#dc2626] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
//                         >
//                             <Plus size={18} />
//                             Create
//                         </button>
//                     </div>
//                     {showAddForm && (
//                         <AddProjects
//                             editingProjects={editingProjects}
//                             setShowForm={setShowAddForm}
//                             setEditingProjects={setEditingProjects}
//                             setReloadTrigger={setReloadTrigger}
//                             handleUpdate={handleUpdate} // Pass handleUpdate to component
//                         />
//                     )}
                    
//                     {/* Display projects here - you need to add this part */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                         {allProjects.map((project) => (
//                             <div key={project.id} className="bg-white rounded-lg shadow-md p-4">
//                                 {project.image_url && (
//                                     <img 
//                                         src={project.image_url} 
//                                         alt={project.title}
//                                         className="w-full h-48 object-cover rounded-md mb-4"
//                                     />
//                                 )}
//                                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                                 <p className="text-gray-600 mb-2">{project.description}</p>
//                                 <p className="text-sm text-gray-500">Category: {project.category}</p>
//                                 <p className="text-sm text-gray-500">Status: {project.status}</p>
//                                 <div className="flex gap-2 mt-4">
//                                     <button
//                                         onClick={() => handleEdit(project)}
//                                         className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                                     >
//                                         Edit
//                                     </button>
//                                     <button
//                                         onClick={() => handleDelete(project.id)}
//                                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
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
                setAllProjects(response.data.data || response.data);
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
            const response = await axios.put(
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
                                        src={project.image_url} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
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
                                        {/* <Link 
                                            href={`/project-details/${project.slug}`}
                                            className="text-[#dc2626] hover:text-[#dc2626] text-sm flex items-center gap-1"
                                        >
                                            <Eye size={14} />
                                            View
                                        </Link> */}
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