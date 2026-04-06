import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Leaf, Target, Handshake } from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Prime Green Landscape LLC | Montgomery County, MD",
  description: "Learn why Prime Green Landscape LLC is Montgomery County's trusted choice for precise, reliable, and professional residential lawn mowing.",
  openGraph: {
    images: [{
      url: `${siteConfig.url}/images/about/about-prime-green-landscape-montgomery-county.webp`,
      width: 1600,
      height: 900,
      alt: 'About Prime Green Landscape LLC in Montgomery County, Maryland',
    }],
  },
  alternates: { canonical: '/about' },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Prime Green Landscape LLC",
  "description": "Information about Prime Green Landscape LLC, our values, and our commitment to Montgomery County lawn care.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://primegreenlandscape.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://primegreenlandscape.com/about"
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[44vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-prime-green-landscape-montgomery-county.webp"
            alt="About Prime Green Landscape LLC"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/88 via-brand-dark/70 to-brand-dark/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-36 pb-24">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-xs mb-3 block uppercase">Montgomery County Professionals</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tighter">
              About Prime Green<br className="hidden md:block" /> Landscape LLC
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-lg leading-relaxed">
              Locally owned. Push-mower precision. Built for the homes of Montgomery County.
            </p>
          </div>
        </div>
      </section>


      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 tracking-tight">Started in Montgomery County. Built for Montgomery County.</h2>
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p>
              Prime Green Landscape LLC was founded on a simple realization: residential lawns in Montgomery County were suffering at the hands of massive commercial equipment. Homeowners were paying a premium for lawn care, only to be left with rutted soil, scalped edges, and grass that thinned out year after year due to severe soil compaction. We knew there was a better way, and it started with going back to the basics &mdash; push mowers.
            </p>
            <p>
              From day one, our commitment has been to residential quality over sheer volume. We aren&apos;t trying to mow 50 lawns a day, cutting corners to beat the clock. Instead, we take the time to treat every property with the meticulous care it deserves. Our lightweight push mowers allow us to achieve the perfect detail work around garden beds, fences, and hardscaping, ensuring your lawn enhances the aesthetic appeal of your home perfectly.
            </p>
            <p>
              Our promise to every homeowner across Montgomery Village, Gaithersburg, Rockville, and beyond is straightforward: we will treat your lawn like it&apos;s our own. We show up when we say we will, we execute with precision, and we utilize transparent, modern billing through Yardbook to make your experience completely hassle-free. Your curb appeal is our reputation.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 bg-brand-bg border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Target className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-xl font-bold text-brand-dark mb-4">Precision Over Speed</h3>
              <p className="text-gray-600">
                We take the time to do it right. Our push mowers ensure clean, straight lines and perfect edging without any rushed, sloppy cuts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Handshake className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-xl font-bold text-brand-dark mb-4">Honest & Transparent</h3>
              <p className="text-gray-600">
                Clear pricing, no surprises, no hidden fees, and never any contracts. Convenient online invoices via Yardbook for a seamless experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-xl font-bold text-brand-dark mb-4">Quality That Shows</h3>
              <p className="text-gray-600">
                Every visit, every lawn, every time. We&apos;re dedicated to improving your soil health and giving you the best-looking yard on the block.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT (TABLE) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 tracking-tight">Why We&apos;re Different</h2>
            <p className="text-lg text-gray-600">See how our specialized approach compares to standard volume-based lawn services.</p>
          </div>

          
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-brand-dark text-white text-lg">
                    <th className="py-5 px-6 font-semibold border-b border-brand-light">Feature</th>
                    <th className="py-5 px-6 font-bold bg-brand-accent/20 border-b border-brand-light">Prime Green LLC</th>
                    <th className="py-5 px-6 font-semibold border-b border-brand-light text-gray-300">Other Companies</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-700">Equipment</td>
                    <td className="py-4 px-6 font-bold text-brand-dark bg-brand-bg/50">Push mowers only</td>
                    <td className="py-4 px-6 text-gray-500">Heavy riders & zero-turns</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-700">Soil Impact</td>
                    <td className="py-4 px-6 font-bold text-brand-dark bg-brand-bg/50">Zero compaction</td>
                    <td className="py-4 px-6 text-gray-500">Compacts over time</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-700">Precision</td>
                    <td className="py-4 px-6 font-bold text-brand-dark bg-brand-bg/50">Detail-oriented</td>
                    <td className="py-4 px-6 text-gray-500">Volume-focused</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-700">Billing</td>
                    <td className="py-4 px-6 font-bold text-brand-dark bg-brand-bg/50">Easy Yardbook online invoice</td>
                    <td className="py-4 px-6 text-gray-500">Cash or check only</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-700">Contracts</td>
                    <td className="py-4 px-6 font-bold text-brand-dark bg-brand-bg/50">Never required</td>
                    <td className="py-4 px-6 text-gray-500">Often required</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-700">Response Time</td>
                    <td className="py-4 px-6 font-bold text-brand-dark bg-brand-bg/50">Within 2 hours</td>
                    <td className="py-4 px-6 text-gray-500">24–48 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </section>

      {/* OWNER SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-10">
            <div className="shrink-0 w-48 h-48 bg-white rounded-full flex items-center justify-center p-6 border-4 border-brand-accent shadow-lg relative overflow-hidden">
              <Image
                src="/images/about/about-prime-green-team-quality-maryland.webp"
                alt="Prime Green quality-focused residential lawn care team in Montgomery County"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-brand-dark mb-2 tracking-tight">The Prime Green Team</h2>
              <p className="text-brand-accent font-bold mb-6 tracking-wider uppercase text-sm">Montgomery County Lawn Care Professionals</p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                As local residents, we know the neighborhoods, the soil conditions, and the expectations of Montgomery County homeowners. We are deeply invested in our community and take personal pride in every lawn we service. Treating every property like it&apos;s our own isn&apos;t just a marketing slogan &mdash; it&apos;s the foundation of everything we do.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1.5 bg-brand-bg text-brand-dark px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-accent/30 tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Fully Insured
                </span>
                <span className="flex items-center gap-1.5 bg-brand-bg text-brand-dark px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-accent/30 tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" /> MD Licensed
                </span>
                <span className="flex items-center gap-1.5 bg-brand-bg text-brand-dark px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-accent/30 tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" /> HOA Compliant
                </span>
                <span className="flex items-center gap-1.5 bg-brand-bg text-brand-dark px-3 py-1.5 rounded-full text-sm font-semibold border border-brand-accent/30 tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Background Checked
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL CTA */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to work with true professionals?</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-brand-accent hover:text-white transition-all shadow-lg">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
