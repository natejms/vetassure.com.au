"use client";

import { Button, Text, TextField, Flex, Badge } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

const statLinks = [
  {
    title: "79% of RTOs failed compliance at audit",
    description:
      "Most were due to administrative/documentation gaps — not training quality.",
    link: "https://www.asqa.gov.au/sites/default/files/2025-01/ASQA%20Regulation%20Report%20Q1-2%20December%202024.pdf#page=9",
  },
  {
    title: "ASQA received 1,485 tip-offs last year",
    description:
      "Including falsified records, non-genuine providers, and misconduct.",
    link: "https://www.asqa.gov.au/sites/default/files/2025-01/ASQA%20Regulation%20Report%20Q1-2%20December%202024.pdf#page=8",
  },
  {
    title: "ASQA recommends proactive self-assurance practices",
    description:
      "Providers are encouraged to systematically evaluate and improve their operations—not just rely on audits.",
    link: "https://www.asqa.gov.au/how-we-regulate/self-assurance-0/self-assurance-through-standards",
  },
];

const images = ["/audit-inplace.png", "/trainer-management.png"];

export default function LandingPage2() {
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
      setEmail("");
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <main
      onContextMenu={(e) => e.preventDefault()}
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 py-12 max-w-7xl mx-auto"
    >
      {/* Left: Form + Text */}
      <div className="z-10 max-w-xl text-left space-y-6">
        <Badge>Launching May 2025</Badge>
        <img alt="" src="/va-logo.svg" className="h-10 mb-4" />
        <Flex direction={"column"} gap={"4"}>
          <Text size="8" weight="medium">
            Goodbye spreadsheets, hello compliance.
          </Text>
          <Text color="gray" className="max-w-md">
            VETAssure's compliance management suite takes the guess work out of
            your organisation's regulatory compliance. Get notified at launch.
          </Text>
        </Flex>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md"
        >
          <TextField.Root
            type="email"
            placeholder="Enter your email"
            required
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="px-6 py-2 bg-accent text-white">
            Notify Me
          </Button>
        </form>

        <Text size={"3"} weight={"medium"}>
          Why we are here
        </Text>
        <ul className="space-y-3 pt-4 text-sm text-gray-600">
          {statLinks.map((fact, i) => (
            <li key={i}>
              <a
                href={fact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <strong>{fact.title}</strong> — {fact.description}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: UI Screenshots */}
      <div className="hidden lg:block relative w-[700px] h-[400px] flex-shrink-0">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute w-[600px] h-[300px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 blur-xs ${
              i === 0
                ? "-rotate-6 right-0 -top-28 z-10"
                : "rotate-3 top-28 z-20"
            }`}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          >
            <Image
              src={src}
              alt={`UI Preview ${i}`}
              fill
              draggable={false}
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        ))}
      </div>
    </main>
  );
}
