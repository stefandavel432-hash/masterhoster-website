import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How fast is installation?",
    answer:
      "Standard local dispatch and setup within 24–48 hours across Heidelberg, Balfour, and surrounding areas.",
  },
  {
    question: "Are all Wi‑Fi packages truly uncapped?",
    answer:
      "Yes, all our home and business packages are 100% uncapped with zero Fair Usage Policy (FUP) throttling.",
  },
  {
    question: "Do you supply the Wi‑Fi router?",
    answer:
      "Yes, we provide pre‑configured Wi‑Fi routers with our packages, or we can integrate with your existing router infrastructure.",
  },
  {
    question: "What other IT & Security services do you provide?",
    answer:
      "Beyond internet, we handle VoIP phone systems, security camera (CCTV) setups, network cabling, and local IT maintenance.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-slate-950 text-white">
      <div className="px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex justify-between items-center p-4 text-left text-sm md:text-base text-slate-200 hover:text-cyan-300 focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <span>{item.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                )}
              </button>
              <div
                className={`px-4 pb-4 text-slate-300 text-sm md:text-base transition-max-height duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
