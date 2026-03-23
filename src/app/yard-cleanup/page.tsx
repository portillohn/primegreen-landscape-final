import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Check, ShieldCheck, Leaf, Clock, ChevronRight, Recycle, Trash2, Wind } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professional Yard Cleanup Services | Montgomery County, MD",
  description: "Comprehensive residential yard cleanup in Gaithersburg, Rockville, and Germantown. We remove debris, clear overgrowth, and restore your property's beauty. Free quotes.",
};

const benefits = [
  { 
    title: "Property Restoration", 
    desc: "Transform an overgrown or messy landscape back into a functional, beautiful outdoor space.",
    icon: Trash2 
  },
  { 
    title: "Pest & Rodent Reduction", 
    desc: "Removing thick debris piles eliminates nesting grounds for ticks, mosquitoes, and rodents.",
    icon: ShieldCheck 
  },
  { 
    title: "Eco-Friendly Disposal", 
    desc: "We focus on responsible disposal of organic waste, turning your yard debris into compost-ready material.",
    icon: Recycle 
  }
];

const steps = [
  { title: "Property Assessment", desc: "We identify all debris, overgrown areas, and specific cleanup targets on your lot." },
  { title: "Debris Collection", desc: "Manual removal of fallen branches, sticks, and large organic litter." },
  { title: "Overgrowth Clearing", desc: "Focused thinning of invasive vines, brush, and neglected garden bed edges." },
  { title: "Leaf & Litter Removal", desc: "Thorough raking and blowing to clear turf and hardscapes of all smaller debris." },
  { title: "Final Grooming", desc: "A precision blowdown to leave your driveway, walkways, and yard perfectly clean." }
];

const faqs = [
  { 
    question: "What is included in a standard cleanup?", 
    answer: "A standard cleanup includes the removal of downed branches, leaf clearing from turf and beds, thinning of light overgrowth, and a full property blowdown. We tailor every quote to your specific needs." 
  },
  { 
    question: "Do you haul away the debris?", 
    answer: "Yes. We can either bag the debris for local municipal pickup or haul it away ourselves to a professional composting facility, depending on your preference and quote." 
  },
  { 
    question: "Can you handle storm damage?", 
    answer: "Absolutely. We specialize in post-storm yard restoration, clearing fallen limbs and organic debris to get your property back to safety and beauty quickly." 
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Professional Yard Cleanup & Restoration",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Prime Green Landscape LLC"
      },
      "areaServed": "Montgomery County, MD",
      "description": "Comprehensive yard cleanup including debris removal, overgrowth clearing, and property restoration."
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

export default function YardCleanupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-dark overflow-hidden text-inter">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1598901975294-fa524147e9e3?w=1600&q=80" alt="Clean residential yard after service" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Yard Cleanup", href: "/yard-cleanup" }]} />
          
          <div className="text-center text-white mt-12">
              <span className="text-brand-accent font-black tracking-widest text-sm mb-4 block uppercase leading-none italic">Complete Property Restoration</span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">Professional Yard Cleanup <br className="hidden md:block" /> in Montgomery County</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                Don&apos;t let overgrowth overwhelm your home. Our throrough cleanup service restores your **curb appeal** and property safety with professional efficiency.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="w-full sm:w-auto bg-brand-accent text-white px-10 py-5 rounded-xl font-black hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-1">
                  Request a Cleanup Quote
                </Link>
              </div>
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
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tighter italic underline decoration-brand-accent underline-offset-8">Our Cleanup Protocol</h2>
              <p className="text-lg text-gray-600 mb-12 font-medium">From overgrown lots to post-storm debris, we follow a systematic approach to restoration.</p>
              
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
                <Image src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=1600&q=80" alt="Clean garden bed" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Areas */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Cleaning Up Montgomery County</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto italic">Reliable residential yard restoration for homeowners in:</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter italic">Cleanup FAQs</h2>
            <p className="text-lg text-gray-600 font-medium">Common questions about our restoration services.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-brand-dark py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent" />
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Ready to Restore Your <br className="hidden md:block" /> Property?</h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto italic">Quotes delivered in under 2 hours. Let us do the heavy lifting.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-white text-brand-dark px-12 py-6 rounded-xl font-black hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105 active:scale-95">
              Get My Free Cleanup Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
