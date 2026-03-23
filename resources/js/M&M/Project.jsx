import { useState, useRef } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Bir Hospital Surgical Building",
    category: "Medical",
    img: "/images/p1.jpeg",
  },
  {
    id: 2,
    title: "Nepal Rastrya Bank, Baluwatar",
    category: "Bank",
    img: "/images/p2.jpeg",
  },
  {
    id: 3,
    title: "Nepal Rastrya Bank, Thapathali",
    category: "Bank",
    img: "/images/p3.jpeg",
  },
  {
    id: 4,
    title: "DI Skin Hospital",
    category: "Medical",
    img: "/images/p4.jpeg",
  },
  {
    id: 5,
    title: "Mountain Glory Pokhara",
    category: "Hospitality",
    img: "/images/p5.jpeg",
  },
  {
    id: 6,
    title: "The Flip Resort, Pokhara",
    category: "Hospitality",
    img: "/images/p6.jpeg",
  },
];

const TABS = ["All", "Hospitality", "Bank", "Medical", "Others"];

// ── Single project card ──
const ProjectCard = ({ project }) => (
  <div className="flex flex-col gap-3 group cursor-pointer">
    <div className="relative rounded-2xl overflow-hidden">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-[220px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute top-4 left-4 bg-[#cc1400] text-white text-sm font-semibold px-3 py-1 rounded-md">
        {project.category}
      </span>
    </div>
    <p className="text-center text-gray-800 font-semibold text-lg leading-relaxed group-hover:text-[#cc1400] transition-colors duration-150">
      {project.title}
    </p>
  </div>
);

// ── Mobile carousel ──
const MobileCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (items.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10 text-sm">
        No projects in this category.
      </p>
    );
  }

  return (
    <div className="relative w-full">
      {/* Slide */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full"
      >
        <ProjectCard project={items[index]} />
      </div>

      {/* Prev / Next arrows */}
      {items.length > 1 && (
        <div className="flex items-center justify-between mt-5 px-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-colors"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === index
                    ? "w-5 h-2.5 bg-[#cc1400]"
                    : "w-2.5 h-2.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#cc1400] hover:text-white hover:border-[#cc1400] transition-colors"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Slide counter */}
      {/* <p className="text-center text-gray-400 text-xs mt-3">
        {index + 1} / {items.length}
      </p> */}
    </div>
  );
};

// ── Main component ──
export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className="bg-white py-16 sm:py-24 px-8 sm:px-0"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-md font-semibold text-gray-700 uppercase">
                Our Projects
              </span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-gray-900 leading-relaxed"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              <span className="text-[#cc1400]">Advanced</span> features security
            </h2>
          </div>

          {/* ── Filter tabs ── */}
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 mb-10 sm:mb-12">
            {TABS.map((tab, i) => (
              <div key={tab} className="flex items-center">
                <button
                  onClick={() => setActive(tab)}
                  className={`px-3 py-1 text-md font-semibold rounded transition-colors duration-150 ${
                    active === tab ? "text-[#cc1400]" : "text-gray-800"
                  }`}
                >
                  {tab}
                </button>
                {i < TABS.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cc1400] inline-block mx-0.5 opacity-70" />
                )}
              </div>
            ))}
          </div>

          {/* ── Mobile: carousel ── */}
          <div className="sm:hidden">
            <MobileCarousel items={filtered} />
          </div>

          {/* ── Tablet + Desktop: grid ── */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-400 py-10 text-sm">
                No projects in this category.
              </p>
            )}
          </div>

        </div>
      </section>
    </>
  );
}