// // import FAQ from "@/M&M/FAQ";
// // import { Clapperboard, MapPin, PhoneCallIcon, UserCircle } from "lucide-react";
// // import { Profiler, useState } from "react";

// // const projectDetails = [
// //   { icon: Clapperboard, label: "Project Name", value: "Modern Window Upgrade" },
// //   { icon: MapPin, label: "Location", value: "USA" },
// //   { icon: UserCircle, label: "Client Name", value: "John Deo" },
// //   { icon: Profiler, label: "Product Name",  },
// // ];

// // const overviewFeatures = [
// //   "Advanced CCTV solutions with high.",
// //   "Seamless integration with smart.",
// //   "Reliable and durable surveillance",
// //   "night vision, and motion detection",
// //   "business security systems",
// //   "24/7 real-time monitoring",
// // ];

// // const solutionFeatures = [
// //   "Advanced CCTV solutions with high-definition clarity, night vision, and motion detection for.",
// //   "Seamless integration with smart home and business security systems, allowing remote.",
// // ];

// // const services = [
// //   {
// //     title: "Smart Surveillance",
// //     desc: "We provide professional CCTV installation services.",
// //     icon: (
// //       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 51 51" fill="none">
// //         <path d="M47.1025 3.7627H3.89736C2.07793 3.7627 0.597656 5.24297 0.597656 7.0625V37.3799C0.597656 39.1993 2.07793 40.6796 3.89736 40.6796H15.0504L12.6599 44.7818C12.4456 45.1494 12.4428 45.5867 12.6524 45.9517C12.8627 46.3177 13.2537 46.5451 13.6729 46.5451H37.3271C37.7462 46.5451 38.1372 46.3178 38.3476 45.9518C38.5571 45.5869 38.5545 45.1496 38.3403 44.7819L35.9498 40.6796H47.1025C48.9221 40.6796 50.4023 39.1993 50.4023 37.3799V7.0625C50.4023 5.24297 48.9221 3.7627 47.1025 3.7627Z" fill="currentColor" opacity="0.9" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     title: "Customized Protection",
// //     desc: "We provide professional CCTV installation services.",
// //     icon: (
// //       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 51 51" fill="none">
// //         <path d="M47.5441 0.153931H3.45547C1.84199 0.153931 0.529297 1.46663 0.529297 3.0802V8.30432C0.529297 9.91789 1.84199 11.2306 3.45557 11.2306H5.2918V17.5036C5.2918 28.6464 14.357 37.7117 25.4999 37.7117C36.6428 37.7117 45.708 28.6464 45.708 17.5036V11.2306H47.5442C49.1577 11.2306 50.4705 9.91789 50.4705 8.30432V3.0802C50.4703 1.46663 49.1576 0.153931 47.5441 0.153931Z" fill="currentColor" opacity="0.9" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     title: "Secure Monitoring",
// //     desc: "We provide professional CCTV installation services.",
// //     icon: (
// //       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 51 51" fill="none">
// //         <path d="M49.7188 29.3154V8.22168C49.7175 7.18606 49.3056 6.19321 48.5733 5.46091C47.841 4.72862 46.8481 4.31667 45.8125 4.31543H38.7812V1.97168C38.7812 1.76448 38.6989 1.56577 38.5524 1.41925C38.4059 1.27274 38.2072 1.19043 38 1.19043H13C12.7928 1.19043 12.5941 1.27274 12.4476 1.41925C12.3011 1.56577 12.2188 1.76448 12.2188 1.97168V6.65918C12.2188 6.86638 12.3011 7.06509 12.4476 7.21161C12.5941 7.35812 12.7928 7.44043 13 7.44043H13.8211C14.0123 10.4081 15.326 13.1917 17.4954 15.2257C19.6647 17.2598 22.527 18.3918 25.5008 18.3918C28.4746 18.3918 31.3369 17.2598 33.5062 15.2257C35.6756 13.1917 36.9893 10.4081 37.1805 7.44043H38C38.2072 7.44043 38.4059 7.35812 38.5524 7.21161C38.6989 7.06509 38.7812 6.86638 38.7812 6.65918V5.87793H45.8125C46.4341 5.87793 47.0302 6.12486 47.4698 6.5644C47.9093 7.00394 48.1562 7.60008 48.1562 8.22168V29.3154Z" fill="currentColor" opacity="0.9" />
// //       </svg>
// //     ),
// //   },
// // ];

