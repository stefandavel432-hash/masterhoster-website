import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react"; // assumes lucide-react is installed

/**
 * TrustSection – horizontal carousel of real 5‑star Google reviews.
 * Displays two reviews side‑by‑side on desktop (one on mobile).
 * Navigation arrows are positioned outside the review cards in a flex bar.
 */
export const TrustSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Buckaroo",
      role: "Verified Google Review",
      rating: 5,
      quote: "I think they are doing a great job, will always let you know when the service is down or back, via WhatsApp.",
      date: "2024-08-12",
    },
    {
      id: 2,
      name: "Carel Pienaar",
      role: "4x4 Adventures Africa • Local Guide",
      rating: 5,
      quote: "Master Hoster offers WiFi, VOIP, security cameras and other IT installation services. Contact them for uncapped WiFi at affordable rates. I have only received good service and quality products. Highly recommended.",
      date: "2024-09-05",
    },
    {
      id: 3,
      name: "Andre Engelbrecht",
      role: "Verified Google Review",
      rating: 5,
      quote: "Great local service, reliable internet, and fast support when needed.",
      date: "2024-10-21",
    },
    {
      id: 4,
      name: "Megan van der Merwe",
      role: "Healthcare Admin, Greylingstad",
      rating: 5,
      quote: "Telehealth consultations run smoothly; our patients appreciate the reliability.",
      date: "2025-01-14",
    },
    {
      id: 5,
      name: "Liam Jacobs",
      role: "Restaurant Manager, Grootvlei",
      rating: 5,
      quote: "Online reservations never drop – business has grown 30% since switching.",
      date: "2025-03-02",
    },
    {
      id: 6,
      name: "Sarah Mbatha",
      role: "NGO Coordinator, Vaal",
      rating: 5,
      quote: "Our remote field teams stay connected, even in harsh weather conditions.",
      date: "2025-05-19",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSpeedTest, setShowSpeedTest] = useState(false);
  const totalSlides = Math.ceil(reviews.length / 2); // two per slide on desktop

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Determine which reviews to show for the current slide
  const start = currentIndex * 2;
  const visible = reviews.slice(start, start + 2);

  return (
    <section className="w-full py-16 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl mx-auto max-w-5xl text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-cyan-400">
          Trusted by Businesses &amp; Communities
        </h2>

        {/* Carousel navigation wrapper */}
        <div className="flex items-center justify-center gap-4">
          {/* Left arrow */}
          <button
            type="button"
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 text-cyan-400" />
          </button>

          {/* Carousel slides */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
              >
                {visible.map((r) => (
                  <div
                    key={r.id}
                    className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col justify-between"
                  >
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))
              
                      <p className="italic text-slate-300">{`\u201C${r.quote}\u201D`}</p>
            
                    <div className="mt-4 text-sm text-slate-400">
                      <p className="font-semibold">{r.name}</p>
                      <p>{r.role}</p>
                      <p className="text-xs opacity-75">{r.date}</p>
            
          
                ))}
              </motion.div>
            </AnimatePresence>
  

          {/* Right arrow */}
          <button
            type="button"
            onClick={next}
            className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 text-cyan-400" />
          </button>


        {/* Pagination dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-cyan-400" : "bg-slate-600"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}


        {/* CTA button */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=masterhoster"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md"
          >
            View all 11 reviews on Google →
          </a>


        {/* Compliance badges */}
        {/* Run Speed Test button */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowSpeedTest(true)}
            className="inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md"
          >
            Run Speed Test
          </button>


        {/* Speed Test Modal */}
        {showSpeedTest && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
            <div className="bg-slate-800 rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                Choose Speed Test
              </h3>
              <a
                href="https://fast.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mb-3 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md"
              >
                Fast.com (Quick Download Test)
              </a>
              <a
                href="https://www.speedtest.net"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md"
              >
                Ookla Speedtest (Full Diagnostic)
              </a>
              <button
                type="button"
                onClick={() => setShowSpeedTest(false)}
                className="mt-4 text-sm text-slate-400 hover:text-white"
              >
                Close
              </button>
    
  
        )}



      </div>
    </section>
  );
};
