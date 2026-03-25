import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TeamIcon = () => (
	<svg viewBox="0 0 40 40" fill="none" className="w-12 h-12">
		<circle cx="20" cy="13" r="5" stroke="#c0201c" strokeWidth="2" fill="none"/>
		<path d="M8 34c0-6.627 5.373-10 12-10s12 3.373 12 10" stroke="#c0201c" strokeWidth="2" fill="none" strokeLinecap="round"/>
		<circle cx="8" cy="16" r="3.5" stroke="#c0201c" strokeWidth="2" fill="none"/>
		<path d="M2 32c0-4 2.5-6.5 6-6.5" stroke="#c0201c" strokeWidth="2" fill="none" strokeLinecap="round"/>
		<circle cx="32" cy="16" r="3.5" stroke="#c0201c" strokeWidth="2" fill="none"/>
		<path d="M38 32c0-4-2.5-6.5-6-6.5" stroke="#c0201c" strokeWidth="2" fill="none" strokeLinecap="round"/>
	</svg>
);

const ProjectIcon = () => (
	<svg viewBox="0 0 40 40" fill="none" className="w-12 h-12">
		<rect x="4" y="4" width="32" height="32" rx="3" stroke="#c0201c" strokeWidth="2" fill="none"/>
		<rect x="9" y="9" width="10" height="10" rx="1.5" stroke="#c0201c" strokeWidth="2" fill="none"/>
		<rect x="21" y="9" width="10" height="10" rx="1.5" stroke="#c0201c" strokeWidth="2" fill="none"/>
		<rect x="9" y="21" width="10" height="10" rx="1.5" stroke="#c0201c" strokeWidth="2" fill="none"/>
		<line x1="21" y1="26" x2="31" y2="26" stroke="#c0201c" strokeWidth="2" strokeLinecap="round"/>
		<line x1="26" y1="21" x2="26" y2="31" stroke="#c0201c" strokeWidth="2" strokeLinecap="round"/>
	</svg>
);

const PhoneIcon = () => (
	<svg viewBox="0 0 40 40" fill="none" className="w-12 h-12">
		<path d="M8 6h8l3 8-4.5 2.5c1.5 3.5 5 7 8.5 8.5L25.5 21l8 3v8c0 1.1-.9 2-2 2C12 33 7 18 7 8c0-1.1.9-2 2-2z" stroke="#c0201c" strokeWidth="2" fill="none" strokeLinejoin="round"/>
		<path d="M26 6c4.4 0 8 3.6 8 8" stroke="#c0201c" strokeWidth="2" strokeLinecap="round" fill="none"/>
		<path d="M26 10c2.2 0 4 1.8 4 4" stroke="#c0201c" strokeWidth="2" strokeLinecap="round" fill="none"/>
	</svg>
);

