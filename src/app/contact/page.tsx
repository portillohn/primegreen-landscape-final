import { Metadata } from 'next'
import ContactForm from './ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Us | Free Lawn Care Quote',
  description: 'Request your free residential lawn care quote in Montgomery County. We respond within 2 hours. Serving Gaithersburg, Rockville, and Montgomery Village.',
  alternates: { canonical: '/contact' },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Prime Green Landscape LLC",
  "description": "Get a free quote for professional push mower lawn care in Montgomery County, MD.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://primegreenlandscape.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://primegreenlandscape.com/contact"
      }
    ]
  }
};

export default function ContactPage() {
  const lbl = `block text-sm font-semibold text-gray-700 mb-1.5`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
          
          <div className="max-w-3xl mx-auto text-center mt-12">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
              Get Your Free Lawn Care Quote
            </h1>
            <p className="text-brand-accent text-lg">
              5-second form · We call you back · No obligation
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8
          grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* FORM — handled by client component */}
          <ContactForm />

          {/* SIDEBAR */}
          <div className="flex flex-col gap-4">

            {/* Phone CTA */}
            <a href="sms:+15714050031?body=Hello%2C%20I%27d%20like%20a%20free%20quote"
              aria-label="Send SMS to (571) 405-0031"
              className="flex items-center gap-4 bg-brand-accent
                hover:bg-brand-mid text-white rounded-2xl p-5
                transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full
                flex-shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0
                    01.948.684l1.498 4.493a1 1 0 01-.502
                    1.21l-2.257 1.13a11.042 11.042 0 005.516
                    5.516l1.13-2.257a1 1 0 011.21-.502l4.493
                    1.498a1 1 0 01.684.949V19a2 2 0 01-2
                    2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs opacity-80">
                  Prefer to call or text?
                </p>
                <p className="text-xl font-black">
                  💬 (571) 405-0031
                </p>
              </div>
            </a>

            {/* Info */}
            <div className="bg-white rounded-2xl border
              border-gray-100 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase
                tracking-wider text-gray-500">
                Contact Info
              </h3>
              {([
                ['✉️','Email',
                 'kevin@primegreenlandscape.com',
                 'mailto:kevin@primegreenlandscape.com'],
                ['🕐','Hours','Mon–Sat: 7AM – 6PM', null],
                ['📍','Area','Montgomery County, MD', null],
                ['💳','Billing','Online via Yardbook', null],
              ] as const).map(([icon,label,val,href]) => (
                <div key={label} className="flex gap-3">
                  <span className="text-base mt-0.5">{icon}</span>
                  <div>
                    <p className="text-xs text-gray-400">{label}</p>
                    {href
                      ? <a href={href}
                          className="text-sm font-semibold
                            text-brand-mid hover:underline break-all">
                          {val}
                        </a>
                      : <p className="text-sm font-semibold
                          text-gray-800">{val}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Cities */}
            <div className="bg-white rounded-2xl border
              border-gray-100 shadow-sm p-6">
              <h3 className="text-xs font-bold uppercase
                tracking-wider text-gray-500 mb-4">
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Montgomery Village','Gaithersburg','Rockville',
                  'Germantown','Bethesda','Silver Spring'
                ].map(c => (
                  <span key={c} className="text-xs font-semibold
                    bg-brand-bg text-brand-dark border
                    border-brand-accent/20 rounded-full px-3 py-1.5">
                    {c}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
