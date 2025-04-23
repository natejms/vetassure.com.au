import { Badge, Link, Text } from "@radix-ui/themes";
import { MailIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const footerSections = [
  {
    heading: "Product",
    links: [
      { label: "Audit Tool", href: "#" },
      { label: "VETA AI Assistant", href: "#" },
      { label: "Trainer Management", href: "#" },
      { label: "Document Management", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Feature Changelog", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-[1600px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">VETAssure</span>
                <Image
                  alt="VETAssure logo"
                  src="/va-logo.svg"
                  width={"32"}
                  height={"32"}
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="max-w-sm">
              <Text color="gray" size={"2"}>
                VETAssure&apos;s compliance management suite takes the guesswork
                out of your organisation&apos;s regulatory compliance.
              </Text>
            </div>
            <div className="flex gap-3 mb-6">
              <Link color="indigo" href="#">
                <FaLinkedinIn />
              </Link>
              <Link color="indigo" href="#">
                <FiYoutube />
              </Link>
            </div>
            <div className="flex items-center text-gray-600">
              <MailIcon className="h-4 w-4 mr-2" />
              <span>admin@vetassure.com</span>
            </div>
          </div>

          {/* Dynamic Columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <Text size={"2"} weight={"medium"}>
                {section.heading}
              </Text>
              <ul className="space-y-2 mt-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      color="gray"
                      size={"2"}
                      href={link.href}
                      className="text-gray-600 hover:text-primary"
                    >
                      {link.label}
                      {link.label.includes("AI") && (
                        <Badge color="violet" ml={"2"}>
                          <SparklesIcon className="size-3" />
                          BETA
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="inline-flex items-center mt-12 mb-6 text-sm border border-slate-200 rounded-full px-2">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-600 mr-2" />
            <span className="text-gray-600">All services are operational</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © VETAssure {new Date().getFullYear()} — All rights reserved.
            </p>
            <div className="flex gap-3">
              <Link
                size={"2"}
                color="gray"
                href="privacy-policy"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                size={"2"}
                color="gray"
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                size={"2"}
                color="gray"
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
