'use client';

import React, { useState } from "react";
import Header from "@/components/Header";
import SpeedTestSection from "@/components/SpeedTestSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OrderModal from "@/components/OrderModal";

export default function SpeedTestPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header onOpenContact={() => setContactOpen(true)} />
      <main className="flex-1 pt-8">
        <SpeedTestSection />
      </main>
      <Footer onOpenContact={() => setContactOpen(true)} />
      <WhatsAppButton />
      <OrderModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