export default function WhatWeDo() {
	// Refs for animation targets
	const sectionRef = useRef(null);
	const leftColumnRef = useRef(null);
	const rightColumnRef = useRef(null);
	const tagRef = useRef(null);
	const headingRef = useRef(null);
	const textRefs = useRef([]);
	const ctaRef = useRef(null);
	const cardsRef = useRef([]);
	const imageRef = useRef(null);

	useEffect(() => {
		// Set initial hidden states
		gsap.set([leftColumnRef.current, rightColumnRef.current], {
			opacity: 0,
			y: 50
		});
		
		gsap.set(tagRef.current, {
			opacity: 0,
			x: -30
		});
		
		gsap.set(headingRef.current, {
			opacity: 0,
			x: -30
		});
		
		gsap.set(textRefs.current, {
			opacity: 0,
			y: 20
		});
		
		gsap.set(ctaRef.current, {
			opacity: 0,
			y: 30,
			scale: 0.95
		});
		
		gsap.set(cardsRef.current, {
			opacity: 0,
			x: -50,
			scale: 0.8
		});
		
		gsap.set(imageRef.current, {
			opacity: 0,
			scale: 0.9,
			rotationY: -15
		});

		// Initial load animation timeline
		const loadTimeline = gsap.timeline({
			defaults: {
				ease: "power3.out",
				duration: 0.8
			}
		});

		loadTimeline
			.to(tagRef.current, {
				opacity: 1,
				x: 0,
				duration: 0.6
			})
			.to(headingRef.current, {
				opacity: 1,
				x: 0,
				duration: 0.6
			}, "-=0.3")
			.to(textRefs.current, {
				opacity: 1,
				y: 0,
				stagger: 0.2,
				duration: 0.5
			}, "-=0.2")
			.to(ctaRef.current, {
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.7,
				ease: "back.out(0.7)"
			}, "-=0.2")
			.to(imageRef.current, {
				opacity: 1,
				scale: 1,
				rotationY: 0,
				duration: 0.9,
				ease: "power2.out"
			}, "-=0.5")
			.to(cardsRef.current, {
				opacity: 1,
				x: 0,
				scale: 1,
				stagger: 0.15,
				duration: 0.6,
				ease: "back.out(0.6)"
			}, "-=0.4");

		// Scroll-triggered animations for a more engaging experience
		// Left column fade-up on scroll
		ScrollTrigger.create({
			trigger: leftColumnRef.current,
			start: "top 80%",
			end: "bottom 20%",
			onEnter: () => {
				gsap.to(leftColumnRef.current, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out"
				});
			},
			once: true
		});

		// Right column with 3D effect on scroll
		ScrollTrigger.create({
			trigger: rightColumnRef.current,
			start: "top 80%",
			end: "bottom 20%",
			onEnter: () => {
				gsap.to(rightColumnRef.current, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out"
				});
			},
			once: true
		});

		// Parallax effect for cards on scroll
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: "top top",
			end: "bottom bottom",
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;
				// Subtle movement for cards based on scroll
				gsap.to(cardsRef.current, {
					y: progress * 30,
					x: progress * 10,
					duration: 0.1,
					ease: "none"
				});
			}
		});

		// Card hover animations with background color sliding from bottom
		cardsRef.current.forEach((card, index) => {
			if (card) {
				// Find the pseudo-element or create a overlay div
				const overlay = card.querySelector('.card-overlay');
				
				card.addEventListener('mouseenter', () => {
					// Animate the card scale and shadow
					gsap.to(card, {
						y: -10,
						scale: 1.05,
						duration: 0.3,
						ease: "power2.out",
						boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
					});
					
					// Animate the overlay from bottom to top
					if (overlay) {
						gsap.to(overlay, {
							y: 0,
							duration: 0.4,
							ease: "power2.out"
						});
					}
					
					// Animate text colors
					const numberElement = card.querySelector('.card-number');
					const textElement = card.querySelector('.card-text');
					
					if (numberElement) {
						gsap.to(numberElement, {
							color: "white",
							duration: 0.3,
							ease: "power2.out"
						});
					}
					
					if (textElement) {
						gsap.to(textElement, {
							color: "rgba(255, 255, 255, 0.9)",
							duration: 0.3,
							ease: "power2.out"
						});
					}
					
					// Animate icon stroke color
					const svgPaths = card.querySelectorAll('svg path, svg circle, svg rect, svg line');
					svgPaths.forEach(path => {
						gsap.to(path, {
							stroke: "white",
							duration: 0.3,
							ease: "power2.out"
						});
					});
				});
				
				card.addEventListener('mouseleave', () => {
					// Reset card scale and shadow
					gsap.to(card, {
						y: 0,
						scale: 1,
						duration: 0.3,
						ease: "power2.out",
						boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
					});
					
					// Animate overlay back down
					if (overlay) {
						gsap.to(overlay, {
							y: "100%",
							duration: 0.4,
							ease: "power2.out"
						});
					}
					
					// Reset text colors
					const numberElement = card.querySelector('.card-number');
					const textElement = card.querySelector('.card-text');
					
					if (numberElement) {
						gsap.to(numberElement, {
							color: "black",
							duration: 0.3,
							ease: "power2.out"
						});
					}
					
					if (textElement) {
						gsap.to(textElement, {
							color: "#999",
							duration: 0.3,
							ease: "power2.out"
						});
					}
					
					// Reset icon stroke color
					const svgPaths = card.querySelectorAll('svg path, svg circle, svg rect, svg line');
					svgPaths.forEach(path => {
						gsap.to(path, {
							stroke: "#c0201c",
							duration: 0.3,
							ease: "power2.out"
						});
					});
				});
			}
		});

		// CTA button hover animation
		if (ctaRef.current) {
			ctaRef.current.addEventListener('mouseenter', () => {
				gsap.to(ctaRef.current, {
					scale: 1.02,
					duration: 0.3,
					ease: "power2.out"
				});
			});
			
			ctaRef.current.addEventListener('mouseleave', () => {
				gsap.to(ctaRef.current, {
					scale: 1,
					duration: 0.3,
					ease: "power2.out"
				});
			});
		}

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return (
		<div ref={sectionRef} className="bg-[#222629] flex items-center justify-center overflow-hidden">
			<div className="w-full max-w-7xl sm:px-0 mx-auto py-16 md:py-24 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">

				{/* ══════════════════════════════
            LEFT COLUMN
        ══════════════════════════════ */}
				<div ref={leftColumnRef} className="flex flex-col">

					{/* Tag */}
					<div ref={tagRef} className="flex items-center text-white text-sm sm:text-md font-bold tracking-[2px] uppercase mb-4 sm:mb-6">
						WHAT WE DO
					</div>

					{/* Heading */}
					<h2 ref={headingRef} className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] sm:leading-[52px] mb-4 sm:mb-6">
						<span className="text-[#c0201c]">Delivering trusted</span>
						security
						<br/>and surveillance
					</h2>

					{/* Body */}
					<p ref={el => textRefs.current[0] = el} className="text-white text-sm sm:text-md leading-[24px] sm:leading-[26px] mb-3 sm:mb-4">
						 MNM specializes in ELV systems, fire detection, security solutions, IoT automation, 
  lighting automation, and data networking infrastructure. 
						 
					</p>
					<p ref={el => textRefs.current[1] = el} className="text-white text-sm sm:text-md leading-[24px] sm:leading-[26px] mb-6 sm:mb-8">
						Every product in our catalog 
						  is curated to meet industry-leading standards, with secure cart and payment gateway 
						  integration ready for a hassle-free purchasing experience. Explore our range, build 
						  your custom solution, and checkout with confidence your smart infrastructure journey 
						  starts here.
					</p>

					{/* CTA Pill - Responsive */}
					<div ref={ctaRef} className="flex flex-col sm:flex-row items-center rounded-3xl overflow-hidden w-full bg-[#c0201c] cursor-pointer transition-all duration-300">
						{/* White circle — phone icon */}
						<div className="bg-white flex items-center justify-center shrink-0 w-20 h-20 sm:w-[92px] sm:h-[92px]">
							<PhoneIcon/>
						</div>
						{/* Red text block */}
						<div className="flex flex-col justify-center px-4 sm:px-6 md:pl-12 py-4 sm:py-0 flex-1 text-center sm:text-left">
							<span className="text-white font-bold text-base sm:text-lg md:text-xl leading-relaxed tracking-[1px]">
								Call For Any Kind Of Services
							</span>
							<span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-[1px] mt-0.5">
								+(1) 456 – 789 – 254
							</span>
						</div>
					</div>
				</div>

				{/* ══════════════════════════════
            RIGHT COLUMN
            Cards overlapping the image with proper gaps - Responsive
        ══════════════════════════════ */}
				<div ref={rightColumnRef} className="flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
					{/* Image container */}
					<div className="relative w-full sm:w-[80%] md:w-[75%] lg:w-[70%]">
						<img 
							ref={imageRef}
							src="/images/wedo.jpg" 
							alt="CCTV Camera on building" 
							className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
							style={{ transformStyle: 'preserve-3d' }}
						/>
						
						{/* Cards - positioned to overlap the image from the left - Responsive positioning */}
						<div className="absolute left-0 sm:-left-6 md:-left-8 lg:-left-32 top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6">
							<div 
								ref={el => cardsRef.current[0] = el}
								className="bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 w-40 sm:w-44 md:w-48 lg:w-52 shadow-xl cursor-pointer relative overflow-hidden"
							>
								{/* Overlay that slides from bottom */}
								<div className="card-overlay absolute bottom-0 left-0 w-full h-full bg-[#c8201c] translate-y-full transition-transform duration-300 ease-out" />
								
								{/* Content wrapper with relative positioning to stay above overlay */}
								<div className="relative z-10">
									<TeamIcon />
									<div className="card-number text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2 sm:mt-3 transition-colors duration-300">20+</div>
									<div className="card-text text-[#999] text-xs sm:text-sm md:text-md mt-1 sm:mt-1.5 transition-colors duration-300">Professional Team</div>
								</div>
							</div>

							<div 
								ref={el => cardsRef.current[1] = el}
								className="bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 w-40 sm:w-44 md:w-48 lg:w-52 shadow-xl cursor-pointer relative overflow-hidden"
							>
								{/* Overlay that slides from bottom */}
								<div className="card-overlay absolute bottom-0 left-0 w-full h-full bg-[#c8201c] translate-y-full transition-transform duration-300 ease-out" />
								
								{/* Content wrapper with relative positioning to stay above overlay */}
								<div className="relative z-10">
									<ProjectIcon />
									<div className="card-number text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2 sm:mt-3 transition-colors duration-300">15+</div>
									<div className="card-text text-[#999] text-xs sm:text-sm md:text-md mt-1 sm:mt-1.5 transition-colors duration-300">Project Complete</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}