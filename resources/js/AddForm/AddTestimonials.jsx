import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const imgurl = import.meta.env.VITE_IMAGE_PATH;
const resolveImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    return `${imgurl}/${path}`;
};

const AddTestimonials = ({ 
    editingTestimonials, 
    setEditingTestimonials, 
    setShowForm, 
    handleCreate, 
    handleUpdate 
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [testimonialsForm, setTestimonialsForm] = useState({
        client_name: "",
        company: "",
        message: "",
        rating: 5,
        status: "active",
        photo: null,
    });

    // Use Effect for editing
    useEffect(() => {
        if (editingTestimonials) {
            setTestimonialsForm({
                client_name: editingTestimonials.client_name || "",
                company: editingTestimonials.company || "",
                message: editingTestimonials.message || "",
                rating: editingTestimonials.rating || 5,
                status: editingTestimonials.status || "active",
                photo: null, // Reset photo for editing
            });
        } else {
            setTestimonialsForm({
                client_name: "",
                company: "",
                message: "",
                rating: 5,
                status: "active",
                photo: null,
            });
        }
    }, [editingTestimonials]);

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        // Append all form data
        for (const key in testimonialsForm) {
            if (testimonialsForm[key] !== null && testimonialsForm[key] !== "") {
                formData.append(key, testimonialsForm[key]);
            }
        }
        
        try {
            setSubmitting(true);

            if (editingTestimonials) {
                // Add _method field for PUT request
                formData.append('_method', 'PUT');
                await handleUpdate(formData, editingTestimonials.id);
            } else {
                // Creating new testimonial
                await handleCreate(formData);
            }
            
            // Reset form
            setTestimonialsForm({
                client_name: "",
                company: "",
                message: "",
                rating: 5,
                status: "active",
                photo: null,
            });

            setShowForm(false);
            setEditingTestimonials(null);
        } catch (error) {
            console.log("Error saving data", error);
            alert("Error saving testimonial. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    // Handle change for inputs
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setTestimonialsForm((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    // Handle rating change
    const handleRatingChange = (rating) => {
        setTestimonialsForm((prev) => ({
            ...prev,
            rating: rating,
        }));
    };

    // Handle modal close
    const handleClose = () => {
        setShowForm(false);
        setEditingTestimonials(null);
    };

    // Handle backdrop click
    const handleBackdropClick = (e) => {
        // Only close if clicking on the backdrop itself, not the modal content
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        // Save original overflow style
        const originalOverflow = document.body.style.overflow;
        // Prevent scrolling on body
        document.body.style.overflow = 'hidden';
        
        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div 
                className="relative px-6 py-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
                <div className="flex justify-between items-center mb-6 bg-white pb-4 border-b  z-10">
                    <h2 className="text-2xl font-bold">
                        {editingTestimonials ? "Edit Testimonial" : "Add New Testimonial"}
                    </h2>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Client Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Client Name *
                        </label>
                        <input
                            type="text"
                            name="client_name"
                            value={testimonialsForm.client_name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter client name"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company (Optional)
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={testimonialsForm.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter company name"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Rating *
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleRatingChange(star)}
                                    className="focus:outline-none"
                                >
                                    <svg
                                        className={`w-8 h-8 ${
                                            star <= testimonialsForm.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Testimonial Message *
                        </label>
                        <textarea
                            name="message"
                            value={testimonialsForm.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Write the testimonial message..."
                        />
                    </div>

                    {/* Photo */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Client Photo (Optional)
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={handleChange}
                            accept="image/*"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {editingTestimonials?.photo_url && !testimonialsForm.photo && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">Current photo:</p>
                                <img 
                                    src={resolveImageUrl(editingTestimonials.photo_url)} 
                                    alt="Current" 
                                    className="w-16 h-16 rounded-full object-cover mt-1"
                                />
                            </div>
                        )}
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status *
                        </label>
                        <select
                            name="status"
                            value={testimonialsForm.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-6 py-2 bg-[#dc2626] text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting 
                                ? (editingTestimonials ? "Updating..." : "Creating...") 
                                : (editingTestimonials ? "Update" : "Create")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTestimonials;
