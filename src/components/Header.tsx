'use client';

import React from "react";
import Link from "next/link";

export interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const handleViewPackages = () => {
    // Navigate to packages page (or scroll to an anchor)
    window.location.href = "/packages";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2 text-white">
          <span className="text-2xl font-bold text-cyan-400">🛰️</span>
          <span className="text-xl font-bold">MasterHoster</span>
        </Link>

        {/* Navigation & Actions */}
        <div className="flex items-center space-x-4">
          {/* Quick links – hidden on small screens */}
          <nav className="hidden md:flex space-x-4 text-sm text-slate-300">
            <Link href="/packages" className="hover:text-white">Packages</Link>
            <Link href="/speed-test" className="hover:text-white">Speed Test</Link>
            <Link href="/about" className="hover:text-white">About</Link>
          </nav>

          {/* Action buttons */}
          <button
            type="button"
            onClick={handleViewPackages}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-sm font-medium"
          >
            View Packages
          </button>
          <button
            type="button"
            onClick={() => {
              if (onOpenContact) onOpenContact();
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-5
5 text-white rounded-md text-sm font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};
