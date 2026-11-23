import React from "react";

/**
 * Footer – corporate footer with four columns, regulatory sub‑bar and dynamic year.
 * All styles are Tailwind utilities; no external dependencies beyond React.
 */
export interface FooterProps { onOpenContact?: () => void }
export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();
  const towns = [
    "Balfour",
    "Greylingstad",
    "Grootvlei",
    "Vaal",
    "Nigel",
    "Heidelberg",
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-6">
      {/* Main 4‑column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 – Brand */}
        <div>
          {/* Placeholder logo – replace with actual image or SVG */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-cyan-400">🛰️</span>
            <span className="text-2xl font-bold">MasterHoster</span>
          </div>
          <p className="mb-3 text-sm">Your WiFi &amp; IT Specialists</p>
          <p className="text-xs font-medium">Serving:</p>
          <ul className="text-xs mt-1 space-y-0.5">
            {towns.map((t) => (
              <li key={t}>- {t}</li>
            ))}
          </ul>
        </div>

        {/* Column 2 – Services Links */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-slate-200">Services</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="/packages" className="hover:text-white transition-colors">
                Wireless Packages
              </a>
            </li>
            <li>
              <a href="/services#voip" className="hover:text-white transition-colors">
                VoIP Solutions
              </a>
            </li>
            <li>
              <a href="/services#email" className="hover:text-white transition-colors">
                Email Hosting
              </a>
            </li>
            <li>
              <a href="/services#it" className="hover:text-white transition-colors">
                IT Support
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 – Legal & Regulatory */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-slate-200">Legal &amp; Regulatory</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="/legal/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/legal/aup" className="hover:text-white transition-colors">
                Acceptable Use Policy (AUP)
              </a>
            </li>
            <li>
              <a href="/legal/privacy" className="hover:text-white transition-colors">
                POPIA Privacy Notice
              </a>
            </li>
            <li>
              <a href="/legal/ispa" className="hover:text-white transition-colors">
                ISPA Code of Conduct
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 – Support & Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-slate-200">Support &amp; Contact</h4>
          <button
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                alert("Contact us form would open here.");
              }
            }}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded mb-3 transition-colors"
          >
            Contact Us
          </button>
          <p className="text-xs mb-2">
            Email: <a href="mailto:support@masterhoster.co.za" className="underline hover:text-white">support@masterhoster.co.za</a>
          </p>
          <a href="/support/emergency" className="text-xs text-cyan-400 hover:text-cyan-300 underline">
            Emergency Coverage Inquiry →
          </a>
        </div>
      </div>

      {/* Regulatory sub‑bar */}
      <div className="border-t border-slate-800 mt-8 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
          100% Licensed Network Infrastructure — Operating under ICASA ECNS/ECS Framework | ISPA Code of Conduct Compliant
        </div>
      </div>

      {/* Copyright line */}
      <div className="mt-4 text-center text-xs text-slate-500">
        © {currentYear} MasterHoster (Pty) Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};
