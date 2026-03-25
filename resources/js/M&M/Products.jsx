// import React from "react";

// const ITEMS = [
//   {
//     label: "Fire Alarm",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M12 2c0 0-6 5-6 12a6 6 0 0012 0c0-7-6-12-6-12z"/>
//         <path d="M10 16a2 2 0 004 0c0-2-2-3.5-2-3.5s-2 1.5-2 3.5z" fill="#e01c08" stroke="none"/>
//         <circle cx="12" cy="2.5" r="1" fill="#e01c08" stroke="none"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Fire Detection Notification and Suppression",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
//         <path d="M13.73 21a2 2 0 01-3.46 0"/>
//         <path d="M8 8c0-2.5 2-4 4-4"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Integrated Security Systems",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"/>
//         <path d="M9 12l2 2 4-4"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Modern Access Control Systems",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <rect x="3" y="11" width="18" height="11" rx="2"/>
//         <path d="M7 11V7a5 5 0 0110 0v4"/>
//         <circle cx="12" cy="16" r="1.5" fill="#e01c08" stroke="none"/>
//         <path d="M12 17.5v1.5"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Advanced Building Management System Integration",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <rect x="2" y="3" width="20" height="14" rx="2"/>
//         <path d="M6 7h3v6H6zM11 7h3v4h-3zM16 7h2v7h-2z"/>
//         <path d="M8 21h8M12 17v4"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Public Addressal Systems",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M11 5L6 9H2v6h4l5 4V5z"/>
//         <path d="M19.07 4.93a10 10 0 010 14.14"/>
//         <path d="M15.54 8.46a5 5 0 010 7.07"/>
//       </svg>
//     ),
//   },
//   {
//     label: "DATA Network",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <rect x="9" y="2" width="6" height="4" rx="1"/>
//         <rect x="1" y="18" width="6" height="4" rx="1"/>
//         <rect x="17" y="18" width="6" height="4" rx="1"/>
//         <path d="M12 6v5M5 18v-3l7-2 7 2v3"/>
//         <path d="M12 11l-7 4M12 11l7 4"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Control and Monitor System",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <rect x="2" y="3" width="20" height="14" rx="2"/>
//         <path d="M8 21h8M12 17v4"/>
//         <circle cx="8" cy="10" r="2"/>
//         <circle cx="14" cy="8" r="1.5"/>
//         <path d="M14 9.5v3M8 12v1"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Building Management and Automation",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M3 21V8l9-6 9 6v13"/>
//         <path d="M9 21v-6h6v6"/>
//         <path d="M3 13h3M18 13h3"/>
//         <circle cx="18" cy="8" r="2"/>
//         <path d="M17 6l2-2"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Digital Lighting",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <circle cx="12" cy="11" r="4"/>
//         <path d="M12 2v2M12 18v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
//         <path d="M9 17h6M10 20h4"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Data Network",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M5 12.55a11 11 0 0114.08 0"/>
//         <path d="M1.42 9a16 16 0 0121.16 0"/>
//         <path d="M8.53 16.11a6 6 0 016.95 0"/>
//         <circle cx="12" cy="20" r="1.5" fill="#e01c08" stroke="none"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Grounding ERT",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
//         <path d="M4 21h16" strokeWidth={1.4}/>
//         <path d="M6 23h12" strokeWidth={1.2}/>
//       </svg>
//     ),
//   },
//   {
//     label: "Early Detection System",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <circle cx="11" cy="11" r="7"/>
//         <path d="M21 21l-4.35-4.35"/>
//         <path d="M11 8v3l2 2"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Remote Notification and Monitoring",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
//         <path d="M14.05 2a9 9 0 018 7.94"/>
//         <path d="M14.05 6A5 5 0 0118 9.95"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Customization on IoT RF, GSM, LORA, WIFI",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0"/>
//         <circle cx="12" cy="20" r="1.5" fill="#e01c08" stroke="none"/>
//         <path d="M12 20V13"/>
//         <rect x="9" y="10" width="6" height="3" rx="1"/>
//       </svg>
//     ),
//   },
//   {
//     label: "NVC Lighting",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
//         <path d="M12 2a7 7 0 017 7c0 3-1.5 5-3.5 6.5V17a2 2 0 01-2 2h-3a2 2 0 01-2-2v-1.5C6.5 14 5 12 5 9a7 7 0 017-7z"/>
//         <path d="M9 17h6M10 21h4"/>
//         <path d="M12 6v3M10 8l2-2 2 2"/>
//       </svg>
//     ),
//   },
// ];

