import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, Leaf, ShieldCheck, MapPin, Clock, CreditCard, 
  ChevronRight, Target, Home as HomeIcon, Star, PenTool, Trees, AlertTriangle, Scale
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig } from '@/lib/siteConfig';

// ----------------------------------------------------------------------
// 1. METADATA
// ----------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Lawn Mowing Service Near Me in Montgomery County, MD | Prime Green Landscape",
  description: "Looking for a premium lawn mowing service near you in Montgomery County, MD? Prime Green Landscape provides striped, push mower lawn care with clean edging, no contracts, and fast local quotes.",
  alternates: {
    canonical: "/services/lawn-mowing-service-near-me"
  },
  openGraph: {
    title: "Lawn Mowing Service Near Me in Montgomery County, MD | Prime Green Landscape",
    description: "Looking for a premium lawn mowing service near you in Montgomery County, MD? Prime Green Landscape provides striped, push mower lawn care with clean edging, no contracts, and fast local quotes.",
    url: `${siteConfig.url}/services/lawn-mowing-service-near-me`,
    images: [{
      url: `${siteConfig.url}/images/services/weekly-lawn-mowing-near-me-montgomery-county.webp`,
      width: 1600,
      height: 900,
      alt: "Prime Green Landscape providing lawn mowing service near me in Montgomery County, MD"
    }]
  }
};

// ----------------------------------------------------------------------
// 2. DATA ARRAYS
// ----------------------------------------------------------------------
const faqs = [
  {
    question: "How much does lawn mowing cost near me in Montgomery County?",
    answer: "Our standard lawn mowing service starts at $45 per visit for townhomes and smaller residential lots. Most single-family properties in Gaithersburg and Rockville fall between $50 and $85, depending on the exact square footage of the turf and landscaping complexity."
  },
  {
    question: "Do you offer weekly and bi-weekly service?",
    answer: "Yes! During the heavy spring growth (April-June), we highly recommend weekly mowing to adhere to the 1/3 grass-cutting rule. In the heat of summer, many clients transition to bi-weekly (every 14 days) to prevent drought stress on their grass."
  },
  {
    question: "Do I need to sign a contract?",
    answer: "No. Unlike large commercial companies that lock you into rigid 12-month agreements, Prime Green Landscape operates on a no-contract basis. We believe in earning your business with every single cut. You can pause or cancel your service anytime with a simple 24-hour notice."
  },
  {
    question: "Do you bring your own equipment?",
    answer: "Absolutely. Our professional crews arrive fully equipped with advanced commercial-grade push mowers, mechanical edge trimmers, and high-velocity leaf blowers. You don't need to provide anything."
  },
  {
    question: "Which areas in Montgomery County do you serve?",
    answer: "We are locally owned and primarily serve Gaithersburg, Rockville, Bethesda, Potomac, Germantown, Silver Spring, and Montgomery Village."
  },
  {
    question: "Do you use riding mowers or push mowers?",
    answer: "We strictly use professional push mowers for all residential properties. Heavy zero-turn riding mowers, which can weigh over 1,000 lbs, cause severe soil compaction and often tear up residential turf. Our push mowers ensure a precise, delicate cut that protects the root system and prevents ruts."
  }
];

const includedFeatures = [
  "Uniform 3.5-inch professional cut (ideal for Maryland Tall Fescue)",
  "Razor-sharp string trimming around fences, trees, and obstacles",
  "Crisp mechanical edge detailing along driveways and walkways",
  "High-velocity blow-down of all hard surfaces to remove clippings",
  "Gentle push mower operation to eliminate tire ruts and soil compaction",
  "Post-service digital invoice system (pay after the job is done)"
];

const serviceAreas = [
  { name: "Gaithersburg", slug: "/areas/gaithersburg" },
  { name: "Rockville", slug: "/areas/rockville" },
  { name: "Bethesda", slug: "/areas/bethesda" },
  { name: "Potomac", slug: "/areas/potomac" },
  { name: "Germantown", slug: "/areas/germantown" },
  { name: "Silver Spring", slug: "/areas/silver-spring" },
  { name: "Montgomery Village", slug: "/areas/montgomery-village" }
];

