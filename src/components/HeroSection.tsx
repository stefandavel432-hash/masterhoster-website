'use client';

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { NetworkOrbCanvas } from "@/components/NetworkOrbCanvas";

export function HeroSection({ onOpenContact }: { onOpenContact: () => void }) {
  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      alert("Contact modal would open here.");
    }
  };

  return (
    <section
      className={twMerge(
        "w-full py-20 px-4 sm:px-6 lg:px-8",
        "bg-gradient-to-r from-slate-900 to-indigo-900 text-white",
        "relative overflow-hidden",
        "bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"
      )}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      {/* Network status badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        <span className={clsx("block w-3 h-3 rounded-full bg-green-500", "animate-pulse")} />
        <span className="text-sm font-medium">
          Network Status: 100% Operational across Balfour, Heidelberg &amp; Surrounds
        </span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left column */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <motion.h1
            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          >
            Wireless Internet, Reimagined.
          </motion.h1>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={twMerge(
                "px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md shadow-md"
              )}
              onClick={() => (window.location.href = "/packages")}
            >
              View Packages
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={twMerge(
                "px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md shadow-md"
              )}
              onClick={handleContactClick}
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Right column – 3D/Canvas orb */}
        <div className="flex-1 flex items-center justify-center max-w-md">
          <NetworkOrbCanvas />
        </div>
      </div>
    </section>
  );
}
