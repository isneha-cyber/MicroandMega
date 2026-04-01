import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── SVG Icons ────────────────────────────────────────────────────────────────

const CCTVIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
    <rect x="4" y="14" width="22" height="14" rx="3" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M26 18l8-5v14l-8-5V18z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <circle cx="12" cy="21" r="2.5" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
    <rect x="4" y="6" width="32" height="22" rx="3" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M14 34h12M20 28v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="17" r="5" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M20 12v-3M20 25v-3M25 17h3M12 17h3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HomeSecIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
    <path d="M6 18L20 6l14 12v16H6V18z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <rect x="15" y="24" width="10" height="10" rx="1.5" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="20" cy="29" r="1.5" fill="white"/>
  </svg>
);

const AccessIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
    <rect x="4" y="8" width="20" height="26" rx="3" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="14" cy="21" r="3" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M14 24v4M28 14h6M28 21h6M28 28h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="34" cy="14" r="2" fill="white"/>
  </svg>
);

const SmartHomeIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
    <path d="M6 18L20 6l14 12v16H6V18z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <circle cx="20" cy="22" r="5" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M20 17v-3M20 30v-3M15 22H12M28 22h-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="20" cy="22" r="2" fill="white"/>
  </svg>
);

const AlarmIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
    <circle cx="20" cy="22" r="12" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M14 8c0 0 2-4 6-4s6 4 6 4" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M20 14v8l5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 34c3-3 6-4 12-4s9 1 12 4" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
    <circle cx="10" cy="10" r="9" stroke="#c0201c" strokeWidth="1.5"/>
    <path d="M7 10h6M10 7l3 3-3 3" stroke="#c0201c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Service Data ──────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    title: 'CCTV Installation',
    description: 'Expert installation of indoor and outdoor CCTV cameras with HD resolution, night vision, and remote viewing capabilities for complete site coverage.',
    Icon: CCTVIcon,
    bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 2,
    title: '24/7 Monitoring Services',
    description: 'Round-the-clock professional surveillance monitoring with instant alerts, live response teams, and real-time incident reporting to keep your premises safe.',
    Icon: MonitorIcon,
    bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    id: 3,
    title: 'Home Security Systems',
    description: 'Comprehensive residential security solutions including motion detectors, door/window sensors, smart locks, and integrated control panels tailored to your home.',
    Icon: HomeSecIcon,
    bg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    id: 4,
    title: 'CCT Access Control Systems',
    description: 'Advanced access control solutions featuring biometric scanners, key card entry, PIN systems, and audit trails to manage and restrict entry across your facility.',
    Icon: AccessIcon,
    bg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
  {
    id: 5,
    title: 'Smart Home Integration',
    description: 'Seamless integration of security, lighting, climate, and automation systems into a single smart platform — controllable from your phone, tablet, or voice assistant.',
    Icon: SmartHomeIcon,
    bg: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
  },
  {
    id: 6,
    title: 'Alarm Systems Installation',
    description: 'Professional installation of intruder alarm systems with siren, strobe, GSM dialers, and central station monitoring to deter threats and trigger rapid response.',
    Icon: AlarmIcon,
    bg: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  },
];
// ── ServiceCard ───────────────────────────────────────────────────────────────

function ServiceCard({ service, cardRef }) {
  const overlayRef = useRef(null);
  const iconWrapRef = useRef(null);

  const handleEnter = () => {
    gsap.to(overlayRef.current, { opacity: 0.18, duration: 0.35, ease: 'power2.out' });
    gsap.to(iconWrapRef.current, { scale: 1.1, duration: 0.3, ease: 'back.out(1.5)' });
  };

  const handleLeave = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: 'power2.out' });
    gsap.to(iconWrapRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      // KEY FIX: NO overflow-hidden on the card itself — only on the image wrapper
      className="group relative flex flex-col border border-gray-200 rounded-3xl cursor-pointer bg-white"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* ── Image block — overflow-hidden stays HERE only ── */}
      <div className="relative w-full h-[200px] sm:h-[210px] overflow-hidden rounded-t-3xl">
        <img
          src={service.bg}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* dark tint overlay on hover */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-0 pointer-events-none"
        />
      </div>

      {/* ── Icon badge — lives OUTSIDE image div, so it's never clipped ── */}
      <div className="relative flex justify-center" style={{ height: 16 }}>
        <div
          ref={iconWrapRef}
          className="absolute -top-[32px] w-[72px] h-[72px] bg-[#c0201c] rounded-full flex items-center justify-center shadow-lg z-10"
          style={{ willChange: 'transform' }}
        >
          <service.Icon />
        </div>
      </div>

      {/* ── Text block ── */}
      <div className="flex flex-col items-center text-center p-6 pt-12 pb-8 rounded-b-3xl">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Discover More link */}
        {/* <div className="flex items-center gap-2 group/link mt-auto">
          <span className="text-[#c0201c] text-sm font-semibold tracking-wide uppercase transition-all duration-300 group-hover/link:tracking-widest">
            Discover More
          </span>
          <ArrowIcon />
        </div> */}
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────

export default function ServiceSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    gsap.set(cards, { opacity: 0, y: 60 });

    gsap.timeline({ delay: 0.15 }).to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: { each: 0.1, from: 'start' },
      ease: 'power3.out',
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: { each: 0.1, from: 'start' },
            ease: 'power3.out',
            overwrite: true,
          }
        );
      },
      once: false,
    });

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 0.8,
        onUpdate: (self) => {
          gsap.to(card, {
            y: (1 - self.progress) * 18,
            duration: 0.1,
            ease: 'none',
            overwrite: 'auto',
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-24 px-8 sm:px-6 lg:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              cardRef={(el) => (cardRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

