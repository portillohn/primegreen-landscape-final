import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import { Check, ClipboardList, Home, ShieldCheck, ThumbsUp, Wallet, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Lawn Mowing Services | Prime Green Landscape LLC",
  description: "Push mower specialists serving residential properties in Montgomery County with precision, care, and consistency. Compare our tiered pricing tailored for your lawn.",
};

const services = [
  {
    title: "BASIC MOW",
    price: "$45",
    bestFor: "Small properties under 5,000 sqft",
    time: "30–45 min",
    idealFor: "Homeowners with smaller fenced yards looking for reliable weekly or bi-weekly cuts without the massive footprint of commercial gear.",
    frequency: "Weekly / Bi-weekly",
    features: ["Push mower lawn mowing", "Perimeter walk-through", "Clipping cleanup"],
    popular: false
  },
  {
    title: "STANDARD CARE",
    price: "$65",
    bestFor: "Average residential lots 5,000–10,000 sqft",
    time: "45–60 min",
    idealFor: "The perfect balance for most Montgomery County homes. Complete edging and precision mowing keep your curb appeal pristine.",
    frequency: "Weekly / Bi-weekly",
    features: ["Everything in Basic", "Full edging (walkways, driveway, beds)", "Sidewalk & driveway blowdown"],
    popular: true
  },
  {
    title: "PREMIUM MANICURE",
    price: "$95",
    bestFor: "Large properties or HOA front yards 10,000+ sqft",
    time: "60–90 min",
    idealFor: "Homes in strict HOAs or corner lots requiring detailed trimming around extensive landscaping, multiple beds, and complex obstacle paths.",
    frequency: "Weekly / Bi-weekly / Monthly",
    features: ["Everything in Standard", "Detail trimming around all obstacles", "Bed border cleanup", "Priority scheduling"],
    popular: false
  }
];

