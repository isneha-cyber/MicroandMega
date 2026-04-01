// // import { useState, useEffect, useRef } from "react";

// // // ── Counter animation hook ──
// // function useCountUp(target, duration = 2000, startCounting = false) {
// // const [count, setCount] = useState(0);
// // useEffect(() => {
// //     if (!startCounting) return;
// //     let start = 0;
// //     const step = Math.ceil(target / (duration / 16));
// //     const timer = setInterval(() => {
// //       start += step;
// //       if (start >= target) {
// //         setCount(target);
// //         clearInterval(timer);
// //       } else {
// //         setCount(start);
// //       }
// //     }, 16);
// //     return () => clearInterval(timer);
// // }, [target, duration, startCounting]);
// // return count;
// // }

// // const FEATURES = [
// // {
// //     title: "24/7 Monitoring And Alerts",
// //     desc: "We provide continuous your property remains secure at all times Our system actively monitors for suspicious.",
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
// //         <path d="M24 8C14 8 6 24 6 24s8 16 18 16 18-16 18-16S34 8 24 8z"/>
// //         <circle cx="24" cy="24" r="6"/>
// //         <circle cx="24" cy="24" r="2.5" fill="white" stroke="none"/>
// //         <path d="M24 4v4M24 40v4M4 24H8M40 24h4"/>
// //       </svg>
// //     ),
// // },
// // {
// //     title: "High-Definition Video",
// //     desc: "We provide continuous your property remains secure at all times Our system actively monitors for suspicious.",
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
// //         <rect x="3" y="12" width="30" height="22" rx="3"/>
// //         <path d="M33 18l10-5v20l-10-5"/>
// //         <circle cx="18" cy="23" r="5"/>
// //         <circle cx="18" cy="23" r="2" fill="white" stroke="none"/>
// //       </svg>
// //     ),
// // },
// // {
// //     title: "Scalable System",
// //     desc: "We provide continuous your property remains secure at all times Our system actively monitors for suspicious.",
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
// //         <rect x="4" y="14" width="26" height="18" rx="3"/>
// //         <path d="M30 17l10-5v22l-10-5"/>
// //         <path d="M10 23h14M17 17v12"/>
// //       </svg>
// //     ),
// // },
// // {
// //     title: "Tamper-Proof Design",
// //     desc: "We provide continuous your property remains secure at all times Our system actively monitors for suspicious.",
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
// //         <path d="M24 4L8 10v12c0 11 7 20 16 22 9-2 16-11 16-22V10L24 4z"/>
// //         <path d="M17 24l5 5 9-10"/>
// //       </svg>
// //     ),
// // },
// // ];

// // const STATS = [
// // { value: 220, suffix: "+", label: "Residential Area" },
// // { value: 30,  suffix: "+", label: "Malls & Building" },
// // { value: 100, suffix: "+", label: "Commercial Space" },
// // { value: 700, suffix: "+", label: "Project Complete" },
// // { value: 25,  suffix: "+", label: "Year of Experience" },
// // ];

// // // Individual animated stat
// // function StatItem({ value, suffix, label, startCounting }) {
// // const count = useCountUp(value, 1800, startCounting);
// // return (
// //     <div className="flex flex-col items-start">
// //       <span
// //         className="text-white font-extrabold leading-none"
// //         style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 52px)" }}
// //       >
// //         {count}{suffix}
// //       </span>
// //       <span
// //         className="text-white/70 text-[13px] mt-1 leading-relaxed"
// //         style={{ fontFamily: "'Barlow', sans-serif" }}
// //       >
// //         {label}
// //       </span>
// //     </div>
// // );
// // }

// // export default function Services() {
// // const [startCounting, setStartCounting] = useState(false);
// // const statsRef = useRef(null);

// // // Trigger counter when stats row enters viewport
// // useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => { if (entry.isIntersecting) setStartCounting(true); },
// //       { threshold: 0.3 }
// //     );
// //     if (statsRef.current) observer.observe(statsRef.current);
// //     return () => observer.disconnect();
// // }, []);

