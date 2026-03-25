// import { Link } from "@inertiajs/react";
// import { useState } from "react";

// const QUICK_LINKS = [
//   { label: "Home",     path: "/" },
//   { label: "About Us", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Blog",     path: "/blog" },
// ];

// const SERVICES = [
//   { label: "24/7 Monitoring Services",   path: "/services" },
//   { label: "Alarm Systems Installation", path: "/services" },
//   { label: "CCTV Installation",          path: "/services" },
//   { label: "Smart Home Integration",     path: "/services" },
// ];

// const Pinterest = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
//     <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
//   </svg>
// );
// const Twitter = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//   </svg>
// );
// const Facebook = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//   </svg>
// );
// const Instagram = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//   </svg>
// );

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     setEmail("");
//   };

//   return (
//     <footer
//       className="bg-[#1a1a1a] text-white"
//       style={{ fontFamily: "'Barlow', sans-serif" }}
//     >
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       {/* ── TOP CONTACT BAR ── */}
//       <div className="max-w-7xl mx-auto px-8 lg:px-0 pt-16">
//         <div className="flex flex-col sm:flex-row items-stretch rounded-3xl overflow-hidden">

//            <div className="bg-[#cc1400] flex items-center gap-3 px-8 py-8 flex-shrink-0 min-w-[200px]">
//             <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
//              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 lg:w-5 lg:h-5">
//                 <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/>
//                 <circle cx="12" cy="12" r="2" fill="#fff"/>
//                 <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <span className="text-white font-extrabold text-xl tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
//               Micro&amp;Mega
//             </span>
//           </div>

//           {/* Contact info */}
//           <div className="bg-[#2a2a2a] flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-around gap-5 sm:gap-0 px-8 sm:px-8 py-5 sm:py-0">

//             {/* Phone */}
//             <a
//               href="tel:+97714535104"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-4 no-underline group"
//             >
//               <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1400] group-hover:border-[#cc1400] transition-all duration-150">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6">
//                   <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-gray-400 text-md font-medium">phone number</p>
//                 <p className="text-white font-bold text-lg group-hover:text-[#cc1400] transition-colors duration-150">+977 01-4535104</p>
//               </div>
//             </a>

//             <div className="hidden sm:block w-px h-8 bg-white/10" />

//             {/* Email */}
//             <a
//               href="mailto:info@mnm.com.np"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-4 no-underline group"
//             >
//               <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1400] group-hover:border-[#cc1400] transition-all duration-150">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                   <path d="M22 6l-10 7L2 6"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-gray-400 text-md font-medium">email address</p>
//                 <p className="text-white font-bold text-lg group-hover:text-[#cc1400] transition-colors duration-150">info@mnm.com.np</p>
//               </div>
//             </a>

//             <div className="hidden sm:block w-px h-8 bg-white/10" />

//             {/* Location */}
//             <a
//               href="https://maps.google.com/?q=Ichhunadi+Marg,+Kathmandu"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-4 no-underline group"
//             >
//               <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1400] group-hover:border-[#cc1400] transition-all duration-150">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6">
//                   <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
//                   <circle cx="12" cy="10" r="3"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-gray-400 text-md font-medium">location</p>
//                 <p className="text-white font-bold text-lg group-hover:text-[#cc1400] transition-colors duration-150">Ichhunadi Marg, Kathmandu</p>
//               </div>
//             </a>

//           </div>
//         </div>
//       </div>

