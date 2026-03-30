// import {useEffect, useRef, useState} from "react";
// import {Link} from "@inertiajs/react";
// import {MapPin, Star, ArrowRight, Filter} from "lucide-react";
// import gsap from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// import {projects, getCategoryColor} from "@/data/projectsData";

// gsap.registerPlugin(ScrollTrigger);

// function StarRating({rating}) {
// 	return (<div className="flex items-center gap-0.5"> {
// 		Array.from({length: 5}).map((_, i) => (<Star key={i}
// 			size={13}
// 			className={
// 				i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
// 			}/>))
// 	} </div>);
// }

// function ProjectCard({project, cardRef}) {
// 	return (<Link href={
// 			`/project-details?slug=${
// 				project.slug
// 			}`
// 		}
// 		ref={cardRef}
// 		className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
// 		style={
// 			{willChange: "transform, opacity"}
// 	}>
// 		<div className="relative w-full h-52 overflow-hidden">
// 			<img src={
// 					project.image
// 				}
// 				alt={
// 					project.name
// 				}
// 				className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"/>
// 			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
// 			<div className={
// 				`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${
// 					getCategoryColor(project.category)
// 				}`
// 			}> {
// 				project.category
// 			} </div>
// 			<div className="absolute top-3 right-3 bg-black/50 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"> {
// 				project.year
// 			} </div>
// 			<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
// 				<StarRating rating={
// 					project.rating
// 				}/>
// 				<span className="text-white text-[11px] font-medium bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm"> {
// 					project.contractType
// 				} </span>
// 			</div>
// 		</div>

// 		<div className="flex flex-col flex-1 p-5 gap-3">
// 			<div>
// 				<h3 className="text-gray-900 font-bold text-base leading-snug group-hover:text-red-600 transition-colors duration-200"> {
// 					project.name
// 				} </h3>
// 				<div className="flex items-center gap-1 mt-1">
// 					<MapPin size={12}
// 						className="text-red-500 flex-shrink-0"/>
// 					<span className="text-gray-500 text-xs"> {
// 						project.location
// 					}</span>
// 				</div>
// 			</div>

// 			<p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1"> {
// 				project.description
// 			} </p>

// 			<div className="flex flex-wrap gap-1.5"> {
// 				project.tags.slice(0, 3).map((tag) => (<span key={tag}
// 					className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full"> {tag} </span>))
// 			} </div>

// 			<div className="flex items-center gap-1.5 text-red-600 text-xs font-bold uppercase tracking-wide mt-1 group-hover:gap-3 transition-all duration-200">
// 				View Project
// 				<ArrowRight size={13}/>
// 			</div>
// 		</div>
// 	</Link>);
// }

// const ALL_CATEGORIES = [
// 	"All",
// 	"Healthcare",
// 	"Hospitality",
// 	"Education",
// 	"Banking & Finance",
// 	"Government",
// 	"Diplomatic"
// ];

// function FilterBar({active, onChange}) {
// 	return (<div className="flex flex-wrap items-center gap-2">
// 		<Filter size={15}
// 			className="text-gray-400 flex-shrink-0"/> {
// 		ALL_CATEGORIES.map((cat) => (<button key={cat}
// 			onClick={
// 				() => onChange(cat)
// 			}
// 			className={
// 				`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
// 					active === cat ? "bg-red-600 text-white border-red-600" : "bg-white text-gray-600 border-gray-200 hover:border-red-400 hover:text-red-600"
// 				}`
// 		}> {cat} </button>))
// 	} </div>);
// }

// export default function ProjectsPage() {
// 	const [activeCategory, setActiveCategory] = useState("All");
// 	const sectionRef = useRef(null);
// 	const cardRefs = useRef([]);
// 	const headingRef = useRef(null);
// 	const filterRef = useRef(null);

// 	const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

// 	useEffect(() => {
// 		const cards = cardRefs.current.filter(Boolean);
// 		gsap.set([
// 			headingRef.current, filterRef.current
// 		], {
// 			opacity: 0,
// 			y: 30
// 		});
// 		gsap.set(cards, {
// 			opacity: 0,
// 			y: 50
// 		});

// 		gsap.timeline({
// 			defaults: {
// 				ease: "power3.out"
// 			}
// 		}).to(headingRef.current, {
// 			opacity: 1,
// 			y: 0,
// 			duration: 0.6
// 		}).to(filterRef.current, {
// 			opacity: 1,
// 			y: 0,
// 			duration: 0.5
// 		}, "-=0.3").to(cards, {
// 			opacity: 1,
// 			y: 0,
// 			duration: 0.55,
// 			stagger: {
// 				each: 0.07,
// 				from: "start"
// 			}
// 		}, "-=0.2");

