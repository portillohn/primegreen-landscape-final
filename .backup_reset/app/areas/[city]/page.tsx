import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceAreasData } from '@/lib/data';
import Link from 'next/link';
import { MapPin, Check, ChevronRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

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
      canonical: `https://primegreenlandscape.com/areas/${params.city}`,
    }
  };
}

export default function CityAreaPage({ params }: { params: { city: string } }) {
  const cityData = serviceAreasData[params.city];
  
  if (!cityData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prime Green Landscape LLC",
    "description": `Professional residential lawn mowing in ${cityData.name}, MD`,
    "url": `https://primegreenlandscape.com/areas/${params.city}`,
    "telephone": "(571) 405-0031",
    "areaServed": `${cityData.name}, Maryland`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "addressRegion": "MD",
      "postalCode": cityData.zip
    },
    "priceRange": "$$",
    "openingHours": "Mo-Sa 07:00-19:00"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* City Hero */}
      <section className="bg-brand-dark pt-[156px] md:pt-[168px] pb-16 border-b border-brand-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span className="font-semibold tracking-wide text-sm">{cityData.name}, MD</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{cityData.h1}</h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Exclusive push mower lawn care for homeowners who expect perfection.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content & Neighborhoods */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Description */}
            <FadeIn>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Local Care You Can Trust</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {cityData.description}
              </p>
              
              <Link href="/services" className="inline-flex items-center text-brand-accent font-bold hover:text-brand-dark transition-colors">
                View our service tiers <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </FadeIn>

            {/* Neighborhoods */}
            <FadeIn delay={0.2} className="bg-brand-bg rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Neighborhoods We Serve in {cityData.name}</h2>
              <p className="text-gray-600 mb-6">
                From strict HOAs to private residential developments, we proudly service:
              </p>
              <div className="flex flex-wrap gap-3">
                {cityData.neighborhoods.map((hood: string, idx: number) => (
                  <span 
                    key={idx} 
                    className="flex items-center gap-1.5 bg-white border border-gray-200 text-brand-dark font-medium px-4 py-2 rounded-lg text-sm shadow-sm"
                  >
                    <Check className="w-4 h-4 text-brand-accent" /> {hood}
                  </span>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Pricing CTA Banner */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Serving {cityData.name} Starting at $45/visit
            </h2>
            <p className="text-gray-600 mb-8">
              No contracts. Pay via secure online invoice after every cut. Free quote within 2 hours.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-brand-accent text-white font-bold rounded-md hover:bg-brand-dark transition-colors shadow-sm text-lg">
              Get Your Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