// ----------------------------------------------------------------------
// 3. PAGE COMPONENT
// ----------------------------------------------------------------------
export default function LawnMowingNearMePage() {
  
  // JSON-LD SCHEMAS
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prime Green Landscape LLC",
    "image": `${siteConfig.url}/images/services/weekly-lawn-mowing-near-me-montgomery-county.webp`,
    "description": "Elite residential lawn mowing service in Montgomery County, MD specializing in push mower care.",
    "telephone": "(571) 405-0031",
    "url": `${siteConfig.url}/services/lawn-mowing-service-near-me`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gaithersburg",
      "addressRegion": "MD",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Montgomery County"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Lawn Mowing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Prime Green Landscape LLC"
    },
    "areaServed": [
      {"@type": "City", "name": "Gaithersburg"},
      {"@type": "City", "name": "Rockville"},
      {"@type": "City", "name": "Bethesda"}
    ],
    "description": "Premium weekly and bi-weekly residential lawn mowing services near you."
  };

  const faqSchema = {
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-bg pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Breadcrumbs dark={false} items={[
              { label: "Services", href: "/services" },
              { label: "Lawn Mowing Service Near Me", href: "/services/lawn-mowing-service-near-me" }
            ]} />
          </div>
          
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-mid/10 text-brand-dark font-black tracking-widest text-xs uppercase mb-6 shadow-sm border border-brand-mid/20">
            Premium Residential Lawn Care
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark mb-6 leading-tight tracking-tighter">
            Lawn Mowing Service Near Me in Montgomery County, MD
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-neutral-700 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop dealing with unreliable neighborhood kids or massive commercial companies that tear up your yard with heavy tractors. We deliver a meticulously striped, push-mower finish—with no contracts and fast local quotes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-brand-mid transition-all shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/areas" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-dark font-black rounded-xl border-2 border-brand-dark hover:bg-brand-dark hover:text-white transition-all shadow-sm"
            >
              Check Service Area
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="py-8 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-brand-accent" />
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Locally Owned in MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Fully Insured & Licensed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-brand-accent" />
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Fast 2-Hour Response</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CreditCard className="w-6 h-6 text-brand-accent" />
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Pay After Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 md:mb-12 tracking-tight">The Push Mower Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-bg rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm flex flex-col items-center text-center">
              <Leaf className="w-10 h-10 text-brand-mid mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Zero Soil Compaction</h3>
              <p className="text-neutral-600 text-base leading-relaxed">Riding mowers compress your soil, choking grass roots. Our 100lb push mowers keep your soil breathable, fostering thick and resilient turf.</p>
            </div>
            <div className="bg-brand-bg rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm flex flex-col items-center text-center">
              <Target className="w-10 h-10 text-brand-mid mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Fence & Gate Safe</h3>
              <p className="text-neutral-600 text-base leading-relaxed">Commercial rigs often scrape fences or completely destroy narrow locking gates. Our lightweight mowers easily fit into tight residential spaces.</p>
            </div>
            <div className="bg-brand-bg rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm flex flex-col items-center text-center">
              <PenTool className="w-10 h-10 text-brand-mid mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Magazine-Quality Stripes</h3>
              <p className="text-neutral-600 text-base leading-relaxed">Using precision striping kits, we carefully lay down the grass blades, delivering that beautiful, high-contrast dark and light green finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEM/SOLUTION LOCAL EXPLANATION */}
      <section className="py-16 md:py-24 bg-brand-bg border-y border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-700">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 mt-0 text-center md:text-left">Your Lawn Requires Specialized Care</h2>
          <p className="text-lg leading-relaxed mb-6">
            Every spring, homeowners search for a <strong>&quot;lawn mowing service near me&quot;</strong> only to be met with a severely broken industry. You are stuck choosing between an unpredictable hobbyist who misses weeks at a time, or a massive commercial fleet that treats your property like an industrial park—rushing through in 8 minutes flat and leaving torn-up turf in their wake.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Lawn care near Gaithersburg, Rockville, and the surrounding areas isn&apos;t a one-size-fits-all job. The predominant grass type in our region is <em>Tall Fescue</em>, which thrives in spring but suffers immense stress during our humid Maryland summers. 
          </p>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border-l-4 border-brand-mid shadow-sm my-8">
            <h3 className="text-xl font-black text-brand-dark mb-3 mt-0">The &quot;Scalping&quot; Problem</h3>
            <p className="text-base m-0 leading-relaxed text-neutral-600">
              Standard commercial crews cut grass far too short to delay their next visit—a practice known as scalping. This exposes the fragile grass crown to blistering sunlight, leading to brown patches and crabgrass takeovers. We proudly cut at a protective 3.5 to 4 inches to shade your soil and naturally suppress weeds.
            </p>
          </div>
        </div>
      </section>

      {/* 5. AREAS SERVED */}
      <section className="py-16 md:py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8">Local Service. Local Reliability.</h2>
          <p className="text-lg text-gray-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            As a locally owned operation, we strategically cluster our routes within Montgomery County. This ensures we show up exactly when we say we will.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, i) => (
              <Link key={i} href={area.slug} className="px-5 py-2.5 bg-white/10 hover:bg-brand-accent rounded-full text-sm font-bold transition-colors border border-white/20">
                {area.name}, MD
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT'S INCLUDED */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">What&apos;s Included in Every Visit?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">We don&apos;t just cut grass. We execute a meticulous, multi-step manicuring process.</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-brand-bg rounded-2xl p-6 md:p-10 border border-neutral-200 shadow-sm">
            <ul className="space-y-6">
              {includedFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-brand-mid p-1.5 rounded-full shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-neutral-800 font-medium text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-12">
             <Link href="/contact" className="inline-block px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-brand-mid transition-all shadow-xl">
               Book Lawn Service
             </Link>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON VS COMMERCIAL CREWS */}
      <section className="py-16 md:py-24 bg-brand-bg border-y border-neutral-200">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
               <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">Why Homeowners Say Enough is Enough</h2>
               <p className="text-lg text-neutral-600 max-w-2xl mx-auto">The difference between a commercial landscaping outfit and a residential specialist.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm relative pt-12 md:pt-14 mt-4 md:mt-0">
                  <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-2xl">
                    THE TRADITIONAL WAY
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                     <AlertTriangle className="w-6 h-6 text-red-600" />
                     <h3 className="text-2xl font-black text-brand-dark">The &quot;Big Truck&quot; Crews</h3>
                  </div>
                  <ul className="space-y-4 text-neutral-600">
                     <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">X</span> 1,000lb riding mowers crush roots</li>
                     <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">X</span> Giant mower decks scalp uneven ground</li>
                     <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">X</span> Rushed jobs completed in 8 minutes</li>
                     <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">X</span> Require binding 12-month contracts</li>
                  </ul>
               </div>

               <div className="bg-brand-dark rounded-2xl p-6 md:p-8 border border-brand-mid shadow-xl relative overflow-hidden mt-4 md:mt-0">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldCheck className="w-32 h-32 text-white transform translate-x-4 -translate-y-4" />
                  </div>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                     <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                     <h3 className="text-2xl font-black text-white">Prime Green Landscape</h3>
                  </div>
                  <ul className="space-y-4 text-gray-300 relative z-10">
                     <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-1">✓</span> 100lb push mowers protect the soil</li>
                     <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-1">✓</span> Cut precisely at 3.5 inches for health</li>
                     <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-1">✓</span> Meticulous 45-minute attention to detail</li>
                     <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-1">✓</span> Zero contracts. We earn your business.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 8. FAQS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600">Transparent answers for Montgomery County homeowners.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services/weekly-lawn-mowing-near-me-montgomery-county.webp')] opacity-10 bg-cover bg-center" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Elevate Your Curb Appeal?</h2>
          <p className="text-xl text-brand-accent font-medium mb-10 max-w-2xl mx-auto">
            Get your premium, no-obligation quote today. We respond within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl text-lg transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400 font-medium">✨ No contracts attached. Cancel anytime.</p>
        </div>
      </section>
    </>
  );
}
