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

export type CarePlan = {
  title: string;
  description: string;
  price: string;
  includes: string[];
};

export type ServiceGroup = {
  title: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "starter-site",
    title: "Starter Site",
    summary:
      "A clean, reliable starter website to help you get online with confidence.",
    who: "For founders and small teams who need a trustworthy web presence fast.",
    includes: [
      "1–3 page layout (Home, About, Contact or similar)",
      "Mobile-responsive, accessible front-end",
      "Brand-aligned colors and typography",
      "Basic on-page SEO (titles, meta, alt text)",
      "Contact form and basic analytics setup",
    ],
    timeline: "2.5–4 weeks",
    price: "Starting at $2,500",
  },
  {
    id: "professional-website",
    title: "Professional Website",
    summary:
      "A polished, strategic website with stronger UX, components, and room to grow.",
    who: "Great for businesses that want a clear story, better UX, and space to scale.",
    includes: [
      "4–6 custom pages designed around your goals",
      "Thoughtful UX flows and content hierarchy",
      "Reusable component system for future pages",
      "Accessible, performant front-end build",
      "On-page SEO and event tracking for key actions",
    ],
    timeline: "4–6 weeks",
    price: "Starting at $5,000",
  },
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
    timeline: "5–7+ weeks",
    price: "Starting at $7,500+",
  },
  {
    id: "conversion-landing",
    title: "Conversion-Focused Landing Page",
    summary:
      "A focused page built to launch, validate, or promote with clear storytelling and strong calls-to-action.",
    who: "Ideal for product launches, campaigns, cohorts, and lead generation.",
    includes: [
      "Conversion-first layout and content guidance",
      "Component-based build for fast iteration",
      "Analytics and event tracking hookups",
      "Hand-off notes for ongoing marketing",
    ],
    timeline: "2–3 weeks",
    price: "Starting at $2,000",
  },
  {
    id: "website-refresh",
    title: "Website Refresh",
    summary:
      "Elevate an existing site with sharper UX, refined visuals, and better performance—without a full rebuild.",
    who: "For teams with a site that needs polish, smoother flows, and better performance.",
    includes: [
      "UX audit and prioritized improvements",
      "Refined visual system and component cleanup",
      "Performance and accessibility tuning",
      "Deployment support and documentation",
    ],
    timeline: "3–5 weeks",
    price: "Starting at $3,500",
  },
];

export const carePlans: CarePlan[] = [
  {
    title: "Essentials",
    description: "Steady maintenance to keep your site secure and stable.",
    price: "From $250/mo",
    includes: [
      "Monthly software and dependency updates",
      "Uptime monitoring and basic performance checks",
      "Security patches and backups",
      "1 small content or design update per month",
      "Simple monthly summary report",
    ],
  },
  {
    title: "Growth",
    description: "Maintenance plus regular improvements and growth-focused tweaks.",
    price: "From $450/mo",
    includes: [
      "Everything in Essentials",
      "Up to 3 update requests per month",
      "Quarterly performance and SEO review",
      "Priority support for small fixes and optimizations",
      "Light content assistance (new photos or copy updates)",
    ],
  },
  {
    title: "Premium",
    description: "Proactive, high-touch support for teams that want a true long-term partner.",
    price: "From $650/mo",
    includes: [
      "Everything in Growth",
      "Unlimited small updates per month",
      "Advanced analytics dashboard and insights",
      "Quarterly strategy session to plan improvements",
      "Feature enhancements and UX refinements over time",
    ],
  },
];

export const aLaCarteServices: ServiceGroup[] = [
  {
    title: "Design",
    items: [
      "Homepage design refresh",
      "Additional page design",
      "Mini brand board or style tile",
      "Expanded component or section design",
    ],
  },
  {
    title: "Development",
    items: [
      "Additional page builds",
      "Advanced sections (tabs, sliders, galleries, menus)",
      "Accessibility and performance optimization passes",
      "CMS setup for blogs, menus, or portfolios",
    ],
  },
  {
    title: "Strategy & Analytics",
    items: [
      "90-minute strategy and roadmap session",
      "Copy polish for key pages",
      "SEO and analytics tune-up",
      "Custom dashboards and event tracking",
    ],
  },
];
