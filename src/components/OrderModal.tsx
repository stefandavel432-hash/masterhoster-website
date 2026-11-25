'use client';

import React, { useState } from "react";

export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: any;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const towns = [
    "Balfour",
    "Heidelberg",
    "Nigel",
    "Grootvlei",
    "Greylingstad",
    "Vaal",
    "Vaal Marina",
    "Vereeniging",
    "Other / Surrounds",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const packageName = selectedPackage
      ? typeof selectedPackage === "string"
        ? selectedPackage
        : selectedPackage.name || selectedPackage.title || selectedPackage.id || "Selected Package"
      : "";

    const subject = `Coverage Request / Inquiry - ${fullName} (${town || 'General'})`;
    
    const bodyLines = [
      `MasterHoster Coverage & Site Survey Request`,
      `-------------------------------------------`,
      `Full Name: ${fullName}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Town: ${town || 'Not specified'}`,
      `Address: ${address || 'N/A'}`,
      packageName ? `Package: ${packageName}` : "",
      notes ? `Additional Notes: ${notes}` : "",
    ].filter(Boolean).join("\n");

    const mailtoUrl = `mailto:accounts@masterhoster.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
    
    window.location.href = mailtoUrl;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl text-slate-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white text-lg font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h3 className="text-xl font-bold text-white mb-4 text-center">
          Request Coverage / General Inquiry
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Stefan"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 082 000 0000"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. yourname@domain.co.za"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Town *
            </label>
            <select
              required
              value={town}
              onChange={(e) => setTown(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            >
              <option value="">-- Select Town --</option>
              {towns.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Street / Farm Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. 123 Main Street / Farm Name"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Additional Notes
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific requirements or questions..."
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md shadow transition-colors text-sm"
          >
            Send Email Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