const faqs = [
  {
    question: "How much does lawn mowing cost in Montgomery County?",
    answer: "Our pricing starts at $45 per visit for smaller properties. The final cost depends on your lot size, the presence of fences/gates, and the complexity of your landscaping (like numerous garden beds or obstacles). You can generally expect between $45 and $95 per cut for residential yards."
  },
  {
    question: "How often should I mow my lawn in Maryland?",
    answer: "In Maryland's transition zone climate, we highly recommend weekly mowing during the spring growth surge (April through June) and the fall recovery period (September through October). During the hotter, drier summer months of July and August, bi-weekly mowing is often sufficient depending on rainfall."
  },
  {
    question: "Do you require a contract?",
    answer: "No contracts, ever. Pay per visit or set up a recurring schedule — your choice. You can pause or cancel anytime with 24 hours notice."
  },
  {
    question: "How does billing work?",
    answer: "After each service, we send you a Yardbook invoice directly to your email. You click the payment link and pay securely by credit card, debit card, Apple Pay, or Google Pay — usually takes less than 30 seconds. You can also save your card on file for automatic billing."
  },
  {
    question: "What if it rains on my service day?",
    answer: "If steady rain prevents us from providing a high-quality cut, we will automatically reschedule your service for the next available clear day (usually the following day). We will notify you of any weather delays via email or text."
  },
  {
    question: "Why do you only use push mowers?",
    answer: "Push mowers prevent the heavy soil compaction that comes from commercial zero-turn riders. Compacted soil chokes root systems and causes thin, unhealthy grass over time. Our lightweight equipment protects the turf, navigates narrow gates effortlessly, and provides a more detailed, precise cut that perfectly frames your home's landscaping."
  },
  {
    question: "Are you insured?",
    answer: "Yes. Prime Green Landscape LLC carries full general liability insurance covering every property we service in Montgomery County."
  },
  {
    question: "Do you serve commercial properties?",
    answer: "Currently we specialize in residential properties only. This focus allows us to deliver the precision, care, and quality that homeowners deserve without the rush associated with large commercial contracts."
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-dark to-brand-light pt-[72px] pb-24 border-b-8 border-brand-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Professional Lawn Mowing Services in Montgomery County, MD
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
              Push mower specialists serving residential properties with precision, care, and consistency.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEO BLock */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">The Push Mower Advantage</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                When it comes to maintaining a stunning residential lawn in Maryland&apos;s transition zone, the tools matter just as much as the technique. While most Montgomery County lawn care companies prioritize speed by using heavy, 1,000-pound zero-turn riding mowers, <strong>Prime Green Landscape LLC</strong> takes a different approach. We are exclusively a push mower service, dedicated to delivering a superior cut that prioritizes grass health and meticulous aesthetic detail.
              </p>
              <h3 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">Eliminating Soil Compaction</h3>
              <p>
                The biggest hidden enemy of a thick, healthy lawn is soil compaction. Heavy machinery presses down on your soil week after week, squeezing the oxygen out of the root zone and limiting water absorption. In the heavy clay soils common to Maryland, this quickly degrades the health of cool-season grasses like Tall Fescue and Kentucky Bluegrass. Our lightweight push mowers glide over the turf, ensuring your soil structure remains loose and roots can grow deep and strong.
              </p>
              <h3 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">Precision and HOA Compliance</h3>
              <p>
                Montgomery County is home to beautiful residential neighborhoods governed by strict HOA guidelines. Heavy riders often rip up turf when turning, scalp uneven spots, and leave messy edges. Push mowers afford our operators complete, tactile control. We can precisely navigate around delicate hardscaping, tight fences, and intricate garden beds without causing damage. The result is a clean, manicured look with crisp edges and perfect stripes that instantly elevates your home&apos;s curb appeal and keeps your property fully HOA-compliant.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICE TIERS */}
      <section className="py-24 bg-brand-bg border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Service Tiers</h2>
            <p className="text-lg text-gray-600">Transparent pricing. No contracts. Endless quality.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className={`relative bg-white rounded-2xl p-8 shadow-sm border flex flex-col ${service.popular ? 'border-brand-accent ring-2 ring-brand-accent' : 'border-gray-200'}`}>
                {service.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-extrabold text-brand-dark mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-gray-600">Starting at</span>
                  <span className="text-5xl font-extrabold text-brand-accent">{service.price}</span>
                </div>
                
                <div className="bg-brand-bg p-4 rounded-xl mb-6 space-y-2 text-sm text-brand-dark">
                  <p><strong>Est. Time:</strong> {service.time}</p>
                  <p><strong>Ideal for:</strong> {service.idealFor}</p>
                  <p><strong>Frequency:</strong> {service.frequency}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full text-center py-4 rounded-md font-bold transition-colors ${service.popular ? 'bg-brand-accent text-white hover:bg-brand-dark' : 'bg-brand-dark text-white hover:bg-brand-light'}`}>
                  Get Free Quote
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Additional Expert Services</h2>
            <p className="text-lg text-gray-600 mb-12">Beyond mowing, we offer specialized care to keep your entire property looking its best.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Mulching", desc: "Eco-friendly mulch application to protect soil and boost appearance.", href: "/mulching" },
                { title: "Yard Cleanup", desc: "Thorough removal of debris, branches, and overgrowth.", href: "/yard-cleanup" },
                { title: "Weed Removal", desc: "Detailed manual weeding for garden beds and pathways.", href: "/weed-removal" },
                { title: "Edging & Trimming", desc: "Precision border definition for a truly professional finish.", href: "/edging-trimming" },
                { title: "Seasonal Cleanup", desc: "Focused Spring and Fall prep to handle leaves and season transitions.", href: "/seasonal-cleanup" },
              ].map((s, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-accent transition-all text-left">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{s.desc}</p>
                  <Link href={s.href} className="text-brand-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Five simple steps to the best lawn on your block.</p>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { icon: ClipboardList, title: "1. Request a Free Quote", desc: "Fill out our form, we respond in 2 hours." },
              { icon: Home, title: "2. We Visit Your Property", desc: "Quick assessment, zero obligation." },
              { icon: ThumbsUp, title: "3. You Approve the Estimate", desc: "Digital approval via Yardbook link." },
              { icon: ShieldCheck, title: "4. We Get to Work", desc: "Professional push mower service on your schedule." },
              { icon: Wallet, title: "5. Pay Securely Online", desc: "Yardbook invoice sent by email, pay by card in seconds." },
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative group">
                {idx !== 4 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-200"></div>
                )}
                <div className="relative z-10 w-20 h-20 mx-auto bg-brand-bg rounded-full flex items-center justify-center border-2 border-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 mb-4 text-brand-accent">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our service.</p>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full">
            <FAQAccordion items={faqs} />
          </FadeIn>
        </div>
      </section>
      
      {/* GLOBAL CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Experience the Push Mower Difference</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-brand-dark font-bold rounded-md hover:bg-gray-100 transition-colors shadow-lg">
            Request My Quote Today
          </Link>
        </div>
      </section>
    </>
  );
}
