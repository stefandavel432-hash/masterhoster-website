"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TrustSection() {
  const [showSpeedTest, setShowSpeedTest] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Buckaroo",
      role: "Verified Google Review",
      date: "2024-08-12",
      rating: 5,
      quote: "I think they are doing a great job, will always let you know when the service is down or back, via WhatsApp.",
    },
    {
      id: 2,
      name: "Carel Pienaar",
      role: "4x4 Adventures Africa • Local Guide",
      date: "2024-09-05",
      rating: 5,
      quote: "Master Hoster offers WiFi, VOIP, security cameras and other IT installation services. Contact them for uncapped WiFi at affordable rates. I have only received good service and quality products. Highly recommended.",
    },
    {
      id: 3,
      name: "Local Business Client",
      role: "Verified Reviewer",
      date: "2024-10-01",
      rating: 5,
      quote: "Fast response times and rock-solid internet stability. Masterhoster has been key for our operational setup.",
    },
  ];

  const totalSlides = Math.ceil(reviews.length / 2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const start = currentIndex * 2;
  const visible = reviews.slice(start, start + 2);

  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Speed Test Header & Trigger */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Speed Test Gauge
          </h3>
          <button
            onClick={() => setShowSpeedTest(true)}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-2.5 rounded-md transition shadow-md"
          >
            Run Speed Test
          </button>
        </div>

        {/* Speed Test Selection Modal */}
        {showSpeedTest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md w-full shadow-2xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">Select Speed Test Tool</h3>
              <p className="text-slate-400 text-sm mb-6">
                Choose your preferred provider to measure your bandwidth performance.
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="https://fast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition"
                >
                  Fast.com (Quick Test)
                </a>
                <a
                  href="https://www.speedtest.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg border border-slate-600 transition"
                >
                  Ookla Speedtest (Full Diagnostic)
                </a>
              </div>
              <button
                onClick={() => setShowSpeedTest(false)}
                className="text-slate-400 hover:text-white text-sm font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Reviews Section Container */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-cyan-400 mb-8">
            Trusted by Businesses &amp; Communities
          </h2>

          <div className="relative px-8">
            <button
              onClick={prevSlide}
              aria-label="Previous reviews"
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visible.map((r) => (
                <div
                  key={r.id}
                  className="bg-slate-900/90 p-6 rounded-xl border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center mb-3">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="italic text-slate-300">"{r.quote}"</p>
                  </div>
                  <div className="mt-4 text-sm text-slate-400">
                    <p className="font-semibold text-slate-200">{r.name}</p>
                    <p>{r.role}</p>
                    <p className="text-xs opacity-75">{r.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              aria-label="Next reviews"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "bg-cyan-400" : "bg-slate-700"}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=masterhoster"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-2.5 rounded-lg transition"
            >
              View all 11 reviews on Google &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
