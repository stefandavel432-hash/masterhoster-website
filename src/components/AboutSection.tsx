import React from "react";
import { Laptop, ShieldCheck, Users } from "lucide-react"; // Icons for visual cues

/**
 * AboutSection – brand‑authority section placed on the homepage before pricing.
 * Contains a heading, descriptive story, and three value‑prop cards.
 */
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const towns = ["Balfour", "Heidelberg", "Nigel", "Greylingstad", "Grootvlei", "Vaal"];

  const props = [
    {
      title: "Local Fiber‑Backed Wireless Infrastructure",
      description:
        "High‑capacity microwave links designed for ultra‑low latency and storm resiliency.",
      icon: <Laptop className="w-8 h-8 text-cyan-400" />, // placeholder icon
    },
    {
      title: "Human‑First Support",
      description:
        "Direct access to local technicians who live and work in your area—no overseas call centers.",
      icon: <Users className="w-8 h-8 text-cyan-400" />, // placeholder icon
    },
    {
      title: "Regulatory Integrity",
      description:
        "Fully licensed under the ICASA ECNS/ECS framework and strictly compliant with the ISPA Code of Conduct.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />, // placeholder icon
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 text-white bg-slate-950">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Empowering Local Communities &amp; Enterprises with Enterprise‑Grade Infrastructure
        </h2>
        <p className="mt-4 text-slate-300">
          MasterHoster is committed to delivering high‑speed, reliable wireless connectivity across {towns.join(", ")}.
          Our network blends cutting‑edge technology with locally‑rooted service, ensuring every home and business
          enjoys uninterrupted access to the digital world.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md shadow-md"
          onClick={() => (window.location.href = "/about")}
        >
          Learn About Our Network
        </button>
      </div>

      {/* Value‑prop grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {props.map((p) => (
          <div
            key={p.title}
            className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 text-center"
          >
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">{p.title}</h3>
            <p className="text-sm text-slate-300">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
