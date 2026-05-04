// import {useEffect, useRef, useState} from "react";
// import {Link} from "@inertiajs/react";
// import {Head} from "@inertiajs/react";
// import gsap from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// import axios from "axios";

// gsap.registerPlugin(ScrollTrigger);

// const imgurl = import.meta.env.VITE_IMAGE_PATH;

// // ─── Scroll To Top ────────────────────────────────────────────────────────────
// function ScrollToTop() {
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const onScroll = () => setVisible(window.scrollY > 300);
//         window.addEventListener("scroll", onScroll, { passive: true });
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

//     if (!visible) return null;

//     return (
//         <button
//             onClick={scrollUp}
//             aria-label="Scroll to top"
//             className="fixed bottom-6 right-6 z-[999] w-11 h-11 rounded-full bg-[#b61302] hover:bg-[#9e1102] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:-translate-y-1 active:translate-y-0"
//         >
//             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
//             </svg>
//         </button>
//     );
// }

// // ─── Project Card ─────────────────────────────────────────────────────────────
// function ProjectCard({project, cardRef}) {
//     return (
//         <Link
//             href={`/project-details/${project.slug}`}
//             ref={cardRef}
//             className="group flex flex-col gap-3 cursor-pointer"
//             style={{willChange: "transform, opacity"}}
//         >
//             <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/3]">
//                 <img
//                     src={project.image ? `${imgurl}/${project.image}` : '/placeholder-image.jpg'}
//                     alt={project.name}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                 />
//                 <span className="absolute top-4 left-4 bg-[#b61302] text-white text-[13px] font-bold px-4 py-1.5 rounded-full leading-none select-none">
//                     {project.category}
//                 </span>
//             </div>
//             <h3 className="text-center text-gray-900 font-bold text-base sm:text-lg leading-snug group-hover:text-[#b61302] transition-colors duration-200">
//                 {project.name}
//             </h3>
//         </Link>
//     );
// }

// // ─── Filter Bar ───────────────────────────────────────────────────────────────
// function FilterBar({active, onChange, categories}) {
//     return (
//         <div className="flex flex-wrap items-center justify-center gap-0">
//             {categories.map((cat, i) => (
//                 <div key={cat} className="flex items-center">
//                     <button
//                         onClick={() => onChange(cat)}
//                         className={`text-sm font-semibold px-3 py-1 transition-colors duration-200 ${
//                             active === cat
//                                 ? "text-[#b61302]"
//                                 : "text-gray-700 hover:text-[#b61302]"
//                         }`}
//                     >
//                         {cat}
//                     </button>
//                     {i < categories.length - 1 && (
//                         <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mx-1 flex-shrink-0" />
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function ProjectsPage() {
//     const [activeCategory, setActiveCategory] = useState("All");
//     const [projects, setProjects] = useState([]);
//     const [categories, setCategories] = useState(["All"]);
//     const [loading, setLoading] = useState(true);
//     const sectionRef = useRef(null);
//     const cardRefs = useRef([]);
//     const headingRef = useRef(null);
//     const filterRef = useRef(null);

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     const fetchProjects = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get('/ourprojects?per_page=100');
//             const items = response.data?.data || response.data || [];
//             setProjects(items);
//         } catch (error) {
//             console.error('Error fetching projects:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const filtered = activeCategory === "All"
//         ? projects
//         : projects.filter((p) => p.category === activeCategory);

//     useEffect(() => {
//         const unique = Array.from(
//             new Set(projects.map((p) => p.category).filter(Boolean))
//         );
//         const nextCategories = ["All", ...unique];
//         setCategories(nextCategories);
//         if (activeCategory !== "All" && !unique.includes(activeCategory)) {
//             setActiveCategory("All");
//         }
//     }, [projects, activeCategory]);

//     useEffect(() => {
//         if (loading) return;

//         const cards = cardRefs.current.filter(Boolean);
//         gsap.set([headingRef.current, filterRef.current], {opacity: 0, y: 30});
//         gsap.set(cards, {opacity: 0, y: 50});

//         gsap.timeline({defaults: {ease: "power3.out"}})
//             .to(headingRef.current, {opacity: 1, y: 0, duration: 0.6})
//             .to(filterRef.current, {opacity: 1, y: 0, duration: 0.5}, "-=0.3")
//             .to(cards, {
//                 opacity: 1, y: 0, duration: 0.55,
//                 stagger: {each: 0.07, from: "start"}
//             }, "-=0.2");

//         ScrollTrigger.create({
//             trigger: sectionRef.current,
//             start: "top 80%",
//             onEnter: () => {
//                 gsap.fromTo(cards,
//                     {opacity: 0, y: 40},
//                     {
//                         opacity: 1, y: 0, duration: 0.6,
//                         stagger: {each: 0.07, from: "start"},
//                         ease: "power3.out",
//                         overwrite: true
//                     }
//                 );
//             },
//             once: true
//         });

//         return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//     }, [loading]);

//     useEffect(() => {
//         if (loading) return;
//         const cards = cardRefs.current.filter(Boolean);
//         gsap.fromTo(cards,
//             {opacity: 0, y: 24, scale: 0.97},
//             {
//                 opacity: 1, y: 0, scale: 1, duration: 0.4,
//                 stagger: {each: 0.06, from: "start"},
//                 ease: "power2.out"
//             }
//         );
//     }, [activeCategory, loading]);

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b61302] mx-auto" />
//                     <p className="mt-4 text-gray-600">Loading projects...</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>

