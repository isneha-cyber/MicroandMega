

// import { Link, usePage } from '@inertiajs/react'
// import React, { useState, useEffect, useRef } from 'react'

// const PRODUCTS_MENU = [
//   { label: 'Fire Alarm',                                  path: '/products/fire-alarm' },
//   { label: 'Access Control',                              path: '/products/access-control' },
//   { label: 'Public Address',                              path: '/products/public-address' },
//   { label: 'CCTV',                                        path: '/products/cctv' },
//   { label: 'Digital Lighting',                            path: '/products/digital-lighting' },
//   { label: 'Data Network',                                path: '/products/data-network' },
//   { label: 'Grounding ERT',                               path: '/products/grounding-ert' },
//   { label: 'Control & Monitor System',                    path: '/products/control-monitor' },
//   { label: 'NVC Lighting',                                path: '/products/nvc-lighting' },
//   { label: 'Early Detection System',                      path: '/products/early-detection' },
//   { label: 'Remote Notification & Monitoring',            path: '/products/remote-monitoring' },
//   { label: 'Building Management System',                  path: '/products/bms' },
//   { label: 'IoT Customization (RF / GSM / LoRa / WiFi)', path: '/products/iot-customization' },
// ]

// const NAV_LINKS = [
//   { label: 'Home',               path: '/' },
//   { label: 'About Us',           path: '/about' },
//   { label: 'Products',           path: '/products', hasDropdown: true },
//   { label: 'Services',           path: '/services' },
//   { label: 'Clients & Projects', path: '/clients-projects' },
//   { label: 'Contact Us',         path: '/contact' },
// ]

// const ChevronDown = ({ open }) => (
//   <svg
//     className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
//     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//   </svg>
// )

// const ArrowRight = () => (
//   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// )

// const CloseIcon = () => (
//   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//   </svg>
// )

// export default function Navbar() {
//   const [dropdownOpen,   setDropdownOpen]   = useState(false)
//   const [mobileOpen,     setMobileOpen]     = useState(false)
//   const [mobileProdOpen, setMobileProdOpen] = useState(false)
//   const [scrolled,       setScrolled]       = useState(false)
//   const dropdownRef = useRef(null)
//   const { url } = usePage()

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60)
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     const handler = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target))
//         setDropdownOpen(false)
//     }
//     document.addEventListener('mousedown', handler)
//     return () => document.removeEventListener('mousedown', handler)
//   }, [])

//   useEffect(() => {
//     setDropdownOpen(false)
//     setMobileOpen(false)
//     setMobileProdOpen(false)
//   }, [url])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [mobileOpen])

//   const isActive = (path) =>
//     path === '/' ? url === '/' : url.startsWith(path)

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800&display=swap"
//         rel="stylesheet"
//       />

//       {/* ── Fixed outer wrapper ─────────────────────────────────── */}
//       <div
//         className={[
//           'fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300',
//           !scrolled ? 'pt-4 lg:pt-10' : 'pt-0',
//         ].join(' ')}
//         style={{ fontFamily: 'Barlow, sans-serif' }}
//       >

//         {/* ── Main bar ──────────────────────────────────────────── */}
//         <div
//           className={[
//             'flex items-center justify-between transition-all duration-300',
//             scrolled
//               ? 'w-full px-4 sm:px-8 lg:px-14 py-3 lg:py-4 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] rounded-none gap-4 lg:gap-14'
//               : 'w-[calc(100%-32px)] lg:w-auto mx-auto px-4 sm:px-8 lg:px-10 py-3 lg:py-6 bg-white rounded-3xl gap-4 lg:gap-14',
//           ].join(' ')}
//         >

//           {/* ── Logo ──────────────────────────────────────────── */}
//           <Link href="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
//            <img  className='w-16 h-16'  src="/images/logo2.png" alt="" />
//           </Link>

