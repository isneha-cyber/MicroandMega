import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PLACEHOLDER_IMG = "/images/person-placeholder.svg";

const teamMembers = [
  {
    name: "Arjun Khanna",
    role: "Technical Engineer",
    img: PLACEHOLDER_IMG,
    alt: "Person placeholder",
  },
  {
    name: "Cameron Williamson",
    role: "Security Specialist",
    img: PLACEHOLDER_IMG,
    alt: "Person placeholder",
  },
  {
    name: "Leslie Alexander",
    role: "Security Specialist",
    img: PLACEHOLDER_IMG,
    alt: "Person placeholder",
  },
  {
    name: "Michael Johnson",
    role: "Support Manager",
    img: PLACEHOLDER_IMG,
    alt: "Person placeholder",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Initial page load animations
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current, {
        opacity: 0,
        y: 50,
      });
      
      gsap.set(descriptionRef.current, {
        opacity: 0,
        x: 30,
      });
      
     
      
      cardsRef.current.forEach((card, index) => {
        gsap.set(card, {
          opacity: 0,
          y: 50,
          scale: 0.8,
        });
      });

      // Welcome animation timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.2"
        );

      // ScrollTrigger animations for each card
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 65%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(0.7)",
          }
        );
      });

      // Parallax effect for section background
      gsap.fromTo(
        sectionRef.current,
        {
          backgroundPosition: "50% 0%",
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          backgroundPosition: "50% 20%",
          duration: 1,
        }
      );

      // Floating animation for shield icon
      gsap.to(".shield-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Text reveal animation for heading
      gsap.fromTo(
        ".heading-text span",
        {
          opacity: 0,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add cards to refs
  const addToRefs = (el, index) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 50%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Top row */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
        {/* Left: headings */}
        <div ref={headerRef} className="lg:w-1/2">
          <div className="flex items-center gap-2 mb-3">
            {/* Shield icon with floating animation */}
            <svg
              className="w-5 h-5 text-red-600 shield-icon"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-gray-900 heading-text">
            <span className="text-red-600 inline-block">Dedicated professionals</span>
            <br />
            <span className="inline-block">behind your security</span>
          </h2>
        </div>

        {/* Right: description + CTA */}
        <div className="lg:w-1/2 flex flex-col items-start lg:items-start justify-between gap-6">
          <p
            ref={descriptionRef}
            className="text-gray-500 text-sm md:text-base max-w-2xl lg:text-left leading-relaxed"
          >
            With years of experience in surveillance and security systems, we
            provide advanced, reliable, and tailored solutions to safeguard your
            home and business.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
        {teamMembers.map((member, i) => (
          <div
            key={member.name}
            ref={(el) => addToRefs(el, i)}
            className="flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Photo card */}
            <div
              className={`relative w-full overflow-hidden rounded-2xl ${
                hovered === i ? " " : ""
              }`}
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={member.img}
                alt={member.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name & role with hover effect */}
            <div className="mt-4 text-center transform transition-all duration-300 group-hover:translate-y-1">
              <p className="font-bold text-gray-900 text-sm md:text-base group-hover:text-red-600 transition-colors duration-300">
                {member.name}
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-0.5 group-hover:text-gray-600 transition-colors duration-300">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}