// // 4 columns per row
// const COLS = 4;
// const ROWS = [];
// for (let i = 0; i < ITEMS.length; i += COLS) {
//   ROWS.push(ITEMS.slice(i, i + COLS));
// }

// export default function Products() {
//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       <div
//         className="min-h-screen flex items-center justify-center py-12 sm:py-24  "
//         style={{
//           backgroundImage: "url('/images/bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//         }}
//       >
//                 {/* <div className="absolute inset-0 bg-gray-100/70" /> */}

//         <div className="w-full max-w-7xl mx-auto px-6 sm:px-0 py-16 sm:py-24 ">

//           {/* ── Title ── */}
//           <div className="text-center mb-10 sm:mb-14">
//             <h2
//               className="text-[#e01c08] font-bold leading-relaxed sm:text-5xl text-2xl mb-4 "
//               style={{
//                 fontFamily: "'Barlow Condensed', sans-serif",
                
//               }}
//             >
//               COMPREHENSIVE ELECTRONIC
//             </h2>
//             <span
//               className="font-bold text-black leading-relaxed sm:text-5xl text-2xl  block"
             
//             >
//               SECURITY &amp; AUTOMATION
//             </span>
//           </div>

//           {/* ── Grid ──
//               Strategy: render a single CSS grid.
//               Every cell gets:
//                 - border-b (bottom border — always visible)
//                 - border-r on all except last in row (right border)
//               The outer wrapper gets border-t and border-l to close the box.
//               Result: every cell is enclosed by exactly one border on each side,
//               no doubling, no missing lines.
//           -->*/}
//           <div
//             className="bg-white w-full"
//             style={{ border: "1px solid #d1d5db" }}
//           >
//             {/* Desktop: 4-col true CSS grid */}
//             <div className="hidden lg:grid"
//               style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
//             >
//               {ITEMS.map((item, idx) => {
//                 const isLastInRow = (idx + 1) % COLS === 0;
//                 const isLastRow = idx >= ITEMS.length - (ITEMS.length % COLS || COLS);
//                 return (
//                   <div
//                     key={item.label}
//                     className="flex items-center gap-4 px-6 py-5"
//                     style={{
//                       borderRight: isLastInRow ? "none" : "1px solid #d1d5db",
//                       borderBottom: isLastRow ? "none" : "1px solid #d1d5db",
//                     }}
//                   >
//                     {/* Icon */}
//                     <div className="flex-shrink-0">{item.icon}</div>
//                     {/* Label */}
//                     <span
//                       className="text-gray-700 text-base leading-snug"
//                       style={{ fontFamily: "'Barlow', sans-serif" }}
//                     >
//                       {item.label}
//                     </span>
//                   </div>
//                 );
//               })}
//               {/* Fill empty trailing cells so last row closes properly */}
//               {ITEMS.length % COLS !== 0 &&
//                 Array.from({ length: COLS - (ITEMS.length % COLS) }).map((_, i) => (
//                   <div
//                     key={`pad-${i}`}
//                     style={{
//                       borderRight: i < COLS - (ITEMS.length % COLS) - 1 ? "1px solid #d1d5db" : "none",
//                     }}
//                   />
//                 ))}
//             </div>

