// import { useState, useRef, useEffect, useMemo } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import axios from "axios";

// gsap.registerPlugin(ScrollTrigger);

// // ── Single project card ──
// const ProjectCard = ({ project }) => {
//   return (
//     <div className="flex flex-col gap-3 group cursor-pointer">
//       <div className="relative rounded-2xl overflow-hidden">
//         <img
//           src={project.image || project.image_url || "/placeholder-image.jpg"}
//           alt={project.title || project.name}
//           className="w-full h-[220px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <span className="absolute top-4 left-4 bg-[#cc1400] text-white text-sm font-semibold px-3 py-1 rounded-md">
//           {project.category || "Project"}
//         </span>
//       </div>
//       <p className="text-center text-gray-800 font-semibold text-lg leading-relaxed group-hover:text-[#cc1400] transition-colors duration-150">
//         {project.title || project.name}
//       </p>
//     </div>
//   );
// };

// // ── Mobile carousel ──
// const MobileCarousel = ({ items }) => {
//   const [index, setIndex] = useState(0);
//   const touchStartX = useRef(null);
//   const touchEndX = useRef(null);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     // Set hidden BEFORE animation to prevent flicker
//     gsap.set(carouselRef.current, { opacity: 0, x: -30 });

//     gsap.to(carouselRef.current, {
//       opacity: 1,
//       x: 0,
//       duration: 0.6,
//       ease: "back.out(1.2)",
//       scrollTrigger: {
//         trigger: carouselRef.current,
//         start: "top bottom-=50",
//         toggleActions: "play none none reverse",
//       },
//     });
//   }, []);

//   const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
//   const next = () => setIndex((i) => (i + 1) % items.length);

//   const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
//   const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
//   const handleTouchEnd = () => {
//     if (touchStartX.current === null || touchEndX.current === null) return;
//     const diff = touchStartX.current - touchEndX.current;
//     if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   if (items.length === 0) {
//     return <p className="text-center text-gray-400 py-10 text-sm">No projects in this category.</p>;
//   }

//   return (
//     <div ref={carouselRef} className="relative w-full">
//       <div
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//         className="w-full"
//       >
//         <ProjectCard project={items[index]} />
//       </div>

//       {items.length > 1 && (
//         <div className="flex items-center justify-between mt-5 px-2">
//           <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-colors" aria-label="Previous">
//             <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
//               <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>

//           <div className="flex items-center gap-2">
//             {items.map((_, i) => (
//               <button key={i} onClick={() => setIndex(i)}
//                 className={`rounded-full transition-all duration-200 ${i === index ? "w-5 h-2.5 bg-[#cc1400]" : "w-2.5 h-2.5 bg-gray-300"}`}
//                 aria-label={`Go to slide ${i + 1}`}
//               />
//             ))}
//           </div>

//           <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-colors" aria-label="Next">
//             <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
//               <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // ── Main component ──
// export default function Project() {
//   const [active, setActive] = useState("All");
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const tabsRef = useRef(null);
//   const gridRef = useRef(null);
//   const viewAllBtnRef = useRef(null);

//   const tabs = useMemo(() => {
//     const categories = projects.map((p) => p.category).filter(Boolean);
//     return ["All", ...Array.from(new Set(categories))];
//   }, [projects]);

//   const filtered =
//     active === "All" ? projects : projects.filter((p) => p.category === active);

//   useEffect(() => {
//     const fetchLatest = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("/ourprojects?per_page=6");
//         setProjects(response.data?.data || []);
//       } catch (error) {
//         console.error("Error fetching latest projects:", error);
//         setProjects([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLatest();
//   }, []);

//   useEffect(() => {
//     if (!tabs.includes(active)) setActive("All");
//   }, [tabs, active]);

//   // Initial entrance animations
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set hidden BEFORE animating header
//       gsap.set(headerRef.current, { opacity: 0, y: -50, scale: 0.95 });
//       gsap.to(headerRef.current, {
//         opacity: 1, y: 0, scale: 1,
//         duration: 1, ease: "power3.out", clearProps: "all",
//       });