// // const insights = [
// //   {
// //     title: "Project challange",
// //     desc: "Ensuring comprehensive security coverage while addressing blind spots and minimizing vulnerabilities was a key challenge.",
// //   },
// //   {
// //     title: "Project solution",
// //     desc: "Ensuring comprehensive security coverage while addressing blind spots and minimizing vulnerabilities was a key challenge.",
// //   },
// // ];

// // // const faqs = [
// // //   { q: "What types of CCTV systems do you offer?", a: "Yes, our systems are equipped with remote monitoring capabilities that allow you to view live or recorded footage via your smartphone." },
// // //   { q: "Can I access my CCTV feed remotely?", a: "Yes, our systems are equipped with remote monitoring capabilities that allow you to view live or recorded footage via your smartphone." },
// // //   { q: "Do you offer installation services?", a: "Yes, our systems are equipped with remote monitoring capabilities that allow you to view live or recorded footage via your smartphone." },
// // //   { q: "Are your cameras weatherproof?", a: "Yes, our systems are equipped with remote monitoring capabilities that allow you to view live or recorded footage via your smartphone." },
// // // ];

// // function IconCircle({ children }) {
// //   return (
// //     <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white text-base">
// //       {children}
// //     </div>
// //   );
// // }

// // function CheckIcon() {
// //   return (
// //     <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mt-0.5">
// //       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //     </svg>
// //   );
// // }

// // function CheckItem({ text, dark = false }) {
// //   return (
// //     <li className={`flex items-start gap-2 text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}>
// //       <span className="text-red-500"><CheckIcon /></span>
// //       {text}
// //     </li>
// //   );
// // }

// // // function FAQItem({ q, a }) {
// // //   const [open, setOpen] = useState(false);
// // //   return (
// // //     <div className="border-b border-gray-200 py-4">
// // //       <button
// // //         className="w-full flex justify-between items-center text-left gap-4"
// // //         onClick={() => setOpen(!open)}
// // //       >
// // //         <span className="font-semibold text-gray-900 text-sm">{q}</span>
// // //         <span className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
// // //           <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
// // //             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
// // //           </svg>
// // //         </span>
// // //       </button>
// // //       {open && (
// // //         <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // function Sidebar() {
// //   return (
// //     <div className="w-1/4 flex-shrink-0 flex flex-col gap-5 sticky top-8 self-start">
// //       {/* Project Details Card */}
// //       <div className="bg-white rounded-2xl shadow-md p-12 flex flex-col gap-4 border border-gray-100">
// //         {projectDetails.map((item) => (
// //           <div key={item.label} className="flex items-center gap-3">
// //             <IconCircle>{item.icon}</IconCircle>
// //             <div>
// //               <p className="text-xs font-semibold text-gray-800 leading-tight">{item.label}</p>
// //               <p className="text-xs text-gray-500 mt-0.5">{item.value}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* CTA Card */}
// //       <div
// //         className="rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden"
// //         style={{
// //           backgroundImage: "url('https://demo.awaikenthemes.com/ultracam/wp-content/uploads/2025/03/project-1.jpg')",
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <div className="absolute inset-0 bg-black/75 rounded-2xl" />
// //         <div className="relative z-10">
// //           <div className="flex items-center gap-2 mb-3">
// //             {/* <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
// //               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 40 41" fill="none">
// //                 <path d="M19.9437 0.601318C8.90141 0.601318 0 9.50273 0 20.545C0 31.5872 8.90141 40.6013 19.9437 40.6013C30.9859 40.6013 39.8873 31.6999 39.8873 20.6577C39.8873 9.6154 30.9859 0.601318 19.9437 0.601318Z" fill="white" />
// //               </svg>
// //             </div>
// //             <span className="text-white font-bold text-base">UltraCam<span className="text-red-500">.</span></span> */}
// // <img className="w-12 h-12" src="/images/logo.png" alt="" />

