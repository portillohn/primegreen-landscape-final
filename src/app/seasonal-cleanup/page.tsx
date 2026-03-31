import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Leaf, Clock, ChevronRight, Wind, Calendar, Snowflake } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Spring & Fall Seasonal Cleanup | Montgomery County, MD",
  description: "Specialized seasonal cleanup in Gaithersburg, Rockville, and Bethesda. Expert leaf removal, perennial prep, and winterization to protect your Maryland landscape. Free quotes.",
  alternates: { canonical: '/seasonal-cleanup' },
};

const benefits = [
  { 
    title: "Turf Health Protection", 
    desc: "Leaving thick leaf layers on your lawn over winter suffocates the grass and promotes snow mold and disease.",
    icon: ShieldCheck 
  },
  { 
    title: "Spring Readiness", 
    desc: "A thorough Spring cleanup clears winter debris, allowing your perennials and turf to emerge without obstruction.",
    icon: Leaf 
  },
  { 
    title: "Eco-Waste Management", 
    desc: "We prioritize the efficient removal and composting of massive seasonal organic waste from your property.",
    icon: Wind 
  }
];

const steps = [
  { title: "Heavy Leaf Removal", desc: "Forcing leaves out of garden beds, window wells, and fence lines into collection points." },
  { title: "Perennial Cutbacks", desc: "Expert pruning of dormant perennials and grasses to prepare for the next growth cycle." },
  { title: "Debris Disposal", desc: "Efficient bagging or hauling of seasonal organic waste for proper composting." },
  { title: "Gutter Check", desc: "A brief visual inspection of downspouts to ensure fall leaves aren't causing drainage issues." },
  { title: "Final Turf Prep", desc: "A final high-velocity blowdown to leave the lawn and hardscapes ready for the new season." }
];

const faqs = [
  { 
    question: "What is the difference between a yard cleanup and a seasonal cleanup?", 
    answer: "A yard cleanup is typically a 'rescue' service for overgrown properties. A seasonal cleanup is a scheduled transition service (Spring or Fall) focused on leaf removal and preparing plants for the coming weather." 
  },
  { 
    question: "Do you offer curbside leaf pickup?", 
    answer: "We primarily provide full property leaf removal where we collect and haul. However, if you've already raked to the curb, we can provide vacuum/haul services in select areas of Montgomery County." 
  },
  { 
    question: "When should I schedule my Fall cleanup in Maryland?", 
    answer: "We recommend scheduling for mid-to-late November once the majority of the oaks and maples have dropped their leaves, ensuring a single, thorough visit is effective." 
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Spring & Fall Seasonal Cleanup",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Prime Green Landscape LLC"
      },
      "areaServed": "Montgomery County, MD",
      "description": "Comprehensive seasonal property maintenance including leaf removal, perennial pruning, and debris clearing."
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

export default function SeasonalCleanupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services/seasonal-yard-cleanup-spring-fall-maryland.webp" alt="Fall leaves on a green lawn" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <Breadcrumbs items={[{ label: "Seasonal Cleanup", href: "/seasonal-cleanup" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">Essential Season Transitions</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tighter">
              Spring &amp; Fall Cleanup<br className="hidden md:block" /> in Montgomery County
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-xl leading-relaxed mb-8">
              Maryland seasons are beautiful but demanding. Our targeted <strong>seasonal prep</strong> ensures your property stays healthy and pristine through every transition.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-0.5">
              Schedule My Cleanup
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
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight tracking-tighter italic underline decoration-brand-accent underline-offset-8">Our Seasonal Protocol</h2>
              <p className="text-lg text-gray-600 mb-12 font-medium">Whether it&apos;s Leaf Season or Spring Prep, we follow a meticulous checklist to protect your landscape.</p>
              
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
                <Image src="/images/services/seasonal-cleanup-detail-maryland.webp" alt="Detailed seasonal cleanup results in a Maryland front yard" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Areas */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Managing the Seasons in MD</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto italic">Reliable seasonal transitions for homeowners in:</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter italic">Seasonal FAQs</h2>
            <p className="text-lg text-gray-600 font-medium">Protecting your property year-round.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-brand-dark py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent" />
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Prepare Your Property <br className="hidden md:block" /> for the Season</h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto italic">Don&apos;t wait for the first frost or the spring rush. Schedule ahead.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-white text-brand-dark px-12 py-6 rounded-xl font-black hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105 active:scale-95">
              Book My Cleanup Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