//       // Set hidden BEFORE animating tabs
//       gsap.set(tabsRef.current.children, { opacity: 0, y: 20, scale: 0.9 });
//       gsap.to(tabsRef.current.children, {
//         opacity: 1, y: 0, scale: 1,
//         duration: 0.6, stagger: 0.1, delay: 0.3,
//         ease: "back.out(1.2)", clearProps: "all",
//       });
//     }, sectionRef);

//     // Set hidden BEFORE animating grid
//     const gridItems = gridRef.current?.children;
//     if (gridItems) {
//       gsap.set(gridItems, { opacity: 0, y: 80, scale: 0.95, rotationX: -15 });
//       gsap.to(gridItems, {
//         opacity: 1, y: 0, scale: 1, rotationX: 0,
//         duration: 0.8, stagger: 0.15, ease: "power3.out",
//         scrollTrigger: {
//           trigger: gridRef.current,
//           start: "top bottom-=100",
//           end: "bottom center",
//           toggleActions: "play none none reverse",
//           scrub: false,
//         },
//       });
//     }

//     // Animate View All button
//     if (viewAllBtnRef.current) {
//       gsap.set(viewAllBtnRef.current, { opacity: 0, y: 30 });
//       gsap.to(viewAllBtnRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         delay: 0.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: viewAllBtnRef.current,
//           start: "top bottom-=50",
//           toggleActions: "play none none reverse",
//         },
//       });
//     }

//     gsap.to(sectionRef.current, {
//       backgroundPosition: "50% 100%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 1,
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       ctx.revert();
//     };
//   }, []);

//   // Filter change animations — gsap.set first to prevent flicker
//   useEffect(() => {
//     const gridItems = gridRef.current?.children;
//     if (gridItems && gridItems.length > 0) {
//       gsap.set(gridItems, { opacity: 0, y: 40, scale: 0.95 });
//       gsap.to(gridItems, {
//         opacity: 1, y: 0, scale: 1,
//         duration: 0.6, stagger: 0.1, ease: "power2.out",
//       });
//     }
//   }, [active, projects]);

//   const handleViewAll = () => {
//     window.location.href = "/projects-page";
//   };

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       <section
//         ref={sectionRef}
//         className="bg-white py-16 sm:py-24 px-8 sm:px-0 relative overflow-hidden"
//         style={{
//           fontFamily: "'Barlow', sans-serif",
//           backgroundImage: "radial-gradient(circle at 10% 20%, rgba(204, 20, 0, 0.02) 0%, rgba(255, 255, 255, 0) 50%)",
//         }}
//       >
//         <div className="max-w-7xl mx-auto relative z-10">

//           {/* ── Header ── */}
//           <div ref={headerRef} className="text-center mb-8 sm:mb-10">
//             <div className="inline-flex items-center gap-2 mb-3">
//               <span className="text-md font-semibold text-gray-700 uppercase tracking-wide">
//                 Our Projects
//               </span>
//             </div>
//             <h2
//               className="text-3xl sm:text-5xl font-bold text-gray-900 leading-relaxed"
//               style={{ fontFamily: "'Barlow', sans-serif" }}
//             >
//               <span className="text-[#cc1400] relative inline-block">Advanced</span>{" "}
//               features security
//             </h2>
//           </div>

//           {/* ── Filter tabs ── */}
//           <div
//             ref={tabsRef}
//             className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 mb-10 sm:mb-12"
//           >
//             {tabs.map((tab, i) => (
//               <div key={tab} className="flex items-center">
//                 <button
//                   onClick={() => setActive(tab)}
//                   className={`px-3 py-1 text-md font-semibold rounded transition-all duration-300 relative ${
//                     active === tab ? "text-[#cc1400]" : "text-gray-800 hover:text-[#cc1400]"
//                   }`}
//                 >
//                   {tab}
//                   {active === tab && (
//                     <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#cc1400] rounded-full" />
//                   )}
//                 </button>
//                 {i < tabs.length - 1 && (
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#cc1400] inline-block mx-0.5 opacity-70" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* ── Mobile: carousel ── */}
//           <div className="sm:hidden">
//             {loading ? (
//               <p className="text-center text-gray-400 py-10 text-sm">Loading projects...</p>
//             ) : (
//               <MobileCarousel items={filtered} />
//             )}
//           </div>

