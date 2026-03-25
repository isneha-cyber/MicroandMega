


// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Kathryn Murphy",
//     role: "Chief Executive Officer",
//     avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
//     rating: 5,
//     review:
//       '"The access control system installed at our headquarters has transformed how we manage entry across all floors. Smart card readers, biometric locks, and real-time access logs — everything works seamlessly. Our employees feel secure and our data stays protected."',
//   },
//   {
//     id: 2,
//     name: "John Miller",
//     role: "IT Manager",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
//     rating: 5,
//     review:
//       '"We needed a fully integrated security solution for our server rooms and office floors. The team delivered an outstanding CCTV and access control setup that gives us complete visibility. Remote monitoring from our dashboard is a game changer for our IT security protocols."',
//   },
//   {
//     id: 3,
//     name: "Sarah Johnson",
//     role: "Operations Manager",
//     avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
//     rating: 5,
//     review:
//       '"The fire detection and suppression system installed across our warehouse has given us enormous peace of mind. The team was professional, fast, and ensured every sensor was perfectly placed. We have not had a single false alarm and the system responded flawlessly during a drill."',
//   },
//   {
//     id: 4,
//     name: "David Chen",
//     role: "Facility Director",
//     avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
//     rating: 5,
//     review:
//       '"Our building now runs a fully integrated security ecosystem — CCTV, access control, and intruder alarm systems all managed from a single platform. The installation was clean, the team was knowledgeable, and the after-sales support has been exceptional every step of the way."',
//   },
//   {
//     id: 5,
//     name: "Emily Watson",
//     role: "Business Owner",
//     avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
//     rating: 5,
//     review:
//       '"They installed a complete intruder alarm and perimeter detection system for our retail store. The team assessed our vulnerabilities and designed a tailored solution that fit our budget perfectly. Since installation, we have had zero security incidents. Truly professional service!"',
//   },
//   {
//     id: 6,
//     name: "Michael Torres",
//     role: "Hotel Manager",
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
//     rating: 5,
//     review:
//       '"We commissioned a full security overhaul — fire alarm, CCTV, and guest access control across all 120 rooms and common areas. The project was completed with zero disruption to our guests. The 24/7 monitoring service means our staff always has backup when they need it most."',
//   },
// ];

// // Quote icon
// const QuoteIcon = () => (
//   <svg viewBox="0 0 40 32" fill="none" className="w-9 h-7 text-[#cc1400]" aria-hidden="true">
//     <path
//       d="M0 32V19.2C0 8.533 5.333 2.4 16 0l2.4 4C13.067 5.333 10.133 8.267 9.6 12.8H16V32H0zm24 0V19.2C24 8.533 29.333 2.4 40 0l2.4 4C37.067 5.333 34.133 8.267 33.6 12.8H40V32H24z"
//       fill="currentColor"
//       opacity="0.85"
//     />
//   </svg>
// );

// // Five stars
// const Stars = ({ count = 5 }) => (
//   <div className="flex items-center gap-0.5">
//     {Array.from({ length: count }).map((_, i) => (
//       <svg key={i} viewBox="0 0 20 20" fill="#cc1400" className="w-5 h-5">
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/>
//       </svg>
//     ))}
//   </div>
// );

// // Single testimonial card
// const TestimonialCard = ({ testimonial }) => (
//   <div className="bg-white rounded-2xl border border-gray-300 shadow-sm p-12 flex flex-col gap-5 h-full">
//     {/* Top row: avatar + name + quote icon */}
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <img
//           src={testimonial.avatar}
//           alt={testimonial.name}
//           className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-300"
//         />
//         <div>
//           <p className="font-bold text-gray-900 text-xl leading-relaxed"
//             style={{ fontFamily: "'Barlow', sans-serif" }}>
//             {testimonial.name}
//           </p>
//           <p className="text-gray-400 text-lg leading-relaxed mt-0.5"
//             style={{ fontFamily: "'Barlow', sans-serif" }}>
//             {testimonial.role}
//           </p>
//         </div>
//       </div>
//       <QuoteIcon />
//     </div>

//     {/* Stars */}
//     <Stars count={testimonial.rating} />