//       {/* ── MAIN FOOTER GRID ── */}
//       <div className="max-w-7xl mx-auto px-8 lg:px-0 py-16 sm:py-24">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//           {/* Col 1 — About */}
//           <div className="flex flex-col gap-5">
//             <h4 className="text-white font-bold text-lg">About Solutions</h4>
//             <p className="text-gray-400 text-md leading-relaxed">
//               We provide advanced Security and CCTV solutions, ensuring 24/7 protection with high-quality systems.
//             </p>
//             {/* Social icons */}
//             <div className="flex items-center gap-2 mt-1">
//               {[
//                 { Icon: Facebook,  href: "https://www.facebook.com/micronmega",        label: "Facebook" },
//                 { Icon: Instagram, href: "https://www.instagram.com/microandmega/",    label: "Instagram" },
//               ].map(({ Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={label}
//                   className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-[#cc1400] hover:border-[#cc1400] hover:text-white transition-all duration-150"
//                 >
//                   <Icon />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Col 2 & 3 — Quick Links + Services side by side on mobile */}
//           <div className="flex flex-row gap-12 sm:contents">
//             {/* Col 2 — Quick Links */}
//             <div className="flex flex-col gap-5">
//               <h4 className="text-white font-bold text-lg">Quick link</h4>
//               <ul className="flex flex-col gap-3">
//                 {QUICK_LINKS.map((l) => (
//                   <li key={l.label}>
//                     <Link
//                       href={l.path}
//                       className="text-gray-400 text-md hover:text-[#cc1400] transition-colors duration-150 no-underline"
//                     >
//                       {l.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Col 3 — Services */}
//             <div className="flex flex-col gap-5">
//               <h4 className="text-white font-bold text-lg">Services</h4>
//               <ul className="flex flex-col gap-3">
//                 {SERVICES.map((s) => (
//                   <li key={s.label}>
//                     <Link
//                       href={s.path}
//                       className="text-gray-400 text-md hover:text-[#cc1400] transition-colors duration-150 no-underline"
//                     >
//                       {s.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Col 4 — Subscribe */}
//           <div className="flex flex-col gap-5">
//             <h4 className="text-white font-bold text-lg">Subscribe</h4>
//             <p className="text-gray-400 text-md leading-relaxed">
//               Stay updated with the latest security trends offers by subscribing to our newsletter.
//             </p>
//             <form onSubmit={handleSubscribe} className="flex items-center mt-1">
//               <div className="flex-1 relative flex items-center bg-[#2a2a2a] rounded-full overflow-hidden pr-1 pl-4 py-1">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter Your Email"
//                   required
//                   className="flex-1 bg-transparent text-white text-[13px] placeholder-gray-500 outline-none border-none py-2"
//                   style={{ fontFamily: "'Barlow', sans-serif" }}
//                 />
//                 <button
//                   type="submit"
//                   className="w-10 h-10 rounded-full bg-[#cc1400] hover:bg-[#aa1000] flex items-center justify-center flex-shrink-0 transition-colors duration-150"
//                   aria-label="Subscribe"
//                 >
//                   <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//                     <path d="M22 2L11 13"/>
//                     <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
//                   </svg>
//                 </button>
//               </div>
//             </form>
//           </div>

//         </div>
//       </div>

//       {/* ── COPYRIGHT BAR ── */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-gray-500 text-sm">
//             Copyright © 2026 All Rights Reserved.
//           </p>

//           {/* Crafted by credit */}
//           <p className="text-gray-500 text-sm">
//             Crafted by{" "}
//             <a
//               href="https://sait.com.np/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-gray-400 hover:text-[#cc1400] transition-colors duration-150 font-medium no-underline"
//             >
//               S.A I.T Solution Trade and Concern
//             </a>
//           </p>

//           <div className="flex items-center gap-2 text-gray-500 text-sm">
//             <a href="#" className="hover:text-white transition-colors">Help</a>
//             <span className="opacity-40">/</span>
//             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//             <span className="opacity-40">/</span>
//             <a href="#" className="hover:text-white transition-colors">Term's &amp; Condition</a>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// }


import { Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const QUICK_LINKS = [
  { label: "Home",     path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog",     path: "/blog" },
];

const SERVICES = [
  { label: "24/7 Monitoring Services",   path: "/services" },
  { label: "Alarm Systems Installation", path: "/services" },
  { label: "CCTV Installation",          path: "/services" },
  { label: "Smart Home Integration",     path: "/services" },
];

const Pinterest = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);
const Twitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  
  // Refs for animation targets
  const footerRef = useRef(null);
  const topBarRef = useRef(null);
  const aboutColRef = useRef(null);
  const quickLinksRef = useRef(null);
  const servicesRef = useRef(null);
  const subscribeRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    // Initial animation on page load - footer elements fade in with stagger
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([aboutColRef.current, quickLinksRef.current, servicesRef.current, subscribeRef.current], {
        opacity: 0,
        y: 50,
      });
      
      gsap.set(topBarRef.current, {
        opacity: 0,
        y: 30,
      });
      
      gsap.set(copyrightRef.current, {
        opacity: 0,
      });

      // Initial load animations
      const tl = gsap.timeline();
      tl.to(topBarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to([aboutColRef.current, quickLinksRef.current, servicesRef.current, subscribeRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(0.7)",
      }, "-=0.3")
      .to(copyrightRef.current, {
        opacity: 1,
        duration: 0.5,
      }, "-=0.2");

      // Scroll-triggered animations for each column
      const sections = [
        { ref: aboutColRef.current, direction: "left" },
        { ref: quickLinksRef.current, direction: "right" },
        { ref: servicesRef.current, direction: "left" },
        { ref: subscribeRef.current, direction: "right" },
      ];

      sections.forEach((section, index) => {
        if (section.ref) {
          // Reset any existing animations
          gsap.set(section.ref, { clearProps: "all" });
          
          // Create scroll-triggered animation
          gsap.fromTo(section.ref,
            {
              opacity: 0,
              x: section.direction === "left" ? -80 : 80,
              scale: 0.95,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section.ref,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                once: false,
              },
            }
          );
        }
      });

      // Animate contact info items with hover effect
      const contactItems = topBarRef.current?.querySelectorAll('.contact-item');
      if (contactItems) {
        contactItems.forEach((item, i) => {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: 20,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }

      // Animate social icons with subtle bounce on scroll
      const socialIcons = aboutColRef.current?.querySelectorAll('.social-icon');
      if (socialIcons) {
        gsap.fromTo(socialIcons,
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: aboutColRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate newsletter form
      if (subscribeRef.current) {
        const form = subscribeRef.current.querySelector('form');
        if (form) {
          gsap.fromTo(form,
            {
              opacity: 0,
              scale: 0.9,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: 0.3,
              scrollTrigger: {
                trigger: subscribeRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      // Animate copyright links with fade up
      const copyrightLinks = copyrightRef.current?.querySelectorAll('a, span');
      if (copyrightLinks) {
        gsap.fromTo(copyrightLinks,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            scrollTrigger: {
              trigger: copyrightRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Add hover animation for all interactive elements
      const interactiveElements = footerRef.current?.querySelectorAll('a, button');
      if (interactiveElements) {
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', () => {
            gsap.to(el, {
              scale: 1.05,
              duration: 0.2,
              ease: "power2.out",
            });
          });
          el.addEventListener('mouseleave', () => {
            gsap.to(el, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        });
      }
    }, footerRef);

    // Cleanup function
    return () => {
      ctx.revert();
      // Kill all scroll triggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add animation feedback
    const button = e.target.querySelector('button');
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
    setEmail("");
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#1a1a1a] text-white overflow-hidden"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ── TOP CONTACT BAR ── */}
      <div ref={topBarRef} className="max-w-7xl mx-auto px-8 lg:px-0 pt-16">
        <div className="flex flex-col sm:flex-row items-stretch rounded-3xl overflow-hidden">
          <div className="bg-[#cc1400] flex items-center gap-3 px-8 py-8 flex-shrink-0 min-w-[200px]">
            <img className="w-24 h-24 rounded-full " src="/images/logo.png" alt="" />
            {/* <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 lg:w-5 lg:h-5">
                <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="#fff"/>
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
    
            </div> */}
            {/* <span className="text-white font-extrabold text-xl tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Micro&amp;Mega
            </span> */}
          </div>

          {/* Contact info */}
          <div className="bg-[#2a2a2a] flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-around gap-5 sm:gap-0 px-8 sm:px-8 py-5 sm:py-0">
            {/* Phone */}
            <a
              href="tel:+97714535104"
              target="_blank"
              rel="noreferrer"
              className="contact-item flex items-center gap-4 no-underline group"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1400] group-hover:border-[#cc1400] transition-all duration-150">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-md font-medium">phone number</p>
                <p className="text-white font-bold text-lg group-hover:text-[#cc1400] transition-colors duration-150">+977 01-4535104</p>
              </div>
            </a>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            {/* Email */}
            <a
              href="mailto:info@mnm.com.np"
              target="_blank"
              rel="noreferrer"
              className="contact-item flex items-center gap-4 no-underline group"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1400] group-hover:border-[#cc1400] transition-all duration-150">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-md font-medium">email address</p>
                <p className="text-white font-bold text-lg group-hover:text-[#cc1400] transition-colors duration-150">info@mnm.com.np</p>
              </div>
            </a>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Ichhunadi+Marg,+Kathmandu"
              target="_blank"
              rel="noreferrer"
              className="contact-item flex items-center gap-4 no-underline group"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1400] group-hover:border-[#cc1400] transition-all duration-150">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-md font-medium">location</p>
                <p className="text-white font-bold text-lg group-hover:text-[#cc1400] transition-colors duration-150">Ichhunadi Marg, Kathmandu</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-7xl mx-auto px-8 lg:px-0 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — About */}
          <div ref={aboutColRef} className="flex flex-col gap-5">
            <h4 className="text-white font-bold text-lg">About Solutions</h4>
            <p className="text-gray-400 text-md leading-relaxed">
              We provide advanced Security and CCTV solutions, ensuring 24/7 protection with high-quality systems.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { Icon: Facebook,  href: "https://www.facebook.com/micronmega",        label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/microandmega/",    label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="social-icon w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-[#cc1400] hover:border-[#cc1400] hover:text-white transition-all duration-150"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 & 3 — Quick Links + Services */}
          <div className="flex flex-row gap-12 sm:contents">
            {/* Col 2 — Quick Links */}
            <div ref={quickLinksRef} className="flex flex-col gap-5">
              <h4 className="text-white font-bold text-lg">Quick link</h4>
              <ul className="flex flex-col gap-3">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.path}
                      className="text-gray-400 text-md hover:text-[#cc1400] transition-colors duration-150 no-underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div ref={servicesRef} className="flex flex-col gap-5">
              <h4 className="text-white font-bold text-lg">Services</h4>
              <ul className="flex flex-col gap-3">
                {SERVICES.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.path}
                      className="text-gray-400 text-md hover:text-[#cc1400] transition-colors duration-150 no-underline"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4 — Subscribe */}
          <div ref={subscribeRef} className="flex flex-col gap-5">
            <h4 className="text-white font-bold text-lg">Subscribe</h4>
            <p className="text-gray-400 text-md leading-relaxed">
              Stay updated with the latest security trends offers by subscribing to our newsletter.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center mt-1">
              <div className="flex-1 relative flex items-center bg-[#2a2a2a] rounded-full overflow-hidden pr-1 pl-4 py-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                  className="flex-1 bg-transparent text-white text-[13px] placeholder-gray-500 outline-none border-none py-2"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-[#cc1400] hover:bg-[#aa1000] flex items-center justify-center flex-shrink-0 transition-colors duration-150"
                  aria-label="Subscribe"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22 2L11 13"/>
                    <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div ref={copyrightRef} className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            Copyright © 2026 All Rights Reserved.
          </p>

          {/* Crafted by credit */}
          <p className="text-gray-500 text-sm">
            Crafted by{" "}
            <a
              href="https://sait.com.np/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#cc1400] transition-colors duration-150 font-medium no-underline"
            >
              S.A I.T Solution Trade and Concern
            </a>
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Help</a>
            <span className="opacity-40">/</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-40">/</span>
            <a href="#" className="hover:text-white transition-colors">Term's &amp; Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}