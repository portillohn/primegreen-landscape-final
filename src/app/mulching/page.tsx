import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Leaf, Clock, ChevronRight, Droplets, Sparkles, Sprout } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professional Mulching Services | Montgomery County, MD",
  description: "Elite residential mulching in Gaithersburg, Rockville, and Potomac. Triple-shredded hardwood mulch to protect soil, suppress weeds, and boost curb appeal. Free quotes.",
};

const benefits = [
  { 
    title: "Moisture Retention", 
    desc: "Mulch acts as a protective blanket, reducing evaporation and keeping roots hydrated during Maryland's humid summers.",
    icon: Droplets 
  },
  { 
    title: "Natural Weed Barrier", 
    desc: "A clean 2-3 inch layer of premium mulch suppresses weed germination by blocking critical sunlight.",
    icon: ShieldCheck 
  },
  { 
    title: "Soil Transformation", 
    desc: "As hardwood mulch breaks down, it contributes organic matter, improving the long-term health of your garden soil.",
    icon: Sprout 
  }
];

const steps = [
  { title: "Bed Preparation", desc: "We remove existing large weeds and debris from the garden beds before application." },
  { title: "Mechanical Edging", desc: "Re-defining the 'V-trench' edge between your lawn and beds for a professional look." },
  { title: "Precision Spreading", desc: "Applying a consistent 2-3 inch depth of premium triple-shredded hardwood mulch." },
  { title: "Detail Tamping", desc: "Ensuring mulch is leveled and pulled back slightly from tree trunks and plant stems." },
  { title: "Final Cleanup", desc: "Blowing off all walkways and driveways to leave your property immaculate." }
];

const faqs = [
  { 
    question: "What type of mulch do you use?", 
    answer: "We primarily use premium triple-shredded hardwood mulch. It decomposes naturally, provides excellent nutrient return, and stays in place much better than cheaper alternatives." 
  },
  { 
    question: "When is the best time to mulch in Montgomery County?", 
    answer: "Spring (March-May) is the most popular time to protect plants for summer. However, a Fall application (October-November) is excellent for insulating roots against winter freezes." 
  },
  { 
    question: "Is your mulch safe for pets?", 
    answer: "Yes. Our triple-shredded natural hardwood mulch is organic and safe for both pets and children once it has been spread and settled." 
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Professional Landscape Mulching",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Prime Green Landscape LLC"
      },
      "areaServed": "Montgomery County, MD",
      "description": "Premium triple-shredded hardwood mulching service for soil protection and garden bed aesthetics."
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

export default function MulchingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services/black-mulch-installation-montgomery-county.webp" alt="Freshly mulched garden beds" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <Breadcrumbs items={[{ label: "Mulching", href: "/mulching" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">Estate-Quality Mulching</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tighter">
              Professional Mulching<br className="hidden md:block" /> in Montgomery County
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-xl leading-relaxed mb-8">
              Protect your landscape investment. Our precision mulching service balances <strong>horticultural health</strong> with the high-end aesthetic your property deserves.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-0.5">
              Request a Mulch Quote
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
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tighter italic underline decoration-brand-accent underline-offset-8">Our Mulching Protocol</h2>
              <p className="text-lg text-gray-600 mb-12 font-medium">We don&apos;t just dump mulch—we prepare and detail your beds for the best possible outcome.</p>
              
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
                <Image src="/images/services/mulching-detail-black-beds-maryland.webp" alt="Close-up of fresh black mulch beds at a Montgomery County home" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight text-center">Serving These Communities</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto italic">Professional mulching and bed maintenance for homes in:</p>
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
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter italic">Mulching FAQs</h2>
            <p className="text-lg text-gray-600 font-medium">Expert advice for your Maryland garden beds.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-brand-dark py-32 text-center text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent" />
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Ready to Refresh Your <br className="hidden md:block" /> Garden Beds?</h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto italic">Quotes delivered in under 2 hours. Free Estimates.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-dark px-12 py-6 rounded-xl font-black hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105 active:scale-95">
            Get My Free Mulching Quote
          </Link>
        </div>
      </section>
    </>
  );
}