// <Head>
// 	<title>Our Projects | CCTV Installations Nepal</title>
// 	<meta
// 		name="description"
// 		content="View our completed CCTV and security projects across Nepal. Trusted installations for homes, offices, and industries."
// 	/>
// 	<meta name="keywords" content="CCTV Projects Nepal, Security Installations Kathmandu, Surveillance Projects" />

// 	<link rel="canonical" href="https://micronmega.saitsolution.com.np/projects" />

// 	<meta property="og:title" content="CCTV Projects Nepal" />
// 	<meta property="og:description" content="Explore our successful security installations." />
// 	<meta property="og:url" content="https://micronmega.saitsolution.com.np/projects" />
// 	<meta property="og:type" content="website" />
// </Head>

//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap');
//                 * { font-family: 'Barlow', sans-serif; }
//             `}</style>

//             {/* Hero banner */}
//             <div className="relative flex min-h-[320px] items-center justify-center bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[420px] sm:py-20 lg:min-h-[550px] lg:bg-fixed">
//                 <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
//                 <div className="relative z-20 flex flex-col items-center text-center">
//                     <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">Projects</h2>
//                     <h3 className="mt-2 text-sm font-semibold text-white sm:text-base lg:text-xl">
//                         <Link href="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
//                         <span className="mx-2">/</span>
//                         <span>Projects</span>
//                     </h3>
//                 </div>
//             </div>

//             {/* Main section */}
//             <section ref={sectionRef} className="bg-white min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-10">
//                 <div className="max-w-7xl mx-auto flex flex-col gap-8">

//                     <div ref={filterRef} className="flex justify-center">
//                         <FilterBar
//                             active={activeCategory}
//                             onChange={setActiveCategory}
//                             categories={categories}
//                         />
//                     </div>

//                     <div
//                         ref={headingRef}
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
//                     >
//                         {filtered.map((project, i) => (
//                             <ProjectCard
//                                 key={project.slug}
//                                 project={project}
//                                 cardRef={(el) => (cardRefs.current[i] = el)}
//                             />
//                         ))}
//                     </div>

//                     {filtered.length === 0 && (
//                         <div className="text-center py-24 text-gray-400 text-base">No projects found.</div>
//                     )}
//                 </div>
//             </section>

//             {/* Scroll to top */}
//             <ScrollToTop />
//         </>
//     );
// }
import {useEffect, useRef, useState, useMemo} from "react";
import {Link} from "@inertiajs/react";
import {Head} from "@inertiajs/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const imgurl = import.meta.env.VITE_IMAGE_PATH;

// Sort helper function
const sortProjectsByOrder = (projects) => {
    if (!Array.isArray(projects)) return projects;

    const getOrderValue = (item) => {
        const parsed = Number(item?.order);
        if (!Number.isFinite(parsed) || parsed < 1) {
            return 999999;
        }
        return parsed;
    };

    return [...projects].sort((a, b) => getOrderValue(a) - getOrderValue(b));
};