//           {/* ── Desktop nav ────────────────────────────────────── */}
//           <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
//             {NAV_LINKS.map((item) =>
//               item.hasDropdown ? (
//                 <div key={item.label} className="relative" ref={dropdownRef}>
//                   <button
//                     onClick={() => setDropdownOpen((o) => !o)}
//                     className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap border-none bg-transparent cursor-pointer
//                       ${isActive(item.path) || dropdownOpen ? 'text-[#bb1403]' : 'text-gray-600 hover:text-[#bb1403]'}`}
//                   >
//                     {item.label}
//                     <ChevronDown open={dropdownOpen} />
//                   </button>

//                   {dropdownOpen && (
//                     <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[260px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
//                       <div className="h-[3px] bg-[#bb1403]" />
//                       {/* FIX: fixed max height with scroll */}
//                       <ul className="py-1.5 m-0 p-0 list-none max-h-[340px] overflow-y-auto">
//                         {PRODUCTS_MENU.map((sub) => (
//                           <li key={sub.label}>
//                             <Link
//                               href={sub.path}
//                               className="flex items-center gap-2.5 px-4 py-2.5 text-md font-medium text-gray-600 hover:text-[#bb1403] hover:bg-red-50 no-underline transition-colors"
//                             >
//                               <span className="w-1.5 h-1.5 rounded-full bg-[#bb1403] opacity-40 flex-shrink-0" />
//                               {sub.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.path}
//                   className={`px-3 py-2 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap no-underline
//                     ${isActive(item.path) ? 'text-[#bb1403]' : 'text-gray-600 hover:text-[#bb1403]'}`}
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* ── Right: CTA + hamburger ──────────────────────────── */}
//           <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
//             <Link
//               href="/service-ticket"
//               className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-[#bb1403] hover:bg-[#9e1102] text-white text-sm lg:text-lg font-bold rounded-full transition-colors whitespace-nowrap no-underline shadow-sm"
//             >
//               Service Ticket
//               <ArrowRight />
//             </Link>

//             {/* Hamburger — mobile/tablet only */}
//             <button
//               onClick={() => setMobileOpen((o) => !o)}
//               className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex-shrink-0"
//               aria-label="Toggle menu"
//             >
//               <span className={`block w-[16px] h-0.5 bg-gray-700 rounded transition-transform duration-200 origin-center ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
//               <span className={`block w-[16px] h-0.5 bg-gray-700 rounded transition-opacity duration-150 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
//               <span className={`block w-[16px] h-0.5 bg-gray-700 rounded transition-transform duration-200 origin-center ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile menu — full-screen overlay ─────────────────────
//            Rendered outside the fixed navbar so it truly fills the
//            viewport from top to bottom.                            */}
//       {mobileOpen && (
//         <div
//           className="lg:hidden fixed inset-0 z-[60] flex flex-col bg-white"
//           style={{ fontFamily: 'Barlow, sans-serif' }}
//         >
//           {/* Header row */}
//           <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
//             <Link
//               href="/"
//               onClick={() => setMobileOpen(false)}
//               className="flex items-center gap-2 no-underline"
//             >
//               <div className="w-8 h-8 bg-[#bb1403] rounded-full flex items-center justify-center flex-shrink-0">
//                 <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
//                   <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/>
//                   <circle cx="12" cy="12" r="2" fill="#fff"/>
//                   <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
//                 </svg>
//               </div>
//               <span className="font-extrabold text-base text-[#0d1220] tracking-tight leading-none">
//                 M&amp;M Solution.
//               </span>
//             </Link>
//             <button
//               onClick={() => setMobileOpen(false)}
//               className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
//               aria-label="Close menu"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* Scrollable nav links */}
//           <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-0.5">
//             {NAV_LINKS.map((item) =>
//               item.hasDropdown ? (
//                 <div key={item.label}>
//                   <button
//                     onClick={() => setMobileProdOpen((o) => !o)}
//                     className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-semibold text-gray-700 hover:text-[#bb1403] rounded-lg hover:bg-red-50 transition-colors bg-transparent border-none cursor-pointer"
//                   >
//                     {item.label}
//                     <ChevronDown open={mobileProdOpen} />
//                   </button>
//                   {mobileProdOpen && (
//                     <div className="ml-3 pl-3 pb-1 border-l-2 border-[#bb1403]/20 flex flex-col gap-0.5">
//                       {PRODUCTS_MENU.map((sub) => (
//                         <Link
//                           key={sub.label}
//                           href={sub.path}
//                           className="py-2 text-[14px] text-gray-500 hover:text-[#bb1403] transition-colors no-underline"
//                         >
//                           {sub.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.path}
//                   className={`px-3 py-3 text-[15px] font-semibold rounded-lg transition-colors no-underline
//                     ${isActive(item.path) ? 'text-[#bb1403] bg-red-50' : 'text-gray-700 hover:text-[#bb1403] hover:bg-red-50'}`}
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </div>

