"use client";

import {
  Button,
  Text,
  TextField,
  Flex,
  Badge,
  Callout,
} from "@radix-ui/themes";
import { Loader2 } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const statLinks = [
  {
    title: "79% of RTOs failed compliance at audit",
    description:
      "Most were due to administrative/documentation gaps — not training quality.",
    link: "https://www.asqa.gov.au/sites/default/files/2025-01/ASQA%20Regulation%20Report%20Q1-2%20December%202024.pdf#page=9",
    reference: "ASQA - Q1-2 2024-25 Regulation Report FINAL",
  },
  {
    title: "ASQA received 1,485 tip-offs last year",
    description:
      "Including falsified records, non-genuine providers, and misconduct.",
    link: "https://www.asqa.gov.au/sites/default/files/2025-01/ASQA%20Regulation%20Report%20Q1-2%20December%202024.pdf#page=8",
    reference: "ASQA - Q1-2 2024-25 Regulation Report FINAL",
  },
  {
    title: "ASQA recommends proactive self-assurance practices",
    description:
      "Providers are encouraged to systematically evaluate and improve their operations—not just rely on audits.",
    link: "https://www.asqa.gov.au/how-we-regulate/self-assurance-0/self-assurance-through-standards",
    reference: "ASQA - Self-assurance through the Standards",
  },
];

const images = ["/audit-inplace.png", "/trainer-management.png"];

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

export default function LandingPage2() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sending, setSending] = useState(false);
  const [signUpComplete, setSignUpComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rateLimitMessage, setRateLimitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage(""); // reset error message

    const token = window.turnstile?.getResponse();

    const res = await fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName, lastName, token }),
    });

    if (res.status === 409) {
      setErrorMessage("Oops! You've already joined the mailing list.");
      setSending(false);
      return;
    }

    if (res.status === 429) {
      setRateLimitMessage("Too many requests. Please try again later.");
      setSending(false);
      return;
    }

    if (res.ok) {
      setEmail("");
      setFirstName("");
      setLastName("");
      setSending(false);
      setSignUpComplete(true);
    } else {
      setErrorMessage("Something went wrong. Please try again later.");
      setSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          VETAssure - AI-Assisted RTO Compliance Management Software
        </title>
        <meta
          name="description"
          content="VETAssure's AI-Assisted RTO compliance management software takes the guess work out of your organisation's regulatory compliance."
        />
      </Head>

      <main
        onContextMenu={(e) => e.preventDefault()}
        className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 py-12 max-w-7xl mx-auto"
      >
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
        {/* Left: Form + Text */}
        <div className="z-10 max-w-xl text-left space-y-6">
          <Badge>Coming Soon</Badge>
          <Image
            width={200}
            height={200}
            alt=""
            src="/va-logo.svg"
            className="h-10 mb-4"
          />
          <Flex direction={"column"} gap={"4"}>
            <Text size="8" weight="medium">
              Goodbye spreadsheets, hello compliance.
            </Text>
            <Text color="gray" className="max-w-md">
              VETAssure&apos;s compliance management suite takes the guess work
              out of your organisation&apos;s regulatory compliance. Get
              notified at launch.
            </Text>
          </Flex>

          {errorMessage && (
            <div className="inline-flex">
              <Callout.Root color="green">
                <Callout.Text>{errorMessage}</Callout.Text>
              </Callout.Root>
            </div>
          )}

          {rateLimitMessage && (
            <div className="inline-flex">
              <Callout.Root color="red">
                <Callout.Text>{rateLimitMessage}</Callout.Text>
              </Callout.Root>
            </div>
          )}

          {signUpComplete ? (
            <Callout.Root>
              Thanks for signing up to be notified on our launch. Check your
              email for a little back story on VETAssure and what is to come!
            </Callout.Root>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md w-full"
            >
              <Flex direction={"column"} gap={"2"} className="w-full">
                <TextField.Root
                  type="text"
                  placeholder="First name"
                  required
                  className="w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField.Root
                  type="text"
                  placeholder="Last name"
                  required
                  className="w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField.Root
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="cf-turnstile" data-sitekey={siteKey}></div>
                <Button
                  type="submit"
                  className="px-6 py-2 bg-accent text-white"
                >
                  {sending && <Loader2 className="animate-spin size-4" />}{" "}
                  Notify Me
                </Button>
              </Flex>
            </form>
          )}

          <Text size={"3"} weight={"medium"}>
            Why we are here
          </Text>
          <ul className="space-y-3 pt-4 text-sm text-gray-600">
            {statLinks.map((fact, i) => (
              <li key={i}>
                <Link
                  href={fact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <strong>{fact.title}</strong> — {fact.description}
                  <br />
                </Link>
                <Text size={"1"} color="gray" className="italic">
                  Source: {fact.reference}
                </Text>
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
    </>
  );
}
