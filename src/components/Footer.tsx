import Link from 'next/link'
import { MapPin, Leaf, ShieldCheck, Clock, Mail, Star } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

const quickLinks = [
  { label: 'Home',           href: '/' },
  { label: 'Services',       href: '/services' },
  { label: 'About Us',       href: '/about' },
  { label: 'Blog',           href: '/blog' },
  { label: 'Contact',        href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms',          href: '/terms' },
]

const services = [
  { label: 'Lawn Mowing',       href: '/services/lawn-mowing-service-near-me' },
  { label: 'Mulching',          href: '/mulching' },
  { label: 'Yard Cleanup',      href: '/yard-cleanup' },
  { label: 'Weed Removal',      href: '/weed-removal' },
  { label: 'Edging & Trimming', href: '/edging-trimming' },
  { label: 'Seasonal Cleanup',  href: '/seasonal-cleanup' },
]

const cities = [
  { name: 'Montgomery Village', slug: 'montgomery-village' },
  { name: 'Gaithersburg',       slug: 'gaithersburg' },
  { name: 'Rockville',          slug: 'rockville' },
  { name: 'Germantown',         slug: 'germantown' },
  { name: 'Bethesda',           slug: 'bethesda' },
  { name: 'Silver Spring',      slug: 'silver-spring' },
]

const trustItems = [
  { icon: ShieldCheck, label: 'Fully Insured & Licensed' },
  { icon: Leaf,        label: 'Push Mowers Only' },
  { icon: Clock,       label: '2-Hour Quote Response' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <p className="text-base font-black tracking-wide mb-1 text-white">
              Prime Green Landscape LLC
            </p>
            <p className="text-brand-accent text-sm font-medium mb-3 italic">
              Precision You Can See. Quality You Can Trust.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Push mower specialists serving residential properties across Montgomery County, MD since {siteConfig.serviceSinceYear}.
            </p>

            {/* Trust badges */}
            <div className="space-y-2 mb-6">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-gray-300">
                  <Icon className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/PrimeGreenLandscape/" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:bg-brand-accent hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/primegreenmoco/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:bg-brand-accent hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand-accent mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand-accent mb-4">Our Services</p>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-xs font-black uppercase tracking-widest text-brand-accent mb-3">Service Areas</p>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-2">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/areas/${city.slug}`}
                      className="text-xs text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0"/>
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4 — Contact / CTA */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-brand-accent mb-4">Get In Touch</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:kevin@primegreenlandscape.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                  kevin@primegreenlandscape.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Montgomery County, MD
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Mon–Sat, 7:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            {/* Google Rating */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-5">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-gray-300 leading-snug">
                Trusted by homeowners across Montgomery County.
              </p>
            </div>

            <Link href="/contact"
              className="block w-full text-center py-3 bg-brand-accent hover:bg-brand-mid text-white font-bold text-sm rounded-xl transition-all shadow-lg">
              Get a Free Quote
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-4 md:px-8 py-5 pb-24 md:pb-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Prime Green Landscape LLC. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms"   className="hover:text-white transition-colors">Terms</Link>
          <span>Montgomery County, Maryland</span>
        </div>
      </div>

    </footer>
  )
}
