import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Yard Cleanup Services | Montgomery County, MD",
  description: "Comprehensive yard cleanup for residential properties. We remove debris, clear leaves, and prep your lawn for the season. Serving Rockville, Gaithersburg, and more.",
};

export default function YardCleanupPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Professional Yard Cleanup</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Transform your property from overgrown to outstanding with our thorough cleanup services.
            </p>
            <Link href="/contact" className="bg-brand-accent px-10 py-4 rounded-lg font-black hover:bg-white hover:text-brand-dark transition-all">
              Request a Cleanup Quote
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Complete Results, No Stress</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A messy yard can be overwhelming. Whether it&apos;s storm recovery, seasonal prep, or just a property that needs some extra attention, our team provides the heavy lifting. We clear away branches, leaves, and debris, leaving your landscape clean and ready for enjoyement.
              </p>
              <ul className="space-y-4 mb-8">
                {["Leaf and branch removal", "Garden bed clearing", "Overgrowth trimming", "Debris hauling"].map((item, i) => (
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
        <h2 className="text-3xl md:text-4xl font-black mb-8">Let Us Do the Hard Work</h2>
        <Link href="/contact" className="bg-white text-brand-dark px-10 py-5 rounded-md font-black hover:bg-brand-accent hover:text-white transition-all">
          Get My Free Quote
        </Link>
      </section>
    </>
  );
}
