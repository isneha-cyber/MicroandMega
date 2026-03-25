// export default function ContactBanner() {
//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       {/*
//         Outer wrapper needs overflow-visible so the image can bleed
//         above the red section on desktop.
//         We give it enough top padding to reserve space for the overflow.
//       */}
//       <div
//         className="relative bg-white pt-0"
//         style={{ fontFamily: "'Barlow', sans-serif" }}
//       >
//         <section className="bg-[#cc1400] relative overflow-visible">

//           <div className="max-w-7xl mx-auto px-8 sm:px-0">
//             <div className="flex flex-col lg:flex-row items-stretch justify-between">

//               {/* ── LEFT: text + contact info ── */}
//               <div className="flex-1 py-12 lg:py-24 z-10 flex flex-col justify-center">

//                 {/* Label */}
//                 <div className="flex items-center gap-2 mb-5">
                 
//                   <span className="text-white text-md font-semibold uppercase">
//                     Contact Us
//                   </span>
//                 </div>

//                 {/* Headline */}
//                 <h2
//                   className="text-white font-bold leading-relaxed mb-4 sm:text-5xl text-3xl"
//                   style={{
//                     fontFamily: "'Barlow', sans-serif",
//                   }}
//                 >
//                   Secure your world with
//                   <br />
//                   trusted solutions join today!
//                 </h2>

//                 {/* Sub-text */}
//                 <p className="text-white text-md leading-relaxed mb-8 ">
//                   Take control of your safety with our reliable security and quality solutions.
//                 </p>

//                 {/* Contact row */}
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">

//                   {/* Phone */}
//                   <div className="flex items-center gap-3">
//                    <a href="tel:+97714535104">
//                     <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
//                       <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8}
//                         strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//                         <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-white/60 text-[11px] font-medium leading-none mb-1">Phone number</p>
//                       <p className="text-white font-bold text-[15px] leading-none"> +977 01-4535104</p>
//                     </div>
//                     </a>
//                   </div>

//                   {/* Divider */}
//                   <div className="hidden sm:block w-px h-8 bg-white/25" />

//                   {/* Email */}
//                   <div className="flex items-center gap-3">
//                     <a
//                      href="mailto:info@mnm.com.np"
//               target="_blank"
//               rel="noreferrer">
//                     <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
//                       <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8}
//                         strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//                         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                         <path d="M22 6l-10 7L2 6"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-white/60 text-[11px] font-medium leading-none mb-1">Email address</p>
//                       <p className="text-white font-bold text-[15px] leading-none"> info@mnm.com.np</p>
//                     </div>
//                     </a>
//                   </div>

//                 </div>
//               </div>

//               {/* ── RIGHT: CCTV technician image ──
//                   On desktop: absolutely positioned so the top of the image
//                   bleeds above the red section (negative top), matching the
//                   reference where the person's head/torso sticks out above.
//                   On mobile: normal flow, centred below the text.
//               -->*/}
//               <div className="
//                 relative
//                 flex items-end justify-center lg:justify-end
//                 w-full lg:w-[44%] xl:w-[42%]
//                 mt-0 lg:mt-0
//               ">

//                 {/* Mobile / tablet — inline image */}
//                 <img
//                   src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85"
//                   alt="CCTV security technician"
//                   className="
//                     block lg:hidden
//                     w-full
//                     object-cover object-top
                    
//                     mb-5
//                   "
//                   style={{ maxHeight: 340 }}
//                 />

//                 {/* Desktop — bleeds above the section */}
//                 <img
//                   src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85"
//                   alt="CCTV security technician"
//                   className="hidden lg:block w-full object-cover object-top"
//                   style={{
//                     maxWidth: 480,
//                     height: 480,
//                     // Pull the image up so it overflows the top of the red section
//                     // marginTop: -80,
//                     // Keep it flush to the bottom of the section
//                     alignSelf: "flex-end",
//                   }}
//                 />
//               </div>

//             </div>
//           </div>

//           {/* Subtle radial glow bottom-right */}
//           <div
//             className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 opacity-10"
//             style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
//           />

//         </section>
//       </div>
//     </>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactBanner() {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const imageRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Simple fade up animation for left content
    gsap.fromTo(leftContentRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Simple fade up animation for image
    gsap.fromTo(imageRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Simple fade up animation for contact info
    gsap.fromTo(contactInfoRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        ref={sectionRef}
        className="relative bg-white pt-0"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <section className="bg-[#cc1400] relative overflow-visible">
          <div className="max-w-7xl mx-auto px-8 sm:px-0">
            <div className="flex flex-col lg:flex-row items-stretch justify-between">
              {/* LEFT: text + contact info */}
              <div
                ref={leftContentRef}
                className="flex-1 py-12 lg:py-24 z-10 flex flex-col justify-center"
              >
                {/* Label */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-white text-md font-semibold uppercase">
                    Contact Us
                  </span>
                </div>

                {/* Headline */}
                <h2
                  className="text-white font-bold leading-relaxed mb-4 sm:text-5xl text-3xl"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  Secure your world with
                  <br />
                  trusted solutions join today!
                </h2>

                {/* Sub-text */}
                <p className="text-white text-md leading-relaxed mb-8">
                  Take control of your safety with our reliable security and quality solutions.
                </p>

                {/* Contact row */}
                <div ref={contactInfoRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <a href="tel:+97714535104" className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8}
                          strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-[11px] font-medium leading-none mb-1">Phone number</p>
                        <p className="text-white font-bold text-[15px] leading-none"> +977 01-4535104</p>
                      </div>
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-8 bg-white/25" />

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:info@mnm.com.np"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8}
                          strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <path d="M22 6l-10 7L2 6"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-[11px] font-medium leading-none mb-1">Email address</p>
                        <p className="text-white font-bold text-[15px] leading-none"> info@mnm.com.np</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT: CCTV technician image */}
              <div className="relative flex items-end justify-center lg:justify-end w-full lg:w-[44%] xl:w-[42%] mt-0 lg:mt-0">
                {/* Mobile / tablet — inline image */}
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85"
                  alt="CCTV security technician"
                  className="block lg:hidden w-full object-cover object-top mb-5"
                  style={{ maxHeight: 340 }}
                />

                {/* Desktop — with animation */}
                <img
                  ref={imageRef}
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85"
                  alt="CCTV security technician"
                  className="hidden lg:block w-full object-cover object-top"
                  style={{
                    maxWidth: 480,
                    height: 480,
                    alignSelf: "flex-end",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Subtle radial glow bottom-right */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 opacity-10"
            style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
          />
        </section>
      </div>
    </>
  );
}