//             {/* Tablet: 2-col grid */}
//             <div className="hidden sm:grid lg:hidden"
//               style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
//             >
//               {ITEMS.map((item, idx) => {
//                 const isLastInRow = (idx + 1) % 2 === 0;
//                 const isLastRow = idx >= ITEMS.length - (ITEMS.length % 2 || 2);
//                 return (
//                   <div
//                     key={item.label}
//                     className="flex items-center gap-4 px-5 py-5"
//                     style={{
//                       borderRight: isLastInRow ? "none" : "1px solid #d1d5db",
//                       borderBottom: isLastRow ? "none" : "1px solid #d1d5db",
//                     }}
//                   >
//                     <div className="flex-shrink-0">{item.icon}</div>
//                     <span
//                       className="text-gray-700 text-lg leading-snug"
//                       style={{ fontFamily: "'Barlow', sans-serif" }}
//                     >
//                       {item.label}
//                     </span>
//                   </div>
//                 );
//               })}
//               {ITEMS.length % 2 !== 0 && (
//                 <div style={{ borderBottom: "none" }} />
//               )}
//             </div>

//             {/* Mobile: 1-col */}
//             <div className="sm:hidden">
//               {ITEMS.map((item, idx) => (
//                 <div
//                   key={item.label}
//                   className="flex items-center gap-4 px-5 py-4"
//                   style={{
//                     borderBottom: idx < ITEMS.length - 1 ? "1px solid #d1d5db" : "none",
//                   }}
//                 >
//                   <div className="flex-shrink-0">{item.icon}</div>
//                   <span
//                     className="text-gray-700 text-[14px] leading-snug"
//                     style={{ fontFamily: "'Barlow', sans-serif" }}
//                   >
//                     {item.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>


//         </div>
//       </div>
//     </>
//   );
// }


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ITEMS = [
  {
    label: "Fire Alarm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M12 2c0 0-6 5-6 12a6 6 0 0012 0c0-7-6-12-6-12z"/>
        <path d="M10 16a2 2 0 004 0c0-2-2-3.5-2-3.5s-2 1.5-2 3.5z" fill="#e01c08" stroke="none"/>
        <circle cx="12" cy="2.5" r="1" fill="#e01c08" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Fire Detection Notification and Suppression",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
        <path d="M8 8c0-2.5 2-4 4-4"/>
      </svg>
    ),
  },
  {
    label: "Integrated Security Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: "Modern Access Control Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
        <circle cx="12" cy="16" r="1.5" fill="#e01c08" stroke="none"/>
        <path d="M12 17.5v1.5"/>
      </svg>
    ),
  },
  {
    label: "Advanced Building Management System Integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M6 7h3v6H6zM11 7h3v4h-3zM16 7h2v7h-2z"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    label: "Public Addressal Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
        <path d="M19.07 4.93a10 10 0 010 14.14"/>
        <path d="M15.54 8.46a5 5 0 010 7.07"/>
      </svg>
    ),
  },
  {
    label: "DATA Network",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <rect x="9" y="2" width="6" height="4" rx="1"/>
        <rect x="1" y="18" width="6" height="4" rx="1"/>
        <rect x="17" y="18" width="6" height="4" rx="1"/>
        <path d="M12 6v5M5 18v-3l7-2 7 2v3"/>
        <path d="M12 11l-7 4M12 11l7 4"/>
      </svg>
    ),
  },
  {
    label: "Control and Monitor System",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <circle cx="8" cy="10" r="2"/>
        <circle cx="14" cy="8" r="1.5"/>
        <path d="M14 9.5v3M8 12v1"/>
      </svg>
    ),
  },
  {
    label: "Building Management and Automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M3 21V8l9-6 9 6v13"/>
        <path d="M9 21v-6h6v6"/>
        <path d="M3 13h3M18 13h3"/>
        <circle cx="18" cy="8" r="2"/>
        <path d="M17 6l2-2"/>
      </svg>
    ),
  },
  {
    label: "Digital Lighting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <circle cx="12" cy="11" r="4"/>
        <path d="M12 2v2M12 18v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        <path d="M9 17h6M10 20h4"/>
      </svg>
    ),
  },
  {
    label: "Data Network",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M5 12.55a11 11 0 0114.08 0"/>
        <path d="M1.42 9a16 16 0 0121.16 0"/>
        <path d="M8.53 16.11a6 6 0 016.95 0"/>
        <circle cx="12" cy="20" r="1.5" fill="#e01c08" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Grounding ERT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        <path d="M4 21h16" strokeWidth={1.4}/>
        <path d="M6 23h12" strokeWidth={1.2}/>
      </svg>
    ),
  },
  {
    label: "Early Detection System",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <circle cx="11" cy="11" r="7"/>
        <path d="M21 21l-4.35-4.35"/>
        <path d="M11 8v3l2 2"/>
      </svg>
    ),
  },
  {
    label: "Remote Notification and Monitoring",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
        <path d="M14.05 2a9 9 0 018 7.94"/>
        <path d="M14.05 6A5 5 0 0118 9.95"/>
      </svg>
    ),
  },
  {
    label: "Customization on IoT RF, GSM, LORA, WIFI",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0"/>
        <circle cx="12" cy="20" r="1.5" fill="#e01c08" stroke="none"/>
        <path d="M12 20V13"/>
        <rect x="9" y="10" width="6" height="3" rx="1"/>
      </svg>
    ),
  },
  {
    label: "NVC Lighting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e01c08" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 flex-shrink-0">
        <path d="M12 2a7 7 0 017 7c0 3-1.5 5-3.5 6.5V17a2 2 0 01-2 2h-3a2 2 0 01-2-2v-1.5C6.5 14 5 12 5 9a7 7 0 017-7z"/>
        <path d="M9 17h6M10 21h4"/>
        <path d="M12 6v3M10 8l2-2 2 2"/>
      </svg>
    ),
  },
];

