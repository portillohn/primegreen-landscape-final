"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion({
  items
}: {
  items: { question: string; answer: React.ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === index
              ? "border-brand-accent/40 shadow-md"
              : "border-gray-100 shadow-sm hover:shadow-md hover:border-brand-accent/20"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-5 min-h-[56px] flex items-center justify-between bg-white hover:bg-gray-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent/40"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-brand-dark pr-4 leading-snug">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-brand-accent transition-transform duration-300 shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 py-5 border-t border-gray-100 text-gray-600 leading-relaxed bg-brand-bg/40 text-sm md:text-base">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
