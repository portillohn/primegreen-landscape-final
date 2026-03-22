import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Seasonal Cleanup Services in Montgomery County, MD | Prime Green",
  description: "Spring and Fall cleanups to keep your property healthy year-round. Leaf removal, debris clearing, and bed prep. Serving Gaithersburg and nearby areas.",
};

export default function SeasonalCleanupPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Seasonal Cleanup Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Prepare your property for the changing Maryland seasons with our professional Spring and Fall cleanups.
            </p>
            <Link href="/contact" className="bg-brand-accent px-10 py-4 rounded-lg font-black hover:bg-white hover:text-brand-dark transition-all">
              Schedule My Cleanup
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Year-Round Property Health</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In Maryland, the changes between seasons can leave your yard covered in leaves and debris. Our seasonal cleanups focus on more than just appearance—we clear away the material that can suffocate your grass and harbor pests. From leaf removal in the fall to bed prep in the spring, we ensure your landscape is always at its best.
              </p>
              <ul className="space-y-4 mb-8">
                {["Leaf removal and hauling", "Perennial cut-backs", "Winter debris clearing", "Gutter cleaning (check availability)"].map((item, i) => (
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
        <h2 className="text-3xl md:text-4xl font-black mb-8">Don&apos;t Let the Leaves Pile Up</h2>
        <Link href="/contact" className="bg-white text-brand-dark px-10 py-5 rounded-md font-black hover:bg-brand-accent hover:text-white transition-all">
          Get My Free Quote
        </Link>
      </section>
    </>
  );
}
