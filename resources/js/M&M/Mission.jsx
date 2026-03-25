import { useState } from "react";

const TargetIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <circle cx="22" cy="22" r="18" stroke="white" strokeWidth="2.2" fill="none"/>
    <circle cx="22" cy="22" r="11" stroke="white" strokeWidth="2.2" fill="none"/>
    <circle cx="22" cy="22" r="4" stroke="white" strokeWidth="2.2" fill="none"/>
    <line x1="22" y1="4" x2="22" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="22" y1="35" x2="22" y2="40" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="4" y1="22" x2="9" y2="22" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="35" y1="22" x2="40" y2="22" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <path d="M4 22C4 22 10 10 22 10C34 10 40 22 40 22C40 22 34 34 22 34C10 34 4 22 4 22Z" stroke="white" strokeWidth="2.2" fill="none"/>
    <circle cx="22" cy="22" r="6" stroke="white" strokeWidth="2.2" fill="none"/>
    <circle cx="22" cy="22" r="2.2" fill="white"/>
    <line x1="19" y1="10.5" x2="17" y2="6.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="22" y1="10" x2="22" y2="5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="25" y1="10.5" x2="27" y2="6.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect x="8" y="9" width="26" height="31" rx="2.5" stroke="white" strokeWidth="2.2" fill="none"/>
    <rect x="16" y="5" width="12" height="8" rx="2" stroke="white" strokeWidth="2" fill="none"/>
    <line x1="14" y1="20" x2="30" y2="20" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="30" y2="26" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="14" y1="32" x2="22" y2="32" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);



const items = [
  {
    icon: <TargetIcon />,
    title: "Our Mission",
    description:
  "To deliver world-class ELV systems, fire detection, and security solutions that protect lives and assets. We strive to innovate through IoT automation and smart infrastructure, ensuring every client experiences unparalleled safety and efficiency.",
  },
  {
    icon: <EyeIcon />,
    title: "Our Vision",
    description:
      "To become the leading provider of integrated security and automation solutions across the region. We envision a future where smart technology seamlessly integrates with daily operations, making businesses safer, smarter, and more connected.",
  },
  {
    icon: <ClipboardIcon />,
    title: "Our Goal",
    description:
      "To build a comprehensive digital ecosystem with a fully integrated e-commerce platform, complete with secure cart and payment gateway. We aim to provide customers with a seamless purchasing experience for all security and automation products.",
  },
];

export default function Mission() {
  return (
    <div
      className="flex w-full flex-col overflow-hidden py-20 lg:flex-row lg:py-28"
      style={{ minHeight: 720 }}
    >
      {/* LEFT: CCTV camera image */}
      <div className="relative w-full overflow-hidden lg:flex-1">
        <img
          src="/images/mission.jpg"
          alt="CCTV Security Camera on a residential street"
          className="h-full min-h-[320px] w-full object-cover object-left sm:min-h-[420px] lg:min-h-[520px]"
        />
      </div>

      {/* RIGHT: Red info panel */}
      <div className="relative flex w-full flex-col justify-center bg-[#c8201c] px-6 py-10 sm:px-10 sm:py-12 lg:w-[52%] lg:px-14 lg:py-14">
        {/* Content items */}
        <div className="flex flex-col gap-6 sm:gap-14">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              {/* Icon badge */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 63,
                  height: 63,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.13)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  marginTop: 2,
                }}
              >
                {item.icon}
              </div>

              {/* Text block */}
              <div className="max-w-xl">
                <div
                  className="text-white font-bold mb-4 text-2xl"
                  
                >
                  {item.title}
                </div>
                <div
                  className="text-white text-md"
                 
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}
