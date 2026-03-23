import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#bb1403] text-white shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:bg-[#9e1102] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bb1403]/40 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'pointer-events-none opacity-0 translate-y-2'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export default ScrollToTop
