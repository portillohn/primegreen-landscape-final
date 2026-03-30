import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Check, ClipboardList, Home, ShieldCheck, ThumbsUp, Wallet, ChevronRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Lawn Care & Mowing Services | Montgomery County, MD",
  description: "Elite residential lawn care in Montgomery County, MD. Professional push mower service, mulching, weed removal, edging, and yard cleanups. Transparent tiered pricing.",
  openGraph: {
    images: [{
      url: `${siteConfig.url}/images/services/professional-lawn-care-services-montgomery-county.webp`,
      width: 1600,
      height: 900,
      alt: 'Prime Green Landscape lawn care services in Montgomery County, Maryland',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteConfig.url}/images/services/professional-lawn-care-services-montgomery-county.webp`],
  },
};

const serviceTiers = [
  {
    title: "BASIC MOW",
    price: "$45",
    bestFor: "Townhomes & small lots under 5,000 sqft",
    time: "30–45 min",
    idealFor: "Homeowners with smaller fenced yards looking for reliable weekly cuts without heavy equipment damage.",
    features: ["Precision push mower cut", "Perimeter detail walk-through", "Hard surface clipping cleanup", "Perfect for narrow gates"],
    popular: false
  },
  {
    title: "STANDARD CARE",
    price: "$65",
    bestFor: "Average residential lots 5,000–10,000 sqft",
    time: "45–60 min",
    idealFor: "The ideal balance for most Montgomery County homes. Includes full mechanical edging for that razor-sharp look.",
    features: ["Everything in Basic", "Full mechanical edging (walkways & beds)", "Driveway & sidewalk blowdown", "Tall Fescue health optimization"],
    popular: true
  },
  {
    title: "PREMIUM MANICURE",
    price: "$95",
    bestFor: "Large estates or HOA corner lots 10,000+ sqft",
    time: "60–90 min",
    idealFor: "Homes in strict HOAs requiring massive curb appeal. Includes intricate trimming and bed border detailing.",
    features: ["Everything in Standard", "Intricate trimming around obstacles", "Ornamental bed border cleanup", "Priority seasonal scheduling", "HOA compliance guarantee"],
    popular: false
  }
];

const faqs = [
  {
    question: "How much does lawn mowing cost in Montgomery County?",
    answer: "Our pricing starts at $45 per visit for smaller townhome lots. Most residential properties in Gaithersburg and Rockville fall between $45 and $85 depending on lot size and landscaping complexity."
  },
  {
    question: "Do you only use push mowers?",
    answer: "Yes. We exclusively use professional-grade push mowers to prevent soil compaction and equipment ruts. This protects your lawn's root health and ensures a far more detailed, high-precision finish than heavy riding equipment."
  },
  {
    question: "Do you require a contract?",
    answer: "No. We believe in earning your business every visit. You can pause or cancel your recurring schedule anytime with simple 24-hour notice via text or email."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes. Prime Green Landscape LLC is fully licensed and carries comprehensive general liability insurance for every property we service in Maryland."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/professional-lawn-care-services-montgomery-county.webp"
            alt="Professional lawn care services in Montgomery County"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">Comprehensive Maintenance</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tighter">
              Elite Residential<br className="hidden md:block" /> Lawn Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-xl leading-relaxed mb-8">
              From precision push mowing to expert seasonal cleanup — professional care for Montgomery County&apos;s finest properties.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-0.5">
              Get My Free Quote
            </Link>
          </div>
        </div>
      </section>


      {/* CORE SERVICE TIERS */}
      <section className="py-24 bg-brand-bg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Precision Mowing Packages</h2>
            <p className="text-lg text-gray-600 font-medium italic">Transparent pricing. No contracts. The best cut in the County.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceTiers.map((service, idx) => (
              <div key={idx} className={`relative bg-white rounded-3xl p-8 shadow-xl flex flex-col border-2 ${service.popular ? 'border-brand-mid ring-4 ring-brand-mid/5 scale-[1.02] z-10' : 'border-gray-100'}`}>
                {service.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-mid text-white px-6 py-2 rounded-full text-xs font-black tracking-widest shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-black text-brand-dark mb-2 tracking-tight">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Starting at</span>
                  <span className="text-5xl font-black text-brand-mid">{service.price}</span>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">/ Visit</span>
                </div>
                
                <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl mb-8 space-y-3 text-sm">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    <span className="text-brand-dark font-bold uppercase text-[10px] tracking-widest block mb-1">Ideal for</span>
                    {service.idealFor}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-brand-mid/10 p-1 rounded-full shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-mid" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full text-center py-5 rounded-xl font-black transition-all shadow-md transform hover:-translate-y-1 ${service.popular ? 'bg-brand-mid text-white hover:bg-brand-dark shadow-brand-mid/20' : 'bg-gray-100 text-brand-dark hover:bg-gray-200'}`}>
                  Get Free Estimate
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/lawn-mowing" className="inline-flex items-center gap-2 text-brand-mid font-black hover:gap-4 transition-all group px-6 py-3 rounded-full bg-brand-mid/5 hover:bg-brand-mid/10">
              Deep-Dive: Why our push mower process is superior <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALIZED MAINTENANCE HUB */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight italic">Expert Seasonal Maintenance</h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Beyond the mow, we provide critical care that protects your property value and promotes a flourishing Maryland landscape year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Professional Mulching", 
                desc: "Triple-shredded hardwood mulch application to suppress weeds and retain critical root moisture.", 
                href: "/mulching",
                benefits: ["Weed Suppression", "Nutrient Retention", "Curb Appeal"]
              },
              { 
                title: "Detailed Yard Cleanup", 
                desc: "Comprehensive removal of debris, branches, and overgrowth to restore property aesthetics.", 
                href: "/yard-cleanup",
                benefits: ["Pest Prevention", "Safety First", "Total Restoration"]
              },
              { 
                title: "Manual Weed Removal", 
                desc: "Detailed hand-weeding for ornamental beds where chemical sprays are not preferred.", 
                href: "/weed-removal",
                benefits: ["Organic Approach", "Root Extraction", "Garden Health"]
              },
              { 
                title: "Edging & Trimming", 
                desc: "Sharp, mechanical border definition for driveways, walkways, and landscaping beds.", 
                href: "/edging-trimming",
                benefits: ["Razor Edges", "Precision Detailing", "Clean Borders"]
              },
              { 
                title: "Seasonal Cleanup", 
                desc: "Expert Spring and Fall transitions, including heavy leaf removal and perennial prep.", 
                href: "/seasonal-cleanup",
                benefits: ["Leaf Removal", "Season Transition", "Turf Protection"]
              },
            ].map((s, idx) => (
              <div key={idx} className="flex flex-col bg-brand-bg p-10 rounded-3xl border border-gray-100 hover:border-brand-mid/30 transition-all text-left shadow-sm group">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-mid group-hover:text-white transition-all duration-300">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-4 group-hover:text-brand-mid transition-colors">{s.title}</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed font-medium">{s.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {s.benefits.map((b, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-white px-2 py-1 rounded text-gray-400 border border-gray-100">{b}</span>
                  ))}
                </div>

                <Link href={s.href} className="flex items-center gap-2 text-brand-dark font-black hover:text-brand-mid transition-colors text-sm">
                  View Service Details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
            
            {/* CTA CARD */}
            <div className="flex flex-col bg-brand-dark p-10 rounded-3xl text-left shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Need a Custom Maintenance Plan?</h3>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed relative z-10">We tailor our services to the specific needs of your high-end residential property.</p>
              <Link href="/contact" className="mt-auto flex items-center justify-center bg-white text-brand-dark font-black py-4 rounded-xl hover:bg-brand-accent hover:text-white transition-all shadow-xl relative z-10">
                Get Your Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-bg border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">How It Works</h2>
            <p className="text-lg text-gray-600 font-medium italic">Professional service. Digital convenience. Total transparency.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              { icon: ClipboardList, title: "1. Request Quote", desc: "Digital estimate in 2 hours." },
              { icon: Home, title: "2. Site Visit", desc: "Quick property walkthrough." },
              { icon: ThumbsUp, title: "3. Digital Approval", desc: "Approve via mobile link." },
              { icon: ShieldCheck, title: "4. Professional Job", desc: "Push-mower precision service." },
              { icon: Wallet, title: "5. Safe Payment", desc: "Secure Yardbook online billing." },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="relative z-10 w-24 h-24 mx-auto bg-white rounded-3xl flex items-center justify-center border border-gray-100 shadow-sm group-hover:border-brand-mid group-hover:shadow-xl transition-all duration-500 mb-6 text-brand-dark group-hover:text-brand-mid">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="font-black text-brand-dark mb-2 text-lg uppercase tracking-tighter leading-none">{step.title}</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 font-medium italic">Everything Montgomery County homeowners need to know.</p>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>
      
      {/* GLOBAL CTA */}
      <section className="bg-brand-mid py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/services-cta-premium-montgomery-county.webp')] opacity-10 bg-cover bg-center" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Elite Landscape Care Is One Quote Away</h2>
          <p className="text-xl text-white/80 font-light mb-12 italic">Precision. Reliability. Professionalism. Serving Montgomery County since {siteConfig.serviceSinceYear}.</p>
          <Link href="/contact" className="inline-block px-12 py-6 bg-white text-brand-dark font-black rounded-xl hover:bg-brand-dark hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105">
            Request My Free Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}
