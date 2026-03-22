'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const cities = [
  { name: 'Montgomery Village', slug: 'montgomery-village' },
  { name: 'Gaithersburg',       slug: 'gaithersburg' },
  { name: 'Rockville',          slug: 'rockville' },
  { name: 'Germantown',         slug: 'germantown' },
  { name: 'Bethesda',           slug: 'bethesda' },
  { name: 'Silver Spring',      slug: 'silver-spring' },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  
  const areasRef = useRef<HTMLDivElement>(null)

  // We keep the scrolled state for the shadow effect but the background is always white
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (areasRef.current && 
          !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const bg = scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 h-20 
        flex items-center transition-all duration-300 ${bg}`}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8
          flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logo.png"
              alt="Prime Green Landscape LLC"
              width={180}
              height={60}
              priority
              className="object-contain"
              style={{ height: 60, width: 'auto' }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7">

            {/* Services */}
            <Link href="/services"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-green-700">
              Services
            </Link>

            {/* Areas DROPDOWN */}
            <div className="relative" ref={areasRef}>
              <button
                onClick={() => setAreasOpen(o => !o)}
                className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 hover:text-green-700">
                Areas
                <svg
                  className={`w-4 h-4 transition-transform duration-200
                    ${areasOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Dropdown Panel */}
              {areasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2
                  mt-3 w-56 bg-white rounded-2xl shadow-xl border
                  border-gray-100 overflow-hidden z-50">
                  
                  {/* Header of dropdown */}
                  <div className="px-4 py-3 bg-green-50 border-b
                    border-green-100">
                    <p className="text-xs font-bold uppercase tracking-wider
                      text-green-700">
                      📍 Service Areas
                    </p>
                    <p className="text-xs text-green-600 mt-0.5">
                      Montgomery County, MD
                    </p>
                  </div>

                  {/* City links */}
                  <div className="py-2">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/areas/${city.slug}`}
                        onClick={() => setAreasOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5
                          hover:bg-green-50 transition-colors group">
                        <span className="w-1.5 h-1.5 rounded-full
                          bg-green-400 group-hover:bg-green-600
                          transition-colors flex-shrink-0"/>
                        <span className="text-sm text-gray-700
                          group-hover:text-green-800 font-medium">
                          {city.name}
                        </span>
                        <svg className="w-3.5 h-3.5 text-gray-300
                          group-hover:text-green-500 ml-auto transition-colors"
                          fill="none" stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="px-4 py-3 bg-gray-50 border-t
                    border-gray-100">
                    <Link
                      href="/contact"
                      onClick={() => setAreasOpen(false)}
                      className="text-xs font-semibold text-green-700
                        hover:text-green-900 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"/>
                      </svg>
                      Get a free quote in your area
                    </Link>
                  </div>

                </div>
              )}
            </div>

            {/* About */}
            <Link href="/about"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-green-700">
              About
            </Link>

            {/* Blog */}
            <Link href="/blog"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-green-700">
              Blog
            </Link>

          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="sms:+15714050031?body=Hello%2C%20I%27d%20like%20a%20free%20quote"
              aria-label="Send SMS to (571) 405-0031"
              className="text-sm font-semibold transition-colors flex items-center gap-1.5 text-green-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h6m-6 4h8M21 12.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.9-12.3A8.38 8.38 0 0112 4.1"/>
              </svg>
              Text Us (571) 405-0031
            </a>
            <Link href="/contact"
              className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 bg-green-600 text-white hover:bg-green-700">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(o => !o)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Menu">
            {menuOpen
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            }
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed top-20 inset-x-0 z-40 bg-white
          shadow-lg border-t border-gray-100 md:hidden">
          <nav className="flex flex-col px-5 py-3">
            <Link href="/services"
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-gray-100
                text-gray-800 font-medium hover:text-green-700">
              Services
            </Link>
            
            {/* Mobile Areas — expandable */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileAreasOpen(o => !o)}
                className="w-full flex items-center justify-between
                  py-3 px-2 text-gray-800 font-medium">
                Service Areas
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform
                    ${mobileAreasOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {mobileAreasOpen && (
                <div className="pb-2 pl-4">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/areas/${city.slug}`}
                      onClick={() => {
                        setMobileAreasOpen(false)
                        setMenuOpen(false)
                      }}
                      className="flex items-center gap-2 py-2.5
                        text-sm text-green-800 font-medium
                        hover:text-green-600">
                      <span className="w-1.5 h-1.5 rounded-full
                        bg-green-400"/>
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-gray-100
                text-gray-800 font-medium hover:text-green-700">
              About
            </Link>
            <Link href="/blog"
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-gray-100
                text-gray-800 font-medium hover:text-green-700">
              Blog
            </Link>

            <div className="pt-4 pb-4 flex flex-col gap-3">
              <a href="sms:+15714050031?body=Hello%2C%20I%27d%20like%20a%20free%20quote"
                aria-label="Send SMS to (571) 405-0031"
                className="text-green-700 font-semibold flex gap-2 items-center">
                💬 (571) 405-0031
              </a>
              <Link href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-green-600 text-white text-center
                  py-3 rounded-md font-semibold">
                Get Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
