export const planConfig = {
  essentials: {
    title: "Essentials",
    price: {
      monthly: 149,
      annually: 119,
    },
    features: [
      { label: "Up to 2 users", included: true },
      { label: "5 active audits", included: true },
      { label: "National Standards audit template", included: true },
      { label: "Calendar and scheduling", included: false },
      { label: "Reporting and analytics", included: false },
      { label: "Validation system", included: false },
      { label: "Trainer and assessor management", included: false },
      { label: "Email notifications and reminders", included: false },
      { label: "Email and chat Support", included: true },
      { label: "Phone support", included: false },
    ],
  },
  essentialsPlus: {
    title: "Essentials Plus",
    price: {
      monthly: 429,
      annually: 344,
    },
    features: [
      { label: "Up to 5 users", included: true },
      { label: "10 active audits", included: true },
      { label: "All audit templates", included: true },
      { label: "Calendar and scheduling", included: true },
      { label: "Reporting and analytics", included: true },
      { label: "Validation system", included: false },
      { label: "Trainer and assessor management", included: false },
      { label: "Email notifications and reminders", included: true },
      { label: "Email and chat Support", included: true },
      { label: "Phone support", included: true },
    ],
  },
  pro: {
    title: "Pro",
    price: {
      monthly: 849,
      annually: 679,
    },
    features: [
      { label: "Up to 10 users", included: true },
      { label: "Unlimited active audits", included: true },
      { label: "All audit templates", included: true },
      { label: "Calendar and scheduling", included: true },
      { label: "Reporting and analytics", included: true },
      { label: "Validation system", included: true },
      { label: "Trainer and assessor management", included: true },
      { label: "Email notifications and reminders", included: true },
      { label: "Email and chat Support", included: true },
      { label: "Phone support", included: true },
    ],
  },
};
