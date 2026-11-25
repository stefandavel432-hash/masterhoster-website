import React from "react";

/**
 * StatsBar – horizontal glass‑morphic bar displaying key enterprise metrics.
 */
export const StatsBar: React.FC = () => {
  const metrics = [
    { label: "99.9% Uptime Guarantee" },
    { label: "Serving Balfour, Heidelberg, Nigel, Grootvlei, Greylingstad, Vaal, Vaal Marina, Vereeniging & Surrounds" },
    { label: "< 15ms Average Local Latency" },
    { label: "Same‑Day On‑Site Support" },
  ];

  return (
    <section className="w-full py-8 bg-gradient-to-b from-cyan-500/10 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {metrics.map((m) => (
            <div key={m.label} className="text-center text-sm text-white">
              <span className="font-medium text-cyan-400">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
