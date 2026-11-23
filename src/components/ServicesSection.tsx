"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, PhoneCall, Mail, Server, ChevronDown } from "lucide-react"; // assumes lucide-react is installed

/**
 * ServicesSection – interactive accordion cards for each service.
 * Props:
 *   onInquire?: (serviceName: string) => void – callback when the CTA inside an expanded drawer is clicked.
 */
export interface ServicesSectionProps {
  onInquire?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquire }) => {
  const services = [
    {
      title: "Wireless Internet",
      Icon: Wifi,
      summary:
        "High‑speed uncapped lines, low‑latency microwave backhaul, line‑of‑sight checks, 24/7 Highveld tower monitoring.",
      features: [
        "Uncapped high‑speed lines",
        "Low‑latency microwave backhaul",
        "Automatic line‑of‑sight signal verification",
        "24/7 tower health monitoring across the Highveld",
      ],
    },
    {
      title: "VoIP Solutions",
      Icon: PhoneCall,
      summary:
        "SIP trunks & hosted PABX, custom extension routing, cost‑effective local call rates, crystal‑clear digital voice quality.",
      features: [
        "SIP trunks & hosted PABX",
        "Custom extension routing and call handling",
        "Competitive local and international rates",
        "HD voice quality with low jitter",
      ],
    },
    {
      title: "Email Hosting",
      Icon: Mail,
      summary:
        "Custom domain setup (@yourbusiness.co.za), advanced spam/phishing filtering, webmail & Outlook sync, 99.9% uptime.",
      features: [
        "Custom domain email addresses",
        "Enterprise‑grade spam & phishing protection",
        "Webmail plus Outlook/IMAP sync",
        "99.9% SLA uptime guarantee",
      ],
    },
    {
      title: "IT Solutions & Support",
      Icon: Server,
      summary:
        "On‑site network cabling & router config, firewall & security audits, hardware maintenance, local technician dispatch across Balfour & Heidelberg.",
      features: [
        "On‑site network cabling & router configuration",
        "Firewall & security audits",
        "Hardware maintenance & replacement",
        "Local technician dispatch in Balfour, Heidelberg, Nigel, Greylingstad, Grootvlei & Vaal",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-white bg-slate-950">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Complete Connectivity &amp; IT Solutions for Home &amp; Business
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {services.map((svc, idx) => (
          <motion.article
            key={svc.title}
            layout
            className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6"
          >
            {/* Gradient glow behind header */}
            <div
              className={twMerge(
                "absolute inset-0 rounded-2xl pointer-events-none",
                {
                  "Wireless Internet": "bg-cyan-500/10",
                  "VoIP Solutions": "bg-emerald-500/10",
                  "Email Hosting": "bg-indigo-500/10",
                  "IT Solutions & Support": "bg-indigo-500/10",
                }[svc.title] || "bg-gray-500/5"
              )}
            />
            <div className="relative flex flex-col items-center">
              <svc.Icon className="w-12 h-12 mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">{svc.title}</h3>
            </div>
            <p className="text-sm mb-4 text-slate-300 text-center">{svc.summary}</p>
            {/* Trigger button */}
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
            >
              {openIndex === idx ? "Hide Details" : "View Full Features"}
              <ChevronDown
                className={`w-5 h-5 ml-1 transition-transform ${openIndex === idx ? "transform rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {svc.features.map((f) => (
                      <span
                        key={f}
                        className={twMerge(
                          "px-2 py-1 text-sm rounded-full border",
                          {
                            "Wireless Internet": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                            "VoIP Solutions": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                            "Email Hosting": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                            "IT Solutions & Support": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                          }[svc.title] || "bg-gray-200/10 text-gray-400 border-gray-400/20"
                        )}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => onInquire?.(svc.title)}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md"
                  >
                    Inquire About {svc.title}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}

      </div>
    </section>
  );
};