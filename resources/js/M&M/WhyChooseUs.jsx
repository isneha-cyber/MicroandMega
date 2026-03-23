import React from "react";

const FEATURES = [
  {
    side: "left",
    title: "24/7 Support",
    desc: "Round-the-clock monitoring and assistance for all your security systems, ensuring rapid response whenever you need it.",
    icon: (
      // 24/7 clock-style icon
      <svg viewBox="0 0 48 48" fill="none" className="sm:w-12 sm:h-12 w-8 h-8" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" stroke="white" strokeWidth={2}/>
        <path d="M24 14v10l6 4" strokeWidth={2.2}/>
        <path d="M10 36l4-3M38 36l-4-3" strokeWidth={1.6}/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" stroke="none" fontFamily="sans-serif">24/7</text>
      </svg>
    ),
  },
  {
    side: "left",
    title: "Customized Solutions",
    desc: "Tailored security systems designed around your specific needs — from access control and fire detection to integrated surveillance.",
    icon: (
      // DVR/monitor icon
      <svg viewBox="0 0 48 48" fill="none" className="sm:w-12 sm:h-12 w-8 h-8" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="22" rx="3"/>
        <path d="M16 38h16M24 32v6"/>
        <rect x="10" y="15" width="12" height="8" rx="1"/>
        <circle cx="33" cy="19" r="3"/>
        <path d="M30 27h6"/>
      </svg>
    ),
  },
  {
    side: "right",
    title: "Remote Access",
    desc: "Monitor and manage your security infrastructure from anywhere in the world through our smart remote access platform.",
    icon: (
      // Monitor with gear/remote icon
      <svg viewBox="0 0 48 48" fill="none" className="sm:w-12 sm:h-12 w-8 h-8" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="26" rx="3"/>
        <path d="M16 40h16M24 34v6"/>
        <circle cx="24" cy="21" r="6"/>
        <path d="M24 15v2M24 25v2M18 21h2M28 21h2"/>
        <circle cx="24" cy="21" r="2" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    side: "right",
    title: "Proactive Maintenance",
    desc: "Scheduled inspections and preventive servicing keep your CCTV, alarms, and access control systems running at peak performance.",
    icon: (
      // Eye/camera surveillance icon
      <svg viewBox="0 0 48 48" fill="none" className="sm:w-12 sm:h-12 w-8 h-8" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 24s6-10 18-10 18 10 18 10-6 10-18 10S6 24 6 24z"/>
        <circle cx="24" cy="24" r="5"/>
        <circle cx="24" cy="24" r="2" fill="white" stroke="none"/>
        <path d="M34 14l4-4M38 18l3-3"/>
      </svg>
    ),
  },
];

const leftFeatures  = FEATURES.filter((f) => f.side === "left");
const rightFeatures = FEATURES.filter((f) => f.side === "right");

const FeatureCard = ({ title, desc, icon, align = "left" }) => (
  <div
    className={`
      bg-white rounded-2xl shadow-sm border border-gray-300
      flex flex-col
      ${align === "right" ? "items-end text-right" : "items-start text-left"}
      px-6 py-4 gap-3 relative
      hover:shadow-md transition-shadow duration-300
    `}
  >
    {/* Red circle icon — floats above the card top edge */}
    <div
      className={`
        absolute -top-7
        ${align === "right" ? "right-8" : "left-8"}
        w-16 h-16 rounded-full bg-[#cc1400] shadow-lg
        flex items-center justify-center
       
      `}
    >
      {icon}
    </div>

    {/* Spacer for icon overlap */}
    <div className="h-7" />

    <h3
      className="font-bold text-gray-900 text-[17px] leading-snug"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      {title}
    </h3>
    <p
      className="text-gray-400 text-[13.5px] leading-relaxed"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      {desc}
    </p>
  </div>
);

export default function WhyChooseUs() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className=" py-16 sm:py-20 lg:py-24 px-8 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* ── Section header ── */}
          <div className="text-center mb-14 sm:mb-20">
            {/* tiny label */}
            <div className="inline-flex items-center gap-2 mb-4">
              
              <span
                className="text-md font-semibold text-gray-700 uppercase"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Why Choose Us
              </span>
            </div>

            {/* Headline — exact match */}
            <h2
              className="md:block hidden sm:text-5xl text-3xl font-bold leading-relaxed"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              <span className="text-[#cc1400]">Expert security,</span>{" "}
              <span className="text-gray-900">reliable system </span>
              <br />
              <span className="text-gray-900">solutions</span>
            </h2>
            <h2
  className="md:hidden block sm:text-5xl text-3xl font-bold leading-relaxed"
  style={{ fontFamily: "'Barlow', sans-serif" }}
>
  <span className="text-[#cc1400]">Expert security, </span>
  <span className="text-gray-900">reliable system solutions</span>
  <br className="hidden sm:block" />
</h2>
          </div>

          {/* ── Main layout: left cards | center image | right cards ── */}
          {/* Desktop: 3-column grid */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-8 xl:gap-16">

            {/* Left column — 2 cards stacked */}
            <div className="flex flex-col gap-14">
              {leftFeatures.map((f) => (
                <FeatureCard key={f.title} {...f} align="left" />
              ))}
            </div>

            {/* Centre — CCTV cameras image */}
            <div className="flex items-center justify-center w-[320px] xl:w-[700px]">
              <img
                src="/images/choseus.jpg"
                alt="CCTV Security Cameras"
                className="w-full object-contain rounded-3xl"
                style={{ maxHeight: "420px" }}
              />
            </div>

            {/* Right column — 2 cards stacked */}
            <div className="flex flex-col gap-14">
              {rightFeatures.map((f) => (
                <FeatureCard key={f.title} {...f} align="right" />
              ))}
            </div>
          </div>

          {/* Tablet: image on top, 2x2 grid below */}
          <div className="hidden sm:flex lg:hidden flex-col items-center gap-12">
            {/* Center image */}
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&q=80"
              alt="CCTV Security Cameras"
              className="w-[60%] max-w-xs object-contain drop-shadow-xl"
            />
            {/* 2-col grid */}
            <div className="grid grid-cols-2 gap-10 w-full">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} align="left" />
              ))}
            </div>
          </div>

          {/* Mobile: single column */}
          <div className="flex sm:hidden flex-col items-center gap-10">
            <img
              src="/images/choseus.jpg"
              alt="CCTV Security Cameras"
              className="w-[91%] object-cover rounded-3xl "
            />
            <div className="flex flex-col gap-10 w-full">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} align="left" />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}