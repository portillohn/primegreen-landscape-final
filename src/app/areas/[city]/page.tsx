import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceAreasData } from '@/lib/data';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, Check, ChevronRight, ShieldCheck, Leaf, 
  Clock, CreditCard, Star, ChevronDown 
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';

export const revalidate = 86400; // 24 hours ISR

export function generateStaticParams() {
  return Object.keys(serviceAreasData).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = serviceAreasData[params.city];
  if (!cityData) return {};
  
  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/areas/${params.city}`,
    },
    openGraph: {
      title: `${cityData.h1} | Prime Green Landscape LLC`,
      description: cityData.metaDescription,
      url: `${siteConfig.url}/areas/${params.city}`,
      images: [{
        url: `${siteConfig.url}${cityData.image}`,
        width: 1600,
        height: 900,
        alt: `${cityData.h1} hero image`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cityData.h1} | Prime Green Landscape LLC`,
      description: cityData.metaDescription,
      images: [`${siteConfig.url}${cityData.image}`],
    },
  };
}

const services = [
  {
    title: "BASIC MOW",
    price: "$45",
    features: ["Precision push mower cut", "Perimeter detail walk-through", "Hard surface clipping cleanup", "Ideal for fenced-in yards"],
  },
  {
    title: "STANDARD CARE",
    price: "$65",
    features: ["Everything in Basic", "Full mechanical edging", "Driveway & sidewalk blowdown", "Tall Fescue optimization"],
    popular: true
  },
  {
    title: "PREMIUM MANICURE",
    price: "$95",
    features: ["Everything in Standard", "Intricate trimming around obstacles", "Ornamental bed border cleanup", "HOA compliance guarantee"],
  }
];

