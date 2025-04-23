"use client";

import Benefits from "./components/benefit";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import { useRef } from "react";
import Features from "./components/features/features";

export default function Home() {
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
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
