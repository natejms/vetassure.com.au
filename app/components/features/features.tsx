import { Text } from "@radix-ui/themes";
import { Archive, Calendar, CheckIcon, IdCard } from "lucide-react";
import { FeatureShowcase } from "./feature-showcase";

const features = [
  {
    name: "Your intelligent AI powered compliance companion",
    description:
      "VETA AI helps you navigate regulations with confidence. Ask questions, get instant guidance during audits, and receive suggestions to ensure you're always one step ahead.",
    includes: [
      "Answer questions about compliance and regulations",
      "Compare documents (e.g., policies against ASQA standards)",
      "Suggest improvements for non-compliances",
      "Assist during audits by providing contextual guidance",
    ],
    href: "#",
    imgSrc: "/veta.png",
    imgAlt: "VETA AI Assistant Screenshot",
    icon: CheckIcon,
    testimonial: {
      description:
        "VETA AI has completely transformed how we manage compliance. It's like having an expert on call 24/7 consultant, fast, and incredibly helpful during audits.",
      author: "Compliance Manager, Pathway Training Group",
    },
  },
  {
    name: "Throw out your complicated audit spreadsheets",
    description:
      "Conduct and manage regulatory audits related to your student training activity, or organisational management and processes with ease.",
    includes: [
      "Audit against the RTO standards",
      "Audit your student training activity against your contractual obligations ",
      "Audit your student training activity against your contractual obligations ",
      "Audit your student training activity against your contractual obligations ",
      "Audit your student training activity against your contractual obligations ",
    ],
    href: "#",
    imgSrc: "/audit-inplace.png",
    imgAlt: "Audit Screenshot",
    icon: CheckIcon,
    testimonial: {
      description:
        "The audit feature streamlined our compliance process significantly. It's intuitive, thorough, and keeps us audit-ready at all times.",
      author: "Compliance Manager, Pathway Training Group",
    },
  },
  {
    name: "Trainer Management and Matrix",
    description:
      "Manage your trainers and their scope with our comprehensive trainer matrix and documentation storage.",
    href: "#",
    imgSrc: "/trainer-management.png",
    imgAlt: "Trainer details page",
    icon: IdCard,
    testimonial: {
      description:
        "Managing trainer scope and credentials has never been easier. The matrix gives us complete visibility and confidence in our training team.",
      author: "Operations Lead, SkillEdge Institute",
    },
  },
  {
    name: "Organisational Documentation",
    description:
      "Organise and store your organisational documentation and procedures ready to audit with our audit system at the click of a button.",
    href: "#",
    imgSrc: "/documentation.png",
    imgAlt: "Organisation documentation",
    icon: Archive,
    testimonial: {
      description:
        "All our key documents are now in one place. When auditors come knocking, we're prepared—just one click and done.",
      author: "RTO Administrator, Apex Learning Solutions",
    },
  },
  {
    name: "Scheduling",
    description:
      "Create and manage training schedules, assessments, meetings, and validation sessions with ease. Ensure all stakeholders are on the same page with real-time updates and calendar integration.",
    href: "#",
    imgSrc: "/calendar.png",
    imgAlt: "Organisation documentation",
    icon: Calendar,
    testimonial: {
      description:
        "Scheduling used to be a nightmare. Now, everything is synced, clear, and hassle-free. We’re saving hours every week.",
      author: "Training Coordinator, Horizon Skills Centre",
    },
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1600px] lg:px-8 py-20">
      <div className="text-center pb-16">
        <Text size={"8"} weight={"medium"}>
          Explore Your New Compliance Companion
        </Text>
        <p className="text-muted mt-4 max-w-2xl mx-auto">
          VETA offers everything you need to stay audit-ready, manage your
          trainers, and streamline compliance—powered by AI.
        </p>
      </div>

      <div className="space-y-24">
        {features.map((feature, i) => (
          <FeatureShowcase
            key={feature.name}
            feature={feature}
            flip={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
