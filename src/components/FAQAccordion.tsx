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
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent"
          >
            <span className="font-semibold text-brand-dark pr-4">{item.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-brand-accent transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
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
                <div className="px-6 py-4 border-t border-gray-100 text-gray-600 leading-relaxed bg-brand-bg/50">
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
