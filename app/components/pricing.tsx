"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button, Card } from "@radix-ui/themes";
import { LegacyRef, useState } from "react";
import { planConfig } from "../helpers/plan-config";
import { motion } from "framer-motion";
import Tabs from "./ui/tabs";
import { CheckIcon, MinusIcon } from "lucide-react";
import { AnimatedNumber } from "../helpers/animated-number";

export default function PricingTable() {
  const [monthlyAnnually, setMonthlyAnnually] = useState("monthly");
  const tabs = ["monthly", "annually"];

  const handleTabChange = (tab: string) => {
    setMonthlyAnnually(tab);
  };

  // Initialise auto-animate
  const [essentialsParent] = useAutoAnimate();
  const [essentialsPlusParent] = useAutoAnimate();
  const [proParent] = useAutoAnimate();

  const renderFeatures = (
    features: { label: string; included: boolean }[],
    _plan: string,
    parentRef: LegacyRef<HTMLUListElement> | undefined
  ) => {
    return (
      <ul className="space-y-2 text-body-large text-lightSub" ref={parentRef}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            {feature.included ? (
              <CheckIcon className="size-5 text-accent" />
            ) : (
              <MinusIcon className="size-5 text-neutral-500" />
            )}
            {feature.label}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      id="pricing"
      className="flex flex-col gap-4 mx-auto max-w-[1600px] items-center justify-between py-12 rounded-lg overflow-hidden"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          margin: "-200px",
        }}
        transition={{ duration: 0.7 }}
        className="space-y-4"
      >
        <div>
          <p className="text-h2 text-center font-medium">Pricing</p>
          <p className="text-center text-body-large text-light">
            Pick the plan that suits your needs. Nothing hidden.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Tabs tabs={tabs} onTabChange={handleTabChange} />
          <div className="flex gap-2 text-xs text-lightSub text-accent">
            🎉 <span>Save 20% annually</span>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1">
          <Card className="!p-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 font-medium  py-2">
                  {planConfig.essentials.title}
                  <span className="text-body font-normal text-lightSub">
                    For organisations driving core standards
                  </span>
                </div>
                <div className="text-subtitle font-medium">
                  $
                  <AnimatedNumber
                    value={
                      monthlyAnnually === "monthly"
                        ? planConfig.essentials.price.monthly
                        : planConfig.essentials.price.annually
                    }
                  />
                  <span className="pl-0.5 text-xs text-secondaryText dark:text-lightSub">
                    /{" "}
                    {monthlyAnnually === "monthly"
                      ? "month billed monthly"
                      : "month billed annually"}
                  </span>
                </div>
                {renderFeatures(
                  planConfig.essentials.features,
                  "essentials",
                  essentialsParent
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center text-body text-lightSub">
                    Total annual cost: $
                    <AnimatedNumber
                      value={
                        monthlyAnnually === "monthly"
                          ? planConfig.essentials.price.monthly * 12
                          : planConfig.essentials.price.annually * 12
                      }
                    />
                  </div>
                  {monthlyAnnually === "annually" && (
                    <span className="text-body text-accent">
                      Save $
                      {(
                        planConfig.essentials.price.monthly * 12 -
                        planConfig.essentials.price.annually * 12
                      ).toLocaleString()}
                    </span>
                  )}
                </div>
                <Button className="!bg-accent">Start 14-day free trial</Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-1">
          <Card className="bg-accent/20 !p-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 font-medium py-2">
                  <div className="flex items-center gap-2">
                    {planConfig.essentialsPlus.title}
                    <div className="inline-flex rounded-sm bg-accent/20 text-accent px-2 py-1 text-xs font-medium ">
                      Most Popular
                    </div>
                  </div>
                  <span className="text-body font-normal text-lightSub">
                    Empowering teams with advanced audits and schedules
                  </span>
                </div>
                <div className="text-subtitle font-medium">
                  $
                  <AnimatedNumber
                    value={
                      monthlyAnnually === "monthly"
                        ? planConfig.essentialsPlus.price.monthly
                        : planConfig.essentialsPlus.price.annually
                    }
                  />
                  <span className="pl-0.5 text-xs text-secondaryText dark:text-lightSub">
                    /{" "}
                    {monthlyAnnually === "monthly"
                      ? "month billed monthly"
                      : "month billed annually"}
                  </span>
                </div>
                {renderFeatures(
                  planConfig.essentialsPlus.features,
                  "essentialsPlus",
                  essentialsPlusParent
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center text-body text-lightSub">
                    Total annual cost: $
                    <AnimatedNumber
                      value={
                        monthlyAnnually === "monthly"
                          ? planConfig.essentialsPlus.price.monthly * 12
                          : planConfig.essentialsPlus.price.annually * 12
                      }
                    />
                  </div>
                  {monthlyAnnually === "annually" && (
                    <span className="text-body text-accent">
                      Save $
                      {(
                        planConfig.essentialsPlus.price.monthly * 12 -
                        planConfig.essentialsPlus.price.annually * 12
                      ).toLocaleString()}
                    </span>
                  )}
                </div>
                <Button className="!bg-accent">Start 14-day free trial</Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-1">
          <Card className="!p-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 font-medium  py-2">
                  {planConfig.pro.title}
                  <span className="text-body font-normal text-lightSub">
                    Designed for organisations scaling audits, trainer
                    management, and much more
                  </span>
                </div>
                <div className="text-subtitle font-medium">
                  $
                  <AnimatedNumber
                    value={
                      monthlyAnnually === "monthly"
                        ? planConfig.pro.price.monthly
                        : planConfig.pro.price.annually
                    }
                  />
                  <span className="pl-0.5 text-xs text-secondaryText dark:text-lightSub">
                    /{" "}
                    {monthlyAnnually === "monthly"
                      ? "month billed monthly"
                      : "month billed annually"}
                  </span>
                </div>
                {renderFeatures(planConfig.pro.features, "pro", proParent)}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center text-body text-lightSub">
                    Total annual cost: $
                    <AnimatedNumber
                      value={
                        monthlyAnnually === "monthly"
                          ? planConfig.pro.price.monthly * 12
                          : planConfig.pro.price.annually * 12
                      }
                    />
                  </div>
                  {monthlyAnnually === "annually" && (
                    <span className="text-body text-accent">
                      Save $
                      {(
                        planConfig.pro.price.monthly * 12 -
                        planConfig.pro.price.annually * 12
                      ).toLocaleString()}
                    </span>
                  )}
                </div>
                <Button className="!bg-accent">Start 14-day free trial</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
