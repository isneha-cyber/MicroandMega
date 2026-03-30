
// import { Link } from '@inertiajs/react'
// import { useState, useEffect, useCallback } from 'react'

// const SLIDES = [
//   {
//     id: 1,
//     bg: '/images/hero1.jpg',
//     tag: 'WELCOME SOLUTIONS',
//     title: 'Advanced Security\nSolutions For Every\nSpace',
//     desc: 'The best home security solution — combining AI-powered cameras, smart integration, and 24/7 monitoring for ultimate protection & convenience.',
//     ctaLink: '/contact',
//     video: true,
//   },
//   {
//     id: 2,
//     bg: '/images/hero2.jpg',
//     tag: 'FIRE DETECTION',
//     title: 'Intelligent Fire\nDetection Systems\nFor Every Building',
//     desc: 'UL & EN listed fire alarm systems, suppression solutions, and integrated safety infrastructure for hospitals, banks and commercial spaces.',
//     ctaLink: '/products',
//     video: false,
//   },
//   {
//     id: 3,
//     bg: '/images/hero3.jpg',
//     tag: 'DATA NETWORK',
//     title: 'Robust Data\nNetworking\nInfrastructure',
//     desc: 'Ethernet, fiber and wireless solutions with structured cabling and grounding ERT — keeping your enterprise always connected.',
//     ctaLink: '/services',
//     video: false,
//   },
//   {
//     id: 4,
//     bg: '/images/hero4.jpg',
//     tag: 'IOT AUTOMATION',
//     title: 'Smart IoT &\nLighting Automation\nSystems',
//     desc: 'DALI, 1-10V, TRIAC and IoT dimming solutions — intelligent building management and remote monitoring for modern spaces.',
//     ctaLink: '/iot-automation',
//     video: false,
//   },
//   {
//     id: 5,
//     bg: '/images/hero5.jpg',
//     tag: 'ACCESS CONTROL',
//     title: 'AI-Powered\nAccess & Attendance\nControl',
//     desc: 'From turnstile ACS to mass access systems for schools, offices and factories — precision access management with AI-based recognition.',
//     ctaLink: '/products',
//     video: false,
//   },
// ]

