// import { useState, useEffect } from "react";

// const SecurityAbout = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <div className="bg-white flex items-center justify-center py-16 lg:py-24 px-8 lg:px-0">
//       <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

//         {/* ── LEFT: Image collage ──────────────────────────────── */}
//         <div className="relative w-full h-auto lg:h-[560px]">

//           {/* Top image */}
//           <div
//             className="relative lg:absolute lg:top-0 lg:left-0 w-full lg:w-[420px] h-[260px] sm:h-[340px] lg:h-[450px] rounded-3xl overflow-hidden z-10 shadow-xl"
//             style={{
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? "translateY(0)" : "translateY(-20px)",
//               transition: "all 0.7s ease",
//             }}
//           >
//             <img
//               src="/images/security2.jpg"
//               alt="Technician installing CCTV camera"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Bottom image — on mobile: 80% width, right-aligned, overlaps slightly */}
//           <div
//             className="relative lg:absolute lg:-bottom-28 lg:-right-2 w-[220px] sm:w-[75%] lg:w-[382px] h-[230px] sm:h-[280px] lg:h-[380px] rounded-3xl overflow-hidden shadow-2xl z-10 -mt-10 sm:-mt-14 lg:mt-0 ml-auto lg:ml-0"
//             style={{
//               opacity: loaded ? 1 : 0,
//               transform: loaded ? "translateY(0)" : "translateY(20px)",
//               transition: "all 0.7s ease 0.2s",
//             }}
//           >
//             <img
//               src="/images/security1.jpg"
//               alt="Security operator monitoring screens"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Badge — spinning text ring
//               Mobile : centred below the overlapping images with a small top margin
//               Desktop: absolute positioned on the collage */}
//           <div
//             className="
//               absolute sm:bottom-20  bottom-32 sm:left-32 left-24
//               z-20 w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36
//               rounded-full bg-white border-2 border-gray-200 shadow-xl
//               flex items-center justify-center
//               mx-auto lg:mx-0 mt-5 lg:mt-0 mb-0 lg:mb-0
//             "
//             style={{
//               opacity: loaded ? 1 : 0,
//               transition: "opacity 0.7s ease 0.4s",
//             }}
//           >
//             <svg
//               viewBox="0 0 100 100"
//               className="absolute w-full h-full animate-spin"
//               style={{ animationDuration: "12s" }}
//             >
//               <defs>
//                 <path
//                   id="circle"
//                   d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
//                 />
//               </defs>
//               <text className="font-semibold" fontSize="10" fill="#222" letterSpacing="1.5">
//                 <textPath href="#circle">
//                   10+ Years Of Experience • 10+ Years Of Experience •
//                 </textPath>
//               </text>
//             </svg>
//             <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center z-10 shadow-lg">
//               <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14c-2.67 0-5.04-1.37-6.4-3.44.78-1.55 3.3-2.56 6.4-2.56s5.62 1.01 6.4 2.56C17.04 17.63 14.67 19 12 19z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* ── RIGHT: Text content ──────────────────────────────── */}
//         <div
//           className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-8 lg:mt-28"
//           style={{
//             opacity: loaded ? 1 : 0,
//             transform: loaded ? "translateX(0)" : "translateX(20px)",
//             transition: "all 0.7s ease 0.1s",
//           }}
//         >
//           {/* Label */}
//           <div className="flex items-center gap-3">
//             <span className="inline-block w-6 h-0.5 bg-red-600 rounded-full" />
//             <span
//               className="text-sm lg:text-[13px] font-bold tracking-[0.2em] text-gray-400 uppercase"
//               style={{ fontFamily: "'Barlow', sans-serif" }}
//             >
//               About Us
//             </span>
//           </div>

//           {/* Headline — tighter line-height on mobile */}
//           <h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-relaxed  -mt-2 lg:-mt-4"
//             style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//           >
//             <span className="text-red-600">Protecting homes,</span>{" "}
//             businesses and peace of mind
//           </h2>

//           {/* Description — remove negative margin & auto mx on mobile */}
//           <p
//             className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl -mt-2 lg:-mt-4"
//             style={{ fontFamily: "'Barlow', sans-serif" }}
//           >
//             We specialize in providing top-quality security and solutions to
//             safeguard your home and business. Our mission is to ensure peace of
//             mind with reliable, innovative, and tailored protection systems built
//             for every scale.
//           </p>

//           {/* Experience row */}
//           <div className="sm:flex sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
//             {/* Thumbnail — slightly smaller on mobile */}
//             <div className="w-full h-[200px] sm:w-28 sm:h-24 lg:w-32 lg:h-28 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
//                 alt="CCTV technician"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Icon + text */}
//             <div className="flex sm:flex-row flex-col items-start justify-start gap-3 sm:gap-5 sm:mt-0 mt-6 ">
//               <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
//                 <svg className="w-7 h-7 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//                 </svg>
//               </div>
//               <p
//                 className="text-gray-800 font-semibold text-md lg:text-lg leading-snug"
//                 style={{ fontFamily: "'Barlow', sans-serif" }}
//               >
//                 We Have More Than 10+ Years of Security
//                 <br />
//                 Services Experience
//               </p>
//             </div>
//           </div>