//     {/* Review text */}
//     <p className="text-gray-700 text-md leading-relaxed"
//       style={{ fontFamily: "'Barlow', sans-serif" }}>
//       {testimonial.review}
//     </p>
//   </div>
// );

// // Arrow button
// const ArrowBtn = ({ onClick, direction }) => (
//   <button
//     onClick={onClick}
//     aria-label={direction === "prev" ? "Previous" : "Next"}
//     className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-all duration-150"
//   >
//     <svg viewBox="0 0 24 24" fill="none" width="17" height="17">
//       {direction === "prev"
//         ? <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//         : <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//       }
//     </svg>
//   </button>
// );

// export default function Testimonials() {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const cardsContainerRef = useRef(null);
//   const arrowsRef = useRef(null);
  
//   // Desktop shows 2 at a time; mobile shows 1
//   const [page, setPage] = useState(0);
//   const total = TESTIMONIALS.length;

//   // Desktop: pairs (0-1, 2-3, 4-5)
//   const desktopPages = Math.ceil(total / 2);
//   const prevDesktop = () => setPage((p) => (p - 1 + desktopPages) % desktopPages);
//   const nextDesktop = () => setPage((p) => (p + 1) % desktopPages);
//   const leftCard  = TESTIMONIALS[page * 2];
//   const rightCard = TESTIMONIALS[page * 2 + 1] ?? null;

//   // Mobile: single
//   const [mPage, setMPage] = useState(0);
//   const prevMobile = () => setMPage((p) => (p - 1 + total) % total);
//   const nextMobile = () => setMPage((p) => (p + 1) % total);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Simple fade up animation for header
//     gsap.fromTo(headerRef.current,
//       {
//         opacity: 0,
//         y: 30,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: headerRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Simple fade up animation for cards container
//     gsap.fromTo(cardsContainerRef.current,
//       {
//         opacity: 0,
//         y: 30,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         delay: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: cardsContainerRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Simple fade up animation for arrows
//     gsap.fromTo(arrowsRef.current,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         delay: 0.4,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: arrowsRef.current,
//           start: "top 90%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       <section
//         ref={sectionRef}
//         className="bg-white py-16 lg:py-24 px-8 sm:px-0"
//         style={{ fontFamily: "'Barlow', sans-serif" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div ref={headerRef} className="text-center mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-2 mb-3">
//               <span className="text-md font-semibold text-gray-700 uppercase">
//                 Testimonials
//               </span>
//             </div>
//             <h2
//               className="font-bold text-gray-900 leading-relaxed text-3xl lg:text-5xl"
//               style={{ fontFamily: "'Barlow', sans-serif" }}
//             >
//               <span className="text-[#cc1400]">Trusted feedback</span> from our
//               <br className="hidden sm:block" /> clients
//             </h2>
//           </div>

//           {/* Desktop: 2-column slider */}
//           <div ref={cardsContainerRef} className="hidden sm:block">
//             <div className="grid grid-cols-2 gap-6">
//               {leftCard  && <TestimonialCard testimonial={leftCard}  />}
//               {rightCard && <TestimonialCard testimonial={rightCard} />}
//             </div>

//             {/* Arrows */}
//             <div ref={arrowsRef} className="flex items-center justify-center gap-3 mt-8">
//               <ArrowBtn onClick={prevDesktop} direction="prev" />
//               <ArrowBtn onClick={nextDesktop} direction="next" />
//             </div>
//           </div>

//           {/* Mobile: single card carousel */}
//           <div ref={cardsContainerRef} className="sm:hidden">
//             <TestimonialCard testimonial={TESTIMONIALS[mPage]} />

//             {/* Arrows + dots */}
//             <div ref={arrowsRef} className="flex items-center justify-center gap-3 mt-6">
//               <ArrowBtn onClick={prevMobile} direction="prev" />
//               <ArrowBtn onClick={nextMobile} direction="next" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

const QuoteIcon = () => (
  <svg viewBox="0 0 40 32" fill="none" className="w-9 h-7 text-[#cc1400]" aria-hidden="true">
    <path
      d="M0 32V19.2C0 8.533 5.333 2.4 16 0l2.4 4C13.067 5.333 10.133 8.267 9.6 12.8H16V32H0zm24 0V19.2C24 8.533 29.333 2.4 40 0l2.4 4C37.067 5.333 34.133 8.267 33.6 12.8H40V32H24z"
      fill="currentColor"
      opacity="0.85"
    />
  </svg>
);

