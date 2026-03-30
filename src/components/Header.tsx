'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const cities = [
  { name: 'Montgomery Village', slug: 'montgomery-village' },
  { name: 'Gaithersburg',       slug: 'gaithersburg' },
  { name: 'Rockville',          slug: 'rockville' },
  { name: 'Germantown',         slug: 'germantown' },
  { name: 'Bethesda',           slug: 'bethesda' },
  { name: 'Silver Spring',      slug: 'silver-spring' },
]

export default function Header() {
  const [scrolled,        setScrolled]        = useState(false)
  const [menuOpen,        setMenuOpen]        = useState(false)
  const [areasOpen,       setAreasOpen]       = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)

  const areasRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Exact-match active state — never matches on nested routes
  const isActive = (href: string) => pathname === href

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close mobile menu on pathname change
  useEffect(() => {
    setMenuOpen(false)
    setAreasOpen(false)
    setMobileAreasOpen(false)
  }, [pathname])

  const bg = scrolled ? 'bg-white/97 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'

  const navLinkClass = (href: string) =>
    `text-sm font-semibold transition-all duration-200 px-1 py-0.5 rounded ${
      isActive(href)
        ? 'text-green-700 border-b-2 border-green-600'
        : 'text-gray-600 hover:text-green-700 border-b-2 border-transparent'
    }`

  const mobileLinkClass = (href: string) =>
    `py-3.5 border-b border-gray-100 font-semibold text-sm transition-colors flex items-center justify-between ${
      isActive(href) ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
    }`

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 h-[72px] flex items-center transition-all duration-300 ${bg}`}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Prime Green Landscape — Home">
            <Image
              src="/images/logo.png"
              alt="Prime Green Landscape LLC"
              width={170}
              height={56}
              priority
              className="object-contain"
              style={{ height: 52, width: 'auto' }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">

            <Link href="/services" className={navLinkClass('/services')}>
              Services
            </Link>

            {/* Areas Dropdown */}
            <div className="relative" ref={areasRef}>
              <button
                onClick={() => setAreasOpen(o => !o)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setAreasOpen(false)
                }}
                aria-expanded={areasOpen}
                aria-haspopup="menu"
                aria-controls="areas-dropdown-menu"
                id="areas-dropdown-button"
                className="flex items-center gap-1 text-sm font-semibold transition-all duration-200 text-gray-600 hover:text-green-700 border-b-2 border-transparent px-1 py-0.5 rounded"
              >
                Areas
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {areasOpen && (
                <div
                  id="areas-dropdown-menu"
                  role="menu"
                  aria-labelledby="areas-dropdown-button"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setAreasOpen(false)
                      document.getElementById('areas-dropdown-button')?.focus()
                    }
                  }}
                >
                  <div className="px-4 py-3 bg-green-50 border-b border-green-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-700">📍 Service Areas</p>
                    <p className="text-xs text-green-600 mt-0.5">Montgomery County, MD</p>
                  </div>
                  <div className="py-1.5" role="none">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/areas/${city.slug}`}
                        role="menuitem"
                        onClick={() => setAreasOpen(false)}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            setAreasOpen(false)
                            document.getElementById('areas-dropdown-button')?.focus()
                          }
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 group-hover:bg-green-600 transition-colors flex-shrink-0" aria-hidden="true"/>
                        <span className="text-sm text-gray-700 group-hover:text-green-800 font-medium">
                          {city.name}
                        </span>
                        <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-green-500 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                    <Link
                      href="/contact"
                      role="menuitem"
                      onClick={() => setAreasOpen(false)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setAreasOpen(false)
                          document.getElementById('areas-dropdown-button')?.focus()
                        }
                      }}
                      className="text-xs font-bold text-green-700 hover:text-green-900 flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                      Get a free quote in your area
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={navLinkClass('/about')}>About</Link>
            <Link href="/blog"  className={navLinkClass('/blog')}>Blog</Link>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="sms:+15714050031?body=Hello%2C%20I%27d%20like%20a%20free%20quote"
              aria-label="Text us at (571) 405-0031"
              className="text-sm font-semibold text-green-800 hover:text-green-600 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              (571) 405-0031
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden p-2 text-gray-700 hover:text-green-700 transition-colors rounded-lg"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            }
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed top-[72px] inset-x-0 z-40 bg-white shadow-xl border-t border-gray-100 md:hidden max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="flex flex-col px-5 py-2" aria-label="Mobile navigation">

            <Link href="/services" onClick={() => setMenuOpen(false)} className={mobileLinkClass('/services')}>
              Services
            </Link>

            {/* Mobile Areas — expandable */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileAreasOpen(o => !o)}
                className="w-full flex items-center justify-between py-3.5 text-gray-700 font-semibold text-sm"
              >
                Service Areas
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {mobileAreasOpen && (
                <div className="pb-3 pl-3 grid grid-cols-2 gap-1">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/areas/${city.slug}`}
                      onClick={() => { setMobileAreasOpen(false); setMenuOpen(false) }}
                      className="flex items-center gap-2 py-2.5 text-sm text-green-800 font-medium hover:text-green-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"/>
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setMenuOpen(false)} className={mobileLinkClass('/about')}>About</Link>
            <Link href="/blog"  onClick={() => setMenuOpen(false)} className={mobileLinkClass('/blog')}>Blog</Link>

            <div className="pt-5 pb-6 flex flex-col gap-3">
              <a
                href="sms:+15714050031?body=Hello%2C%20I%27d%20like%20a%20free%20quote"
                className="text-green-700 font-bold text-sm flex gap-2 items-center"
              >
                💬 Text: (571) 405-0031
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-green-600 text-white text-center py-3.5 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors shadow-sm"
              >
                Get Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
