import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, ShieldCheck, Leaf, Clock, CreditCard, ChevronDown, MapPin, Star, Target, Sprout, Home as HomeIcon, Scissors, Droplets, TreeDeciduous } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Residential Lawn Mowing | Montgomery County, MD",
  description: "Elite residential lawn mowing in Montgomery County, MD. Professional push mower service for a healthier, greener lawn. Serving Gaithersburg, Rockville, Germantown, Bethesda, Silver Spring, and Montgomery Village.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Professional Residential Lawn Mowing | Montgomery County, MD',
    description: 'Premium push mower lawn care, mulching, edging, and seasonal cleanup in Montgomery County, Maryland.',
    images: [{
      url: `${siteConfig.url}/images/home/premium-lawn-mowing-montgomery-county-md-home-hero.webp`,
      width: 1600,
      height: 900,
      alt: 'Prime Green Landscape LLC premium lawn mowing in Montgomery County, Maryland',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteConfig.url}/images/home/premium-lawn-mowing-montgomery-county-md-home-hero.webp`],
  },
};

const faqs = [
  { question: "Why do you only use push mowers?", answer: "Push mowers prevent the heavy soil compaction caused by 1,000lb riding mowers, which can choke roots and thin your lawn. They also offer far superior precision for a cleaner finish." },
  { question: "Do you serve my specific city in Montgomery County?", answer: "We currently provide full residential service to Montgomery Village, Gaithersburg, Rockville, Germantown, Bethesda, and Silver Spring." },
  { question: "Are you fully insured?", answer: "Yes, Prime Green Landscape LLC is fully insured and licensed to operate in the State of Maryland, specifically Montgomery County." },
  { question: "What happens if it rains on my service day?", answer: "If heavy rain prevents a quality cut, we automatically move your service to the next available clear day (usually the following day). You'll be notified via text." },
  { question: "How does the pricing/billing work?", answer: "We provide transparent tiered pricing starting at $45. After every visit, you get a Yardbook invoice via email that you can pay securely online in seconds." }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Prime Green Landscape LLC",
      "description": "Professional residential lawn mowing in Montgomery County, MD using push mowers for superior precision and lawn health.",
      "url": "https://primegreenlandscape.com",
      "telephone": "(571) 405-0031",
      "email": "kevin@primegreenlandscape.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montgomery Village",
        "addressRegion": "MD",
        "postalCode": "20879",
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
      "openingHours": "Mo-Sa 07:00-18:00",
      "sameAs": [
        "https://www.facebook.com/PrimeGreenLandscape/",
        "https://www.instagram.com/primegreenmoco/"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const services = [
  {
    title: "BASIC MOW",
    price: "$45",
    bestFor: "Townhomes & small lots under 5,000 sqft",
    features: ["Precision push mower cut", "Perimeter detail walk-through", "Hard surface clipping cleanup", "Ideal for fenced-in backyards"],
    popular: false
  },
  {
    title: "STANDARD CARE",
    price: "$65",
    bestFor: "Average residential lots 5,000–10,000 sqft",
    features: ["Everything in Basic", "Full mechanical edging (walkways & beds)", "Driveway & sidewalk blowdown", "Tall Fescue health optimization"],
    popular: true
  },
  {
    title: "PREMIUM MANICURE",
    price: "$95",
    bestFor: "Large estates or HOA corner lots 10,000+ sqft",
    features: ["Everything in Standard", "Intricate trimming around obstacles", "Ornamental bed border cleanup", "Priority seasonal scheduling", "HOA compliance guarantee"],
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
            src="/images/home/premium-lawn-mowing-montgomery-county-md-home-hero.webp"
            alt="Perfect green lawn"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/55" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 md:pt-36 lg:pt-44 pb-20 md:pb-28">
          <div className="inline-block bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 px-6 py-2 rounded-full mb-6 md:mb-8 transition-transform hover:scale-105 cursor-default">
            <span className="text-white font-bold tracking-widest text-xs md:text-sm uppercase italic leading-none">Montgomery County&apos;s Push Mower Specialists</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-[1.1] mt-2 mb-6 md:mb-8 tracking-tighter">
            Professional Residential Lawn Mowing <br className="hidden lg:block" /> in Montgomery County, MD
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-100 font-light max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed italic opacity-90">
            The Precision of a Push Mower. The Reliability of a Local Team. <br className="hidden md:block" /> Serving Montgomery Village, Gaithersburg, Rockville & More.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-brand-dark font-black rounded-xl hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-lg transform hover:-translate-y-1 active:scale-95">
              Get My Free Quote
            </Link>
            <Link href="/services/lawn-mowing-service-near-me" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-xl hover:bg-white/10 transition-all text-lg active:scale-95 backdrop-blur-sm">
              Lawn Mowing Near Me
            </Link>
          </div>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">Not All Lawn Care Is Created Equal</h2>
            <p className="text-lg text-gray-500 font-medium">Here&apos;s why Montgomery County homeowners prefer push mowers over heavy riding equipment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target,   title: "Precision Cuts",       color: "text-brand-accent",  body: "Push mowers give our crew complete control over every pass. No scalping, no uneven lines, no missed corners. Your lawn looks like it belongs on a magazine cover — every single visit." },
              { icon: Sprout,   title: "Healthier Grass",      color: "text-brand-accent",  body: "Heavy zero-turn riders compact your soil over time, damaging root systems and killing grass from below. Our lightweight push mowers protect soil structure and promote thick, lush growth season after season." },
              { icon: HomeIcon, title: "HOA-Approved Results", color: "text-brand-accent",  body: "Montgomery County HOAs have strict curb appeal standards. Our detail-oriented approach — crisp edges, clean lines, zero debris left behind — keeps your property in full compliance and your neighbors envious." },
            ].map(({ icon: Icon, title, color, body }) => (
              <div key={title} className="p-8 rounded-2xl bg-brand-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-200">
                  <Icon className={`w-7 h-7 ${color} group-hover:text-white`} />
                </div>
                <h3 className="text-xl font-black text-brand-dark mb-3 tracking-tight">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-gray-100 grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 leading-tight tracking-tighter">Expert Local Lawn Care That Protects Your Property</h2>
              <div className="prose prose-lg text-gray-600 space-y-4 font-medium leading-relaxed">
                <p>
                  Montgomery County homeowners understand that curb appeal starts with a healthy, well-manicured lawn. At <strong>Prime Green Landscape LLC</strong>, we specialize in residential lawn care that goes beyond just &quot;cutting the grass.&quot; We focus on the health of your soil and the precision of our finish.
                </p>
                <p>
                  By using professional-grade push mowers, we eliminate the heavy soil compaction caused by massive commercial zero-turns, ensuring your Tall Fescue or Kentucky Bluegrass can breathe and thrive. Whether you are in <strong>Montgomery Village</strong>, <strong>Gaithersburg</strong>, or <strong>Rockville</strong>, our team is dedicated to providing consistent, high-detail service that meets even the strictest HOA standards.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Residential Mowing", "Lawn Care", "Mulching", "Yard Cleanup", "Weed Removal", "Edging"].map(s => (
                  <span key={s} className="bg-brand-bg text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold border border-brand-accent/20 tracking-tight">{s}</span>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl skew-y-1">
              <Image src="/images/home/perfectly-manicured-montgomery-county-lawn.webp" alt="Perfectly manicured Montgomery County lawn" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Services Overview */}
      <section className="py-16 bg-brand-bg border-y border-gray-200 text-center font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">No contracts required. Pay after every service via secure Yardbook invoice. <Link href="/services/lawn-mowing-service-near-me" className="text-brand-mid font-bold hover:underline">Looking for a premium lawn mowing service near me?</Link></p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-12 mt-10 text-left">
            {services.map((service, idx) => (
              <div key={idx} className={`relative bg-white rounded-2xl p-8 shadow-md flex flex-col border-2 ${service.popular ? 'border-brand-mid ring-4 ring-brand-mid/5' : 'border-gray-100'}`}>
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
              </div>
            ))}
          </div>

          {/* GROUPED SEASONAL CARE SECTION */}
          <div className="mt-20 md:mt-24 lg:mt-32 pt-16 pb-20 bg-brand-bg/30 rounded-[3rem] border border-brand-mid/5 px-6 md:px-10 lg:px-12">
            {/* YARDBOOK INFO BANNER */}
            <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-white shadow-sm px-6 py-4 mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-brand-accent" />
              </div>
              <p className="text-neutral-700 text-sm md:text-base leading-snug">
                We bill through <strong className="text-brand-dark">Yardbook</strong> — secure online card payments after each visit. <span className="opacity-60 italic">No cash required.</span>
              </p>
            </div>

            {/* HEADING BLOCK */}
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                Full-Service Seasonal Care
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl mx-auto italic">
                While we are known for our precision mowing, we offer a full suite of services to keep your Montgomery County property pristine year-round. From spring mulching to fall leaf removals, we handle it all.
              </p>
            </div>

            {/* SERVICE CARDS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {[
                { name: "Mulching",          href: "/mulching",          desc: "Eco-Friendly Protection", icon: Leaf },
                { name: "Yard Cleanup",       href: "/yard-cleanup",       desc: "Debris & Leaf Removal",  icon: TreeDeciduous },
                { name: "Weed Removal",       href: "/weed-removal",       desc: "Manual Garden Care",     icon: Sprout },
                { name: "Edging & Trimming", href: "/edging-trimming",    desc: "Border Definition",      icon: Scissors },
                { name: "Seasonal Cleanup",   href: "/seasonal-cleanup",   desc: "Spring & Fall Prep",     icon: Droplets },
              ].map((s, i) => (
                <Link 
                  key={i} 
                  href={s.href} 
                  className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:border-brand-mid/30 transition-all duration-300 min-h-[180px] flex flex-col items-center justify-center text-center group hover:-translate-y-1.5"
                >
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center group-hover:bg-brand-accent transition-all duration-300 mb-4">
                    <s.icon className="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm md:text-base font-black text-neutral-900 mb-1.5 tracking-tight group-hover:text-brand-mid transition-colors">{s.name}</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter">Our Service Area: Montgomery County</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We focus our precision services on a tight geographical area to ensure consistent, reliable scheduling for our residential clients. We proudly serve homeowners across these 6 core cities:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div key={idx} className="group">
                <Link 
                  href={`/areas/${city.name.toLowerCase().replaceAll(" ", "-")}`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Before/After */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter">The Prime Green Difference</h2>
            <p className="text-lg text-gray-500 font-medium">Every property we touch, every single time.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-2xl relative bg-white p-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image 
                src="/images/home/before-overgrown-lawn-montgomery-county.webp"
                alt="Overgrown front lawn before Prime Green service in Montgomery County"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-dark/90 text-white font-bold px-4 py-1.5 rounded-md text-sm shadow-md backdrop-blur-sm">
                BEFORE
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image 
                src="/images/home/after-striped-lawn-montgomery-county.webp"
                alt="Striped front lawn after Prime Green service in Montgomery County"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-accent text-white font-bold px-4 py-1.5 rounded-md text-sm shadow-md">
                AFTER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter">What Our Neighbors Are Saying</h2>
            <p className="text-lg text-gray-500 font-medium">Real feedback from homeowners across Montgomery County, MD.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <p className="text-gray-700 mb-6 italic font-medium leading-relaxed">&quot;The best lawn mowing service in <strong>Montgomery Village</strong>. Prime Green transformed my front yard in under an hour. The push mower cut is SO much cleaner than my last company&apos;s riding mower. My HOA actually complimented me!&quot;</p>
              <div className="font-bold text-brand-dark uppercase tracking-wider text-xs">— Sarah M. | Montgomery Village, MD</div>
            </div>
            <div className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <p className="text-gray-700 mb-6 italic font-medium leading-relaxed">&quot;I was looking for reliable lawn care in <strong>Gaithersburg</strong> and I&apos;m so glad I found them. I love how easy the Yardbook invoice is — I pay from my phone in 10 seconds. No hassle.&quot;</p>
              <div className="font-bold text-brand-dark uppercase tracking-wider text-xs">— David R. | Gaithersburg, MD</div>
            </div>
            <div className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <p className="text-gray-700 mb-6 italic font-medium leading-relaxed">&quot;Reliable, professional, and they actually show up when they say they will. My <strong>Rockville</strong> lawn has never looked better. Best investment for our curb appeal.&quot;</p>
              <div className="font-bold text-brand-dark uppercase tracking-wider text-xs">— Jennifer K. | Rockville, MD</div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 italic">Testimonials from our founding service clients.</p>
        </div>
      </section>

      {/* SECTION 8 - Homepage FAQs */}
      <section className="py-24 bg-brand-bg border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Got Questions? We Have Answers.</h2>
            <p className="text-lg text-gray-600 font-medium italic">Everything Montgomery County homeowners need to know about our service.</p>
          </div>
          <FAQAccordion items={[
            { question: "Why do you only use push mowers?", answer: "Push mowers prevent the heavy soil compaction caused by 1,000lb riding mowers, which can choke roots and thin your lawn. They also offer far superior precision for a cleaner finish." },
            { question: "Do you serve my specific city in Montgomery County?", answer: "We currently provide full residential service to Montgomery Village, Gaithersburg, Rockville, Germantown, Bethesda, and Silver Spring." },
            { question: "Are you fully insured?", answer: "Yes, Prime Green Landscape LLC is fully insured and licensed to operate in the State of Maryland, specifically Montgomery County." },
            { question: "What happens if it rains on my service day?", answer: "If heavy rain prevents a quality cut, we automatically move your service to the next available clear day (usually the following day). You'll be notified via text." },
            { question: "How does the pricing/billing work?", answer: "We provide transparent tiered pricing starting at $45. After every visit, you get a Yardbook invoice via email that you can pay securely online in seconds." }
          ]} />
        </div>
      </section>

      {/* SECTION 9 - Final CTA */}
      <section className="bg-brand-dark py-20 border-t border-brand-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready for the Best Lawn on Your Block?</h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10">
            Get your free quote in under 2 minutes. We respond within 2 hours.
          </p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-brand-dark font-extrabold rounded-md hover:bg-gray-100 transition-colors shadow-lg text-lg transform hover:scale-105 transition-transform duration-300">
            Request My Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
