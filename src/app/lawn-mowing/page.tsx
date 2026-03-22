import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Check, MapPin, Star, ShieldCheck, Leaf, Clock, CreditCard, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Lawn Mowing Services in Montgomery County, MD",
  description: "Elite residential lawn mowing in Gaithersburg, Rockville, and Montgomery Village. Precision push mower service for a healthier, greener lawn. Free quotes.",
};

const faqs = [
  { question: "How often should my lawn be mowed?", answer: "Weekly mowing is recommended from April to June. During the hot summer months, bi-weekly service is often sufficient." },
  { question: "Do you use riding mowers?", answer: "No. We exclusively use professional push mowers to prevent soil compaction and provide a superior, high-detail cut." },
  { question: "What areas do you serve?", answer: "We serve Montgomery Village, Gaithersburg, Rockville, Germantown, Bethesda, and Silver Spring." }
];

export default function LawnMowingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Professional Lawn Mowing Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              The precision of a push mower, the reliability of a local team. Serving homeowners across Montgomery County, MD.
            </p>
            <Link href="/contact" className="bg-brand-accent px-10 py-4 rounded-lg font-black hover:bg-white hover:text-brand-dark transition-all">
              Get My Free Estimate
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Expert Mowing for Residential Lawns</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Most companies rush through residential yards with heavy riding mowers that damage the soil. At Prime Green Landscape LLC, we believe your lawn deserves better. Our push mower service is designed to deliver a pristine, precise cut that enhances your home&apos;s curb appeal while protecting the long-term health of your grass.
              </p>
              <ul className="space-y-4 mb-8">
                {["Perfectly straight lines", "Crisp edging along walkways", "No soil compaction", "Quiet, neighbor-friendly equipment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand-accent" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/after.png" alt="Freshly mowed lawn" fill className="object-cover" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Service Areas for Lawn Mowing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Montgomery Village", "Gaithersburg", "Rockville", "Germantown", "Bethesda", "Silver Spring"].map((city) => (
              <Link key={city} href={`/areas/${city.toLowerCase().replace(" ", "-")}`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-accent transition-colors flex items-center justify-between group">
                <span className="font-bold text-brand-dark">{city}, MD</span>
                <ChevronRight className="text-gray-300 group-hover:text-brand-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-brand-dark py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Ready for a Better Lawn Cut?</h2>
        <Link href="/contact" className="bg-white text-brand-dark px-10 py-5 rounded-md font-black hover:bg-brand-accent hover:text-white transition-all">
          Request My Free Quote
        </Link>
      </section>
    </>
  );
}
