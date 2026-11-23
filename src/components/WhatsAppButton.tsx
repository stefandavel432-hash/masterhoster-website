'use client';

export function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/27XXXXXXXXX?text=Hi%20MasterHoster%2C%20I%27d%20like%20to%20inquire%20about%20internet%20coverage%20and%20packages.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-2xl transition-transform hover:scale-110 hover:bg-emerald-400"
      style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