// const FEATURES = [
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="56" height="56">
//         <rect x="3" y="10" width="32" height="22" rx="3" stroke="#bb1403" strokeWidth="2" />
//         <circle cx="19" cy="21" r="6" stroke="#bb1403" strokeWidth="2" />
//         <circle cx="19" cy="21" r="2.5" fill="#bb1403" />
//         <path d="M35 13 L45 9 L45 33 L35 29" stroke="#bb1403" strokeWidth="2" strokeLinejoin="round" />
//       </svg>
//     ),
//     iconSmall: (
//       <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
//         <rect x="3" y="10" width="32" height="22" rx="3" stroke="#bb1403" strokeWidth="2" />
//         <circle cx="19" cy="21" r="6" stroke="#bb1403" strokeWidth="2" />
//         <circle cx="19" cy="21" r="2.5" fill="#bb1403" />
//         <path d="M35 13 L45 9 L45 33 L35 29" stroke="#bb1403" strokeWidth="2" strokeLinejoin="round" />
//       </svg>
//     ),
//     label: 'Integrated Security Systems',
//     link: '/products/cctv',
//   },
//   {
//     // Access Control: keypad + padlock
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="56" height="56">
//         {/* Card reader / keypad */}
//         <rect x="4" y="6" width="20" height="36" rx="4" stroke="#bb1403" strokeWidth="2" />
//         <circle cx="9" cy="13" r="2" fill="#bb1403" />
//         <circle cx="9"  cy="21" r="1.5" fill="#bb1403" />
//         <circle cx="14" cy="21" r="1.5" fill="#bb1403" />
//         <circle cx="19" cy="21" r="1.5" fill="#bb1403" />
//         <circle cx="9"  cy="27" r="1.5" fill="#bb1403" />
//         <circle cx="14" cy="27" r="1.5" fill="#bb1403" />
//         <circle cx="19" cy="27" r="1.5" fill="#bb1403" />
//         <circle cx="9"  cy="33" r="1.5" fill="#bb1403" />
//         <circle cx="14" cy="33" r="1.5" fill="#bb1403" />
//         <circle cx="19" cy="33" r="1.5" fill="#bb1403" />
//         {/* Padlock */}
//         <rect x="28" y="24" width="16" height="14" rx="2" stroke="#bb1403" strokeWidth="2" />
//         <path d="M31 24 L31 18 Q36 13 41 18 L41 24" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="36" cy="31" r="2" fill="#bb1403" />
//         <rect x="35" y="31" width="2" height="4" rx="1" fill="#bb1403" />
//       </svg>
//     ),
//     iconSmall: (
//       <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
//         <rect x="4" y="6" width="20" height="36" rx="4" stroke="#bb1403" strokeWidth="2" />
//         <circle cx="9" cy="13" r="2" fill="#bb1403" />
//         <circle cx="9"  cy="21" r="1.5" fill="#bb1403" />
//         <circle cx="14" cy="21" r="1.5" fill="#bb1403" />
//         <circle cx="19" cy="21" r="1.5" fill="#bb1403" />
//         <circle cx="9"  cy="27" r="1.5" fill="#bb1403" />
//         <circle cx="14" cy="27" r="1.5" fill="#bb1403" />
//         <circle cx="19" cy="27" r="1.5" fill="#bb1403" />
//         <circle cx="9"  cy="33" r="1.5" fill="#bb1403" />
//         <circle cx="14" cy="33" r="1.5" fill="#bb1403" />
//         <circle cx="19" cy="33" r="1.5" fill="#bb1403" />
//         <rect x="28" y="24" width="16" height="14" rx="2" stroke="#bb1403" strokeWidth="2" />
//         <path d="M31 24 L31 18 Q36 13 41 18 L41 24" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="36" cy="31" r="2" fill="#bb1403" />
//         <rect x="35" y="31" width="2" height="4" rx="1" fill="#bb1403" />
//       </svg>
//     ),
//     label: 'Access Control Systems',
//     link: '/products/fire-alarm',
//   },
//   {
//     // Fire Detection: flame + sprinkler + alarm bell
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="56" height="56">
//         {/* Flame */}
//         <path d="M8 42 C8 30 14 26 16 16 C18 26 13 34 20 28 C22 34 20 42 8 42 Z" stroke="#bb1403" strokeWidth="1.8" strokeLinejoin="round" />
//         {/* Sprinkler head */}
//         <line x1="30" y1="4" x2="30" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         <line x1="23" y1="12" x2="37" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         {/* Water spray */}
//         <path d="M24 16 L22 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M30 16 L30 24" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M36 16 L38 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         {/* Alarm bell */}
//         <path d="M27 36 C27 29 30 25 34 25 C38 25 41 29 41 36 L41 39 L27 39 Z" stroke="#bb1403" strokeWidth="1.8" />
//         <line x1="25" y1="39" x2="43" y2="39" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="34" cy="42" r="2" fill="#bb1403" />
//         {/* Sound waves */}
//         <path d="M43 28 Q46 32 43 36" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M45 25 Q50 32 45 39" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     iconSmall: (
//       <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
//         <path d="M8 42 C8 30 14 26 16 16 C18 26 13 34 20 28 C22 34 20 42 8 42 Z" stroke="#bb1403" strokeWidth="1.8" strokeLinejoin="round" />
//         <line x1="30" y1="4" x2="30" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         <line x1="23" y1="12" x2="37" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         <path d="M24 16 L22 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M30 16 L30 24" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M36 16 L38 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M27 36 C27 29 30 25 34 25 C38 25 41 29 41 36 L41 39 L27 39 Z" stroke="#bb1403" strokeWidth="1.8" />
//         <line x1="25" y1="39" x2="43" y2="39" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="34" cy="42" r="2" fill="#bb1403" />
//         <path d="M43 28 Q46 32 43 36" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M45 25 Q50 32 45 39" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     label: 'Fire Detection ',
//     link: '/products',
//   },
// ]