//           {/* Sticky bottom CTA */}
//           <div className="flex-shrink-0 px-4 py-4 border-t border-gray-100">
//             <Link
//               href="/service-ticket"
//               className="flex items-center justify-center gap-2 w-full py-3 bg-[#bb1403] hover:bg-[#9e1102] text-white text-[15px] font-bold rounded-full transition-colors no-underline"
//             >
//               Service Ticket
//               <ArrowRight />
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

import { Link, usePage } from '@inertiajs/react'
import React, { useState, useEffect, useRef } from 'react'

const PRODUCTS_MENU = [
  { label: 'Fire Alarm',                                  path: '/products/fire-alarm' },
  { label: 'Access Control',                              path: '/products/access-control' },
  { label: 'Public Address',                              path: '/products/public-address' },
  { label: 'CCTV',                                        path: '/products/cctv' },
  { label: 'Digital Lighting',                            path: '/products/digital-lighting' },
  { label: 'Data Network',                                path: '/products/data-network' },
  { label: 'Grounding ERT',                               path: '/products/grounding-ert' },
  { label: 'Control & Monitor System',                    path: '/products/control-monitor' },
  { label: 'NVC Lighting',                                path: '/products/nvc-lighting' },
  { label: 'Early Detection System',                      path: '/products/early-detection' },
  { label: 'Remote Notification & Monitoring',            path: '/products/remote-monitoring' },
  { label: 'Building Management System',                  path: '/products/bms' },
  { label: 'IoT Customization (RF / GSM / LoRa / WiFi)', path: '/products/iot-customization' },
]

const NAV_LINKS = [
  { label: 'Home',               path: '/' },
  { label: 'About Us',           path: '/about' },
  { label: 'Products',           path: '/products', hasDropdown: true },
  { label: 'Services',           path: '/services' },
  { label: 'Clients & Projects', path: '/clients-projects' },
  { label: 'Contact Us',         path: '/contact' },
]

