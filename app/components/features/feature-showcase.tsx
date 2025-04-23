import { motion } from "framer-motion";
import { Button, Flex, Text } from "@radix-ui/themes";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

type FeatureShowcaseType = {
  name: string;
  description: string;
  includes?: string[];
  imgSrc: string;
  imgAlt: string;
  testimonial?: {
    description: string;
    author: string;
  };
};

export function FeatureShowcase({
  feature,
  flip = false,
}: {
  feature: FeatureShowcaseType;
  flip?: boolean;
}) {
  return (
    <section className={`relative isolate overflow-hidden px-2 sm:py-20`}>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-2 lg:px-8 items-center">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative ${flip ? "lg:order-last" : ""}`}
        >
          <div className="relative rounded-2xl shadow-xl overflow-hidden">
            <Image
              src={feature.imgSrc}
              alt={feature.imgAlt}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT SECTION */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-lg"
        >
          <Flex direction={"column"} gap={"4"}>
            <Text size={"8"} weight={"medium"} mb={"4"}>
              {feature.name}
            </Text>
            <Text size={"3"} className="text-muted text-lg">
              {feature.description}
            </Text>
            <ul className="space-y-3">
              {feature.includes?.map((point: string) => (
                <li className="flex gap-3 items-start" key={point}>
                  <CheckCircle className="h-5 w-5 text-accent mt-1" />
                  <Text size={"3"}>{point}</Text>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button variant="surface">Learn more</Button>
            </div>
            {/* <div className="border-l-4 pl-4 italic text-sm text-muted">
              “{feature.testimonial.description}”
              <p className="mt-1 font-semibold text-accent not-italic">
                — {feature.testimonial.author}
              </p>
            </div> */}
          </Flex>
        </motion.div>
      </div>
    </section>
  );
}
