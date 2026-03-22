import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Check, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Mulching Services in Montgomery County, MD",
  description: "Eco-friendly mulching to protect your garden beds, retain moisture, and enhance beauty. Serving Gaithersburg, Rockville, and beyond.",
};

export default function MulchingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Professional Mulching Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Enhance your soil health and boost your curb appeal with our precision mulching services.
            </p>
            <Link href="/contact" className="bg-brand-accent px-10 py-4 rounded-lg font-black hover:bg-white hover:text-brand-dark transition-all">
              Request a Mulch Quote
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Healthy Soil, Beautiful Beds</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mulching is one of the most beneficial things you can do for your landscape. It helps regulate soil temperature, suppresses weeds, and retains the moisture your plants need to thrive during Maryland&apos;s humid summers. At Prime Green, we provide clean, professional mulch application that keeps your beds looking their best.
              </p>
              <ul className="space-y-4 mb-8">
                {["Protects root systems", "Suppresses weed growth", "Improves soil nutrients", "Instant curb appeal upgrade"].map((item, i) => (
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
        <h2 className="text-3xl md:text-4xl font-black mb-8">Ready to Refresh Your Garden Beds?</h2>
        <Link href="/contact" className="bg-white text-brand-dark px-10 py-5 rounded-md font-black hover:bg-brand-accent hover:text-white transition-all">
          Get My Free Mulching Quote
        </Link>
      </section>
    </>
  );
}