// const DiscoverBtn = ({ href }) => (
//   <Link
//     href={href}
//     className="inline-flex items-center gap-2 bg-[#bb1403] hover:bg-[#9e1102] text-white px-6 py-2.5 rounded-full text-md font-semibold no-underline whitespace-nowrap font-['Barlow',sans-serif] transition-colors duration-150"
//   >
//     Get Started Now
//     <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
//       <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   </Link>
// )

// export default function Hero() {
//   const [current, setCurrent] = useState(0)

//   const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
//   const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

//   useEffect(() => {
//     const t = setInterval(next, 6000)
//     return () => clearInterval(t)
//   }, [next])

//   const slide = SLIDES[current]

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       <div className="relative font-['Barlow',sans-serif] mb-0 md:mb-[90px]">

//         {/* ── Hero ─────────────────────────────────────────────── */}
//         {/*
//           Mobile: auto height so all content is visible; min-h keeps it tall enough
//           Desktop: unchanged h-screen min-h-[940px]
//         */}
//         <div className="relative w-full min-h-[700px] md:min-h-[940px] h-auto md:h-screen overflow-hidden">

//           {/* Background image
//               bg-fixed = parallax attachment on desktop (what you asked for)
//               bg-scroll on mobile — bg-fixed is broken on iOS Safari so we use
//               a media-query-style workaround via Tailwind responsive prefix      */}
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed transition-all duration-700"
//             style={{ backgroundImage: `url(${slide.bg})` }}
//           />

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,10,20,0.90)] via-[rgba(5,10,20,0.60)] to-[rgba(5,10,20,0.30)]" />

//           {/* Red left accent bar */}
//           <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#bb1403]" />

//           {/* Slide content
//               Mobile: pt-28 clears the fixed navbar; pb-20 clears the arrow buttons
//               Desktop: unchanged flex justify-center + mt-14
//           */}
//           <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-0 max-w-7xl mx-auto pt-52 pb-20 md:pt-0 md:pb-0 md:mt-14">

//             {/* Tag */}
//             <div className="flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] text-white/70 uppercase font-['Barlow',sans-serif]">
//               <span className="inline-block w-5 h-0.5 bg-[#bb1403] rounded-sm flex-shrink-0" />
//               <svg viewBox="0 0 18 18" fill="none" width="13" height="13">
//                 <rect x="1" y="1" width="7" height="7" rx="1" fill="#bb1403" opacity="0.7" />
//                 <rect x="10" y="1" width="7" height="7" rx="1" fill="#bb1403" />
//                 <rect x="1" y="10" width="7" height="7" rx="1" fill="#bb1403" />
//                 <rect x="10" y="10" width="7" height="7" rx="1" fill="#bb1403" opacity="0.7" />
//               </svg>
//               {slide.tag}
//             </div>

//             {/* Headline — tighter leading on mobile */}
//             <h1
//               className="font-['Barlow_Condensed',sans-serif] font-bold uppercase text-white leading-relaxed md:leading-[62px] tracking-[0.5px] whitespace-pre-line mt-4 mb-4 max-w-[600px]"
//               style={{ fontSize: 'clamp(32px, 5.2vw, 68px)' }}
//             >
//               {slide.title}
//             </h1>

//             {/* Description */}
//             <p
//               className="text-white/70 leading-7 max-w-[460px] mb-6 font-['Barlow',sans-serif]"
//               style={{ fontSize: 'clamp(14px, 1.15vw, 16px)' }}
//             >
//               {slide.desc}
//             </p>

//             {/* CTA row */}
//             <div className="flex items-center gap-6 flex-wrap">
//               <DiscoverBtn href={slide.ctaLink} />
//             </div>
//           </div>

