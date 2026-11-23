import React, { useState, FormEvent } from "react";
import { X, CheckCircle } from "lucide-react"; // assumes lucide-react is installed
import { motion, AnimatePresence } from "framer-motion";
import { Package } from "@/data/packages";

/**
 * Props for the OrderModal component.
 */
interface OrderModalProps {
  /** Whether the modal is visible */
  isOpen: boolean;
  /** Callback to close the modal */
  onClose: () => void;
  /** The package the user is ordering – optional */
  selectedPackage?: Package | null;
}

/**
 * OrderModal – self‑contained modal dialog for ordering a package or
 * requesting a coverage / site‑survey inquiry.
 * Includes its own form state, simple validation, and a success animation.
 */
export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedPackage = null,
}) => {
  // Form fields state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // Submission / success state
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simple validation – for demo purposes just ensure required fields are non‑empty
  const isValid =
    fullName.trim() !== "" && phone.trim() !== "" && email.trim() !== "" && town !== "" && address.trim() !== "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          town,
          serviceOrPackage: selectedPackage ? `${selectedPackage.speedMbps} Mbps ${selectedPackage.lineType}` : 'General Inquiry',
          message: notes,
          website_confirm: '',
        }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send inquiry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Reset on close
  const handleClose = () => {
    // Reset internal state when the modal is closed
    setFullName("");
    setPhone("");
    setEmail("");
    setTown("");
    setAddress("");
    setNotes("");
    setSubmitted(false);
    onClose();
  };

  const towns = [
    "Balfour",
    "Greylingstad",
    "Grootvlei",
    "Vaal",
    "Nigel",
    "Heidelberg",
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-slate-950/80 backdrop-blur-md flex items-center justify-center fixed inset-0 z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-white relative shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Header / package summary */}
            <h2 className="text-xl font-semibold mb-4 text-center">
              {selectedPackage ? (
                <span>
                  Signing up for: {selectedPackage.speedMbps} Mbps {selectedPackage.lineType} Line @ R {selectedPackage.priceR}/mo
                </span>
              ) : (
                "Request Coverage / General Inquiry"
              )}
            </h2>

            {/* Success animation */}
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <CheckCircle className="w-16 h-16 text-cyan-400" />
                  <p className="text-center text-lg font-medium">
                    Thank you! The MasterHoster team will contact you shortly to confirm coverage and schedule installation.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                  {/* Town selector */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="town">
                      Town
                    </label>
                    <select
                      id="town"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    >
                      <option value="" disabled>
                        -- Select Town --
                      </option>
                      {towns.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">
                      Street / Farm Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                  {/* Additional notes */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="notes">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                    />
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="w-full mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md shadow-lg transition-all disabled:opacity-50"
                  >
                    Submit Application / Site Survey Request
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
