"use client";

import { useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Button, Link } from "@radix-ui/themes";
import {
  Archive,
  Box,
  Calendar,
  CheckCircle,
  ChevronDown,
  IdCard,
  MoreHorizontal,
  Phone,
  Tv,
  X,
} from "lucide-react";

const products = [
  {
    name: "Audits",
    description: "Gain better insight to your organisation's compliance",
    href: "#",
    icon: CheckCircle,
  },
  {
    name: "Trainer Management",
    description: "Manage trainer scope and professional development with ease",
    href: "#",
    icon: IdCard,
  },
  {
    name: "Scheduling",
    description: "Organise your teams for consistent compliance events",
    href: "#",
    icon: Calendar,
  },
  {
    name: "Documentation",
    description: "Manage and store organisational documentation",
    href: "#",
    icon: Archive,
  },
];
const callsToAction = [
  { name: "Book a demo", href: "#", icon: Tv },
  { name: "Contact sales", href: "#", icon: Phone },
  { name: "View all features", href: "#", icon: Box },
];

const timeoutDuration = 120;

interface NavbarProps {
  onPricingClick?: () => void;
  onFeaturesClick?: () => void;
}

export default function Navbar({
  onPricingClick,
  onFeaturesClick,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fix 1: Properly type the refs
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const timeOutRef = useRef<number | null>(null);

  // Fix 2: Update handler functions with proper types
  const handleEnter = (isOpen: boolean) => {
    console.log("mouse enter");
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
      timeOutRef.current = null;
    }

    if (!isOpen && triggerRef.current) {
      triggerRef.current.click();
    }
  };

  const handleLeave = (isOpen: boolean) => {
    if (isOpen && triggerRef.current) {
      timeOutRef.current = window.setTimeout(() => {
        triggerRef.current?.click();
      }, timeoutDuration);
    }
  };

  return (
    <header className="relative w-full isolate z-10 bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1600px] items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/va-logo.svg" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MoreHorizontal aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open)}
                onMouseLeave={() => handleLeave(open)}
              >
                <PopoverButton
                  ref={triggerRef}
                  className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus:outline-none"
                >
                  Product
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
                      >
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-accent"
                          />
                        </div>
                        <a
                          href={item.href}
                          className="mt-6 block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50">
                    <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-5 flex-none text-gray-400"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </div>
            )}
          </Popover>

          <div
            onClick={onFeaturesClick}
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
          >
            Features
          </div>
          <div
            onClick={onPricingClick}
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
          >
            Pricing
          </div>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          <Link href="https://stg.vetassure.com.au">
            <Button color="gray" variant="soft" highContrast>
              Sign Up
            </Button>
          </Link>
          <Button>Log in</Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="va-logo.svg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              {/* <div className="py-6">
                <a
                  href="stg.vetassure.com.au"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
