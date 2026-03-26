import { useState, useEffect } from "react";
import {
    AlertTriangle,
    Bell,
    Building2,
    Camera,
    Car,
    CheckCircle2,
    ChevronDown,
    DoorClosed,
    Fingerprint,
    Flame,
    KeyRound,
    Menu,
    PhoneCall,
    Radio,
    ScanLine,
    Shield,
    ShieldCheck,
    UserRound,
    Wifi,
    X,
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

function SidebarItem({ item, isOpen, onToggle, onCategorySelect }) {
    const Icon = iconMap[item.name] || Shield;

    return (
        <li className={`border-b border-gray-100 last:border-0`}>
            <button
                onClick={() => item.children && onToggle()}
                className="w-full flex items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50"
            >
                <span className="flex items-center gap-2" onClick={() => onCategorySelect(item)}>
                    <Icon className="h-4 w-4 text-red-600" />
                    <span>{item.name}</span>
                </span>
                {item.children && item.children.length > 0 && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                )}
            </button>
            {item.children && item.children.length > 0 && isOpen && (
                <ul className="bg-white border-t border-gray-100">
                    {item.children.map((child) => (
                        <li
                            key={child.id || child.slug || child.name}
                            onClick={() => onCategorySelect(child)}
                            className="px-6 py-1.5 text-sm text-gray-600 hover:text-red-700 hover:bg-red-50 cursor-pointer border-b border-gray-50"
                        >
                            {child.name}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

function QuickEnquiry() {
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-4">
            <h2 className="text-base font-bold text-gray-800 mb-1 pb-2 border-b border-gray-200 uppercase tracking-wide">
                Quick Enquiry
            </h2>
            <p className="text-xs text-red-600 mb-3">*All fields are required</p>
            {submitted && (
                <div className="bg-green-50 text-green-700 text-sm p-2 rounded mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent successfully!
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500"
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500"
                />
                <textarea
                    placeholder="Message"
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none"
                />
                <div>
                    <label className="text-xs text-gray-600 block mb-1">Enter website name here *</label>
                    <input
                        type="text"
                        placeholder="Type atss"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    <p className="text-xs text-gray-400 mt-1">Type website name "atss"</p>
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm uppercase tracking-wide transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

function Sidebar({ isMobileOpen, onClose, categories, onCategorySelect }) {
    const [openItems, setOpenItems] = useState({});
    
    const toggle = (name) => setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));

    return (
        <>
            {isMobileOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
            )}
            <aside
                className={`
                    fixed lg:sticky top-0 lg:top-4 z-50 lg:z-auto
                    w-72 lg:w-full
                    h-screen lg:h-auto
                    bg-white
                    shadow-xl lg:shadow-none
                    overflow-y-auto
                    transition-transform duration-300
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                    lg:block
                `}
            >
                <div className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" /> Security Products
                    </h3>
                    <button onClick={onClose} className="lg:hidden text-white">
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
                            />
                        ))}
                    </ul>
                </nav>
                <QuickEnquiry />
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
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/ourcategories');
            console.log('Categories response:', response.data);
            
            // Transform categories data
            const transformedCategories = response.data.data.map(category => ({
                name: category.name,
                children: category.children?.map(child => ({
                    id: child.id,
                    name: child.name,
                    slug: child.slug
                })) || [],
                slug: category.slug,
                id: category.id
            }));
            setCategories(transformedCategories);
            return transformedCategories;
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const fetchProductsByCategory = async (categorySlug) => {
        try {
            setLoading(true);
            const response = await axios.get(`/ourproducts/category/${categorySlug}`);
            console.log('Products response:', response.data);
            
            if (response.data.data && response.data.data.length > 0) {
                setSelectedProduct(response.data.data[0]);
            } else {
                setSelectedProduct(null);
            }
            const found = categories.find(c => c.slug === categorySlug);
            setSelectedCategory(found || null);
        } catch (error) {
            console.error('Error fetching products:', error);
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
            if (response.data?.data) {
                setSelectedProduct(response.data.data);
                setSelectedCategory(response.data.data.category || null);
            } else {
                setSelectedProduct(null);
                setSelectedCategory(null);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
            setSelectedProduct(null);
            setSelectedCategory(null);
        } finally {
            setLoading(false);
        }
    };

    const handleCategorySelect = async (category) => {
        if (category?.slug) {
            await fetchProductsByCategory(category.slug);
            setSidebarOpen(false);
            return;
        }
        if (category?.id) {
            const found = categories.find(c => c.id === category.id);
            if (found?.slug) {
                await fetchProductsByCategory(found.slug);
                setSidebarOpen(false);
            }
        }
    };

    useEffect(() => {
        const init = async () => {
            const list = await fetchCategories();

            if (productSlug) {
                await fetchProductBySlug(productSlug);
                return;
            }

            if (categorySlug) {
                await fetchProductsByCategory(categorySlug);
            }
        };
        init();
    }, [categorySlug, productSlug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Banner */}
            <div className="relative flex min-h-[360px] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[420px] sm:py-20 lg:min-h-[550px] lg:bg-fixed"
                style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-gray-900/70 pointer-events-none"/>
                <div className="relative z-20 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">
                        {selectedCategory?.name || selectedProduct?.category?.name || "Products"}
                    </h2>
                    <h3 className="mt-2 text-sm font-semibold text-white sm:text-base lg:text-xl">
                        <Link href="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
                        <span className="mx-2">/</span>
                        <span>{selectedCategory?.name || selectedProduct?.category?.name || "Product Details"}</span>
                    </h3>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:hidden">
                            {sidebarOpen && (
                                <Sidebar
                                    isMobileOpen={sidebarOpen}
                                    onClose={() => setSidebarOpen(false)}
                                    categories={categories}
                                    onCategorySelect={handleCategorySelect}
                                />
                            )}
                        </div>
                        <div className="hidden lg:block w-72 flex-shrink-0">
                            <Sidebar
                                isMobileOpen={false}
                                onClose={() => {}}
                                categories={categories}
                                onCategorySelect={handleCategorySelect}
                            />
                        </div>
                        <main className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-6">
                                        {selectedProduct?.title || selectedProduct?.name || "Fire Detection Notification and Suppression"}
                                    </h1>
                                </div>
                                <button
                                    onClick={() => setSidebarOpen(true)}
                                    className="lg:hidden flex items-center gap-2 text-gray-700 text-sm border border-gray-300 px-3 py-1.5 rounded"
                                >
                                    <Menu className="h-4 w-4" />
                                    Menu
                                </button>
                            </div>
                            
                            {/* Product Image */}
                            <img
                                src={selectedProduct?.featured_image ? `/storage/${selectedProduct.featured_image}` : "/images/firealram.jpg"}
                                alt={selectedProduct?.name || "Product"}
                                className="w-full max-h-[420px] sm:max-h-[520px] object-contain rounded-xl border border-gray-200 bg-white"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/images/firealram.jpg";
                                }}
                            />
                            
                            {/* Product Content */}
                            <div className="prose-sm md:prose max-w-none mt-6">
                                {selectedProduct?.content ? (
                                    <div>{parse(selectedProduct.content)}</div>
                                ) : (
                                    <div>
                                        <h2 className="text-base md:text-lg font-bold text-red-700 uppercase mb-4 leading-snug">
                                            {selectedProduct?.title || "Fire Alarm Systems: Protecting Lives and Properties"}
                                        </h2>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {selectedProduct?.description || "Professional fire detection and alarm systems for complete safety."}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Sub Products Section */}
                            {selectedCategory?.children && selectedCategory.children.length > 0 && (
                                <div className="mt-8">
                                    <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-red-600 inline-block">
                                        {selectedCategory.name} Products
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {selectedCategory.children.map((child) => (
                                            <div
                                                key={child.id || child.slug || child.name}
                                                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-red-400 transition-all p-4 flex flex-col"
                                            >
                                                <div className="w-full h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-3 flex items-center justify-center">
                                                    <Flame className="h-10 w-10 text-red-500" />
                                                </div>
                                                <h4 className="font-bold text-sm text-gray-800 mb-1">{child.name}</h4>
                                                <p className="text-xs text-gray-500 flex-1 mb-3">{child.description}</p>
                                                <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1.5 px-3 rounded transition-colors uppercase tracking-wide">
                                                    Read More
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
