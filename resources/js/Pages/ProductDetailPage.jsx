import { useState, useEffect, useMemo } from "react";
import {
    AlertTriangle,
    Bell,
    Camera,
    ChevronDown,
    Flame,
    Menu,
    Radio,
    Shield,
    ShieldCheck,
    Wifi,
    X,
    Fingerprint,
} from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import parse from "html-react-parser";

const iconMap = {
    "Access Control": Fingerprint,
    "Fire Alarm": Flame,
    "Public Address": Radio,
    "CCTV": Camera,
    "Data Network": Wifi,
    "Control and Monitor System": Shield,
    "Grounding ERT": AlertTriangle,
    "Digital Lighting": Bell,
};

function SidebarItem({ item, isOpen, onToggle, onCategorySelect, onProductSelect }) {
    const Icon = iconMap[item.name] || Shield;
    const hasChildren = item.children?.length > 0 || item.products?.length > 0;

    return (
        <li className="border-b border-gray-100 last:border-0">
            <div className="flex items-center w-full hover:bg-gray-50 transition-colors">
                {/* Label — navigates to category */}
                <button
                    onClick={() => onCategorySelect(item)}
                    className="flex-1 flex items-center gap-2 px-3 py-2.5 text-left text-sm"
                >
                    {item.icon_image ? (
                        <img
                            src={`/storage/${item.icon_image}`}
                            alt={item.name}
                            className="h-5 w-5 rounded object-cover flex-shrink-0"
                            onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
                        />
                    ) : (
                        <Icon className="h-4 w-4 text-red-600 flex-shrink-0" />
                    )}
                    <span className="font-medium text-gray-800">{item.name}</span>
                </button>

                {/* Chevron — only toggles dropdown */}
                {hasChildren && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onToggle(); }}
                        className="px-3 py-2.5 text-gray-400 hover:text-gray-600"
                        aria-label="Toggle submenu"
                    >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                )}
            </div>

            {/* Child categories */}
            {item.children?.length > 0 && isOpen && (
                <ul className="bg-gray-50 border-t border-gray-100">
                    {item.children.map((child) => (
                        <li
                            key={child.id || child.slug || child.name}
                            onClick={() => onCategorySelect(child)}
                            className="px-6 py-2 text-sm text-gray-600 hover:text-red-700 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-0"
                        >
                            {child.name}
                        </li>
                    ))}
                </ul>
            )}

            {/* Products under category */}
            {item.products?.length > 0 && isOpen && (
                <ul className="bg-gray-50 border-t border-gray-100">
                    {item.products.map((product) => (
                        <li
                            key={product.id || product.slug || product.name}
                            onClick={() => onProductSelect(product)}
                            className="px-6 py-2 text-sm text-gray-600 hover:text-red-700 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-0"
                        >
                            {product.name}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

function Sidebar({ isMobileOpen, onClose, categories, onCategorySelect, onProductSelect }) {
    const [openItems, setOpenItems] = useState({});
    const toggle = (name) => setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));

    return (
        <>
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            <aside
                className={`
                    fixed lg:sticky top-0 lg:top-4 z-50 lg:z-auto
                    w-72 lg:w-full
                    h-screen lg:h-auto lg:max-h-[calc(100vh-2rem)]
                    bg-white
                    shadow-xl lg:shadow-none
                    overflow-y-auto
                    transition-transform duration-300
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                <div className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
                    <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" /> Security Products
                    </h3>
                    <button onClick={onClose} className="lg:hidden text-white hover:text-gray-300 transition-colors">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <nav className="border border-gray-200 border-t-0">
                    <ul>
                        {categories.map((item) => (
                            <SidebarItem
                                key={item.name}
                                item={item}
                                isOpen={!!openItems[item.name]}
                                onToggle={() => toggle(item.name)}
                                onCategorySelect={onCategorySelect}
                                onProductSelect={onProductSelect}
                            />
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default function ProductDetailPage() {
    const { props } = usePage();
    const categorySlug = props?.categorySlug || null;
    const productSlug = props?.productSlug || null;

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(null);

    const updateCategoryUrl = (slug) => {
        if (!slug) return;
        window.history?.replaceState(null, "", `/category/${slug}`);
    };

    const updateProductUrl = (slug) => {
        if (!slug) return;
        window.history?.replaceState(null, "", `/products/${slug}`);
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get("/ourproductcategories");
            const transformed = response.data.data.map((category) => ({
                id: category.id,
                name: category.name,
                slug: category.slug,
                icon_image: category.icon_image || null,
                featured_image: category.featured_image || null,
                description: category.description || "",
                title: category.title || "",
                content: category.content || "",
                children: category.children?.map((child) => ({
                    id: child.id,
                    name: child.name,
                    slug: child.slug,
                    icon_image: child.icon_image || null,
                    featured_image: child.featured_image || null,
                    description: child.description || "",
                    title: child.title || "",
                    content: child.content || "",
                })) || [],
            }));
            setCategories(transformed);
            return transformed;
        } catch (error) {
            console.error("Error fetching categories:", error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get("/ourproducts");
            const list = response.data?.data || response.data || [];
            setAllProducts(list);
            return list;
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
    };

    const fetchProductsByCategory = async (slug) => {
        try {
            setLoading(true);
            const response = await axios.get(`/ourproducts/category/${slug}`);
            const products = response.data.data || [];
            setSelectedProduct(products.length > 0 ? products[0] : null);
            const found = categories.find((c) => c.slug === slug);
            setSelectedCategory(found || null);
        } catch (error) {
            console.error("Error fetching category products:", error);
            setSelectedProduct(null);
            setSelectedCategory(null);
        } finally {
            setLoading(false);
        }
    };

    const fetchProductBySlug = async (slug) => {
        try {
            setLoading(true);
            const response = await axios.get(`/ourproducts/${slug}`);
            const product = response.data?.data || null;
            setSelectedProduct(product);
            setSelectedCategory(product?.category || null);
        } catch (error) {
            console.error("Error fetching product:", error);
            setSelectedProduct(null);
            setSelectedCategory(null);
        } finally {
            setLoading(false);
        }
    };

    const handleCategorySelect = async (category) => {
        const slug = category?.slug;
        if (!slug) return;
        await fetchProductsByCategory(slug);
        updateCategoryUrl(slug);
        setSidebarOpen(false);
    };

    const handleProductSelect = async (product) => {
        const slug = product?.slug;
        if (!slug) return;
        await fetchProductBySlug(slug);
        updateProductUrl(slug);
        setSidebarOpen(false);
    };

    useEffect(() => {
        const init = async () => {
            await fetchCategories();
            await fetchAllProducts();
            if (productSlug) {
                await fetchProductBySlug(productSlug);
            } else if (categorySlug) {
                await fetchProductsByCategory(categorySlug);
            }
        };
        init();
    }, [categorySlug, productSlug]);

    const categoriesWithProducts = useMemo(() => {
        if (!categories.length) return [];
        if (!allProducts.length) return categories.map((c) => ({ ...c, products: [] }));

        const byCategorySlug = allProducts.reduce((acc, product) => {
            const slug = product?.category?.slug;
            if (!slug) return acc;
            if (!acc[slug]) acc[slug] = [];
            acc[slug].push({ id: product.id, name: product.name, slug: product.slug });
            return acc;
        }, {});

        return categories.map((category) => ({
            ...category,
            products: byCategorySlug[category.slug] || [],
        }));
    }, [categories, allProducts]);

    // Collect all images for the selected product
    const productImages = useMemo(() => {
        const imgs = [];
        if (selectedProduct?.featured_image) imgs.push(`/storage/${selectedProduct.featured_image}`);
        if (Array.isArray(selectedProduct?.images)) {
            selectedProduct.images.forEach((img) => {
                if (img?.image_path) imgs.push(`/storage/${img.image_path}`);
            });
        }
        return [...new Set(imgs)];
    }, [selectedProduct]);

    useEffect(() => {
        setActiveImage(productImages[0] || "/images/firealram.jpg");
    }, [productImages]);

    const pageTitle =
        selectedCategory?.name ||
        selectedProduct?.category?.name ||
        "Products";

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto" />
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Banner */}
            <div
                className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[380px] lg:min-h-[460px] lg:bg-fixed"
                style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
                <div className="relative z-20 flex flex-col items-center text-center gap-3">
                    <h2 className="text-3xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">
                        {pageTitle}
                    </h2>
                    <p className="text-sm font-medium text-gray-300 sm:text-base">
                        <Link href="/" className="hover:text-red-400 transition-colors">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-500">/</span>
                        <span className="text-white">{pageTitle}</span>
                    </p>
                </div>
            </div>

            {/* Main Layout */}
            <div className="min-h-screen bg-gray-50 py-10 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

                        {/* Mobile sidebar */}
                        {sidebarOpen && (
                            <Sidebar
                                isMobileOpen={sidebarOpen}
                                onClose={() => setSidebarOpen(false)}
                                categories={categoriesWithProducts}
                                onCategorySelect={handleCategorySelect}
                                onProductSelect={handleProductSelect}
                            />
                        )}

                        {/* Desktop sidebar */}
                        <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
                            <Sidebar
                                isMobileOpen={false}
                                onClose={() => {}}
                                categories={categoriesWithProducts}
                                onCategorySelect={handleCategorySelect}
                                onProductSelect={handleProductSelect}
                            />
                        </div>

                        {/* Main content */}
                        <main className="flex-1 min-w-0">

                            {/* Page heading + mobile menu trigger */}
                            <div className="flex items-start justify-between gap-4 mb-5">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                    {selectedProduct?.title ||
                                        selectedProduct?.name ||
                                        selectedCategory?.title ||
                                        selectedCategory?.name ||
                                        "Products"}
                                </h1>
                                <button
                                    onClick={() => setSidebarOpen(true)}
                                    className="lg:hidden flex items-center gap-1.5 text-gray-700 text-sm border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors flex-shrink-0"
                                >
                                    <Menu className="h-4 w-4" />
                                    Categories
                                </button>
                            </div>

                            {/* Category info card */}
                            {selectedCategory && (
                                <section className="mb-6 bg-white border border-gray-200 rounded-xl p-4 md:p-6">
                                    <div className="grid gap-6 md:grid-cols-[1fr_auto] items-start">
                                        <div className="min-w-0">
                                            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                                {selectedCategory.title || selectedCategory.name}
                                            </h2>
                                            {selectedCategory.description && (
                                                <div className="text-sm text-gray-600 leading-relaxed">
                                                    {parse(selectedCategory.description)}
                                                </div>
                                            )}
                                            {selectedCategory.content && (
                                                <div className="prose prose-sm max-w-none mt-3">
                                                    {parse(selectedCategory.content)}
                                                </div>
                                            )}
                                        </div>
                                        {(selectedCategory.featured_image || selectedCategory.icon_image) && (
                                            <div className="w-full md:w-56 flex-shrink-0">
                                                <img
                                                    src={`/storage/${selectedCategory.featured_image || selectedCategory.icon_image}`}
                                                    alt={selectedCategory.name}
                                                    className="w-full h-44 object-cover rounded-lg border border-gray-100"
                                                    onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* Product main image */}
                            {selectedProduct && (
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                    <img
                                        src={activeImage || "/images/firealram.jpg"}
                                        alt={selectedProduct?.name || "Product"}
                                        className="w-full max-h-[400px] sm:max-h-[480px] object-contain p-4"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "/images/firealram.jpg"; }}
                                    />
                                </div>
                            )}

                            {/* Thumbnail gallery */}
                            {productImages.length > 1 && (
                                <div className="mt-3 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                                    {productImages.map((src) => (
                                        <button
                                            key={src}
                                            onClick={() => setActiveImage(src)}
                                            className={`border rounded-lg overflow-hidden bg-gray-50 aspect-square transition-all ${
                                                activeImage === src
                                                    ? "border-red-500 ring-2 ring-red-200"
                                                    : "border-gray-200 hover:border-red-300"
                                            }`}
                                        >
                                            <img
                                                src={src}
                                                alt="Product thumbnail"
                                                className="h-full w-full object-cover"
                                                onError={(e) => { e.target.onerror = null; e.target.src = "/images/firealram.jpg"; }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Product content / description */}
                            <div className="prose prose-sm md:prose max-w-none mt-6">
                                {selectedProduct?.content ? (
                                    <div>{parse(selectedProduct.content)}</div>
                                ) : selectedProduct ? (
                                    <div>
                                        <h2 className="text-base md:text-lg font-bold text-red-700 uppercase mb-3 leading-snug">
                                            {selectedProduct.title || selectedProduct.name}
                                        </h2>
                                        {selectedProduct.description && (
                                            <p className="text-gray-600 text-sm">
                                                {selectedProduct.description}
                                            </p>
                                        )}
                                    </div>
                                ) : null}
                            </div>

                            {/* Sub-category product cards */}
                            {selectedCategory?.children?.length > 0 && (
                                <div className="mt-10">
                                    <h2 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600 inline-block">
                                        {selectedCategory.name} Products
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {selectedCategory.children.map((child) => (
                                            <div
                                                key={child.id || child.slug || child.name}
                                                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-300 transition-all p-4 flex flex-col"
                                            >
                                                {/* Image or icon placeholder */}
                                                <div className="w-full h-32 rounded-lg mb-3 overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                                                    {child.featured_image || child.icon_image ? (
                                                        <img
                                                            src={`/storage/${child.featured_image || child.icon_image}`}
                                                            alt={child.name}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
                                                        />
                                                    ) : (
                                                        <Shield className="h-10 w-10 text-red-400" />
                                                    )}
                                                </div>
                                                <h4 className="font-bold text-sm text-gray-800 mb-1">{child.name}</h4>
                                                {child.description && (
                                                    <p className="text-xs text-gray-500 flex-1 mb-3 line-clamp-3">
                                                        {child.description}
                                                    </p>
                                                )}
                                                <button
                                                    onClick={() => handleCategorySelect(child)}
                                                    className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors uppercase tracking-wide mt-auto"
                                                >
                                                    View Products
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}