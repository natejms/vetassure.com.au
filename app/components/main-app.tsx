"use client";

import { useRef } from "react";
import Navbar from "./navbar";
import HeroSection from "./hero-section";
import Features from "./features/features";
import Benefits from "./benefit";
import PricingTable from "./pricing";
import Footer from "./footer";

export default function MainApp() {
  const featuresRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar />
      <main className="px-4 pb-12 pt-24">
        <HeroSection
          onCtaClick={() =>
            featuresRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <div ref={featuresRef}>
          <Features />
        </div>
        <Benefits />
        <PricingTable />
      </main>
      <Footer />
    </>
  );
}