// //           </div>
// //           <p className="text-white font-semibold text-xl mb-4">Need help? We are here to help you</p>
// //           <div className="flex flex-col gap-2">
// //             <a href="mailto:info@mnm.com.np" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition rounded-lg px-3 py-2">
// //               <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
// //                 <span className="text-white text-xl">✉</span>
// //               </div>
// //               <span className="text-white text-lg">info@mnm.com.np</span>
// //             </a>
// //             <a href="tel:+977 01-4535104" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition rounded-lg px-3 py-2">
// //               <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
// //                 <span className="text-white text-xs">
// //                     <PhoneCallIcon className="w-6 h-6" />
// //                 </span>
// //               </div>
// //               <span className="text-white text-lg">+977 01-4535104</span>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const ProjectDetailPage = () => {
// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap');
// //         * { font-family: 'Barlow', sans-serif; }
// //       `}</style>

// //       {/* ── Hero Banner ── */}
// //       <div className="relative flex min-h-[320px] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[420px] sm:py-20 lg:min-h-[550px] lg:bg-fixed"
// //         style={{ backgroundImage: "url('https://demo.awaikenthemes.com/ultracam/wp-content/uploads/2025/03/project-1.jpg')" }}
// //       >
// //         <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
// //         <div className="relative z-20 flex flex-col items-center text-center">
// //           <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">
// //             BirHospital
// //           </h2>
// //           <h3 className="mt-2 text-sm font-semibold text-white sm:text-base lg:text-xl">
// //             Home / Projects / BirHospital
// //           </h3>
// //         </div>
// //       </div>

// //       {/* ── Main Layout ── */}
// //       <div className="bg-white min-h-screen">
// //         <div className="max-w-7xl mx-auto px-6 py-16 flex gap-10 items-start">

// //           {/* Sidebar */}
// //           <Sidebar />

// //           {/* Main Content */}
// //           <div className="flex-1 flex flex-col gap-16 min-w-0">

// //             {/* Section 1: Hero Image + Intro */}
// //             <section className="flex flex-col gap-6">
// //               <div className="rounded-2xl overflow-hidden">
// //                 <img
// //                   src="https://demo.awaikenthemes.com/ultracam/wp-content/uploads/2025/03/project-1.jpg"
// //                   alt="CCTV Installation"
// //                   className="w-full object-cover max-h-80"
// //                 />
// //               </div>
// //               <div className="flex flex-col gap-3 text-sm text-gray-600 leading-relaxed">
// //                 <p>
// //                   CCTV installation is a crucial step in safeguarding homes, businesses, and public spaces. A well-placed surveillance system provides real-time monitoring, deters potential threats, and ensures a secure environment.
// //                 </p>
// //                 <p>
// //                   A properly installed CCTV system not only helps in crime prevention but also aids in investigations by providing clear and recorded footage. Businesses benefit from increased employee and asset protection, while homeowners gain peace of mind knowing their loved ones and property are secure. Whether for residential, commercial, or industrial purposes, investing in a reliable CCTV installation is a proactive approach to safety and surveillance.
// //                 </p>
// //               </div>
// //             </section>

// //             {/* Section 2: Project Overview */}
// //             <section className="rounded-2xl bg-gray-900 p-8 text-white flex flex-col gap-5">
// //               <h2 className="text-3xl font-bold">Project overview</h2>
// //               <p className="text-sm text-gray-300 leading-relaxed">
// //                 Our security project is designed to deliver state-of-the-art surveillance solutions tailored to meet the needs of both residential and commercial spaces. From advanced CCTV installations to integrated monitoring systems, we ensure maximum security with high-definition cameras, motion detection, and remote access capabilities. Our approach focuses on strategic camera placement, seamless integration, and real-time monitoring, providing clients with a comprehensive security infrastructure that enhances safety and control.
// //               </p>
// //               <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
// //                 {overviewFeatures.map((f) => (
// //                   <CheckItem key={f} text={f} dark />
// //                 ))}
// //               </ul>
// //               <div className="rounded-xl overflow-hidden mt-2">
// //                 <img
// //                   src="https://demo.awaikenthemes.com/ultracam/wp-content/uploads/2025/03/project-overview-image.jpg"
// //                   alt="Project Overview"
// //                   className="w-full object-cover"
// //                 />
// //               </div>
// //             </section>

