"use client";

import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import PreviewCollage from "./preview-collage";

const images = [
  "/audit-inplace.png",
  "/trainer-management.png",
  "/documentation.png",
  "/scheduling.png",
];

const factCards = [
  {
    title: "60% of RTOs fail audits on admin gaps",
    description:
      "Most non-compliances are due to documentation or process errors—not training quality.",
    color: "bg-amber-800",
  },
  {
    title: "ASQA issued over 500 improvement notices last year",
    description: "Self-assurance is now mandatory. Is your RTO ready?",
    color: "bg-orange-400",
  },
  {
    title: "92% of providers use spreadsheets to manage compliance",
    description: "Manual processes introduce avoidable risk and cost.",
    color: "bg-violet-50",
  },
  {
    title: "Compliance costs RTOs $30K+ annually",
    description: "Reduce cost and stress with automation and audit readiness.",
    color: "bg-blue-50",
  },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      alert("Thanks for signing up!");
      setEmail(""); // clear the form
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-12 overflow-hidden">
      <PreviewCollage images={images} />

      {/* 📊 Facts Above */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-0 mb-10">
        {factCards.map((fact, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 text-left shadow-md text-gray-900 ${fact.color}`}
          >
            <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
            <p className="text-sm text-gray-700">{fact.description}</p>
          </div>
        ))}
      </div>

      {/* 🧊 Glass CTA */}
      <Flex
        direction="column"
        gap="5"
        className="z-10 relative bg-white/20 backdrop-blur-md shadow-lg p-8 rounded-2xl border border-white/30 max-w-xl w-full"
      >
        <Flex gap="2" align="center" justify="center">
          <img alt="" src="va-logo.svg" className="h-12 w-auto" />
          <Text size="8" weight="medium" color="iris">
            launching soon
          </Text>
        </Flex>
        <Text color="gray" className="max-w-lg mx-auto">
          We're working hard to bring you the best compliance platform for RTOs.
          Get notified when we launch.
        </Text>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col sm:flex-row gap-3"
        >
          <TextField.Root
            type="email"
            placeholder="Enter your email"
            required
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="px-6 py-2 bg-accent text-white rounded-md"
          >
            Notify Me
          </Button>
        </form>
      </Flex>

      {/* 📊 Facts Below (optional duplicate or testimonial cards here) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-0 mt-10">
        {factCards.map((fact, i) => (
          <div
            key={`bottom-${i}`}
            className={`rounded-xl p-6 text-left shadow-md text-gray-900 ${fact.color}`}
          >
            <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
            <p className="text-sm text-gray-700">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
