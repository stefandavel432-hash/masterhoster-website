import React, { useState } from "react";
import { CheckCircle } from "lucide-react"; // assumes lucide-react is installed
import {
  silverPackages,
  goldPackages,
  platinumPackages,
  Package,
} from "@/data/packages";

/**
 * PricingGrid – displays silver and business (gold/platinum) packages in a glass‑morphic layout.
 * Includes tab switching, badge ribbons, feature checklist and an Order Now button.
 */
export interface PricingGridProps { onOrderPackage?: (pkg: Package) => void }
export const PricingGrid: React.FC<PricingGridProps> = ({ onOrderPackage }) => {
  const Tab = {
    Silver: "silver",
    Business: "business",
  } as const;

  const [activeTab, setActiveTab] = useState<(typeof Tab)[keyof typeof Tab]>(Tab.Silver);

  const packagesToShow: Package[] =
    activeTab === Tab.Silver
      ? silverPackages
      : [...goldPackages, ...platinumPackages];

  const handleOrder = (pkg: Package) => {
    if (onOrderPackage) {
      onOrderPackage(pkg);
    } else {
      alert(`Ordering ${pkg.speedMbps} Mbps package (R${pkg.priceR}/month)`);
    }
  };

  const renderBadge = (badge?: string) => {
    if (!badge) return null;
    const colors = {
      Popular: "from-pink-500 to-purple-500",
      "Best Value": "from-emerald-400 to-cyan-500",
      Fast: "from-yellow-400 to-orange-500",
    }[badge as keyof typeof colors] as string;
    return (
      <div
        className="absolute -top-2 -right-2 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r "
        style={{ backgroundImage: `linear-gradient(to right, ${colors})` }}
      >
        {badge.toUpperCase()}
      </div>
    );
  };

  const isHighlighted = (badge?: string) =>
    badge === "Popular" || badge === "Best Value";

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab(Tab.Silver)}
          className={
            activeTab === Tab.Silver
              ? "bg-cyan-600 text-white px-4 py-2 rounded-md"
              : "bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md"
          }
        >
          Wireless Silver Lines (Consumer)
        </button>
        <button
          onClick={() => setActiveTab(Tab.Business)}
          className={
            activeTab === Tab.Business
              ? "bg-cyan-600 text-white px-4 py-2 rounded-md"
              : "bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md"
          }
        >
          Gold & Platinum Lines (Business)
        </button>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packagesToShow.map((pkg) => (
          <div
            key={pkg.speedMbps}
            className={`relative bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 transition-all hover:border-cyan-500/50 ${
              isHighlighted(pkg.badge) ? "ring-2 ring-offset-2 ring-cyan-400/30" : ""
            }`}
          >
            {/* Badge ribbon */}
            {renderBadge(pkg.badge)}

            {/* Speed */}
            <h2 className="text-4xl font-extrabold text-cyan-400 mb-2">
              {pkg.speedMbps} Mbps
            </h2>

            {/* Optional badge text below speed */}
            {pkg.badge && (
              <div className="mb-2 text-sm font-medium text-white opacity-80">
                {pkg.badge}
              </div>
            )}

            {/* Price */}
            <p className="text-xl font-semibold mb-4">R {pkg.priceR} / month</p>

            {/* Feature checklist */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{pkg.uploadSpeedMbps}Mbps Upload</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Uncapped &amp; Unthrottled</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Local Support across Heidelberg &amp; Balfour</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Best Effort / Low Latency</span>
              </li>
            </ul>

            {/* Order button */}
            <button
              onClick={() => handleOrder(pkg)}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