export default function CityAreaPage({ params }: { params: { city: string } }) {
  const cityData = serviceAreasData[params.city];
  
  if (!cityData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Prime Green Landscape LLC",
        "description": `Professional residential lawn mowing in ${cityData.name}, MD`,
        "url": `https://primegreenlandscape.com/areas/${params.city}`,
        "telephone": "(571) 405-0031",
        "areaServed": `${cityData.name}, Maryland`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Montgomery Village",
          "addressLocality": cityData.name,
          "addressRegion": "MD",
          "postalCode": cityData.zip
        },
        "priceRange": "$$",
        "openingHours": "Mo-Sa 07:00-18:00"
      },
      {
        "@type": "FAQPage",
        "mainEntity": cityData.faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. City Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={cityData.image || "/images/home/premium-lawn-mowing-montgomery-county-md-home-hero.webp"}
            alt={`Lawn care in ${cityData.name}, MD`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/88 via-brand-dark/72 to-brand-dark/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-24">
          <Breadcrumbs items={[{ label: cityData.name, href: `/areas/${params.city}` }]} />

          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 px-3 py-1.5 rounded-full mb-5">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span className="font-bold tracking-wider text-xs uppercase text-white">{cityData.name}, Maryland</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
              {cityData.h1}
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-xl leading-relaxed mb-8">
              {cityData.subheading}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-black rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-0.5">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>


      {/* 2. Trust Bar */}
      <section className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-[13px] font-bold text-brand-dark uppercase tracking-wider">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Fully Insured & Licensed</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Leaf className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Push Mowers Only</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Clock className="w-5 h-5 text-brand-accent shrink-0" />
              <span>2-Hour Quote Guarantee</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <CreditCard className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Online Payments</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Content & Neighborhoods */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Description Column */}
            <div className="text-left">
              <span className="text-brand-accent font-black tracking-widest text-sm mb-4 block uppercase leading-none">Local Expertise</span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 leading-tight">
                Superior Lawn Care Tailored for {cityData.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                {cityData.description} If you&apos;re searching for a premium <Link href="/services/lawn-mowing-service-near-me" className="text-brand-mid font-bold hover:underline">lawn mowing service near me</Link> in {cityData.name}, our push mower teams are ready to help.
              </p>
              
              <div className="grid gap-6 mb-10">
                {cityData.usps?.map((usp: any, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-brand-bg w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-brand-accent/10">
                      <Star className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{usp.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{usp.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/services" className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full text-brand-dark font-bold hover:bg-brand-accent hover:text-white transition-all transform hover:scale-105">
                Explore Our Service Tiers <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Neighborhoods Column */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-bg rounded-[2rem] -rotate-1 z-0" />
              <div className="relative z-10 bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100 text-left">
                <h3 className="text-2xl font-black text-brand-dark mb-8 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                  Neighborhoods We Serve
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  From strict HOAs to sprawling private residential developments, we provide elite service to:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cityData.neighborhoods.map((hood: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-4 rounded-xl group hover:border-brand-accent/50 hover:bg-white transition-all duration-300"
                    >
                      <Check className="w-5 h-5 text-brand-accent shrink-0" /> 
                      <span className="font-bold text-brand-dark text-sm group-hover:text-brand-accent transition-colors">{hood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Push Mowers (Reused from Home) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-mid/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">The Push Mower Advantage</h2>
            <p className="text-lg text-gray-300 font-light">Why properties in {cityData.name} look better when we&apos;re finished.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-colors">
              <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-accent/20">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Ultimate Precision</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                No massive machines hitting your fence or scalping your lawn. Our push mowers go exactly where we want them, delivering magazine-quality edges every time.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-colors">
              <div className="w-16 h-16 bg-brand-mid rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-mid/20">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Vibrant Health</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Heavy riding mowers weigh 1,000+ lbs, crushing soil and killing grass roots. Our lightweight gear protects your soil&apos;s structure for a naturally thicker, greener lawn.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-colors">
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-light/20">
                <span className="text-3xl">🏡</span>
              </div>
              <h3 className="text-2xl font-black mb-4">HOA Preferred</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Montgomery County HOAs love our results. We leave zero debris, zero ruts, and perfectly straight lines that keep your property in peak compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Overview (Simplified from Home) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">Service Area Pricing</h2>
            <p className="text-lg text-gray-600 font-medium italic">Starting at $45/visit in {cityData.name}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => (
              <div key={idx} className={`relative bg-white rounded-3xl p-8 shadow-xl flex flex-col border-2 ${service.popular ? 'border-brand-mid scale-105 z-10' : 'border-gray-50'}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-mid text-white px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-black text-brand-dark mb-2 tracking-tight">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-brand-mid">{service.price}</span>
                  <span className="text-gray-400 text-sm font-bold uppercase">/ Visit</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-brand-mid/10 p-1 rounded-full shrink-0">
                        <Check className="w-4 h-4 text-brand-mid" />
                      </div>
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-black transition-all shadow-md ${service.popular ? 'bg-brand-mid text-white hover:bg-brand-dark' : 'bg-gray-100 text-brand-dark hover:bg-gray-200'}`}>
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Specialized City Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight italic">Beyond Mowing in {cityData.name}</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We provide full-service seasonal maintenance to keep your {cityData.name} property in top condition year-round.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "Mulching", href: "/mulching", desc: "Eco-Friendly Hardwood" },
              { name: "Yard Cleanup", href: "/yard-cleanup", desc: "Seasonal Debris Removal" },
              { name: "Weed Removal", href: "/weed-removal", desc: "Detailed Manual Garden Care" },
              { name: "Edging", href: "/edging-trimming", desc: "Crisp Border Definition" },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="bg-brand-bg p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-accent transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-black text-brand-dark mb-2">{s.name}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter">Locals Ask, We Answer</h2>
            <p className="text-lg text-gray-600 font-medium italic">Common questions from our {cityData.name} residential clients.</p>
          </div>
          
          <FAQAccordion 
            items={cityData.faqs.map((faq: any) => ({
              question: faq.q,
              answer: faq.a
            }))} 
          />
        </div>
      </section>

      {/* 7. Final Premium CTA */}
      <section className="bg-brand-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/premium-lawn-mowing-montgomery-county-md-home-hero.webp"
            alt="Perfect green lawn final cta"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-dark overlay opacity-60" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
            Ready for the Best Lawn in {cityData.name}?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12">
            Join your neighbors who have switched to push-mower precision. Free quotes in under 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-12 py-6 bg-white text-brand-dark font-black rounded-lg hover:bg-brand-accent hover:text-white transition-all shadow-2xl text-xl transform hover:scale-105 active:scale-95">
              Request My Free Quote
            </Link>
            <a href={`sms:+15714050031?body=${encodeURIComponent(`Hello Prime Green! I'd like a free quote for my home in ${cityData.name}, MD.`)}`}
              className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-white/30 text-white font-black rounded-lg hover:bg-white/10 transition-all text-xl"
            >
              Text Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
