import AddTestimonials from "@/AddForm/AddTestimonials";
import AdminWrapper from "@/AdminDashboard/AdminWrapper";
import axios from "axios";
import {Plus} from "lucide-react";
import React, {useEffect, useState} from "react";

const Testimonials = () => {
	const [allTestimonials, setAllTestimonials] = useState([]);
	const [reloadTrigger, setReloadTrigger] = useState(false);
	const [editingTestimonials, setEditingTestimonials] = useState(null);
	const [showAddForm, setShowAddForm] = useState(false);

	// For fetching the Testimonials data
	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const response = await axios.get(route("ourtestimonials.index"));
				// Handle paginated response - just like Projects component
				setAllTestimonials(response.data.data || response.data);
				console.log("Testimonials data:", response.data);
			} catch (error) {
				console.error("fetching error ", error);
			}
		};

		fetchTestimonials();
	}, [reloadTrigger]);

	// For delete the Testimonials
	const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
        const response = await axios.delete(route("ourtestimonials.destroy", { id: id }));
        setReloadTrigger((prev) => !prev);
    } catch (error) {
        console.log(error);
        alert("Error deleting testimonial");
    }
};

	// handle edit
	const handleEdit = (testimonials) => {
		setEditingTestimonials(testimonials);
		setShowAddForm(true);
	};

	// Handle update after edit
	// handleUpdate - change {testimonial: id} back to {id: id}
const handleUpdate = async (formData, id) => {
    try {
        const response = await axios.post(route("ourtestimonials.update", { id: id }), formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        setReloadTrigger((prev) => !prev);
        return response.data;
    } catch (error) {
        console.log("Error updating testimonials", error);
        throw error;
    }
};




	// Handle create new testimonial
	const handleCreate = async (formData) => {
		try {
			const response = await axios.post(route("ourtestimonials.store"), formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});
			setReloadTrigger((prev) => !prev);
			return response.data;
		} catch (error) {
			console.log("Error creating testimonials", error);
			throw error;
		}
	};

	return (
		<>
			<AdminWrapper>
				<div className="container mx-auto py-4 px-4">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
						<div>
							<h1 className="text-4xl font-bold tracking-widest text-stone-800 uppercase">
								Testimonials
							</h1>
							<p className="text-gray-600 mt-2">Manage client testimonials and reviews</p>
						</div>
						<button onClick={
								() => {
									setEditingTestimonials(null);
									setShowAddForm(true);
								}
							}
							className="flex items-center gap-2 bg-indigo-600 text-amber-50 px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
							<Plus size={18}/>
							Create Testimonial
						</button>
					</div>

					{/* Display testimonials grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{
						allTestimonials.length > 0 ? (allTestimonials.map((testimonial) => (
							<div key={
									testimonial.id
								}
								className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
								<div className="p-6">
									<div className="flex items-center gap-4 mb-4">
										{
										testimonial.photo_url ? (
											<img src={
													testimonial.photo_url
												}
												alt={
													testimonial.client_name
												}
												className="w-16 h-16 rounded-full object-cover"/>
										) : (
											<div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
												{
												testimonial.client_name ?. charAt(0) || "?"
											} </div>
										)
									}
										<div>
											<h3 className="font-bold text-lg">
												{
												testimonial.client_name || "Unknown"
											}</h3>
											{
											testimonial.company && (
												<p className="text-gray-600 text-sm">
													{
													testimonial.company
												}</p>
											)
										}
											<div className="flex mt-1">
												{
												[...Array(5)].map((_, i) => (
													<svg key={i}
														className={
															`w-4 h-4 ${
																i < (testimonial.rating || 0) ? 'text-yellow-400' : 'text-gray-300'
															}`
														}
														fill="currentColor"
														viewBox="0 0 20 20">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
													</svg>
												))
											} </div>
										</div>
									</div>
									<p className="text-gray-700 mb-4 line-clamp-3">
										{
										testimonial.message || "No message provided"
									}</p>
									<div className="flex items-center justify-between pt-4 border-t">
										<span className={
											`px-2 py-1 text-xs rounded-full ${
												testimonial.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
											}`
										}>
											{
											testimonial.status || "inactive"
										} </span>
										<div className="flex gap-2">
											<button onClick={
													() => handleEdit(testimonial)
												}
												className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded transition">
												Edit
											</button>
											<button onClick={
													() => handleDelete(testimonial.id)
												}
												className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition">
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						))) : (
							<div className="col-span-full text-center py-12">
								<p className="text-gray-500">No testimonials found. Create your first testimonial!</p>
							</div>
						)
					} </div>
				</div>

				{
				showAddForm && (
					<AddTestimonials editingTestimonials={editingTestimonials}
						setShowForm={setShowAddForm}
						setEditingTestimonials={setEditingTestimonials}
						handleCreate={handleCreate}
						handleUpdate={handleUpdate}/>
				)
			} </AdminWrapper>
		</>
	);
};

Testimonials.layout = (page) => page;

export default Testimonials;