const ChevronDown = ({ open }) => (
  <svg
    className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function Navbar() {
  const [dropdownOpen,   setDropdownOpen]   = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [mobileProdOpen, setMobileProdOpen] = useState(false)
  const [scrolled,       setScrolled]       = useState(false)
  const dropdownRef = useRef(null)
  const { url } = usePage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    setDropdownOpen(false)
    setMobileOpen(false)
    setMobileProdOpen(false)
  }, [url])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (path) =>
    path === '/' ? url === '/' : url.startsWith(path)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800&display=swap"
        rel="stylesheet"
      />

      {/* ── Fixed outer wrapper ─────────────────────────────────── */}
      <div
        className={[
          'fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300',
          !scrolled ? 'pt-4 lg:pt-10' : 'pt-0',
        ].join(' ')}
        style={{ fontFamily: 'Barlow, sans-serif' }}
      >

        {/* ── Main bar ──────────────────────────────────────────── */}
        <div
          className={[
            'flex items-center justify-between transition-all duration-300',
            scrolled
              ? 'w-full px-4 sm:px-8 lg:px-14 py-3 lg:py-4 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] rounded-none gap-4 lg:gap-14'
              : 'w-[calc(100%-32px)] lg:w-auto mx-auto px-4 sm:px-8 lg:px-10 py-3 lg:py-6 bg-white rounded-3xl gap-4 lg:gap-14',
          ].join(' ')}
        >

          {/* ── Logo ──────────────────────────────────────────── */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#bb1403] rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 lg:w-5 lg:h-5">
                <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="#fff"/>
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-extrabold text-base lg:text-xl text-[#0d1220] tracking-tight leading-none">
              Micro&amp;Mega
            </span>
          </Link>

          {/* ── Desktop nav ────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
            {NAV_LINKS.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap border-none bg-transparent cursor-pointer
                      ${isActive(item.path) || dropdownOpen ? 'text-[#bb1403]' : 'text-gray-600 hover:text-[#bb1403]'}`}
                  >
                    {item.label}
                    <ChevronDown open={dropdownOpen} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[260px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      <div className="h-[3px] bg-[#bb1403]" />
                      {/* FIX: fixed max height with scroll */}
                      <ul className="py-1.5 m-0 p-0 list-none max-h-[340px] overflow-y-auto">
                        {PRODUCTS_MENU.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.path}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-md font-medium text-gray-600 hover:text-[#bb1403] hover:bg-red-50 no-underline transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#bb1403] opacity-40 flex-shrink-0" />
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-3 py-2 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap no-underline
                    ${isActive(item.path) ? 'text-[#bb1403]' : 'text-gray-600 hover:text-[#bb1403]'}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Right: CTA + hamburger ──────────────────────────── */}
          <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
            <Link
              href="/service-ticket"
              className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-[#bb1403] hover:bg-[#9e1102] text-white text-sm lg:text-lg font-bold rounded-full transition-colors whitespace-nowrap no-underline shadow-sm"
            >
              Service Ticket
              <ArrowRight />
            </Link>

            {/* Hamburger — mobile/tablet only */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex-shrink-0"
              aria-label="Toggle menu"
            >
              <span className={`block w-[16px] h-0.5 bg-gray-700 rounded transition-transform duration-200 origin-center ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-[16px] h-0.5 bg-gray-700 rounded transition-opacity duration-150 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-[16px] h-0.5 bg-gray-700 rounded transition-transform duration-200 origin-center ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu — full-screen overlay ─────────────────────
           Rendered outside the fixed navbar so it truly fills the
           viewport from top to bottom.                            */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] flex flex-col bg-white"
          style={{ fontFamily: 'Barlow, sans-serif' }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#bb1403] rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 lg:w-5 lg:h-5">
                <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="#fff"/>
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-extrabold text-base lg:text-xl text-[#0d1220] tracking-tight leading-none">
              Micro&amp;Mega
            </span>
          </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Scrollable nav links */}
          <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-0.5">
            {NAV_LINKS.map((item) =>
              item.hasDropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileProdOpen((o) => !o)}
                    className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-semibold text-gray-700 hover:text-[#bb1403] rounded-lg hover:bg-red-50 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown open={mobileProdOpen} />
                  </button>
                  {mobileProdOpen && (
                    <div className="ml-3 pl-3 pb-1 border-l-2 border-[#bb1403]/20 flex flex-col gap-0.5">
                      {PRODUCTS_MENU.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.path}
                          className="py-2 text-[14px] text-gray-500 hover:text-[#bb1403] transition-colors no-underline"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-3 py-3 text-[15px] font-semibold rounded-lg transition-colors no-underline
                    ${isActive(item.path) ? 'text-[#bb1403] bg-red-50' : 'text-gray-700 hover:text-[#bb1403] hover:bg-red-50'}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Sticky bottom CTA */}
          <div className="flex-shrink-0 px-4 py-4 border-t border-gray-100">
            <Link
              href="/service-ticket"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#bb1403] hover:bg-[#9e1102] text-white text-[15px] font-bold rounded-full transition-colors no-underline"
            >
              Service Ticket
              <ArrowRight />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}