// // return (
// //     <>
// //       <link
// //         href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap"
// //         rel="stylesheet"
// //       />

// //       <section className="bg-[#cc1400] relative overflow-hidden">

// //         {/* ── Top content area ── */}
// //         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-18 lg:pt-20 pb-10 sm:pb-14">

// //           {/* ── Header row: label + spinning badge ── */}
// //           <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">

// //             {/* Left: label + headline */}
// //             <div className="flex-1">
// //               {/* Label */}
// //               <div className="flex items-center gap-2 mb-3">

// //                 <span
// //                   className="text-white text-md leading-relaxed tracking-[2px] uppercase"
// //                   style={{ fontFamily: "'Barlow', sans-serif" }}
// //                 >
// //                   Our Services
// //                 </span>
// //               </div>

// //               {/* Headline */}
// //               <h2
// //                 className="text-white font-bold leading-relaxed"
// //                 style={{
// //                   fontFamily: "'Barlow', sans-serif",
// //                   fontSize: "clamp(26px, 4vw, 46px)",
// //                 }}
// //               >
// //                 Advanced security systems,
// //                 <br className="hidden sm:block" />
// //                 reliable CCTV solutions
// //               </h2>
// //             </div>

// //             {/* Right: spinning circular badge */}
// //             <div className="flex-shrink-0 relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
// //               {/* Spinning text ring */}
// //               <svg
// //                 viewBox="0 0 120 120"
// //                 className="absolute inset-0 w-full h-full animate-spin"
// //                 style={{ animationDuration: "14s" }}
// //               >
// //                 <defs>
// //                   <path
// //                     id="spinRing"
// //                     d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
// //                   />
// //                 </defs>
// //                 <text fontSize="10.5" fill="white" letterSpacing="2.6" fontFamily="Barlow, sans-serif" fontWeight="600">
// //                   <textPath href="#spinRing">
// //                     Contact Now • Contact Now • Contact Now •
// //                   </textPath>
// //                 </text>
// //               </svg>
// //               {/* Center icon */}
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <div className="w-24 h-24 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center">
// //                   <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
// //                     <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
// //                   </svg>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* ── Divider ── */}
// //           <div className="w-full h-px bg-white/20 mb-10 sm:mb-12" />

// //           {/* ── 4 Feature columns ── */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
// //             {FEATURES.map((f) => (
// //               <div key={f.title} className="flex flex-col gap-4">
// //                 {/* Icon */}
// //                 <div>{f.icon}</div>
// //                 {/* Title */}
// //                 <h3
// //                   className="text-white font-bold text-[16px] leading-snug"
// //                   style={{ fontFamily: "'Barlow', sans-serif" }}
// //                 >
// //                   {f.title}
// //                 </h3>
// //                 {/* Desc */}
// //                 <p
// //                   className="text-white/65 text-[13px] leading-relaxed"
// //                   style={{ fontFamily: "'Barlow', sans-serif" }}
// //                 >
// //                   {f.desc}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ── Stats bar — darker red strip ── */}
// //         <div
// //           ref={statsRef}
// //           className="bg-[#a80f00] w-full"
// //         >
// //           <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
// //             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
// //               {STATS.map((s) => (
// //                 <StatItem key={s.label} {...s} startCounting={startCounting} />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //       </section>
// //     </>
// // );
// // }


// import {useState, useEffect, useRef} from "react";

// // ── Counter animation hook ──
// function useCountUp(target, duration = 2000, startCounting = false) {
// 	const [count, setCount] = useState(0);
// 	useEffect(() => {
// 		if (! startCounting) 
// 			return;
		

// 		let start = 0;
// 		const step = Math.ceil(target / (duration / 16));
// 		const timer = setInterval(() => {
// 			start += step;
// 			if (start >= target) {
// 				setCount(target);
// 				clearInterval(timer);
// 			} else {
// 				setCount(start);
// 			}
// 		}, 16);
// 		return() => clearInterval(timer);
// 	}, [target, duration, startCounting]);
// 	return count;
// }