// 		ScrollTrigger.create({
// 			trigger: sectionRef.current,
// 			start: "top 80%",
// 			onEnter: () => {
// 				gsap.fromTo(cards, {
// 					opacity: 0,
// 					y: 40
// 				}, {
// 					opacity: 1,
// 					y: 0,
// 					duration: 0.6,
// 					stagger: {
// 						each: 0.07,
// 						from: "start"
// 					},
// 					ease: "power3.out",
// 					overwrite: true
// 				});
// 			},
// 			once: true
// 		});

// 		return() => ScrollTrigger.getAll().forEach((t) => t.kill());
// 	}, []);

// 	useEffect(() => {
// 		const cards = cardRefs.current.filter(Boolean);
// 		gsap.fromTo(cards, {
// 			opacity: 0,
// 			y: 24,
// 			scale: 0.97
// 		}, {
// 			opacity: 1,
// 			y: 0,
// 			scale: 1,
// 			duration: 0.4,
// 			stagger: {
// 				each: 0.06,
// 				from: "start"
// 			},
// 			ease: "power2.out"
// 		});
// 	}, [activeCategory]);

// 	return (<>
// 		<style> {`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap');
//         * { font-family: 'Barlow', sans-serif; }
//       `}</style>

// 		<div className="relative flex min-h-[320px] items-center justify-center bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[420px] sm:py-20 lg:min-h-[550px] lg:bg-fixed">
// 			<div className="absolute inset-0 bg-gray-900/70 pointer-events-none"/>
// 			<div className="relative z-20 flex flex-col items-center text-center">
// 				<h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">Projects</h2>
// <h3 className="mt-2 text-sm font-semibold text-white sm:text-base lg:text-xl">
// 	  <Link to="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
// 	  <span className="mx-2">/</span>
// 	  <span>Projects</span>
// 	</h3>			</div>
// 		</div>

// 		{/* Content */}
// 		<section ref={sectionRef}
// 			className="bg-gray-50 min-h-screen py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
// 			<div className="max-w-7xl mx-auto flex flex-col gap-10">

// 				<div className="flex flex-col gap-4">
// 					<div ref={headingRef}
// 						className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
// 						<div>
// 							<p className="text-red-600 text-sm font-bold tracking-[2px] uppercase mb-1">Portfolio</p>
// 							<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
// 								Projects We've
// 								<span className="text-red-600">Delivered</span>
// 							</h2>
// 						</div>
// 						<p className="text-gray-500 text-sm"> {
// 							filtered.length
// 						}
// 							project{
// 							filtered.length !== 1 ? "s" : ""
// 						}
// 							— {
// 							activeCategory === "All" ? "all sectors" : activeCategory
// 						} </p>
// 					</div>
// 					<div ref={filterRef}>
// 						<FilterBar active={activeCategory}
// 							onChange={setActiveCategory}/>
// 					</div>
// 				</div>

// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"> {
// 					filtered.map((project, i) => (<ProjectCard key={
// 							project.slug
// 						}
// 						project={project}
// 						cardRef={
// 							(el) => (cardRefs.current[i] = el)
// 						}/>))
// 				} </div>

// 				{
// 				filtered.length === 0 && (<div className="text-center py-24 text-gray-400 text-base">No projects found.</div>)
// 			} </div>
// 		</section>
// 	</>);
// }

import {useEffect, useRef, useState} from "react";
import {Link} from "@inertiajs/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({project, cardRef}) {
    return (
        <Link
            href={`/project-details/${project.slug}`}
            ref={cardRef}
            className="group flex flex-col gap-3 cursor-pointer"
            style={{willChange: "transform, opacity"}}
        >
            {/* Image block — rounded-3xl, fixed aspect ratio */}
            <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                    src={project.image || '/placeholder-image.jpg'}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Category badge — absolute top-left, red pill */}
                <span className="absolute top-4 left-4 bg-[#b61302] text-white text-[13px] font-bold px-4 py-1.5 rounded-full leading-none select-none">
                    {project.category}
                </span>
            </div>

            {/* Project name below image, centered */}
            <h3 className="text-center text-gray-900 font-bold text-base sm:text-lg leading-snug group-hover:text-[#b61302] transition-colors duration-200">
                {project.name}
            </h3>
        </Link>
    );
}

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
                    {/* Dot separator between items */}
                    {i < categories.length - 1 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mx-1 flex-shrink-0" />
                    )}
                </div>
            ))}
        </div>
    );
}

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
            setProjects(items);
        } catch (error) {
            console.error('Error fetching projects:', error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        } finally {
            setLoading(false);
        }
    };

    const filtered = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

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
                opacity: 1,
                y: 0,
                duration: 0.55,
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
    }, [loading]);

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

                    {/* Filter bar — centered, pill dots */}
                    <div ref={filterRef} className="flex justify-center">
                        <FilterBar
                            active={activeCategory}
                            onChange={setActiveCategory}
                            categories={categories}
                        />
                    </div>

                    {/* Grid */}
                    <div
                        ref={headingRef}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
                    >
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
        </>
    );
}
