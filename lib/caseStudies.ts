export type CaseStudySectionId =
  | "overview"
  | "challenge"
  | "approach"
  | "ux"
  | "engineering"
  | "outcome"
  | "brand";

export interface CaseStudySection {
  id: CaseStudySectionId;
  title: string;
  body: string;
  hasImagePlaceholder?: boolean;
  imagePlaceholderLabel?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  role: string;
  location?: string;
  liveUrl?: string;
  snapshotTitle?: string;
  snapshotDescription?: string;
  summary: string;
  tags: string[];
  tech: string[];
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "willow-and-pine",
    title: "Willow & Pine Tea Co.",
    category: "Ecommerce",
    role: "Brand, UI/UX, Frontend Development",
    liveUrl: "https://willow-and-pine.vercel.app",
    snapshotTitle: "A warm, story-driven ecommerce experience built around ritual, craft, and sensory exploration.",
    snapshotDescription:
      "A fully custom Next.js + headless CMS storefront featuring tasting notes, brewing rituals, and a calm, guided shopping flow.",
    summary:
      "Boutique ecommerce experience for a small-batch tea brand, blending sensory storytelling, tasting notes, and calm, high-end UI.",
    tags: ["Ecommerce", "Branding", "UX/UI"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "Willow & Pine Tea Co. is a fictional boutique tea brand offering small-batch blends. The goal was to create a brand-forward ecommerce experience that feels warm, intentional, and immersive—showcasing how SmalCoda builds high-end DTC stores for small businesses.",
      },
      {
        id: "challenge",
        title: "Challenge",
        body:
          "Most small tea brands rely on generic themes that don’t express the nuance of their products. The challenge was to design a shopping experience that communicates aroma, ritual, and calm while still feeling fast, clear, and conversion-friendly.",
      },
      {
        id: "approach",
        title: "Approach",
        body:
          "I built a modular design system centered around editorial product photography, tasting note badges, scroll-based brewing rituals, and subscription upsells. The content structure encourages exploration: seasonal highlights, flavor discovery, and pairing suggestions, all within a calm, spacious layout.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Hero + product grid mockups",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The homepage introduces the brand through a simple hero, seasonal picks, and clear entry points into the catalog. Product pages focus on narrative: tasting notes, ingredients, and brewing steps unfold as you scroll. On mobile, a sticky purchase bar and simplified layout keep the experience quick but still premium.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Mobile product page & sticky cart UI",
      },
      {
        id: "engineering",
        title: "Engineering",
        body:
          "Built with Next.js and the App Router, the store uses a headless CMS for product data and image metadata. Server Components and image optimization keep the site performant. Cart interactions are handled via server actions and lightweight client components.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Architecture / data flow diagram placeholder",
      },
      {
        id: "outcome",
        title: "Outcome",
        body:
          "The result is a serene ecommerce experience that combines brand storytelling with practical flows like subscriptions and upsells. It demonstrates how SmalCoda can deliver premium DTC experiences that feel handcrafted but remain easy to manage for a small team.",
      },
    ],
  },
  {
    slug: "ember-and-loom",
    title: "Ember & Loom Studio",
    category: "Portfolio",
    role: "Brand, UX, Frontend Development",
    liveUrl: "https://ember-and-loom.vercel.app",
    snapshotTitle: "Cinematic portfolio with full-bleed imagery and modular case studies.",
    snapshotDescription:
      "Built with Next.js + Sanity, this CMS-driven editorial layout blends flexible case-study structures, full-bleed galleries, and soft motion to elevate creative work.",
    summary:
      "Editorial-style portfolio for a photography and art direction studio, built for large imagery, flexible case studies, and CMS editing.",
    tags: ["Portfolio", "Branding", "UX/UI"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Framer Motion"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "Ember & Loom Studio is a fictional photography and art direction studio. The goal of the site was to build a cinematic portfolio that highlights imagery while giving the studio a CMS-powered way to author rich case studies.",
      },
      {
        id: "challenge",
        title: "Challenge",
        body:
          "Creative studios need layouts that feel spacious and editorial without becoming confusing or slow. The challenge was to structure large visuals, project details, and behind-the-scenes narratives into a system that stays consistent but never feels repetitive.",
      },
      {
        id: "approach",
        title: "Approach",
        body:
          "I designed a modular project template using Sanity CMS. Each case study is assembled from reusable sections—problem, direction, process, outcome—so the studio can publish new work without touching code. Motion is used sparingly to support the narrative rather than distract from it.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Project detail layout + grid placeholder",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The homepage acts as a curated gallery, with large thumbnails and a minimal navigation. Project pages mix full-bleed images, two-column grids, and floating captions to create rhythm. Supporting pages like About and Contact emphasize warmth, credibility, and ease of inquiry.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Homepage thumbnail grid + about page",
      },
      {
        id: "engineering",
        title: "Engineering",
        body:
          "The portfolio is implemented with the Next.js App Router and Sanity for content. Dynamic routes render projects based on slugs from the CMS. Framer Motion provides smooth page transitions and scroll-based fades, while responsive images keep the site performant even with large photography.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "CMS schema + content model",
      },
      {
        id: "outcome",
        title: "Outcome",
        body:
          "The final experience is an editorial-style portfolio that feels bespoke but is easy to maintain. It showcases SmalCoda’s ability to design visual-first experiences that still perform well and are backed by a robust content model.",
      },
    ],
  },
  {
    slug: "harvesthub",
    title: "HarvestHub Meal Planner",
    category: "SaaS",
    role: "Product Marketing, UX, Frontend Development",
    liveUrl: "https://harvesthub.vercel.app",
    snapshotTitle: "A clean, wellness-focused SaaS experience crafted for clarity, trust, and conversions.",
    snapshotDescription:
      "A marketing layer built in Next.js featuring scannable value props, pricing tiers, UI previews, and mobile-first optimization for founders ready to launch.",
    summary:
      "Conversion-focused marketing site for a fictional meal-planning SaaS, with clear value props, pricing, and product storytelling.",
    tags: ["SaaS", "Product Marketing", "Landing Page"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "HarvestHub is a fictional SaaS tool that offers smart weekly meal plans, nutrition insights, and automated grocery lists. This project focuses on the marketing layer: a clean, conversion-oriented landing page designed to quickly communicate value.",
      },
      {
        id: "challenge",
        title: "Challenge",
        body:
          "For SaaS marketing, visitors need to understand the product within seconds. The challenge was to balance a friendly, wellness-focused visual language with crisp messaging, clear hierarchy, and strong calls-to-action.",
      },
      {
        id: "approach",
        title: "Approach",
        body:
          "I developed a messaging framework built around four core benefits—save time, reduce waste, eat better, and make planning effortless. UI mockups of the product are woven into the page to show features like AI recipe suggestions, calendar planning, and grocery list generation.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Landing hero + dashboard mockup",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The hero section pairs a strong headline with an app preview and a primary CTA. Below that, feature blocks, an example weekly plan, pricing tiers, and testimonials guide visitors toward signup. The layout is intentionally scannable, with clear typography and ample breathing room.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Pricing table + testimonials layout",
      },
      {
        id: "engineering",
        title: "Engineering",
        body:
          "The marketing site is implemented with Next.js and static optimization for performance. Feature data, pricing tiers, and testimonial content are modeled as TypeScript objects so they can be easily changed without touching markup. The design system reuses core components and spacing from the rest of the SmalCoda site.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Component map / information architecture",
      },
      {
        id: "outcome",
        title: "Outcome",
        body:
          "HarvestHub demonstrates how SmalCoda can support early-stage SaaS teams with clear, trustworthy marketing that’s ready to grow—starting with a strong landing page, scalable components, and room for product screenshots and demos.",
      },
    ],
  },
];