// // ── 8 key services extracted from client's product list ──
// const FEATURES = [
// 	{
// 		title: "Fire Detection & Suppression",
// 		desc: "UL & EN listed fire alarm systems, suppression, deluge and integrated safety infrastructure for all building types.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24 sm:w-14 sm:h-14">
// 				<path d="M24 4c0 0-10 8-10 20a10 10 0 0020 0C34 12 24 4 24 4z"/>
// 				<path d="M20 28a4 4 0 008 0c0-4-4-7-4-7s-4 3-4 7z" fill="white" stroke="none" opacity="0.8"/>
// 				<circle cx="24" cy="4" r="1.5" fill="white" stroke="none"/>
// 			</svg>
// 		)
// 	},
// 	{
// 		title: "Access Control Systems",
// 		desc: "Modern & AI-based access control, turnstile ACS, mass access systems for schools, offices, colleges and factories.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24 sm:w-14 sm:h-14">
// 				<rect x="8" y="20" width="32" height="22" rx="3"/>
// 				<path d="M14 20V14a10 10 0 0120 0v6"/>
// 				<circle cx="24" cy="31" r="3" fill="white" stroke="none"/>
// 				<path d="M24 34v4"/>
// 			</svg>
// 		)
// 	},
// 	{
// 		title: "CCTV & Surveillance",
// 		desc: "AI-based CCTV, control room systems, CCTV extender/matrix and intruder alarm systems for 24/7 monitoring.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24">
// 				<rect x="3" y="12" width="30" height="20" rx="3"/>
// 				<path d="M33 18l12-5v22l-12-5"/>
// 				<circle cx="18" cy="22" r="6"/>
// 				<circle cx="18" cy="22" r="2.5" fill="white" stroke="none"/>
// 			</svg>
// 		)
// 	},
// 	{
// 		title: "Public Address Systems",
// 		desc: "Network IP-based PAVA, hotel & school PA systems and fully integrated public address solutions.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24">
// 				<path d="M20 10L10 18H4v12h6l10 8V10z"/>
// 				<path d="M34 10a18 18 0 010 28"/>
// 				<path d="M28 16a10 10 0 010 16"/>
// 			</svg>
// 		)
// 	}, {
// 		title: "Data Network",
// 		desc: "Ethernet, fiber and wireless solutions with structured cabling — keeping your enterprise always connected.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24">
// 				<rect x="18" y="4" width="12" height="8" rx="2"/>
// 				<rect x="4" y="36" width="12" height="8" rx="2"/>
// 				<rect x="32" y="36" width="12" height="8" rx="2"/>
// 				<path d="M24 12v10M10 36V28l14-6M38 36V28L24 22"/>
// 				<path d="M10 28h28"/>
// 			</svg>
// 		)
// 	}, {
// 		title: "Digital Lighting",
// 		desc: "DALI, 1-10V, TRIAC and IoT dimming solutions — smart lighting control for modern commercial and residential spaces.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24">
// 				<circle cx="24" cy="20" r="8"/>
// 				<path d="M24 4v4M24 36v4M8 20H4M44 20h-4M11.5 7.5l3 3M33.5 33.5l3 3M11.5 32.5l3-3M33.5 7.5l3-3"/>
// 				<path d="M18 34h12M19 38h10"/>
// 			</svg>
// 		)
// 	}, {
// 		title: "IoT & Automation",
// 		desc: "RF, GSM, LoRa and WiFi customization — remote notification, monitoring and building management automation.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24">
// 				<path d="M10 24a14 14 0 0028 0"/>
// 				<path d="M4 18a22 22 0 0040 0"/>
// 				<path d="M16 30a10 10 0 0016 0"/>
// 				<circle cx="24" cy="36" r="3" fill="white" stroke="none"/>
// 				<path d="M24 36V26"/>
// 				<rect x="20" y="20" width="8" height="6" rx="1"/>
// 			</svg>
// 		)
// 	}, {
// 		title: "Building Management",
// 		desc: "Advanced BMS integration, control & monitor systems, weather stations, water leakage and air flow monitoring.",
// 		icon: (
// 			<svg viewBox="0 0 48 48" fill="none" stroke="white"
// 				strokeWidth={1.8}
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="w-24 h-24">
// 				<path d="M6 44V18L24 6l18 12v26"/>
// 				<path d="M18 44V30h12v14"/>
// 				<path d="M6 22h4M38 22h4M6 30h4M38 30h4"/>
// 				<circle cx="36" cy="14" r="4"/>
// 				<path d="M34 10l3-3"/>
// 			</svg>
// 		)
// 	},
// ];