//           {/* Prev / Next arrows
//               Mobile: bottom-right corner, horizontal row
//               Desktop: unchanged mid-right, vertical column             */}
//           {/* <div className="absolute right-4 md:right-8 bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 flex flex-row md:flex-col gap-3">
//             <button
//               onClick={prev}
//               aria-label="Previous"
//               className="w-9 h-9 md:w-11 md:h-11 bg-white/10 border border-white/20 rounded-full text-white flex items-center justify-center hover:bg-[#bb1403] hover:border-[#bb1403] transition-colors duration-150 cursor-pointer"
//             >
//               <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
//                 <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//             <button
//               onClick={next}
//               aria-label="Next"
//               className="w-9 h-9 md:w-11 md:h-11 bg-white/10 border border-white/20 rounded-full text-white flex items-center justify-center hover:bg-[#bb1403] hover:border-[#bb1403] transition-colors duration-150 cursor-pointer"
//             >
//               <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
//                 <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div> */}
//         </div>

//         {/* ── Feature cards ─────────────────────────────────────────
//             Desktop: unchanged absolute straddle
//             Mobile: relative, sits below hero, slight overlap via -mt-6
//         ──────────────────────────────────────────────────────────── */}
//         <div
//           className="
//             relative z-30 mx-4 -mt-20 rounded-[20px] shadow-[0_8px_48px_rgba(0,0,0,0.14)]
//             md:absolute md:-bottom-4 md:left-[clamp(40px,7vw,120px)] md:right-[clamp(40px,7vw,120px)]
//             md:translate-y-1/2 md:mx-0 md:mt-0 md:max-w-3xl
//           "
//         >
//           <div className="grid grid-cols-3 bg-white rounded-[20px] overflow-hidden border border-gray-100">
//             {FEATURES.map((f, i) => (
//               <div
//                 key={i}
//                 className={[
//                   // Mobile: horizontal row layout (icon + label side by side)
//                   // sm+: vertical column (unchanged)
//                   'flex flex-col items-start gap-4 sm:gap-2.5 py-6 sm:py-0 sm:px-0 px-6 p-6 md:p-10',
//                   i < FEATURES.length - 1
//                     ? 'border-b border-gray-100 sm:border-b-0 sm:border-r sm:border-gray-100'
//                     : '',
//                 ].join(' ')}
//               >
//                 {/* Smaller icon on mobile, full size on sm+ */}
//                 <div className="flex-shrink-0 sm:hidden">{f.iconSmall}</div>
//                 <div className="hidden sm:block">{f.icon}</div>

//                 <div className="font-['Barlow',sans-serif] font-bold text-md sm:text-lg text-gray-900 leading-snug">
//                   {f.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