//           {/* ── Tablet + Desktop: grid ── */}
//           <div
//             ref={gridRef}
//             className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12"
//           >
//             {loading ? (
//               <p className="col-span-3 text-center text-gray-400 py-10 text-sm">Loading projects...</p>
//             ) : filtered.length > 0 ? (
//               filtered.map((project, idx) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))
//             ) : (
//               <p className="col-span-3 text-center text-gray-400 py-10 text-sm">
//                 No projects in this category.
//               </p>
//             )}
//           </div>

//           {/* ── View All Button ── */}
//           {!loading && filtered.length > 0 && (
//             <div ref={viewAllBtnRef} className="flex justify-center mt-12 sm:mt-16">
//               <button
//                 onClick={handleViewAll}
//                 className="group relative px-8 py-3 bg-transparent border-2 border-[#cc1400] text-[#cc1400] font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-[#cc1400] hover:text-white hover:shadow-lg"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   View All Projects
//                   <svg
//                     className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </span>
//                 <span className="absolute inset-0 bg-[#cc1400] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
//               </button>
//             </div>
//           )}

//         </div>
//       </section>
//     </>
//   );
// }

import { useState, useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import { router } from '@inertiajs/react';

gsap.registerPlugin(ScrollTrigger);

// ── Single project card ──
const ProjectCard = ({ project }) => {
  const handleClick = () => {
    if (project.slug) {
      router.visit(`/project-details/${project.slug}`);
    }
  };

  return (
    <div 
      className="flex flex-col gap-3 group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={project.image || project.image_url || "/placeholder-image.jpg"}
          alt={project.title || project.name}
          className="w-full h-[220px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-[#cc1400] text-white text-sm font-semibold px-3 py-1 rounded-md">
          {project.category || "Project"}
        </span>
      </div>
      <p className="text-center text-gray-800 font-semibold text-lg leading-relaxed group-hover:text-[#cc1400] transition-colors duration-150">
        {project.title || project.name}
      </p>
    </div>
  );
};

// ── Mobile carousel ──
const MobileCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Set hidden BEFORE animation to prevent flicker
    gsap.set(carouselRef.current, { opacity: 0, x: -30 });

    gsap.to(carouselRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (items.length === 0) {
    return <p className="text-center text-gray-400 py-10 text-sm">No projects in this category.</p>;
  }

  return (
    <div ref={carouselRef} className="relative w-full">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full"
      >
        <ProjectCard project={items[index]} />
      </div>

      {items.length > 1 && (
        <div className="flex items-center justify-between mt-5 px-2">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-colors" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-200 ${i === index ? "w-5 h-2.5 bg-[#cc1400]" : "w-2.5 h-2.5 bg-gray-300"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-colors" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

// ── Main component ──
export default function Project() {
  const [active, setActive] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [navigating, setNavigating] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);
  const viewAllBtnRef = useRef(null);

  const tabs = useMemo(() => {
    const categories = projects.map((p) => p.category).filter(Boolean);
    return ["All", ...Array.from(new Set(categories))];
  }, [projects]);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/ourprojects?per_page=6");
        setProjects(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching latest projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLatest();
  }, []);

  useEffect(() => {
    if (!tabs.includes(active)) setActive("All");
  }, [tabs, active]);

  // Navigation loading state
  useEffect(() => {
    const startNavigation = () => setNavigating(true);
    const finishNavigation = () => setNavigating(false);
    
    router.on('start', startNavigation);
    router.on('finish', finishNavigation);
    
    return () => {
      router.off('start', startNavigation);
      router.off('finish', finishNavigation);
    };
  }, []);

  // Initial entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set hidden BEFORE animating header
      gsap.set(headerRef.current, { opacity: 0, y: -50, scale: 0.95 });
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, scale: 1,
        duration: 1, ease: "power3.out", clearProps: "all",
      });

      // Set hidden BEFORE animating tabs
      gsap.set(tabsRef.current.children, { opacity: 0, y: 20, scale: 0.9 });
      gsap.to(tabsRef.current.children, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.6, stagger: 0.1, delay: 0.3,
        ease: "back.out(1.2)", clearProps: "all",
      });
    }, sectionRef);

    // Set hidden BEFORE animating grid
    const gridItems = gridRef.current?.children;
    if (gridItems) {
      gsap.set(gridItems, { opacity: 0, y: 80, scale: 0.95, rotationX: -15 });
      gsap.to(gridItems, {
        opacity: 1, y: 0, scale: 1, rotationX: 0,
        duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      });
    }

    // Animate View All button
    if (viewAllBtnRef.current) {
      gsap.set(viewAllBtnRef.current, { opacity: 0, y: 30 });
      gsap.to(viewAllBtnRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: viewAllBtnRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      });
    }

    gsap.to(sectionRef.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  // Filter change animations — gsap.set first to prevent flicker
  useEffect(() => {
    const gridItems = gridRef.current?.children;
    if (gridItems && gridItems.length > 0) {
      gsap.set(gridItems, { opacity: 0, y: 40, scale: 0.95 });
      gsap.to(gridItems, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.6, stagger: 0.1, ease: "power2.out",
      });
    }
  }, [active, projects]);

  const handleViewAll = () => {
    router.visit("/projects-page");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Loading Overlay */}
      {navigating && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-medium text-gray-700">Loading...</span>
          </div>
        </div>
      )}

      <section
        ref={sectionRef}
        className="bg-white py-16 sm:py-24 px-8 sm:px-0 relative overflow-hidden"
        style={{
          fontFamily: "'Barlow', sans-serif",
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(204, 20, 0, 0.02) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Header ── */}
          <div ref={headerRef} className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-md font-semibold text-gray-700 uppercase tracking-wide">
                Our Projects
              </span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-gray-900 leading-relaxed"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              <span className="text-[#cc1400] relative inline-block">Advanced</span>{" "}
              features security
            </h2>
          </div>

          {/* ── Filter tabs ── */}
          <div
            ref={tabsRef}
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 mb-10 sm:mb-12"
          >
            {tabs.map((tab, i) => (
              <div key={tab} className="flex items-center">
                <button
                  onClick={() => setActive(tab)}
                  className={`px-3 py-1 text-md font-semibold rounded transition-all duration-300 relative ${
                    active === tab ? "text-[#cc1400]" : "text-gray-800 hover:text-[#cc1400]"
                  }`}
                >
                  {tab}
                  {active === tab && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#cc1400] rounded-full" />
                  )}
                </button>
                {i < tabs.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cc1400] inline-block mx-0.5 opacity-70" />
                )}
              </div>
            ))}
          </div>

          {/* ── Mobile: carousel ── */}
          <div className="sm:hidden">
            {loading ? (
              <p className="text-center text-gray-400 py-10 text-sm">Loading projects...</p>
            ) : (
              <MobileCarousel items={filtered} />
            )}
          </div>

          {/* ── Tablet + Desktop: grid ── */}
          <div
            ref={gridRef}
            className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12"
          >
            {loading ? (
              <p className="col-span-3 text-center text-gray-400 py-10 text-sm">Loading projects...</p>
            ) : filtered.length > 0 ? (
              filtered.map((project, idx) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-400 py-10 text-sm">
                No projects in this category.
              </p>
            )}
          </div>

          {/* ── View All Button ── */}
          {!loading && filtered.length > 0 && (
            <div ref={viewAllBtnRef} className="flex justify-center mt-12 sm:mt-16">
              <button
                onClick={handleViewAll}
                className="group relative px-8 py-3 bg-transparent border-2 border-[#cc1400] text-[#cc1400] font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-[#cc1400] hover:text-white hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#cc1400] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}