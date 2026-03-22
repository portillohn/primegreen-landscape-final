import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Expert Weed Removal Services | Montgomery County, MD",
  description: "Don't let weeds choke your lawn and garden. Our professional removal services restore the beauty and health of your property. Serving local MD homeowners.",
};

export default function WeedRemovalPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Expert Weed Removal</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Reclaim your garden beds and lawn with our detail-oriented weeding services.
            </p>
            <Link href="/contact" className="bg-brand-accent px-10 py-4 rounded-lg font-black hover:bg-white hover:text-brand-dark transition-all">
              Request a Weeding Quote
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Manual Precision, Lasting Results</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chemical sprays often only do half the job. We specialize in manual weed removal from garden beds and pathways, ensuring the roots are gone and your desirable plants can thrive. We also provide pre-emergent recommendations to keep new weeds from taking hold.
              </p>
              <ul className="space-y-4 mb-8">
                {["Hand-weeding in garden beds", "Pathway clearing", "Root-level removal", "Professional advice"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand-accent" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Say Goodbye to Stubborn Weeds</h2>
        <Link href="/contact" className="bg-white text-brand-dark px-10 py-5 rounded-md font-black hover:bg-brand-accent hover:text-white transition-all">
          Get My Free Quote
        </Link>
      </section>
    </>
  );
}
