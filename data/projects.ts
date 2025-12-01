export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  stack: string[];
  role: string[];
  problem: string;
  approach: string[];
  outcome: string;
  results: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "northwind-roasters",
    title: "Northwind Roasters",
    subtitle: "Specialty coffee roastery bringing small-batch beans online.",
    description:
      "Brand-forward ecommerce experience with storytelling, tasting notes, and subscription upsells.",
    tags: ["Ecommerce", "UI/UX", "Next.js"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    role: ["UI/UX Design", "Front-End Development"],
    problem:
      "Northwind needed a site that felt as handcrafted as their roasts while making online ordering effortless.",
    approach: [
      "Workshop to map buying journeys and highlight brand voice.",
      "Component library for product cards, roaster stories, and tasting note blocks.",
      "Built a performant storefront with server components and tasteful motion.",
    ],
    outcome:
      "A calm, tactile ecommerce flow that puts the coffee front-and-center and simplifies checkout.",
    results: ["18% lift in average order value", "Faster load times under 1s on key pages"],
    featured: true,
  },
  {
    slug: "lumen-studio",
    title: "Lumen Studio",
    subtitle: "Boutique interior studio showcasing crafted spaces.",
    description:
      "Portfolio refresh that balances big imagery with concise case study storytelling.",
    tags: ["Portfolio", "Branding", "CMS"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful"],
    role: ["Creative Direction", "Front-End Development"],
    problem:
      "The old portfolio felt disjointed and slow, hiding the quality of the work and the process behind it.",
    approach: [
      "Content audit and narrative flow to guide visitors through project highlights.",
      "Image optimization strategy with art direction for mobile and desktop.",
      "Reusable project templates to keep future publishing simple.",
    ],
    outcome:
      "A cohesive, editorial portfolio that feels premium and makes it easy to inquire after seeing the work.",
    results: ["Time-on-page up 24% for project detail views", "New inquiries increased within first month"],
  },
  {
    slug: "brightwave-health",
    title: "Brightwave Health",
    subtitle: "Health tech platform simplifying patient onboarding.",
    description:
      "Product marketing site with clear value props, flows, and conversion paths to demo signups.",
    tags: ["SaaS", "Product Marketing", "Next.js"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Analytics"],
    role: ["UX Strategy", "Front-End Development"],
    problem:
      "Brightwave needed a focused story that translated product complexity into a calm, trustworthy narrative.",
    approach: [
      "Positioning workshop and copy polish to clarify benefits and differentiators.",
      "Information architecture that aligns features with outcomes and proof.",
      "Built modular sections so marketing can launch campaigns without dev time.",
    ],
    outcome:
      "A confident marketing site that reduces friction, guides readers, and makes booking a demo obvious.",
    results: ["Demo conversions improved month-over-month", "Reduced bounce on pricing and features pages"],
  },
];