// 4 columns per row
const COLS = 4;
const ROWS = [];
for (let i = 0; i < ITEMS.length; i += COLS) {
  ROWS.push(ITEMS.slice(i, i + COLS));
}

export default function Products() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 30,
      });
      
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 30,
      });
      
      gsap.set(gridRef.current, {
        opacity: 0,
        scale: 0.95,
      });
      
      gsap.set(itemsRef.current, {
        opacity: 0,
        x: -30,
      });

      // Create scroll-triggered animations
      
      // 1. Title animation
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 60%",
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        },
        once: true,
      });

      // 2. Subtitle animation
      ScrollTrigger.create({
        trigger: subtitleRef.current,
        start: "top 80%",
        end: "top 60%",
        onEnter: () => {
          gsap.to(subtitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2,
          });
        },
        once: true,
      });

      // 3. Grid container animation
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 85%",
        end: "top 70%",
        onEnter: () => {
          gsap.to(gridRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        },
        once: true,
      });

      // 4. Staggered animation for grid items
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 80%",
        end: "top 60%",
        onEnter: () => {
          gsap.to(itemsRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(0.6)",
          });
        },
        once: true,
      });

      // 5. Parallax effect on background
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const bgElement = sectionRef.current?.querySelector('.bg-overlay');
          if (bgElement) {
            gsap.set(bgElement, {
              y: progress * 100,
            });
          }
        },
      });

      // 6. Hover animations for each item
      itemsRef.current.forEach((item, index) => {
        if (item) {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, {
              scale: 1.02,
              backgroundColor: "rgba(224, 28, 8, 0.05)",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(item.querySelector('svg'), {
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(0.8)",
            });
          });
          
          item.addEventListener("mouseleave", () => {
            gsap.to(item, {
              scale: 1,
              backgroundColor: "transparent",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(item.querySelector('svg'), {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Check if items are already in viewport on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkInView = () => {
        const titleRect = titleRef.current?.getBoundingClientRect();
        const subtitleRect = subtitleRef.current?.getBoundingClientRect();
        const gridRect = gridRef.current?.getBoundingClientRect();
        
        if (titleRect && titleRect.top < window.innerHeight * 0.8) {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        }
        
        if (subtitleRect && subtitleRect.top < window.innerHeight * 0.8) {
          gsap.to(subtitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2,
          });
        }
        
        if (gridRect && gridRect.top < window.innerHeight * 0.85) {
          gsap.to(gridRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          });
          gsap.to(itemsRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(0.6)",
          });
        }
      };
      
      checkInView();
      window.addEventListener('load', checkInView);
      return () => window.removeEventListener('load', checkInView);
    }
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center py-12 sm:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated overlay for parallax effect */}
        <div className="bg-overlay absolute inset-0 bg-gray-400/30 pointer-events-none" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/80 pointer-events-none" />


        <div className="w-full max-w-7xl mx-auto px-6 sm:px-0 py-16 sm:py-24 relative z-10">

          {/* Title Section */}
          <div className="text-center mb-10 sm:mb-14">
            <h2
              ref={titleRef}
              className="text-[#e01c08] font-bold leading-relaxed sm:text-5xl text-2xl mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              COMPREHENSIVE ELECTRONIC
            </h2>
            <span
              ref={subtitleRef}
              className="font-bold text-black leading-relaxed sm:text-5xl text-2xl block"
            >
              SECURITY &amp; AUTOMATION
            </span>
          </div>

          {/* Grid Container */}
          <div
            ref={gridRef}
            className="bg-white w-full shadow-2xl"
            style={{ border: "1px solid #d1d5db" }}
          >
            {/* Desktop: 4-col true CSS grid */}
            <div className="hidden lg:grid"
              style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              {ITEMS.map((item, idx) => {
                const isLastInRow = (idx + 1) % COLS === 0;
                const isLastRow = idx >= ITEMS.length - (ITEMS.length % COLS || COLS);
                return (
                  <div
                    key={item.label}
                    ref={el => itemsRef.current[idx] = el}
                    className="flex items-center gap-4 px-6 py-5 transition-all duration-300 cursor-pointer"
                    style={{
                      borderRight: isLastInRow ? "none" : "1px solid #d1d5db",
                      borderBottom: isLastRow ? "none" : "1px solid #d1d5db",
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 transition-transform duration-300">{item.icon}</div>
                    {/* Label */}
                    <span
                      className="text-gray-700 text-base leading-snug"
                      style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
              {/* Fill empty trailing cells so last row closes properly */}
              {ITEMS.length % COLS !== 0 &&
                Array.from({ length: COLS - (ITEMS.length % COLS) }).map((_, i) => (
                  <div
                    key={`pad-${i}`}
                    style={{
                      borderRight: i < COLS - (ITEMS.length % COLS) - 1 ? "1px solid #d1d5db" : "none",
                    }}
                  />
                ))}
            </div>

            {/* Tablet: 2-col grid */}
            <div className="hidden sm:grid lg:hidden"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {ITEMS.map((item, idx) => {
                const isLastInRow = (idx + 1) % 2 === 0;
                const isLastRow = idx >= ITEMS.length - (ITEMS.length % 2 || 2);
                return (
                  <div
                    key={item.label}
                    ref={el => itemsRef.current[idx] = el}
                    className="flex items-center gap-4 px-5 py-5 transition-all duration-300 cursor-pointer"
                    style={{
                      borderRight: isLastInRow ? "none" : "1px solid #d1d5db",
                      borderBottom: isLastRow ? "none" : "1px solid #d1d5db",
                    }}
                  >
                    <div className="flex-shrink-0 transition-transform duration-300">{item.icon}</div>
                    <span
                      className="text-gray-700 text-lg leading-snug"
                      style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
              {ITEMS.length % 2 !== 0 && (
                <div style={{ borderBottom: "none" }} />
              )}
            </div>

            {/* Mobile: 1-col */}
            <div className="sm:hidden">
              {ITEMS.map((item, idx) => (
                <div
                  key={item.label}
                  ref={el => itemsRef.current[idx] = el}
                  className="flex items-center gap-4 px-5 py-4 transition-all duration-300 cursor-pointer"
                  style={{
                    borderBottom: idx < ITEMS.length - 1 ? "1px solid #d1d5db" : "none",
                  }}
                >
                  <div className="flex-shrink-0 transition-transform duration-300">{item.icon}</div>
                  <span
                    className="text-gray-700 text-[14px] leading-snug"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional: Animated decoration */}
          {/* <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '3s' }} /> */}
        </div>
      </div>
    </>
  );
}