"use client";

import { Package } from '@/data/packages';
import React, { useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingGrid } from "@/components/PricingGrid";

import { OrderModal } from "@/components/OrderModal";
import Link from "next/link";

export default function PackagesPage() {
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
      <main className="bg-slate-950 min-h-screen text-white py-8 px-4">
        <Link href="/" className="inline-block mb-4 text-sm text-cyan-300 hover:underline">← Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-cyan-400">
          Choose the Perfect Connection for Your Home or Business
        </h1>
        <p className="text-center text-slate-300 mb-8">
          Explore our Silver, Gold, and Platinum lines to find the plan that fits your needs.
        </p>
        <PricingGrid onOrderPackage={(pkg) => handleOpenModal(pkg)} />
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