// const STATS = [
// 	{
// 		value: 10,
// 		suffix: "+",
// 		label: "Residential Area"
// 	},
// 	{
// 		value: 10,
// 		suffix: "+",
// 		label: "Malls & Building"
// 	},
// 	{
// 		value: 5,
// 		suffix: "+",
// 		label: "Commercial Space"
// 	},
// 	{
// 		value: 50,
// 		suffix: "+",
// 		label: "Project Complete"
// 	}, {
// 		value: 10,
// 		suffix: "+",
// 		label: "Year of Experience"
// 	},
// ];

// function StatItem({value, suffix, label, startCounting}) {
// 	const count = useCountUp(value, 1800, startCounting);
// 	return (
// 		<div className="flex flex-col items-start">
// 			<span className="text-white font-extrabold leading-none"
// 				style={
// 					{
// 						fontFamily: "'Barlow Condensed', sans-serif",
// 						fontSize: "clamp(36px, 5vw, 52px)"
// 					}
// 			}>
// 				{count}
// 				{suffix} </span>
// 			<span className="text-white/70 text-[13px] mt-1 leading-relaxed"
// 				style={
// 					{fontFamily: "'Barlow', sans-serif"}
// 			}>
// 				{label} </span>
// 		</div>
// 	);
// }

// export default function Services() {
// 	const [startCounting, setStartCounting] = useState(false);
// 	const statsRef = useRef(null);

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(([entry]) => {
// 			if (entry.isIntersecting) 
// 				setStartCounting(true);
			

// 		}, {threshold: 0.3});
// 		if (statsRef.current) 
// 			observer.observe(statsRef.current);
		

// 		return() => observer.disconnect();
// 	}, []);

// 	return (
// 		<>
// 			<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet"/>

// 			<section className="bg-[#cc1400] relative overflow-hidden  py-16 sm:py-24">

// 				{/* ── Top content area ── */}
// 				<div className="max-w-7xl mx-auto px-8 sm:px-0  ">

// 					{/* ── Header row: label + spinning badge ── */}
// 					<div className="flex items-start justify-between gap-4 mb-4 sm:mb-10">

// 						{/* Left: label + headline */}
// 						<div className="flex-1">
// 							<div className="flex items-center gap-2 mb-3">

// 								<span className="text-white text-md leading-relaxed font-semibold uppercase"
// 									style={
// 										{fontFamily: "'Barlow', sans-serif"}
// 								}>
// 									Our Services
// 								</span>
// 							</div>

// 							<h2 className="text-white font-bold leading-relaxed sm:text-5xl text-3xl"
// 								style={
// 									{
// 										fontFamily: "'Barlow', sans-serif",
										
// 									}
// 							}>
// 								Advanced security systems,
// 								<br className="block"/>
// 								reliable solutions
// 							</h2>
// 						</div>

// 						{/* Right: spinning circular badge */}
// 						<div className="flex-shrink-0 relative w-24 h-24 sm:w-28 sm:h-28 lg:w-44 lg:h-44">

// 							{/* White circle background */}
// 							<div className="absolute inset-0 rounded-full bg-white "/> {/* Spinning text ring */}
// 							<svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full animate-spin"
// 								style={
// 									{animationDuration: "14s"}
// 							}>
// 								<defs>
// 									<path id="spinRing" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"/>
// 								</defs>
// 								<text fontSize="11" fill="#111111" letterSpacing="2.2" fontFamily="Barlow, sans-serif" fontWeight="700">
// 									<textPath href="#spinRing">
// 										Contact Now • Contact Now • Contact Now •
// 									</textPath>
// 								</text>
// 							</svg>

// 							{/* Center: red circle + white phone icon */}
// 							<div className="absolute inset-0 flex items-center justify-center">
// 								<div className="w-10 h-10 sm:w-16 sm:h-16  rounded-full flex items-center justify-center shadow-md"
// 									style={
// 										{backgroundColor: "#e01f09"}
// 								}>
// 									<svg viewBox="0 0 24 24" fill="none" stroke="white"
// 										strokeWidth={2}
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										className="w-4 h-4 sm:w-8 sm:h-8">
// 										<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
// 									</svg>
// 								</div>
// 							</div>

// 						</div>
// 					</div>

// 					{/* ── Divider ── */}
// 					<div className="w-full h-px  mb-10 sm:mb-12"/> {/* ── 8 Service columns — 4 on desktop, 2 on tablet, 1 on mobile ── */}
// 					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-24">
// 						{
// 						FEATURES.map((f) => (
// 							<div key={
// 									f.title
// 								}
// 								className="flex flex-col gap-3 group">
// 								{/* Icon */}
// 								<div className="mb-1">
// 									{
// 									f.icon
// 								}</div>
// 								{/* Title */}
// 								<h3 className="text-white font-bold text-[15px] sm:text-xl leading-relaxed"
// 									style={
// 										{fontFamily: "'Barlow', sans-serif"}
// 								}>
// 									{
// 									f.title
// 								} </h3>
// 								{/* Desc */}
// 								<p className="text-white/65 text-[13px] leading-relaxed"
// 									style={
// 										{fontFamily: "'Barlow', sans-serif"}
// 								}>
// 									{
// 									f.desc
// 								} </p>
// 								{/* Subtle bottom separator for mobile stacked view */}
// 								<div className="sm:hidden w-12 h-0.5 bg-white/20 mt-1"/>
// 							</div>
// 						))
// 					} </div>
// 				</div>
//                 <div className="hidden sm:block border border-t border-white/20 max-w-7xl mx-auto  mt-12"></div>
// 				<div ref={statsRef}
// 					className=" w-full">
// 					<div className="max-w-7xl mx-auto  mt-12 px-8 sm:px-0">
// 						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
// 							{
// 							STATS.map((s) => (
// 								<StatItem key={
// 										s.label
// 									}
// 									{...s}
// 									startCounting={startCounting}/>
// 							))
// 						} </div>
// 					</div>
// 				</div>

// 			</section>
// 		</>
// 	);
// }

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ── Counter animation hook ──
function useCountUp(target, duration = 2000, startCounting = false) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!startCounting) return;
		let start = 0;
		const step = Math.ceil(target / (duration / 16));
		const timer = setInterval(() => {
			start += step;
			if (start >= target) {
				setCount(target);
				clearInterval(timer);
			} else {
				setCount(start);
			}
		}, 16);
		return () => clearInterval(timer);
	}, [target, duration, startCounting]);
	return count;
}

