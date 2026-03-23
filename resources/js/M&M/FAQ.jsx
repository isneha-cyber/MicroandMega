import { useState } from "react";

const FAQS = [
  {
    id: 1,
    question: "What security systems do you install?",
    answer:
      "We install a comprehensive range of security solutions including CCTV surveillance, access control systems, fire detection and suppression, intruder alarm systems, intercom systems, and fully integrated smart security platforms for residential, commercial, and industrial properties.",
    image: null,
  },
  {
    id: 2,
    question: "Can I manage all my security systems from one place?",
    answer:
      "Yes. Our integrated security platforms allow you to monitor and control your CCTV feeds, access control logs, fire alarm status, and intruder alerts all from a single app or web dashboard — accessible from any smartphone or computer.",
    image: null,
  },
  {
    id: 3,
    question: "Do you handle the full installation process?",
    answer:
      "Absolutely. Our certified technicians manage everything from the initial site survey and system design through to cable routing, full commissioning, and hands-on staff training — ensuring every system is installed to the highest standard.",
    image: null,
  },
  {
    id: 4,
    question: "What types of access control systems do you offer?",
    answer:
      "We supply and install a full range of access control solutions including smart card readers, biometric fingerprint and facial recognition systems, PIN keypads, electric door locks, and barrier/gate automation — all scalable to any size of premises.",
    image: null,
  },
  {
    id: 5,
    question: "What fire safety solutions do you provide?",
    answer:
      "We install UL and EN listed fire alarm systems — conventional, addressable, and intelligent — alongside smoke and heat detectors, emergency notification systems, and fire suppression solutions. All installations comply with local safety regulations and standards.",
    image: null,
  },
  {
    id: 6,
    question: "What warranty and maintenance support do you offer?",
    answer:
      "All products carry a minimum 1-year manufacturer warranty. We also offer Annual Maintenance Contracts (AMC) covering scheduled inspections, preventive servicing, and priority support for your CCTV, access control, fire, and alarm systems.",
    image: null,
  },
];

const HIGHLIGHTS = [
  "Integrated Security Systems , Access Control & Fire Safety Solutions",
  "24/7 Remote Monitoring Across All Security Systems",
  "Tailored Installations for Residential, Commercial & Industrial Sites",
];
// Red check icon
const CheckIcon = () => (
  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#cc1400] flex items-center justify-center mt-0.5">
    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3">
      <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

// Chevron
const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24" fill="none" className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-[#cc1400]" : "text-gray-400"}`}
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

export default function FAQ() {
  const [openId, setOpenId] = useState(2); // second one open by default like the image

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative py-16 sm:py-20 lg:py-24 px-8 lg:px-0"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        {/* ── Background image with overlay ── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        />
        {/* Light grey overlay so text is readable */}
        <div className="absolute inset-0 bg-gray-100/70" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

            {/* ── LEFT: info panel ── */}
            <div className="w-full lg:w-[42%] flex flex-col gap-6">

              {/* Label */}
              <div className="flex items-center gap-2">
              
                <span className="text-md font-semibold  text-gray-700 uppercase">
                  FAQ
                </span>
              </div>

              {/* Headline */}
              <h2
                className="font-bold text-gray-900 leading-relaxed text-3xl sm:text-4xl lg:text-5xl"
              
              >
                <span className="text-[#cc1400]">Frequently</span> asked questions
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-md leading-relaxed max-w-lg">
                Our FAQ section addresses common questions about our security products, installation, and services. Find quick and reliable answers to help you make informed decisions.
              </p>

              {/* Highlight bullets */}
              <ul className="flex flex-col gap-3 mt-1">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-800 font-semibold text-lg leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── RIGHT: FAQ accordion ── */}
            <div className="w-full lg:flex-1">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
                {FAQS.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div key={faq.id}>
                      {/* Question row */}
                      <button
                        onClick={() => toggle(faq.id)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-150"
                      >
                        <span
                          className={`font-semibold text-lg leading-relaxed ${isOpen ? "text-gray-900" : "text-gray-700"}`}
                        >
                          {faq.question}
                        </span>
                        <Chevron open={isOpen} />
                      </button>

                      {/* Answer panel */}
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-500 text-md leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}