//           {/* CTA card */}
//           <div className="rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
//             <div className="flex items-center gap-4 sm:gap-5">
//               {/* Phone icon */}
//               <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
//                 <svg
//                   className="w-5 h-5 sm:w-7 sm:h-7 text-red-600"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p
//                   className="text-xs sm:text-sm text-gray-400 mb-0.5"
//                   style={{ fontFamily: "'Barlow', sans-serif" }}
//                 >
//                   Call Directly 24/7
//                 </p>
//                 <p
//                   className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl tracking-tight"
//                   style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//                 >
//                   +977 01-4535104
//                 </p>
//               </div>
//             </div>

//             <button
//               className="bg-red-600 hover:bg-red-700 transition-colors text-white text-sm lg:text-base font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 whitespace-nowrap shadow-lg w-full sm:w-auto justify-center"
//               style={{ fontFamily: "'Barlow', sans-serif" }}
//             >
//               More About Us
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SecurityAbout;






import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { router } from "@inertiajs/react";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SecurityAbout = () => {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const leftCollageRef = useRef(null);
  const topImageRef = useRef(null);
  const bottomImageRef = useRef(null);
  const badgeRef = useRef(null);
  const rightContentRef = useRef(null);
  const labelRef = useRef(null);
  const headlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const experienceRowRef = useRef(null);
  const ctaCardRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Set initial states for all elements
      gsap.set([topImageRef.current, bottomImageRef.current], {
        opacity: 0,
        y: 30,
      });
      
      gsap.set(badgeRef.current, {
        opacity: 0,
        scale: 0,
        rotation: -180,
      });
      
      gsap.set([labelRef.current, headlineRef.current, descriptionRef.current, experienceRowRef.current, ctaCardRef.current], {
        opacity: 0,
        x: 30,
      });

      // Create scroll trigger animations
      
      // 1. Left collage images animation with stagger
      ScrollTrigger.create({
        trigger: leftCollageRef.current,
        start: "top 80%",
        end: "top 50%",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(topImageRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(bottomImageRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }, "-=0.4")
          .to(badgeRef.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(0.8)",
          }, "-=0.2");
        },
        once: true,
      });

      // 2. Right content animations with stagger
      ScrollTrigger.create({
        trigger: rightContentRef.current,
        start: "top 75%",
        end: "top 50%",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(labelRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          })
          .to(headlineRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          }, "-=0.3")
          .to(descriptionRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          }, "-=0.4")
          .to(experienceRowRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          }, "-=0.3")
          .to(ctaCardRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "back.out(0.6)",
          }, "-=0.4");
        },
        once: true,
      });

      // 3. Parallax effect on images when scrolling
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (topImageRef.current) {
            gsap.set(topImageRef.current, {
              y: progress * 50,
            });
          }
          if (bottomImageRef.current) {
            gsap.set(bottomImageRef.current, {
              y: progress * -30,
            });
          }
          if (badgeRef.current) {
            gsap.set(badgeRef.current, {
              rotation: progress * 360,
            });
          }
        },
      });

      // 4. Hover animation for badge
      if (badgeRef.current) {
        badgeRef.current.addEventListener("mouseenter", () => {
          gsap.to(badgeRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        
        badgeRef.current.addEventListener("mouseleave", () => {
          gsap.to(badgeRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // 5. Animate the rotating text circle
      const rotatingText = badgeRef.current?.querySelector('svg');
      if (rotatingText) {
        gsap.to(rotatingText, {
          rotation: 360,
          duration: 12,
          repeat: -1,
          ease: "none",
        });
      }

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Additional animation for initial load (in case scroll trigger doesn't fire immediately)
  useEffect(() => {
    if (loaded && typeof window !== 'undefined') {
      // Check if elements are already in viewport on load
      const checkInView = () => {
        const leftRect = leftCollageRef.current?.getBoundingClientRect();
        const rightRect = rightContentRef.current?.getBoundingClientRect();
        
        if (leftRect && leftRect.top < window.innerHeight * 0.8) {
          gsap.to([topImageRef.current, bottomImageRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
          gsap.to(badgeRef.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(0.8)",
            delay: 0.4,
          });
        }
        
        if (rightRect && rightRect.top < window.innerHeight * 0.75) {
          gsap.to([labelRef.current, headlineRef.current, descriptionRef.current, experienceRowRef.current, ctaCardRef.current], {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
          });
        }
      };
      
      checkInView();
    }
  }, [loaded]);

  return (
    <div ref={sectionRef} className="bg-white flex items-center justify-center py-16 lg:py-24 px-2 lg:px-0 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── LEFT: Image collage ──────────────────────────────── */}
        <div ref={leftCollageRef} className="relative w-full h-auto lg:h-[560px]">

          {/* Top image */}
          <div
            ref={topImageRef}
            className="relative lg:absolute lg:top-0 lg:left-0 w-full lg:w-[420px] h-[260px] sm:h-[340px] lg:h-[450px] rounded-3xl overflow-hidden z-10 shadow-xl"
          >
            <img
              src="/images/Picture2.png"
              alt="Technician installing CCTV camera"
              className="w-full h-full object-top "
            />
          </div>

          {/* Bottom image — on mobile: 80% width, right-aligned, overlaps slightly */}
          <div
            ref={bottomImageRef}
            className="relative lg:absolute lg:-bottom-28 lg:-right-2 w-[220px] sm:w-[75%] lg:w-[382px] h-[230px] sm:h-[280px] lg:h-[380px] rounded-3xl overflow-hidden shadow-2xl z-10 -mt-10 sm:-mt-14 lg:mt-0 ml-auto lg:ml-0"
          >
            <img
              src="/images/Picture4.jpg"
              alt="Security operator monitoring screens"
              className="w-full h-full object-top "
            />
          </div>

          {/* Badge — spinning text ring */}
          <div
            ref={badgeRef}
            className="
              absolute sm:bottom-20 bottom-32 sm:left-32 left-24
              z-20 w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36
              rounded-full bg-white border-2 border-gray-200 shadow-xl
              flex items-center justify-center
              mx-auto lg:mx-0 mt-5 lg:mt-0 mb-0 lg:mb-0
              cursor-pointer
            "
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full"
            >
              <defs>
                <path
                  id="circle"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="font-semibold" fontSize="10" fill="#222" letterSpacing="1.5">
                <textPath href="#circle">
                  10+ Years Of Experience • 10+ Years Of Experience •
                </textPath>
              </text>
            </svg>
            <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center z-10 shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14c-2.67 0-5.04-1.37-6.4-3.44.78-1.55 3.3-2.56 6.4-2.56s5.62 1.01 6.4 2.56C17.04 17.63 14.67 19 12 19z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text content ──────────────────────────────── */}
        <div
          ref={rightContentRef}
          className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-8 lg:mt-28"
        >
          {/* Label */}
          <div ref={labelRef} className="flex items-center gap-3">
            <span className="inline-block w-6 h-0.5 bg-red-600 rounded-full" />
            <span
              className="text-sm lg:text-[13px] font-bold tracking-[0.2em] text-gray-400 uppercase"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              About Us : Life Safety and Automation Solution
            </span>
          </div>

          {/* Headline — tighter line-height on mobile */}
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-relaxed -mt-2 lg:-mt-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <span className="text-red-600">COMPREHENSIVE  </span>{" "}
Safety <br /> Security & Automation
          </h2>

          {/* Description — remove negative margin & auto mx on mobile */}
          <p
            ref={descriptionRef}
            className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl -mt-2 lg:-mt-4"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            We specialize in providing top-quality security and solutions to
            safeguard your home and business. Our mission is to ensure peace of
            mind with reliable, innovative, and tailored protection systems built
            for every scale.
          </p>

          {/* Experience row */}
          <div ref={experienceRowRef} className="sm:flex sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Thumbnail — slightly smaller on mobile */}
            <div className="w-full h-[200px] sm:w-28 sm:h-24 lg:w-32 lg:h-28 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg group">
              <img
                src="/images/Picture3.png"
                alt="CCTV technician"
                className="w-full h-full object-top "
              />
            </div>

            {/* Icon + text */}
            <div className="flex sm:flex-row flex-col items-start justify-start gap-3 sm:gap-5 sm:mt-0 mt-6">
              <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <p
                className="text-gray-800 font-semibold text-md lg:text-lg leading-snug"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                We Have More Than 10+ Years of Security
                <br />
                Services Experience
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div
            ref={ctaCardRef}
            className="rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Phone icon */}
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs sm:text-sm text-gray-400 mb-0.5"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  Call Directly 24/7
                </p>
                <a 
                  href="tel:+977 01-4535104"
                  className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl tracking-tight hover:text-red-600 transition-colors duration-300"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  +977 01-4535104
                </a>
              </div>
            </div>

       <button
  onClick={() => {router.visit("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white text-sm lg:text-base font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 whitespace-nowrap shadow-lg w-full sm:w-auto justify-center group"
  style={{ fontFamily: "'Barlow', sans-serif" }}
>
  More About Us
  <svg
    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecurityAbout;