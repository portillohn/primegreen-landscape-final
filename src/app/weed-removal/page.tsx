import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Leaf, Clock, ChevronRight, Flower2, Scissors, Search } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professional Manual Weed Removal | Montgomery County, MD",
  description: "Elite hand-weeding services in Gaithersburg, Rockville, and Potomac. We prioritize root extraction and organic bed care to protect your ornamental plants. Free quotes.",
  alternates: { canonical: '/weed-removal' },
};

const benefits = [
  { 
    title: "Complete Root Extraction", 
    desc: "Unlike sprays that only kill the surface, we manually remove the entire root system to prevent regrowth.",
    icon: Search 
  },
  { 
    title: "Chemical-Free Safety", 
    desc: "Protect your children, pets, and beneficial pollinators with our organic, hand-labor approach.",
    icon: Leaf 
  },
  { 
    title: "Precision Bed Care", 
    desc: "We differentiate between weeds and your prized perennials, ensuring only the intruders are removed.",
    icon: Flower2 
  }
];

const steps = [
  { title: "Bed Inspection", desc: "We identify specific weed species and differentiate them from your ornamental plants." },
  { title: "Manual Extraction", desc: "Using specialized hand tools to loosen soil and extract the full root of each weed." },
  { title: "Detail Edge Clearing", desc: "Clearing small weeds that grow in the cracks of walkways and bed borders." },
  { title: "Debris Collection", desc: "Removing all pulled weeds from the site to prevent seeds from re-germinating." },
  { title: "Finished Polish", desc: "Smoothening bed surfaces and a final blowdown of the surrounding work area." }
];

const faqs = [
  { 
    question: "Why do you prefer manual weeding over spraying?", 
    answer: "Manual weeding is safer for your existing plants and the environment. More importantly, it ensures the root is removed immediately, whereas sprays can take weeks to work and often miss the root system entirely." 
  },
  { 
    question: "How often should I have my beds weeded?", 
    answer: "For most Montgomery County homes, a monthly maintenance schedule from April through October keeps beds looking pristine. We also offer one-time heavy 'rescue' weeding for neglected beds." 
  },
  { 
    question: "Can you handle invasive vines like English Ivy?", 
    answer: "Yes. We specialize in the removal of invasive vines and overgrowth that can often choke out trees and garden beds if left unchecked." 
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Professional Manual Weed Removal",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Prime Green Landscape LLC"
      },
      "areaServed": "Montgomery County, MD",
      "description": "Eco-friendly manual weed extraction and garden bed maintenance service."
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

export default function WeedRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services/weed-removal-flower-beds-montgomery-county.webp" alt="Detailed hand weeding" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <Breadcrumbs items={[{ label: "Weed Removal", href: "/weed-removal" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">Precision Hand-Labor</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tighter">
              Professional Weed Removal<br className="hidden md:block" /> in Montgomery County
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-xl leading-relaxed mb-8">
              Don&apos;t just suppress weeds—<strong>eliminate them</strong>. Our manual extraction process is the safest and most effective way to maintain high-end garden beds.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-0.5">
              Request a Weeding Quote
            </Link>
          </div>
        </div>
      </section>


      {/* 2. Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((b, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                  <b.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-4">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Process */}
      <section className="py-24 bg-brand-bg border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tighter italic underline decoration-brand-accent underline-offset-8">The Root-First Approach</h2>
              <p className="text-lg text-gray-600 mb-12 font-medium">We treat every ornamental bed with the care of a gardener, not just a maintenance crew.</p>
              
              <div className="space-y-8">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="text-4xl font-black text-brand-accent/20 italic">{i + 1}</div>
                    <div>
                      <h4 className="text-xl font-black text-brand-dark mb-1">{s.title}</h4>
                      <p className="text-gray-600 text-sm font-medium">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-white rounded-[2rem] shadow-2xl z-0" />
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-lg">
                <Image src="/images/services/weed-removal-detail-flower-bed-maryland.webp" alt="Clean flower bed after detailed manual weed removal service" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Areas */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Caring for Local Gardens</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto italic">Detail-oriented weed removal for homeowners in:</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Montgomery Village", "Gaithersburg", "Rockville", "Germantown", "Bethesda", "Silver Spring"].map((city) => (
              <Link key={city} href={`/areas/${city.toLowerCase().replace(" ", "-")}`} className="bg-brand-bg p-8 rounded-2xl border border-gray-100 hover:border-brand-accent hover:bg-white transition-all flex items-center justify-between group shadow-sm hover:shadow-xl">
                <span className="font-black text-brand-dark text-lg group-hover:text-brand-accent">{city}, MD</span>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-accent transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter italic">Weeding FAQs</h2>
            <p className="text-lg text-gray-600 font-medium">Why manual care makes the difference.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-brand-dark py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent" />
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Tired of Stubborn Weeds?</h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto italic">Quotes delivered in under 2 hours. Hand-extraction excellence.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-white text-brand-dark px-12 py-6 rounded-xl font-black hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105 active:scale-95">
              Get My Free Weeding Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
