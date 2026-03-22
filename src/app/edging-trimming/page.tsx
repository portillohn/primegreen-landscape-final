import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Edging and Trimming Services | Montgomery County, MD",
  description: "Give your lawn a professional finish with our precision edging and trimming services. Serving Gaithersburg, Rockville, and the surrounding areas.",
};

export default function EdgingTrimmingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Precision Edging & Trimming</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              The details make the difference. We provide the crisp, clean borders your property deserves.
            </p>
            <Link href="/contact" className="bg-brand-accent px-10 py-4 rounded-lg font-black hover:bg-white hover:text-brand-dark transition-all">
              Request a Detail Quote
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Sharpen Your Curb Appeal</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nothing completes a mowed lawn like perfectly edged walkways and tidy fence lines. We use professional-grade equipment to define your garden beds and pathways with surgical precision. Our trimming service ensures that even the hardest-to-reach areas are kept neat and uniform.
              </p>
              <ul className="space-y-4 mb-8">
                {["Vertical sidewalk edging", "Bed definition", "Precision string trimming", "Debris-free finish"].map((item, i) => (
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
        <h2 className="text-3xl md:text-4xl font-black mb-8">Ready for the Prime Green Polish?</h2>
        <Link href="/contact" className="bg-white text-brand-dark px-10 py-5 rounded-md font-black hover:bg-brand-accent hover:text-white transition-all">
          Get My Free Quote
        </Link>
      </section>
    </>
  );
}
