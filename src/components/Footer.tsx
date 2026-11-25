import React from "react";

export interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = 2026; // fixed as requested

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-6 overflow-x-hidden">
      {/* Main 4‑column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 – Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
            </svg>
            <span className="text-xl font-bold text-white ml-2">MasterHoster</span>
            <span className="block text-sm text-cyan-400">YOUR WIFI &amp; IT SPECIALISTS</span>
          </div>
          <p className="mb-3 text-sm">Your WiFi &amp; IT Specialists</p>
          <p className="text-xs font-medium">Serving:</p>
          <ul className="text-xs mt-1 space-y-0.5">
            <li>- Heidelberg</li>
            <li>- Balfour</li>
            <li>- Surrounds</li>
          </ul>
        </div>

        {/* Column 2 – Quick Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-slate-200">Quick Links</h4>
          <ul className="space-y-1 text-xs">
            <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
            <li><a href="#speedtest" className="hover:text-white transition-colors">Speed Test</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 – Legal & Regulatory */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-slate-200">Legal &amp; Regulatory</h4>
          <ul className="space-y-1 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/legal/aup" className="hover:text-white transition-colors">Acceptable Use Policy (AUP)</a></li>
            <li><a href="/legal/ispa" className="hover:text-white transition-colors">ISPA Code of Conduct</a></li>
          </ul>
        </div>

        {/* Column 4 – Support & Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-slate-200">Support &amp; Contact</h4>
          <button
            type="button"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                alert("Contact form would open here.");
              }
            }}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded mb-3 transition-colors"
          >
            Contact Us
          </button>
          <p className="text-xs mb-2">
            Email: <a href="mailto:support@masterhoster.co.za" className="underline hover:text-white">support@masterhoster.co.za</a>
          </p>
          <p className="text-xs mb-2">
            WhatsApp: <a href="https://wa.me/27820000000" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">Chat Now</a>
          </p>
          <p className="text-xs mb-2">
            Phone: <a href="tel:+27820000000" className="underline hover:text-cyan-300">+27 82 000 0000</a>
          </p>
          <a href="/support/emergency" className="text-xs text-cyan-400 hover:text-cyan-300 underline">Emergency Coverage Inquiry →</a>
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-8 text-center text-sm text-slate-400">
        Providing Uncapped Fibre, Wireless &amp; IT Solutions across Heidelberg, Balfour &amp; Surrounds.
      </div>

      {/* Regulatory sub‑bar */}
      <div className="border-t border-slate-800 mt-8 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
          100% Licensed Network Infrastructure — Operating under ICASA ECNS/ECS Framework | ISPA Code of Conduct Compliant
        </div>
      </div>

      {/* Copyright line */}
      <div className="mt-4 text-center text-xs text-slate-500">
        © {currentYear} MasterHoster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
