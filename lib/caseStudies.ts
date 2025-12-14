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
  imageSrc?: string;
  imageAlt?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  location?: string;
  liveUrl?: string;
  snapshotTitle?: string;
  snapshotDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  summary: string;
  tags: string[];
  tech: string[];
  sections: CaseStudySection[];
  isConceptDemo?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "willow-and-pine-tea-co",
    title: "Willow & Pine Tea Co.",
    category: "Ecommerce",
    liveUrl: "https://willow-and-pine.vercel.app",
    isConceptDemo: true,
    snapshotTitle: "A warm, story-driven ecommerce experience built around ritual, craft, and sensory exploration.",
    snapshotDescription:
      "A fully custom Next.js + headless CMS storefront featuring tasting notes, brewing rituals, and a calm, guided shopping flow.",
    summary:
      "Concept demonstration showcasing boutique ecommerce design for a small-batch tea brand, blending sensory storytelling, tasting notes, and calm, high-end UI.",
    tags: [],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Ecommerce", "Branding"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "Willow & Pine Tea Co. is a concept demonstration for a boutique tea brand. This project showcases how SmalCoda approaches brand-forward ecommerce experiences that feel warm, intentional, and immersive—demonstrating design thinking and technical capabilities for high-end DTC stores.",
      },
      {
        id: "approach",
        title: "Design Approach",
        body:
          "I built a modular design system centered around editorial product photography, tasting note badges, scroll-based brewing rituals, and subscription upsells. The content structure encourages exploration: seasonal highlights, flavor discovery, and pairing suggestions, all within a calm, spacious layout.",
        imageSrc: "/willow-and-pine-case-study-1.png",
        imageAlt: "Willow & Pine homepage hero and product grid mockups",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The homepage introduces the brand through a simple hero, seasonal picks, and clear entry points into the catalog. Product pages focus on narrative: tasting notes, ingredients, and brewing steps unfold as you scroll. On mobile, a sticky purchase bar and simplified layout keep the experience quick but still premium.",
        imageSrc: "/willow-and-pine-case-study-2.png",
        imageAlt: "Willow & Pine mobile product page with sticky cart UI",
      },
      {
        id: "engineering",
        title: "Technical Implementation",
        body:
          "Built with Next.js and the App Router, the store uses a headless CMS for product data and image metadata. Server Components and image optimization keep the site performant. Cart interactions are handled via server actions and lightweight client components.",
        imageSrc: "/willow-and-pine-case-study-3.png",
        imageAlt: "Willow & Pine architecture and data flow diagram",
      },
    ],
  },
  {
    slug: "houstons-restaurant-redesign",
    title: "Houston's – Restaurant Redesign",
    category: "Redesign",
    liveUrl: "https://houstons-redesign.vercel.app/",
    isConceptDemo: true,
    snapshotTitle: "From PDF menus to a modern, mobile-first restaurant experience",
    snapshotDescription:
      "Concept demonstration showing how to transform a restaurant's digital presence from static PDF menus to a cinematic homepage, tap-friendly menu layouts, and clear reservation flows—making it easier for guests to discover, browse, and book from any device.",
    metaTitle: "Houston's Restaurant – Redesign Concept Demo | SmalCoda Web Solutions",
    metaDescription:
      "Concept demonstration showing how SmalCoda approaches restaurant website redesigns with mobile-first menus, streamlined reservations, and a modern, high-conversion UX.",
    summary:
      "Concept demonstration showcasing a modern, conversion-focused restaurant website redesign with mobile-first menus, clear reservations, and improved local SEO.",
    tags: [],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Brand UX", "SEO"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "This concept demonstrates how SmalCoda approaches restaurant website redesigns. The demonstration addresses common challenges restaurants face: PDF menus that don't work on mobile, generic content that doesn't reflect the dining experience, and buried information that makes it hard for guests to plan visits. This project showcases a modern, mobile-first approach to restaurant websites.",
      },
      {
        id: "approach",
        title: "Design Approach",
        body:
          "The approach starts with content and menu auditing, mapping dishes, categories, and key information into a structured architecture. The homepage acts as a concise overview with hero imagery, primary CTAs, and clear paths into menus and reservations. Rather than oversized PDFs, menus are broken into logical sections with typography and spacing tuned for comfortable reading on all devices. The design uses a restrained palette, understated typography, and subtle motion.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Homepage hero + menu overview",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The interface focuses on key flows: browsing menus, checking hours and location, and booking visits. Sticky navigation keeps essential pages one tap away. Menu pages use section headers, price alignment, and short descriptions for scannability. On mobile, menus use generous line height and tap targets, eliminating the need for pinch-zoom. Callouts highlight signature dishes and limited-availability items.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Mobile-first menu layout",
      },
      {
        id: "engineering",
        title: "Technical Implementation",
        body:
          "Implemented with Next.js App Router and Tailwind CSS, menu data is stored as structured content for easy updates. Pages are statically generated for speed and SEO. Semantic HTML, accessible color contrast, and keyboard-friendly interactions ensure usability. Micro-interactions via Framer Motion add polish without overwhelming. Image optimization keeps performance in check.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Location & hours + reservations flow",
      },
    ],
  },
  {
    slug: "jacksonville-pottery-studio",
    title: "Jacksonville Pottery Studio",
    category: "Studio Website Redesign",
    liveUrl: "https://jax-pottery-studio.vercel.app",
    isConceptDemo: true,
    snapshotTitle:
      "A modern, community-centered website for a pottery studio, designed to simplify booking, highlight memberships, and tell a welcoming story around classes and events.",
    snapshotDescription:
      "Warm, tactile storytelling paired with clear paths into classes, memberships, events, and studio information—built to make booking effortless.",
    metaTitle:
      "Jacksonville Pottery Studio – Concept Demo | SmalCoda Web Solutions",
    metaDescription:
      "Concept demonstration showcasing a warm, conversion-focused pottery studio website redesign with clear class information, memberships, and booking flows.",
    summary:
      "Concept demonstration showcasing a warm, conversion-focused website for a community pottery studio, clarifying classes, memberships, and events while making booking effortless.",
    tags: [],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "This concept demonstrates how SmalCoda approaches community studio websites. The demonstration addresses common challenges: scattered booking information, PDFs instead of structured content, and unclear paths for different visitor types. This project showcases a calm, welcoming approach that makes it easy to explore classes, understand membership options, and book events.",
      },
      {
        id: "approach",
        title: "Design Approach",
        body:
          "The approach maps core offerings into clear paths: Classes, Membership, Events, and Studio Info. The streamlined navigation and cohesive homepage tell a single story. Content is rewritten into scannable summaries with consistent CTAs. The brand language balances warmth and community with clarity about pricing, session length, and experience levels.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Homepage hero + class and membership highlights",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The homepage uses a full-width hero with a soft, neutral palette and pottery imagery. Primary CTAs drive bookings while secondary CTAs guide experienced makers to memberships. Card-based layouts organize classes by type with price ranges and experience levels. The design uses soft neutrals, terracotta accents, and rounded cards to echo clay and the tactile studio feel.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Feature grid: classes, memberships, events, team",
      },
      {
        id: "engineering",
        title: "Technical Implementation",
        body:
          "Built with Next.js App Router and Tailwind CSS using reusable components. Hero sections, feature grids, and card layouts share building blocks for easy expansion. Server components handle static content while lightweight client components manage interaction. Mobile-first spacing and tap-friendly targets ensure smooth booking on all devices. SEO-friendly structure supports local discovery.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Responsive layouts + component map",
      },
    ],
  },
  {
    slug: "harvesthub-meal-planner",
    title: "HarvestHub Meal Planner",
    category: "SaaS",
    liveUrl: "https://harvesthub.vercel.app",
    isConceptDemo: true,
    snapshotTitle: "A clean, wellness-focused SaaS experience crafted for clarity, trust, and conversions.",
    snapshotDescription:
      "A marketing layer built in Next.js featuring scannable value props, pricing tiers, UI previews, and mobile-first optimization for founders ready to launch.",
    summary:
      "Concept demonstration showcasing a conversion-focused marketing site for a meal-planning SaaS, with clear value props, pricing, and product storytelling.",
    tags: [],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SaaS", "Product Marketing", "Landing Page"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "This concept demonstrates how SmalCoda approaches SaaS marketing sites. The demonstration focuses on communicating value quickly through clear messaging, product previews, and strong conversion paths—perfect for early-stage teams that need to explain their product clearly and drive signups.",
      },
      {
        id: "approach",
        title: "Design Approach",
        body:
          "The messaging framework is built around four core benefits: save time, reduce waste, eat better, and make planning effortless. UI mockups woven into the page show features like AI recipe suggestions, calendar planning, and grocery list generation. The balance between friendly, wellness-focused visuals and crisp messaging creates trust.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Landing hero + dashboard mockup",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The hero pairs a strong headline with an app preview and primary CTA. Feature blocks, example weekly plans, pricing tiers, and testimonials guide visitors toward signup. The layout is intentionally scannable with clear typography and ample breathing room to reduce cognitive load.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Pricing table + testimonials layout",
      },
      {
        id: "engineering",
        title: "Technical Implementation",
        body:
          "Implemented with Next.js and static optimization for performance. Feature data, pricing tiers, and testimonials are modeled as TypeScript objects for easy updates without touching markup. The design system reuses core components and spacing for consistency.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Component map / information architecture",
      },
    ],
  },
];
