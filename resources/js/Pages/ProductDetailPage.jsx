import { useState, useEffect, useMemo, useRef } from "react";
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

// ─── Shared card used for both sub-categories and products ───────────────────
function ItemCard({ image, title, description, label, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col cursor-pointer group overflow-hidden"
        >
            <div className="w-full h-44 overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
                    />
                ) : (
                    <Shield className="h-12 w-12 text-red-300" />
                )}
            </div>
            <div className="p-4 flex flex-col flex-1">
                <h4 className="font-bold text-sm text-gray-800 mb-1 group-hover:text-red-700 transition-colors leading-snug">
                    {title}
                </h4>
                {description && (
                    <p className="text-xs text-gray-500 flex-1 mb-3 line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                )}
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-red-600 uppercase tracking-wide">
                    {label} →
                </span>
            </div>
        </div>
    );
}

// ─── Category/Product Detail Component (Reusable for both categories and sub-categories) ───
function DetailView({ item, type, onImageClick, onProductSelect }) {
    const [activeImage, setActiveImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    useEffect(() => {
        // Set up images based on item type
        let images = [];
        
        if (type === 'category') {
            // Only add featured_image, NOT icon_image
            if (item.featured_image) {
                images.push({ src: `/storage/${item.featured_image}`, type: 'featured' });
            }
            // Add additional images from category (if available)
            if (item.additional_images && Array.isArray(item.additional_images)) {
                item.additional_images.forEach(img => {
                    if (img?.image_path) images.push({ src: `/storage/${img.image_path}`, type: 'additional' });
                });
            }
        } else if (type === 'product') {
            if (item.featured_image) images.push({ src: `/storage/${item.featured_image}`, type: 'featured' });
            if (item.images && Array.isArray(item.images)) {
                item.images.forEach(img => {
                    if (img?.image_path) images.push({ src: `/storage/${img.image_path}`, type: 'additional' });
                });
            }
        }
        
        const featured = images.find(img => img.type === 'featured');
        const others = images.filter(img => img.type !== 'featured');
        
        setActiveImage(featured?.src || (images[0]?.src || null));
        setAdditionalImages(others.slice(0, 6)); // Up to 6 additional images for grid
    }, [item, type]);

    const handleThumbnailClick = (image) => {
        setActiveImage(image);
        if (onImageClick) onImageClick(image);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {/* Title Section */}
            <div className="px-5 pt-5 pb-3 border-b border-gray-100">
                <h2 className="text-lg md:text-3xl font-bold text-gray-900">
                    {item.title || item.name}
                </h2>
                {type === 'product' && item.category?.name && (
                    <p className="text-lg text-red-600 font-medium mt-0.5 uppercase tracking-wide">
                        {item.category.name}
                    </p>
                )}
            </div>

            {/* Banner-shaped Featured Image - Only shows featured_image, not icon_image */}
            {activeImage && (
                <div className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden ">
                        <img
                            src={activeImage}
                            alt={item.name || "Featured"}
                            className="w-full h-full object-cover object-center"
                            onError={(e) => { 
                                e.target.onerror = null; 
                                e.target.src = "/images/firealram.jpg";
                            }}
                        />
                        {/* Overlay for better text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>
                </div>
            )}

            {/* Additional Images Grid - 3 columns - Only shows additional images, not icon_image */}
            {additionalImages.length > 0 && (
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Camera className="h-4 w-4 text-red-500" />
                        Gallery
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
                        {additionalImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleThumbnailClick(img.src)}
                                className={`relative group rounded-lg overflow-hidden bg-white border-2 transition-all aspect-square ${
                                    activeImage === img.src
                                        ? "border-red-500 ring-2 ring-red-200 ring-offset-1"
                                        : "border-gray-200 hover:border-red-300 hover:shadow-md"
                                }`}
                            >
                                <img
                                    src={img.src}
                                    alt={`Gallery ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = "/images/firealram.jpg";
                                    }}
                                />
                                {activeImage === img.src && (
                                    <div className="absolute inset-0 bg-red-500/10 pointer-events-none" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Description and Content */}
            <div className="px-5 py-6">
                {item.content ? (
                    <div className="prose prose-sm md:prose max-w-none">
                        {parse(item.content)}
                    </div>
                ) : item.description ? (
                    <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                        <p>{item.description}</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function SidebarItem({ item, isOpen, onToggle, onCategorySelect, onProductSelect }) {
    const Icon = iconMap[item.name] || Shield;
    const hasChildren = item.children?.length > 0;
    const hasProducts = item.products?.length > 0;
    const hasDropdown = hasChildren || hasProducts;

    return (
        <li className="border-b border-gray-100 last:border-0">
            <div className="flex items-center w-full hover:bg-gray-50 transition-colors">
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
                    <span className="font-medium text-lg text-gray-800">{item.name}</span>
                </button>

                {hasDropdown && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onToggle(); }}
                        className="px-3 py-2.5 text-gray-400 hover:text-gray-600"
                        aria-label="Toggle submenu"
                    >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                )}
            </div>

            {isOpen && (
                <ul className="bg-gray-50 border-t border-gray-100">
                    {item.children?.map((child) => (
                        <li key={child.id || child.slug || child.name}>
                            <button
                                onClick={() => onCategorySelect(child)}
                                className="w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-red-700 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-0"
                            >
                                {child.name}
                            </button>
                        </li>
                    ))}
                    {item.products?.map((product) => (
                        <li
                            key={product.id || product.slug || product.name}
                            onClick={() => onProductSelect(product)}
                            className="px-6 py-2 text-lg text-gray-500 hover:text-red-700 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-0 flex items-center gap-1.5"
                        >
                            <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
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
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
            )}
            <aside
                className={`
                    fixed lg:sticky top-0 lg:top-4 z-50 lg:z-auto
                    w-72 lg:w-full
                    h-screen lg:h-auto lg:max-h-[calc(100vh-2rem)]
                    bg-white shadow-xl lg:shadow-none overflow-y-auto
                    transition-transform duration-300
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                <div className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
                    <h3 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck className="h-8 w-8" /> Security Products
                    </h3>
                    <button onClick={onClose} className="lg:hidden text-white hover:text-gray-300 transition-colors">
                        <X className="h-6 w-6" />
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

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
    const { props } = usePage();
    const initKey = useRef(null);

    const categorySlug = props?.categorySlug || null;
    const productSlug  = props?.productSlug  || null;

    const [sidebarOpen,      setSidebarOpen]      = useState(false);
    const [categories,       setCategories]       = useState([]);
    const [allProducts,      setAllProducts]      = useState([]);
    const [selectedProduct,  setSelectedProduct]  = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading,          setLoading]          = useState(true);
    const [activeImage,      setActiveImage]      = useState(null);

    // Products fetched on-demand when a category view is shown
    const [categoryProducts,        setCategoryProducts]        = useState([]);
    const [categoryProductsLoading, setCategoryProductsLoading] = useState(false);

    // ── URL helper ────────────────────────────────────────────────────────────
    const updateUrl = (slug) => {
        if (slug) window.history?.replaceState(null, "", `/category/${slug}`);
    };

    // ── Data fetchers ─────────────────────────────────────────────────────────
    const fetchCategories = async () => {
        try {
            const res = await axios.get("/ourproductcategories");
            const transformed = res.data.data.map((cat) => ({
                id:             cat.id,
                name:           cat.name,
                slug:           cat.slug,
                icon_image:     cat.icon_image     || null,
                featured_image: cat.featured_image || null,
                description:    cat.description    || "",
                title:          cat.title          || "",
                content:        cat.content        || "",
                additional_images: cat.additional_images || [],
                children: (cat.children ?? []).map((child) => ({
                    id:             child.id,
                    name:           child.name,
                    slug:           child.slug,
                    icon_image:     child.icon_image     || null,
                    featured_image: child.featured_image || null,
                    description:    child.description    || "",
                    title:          child.title          || "",
                    content:        child.content        || "",
                    additional_images: child.additional_images || [],
                })),
            }));
            setCategories(transformed);
            return transformed;
        } catch (err) {
            console.error("Error fetching categories:", err);
            return [];
        }
    };

    const fetchAllProducts = async () => {
        try {
            const res  = await axios.get("/ourproducts");
            const list = res.data?.data || res.data || [];
            setAllProducts(list);
            return list;
        } catch (err) {
            console.error("Error fetching products:", err);
            return [];
        }
    };

    /**
     * Find a category object purely from the already-loaded list.
     * No API call — avoids the 404 on page refresh entirely.
     */
    const resolveCategoryBySlug = (slug, cats) => {
        const source = cats ?? categories;
        return (
            source.find((c) => c.slug === slug) ??
            source.flatMap((c) => c.children ?? []).find((c) => c.slug === slug) ??
            null
        );
    };

    const fetchProductBySlug = async (slug) => {
        try {
            setLoading(true);
            const res     = await axios.get(`/ourproducts/${slug}`);
            const product = res.data?.data || null;
            setSelectedProduct(product);
            setSelectedCategory(product?.category || null);
        } catch (err) {
            console.error("Error fetching product:", err);
            setSelectedProduct(null);
            setSelectedCategory(null);
        } finally {
            setLoading(false);
        }
    };

    // ── Handlers ──────────────────────────────────────────────────────────────
    const handleCategorySelect = (category) => {
        if (!category?.slug) return;
        setSelectedProduct(null);   // exit product view
        setCategoryProducts([]);    // reset stale list
        setSelectedCategory(category);
        updateUrl(category.slug);
        setSidebarOpen(false);
    };

    const handleProductSelect = async (product) => {
        if (!product?.slug) return;
        await fetchProductBySlug(product.slug);
        updateUrl(product.slug);
        setSidebarOpen(false);
    };

    // ── Initialise once per unique slug pair ──────────────────────────────────
    useEffect(() => {
        const key = `${categorySlug ?? ""}|${productSlug ?? ""}`;
        if (initKey.current === key) return; // prevent double-fire from Inertia re-renders
        initKey.current = key;

        const init = async () => {
            setLoading(true);
            const [cats] = await Promise.all([fetchCategories(), fetchAllProducts()]);

            if (productSlug) {
                // /category/{productSlug} — load the specific product
                await fetchProductBySlug(productSlug);
            } else if (categorySlug) {
                // /category/{categorySlug} — show category view, no products API call needed
                const cat = resolveCategoryBySlug(categorySlug, cats);
                setSelectedProduct(null);
                setSelectedCategory(cat);
                setLoading(false);
            } else {
                setLoading(false);
            }
        };

        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorySlug, productSlug]);

    // ── Lazily load products when a category is displayed ────────────────────
    useEffect(() => {
        if (!selectedCategory?.slug || selectedProduct) {
            setCategoryProducts([]);
            return;
        }

        let cancelled = false;
        const load = async () => {
            setCategoryProductsLoading(true);
            try {
                const res = await axios.get(`/ourproducts/category/${selectedCategory.slug}`);
                if (!cancelled) setCategoryProducts(res.data?.data || []);
            } catch {
                // 404 = no products yet — show empty grid, not an error
                if (!cancelled) setCategoryProducts([]);
            } finally {
                if (!cancelled) setCategoryProductsLoading(false);
            }
        };

        load();
        return () => { cancelled = true; };
    }, [selectedCategory?.slug, selectedProduct]);

    // ── Sidebar data ──────────────────────────────────────────────────────────
    const categoriesWithProducts = useMemo(() => {
        if (!categories.length) return [];

        const byCategorySlug = allProducts.reduce((acc, p) => {
            const slug = p?.category?.slug;
            if (!slug) return acc;
            if (!acc[slug]) acc[slug] = [];
            acc[slug].push({ id: p.id, name: p.name, slug: p.slug });
            return acc;
        }, {});

        return categories.map((cat) => ({
            ...cat,
            products: byCategorySlug[cat.slug] || [],
        }));
    }, [categories, allProducts]);

    // ── Product images ─────────────────────────────────────────────────────────
    const productImages = useMemo(() => {
        const imgs = [];
        if (selectedProduct?.featured_image) imgs.push(`/storage/${selectedProduct.featured_image}`);
        (selectedProduct?.images ?? []).forEach((img) => {
            if (img?.image_path) imgs.push(`/storage/${img.image_path}`);
        });
        return [...new Set(imgs)];
    }, [selectedProduct]);

    useEffect(() => {
        setActiveImage(productImages[0] || null);
    }, [productImages]);

    // ── Derived values ─────────────────────────────────────────────────────────
    const pageTitle =
        selectedProduct?.category?.name ||
        selectedCategory?.name ||
        "Products";

    // ── Loading screen ─────────────────────────────────────────────────────────
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

    // ── Render ─────────────────────────────────────────────────────────────────
    return (
        <>
            {/* Hero Banner */}
            <div
                className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[380px] lg:min-h-[460px] lg:bg-fixed"
                style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
                <div className="relative z-20 flex flex-col items-center text-center gap-3">
                    <h2 className="text-3xl font-extrabold uppercase text-white sm:text-5xl ">
                        {pageTitle}
                    </h2>
                    <p className="text-sm font-medium text-gray-300 sm:text-base">
                        <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
                        <span className="mx-2 text-gray-500">/</span>
                        <span className="text-white">{pageTitle}</span>
                    </p>
                </div>
            </div>

            {/* Main layout */}
            <div className="min-h-screen bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-0">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

                        {/* Mobile sidebar overlay */}
                        {sidebarOpen && (
                            <Sidebar
                                isMobileOpen
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

                            {/* Heading + mobile categories button */}
                            <div className="flex items-start justify-between gap-4 mb-5">
                                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                    {selectedProduct?.title  ||
                                     selectedProduct?.name   ||
                                     selectedCategory?.title ||
                                     selectedCategory?.name  ||
                                     "Products"}
                                </h1>
                                <button
                                    onClick={() => setSidebarOpen(true)}
                                    className="lg:hidden flex items-center gap-1.5 text-gray-700 text-md border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors flex-shrink-0"
                                >
                                    <Menu className="h-6 w-6" /> Categories
                                </button>
                            </div>

                            {/* ── PRODUCT VIEW ── */}
                            {selectedProduct ? (
                                <DetailView 
                                    item={selectedProduct} 
                                    type="product"
                                    onImageClick={setActiveImage}
                                />

                            ) : selectedCategory ? (
                                /* ── CATEGORY VIEW ── */
                                <>
                                    {/* Category Detail View with consistent layout */}
                                    <DetailView 
                                        item={selectedCategory} 
                                        type="category"
                                        onImageClick={setActiveImage}
                                        onProductSelect={handleProductSelect}
                                    />

                                    {/* Sub-category cards — same ItemCard as products */}
                                    {selectedCategory.children?.length > 0 && (
                                        <div className="mt-8">
                                            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600 inline-block">
                                                Sub-categories
                                            </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                {selectedCategory.children.map((child) => (
                                                    <ItemCard
                                                        key={child.id || child.slug || child.name}
                                                        image={
                                                            (child.featured_image || child.icon_image)
                                                                ? `/storage/${child.featured_image || child.icon_image}`
                                                                : null
                                                        }
                                                        title={child.title || child.name}
                                                        description={child.description}
                                                        label="View Products"
                                                        onClick={() => handleCategorySelect(child)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Direct products under this category */}
                                    {categoryProductsLoading && (
                                        <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600" />
                                            Loading products…
                                        </div>
                                    )}

                                    {!categoryProductsLoading && categoryProducts.length > 0 && (
                                        <div className="mt-8">
                                            <h2 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b-2 border-red-600 inline-block">
                                                {selectedCategory.name} Products
                                            </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                {categoryProducts.map((product) => (
                                                    <ItemCard
                                                        key={product.id || product.slug}
                                                        image={
                                                            product.featured_image
                                                                ? `/storage/${product.featured_image}`
                                                                : null
                                                        }
                                                        title={product.title || product.name}
                                                        description={product.description}
                                                        label="View Details"
                                                        onClick={() => handleProductSelect(product)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>

                            ) : (
                                <div className="text-center text-gray-400 py-20">
                                    Select a category or product from the sidebar.
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}