// ── 8 key services extracted from client's product list ──
const FEATURES = [
	{
		title: "Fire Alarm",
		desc: "UL & EN listed fire alarm systems, suppression, deluge and integrated safety infrastructure for all building types.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<path d="M24 4c0 0-10 8-10 20a10 10 0 0020 0C34 12 24 4 24 4z"/>
				<path d="M20 28a4 4 0 008 0c0-4-4-7-4-7s-4 3-4 7z" fill="white" stroke="none" opacity="0.8"/>
				<circle cx="24" cy="4" r="1.5" fill="white" stroke="none"/>
			</svg>
		)
	},
	{
		title: "Access Control Systems",
		desc: "Modern & AI-based access control, turnstile ACS, mass access systems for schools, offices, colleges and factories.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<rect x="8" y="20" width="32" height="22" rx="3"/>
				<path d="M14 20V14a10 10 0 0120 0v6"/>
				<circle cx="24" cy="31" r="3" fill="white" stroke="none"/>
				<path d="M24 34v4"/>
			</svg>
		)
	},
	{
		title: "CCTV & Surveillance",
		desc: "AI-based CCTV, control room systems, CCTV extender/matrix and intruder alarm systems for 24/7 monitoring.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<rect x="3" y="12" width="30" height="20" rx="3"/>
				<path d="M33 18l12-5v22l-12-5"/>
				<circle cx="18" cy="22" r="6"/>
				<circle cx="18" cy="22" r="2.5" fill="white" stroke="none"/>
			</svg>
		)
	},
	{
		title: "Public Address Systems",
		desc: "Network IP-based PAVA, hotel & school PA systems and fully integrated public address solutions.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<path d="M20 10L10 18H4v12h6l10 8V10z"/>
				<path d="M34 10a18 18 0 010 28"/>
				<path d="M28 16a10 10 0 010 16"/>
			</svg>
		)
	}, {
		title: "Data Network",
		desc: "Ethernet, fiber and wireless solutions with structured cabling — keeping your enterprise always connected.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<rect x="18" y="4" width="12" height="8" rx="2"/>
				<rect x="4" y="36" width="12" height="8" rx="2"/>
				<rect x="32" y="36" width="12" height="8" rx="2"/>
				<path d="M24 12v10M10 36V28l14-6M38 36V28L24 22"/>
				<path d="M10 28h28"/>
			</svg>
		)
	}, {
		title: "Digital Lighting",
		desc: "DALI, 1-10V, TRIAC and IoT dimming solutions — smart lighting control for modern commercial and residential spaces.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<circle cx="24" cy="20" r="8"/>
				<path d="M24 4v4M24 36v4M8 20H4M44 20h-4M11.5 7.5l3 3M33.5 33.5l3 3M11.5 32.5l3-3M33.5 7.5l3-3"/>
				<path d="M18 34h12M19 38h10"/>
			</svg>
		)
	}, {
		title: "IoT & Automation",
		desc: "RF, GSM, LoRa and WiFi customization — remote notification, monitoring and building management automation.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<path d="M10 24a14 14 0 0028 0"/>
				<path d="M4 18a22 22 0 0040 0"/>
				<path d="M16 30a10 10 0 0016 0"/>
				<circle cx="24" cy="36" r="3" fill="white" stroke="none"/>
				<path d="M24 36V26"/>
				<rect x="20" y="20" width="8" height="6" rx="1"/>
			</svg>
		)
	}, {
		title: "Building Management",
		desc: "Advanced BMS integration, control & monitor systems, weather stations, water leakage and air flow monitoring.",
		icon: (
			<svg viewBox="0 0 48 48" fill="none" stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="sm:w-24 sm:h-24 w-16 h-16">
				<path d="M6 44V18L24 6l18 12v26"/>
				<path d="M18 44V30h12v14"/>
				<path d="M6 22h4M38 22h4M6 30h4M38 30h4"/>
				<circle cx="36" cy="14" r="4"/>
				<path d="M34 10l3-3"/>
			</svg>
		)
	},
];

