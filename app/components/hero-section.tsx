import { Button } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, SparklesIcon } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <div className="border-r border-accent/10 mx-auto flex max-w-[1600px] items-center justify-between p-8 py-12 rounded-lg bg-linear-to-l from-accent/20 overflow-hidden">
      <div className="items-center grid lg:grid-cols-2 grid-cols-1">
        <div className="col-span-1 space-y-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-h1/18 font-medium"
            >
              <div
                onClick={onCtaClick}
                className="inline-flex flex-col sm:flex-row space-x-6 cursor-pointer"
              >
                <span className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm/6 font-semibold text-accent ring-1 ring-inset ring-indigo-600/10">
                  Say hello to VETA <SparklesIcon className="size-5" />
                </span>
                <span className="text-nowrap hidden sm:inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                  <span>Our AI assistant in open BETA</span>
                  <ChevronRight
                    className="size-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sm:text-h1/18 text-5xl font-medium"
          >
            Goodbye spreadsheets, hello compliance.
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-h5 text-secondary font-medium max-w-lg">
              VETAssure's compliance management suite takes the guess work out
              of your organisation's regulatory compliance.
            </div>
            <div className="space-y-2 text-body-large">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-6" />
                Conduct and manage audits across students and your organisation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-6" />
                Manage trainer competencies and professional development
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-6" />
                Organise and manage organisational documentation
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.25 }}
          >
            <div className="space-y-2">
              <div className="flex gap-2">
                <Button>Book a Demo</Button>
                <Button variant="soft" color="gray" highContrast>
                  Get Started
                </Button>
              </div>
              <div>
                <div className="text-light text-body">
                  14-day free trial. Cancel anytime.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className="text-h1 col-span-1"
        >
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="App screenshot"
                  src="audits-screen.png"
                  width={750}
                  height={500}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
