import { useState } from "react";

const teamMembers = [
  {
    name: "Arjun Khanna",
    role: "Technical Engineer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    alt: "Male professional in suit against dark office background",
  },
  {
    name: "Cameron Williamson",
    role: "Security Specialist",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    alt: "Female security specialist with badge",
  },
  {
    name: "Leslie Alexander",
    role: "Security Specialist",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    alt: "Female officer in uniform against bright background",
  },
  {
    name: "Michael Johnson",
    role: "Support Manager",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    alt: "Male security manager in dark uniform",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Top row */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
        {/* Left: headings */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 mb-3">
            {/* Shield icon */}
            <svg
              className="w-5 h-5 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
              />
            </svg>
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Meet Our Experts
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
            <span className="text-red-600">Dedicated professionals</span>
            <br />
            behind your security
          </h2>
        </div>

        {/* Right: description + CTA */}
        <div className="lg:w-1/2 flex flex-col items-start lg:items-end justify-between gap-6">
          <p className="text-gray-500 text-sm md:text-base max-w-md lg:text-right leading-relaxed">
            With years of experience in surveillance and security systems, we
            provide advanced, reliable, and tailored solutions to safeguard your
            home and business.
          </p>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
            View All Team
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
        {teamMembers.map((member, i) => (
          <div
            key={member.name}
            className="flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Photo card */}
            <div
              className={`relative w-full overflow-hidden rounded-2xl transition-transform duration-300 ${
                hovered === i ? "-translate-y-2 shadow-2xl" : "shadow-md"
              }`}
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={member.img}
                alt={member.alt}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Name & role */}
            <div className="mt-4 text-center">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                {member.name}
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-0.5">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}