// //             {/* Section 3: Comprehensive Security Solutions */}
// //             <section className="flex flex-col gap-6">
// //               <h2 className="text-3xl font-bold text-gray-900">
// //                 <span className="text-red-600">Comprehensive</span> security solutions
// //               </h2>
// //               <p className="text-sm text-gray-600 leading-relaxed">
// //                 Our security project is designed to deliver state-of-the-art surveillance solutions tailored to meet the needs of both residential and commercial spaces. From advanced CCTV installations to integrated monitoring systems, we ensure maximum security with high-definition cameras, motion detection, and remote access capabilities.
// //               </p>
// //               <div className="flex gap-6 items-start">
// //                 <div className="flex-1 flex flex-col gap-5">
// //                   {services.map((s) => (
// //                     <div key={s.title} className="flex items-start gap-4">
// //                       <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
// //                         {s.icon}
// //                       </div>
// //                       <div>
// //                         <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
// //                         <p className="text-xs text-gray-500">{s.desc}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="w-52 flex-shrink-0 rounded-xl overflow-hidden">
// //                   <img
// //                     src="https://demo.awaikenthemes.com/ultracam/wp-content/uploads/2025/03/project-solution-image.jpg"
// //                     alt="Solution"
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>
// //               </div>
// //             </section>

// //             {/* Section 4: Security Insights */}
// //             <section className="flex flex-col gap-6">
// //               <h2 className="text-3xl font-bold text-gray-900">
// //                 Security <span className="text-red-600">insights</span>
// //               </h2>
// //               <p className="text-sm text-gray-600 leading-relaxed">
// //                 Gain valuable insights into advanced security measures and surveillance solutions designed to protect your property. Our expertise ensures enhanced safety, real-time monitoring, and proactive threat prevention.
// //               </p>
// //               <div className="grid grid-cols-2 gap-4">
// //                 {insights.map((ins) => (
// //                   <div key={ins.title} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
// //                     <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
// //                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 51 51" fill="none">
// //                         <path d="M47.1025 3.7627H3.89736C2.07793 3.7627 0.597656 5.24297 0.597656 7.0625V37.3799C0.597656 39.1993 2.07793 40.6796 3.89736 40.6796H15.0504L12.6599 44.7818C12.4456 45.1494 12.4428 45.5867 12.6524 45.9517C12.8627 46.3177 13.2537 46.5451 13.6729 46.5451H37.3271C37.7462 46.5451 38.1372 46.3178 38.3476 45.9518C38.5571 45.5869 38.5545 45.1496 38.3403 44.7819L35.9498 40.6796H47.1025C48.9221 40.6796 50.4023 39.1993 50.4023 37.3799V7.0625C50.4023 5.24297 48.9221 3.7627 47.1025 3.7627Z" fill="white" />
// //                       </svg>
// //                     </div>
// //                     <h3 className="font-bold text-gray-900 text-sm">{ins.title}</h3>
// //                     <p className="text-xs text-gray-500 leading-relaxed">{ins.desc}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //               <ul className="flex flex-col gap-2 mt-1">
// //                 {solutionFeatures.map((f) => (
// //                   <CheckItem key={f} text={f} />
// //                 ))}
// //               </ul>
// //             </section>

// //             {/* Section 5: FAQ */}
            
// //               {/* <h2 className="text-3xl font-bold text-gray-900">
// //                 <span className="text-red-600">Frequently</span> asked questions
// //               </h2>
// //               <div className="flex flex-col">
// //                 {faqs.map((faq) => (
// //                   <FAQItem key={faq.q} q={faq.q} a={faq.a} />
// //                 ))}
// //               </div> */}

// //               <FAQ/>
          

// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ProjectDetailPage;

// import FAQ from "@/M&M/FAQ";
// import { usePage, Link } from "@inertiajs/react";
// import {
//   MapPin,
//   User,
//   Building2,
//   CalendarDays,
//   Phone,
//   Mail,
//   Star,
//   CheckCircle2,
//   Zap,
//   ShieldCheck,
//   Lightbulb,
//   Package,
//   ChevronRight,
//   Wifi,
//   AlertTriangle,
// } from "lucide-react";
// import { getProjectBySlug, projects } from "@/data/projectsData";

// // ── Helpers ───────────────────────────────────────────────────────────────────

// function StarRating({ rating, size = 16 }) {
//   return (
//     <div className="flex items-center gap-1">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={size}
//           className={i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
//         />
//       ))}
//     </div>
//   );
// }

// function SectionTitle({ label, title, highlight }) {
//   return (
//     <div className="mb-5">
//       {label && (
//         <p className="text-red-600 text-xs font-bold tracking-[2px] uppercase mb-1">{label}</p>
//       )}
//       <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
//         {title} {highlight && <span className="text-red-600">{highlight}</span>}
//       </h2>
//     </div>
//   );
// }

// function CheckItem({ text, dark = false }) {
//   return (
//     <li className={`flex items-start gap-2 text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
//       <CheckCircle2 size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
//       {text}
//     </li>
//   );
// }

// // ── Sidebar ───────────────────────────────────────────────────────────────────

// function Sidebar({ project }) {
//   const projectDetails = [
//     { icon: Building2, label: "Project Name", value: project.name },
//     { icon: MapPin, label: "Location", value: project.location },
//     { icon: User, label: "Client", value: project.client },
//     { icon: CalendarDays, label: "Year", value: project.year },
//     { icon: ShieldCheck, label: "Contract Type", value: project.contractType },
//   ];

//   return (
//     <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-5 lg:sticky lg:top-8 lg:self-start">

//       {/* Project Details Card */}
//       <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-4">
//         <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-3">
//           Project Details
//         </h3>
//         {projectDetails.map(({ icon: Icon, label, value }) => (
//           <div key={label} className="flex items-start gap-3">
//             <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
//               <Icon size={15} className="text-white" />
//             </div>
//             <div>
//               <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide leading-tight">{label}</p>
//               <p className="text-sm font-semibold text-gray-800 mt-0.5">{value || "—"}</p>
//             </div>
//           </div>
//         ))}

//         {/* Rating */}
//         <div className="flex items-start gap-3 pt-1 border-t border-gray-100">
//           <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
//             <Star size={15} className="text-white" />
//           </div>
//           <div>
//             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide leading-tight">Client Rating</p>
//             <div className="mt-1">
//               <StarRating rating={project.rating} size={14} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* EPC Card */}
//       <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-3">
//         <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-3 flex items-center gap-2">
//           <Zap size={14} className="text-red-600" /> EPC Scope
//         </h3>
//         <ul className="flex flex-col gap-2">
//           {project.epc.items.map((item) => (
//             <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
//               <ChevronRight size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* CTA Card */}
//       <div
//         className="rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('${project.image}')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/80 rounded-2xl" />
//         <div className="relative z-10 flex flex-col gap-4">
//           <img className="w-10 h-10" src="/images/logo.png" alt="MNM" onError={(e) => { e.target.style.display = "none"; }} />
//           <p className="text-white font-bold text-lg leading-snug">Need help? We are here for you</p>
//           <div className="flex flex-col gap-2">
//             <a
//               href="mailto:info@mnm.com.np"
//               className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3 py-2.5"
//             >
//               <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
//                 <Mail size={14} className="text-white" />
//               </div>
//               <span className="text-white text-sm font-medium">info@mnm.com.np</span>
//             </a>
//             <a
//               href="tel:+97701-4535104"
//               className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3 py-2.5"
//             >
//               <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
//                 <Phone size={14} className="text-white" />
//               </div>
//               <span className="text-white text-sm font-medium">+977 01-4535104</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Related Projects */}
//       <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-3">
//         <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-3">
//           More Projects
//         </h3>
//         {projects
//           .filter((p) => p.slug !== project.slug && p.category === project.category)
//           .slice(0, 3)
//           .map((p) => (
//             <Link
//               key={p.slug}
//               href={`/project-details?slug=${p.slug}`}
//               className="flex items-center gap-3 group"
//             >
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
//               />
//               <div className="flex-1 min-w-0">
//                 <p className="text-xs font-bold text-gray-800 group-hover:text-red-600 transition-colors leading-tight truncate">
//                   {p.name}
//                 </p>
//                 <p className="text-[11px] text-gray-400 mt-0.5 truncate">{p.location}</p>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// }