import { Link } from '@inertiajs/react'
import { useState, useEffect, useCallback, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const SLIDES = [
  {
    id: 1,
    bg: '/images/hero1.jpg',
    tag: 'WELCOME SOLUTIONS',
    title: 'Advanced Security\nSolutions For Every\nSpace',
    desc: 'The best home security solution — combining AI-powered cameras, smart integration, and 24/7 monitoring for ultimate protection & convenience.',
    ctaLink: '/contact',
    video: true,
  },
  {
    id: 2,
    bg: '/images/hero2.jpg',
    tag: 'FIRE DETECTION',
    title: 'Intelligent Fire\nDetection Systems\nFor Every Building',
    desc: 'UL & EN listed fire alarm systems, suppression solutions, and integrated safety infrastructure for hospitals, banks and commercial spaces.',
    ctaLink: '/products',
    video: false,
  },
  {
    id: 3,
    bg: '/images/hero3.jpg',
    tag: 'DATA NETWORK',
    title: 'Robust Data\nNetworking\nInfrastructure',
    desc: 'Ethernet, fiber and wireless solutions with structured cabling and grounding ERT — keeping your enterprise always connected.',
    ctaLink: '/services',
    video: false,
  },
  {
    id: 4,
    bg: '/images/hero4.jpg',
    tag: 'IOT AUTOMATION',
    title: 'Smart IoT &\nLighting Automation\nSystems',
    desc: 'DALI, 1-10V, TRIAC and IoT dimming solutions — intelligent building management and remote monitoring for modern spaces.',
    ctaLink: '/iot-automation',
    video: false,
  },
  {
    id: 5,
    bg: '/images/hero5.jpg',
    tag: 'ACCESS CONTROL',
    title: 'AI-Powered\nAccess & Attendance\nControl',
    desc: 'From turnstile ACS to mass access systems for schools, offices and factories — precision access management with AI-based recognition.',
    ctaLink: '/products',
    video: false,
  },
]

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="56" height="56">
        <rect x="3" y="10" width="32" height="22" rx="3" stroke="#bb1403" strokeWidth="2" />
        <circle cx="19" cy="21" r="6" stroke="#bb1403" strokeWidth="2" />
        <circle cx="19" cy="21" r="2.5" fill="#bb1403" />
        <path d="M35 13 L45 9 L45 33 L35 29" stroke="#bb1403" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    iconSmall: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="3" y="10" width="32" height="22" rx="3" stroke="#bb1403" strokeWidth="2" />
        <circle cx="19" cy="21" r="6" stroke="#bb1403" strokeWidth="2" />
        <circle cx="19" cy="21" r="2.5" fill="#bb1403" />
        <path d="M35 13 L45 9 L45 33 L35 29" stroke="#bb1403" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Integrated Security Systems',
  
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="56" height="56">
        <rect x="4" y="6" width="20" height="36" rx="4" stroke="#bb1403" strokeWidth="2" />
        <circle cx="9" cy="13" r="2" fill="#bb1403" />
        <circle cx="9" cy="21" r="1.5" fill="#bb1403" />
        <circle cx="14" cy="21" r="1.5" fill="#bb1403" />
        <circle cx="19" cy="21" r="1.5" fill="#bb1403" />
        <circle cx="9" cy="27" r="1.5" fill="#bb1403" />
        <circle cx="14" cy="27" r="1.5" fill="#bb1403" />
        <circle cx="19" cy="27" r="1.5" fill="#bb1403" />
        <circle cx="9" cy="33" r="1.5" fill="#bb1403" />
        <circle cx="14" cy="33" r="1.5" fill="#bb1403" />
        <circle cx="19" cy="33" r="1.5" fill="#bb1403" />
        <rect x="28" y="24" width="16" height="14" rx="2" stroke="#bb1403" strokeWidth="2" />
        <path d="M31 24 L31 18 Q36 13 41 18 L41 24" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="31" r="2" fill="#bb1403" />
        <rect x="35" y="31" width="2" height="4" rx="1" fill="#bb1403" />
      </svg>
    ),
    iconSmall: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <rect x="4" y="6" width="20" height="36" rx="4" stroke="#bb1403" strokeWidth="2" />
        <circle cx="9" cy="13" r="2" fill="#bb1403" />
        <circle cx="9" cy="21" r="1.5" fill="#bb1403" />
        <circle cx="14" cy="21" r="1.5" fill="#bb1403" />
        <circle cx="19" cy="21" r="1.5" fill="#bb1403" />
        <circle cx="9" cy="27" r="1.5" fill="#bb1403" />
        <circle cx="14" cy="27" r="1.5" fill="#bb1403" />
        <circle cx="19" cy="27" r="1.5" fill="#bb1403" />
        <circle cx="9" cy="33" r="1.5" fill="#bb1403" />
        <circle cx="14" cy="33" r="1.5" fill="#bb1403" />
        <circle cx="19" cy="33" r="1.5" fill="#bb1403" />
        <rect x="28" y="24" width="16" height="14" rx="2" stroke="#bb1403" strokeWidth="2" />
        <path d="M31 24 L31 18 Q36 13 41 18 L41 24" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="31" r="2" fill="#bb1403" />
        <rect x="35" y="31" width="2" height="4" rx="1" fill="#bb1403" />
      </svg>
    ),
    label: 'Access Control Systems',
   
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="56" height="56">
        <path d="M8 42 C8 30 14 26 16 16 C18 26 13 34 20 28 C22 34 20 42 8 42 Z" stroke="#bb1403" strokeWidth="1.8" strokeLinejoin="round" />
        <line x1="30" y1="4" x2="30" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <line x1="23" y1="12" x2="37" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 16 L22 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 16 L30 24" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 16 L38 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M27 36 C27 29 30 25 34 25 C38 25 41 29 41 36 L41 39 L27 39 Z" stroke="#bb1403" strokeWidth="1.8" />
        <line x1="25" y1="39" x2="43" y2="39" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="42" r="2" fill="#bb1403" />
        <path d="M43 28 Q46 32 43 36" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M45 25 Q50 32 45 39" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    iconSmall: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M8 42 C8 30 14 26 16 16 C18 26 13 34 20 28 C22 34 20 42 8 42 Z" stroke="#bb1403" strokeWidth="1.8" strokeLinejoin="round" />
        <line x1="30" y1="4" x2="30" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <line x1="23" y1="12" x2="37" y2="12" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 16 L22 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 16 L30 24" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 16 L38 23" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M27 36 C27 29 30 25 34 25 C38 25 41 29 41 36 L41 39 L27 39 Z" stroke="#bb1403" strokeWidth="1.8" />
        <line x1="25" y1="39" x2="43" y2="39" stroke="#bb1403" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="42" r="2" fill="#bb1403" />
        <path d="M43 28 Q46 32 43 36" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M45 25 Q50 32 45 39" stroke="#bb1403" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Fire Detection',

  },
]

