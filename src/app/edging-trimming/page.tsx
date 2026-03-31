import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Leaf, Clock, ChevronRight, Scissors, Ruler, Sparkles } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Precision Edging & Trimming Services | Montgomery County, MD",
  description: "Elite mechanical edging and string trimming in Gaithersburg, Rockville, and Potomac. Define your walkways and garden beds with razor-sharp precision. Free quotes.",
  alternates: { canonical: '/edging-trimming' },
};

const benefits = [
  { 
    title: "Razor-Sharp Borders", 
    desc: "Mechanical edging creates a permanent, vertical trench that keeps grass from encroaching on your walkways.",
    icon: Ruler 
  },
  { 
    title: "HOA Compliance", 
    desc: "Clean, defined edges are a primary requirement for most high-end Montgomery County HOA standards.",
    icon: ShieldCheck 
  },
  { 
    title: "Landscape Definition", 
    desc: "Precision trimming around beds and obstacles creates a visual 'frame' that makes your property pop.",
    icon: Sparkles 
  }
];

const steps = [
  { title: "Walkway Edging", desc: "Using a dedicated mechanical edger to cut a clean vertical line along all hard surfaces." },
  { title: "Bed Definition", desc: "Re-establishing the 'V-cut' edge between turf and ornamental garden beds." },
  { title: "String Trimming", desc: "Detail horizontal cutting in areas mowers can't reach—fences, trees, and posts." },
  { title: "Debris Removal", desc: "Clearing out the 'soil cakes' and grass clippings from the newly cut edges." },
  { title: "Final Sweep", desc: "A high-velocity blowdown of all driveways and sidewalks to reveal the sharp finish." }
];

const faqs = [
  { 
    question: "What is the difference between edging and trimming?", 
    answer: "Edging is the vertical cut along hard surfaces like driveways and sidewalks. Trimming is the horizontal cutting of grass in areas mowers can't reach, like against a fence or around a mailbox post." 
  },
  { 
    question: "How often should I have my lawn edged?", 
    answer: "For a truly professional look, we recommend mechanical edging every visit. This maintains the vertical trench and prevents the grass from 'creeping' back over the concrete." 
  },
  { 
    question: "Do you edge garden beds?", 
    answer: "Yes. We specialize in defining natural 'V-trench' edges for garden beds, which provides a clean separation between your mulch and your lawn." 
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Precision Mechanical Edging & Trimming",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Prime Green Landscape LLC"
      },
      "areaServed": "Montgomery County, MD",
      "description": "High-detail mechanical edging and string trimming to define walkways, driveways, and garden beds."
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

export default function EdgingTrimmingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services/lawn-edging-sidewalk-clean-lines-maryland.webp" alt="Perfectly edged driveway and lawn border" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <Breadcrumbs items={[{ label: "Edging & Trimming", href: "/edging-trimming" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">The Detail Specialists</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tighter">
              Precision Edging &amp; Trimming<br className="hidden md:block" /> in Montgomery County
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-xl leading-relaxed mb-8">
              It&apos;s the hidden secret of elite lawns. Our <strong>mechanical edging service</strong> delivers the surgical precision that separates a mowed lawn from a manicured estate.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-0.5">
              Request a Detail Quote
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
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tighter italic underline decoration-brand-accent underline-offset-8">Our Detailing Protocol</h2>
              <p className="text-lg text-gray-600 mb-12 font-medium">Precision isn&apos;t accidental. We follow a strict process to ensure every line is straight and every corner is sharp.</p>
              
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
                <Image src="/images/services/edging-detail-curb-lines-maryland.webp" alt="Close-up of crisp edging lines along a sidewalk and planting bed" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Coverage */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Focusing on the Details in MD</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto italic">Providing reliable, high-detail edging and trimming to homeowners in:</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter italic">Detailing FAQs</h2>
            <p className="text-lg text-gray-600 font-medium">Everything you need to know about professional edging.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-brand-dark py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent" />
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Ready for the <br className="hidden md:block" /> Prime Green Polish?</h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto italic">Quotes delivered in under 2 hours. Razor-sharp results guaranteed.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-white text-brand-dark px-12 py-6 rounded-xl font-black hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105 active:scale-95">
              Get My Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