// // ── Not Found ─────────────────────────────────────────────────────────────────

// function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-4">
//       <AlertTriangle size={48} className="text-red-400" />
//       <h1 className="text-2xl font-extrabold text-gray-900">Project Not Found</h1>
//       <p className="text-gray-500 text-sm max-w-sm">The project you are looking for does not exist or may have been removed.</p>
//       <Link href="/projects" className="mt-2 bg-red-600 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-red-700 transition">
//         Back to Projects
//       </Link>
//     </div>
//   );
// }

// // ── Main Page ─────────────────────────────────────────────────────────────────

// const ProjectDetailPage = () => {
//   // Get slug from Inertia page props or URL query
//   const { url } = usePage();
//   const urlParams = new URLSearchParams(url.split("?")[1] || "");
//   const slug = urlParams.get("slug");

//   const project = getProjectBySlug(slug);

//   if (!project) return <NotFound />;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
//         * { font-family: 'Barlow', sans-serif; }
//       `}</style>

//       {/* ── Hero Banner ── */}
//       <div
//         className="relative flex min-h-[280px] sm:min-h-[380px] lg:min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12 lg:bg-fixed"
//         style={{ backgroundImage: `url('${project.image}')` }}
//       >
//         <div className="absolute inset-0 bg-gray-900/70" />
//         <div className="relative z-20 flex flex-col items-center text-center gap-3">
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
//             <Link href="/" className="hover:text-white transition">Home</Link>
//             <ChevronRight size={12} />
//             <Link href="/projects" className="hover:text-white transition">Projects</Link>
//             <ChevronRight size={12} />
//             <span className="text-white">{project.name}</span>
//           </div>
//           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-wide leading-tight">
//             {project.name}
//           </h1>
//           <div className="flex items-center gap-2 text-white/80 text-sm">
//             <MapPin size={14} className="text-red-400" />
//             {project.location}
//           </div>
//           <StarRating rating={project.rating} size={18} />
//         </div>
//       </div>

//       {/* ── Main Layout ── */}
//       <div className="bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

//           {/* Sidebar */}
//           <Sidebar project={project} />

//           {/* Main Content */}
//           <div className="flex-1 flex flex-col gap-12 min-w-0">

//             {/* ── Section 1: Intro ── */}
//             <section className="flex flex-col gap-5">
//               <div className="rounded-2xl overflow-hidden shadow-md">
//                 <img
//                   src={project.overviewImage}
//                   alt={project.name}
//                   className="w-full object-cover max-h-[340px]"
//                 />
//               </div>
//               <div className="flex flex-col gap-3 text-sm text-gray-600 leading-relaxed">
//                 <p>{project.description}</p>
//                 {/* Fiber / uptime highlight */}
//                 <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4 mt-1">
//                   <Wifi size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
//                   <p className="text-red-700 font-semibold text-sm">{project.fiber}</p>
//                 </div>
//               </div>
//             </section>

//             {/* ── Section 2: Project Overview ── */}
//             <section className="rounded-2xl bg-gray-900 p-6 sm:p-8 text-white flex flex-col gap-5 shadow-lg">
//               <SectionTitle label="Overview" title="Project" highlight="Overview" />
//               <p className="text-sm text-gray-300 leading-relaxed">{project.overviewDescription}</p>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
//                 {project.highlights.map((h) => (
//                   <CheckItem key={h} text={h} dark />
//                 ))}
//               </ul>
//               <div className="rounded-xl overflow-hidden mt-2 shadow-md">
//                 <img src={project.solutionImage} alt="Project overview" className="w-full object-cover max-h-64" />
//               </div>
//             </section>