const DiscoverBtn = () => (
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 bg-[#bb1403] hover:bg-[#9e1102] text-white px-6 py-2.5 rounded-full text-md font-semibold no-underline whitespace-nowrap font-['Barlow',sans-serif] transition-colors duration-150"
  >
    Get Started Now
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Link>
);


export default function Hero() {
  const [current, setCurrent] = useState(0)
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const tagRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const cardsRef = useRef(null)
  const redBarRef = useRef(null)

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const slide = SLIDES[current]

  // GSAP Animations
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([tagRef.current, titleRef.current, descRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
      })
      
      gsap.set(redBarRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
      })
      
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 50,
      })

      // Animate red accent bar
      gsap.to(redBarRef.current, {
        scaleY: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
      })

      // Animate content with stagger
      const tl = gsap.timeline()
      tl.to(tagRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(0.8)',
      }, '-=0.3')

      // Animate background with subtle scale on load
      const bgImage = document.querySelector('.hero-bg-image')
      if (bgImage) {
        gsap.fromTo(bgImage,
          { scale: 1.1 },
          { scale: 1, duration: 1.2, ease: 'power2.out' }
        )
      }

      // ScrollTrigger for feature cards
      if (cardsRef.current) {
        ScrollTrigger.create({
          trigger: cardsRef.current,
          start: 'top 85%',
          end: 'top 65%',
          onEnter: () => {
            gsap.to(cardsRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'back.out(0.6)',
            })
          },
          once: true,
        })
      }

      // Parallax effect on scroll for hero background
      if (heroRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            const bgElement = document.querySelector('.hero-bg-image')
            if (bgElement) {
              gsap.set(bgElement, {
                y: progress * 150,
                scale: 1 + progress * 0.1,
              })
            }
          },
        })
      }

      // Subtle fade effect on scroll for hero content
      if (heroRef.current && contentRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 20%',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            gsap.set(contentRef.current, {
              opacity: 1 - progress * 0.5,
              y: progress * 50,
            })
          },
        })
      }

    }, heroRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Animate slide transitions
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content out and in for slide changes
      gsap.to([tagRef.current, titleRef.current, descRef.current, ctaRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.05,
        onComplete: () => {
          gsap.to([tagRef.current, titleRef.current, descRef.current, ctaRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(0.6)',
          })
        }
      })

      // Animate background transition
      const bgImage = document.querySelector('.hero-bg-image')
      if (bgImage) {
        gsap.fromTo(bgImage,
          { scale: 1.1 },
          { scale: 1, duration: 0.8, ease: 'power2.out' }
        )
      }

    }, [current])

    return () => ctx.revert()
  }, [current])

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div ref={heroRef} className="relative font-['Barlow',sans-serif] mb-0 md:mb-[90px]">

        <div className="relative w-full min-h-[700px] md:min-h-[940px] h-auto md:h-screen overflow-hidden">

          {/* Background image */}
          <div
            className="hero-bg-image absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed transition-all duration-700"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />

          {/* Dark overlay with gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,10,20,0.90)] via-[rgba(5,10,20,0.60)] to-[rgba(5,10,20,0.30)]" />

          {/* Red left accent bar */}
          <div 
            ref={redBarRef}
            className="absolute left-0 top-0 bottom-0 w-1 bg-[#bb1403]"
          />

          {/* Slide content */}
          <div 
            ref={contentRef}
            className="relative z-10 h-full flex flex-col justify-center px-8 md:px-0 max-w-7xl mx-auto pt-52 pb-20 md:pt-0 md:pb-0 md:mt-14"
          >

            {/* Tag */}
            <div 
              ref={tagRef}
              className="flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] text-white/70 uppercase font-['Barlow',sans-serif]"
            >
              <span className="inline-block w-5 h-0.5 bg-[#bb1403] rounded-sm flex-shrink-0" />
              <svg viewBox="0 0 18 18" fill="none" width="13" height="13">
                <rect x="1" y="1" width="7" height="7" rx="1" fill="#bb1403" opacity="0.7" />
                <rect x="10" y="1" width="7" height="7" rx="1" fill="#bb1403" />
                <rect x="1" y="10" width="7" height="7" rx="1" fill="#bb1403" />
                <rect x="10" y="10" width="7" height="7" rx="1" fill="#bb1403" opacity="0.7" />
              </svg>
              {slide.tag}
            </div>

            {/* Headline */}
            <h1
              ref={titleRef}
              className="font-['Barlow_Condensed',sans-serif] font-bold uppercase text-white leading-relaxed md:leading-[62px] tracking-[0.5px] whitespace-pre-line mt-4 mb-4 max-w-[600px]"
              style={{ fontSize: 'clamp(32px, 5.2vw, 68px)' }}
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="text-white/70 leading-7 max-w-[460px] mb-6 font-['Barlow',sans-serif]"
              style={{ fontSize: 'clamp(14px, 1.15vw, 16px)' }}
            >
              {slide.desc}
            </p>

            {/* CTA row */}
            <div ref={ctaRef}>
              <DiscoverBtn href={slide.ctaLink} />
            </div>
          </div>
        </div>

       {/* Feature cards */}
