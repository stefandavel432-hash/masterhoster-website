'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Check } from 'lucide-react';
import Link from 'next/link';

/**
 * PackagesSection – interactive pricing showcase.
 *   • Category toggles switch the displayed package list.
 *   • Each card shows speed, price, features and a "Select Package" button.
 *   • The 30 Mbps / R699 tier is marked as "MOST POPULAR" with a cyan glow.
 *   • onSelectPackage is called with the package title when the CTA is clicked.
 */
export interface PackagesSectionProps {
  onSelectPackage?: (pkgName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const categories = [
    { id: 'home', label: 'Home Uncapped Wireless' },
    { id: 'business', label: 'Business Dedicated' },
    { id: 'voip', label: 'VoIP & IT Bundles' },
  ];

  const [activeCat, setActiveCat] = useState('home');

  // Define package data per category (could be expanded later)
  const packages = {
    home: [
      { speed: '15 Mbps', price: 499, popular: false },
      { speed: '30 Mbps', price: 699, popular: true },
      { speed: '50 Mbps', price: 899, popular: false },
      { speed: '100 Mbps', price: 1199, popular: false },
    ],
    business: [
      { speed: '30 Mbps', price: 799, popular: false },
      { speed: '50 Mbps', price: 999, popular: true },
      { speed: '100 Mbps', price: 1499, popular: false },
    ],
    voip: [
      { speed: '30 Mbps', price: 699, popular: false },
      { speed: '50 Mbps', price: 899, popular: false },
    ],
  } as const;

  const features = [
    'Uncapped & Unthrottled',
    '<15ms Local Latency',
    'Same-Day Technician Support',
    'Free Line-of-Sight Check',
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Choose the plan that fits you
      </h2>

      {/* Category toggles */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={twMerge(
              'px-4 py-2 rounded-md font-medium',
              activeCat === cat.id ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700',
            )}
            onClick={() => setActiveCat(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages[activeCat as keyof typeof packages].map((pkg) => (
          <div
            key={pkg.speed}
            className={twMerge(
              'relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6',
              pkg.popular ? 'border-cyan-500/50 shadow-[0_0_10px_2px_rgba(8,145,178,0.25)]' : '',
            )}
          >
            {/* Popular ribbon */}
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-xs font-semibold text-white px-2 py-0.5 rounded-full shadow-md">
                MOST POPULAR
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 text-cyan-300 text-center">
              {pkg.speed}
            </h3>
            <p className="text-2xl font-bold text-center mb-4">R{pkg.price}</p>
            <ul className="flex flex-col gap-2 mb-6">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-500" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={twMerge(
                'w-full px-4 py-2 rounded-md font-medium',
                'bg-cyan-600 hover:bg-cyan-500 text-white',
                'shadow-md',
              )}
              onClick={() => onSelectPackage?.(`${pkg.speed} – R${pkg.price}`)}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>

      {/* Optional link to full packages page */}
      <div className="mt-12 text-center">
        <Link href="/packages" className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md shadow-md">
          View All Packages
        </Link>
      </div>
    </section>
  );
};

export default PackagesSection;
