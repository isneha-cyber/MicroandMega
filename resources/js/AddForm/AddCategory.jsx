// resources/js/AddForm/AddCategory.jsx

import axios from "axios";
import { X, Trash2 } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

const AddCategory = ({
    editingCategory,
    setEditingCategory,
    setShowForm,
    setReloadTrigger,
    handleUpdate,
    existingCategories = null,
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(false);
    const [categoriesError, setCategoriesError] = useState("");
    const [slugTouched, setSlugTouched] = useState(false);

    const [categoryForm, setCategoryForm] = useState({
        name: "",
        slug: "",
        description: "",
        title: "",
        content: "",
        icon_image: null,       // ← was "icon", now matches ProductCategory model
        featured_image: null,   // ← new field from ProductCategory model
        parent_id: "",          // ← new: for nested categories (Access Control → Finger Print → X7)
        status: true,
    });

    // Lock background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    // Fetch categories for slug uniqueness + parent dropdown, unless provided
    useEffect(() => {
        if (existingCategories && existingCategories.length > 0) {
            setCategories(existingCategories);
        } else {
            fetchCategories();
        }
    }, [existingCategories]);

    // Populate form when editing
    useEffect(() => {
        if (editingCategory) {
            setCategoryForm({
                name: editingCategory.name || "",
                slug: editingCategory.slug || "",
                description: editingCategory.description || "",
                title: editingCategory.title || "",
                content: editingCategory.content || "",
                icon_image: null,
                featured_image: null,
                parent_id: editingCategory.parent_id || "",
                status: editingCategory.status ?? true,
            });
            setCategoriesError("");
            setSlugTouched(true); // slug already exists, don't auto-regenerate
        } else {
            setCategoryForm({
                name: "",
                slug: "",
                description: "",
                title: "",
                content: "",
                icon_image: null,
                featured_image: null,
                parent_id: "",
                status: true,
            });
            setSlugTouched(false);
        }
    }, [editingCategory]);

    // ← updated endpoint: /ourproductcategories/flat
    const fetchCategories = async () => {
        try {
            setCategoriesLoading(true);
            setCategoriesError("");
            const response = await axios.get("/ourproductcategories/flat");
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

    // Flat list excluding the category being edited (can't be its own parent)
    const parentOptions = useMemo(() => {
        return categories
            .filter((c) => !editingCategory || c.id !== editingCategory.id)
            .map((c) => ({
                value: c.id,
                label: c.parent_name ? `└─ ${c.name}` : c.name,
                parentName: c.parent_name || null,
            }));
    }, [categories, editingCategory]);

    const selectedParentOption =
        parentOptions.find((o) => o.value === categoryForm.parent_id) || null;

    // ── Slug auto-generation ──────────────────────────────────────────────────

    const normalizeSlug = (value) =>
        value
            .toString()
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const buildUniqueSlug = (base, existingSet) => {
        if (!base) return "";
        let slug = base;
        let counter = 2;
        while (existingSet.has(slug)) {
            slug = `${base}-${counter}`;
            counter += 1;
        }
        return slug;
    };

    // Recompute slug whenever name changes (if slug hasn't been manually touched)
    useEffect(() => {
        if (slugTouched) return;
        if (!categoryForm.name) return;

        const existing = new Set(
            categories
                .filter((c) => !editingCategory || c.id !== editingCategory.id)
                .map((c) => c.slug)
        );
        const base = normalizeSlug(categoryForm.name);
        const unique = buildUniqueSlug(base, existing);
        setCategoryForm((prev) => ({ ...prev, slug: unique }));
    }, [categories, categoryForm.name, editingCategory, slugTouched]);

    const handleNameChange = (e) => {
        const nextName = e.target.value;
        setCategoryForm((prev) => ({ ...prev, name: nextName }));

        if (slugTouched) return;

        const existing = new Set(
            categories
                .filter((c) => !editingCategory || c.id !== editingCategory.id)
                .map((c) => c.slug)
        );
        const base = normalizeSlug(nextName);
        const unique = buildUniqueSlug(base, existing);
        setCategoryForm((prev) => ({ ...prev, slug: unique }));
    };

    // ── CRUD handlers ─────────────────────────────────────────────────────────

    // ← updated endpoint: /ourproductcategories
    const handleCreate = async (formData) => {
        try {
            const response = await axios.post("/ourproductcategories", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setReloadTrigger((prev) => !prev);
            return response;
        } catch (error) {
            console.log("Error creating category", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!categoryForm.name.trim()) {
            alert("Category name is required");
            return;
        }

        if (!categoryForm.slug.trim()) {
            alert("Slug is required");
            return;
        }

        const formData = new FormData();

        for (const key in categoryForm) {
            if (key === "icon_image" || key === "featured_image") {
                // Only append files if a new one was selected
                if (categoryForm[key]) {
                    formData.append(key, categoryForm[key]);
                }
            } else if (key === "parent_id") {
                // Only send parent_id if a parent is selected
                if (categoryForm.parent_id !== "" && categoryForm.parent_id !== null) {
                    formData.append("parent_id", categoryForm.parent_id);
                }
            } else if (key === "status") {
                formData.append("status", categoryForm.status ? "1" : "0");
            } else if (categoryForm[key] !== null && categoryForm[key] !== "") {
                formData.append(key, categoryForm[key]);
            }
        }

        try {
            setSubmitting(true);

            if (editingCategory) {
                await handleUpdate(formData, editingCategory.id);
            } else {
                await handleCreate(formData);
            }

            // Reset form
            setCategoryForm({
                name: "",
                slug: "",
                description: "",
                title: "",
                content: "",
                icon_image: null,
                featured_image: null,
                parent_id: "",
                status: true,
            });
            setSlugTouched(false);
            setShowForm(false);
            setEditingCategory(null);
        } catch (error) {
            console.log("Error saving data", error);
            const serverMessage =
                error?.response?.data?.message ||
                error?.response?.data?.error ||
                null;
            const validationErrors = error?.response?.data?.errors || null;
            if (validationErrors) {
                const firstField = Object.keys(validationErrors)[0];
                const firstMessage = validationErrors[firstField]?.[0];
                alert(firstMessage || "Please check the form fields.");
            } else {
                alert(serverMessage || "Error saving category. Please try again.");
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setCategoryForm((prev) => ({ ...prev, [name]: files[0] }));
        } else if (type === "checkbox") {
            setCategoryForm((prev) => ({ ...prev, [name]: e.target.checked }));
        } else {
            setCategoryForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const closeForm = () => {
        setShowForm(false);
        setEditingCategory(null);
    };

    // react-select styles matching brand color
    const selectStyles = {
        control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "#dc2626" : "#d1d5db",
            boxShadow: state.isFocused ? "0 0 0 1px #dc2626" : "none",
            "&:hover": { borderColor: "#dc2626" },
            borderRadius: "0.375rem",
            minHeight: "38px",
        }),
        option: (base, { data, isSelected, isFocused }) => ({
            ...base,
            paddingLeft: data.parentName ? "28px" : "12px",
            backgroundColor: isSelected
                ? "#dc2626"
                : isFocused
                ? "#fee2e2"
                : "white",
            color: isSelected ? "white" : "#111827",
            fontSize: "0.875rem",
        }),
        placeholder: (base) => ({
            ...base,
            color: "#9ca3af",
            fontSize: "0.875rem",
        }),
        singleValue: (base) => ({
            ...base,
            fontSize: "0.875rem",
        }),
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={(e) => e.target === e.currentTarget && closeForm()}
        >
            <div className="relative px-8 py-8 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">

                {/* Header */}
                <div className="flex justify-between items-center pb-6  bg-white z-10">
                    <h2 className="text-2xl font-bold">
                        {editingCategory ? "Edit Category" : "Add New Category"}
                    </h2>
                    <button
                        type="button"
                        onClick={closeForm}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Row: Parent Category + Category Name */}
                    <div className="">

                        {/* Category Name */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={categoryForm.name}
                                onChange={handleNameChange}
                                required
                                placeholder="e.g., Fire & Safety"
                                className="w-full px-3 py-2 "
                            />
                        </div>
                    </div>

                   

                    {/* Title (for SEO / detail page heading) */}
                    <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Page Title
                            <span className="text-gray-400 font-normal ml-1">(for detail page)</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={categoryForm.title}
                            onChange={handleChange}
                            placeholder="e.g., Fire & Safety Solutions — Protect Your Premises"
                            className="w-full px-3 py-2  rounded-md "
                        />
                    </div>

                    {/* Short Description */}
                    <div className="mt-2 mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Short Description
                        </label>
                        <div className="rounded-md  bg-white">
                            <ReactQuill
                                theme="snow"
                                value={categoryForm.description}
                                onChange={(value) =>
                                    setCategoryForm((prev) => ({
                                        ...prev,
                                        description: value,
                                    }))
                                }
                                placeholder="Brief description of this category..."
                                style={{ height: "180px" }}
                            />
                        </div>
                    </div>

                    {/* Detailed Content */}
                    <div className="mt-8 mb-12">
                      
                        <div className="rounded-md  bg-white">
                            <ReactQuill
                                theme="snow"
                                value={categoryForm.content}
                                onChange={(value) =>
                                    setCategoryForm((prev) => ({
                                        ...prev,
                                        content: value,
                                    }))
                                }
                                placeholder="Full content for the category detail page..."
                                style={{ height: "300px" }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            Supports headings, lists, bold, italic, links and more.
                        </p>
                    </div>

                    {/* Row: Icon Image + Featured Image */}
                    <div className="flex gap-6 mt-12">

                        {/* Icon Image — small thumbnail shown in sidebar/menu */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Icon Image
                                <span className="text-gray-400 font-normal ml-1">(sidebar / menu)</span>
                            </label>
                            {/* Show current icon when editing */}
                            {editingCategory &&
                                editingCategory.icon_image &&
                                !categoryForm.icon_image && (
                                    <div className="mb-2 flex items-center gap-2">
                                        <img
                                            src={`/storage/${editingCategory.icon_image}`}
                                            alt="Current icon"
                                            className="h-16 w-16 object-cover rounded-md border"
                                        />
                                        <p className="text-xs text-gray-500">Current icon</p>
                                    </div>
                                )}
                            <input
                                type="file"
                                name="icon_image"
                                onChange={handleChange}
                                accept="image/*"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626]"
                            />
                            {categoryForm.icon_image && (
                                <div className="mt-2 flex items-center gap-2">
                                    <img
                                        src={URL.createObjectURL(categoryForm.icon_image)}
                                        alt="New icon preview"
                                        className="h-16 w-16 object-cover rounded-md border"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCategoryForm((prev) => ({
                                                ...prev,
                                                icon_image: null,
                                            }))
                                        }
                                        className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
                                    >
                                        <Trash2 size={14} />
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Featured Image — large banner/hero image for the category page */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Featured Image
                                <span className="text-gray-400 font-normal ml-1">(category page banner)</span>
                            </label>
                            {/* Show current featured image when editing */}
                            {editingCategory &&
                                editingCategory.featured_image &&
                                !categoryForm.featured_image && (
                                    <div className="mb-2">
                                        <img
                                            src={`/storage/${editingCategory.featured_image}`}
                                            alt="Current featured"
                                            className="h-24 w-full object-cover rounded-md border"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            Current featured image
                                        </p>
                                    </div>
                                )}
                            <input
                                type="file"
                                name="featured_image"
                                onChange={handleChange}
                                accept="image/*"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626]"
                            />
                            {categoryForm.featured_image && (
                                <div className="mt-2 flex items-center gap-2">
                                    <img
                                        src={URL.createObjectURL(categoryForm.featured_image)}
                                        alt="New featured preview"
                                        className="h-20 w-full object-cover rounded-md border"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCategoryForm((prev) => ({
                                                ...prev,
                                                featured_image: null,
                                            }))
                                        }
                                        className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 shrink-0"
                                    >
                                        <Trash2 size={14} />
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

               

                    {/* Form Actions */}
                    <div className="flex justify-end gap-4 pt-6 border-t bg-white py-4 z-10">
                        <button
                            type="button"
                            onClick={closeForm}
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-4 py-2 bg-[#dc2626] text-white rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting
                                ? "Saving..."
                                : editingCategory
                                ? "Update Category"
                                : "Create Category"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
