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
        <Link href="/" className="flex items-center gap-2.5 text-white shrink-0 whitespace-nowrap" aria-label="MasterHoster - Your WiFi & IT Specialists">
          <img
            src="/mh-logo-mark.jpg"
            alt="MasterHoster logo"
            className="h-9 w-9 rounded-lg object-cover shrink-0"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">MasterHoster</span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-cyan-400">YOUR WIFI &amp; IT SPECIALISTS</span>
          </span>
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
            onClick={() => { if (onOpenContact) onOpenContact(); }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-sm font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