//             {/* ── Section 3: Products Used ── */}
//             <section className="flex flex-col gap-5">
//               <SectionTitle label="Products" title="Products" highlight="Used" />
//               <p className="text-sm text-gray-500 leading-relaxed -mt-2">
//                 The following products were specified and installed as part of this project.
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {project.products.map((prod, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
//                   >
//                     <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
//                       <Package size={20} className="text-red-600" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-sm font-bold text-gray-900 truncate">{prod.name}</p>
//                       <p className="text-xs text-gray-500 mt-0.5">
//                         <span className="font-semibold text-red-600">{prod.brand}</span> · {prod.qty}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* ── Section 4: Challenge & Solution ── */}
//             <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {/* Challenge */}
//               <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-3">
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
//                     <AlertTriangle size={18} className="text-white" />
//                   </div>
//                   <h3 className="font-extrabold text-gray-900 text-base">Project Challenge</h3>
//                 </div>
//                 <p className="text-sm text-gray-500 leading-relaxed">{project.challenge}</p>
//               </div>

//               {/* Solution */}
//               <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-3">
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
//                     <Lightbulb size={18} className="text-white" />
//                   </div>
//                   <h3 className="font-extrabold text-gray-900 text-base">Project Solution</h3>
//                 </div>
//                 <p className="text-sm text-gray-500 leading-relaxed">{project.solution}</p>
//               </div>
//             </section>

//             {/* ── Section 5: Tags ── */}
//             <section className="flex flex-wrap gap-2">
//               {project.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </section>

//             {/* ── Section 6: FAQ ── */}
//             <FAQ />

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectDetailPage;


import { useEffect, useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import { MapPin, Star, Calendar, User, Building2, ArrowLeft } from "lucide-react";

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={18}
                    className={i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
                />
            ))}
        </div>
    );
}

export default function ProjectDetailPage() {
    const { project: initialProject, error: pageError, slug } = usePage().props;
    const [project, setProject] = useState(initialProject || null);
    const [loading, setLoading] = useState(!initialProject && !pageError);
    const [error, setError] = useState(pageError || null);

    useEffect(() => {
        // Only fetch if project wasn't passed from server
        if (!initialProject && !pageError && slug) {
            fetchProjectDetails();
        }
    }, [slug, initialProject, pageError]);

    const fetchProjectDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/ourprojects/${slug}`);
            setProject(response.data);
        } catch (error) {
            console.error('Error fetching project details:', error);
            setError('Project not found');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading project details...</p>
                </div>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 text-lg mb-4">{error || 'Project not found'}</p>
                    <Link href="/projects-page" className="text-red-600 hover:text-red-700 font-semibold">
                        ← Back to Projects
                    </Link>
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

            {/* Hero Section */}
            <div className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${project.image || '/placeholder-image.jpg'})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{project.name}</h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{project.year}</span>
                        </div>
                        <StarRating rating={project.rating} />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-gray-50 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link href="/projects-page" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                            <ArrowLeft size={18} />
                            Back to Projects
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {project.tags && project.tags.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Building2 size={18} className="text-red-600 mt-0.5" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-semibold">Category</p>
                                            <p className="text-gray-800 font-medium">{project.category}</p>
                                        </div>
                                    </div>

                                    {project.client_name && (
                                        <div className="flex items-start gap-3">
                                            <User size={18} className="text-red-600 mt-0.5" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-semibold">Client</p>
                                                <p className="text-gray-800 font-medium">{project.client_name}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-3">
                                        <Calendar size={18} className="text-red-600 mt-0.5" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-semibold">Year Completed</p>
                                            <p className="text-gray-800 font-medium">{project.year}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Star size={18} className="text-red-600 mt-0.5" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-semibold">Rating</p>
                                            <StarRating rating={project.rating} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Contract Type</p>
                                    <span className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                                        {project.contractType}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}