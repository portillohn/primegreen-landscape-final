import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, ShieldCheck, Leaf, Clock, CreditCard, ChevronDown, MapPin, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime Green Landscape LLC | Residential Lawn Mowing in Montgomery County",
  description: "Professional residential lawn mowing in Montgomery County, MD using push mowers for superior precision, clean edges, and lawn health.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prime Green Landscape LLC",
  "description": "Professional residential lawn mowing in Montgomery County, MD using push mowers for superior precision and lawn health.",
  "url": "https://primegreenlandscape.com",
  "telephone": "(571) 405-0031",
  "email": "kevin@primegreenlandscape.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Montgomery Village",
    "addressLocality": "Montgomery Village",
    "addressRegion": "MD",
    "postalCode": "20886",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.1754,
    "longitude": -77.2011
  },
  "areaServed": [
    "Montgomery Village", "Gaithersburg", "Rockville", 
    "Germantown", "Bethesda", "Silver Spring"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-19:00",
  "sameAs": [
    "https://www.facebook.com/PrimeGreenLandscape/",
    "https://www.instagram.com/primegreenmoco/"
  ]
};

const services = [
  {
    title: "BASIC MOW",
    price: "$45",
    bestFor: "Small properties under 5,000 sqft",
    features: ["Push mower lawn mowing", "Perimeter walk-through", "Clipping cleanup"],
    popular: false
  },
  {
    title: "STANDARD CARE",
    price: "$65",
    bestFor: "Average residential lots 5,000–10,000 sqft",
    features: ["Everything in Basic", "Full edging (walkways, driveway, beds)", "Sidewalk & driveway blowdown"],
    popular: true
  },
  {
    title: "PREMIUM MANICURE",
    price: "$95",
    bestFor: "Large properties or HOA front yards 10,000+ sqft",
    features: ["Everything in Standard", "Detail trimming around all obstacles", "Bed border cleanup", "Priority scheduling"],
    popular: false
  }
];

const cities = [
  { name: "Montgomery Village", tag: "Our Hometown" },
  { name: "Gaithersburg", tag: "Precision Lawn Care" },
  { name: "Rockville", tag: "HOA Compliant Results" },
  { name: "Germantown", tag: "Protecting Soil Health" },
  { name: "Bethesda", tag: "Premium Lawn Mowing" },
  { name: "Silver Spring", tag: "Detail-Oriented Service" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* SECTION 1 - Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/hero.png"
            alt="Perfect green lawn"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/55" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-4xl mx-auto leading-tight mb-6 tracking-tight">
              Montgomery County&apos;s Push Mower Specialists
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-10">
              Premium residential lawn care for homeowners who demand precision. Serving Montgomery Village, Gaithersburg, Rockville & beyond.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-dark font-bold rounded-md hover:bg-gray-100 transition-colors shadow-lg text-lg">
              Get My Free Quote
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-accent text-white font-bold rounded-md hover:bg-brand-accent transition-colors shadow-lg text-lg">
              See Our Services
            </Link>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white">
          <ChevronDown className="w-8 h-8 opacity-75" />
        </div>
      </section>

      {/* SECTION 2 - Trust Bar */}
      <section className="bg-gray-100 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-medium text-brand-dark">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Fully Insured & Licensed</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Leaf className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Push Mowers Only — No Soil Damage</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Clock className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Free Quote Within 2 Hours</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <CreditCard className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Easy Online Payments via Yardbook</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Why Push Mowers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Not All Lawn Care Is Created Equal</h2>
            <p className="text-lg text-gray-600">Here&apos;s why Montgomery County homeowners prefer push mowers over heavy riding equipment.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">
            <FadeIn delay={0.1} className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Precision Cuts</h3>
              <p className="text-gray-600 leading-relaxed">
                Push mowers give our crew complete control over every pass. No scalping, no uneven lines, no missed corners. Your lawn looks like it belongs on a magazine cover — every single visit.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Healthier Grass</h3>
              <p className="text-gray-600 leading-relaxed">
                Heavy zero-turn riders compact your soil over time, damaging root systems and killing grass from below. Our lightweight push mowers protect soil structure and promote thick, lush growth season after season.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">HOA-Approved Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Montgomery County HOAs have strict curb appeal standards. Our detail-oriented approach — crisp edges, clean lines, zero debris left behind — keeps your property in full compliance and your neighbors envious.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Services Overview */}
      <section className="py-16 bg-brand-bg border-y border-gray-200 text-center font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">No contracts required. Pay after every service via Yardbook online invoice.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 mb-12 mt-10 text-left">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className={`relative bg-white rounded-2xl p-8 shadow-md flex flex-col border-2 ${service.popular ? 'border-brand-mid ring-4 ring-brand-mid/5' : 'border-gray-100'}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-mid text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-lg z-20">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-black text-brand-dark mb-2 tracking-tight">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-brand-mid">{service.price}</span>
                  <span className="text-gray-500 text-sm font-medium">/visit</span>
                </div>
                <p className="text-sm font-semibold text-brand-dark mb-6 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                  Best for: {service.bestFor}
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-mid shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-extrabold transition-all duration-300 shadow-sm hover:shadow-md ${service.popular ? 'bg-brand-mid text-white hover:bg-brand-dark' : 'bg-gray-50 text-brand-dark border border-gray-200 hover:bg-gray-100'}`}>
                  Get Quote
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="text-center text-sm text-gray-500 bg-white inline-block mx-auto max-w-2xl px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-3 mb-16">
            <span className="text-xl">💳</span>
            <p>We bill through <strong>Yardbook</strong> — you pay securely online by card after each visit. No cash needed. Tips always appreciated! 😊</p>
          </FadeIn>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-10 tracking-tight">More Than Just Mowing</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Mulching", href: "/mulching" },
                { name: "Yard Cleanup", href: "/yard-cleanup" },
                { name: "Weed Removal", href: "/weed-removal" },
                { name: "Edging & Trimming", href: "/edging-trimming" },
                { name: "Seasonal Cleanup", href: "/seasonal-cleanup" },
              ].map((s, i) => (
                <Link key={i} href={s.href} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-accent transition-all font-bold text-brand-dark flex flex-col items-center gap-3 group">
                  <div className="w-10 h-10 bg-brand-bg rounded-lg flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Check className="w-5 h-5" />
                  </div>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Proudly Serving 6 Cities in Montgomery County</h2>
            <p className="text-lg text-gray-600">We keep our service area tight so we can provide consistent, reliable scheduling.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up" className="group">
                <Link 
                  href={`/areas/${city.name.toLowerCase().replace(" ", "-")}`}
                  className="block bg-brand-dark rounded-xl p-8 hover:bg-brand-light transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500 ease-out" />
                  <MapPin className="w-8 h-8 text-brand-accent mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold text-white mb-1">{city.name} <span className="text-brand-accent text-sm font-medium ml-1">MD</span></h3>
                  <p className="text-gray-300 text-sm mb-6">{city.tag}</p>
                  <div className="flex items-center text-brand-accent font-semibold group-hover:text-white transition-colors text-sm">
                    Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Before/After */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">The Prime Green Difference</h2>
            <p className="text-lg text-gray-600">Every property we touch gets this treatment. Every single time.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-2xl relative bg-white p-4">
            <FadeIn direction="left" delay={0.1} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image 
                src="/images/before.png"
                alt="Overgrown lawn Before"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-dark/90 text-white font-bold px-4 py-1.5 rounded-md text-sm shadow-md backdrop-blur-sm">
                BEFORE
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image 
                src="/images/after.png"
                alt="Perfect lawn After"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-accent text-white font-bold px-4 py-1.5 rounded-md text-sm shadow-md">
                AFTER
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">What Our Neighbors Are Saying</h2>
            <p className="text-lg text-gray-600">Real feedback from actual homeowners in Montgomery County.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <FadeIn delay={0.1} className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;Prime Green transformed my front yard in under an hour. The push mower cut is SO much cleaner than my last company&apos;s riding mower. My HOA actually complimented me!&quot;</p>
              <div className="font-bold text-brand-dark">— Sarah M., Montgomery Village</div>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;I love how easy the Yardbook invoice is — I pay from my phone in 10 seconds. No checks, no cash, no hassle. Highly recommend!&quot;</p>
              <div className="font-bold text-brand-dark">— David R., Gaithersburg</div>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;Reliable, professional, and they actually show up when they say they will. My lawn has never looked better. Worth every penny.&quot;</p>
              <div className="font-bold text-brand-dark">— Jennifer K., Rockville</div>
            </FadeIn>
          </div>
          <p className="text-center text-sm text-gray-400 italic">Testimonials from our founding service clients.</p>
        </div>
      </section>

      {/* SECTION 8 - Final CTA */}
      <section className="bg-brand-dark py-20 border-t border-brand-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready for the Best Lawn on Your Block?</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-300 font-light mb-10">
              Get your free quote in under 2 minutes. We respond within 2 hours.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact" className="inline-block px-10 py-5 bg-white text-brand-dark font-extrabold rounded-md hover:bg-gray-100 transition-colors shadow-lg text-lg transform hover:scale-105 transition-transform duration-300">
              Request My Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
