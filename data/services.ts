export type Service = {
  id: string;
  title: string;
  summary: string;
  who: string;
  includes: string[];
  timeline: string;
  price: string;
  cta?: string;
};

export type AddOn = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "custom-website",
    title: "Custom Website",
    summary:
      "A bespoke, fast, and future-friendly website crafted for your brand and goals.",
    who: "Great for growing businesses, boutique shops, hospitality, and creative teams who want a distinct digital home.",
    includes: [
      "Information architecture and UX flows",
      "Design system with responsive layouts",
      "Accessible, performant front-end build",
      "Basic on-page SEO and analytics setup",
    ],
    timeline: "4–6 weeks",
    price: "Starting at $7,500",
  },
  {
    id: "conversion-landing",
    title: "Conversion-Focused Landing Page",
    summary:
      "A focused page built to launch, validate, or promote with clear storytelling and strong calls-to-action.",
    who: "Ideal for product launches, campaigns, cohorts, and lead generation.",
    includes: [
      "Conversion-first layout and copy guidance",
      "Component-based build for fast iteration",
      "Analytics and event tracking hookups",
      "Hand-off notes for marketing teams",
    ],
    timeline: "2–3 weeks",
    price: "Starting at $3,500",
  },
  {
    id: "website-refresh",
    title: "Website Refresh",
    summary:
      "Elevate an existing site with sharper UX, refined visuals, and better performance.",
    who: "Teams with an existing site that needs modern visuals and smoother flows without a full rebuild.",
    includes: [
      "UX audit and prioritized improvements",
      "Updated visual system and component cleanup",
      "Performance and accessibility tuning",
      "Deployment support and documentation",
    ],
    timeline: "3–4 weeks",
    price: "Starting at $5,000",
  },
  {
    id: "care-plans",
    title: "Care Plans",
    summary:
      "Hands-on support to keep your site reliable, secure, and evolving with your business.",
    who: "For teams that want a proactive partner to monitor, maintain, and enhance their site monthly.",
    includes: [
      "Content updates and small feature tweaks",
      "Uptime monitoring and performance checks",
      "Security patches and dependency updates",
      "Monthly check-in with clear reporting",
    ],
    timeline: "Monthly retainer",
    price: "Plans from $650/mo",
  },
];

export const addOns: AddOn[] = [
  {
    title: "Strategy Session",
    description:
      "90-minute collaborative workshop to clarify goals, audiences, and success metrics.",
  },
  {
    title: "Copy Polish",
    description:
      "Lightweight messaging refinement to align voice, clarity, and calls-to-action.",
  },
  {
    title: "Analytics & Conversion Tracking",
    description:
      "Event tracking, heatmaps, and dashboards to keep a pulse on what’s working.",
  },
];
