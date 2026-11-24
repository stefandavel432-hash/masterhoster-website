'use client';

import React from "react";
import Link from "next/link";

export interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleViewPackages = () => {
    window.location.href = "/packages";
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-white">
          <span className="text-2xl font-bold text-cyan-400">🛰️</span>
          <span className="text-xl font-bold">MasterHoster</span>
        </Link>
        <div className="flex items-center space-x-4">
          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden focus:outline-none text-slate-300 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <nav className="hidden md:flex space-x-4 text-sm text-slate-300">
            <Link href="/packages" className="hover:text-white">Packages</Link>
            <Link href="/speed-test" className="hover:text-white">Speed Test</Link>
            <Link href="/about" className="hover:text-white">About</Link>
          </nav>
          <button
            type="button"
            onClick={handleViewPackages}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-sm font-medium"
          >
            View Packages
          </button>
          <button
            type="button"
            onClick={() => { if (onOpenContact) onOpenContact(); }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-sm font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex flex-col items-center pt-20 transition-opacity duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4 text-xl text-white">
            <Link href="/packages" onClick={toggleMenu} className="hover:text-cyan-400">Packages</Link>
            <Link href="/speed-test" onClick={toggleMenu} className="hover:text-cyan-400">Speed Test</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-cyan-400">About</Link>
            <button onClick={handleViewPackages} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-md">View Packages</button>
            <button onClick={() => { if (onOpenContact) onOpenContact(); }} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md">Contact Us</button>
          </nav>
        </div>
      )}
    </header>
  );
};