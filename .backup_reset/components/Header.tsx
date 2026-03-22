'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/areas/montgomery-village' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white shadow-md h-[64px]'
            : 'bg-transparent h-[72px]'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full 
          flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Prime Green Landscape LLC"
              width={130}
              height={42}
              priority
              className="object-contain"
              style={{ height: '42px', width: 'auto' }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200
                  ${scrolled
                    ? 'text-gray-700 hover:text-green-700'
                    : 'text-white hover:text-green-200'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+15714050031"
              className={`text-sm font-medium flex items-center gap-1.5
                transition-colors duration-200
                ${scrolled ? 'text-green-800' : 'text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" 
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 
                  4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 
                  0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 
                  1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 
                  21 3 14.284 3 6V5z" />
              </svg>
              (571) 405-0031
            </a>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md text-sm font-semibold
                transition-all duration-200
                ${scrolled
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-white text-green-800 hover:bg-green-50'
                }`}
            >
              Get Free Quote
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors
              ${scrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" 
                  strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" 
                  strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div className="fixed top-[64px] left-0 right-0 z-40 bg-white 
          shadow-lg border-t border-gray-100 md:hidden">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-100 text-gray-800 
                  font-medium text-base hover:text-green-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-4 flex flex-col gap-3">
              <a
                href="tel:+15714050031"
                className="text-green-700 font-semibold text-base 
                  flex items-center gap-2"
              >
                📞 (571) 405-0031
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-green-600 text-white text-center 
                  py-3 rounded-md font-semibold"
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