const Stars = ({ count = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="#cc1400" className="w-5 h-5">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/>
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-2xl border border-gray-300 shadow-sm p-12 flex flex-col gap-5 h-full">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.photo_url || "https://via.placeholder.com/200?text=User"}
          alt={testimonial.client_name}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-300"
        />
        <div>
          <p className="font-bold text-gray-900 text-xl leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}>
            {testimonial.client_name}
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-0.5"
            style={{ fontFamily: "'Barlow', sans-serif" }}>
            {testimonial.company || "Client"}
          </p>
        </div>
      </div>
      <QuoteIcon />
    </div>

    <Stars count={testimonial.rating || 5} />

    <p className="text-gray-700 text-md leading-relaxed"
      style={{ fontFamily: "'Barlow', sans-serif" }}>
      "{testimonial.message}"
    </p>
  </div>
);

const ArrowBtn = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-all duration-150"
  >
    <svg viewBox="0 0 24 24" fill="none" width="17" height="17">
      {direction === "prev" ? (
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      ) : (
        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  </button>
);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const arrowsRef = useRef(null);

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Only show active testimonials
  const activeTestimonials = testimonials.filter(t => t.status === 'active');

  // Desktop: 2 cards per page
  const [page, setPage] = useState(0);
  const desktopPages = Math.ceil(activeTestimonials.length / 2);
  const leftCard = activeTestimonials[page * 2];
  const rightCard = activeTestimonials[page * 2 + 1];

  const prevDesktop = () => setPage((p) => (p - 1 + desktopPages) % desktopPages || 0);
  const nextDesktop = () => setPage((p) => (p + 1) % desktopPages || 0);

  // Mobile: 1 card per page
  const [mPage, setMPage] = useState(0);
  const prevMobile = () => setMPage((p) => (p - 1 + activeTestimonials.length) % activeTestimonials.length || 0);
  const nextMobile = () => setMPage((p) => (p + 1) % activeTestimonials.length || 0);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(route("ourtestimonials.index"));
        // Laravel returns { data: [...], current_page, etc. } when paginated
        setTestimonials(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animate = (ref, delay = 0) => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    animate(headerRef, 0);
    animate(cardsContainerRef, 0.2);
    animate(arrowsRef, 0.4);

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-16 lg:py-24 px-8 sm:px-0">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (activeTestimonials.length === 0) {
    return (
      <section className="bg-white py-16 lg:py-24 px-8 sm:px-0">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">No testimonials available yet.</h2>
        </div>
      </section>
    );
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="bg-white py-16 lg:py-24 px-8 sm:px-0"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-md font-semibold text-gray-700 uppercase">Testimonials</span>
            </div>
            <h2 className="font-bold text-gray-900 leading-relaxed text-3xl lg:text-5xl">
              <span className="text-[#cc1400]">Trusted feedback</span> from our
              <br className="hidden sm:block" /> clients
            </h2>
          </div>

          {/* Desktop Version - 2 columns */}
          <div ref={cardsContainerRef} className="hidden sm:block">
            <div className="grid grid-cols-2 gap-6">
              {leftCard && <TestimonialCard testimonial={leftCard} />}
              {rightCard && <TestimonialCard testimonial={rightCard} />}
            </div>

            {/* Arrows */}
            <div ref={arrowsRef} className="flex items-center justify-center gap-3 mt-8">
              <ArrowBtn onClick={prevDesktop} direction="prev" />
              <ArrowBtn onClick={nextDesktop} direction="next" />
            </div>
          </div>

          {/* Mobile Version - Single card */}
          <div ref={cardsContainerRef} className="sm:hidden">
            <TestimonialCard testimonial={activeTestimonials[mPage]} />

            <div ref={arrowsRef} className="flex items-center justify-center gap-3 mt-6">
              <ArrowBtn onClick={prevMobile} direction="prev" />
              <ArrowBtn onClick={nextMobile} direction="next" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}