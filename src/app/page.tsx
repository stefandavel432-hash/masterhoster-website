'use client';

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";

import { TrustSection } from "@/components/TrustSection";

import { StatsBar } from "@/components/StatsBar";
import { Footer } from "@/components/Footer";
import { OrderModal } from "@/components/OrderModal";
import { Package } from "@/data/packages";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleOpenModal = (pkg: Package | null = null) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <>
      <Header onOpenContact={() => handleOpenModal(null)} />
      <main className="bg-slate-950 min-h-screen text-white">
        <HeroSection onOpenContact={() => handleOpenModal(null)} />
        <StatsBar />
        <AboutSection />
        <ServicesSection onInquire={() => handleOpenModal(null)} />
        
        <TrustSection />
      </main>
      <Footer onOpenContact={() => handleOpenModal(null)} />
      <OrderModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPackage={selectedPackage}
      />
    </>
  );
}
