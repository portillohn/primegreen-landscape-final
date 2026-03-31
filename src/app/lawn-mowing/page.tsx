import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, MapPin, Star, ShieldCheck, Leaf, Clock, CreditCard, ChevronRight, Zap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professional Lawn Mowing Services | Montgomery County, MD",
  description: "Precision push mower lawn mowing in Gaithersburg, Rockville, and Potomac. Elite residential care that protects your soil and boosts curb appeal. Free quotes.",
  alternates: { canonical: '/lawn-mowing' },
};

const benefits = [
  { 
    title: "Zero Soil Compaction", 
    desc: "Heavy 1,000lb riding mowers crush soil and suffocate roots. Our lightweight push mowers protect your lawn's foundation.",
    icon: Leaf 
  },
  { 
    title: "HOA Precision", 
    desc: "We deliver the razor-sharp edges and perfect stripes required by Montgomery County's strictest HOA standards.",
    icon: ShieldCheck 
  },
  { 
    title: "Eco-Friendly Quiet", 
    desc: "Our high-end equipment is significantly quieter and cleaner than industrial riding machinery.",
    icon: Zap 
  }
];

const steps = [
  { title: "Perimeter Check", desc: "We walk the property to remove debris and identify any obstacles or pet areas." },
  { title: "Precision Cut", desc: "Consistent height adjustment based on your grass type (Tall Fescue focus)." },
  { title: "String Trimming", desc: "Detail trimming around trees, fences, and ornamental garden beds." },
  { title: "Mechanical Edging", desc: "Defining crisp vertical lines along all walkways and driveways." },
  { title: "Clean Sweep", desc: "Full blowdown of all hard surfaces—leaving your property spotless." }
];

const faqs = [
  { 
    question: "How often should my lawn be mowed in Maryland?", 
    answer: "In our transition zone, we recommend weekly service from April through June. Bi-weekly is often sufficient during the peak heat of July/August if growth slows." 
  },
  { 
    question: "Do you use riding mowers for larger lots?", 
    answer: "No. We believe in the superior quality of a push mower cut for all residential properties. It allows for better detail and prevents long-term soil damage." 
  },
  { 
    question: "What is your typical mowing height?", 
    answer: "We typically maintain Tall Fescue at 3.5 to 4 inches. This height promotes deeper root growth and helps the grass crowd out weeds naturally." 
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Professional Residential Lawn Mowing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Prime Green Landscape LLC"
      },
      "areaServed": "Montgomery County, MD",
      "description": "High-precision residential lawn mowing using push mowers to prevent soil compaction and ensure a superior finish."
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

export default function LawnMowingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services/push-mower-residential-lawn-mowing-maryland.webp" alt="Perfectly mowed green lawn" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <Breadcrumbs items={[{ label: "Lawn Mowing", href: "/lawn-mowing" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">Elite Residential Care</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tighter">
              Professional Lawn Mowing<br className="hidden md:block" /> in Montgomery County
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-xl leading-relaxed mb-8">
              We don&apos;t just cut grass—we manage turf health. Our exclusive <strong>push-mower approach</strong> is designed for homeowners who value precision, soil protection, and ultimate curb appeal.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-0.5">
              Get My Free Estimate
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
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tighter italic underline decoration-brand-accent underline-offset-8">Our 5-Step Mowing Protocol</h2>
              <p className="text-lg text-lg text-gray-600 mb-12 font-medium">Consistency is key to a healthy lawn. Every visit follows our strict quality checklist.</p>
              
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
                <Image src="/images/services/lawn-mowing-detail-striped-lawn-maryland.webp" alt="Detailed striped lawn finish after residential mowing service" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Neighborhoods We Mow</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto italic">Providing reliable, high-detail weekly mowing to homeowners in:</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Montgomery Village", "Gaithersburg", "Rockville", "Germantown", "Bethesda", "Silver Spring"].map((city) => (
              <Link key={city} href={`/areas/${city.toLowerCase().replace(" ", "-")}`} className="bg-brand-bg p-8 rounded-2xl border border-gray-100 hover:border-brand-accent hover:bg-white transition-all flex items-center justify-between group shadow-sm hover:shadow-xl">
                <span className="font-black text-brand-dark text-lg group-hover:text-brand-accent">{city}, MD</span>
                <div className="bg-white p-2 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter italic">Common Mowing Questions</h2>
            <p className="text-lg text-gray-600 font-medium">Specifics for our Montgomery County residential clients.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-brand-dark py-32 text-center text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent" />
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Ready for a Superior <br className="hidden md:block" /> Lawn Cut?</h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto italic">Quotes delivered in under 2 hours. Join your neighbors today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto bg-white text-brand-dark px-12 py-6 rounded-xl font-black hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105 active:scale-95">
              Request My Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