const STATS = [
	{ value: 10, suffix: "+", label: "Residential Area" },
	{ value: 10, suffix: "+", label: "Malls & Building" },
	{ value: 5, suffix: "+", label: "Commercial Space" },
	{ value: 50, suffix: "+", label: "Project Complete" },
	{ value: 10, suffix: "+", label: "Year of Experience" },
];

function StatItem({ value, suffix, label, startCounting }) {
	const count = useCountUp(value, 1800, startCounting);
	return (
		<div className="stat-item flex flex-col items-start opacity-0 transform translate-y-10">
			<span className="text-white font-extrabold leading-none"
				style={{
					fontFamily: "'Barlow Condensed', sans-serif",
					fontSize: "clamp(36px, 5vw, 52px)"
				}}>
				{count}{suffix}
			</span>
			<span className="text-white/70 text-[13px] mt-1 leading-relaxed"
				style={{ fontFamily: "'Barlow', sans-serif" }}>
				{label}
			</span>
		</div>
	);
}

export default function Services() {
	const [startCounting, setStartCounting] = useState(false);
	const statsRef = useRef(null);
	const sectionRef = useRef(null);
	const headerRef = useRef(null);
	const badgeRef = useRef(null);
	const featuresGridRef = useRef(null);
	const dividerRef = useRef(null);

	useEffect(() => {
		// Observer for stats counter
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setStartCounting(true);
		}, { threshold: 0.3 });
		
		if (statsRef.current) observer.observe(statsRef.current);

		// GSAP Animations
		const ctx = gsap.context(() => {
			// Initial page load animation timeline
			const masterTl = gsap.timeline();
			
			// Header animation
			masterTl.fromTo(headerRef.current,
				{
					opacity: 0,
					y: 50,
					filter: "blur(8px)"
				},
				{
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					duration: 1,
					ease: "power3.out"
				}
			);

			// Spinning badge animation
			masterTl.fromTo(badgeRef.current,
				{
					scale: 0,
					rotation: -180,
					opacity: 0
				},
				{
					scale: 1,
					rotation: 0,
					opacity: 1,
					duration: 0.8,
					ease: "back.out(0.8)"
				},
				"-=0.5"
			);

			// Divider animation
			masterTl.fromTo(dividerRef.current,
				{
					scaleX: 0,
					opacity: 0
				},
				{
					scaleX: 1,
					opacity: 1,
					duration: 0.6,
					ease: "power2.out"
				},
				"-=0.3"
			);

			// ScrollTrigger animations for service cards
			const serviceCards = document.querySelectorAll('.service-card');
			
			serviceCards.forEach((card, index) => {
				// Staggered entrance animation
				gsap.fromTo(card,
					{
						opacity: 0,
						y: 40,
						filter: "blur(4px)"
					},
					{
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.7,
						delay: index * 0.1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: card,
							start: "top 85%",
							end: "bottom 60%",
							toggleActions: "play none none reverse",
							once: false
						}
					}
				);

				// Hover animation for cards
				card.addEventListener('mouseenter', () => {
					gsap.to(card, {
						x: 8,
						duration: 0.3,
						ease: "power2.out"
					});
				});
				
				card.addEventListener('mouseleave', () => {
					gsap.to(card, {
						x: 0,
						duration: 0.3,
						ease: "power2.out"
					});
				});
			});

			// Icon hover animations
			const icons = document.querySelectorAll('.service-icon');
			icons.forEach((icon) => {
				icon.addEventListener('mouseenter', () => {
					gsap.to(icon, {
						scale: 1.1,
						rotation: 5,
						duration: 0.3,
						ease: "back.out(1)"
					});
				});
				
				icon.addEventListener('mouseleave', () => {
					gsap.to(icon, {
						scale: 1,
						rotation: 0,
						duration: 0.3,
						ease: "back.out(1)"
					});
				});
			});

			// Stats items animation with ScrollTrigger
			const statItems = document.querySelectorAll('.stat-item');
			statItems.forEach((item, index) => {
				gsap.fromTo(item,
					{
						opacity: 0,
						y: 30,
						filter: "blur(4px)"
					},
					{
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.6,
						delay: index * 0.15,
						ease: "power2.out",
						scrollTrigger: {
							trigger: item,
							start: "top 90%",
							toggleActions: "play none none reverse"
						}
					}
				);
			});

			// Parallax effect for the section background
			gsap.to(sectionRef.current, {
				backgroundPosition: "50% 100px",
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				}
			});

		}, sectionRef);

		return () => {
			observer.disconnect();
			ctx.revert();
		};
	}, []);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet"/>

			<section 
				ref={sectionRef}
				className="bg-[#cc1400] relative overflow-hidden py-16 sm:py-24"
				style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 50%)" }}
			>
				<div className="max-w-7xl mx-auto px-2 sm:px-0">
					
					{/* Header row: label + spinning badge */}
					<div className="flex items-start justify-between gap-4 mb-4 sm:mb-10">
						
						{/* Left: label + headline */}
						<div ref={headerRef} className="flex-1 opacity-0">
							<div className="flex items-center gap-2 mb-3">
								<span className="text-white text-md leading-relaxed font-semibold uppercase"
									style={{ fontFamily: "'Barlow', sans-serif" }}>
									Our Services
								</span>
							</div>

							<h2 className="text-white font-bold leading-relaxed sm:text-5xl text-3xl"
								style={{ fontFamily: "'Barlow', sans-serif" }}>
								Advanced security systems,
								<br className="block"/>
								reliable solutions
							</h2>
						</div>

						{/* Right: spinning circular badge */}
						<div ref={badgeRef} className="flex-shrink-0 relative w-24 h-24 sm:w-28 sm:h-28 lg:w-44 lg:h-44 opacity-0 transform scale-0">
							{/* White circle background */}
							<div className="absolute inset-0 rounded-full bg-white"/>
							
							{/* Spinning text ring */}
							<svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full animate-spin"
								style={{ animationDuration: "14s" }}>
								<defs>
									<path id="spinRing" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"/>
								</defs>
								<text fontSize="11" fill="#111111" letterSpacing="2.2" fontFamily="Barlow, sans-serif" fontWeight="700">
									<textPath href="#spinRing">
										Contact Now • Contact Now • Contact Now •
									</textPath>
								</text>
							</svg>

							{/* Center: red circle + white phone icon */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-md"
									style={{ backgroundColor: "#e01f09" }}>
									<svg viewBox="0 0 24 24" fill="none" stroke="white"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4 sm:w-8 sm:h-8">
										<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.4 12.5 19.79 19.79 0 011.34 3.9 2 2 0 013.32 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
									</svg>
								</div>
							</div>
						</div>
					</div>

					{/* Divider */}
					<div ref={dividerRef} className="w-full h-px mb-10 sm:mb-12 transform scale-x-0 origin-left"/>
					
					{/* 8 Service columns */}
					<div ref={featuresGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-24">
						{FEATURES.map((f, index) => (
							<div key={f.title}
								className="service-card flex flex-col gap-3 group opacity-0"
								data-card-index={index}
							>
								{/* Icon */}
								<div className="service-icon mb-1 transition-transform">
									{f.icon}
								</div>
								{/* Title */}
								<h3 className="text-white font-bold text-[15px] sm:text-xl leading-relaxed"
									style={{ fontFamily: "'Barlow', sans-serif" }}>
									{f.title}
								</h3>
								{/* Desc */}
								<p className="text-white/65 text-[13px] leading-relaxed"
									style={{ fontFamily: "'Barlow', sans-serif" }}>
									{f.desc}
								</p>
								{/* Subtle bottom separator for mobile stacked view */}
								<div className="sm:hidden w-12 h-0.5 bg-white/20 mt-1"/>
							</div>
						))}
					</div>
				</div>
				
				<div className="hidden sm:block border border-t border-white/20 max-w-7xl mx-auto mt-12"></div>
				
				<div ref={statsRef} className="w-full">
					<div className="max-w-7xl mx-auto mt-12 px-2 sm:px-0">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
							{STATS.map((s) => (
								<StatItem key={s.label} {...s} startCounting={startCounting} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}