<div
  ref={cardsRef}
  className="
    relative z-30 mx-4 -mt-20 rounded-[20px] shadow-[0_8px_48px_rgba(0,0,0,0.14)]
    md:absolute md:-bottom-32 md:left-[clamp(40px,7vw,120px)] md:right-[clamp(40px,7vw,120px)]
    md:translate-y-1/2 md:mx-0 md:mt-0 md:max-w-3xl
  "
>
  <div className="grid grid-cols-3 bg-white rounded-[20px] overflow-hidden border border-gray-100">
    {FEATURES.map((f, i) => (
      <div
        key={i}
        className={[
          'flex flex-col items-start gap-4 sm:gap-2.5 py-6 sm:py-0 sm:px-0 px-6 p-6 md:p-10 hover:bg-gray-50 transition-all duration-300 cursor-default',
          i < FEATURES.length - 1
            ? 'border-b border-gray-100 sm:border-b-0 sm:border-r sm:border-gray-100'
            : '',
        ].join(' ')}
      >
        <div className="flex-shrink-0 sm:hidden group-hover:scale-110 transition-transform duration-300">{f.iconSmall}</div>
        <div className="hidden sm:block group-hover:scale-110 transition-transform duration-300">{f.icon}</div>

        <div className="font-['Barlow',sans-serif] font-bold text-md sm:text-lg text-gray-900 leading-snug group-hover:text-[#bb1403] transition-colors duration-300">
          {f.label}
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </>
  )
}