// ─── Scroll To Top ────────────────────────────────────────────────────────────
function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) return null;

    return (
        <button
            onClick={scrollUp}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-[999] w-11 h-11 rounded-full bg-[#b61302] hover:bg-[#9e1102] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:-translate-y-1 active:translate-y-0"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({project, cardRef}) {
    return (
        <Link
            href={`/project-details/${project.slug}`}
            ref={cardRef}
            className="group flex flex-col gap-3 cursor-pointer"
            style={{willChange: "transform, opacity"}}
        >
            <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                    src={project.image ? `${imgurl}/${project.image}` : '/placeholder-image.jpg'}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#b61302] text-white text-[13px] font-bold px-4 py-1.5 rounded-full leading-none select-none">
                    {project.category}
                </span>
            </div>
            <h3 className="text-center text-gray-900 font-bold text-base sm:text-lg leading-snug group-hover:text-[#b61302] transition-colors duration-200">
                {project.name}
            </h3>
        </Link>
    );
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────
function FilterBar({active, onChange, categories}) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-0">
            {categories.map((cat, i) => (
                <div key={cat} className="flex items-center">
                    <button
                        onClick={() => onChange(cat)}
                        className={`text-sm font-semibold px-3 py-1 transition-colors duration-200 ${
                            active === cat
                                ? "text-[#b61302]"
                                : "text-gray-700 hover:text-[#b61302]"
                        }`}
                    >
                        {cat}
                    </button>
                    {i < categories.length - 1 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mx-1 flex-shrink-0" />
                    )}
                </div>
            ))}
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState(["All"]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const headingRef = useRef(null);
    const filterRef = useRef(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/ourprojects?per_page=100');
            const items = response.data?.data || response.data || [];
            // Sort by order when fetching
            setProjects(sortProjectsByOrder(items));
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    // Filter and sort projects by order
    const filtered = useMemo(() => {
        let result = activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);
        return sortProjectsByOrder(result);
    }, [activeCategory, projects]);

    useEffect(() => {
        const unique = Array.from(
            new Set(projects.map((p) => p.category).filter(Boolean))
        );
        const nextCategories = ["All", ...unique];
        setCategories(nextCategories);
        if (activeCategory !== "All" && !unique.includes(activeCategory)) {
            setActiveCategory("All");
        }
    }, [projects, activeCategory]);

    useEffect(() => {
        if (loading) return;

        const cards = cardRefs.current.filter(Boolean);
        gsap.set([headingRef.current, filterRef.current], {opacity: 0, y: 30});
        gsap.set(cards, {opacity: 0, y: 50});

        gsap.timeline({defaults: {ease: "power3.out"}})
            .to(headingRef.current, {opacity: 1, y: 0, duration: 0.6})
            .to(filterRef.current, {opacity: 1, y: 0, duration: 0.5}, "-=0.3")
            .to(cards, {
                opacity: 1, y: 0, duration: 0.55,
                stagger: {each: 0.07, from: "start"}
            }, "-=0.2");

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(cards,
                    {opacity: 0, y: 40},
                    {
                        opacity: 1, y: 0, duration: 0.6,
                        stagger: {each: 0.07, from: "start"},
                        ease: "power3.out",
                        overwrite: true
                    }
                );
            },
            once: true
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, [loading, filtered]);

    useEffect(() => {
        if (loading) return;
        const cards = cardRefs.current.filter(Boolean);
        gsap.fromTo(cards,
            {opacity: 0, y: 24, scale: 0.97},
            {
                opacity: 1, y: 0, scale: 1, duration: 0.4,
                stagger: {each: 0.06, from: "start"},
                ease: "power2.out"
            }
        );
    }, [activeCategory, loading]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b61302] mx-auto" />
                    <p className="mt-4 text-gray-600">Loading projects...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Our Projects | CCTV Installations Nepal</title>
                <meta
                    name="description"
                    content="View our completed CCTV and security projects across Nepal. Trusted installations for homes, offices, and industries."
                />
                <meta name="keywords" content="CCTV Projects Nepal, Security Installations Kathmandu, Surveillance Projects" />
                <link rel="canonical" href="https://micronmega.saitsolution.com.np/projects" />
                <meta property="og:title" content="CCTV Projects Nepal" />
                <meta property="og:description" content="Explore our successful security installations." />
                <meta property="og:url" content="https://micronmega.saitsolution.com.np/projects" />
                <meta property="og:type" content="website" />
            </Head>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap');
                * { font-family: 'Barlow', sans-serif; }
            `}</style>

            {/* Hero banner */}
            <div className="relative flex min-h-[320px] items-center justify-center bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[420px] sm:py-20 lg:min-h-[550px] lg:bg-fixed">
                <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
                <div className="relative z-20 flex flex-col items-center text-center">
                    <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">Projects</h2>
                    <h3 className="mt-2 text-sm font-semibold text-white sm:text-base lg:text-xl">
                        <Link href="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
                        <span className="mx-2">/</span>
                        <span>Projects</span>
                    </h3>
                </div>
            </div>

            {/* Main section */}
            <section ref={sectionRef} className="bg-white min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-10">
                <div className="max-w-7xl mx-auto flex flex-col gap-8">
                    <div ref={filterRef} className="flex justify-center">
                        <FilterBar
                            active={activeCategory}
                            onChange={setActiveCategory}
                            categories={categories}
                        />
                    </div>

                    <div ref={headingRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {filtered.map((project, i) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                cardRef={(el) => (cardRefs.current[i] = el)}
                            />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-24 text-gray-400 text-base">No projects found.</div>
                    )}
                </div>
            </section>

            {/* Scroll to top */}
            <ScrollToTop />
        </>
    );
}
