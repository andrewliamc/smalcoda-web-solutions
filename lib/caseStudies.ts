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
  role: string;
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
        title: "Engineering",
        body:
          "Built with Next.js and the App Router, the store uses a headless CMS for product data and image metadata. Server Components and image optimization keep the site performant. Cart interactions are handled via server actions and lightweight client components.",
        imageSrc: "/willow-and-pine-case-study-3.png",
        imageAlt: "Willow & Pine architecture and data flow diagram",
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
    title: "Houston’s – Bergen County Restaurant Redesign",
    category: "Restaurant website redesign for a beloved Bergen County staple",
    role: "Brand UX, Frontend Development",
    liveUrl: "https://houstons-redesign.vercel.app/",
    snapshotTitle: "From PDF menus to a modern, mobile-first restaurant experience",
    snapshotDescription:
      "Houston’s in Bergen County relied on static PDF menus that were hard to read on mobile and invisible to search engines. I redesigned their digital experience around a cinematic homepage, tap-friendly menu layouts, and clear reservation and location information—making it easier for guests to discover, browse, and book from any device.",
    metaTitle: "Houston’s Restaurant – Bergen County Website Redesign | SmalCoda Web Solutions",
    metaDescription:
      "See how SmalCoda Web Solutions redesigned Houston’s Bergen County restaurant website with mobile-first menus, streamlined reservations, and a modern, high-conversion UX for local diners.",
    summary:
      "A modern, conversion-focused website for Houston’s in Bergen County, replacing PDF menus with a mobile-first menu experience, clear reservations, and improved local SEO.",
    tags: ["Brand UX", "Frontend Development", "Next.js", "Tailwind CSS", "Restaurant", "Local SEO"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "Houston’s is a well-loved restaurant in Bergen County known for its steaks, seafood, and warm dining room atmosphere. Their existing website depended on multiple PDF menus and generic content that didn’t reflect the quality of the experience or the level of hospitality guests receive in person. The goal of this redesign was to create a modern, mobile-first website that makes it effortless for guests to check menus, confirm hours, find the location, and plan a visit—without pinching and zooming through PDF files.",
      },
      {
        id: "challenge",
        title: "Challenge",
        body:
          "The original site presented the menus as flat PDFs, which were slow to load, difficult to read on phones, and impossible to scan quickly. Important details like hours, parking information, and reservation options were buried or inconsistent across pages. For a busy, high-traffic restaurant, this made it harder for guests to get the answers they needed and harder for the brand to stand out in local search. The challenge was to preserve Houston’s classic, elevated feel while designing a digital experience that was fast, clear, and conversion-focused.",
      },
      {
        id: "approach",
        title: "Approach",
        body:
          "I started with a content and menu audit, mapping every dish, category, and key piece of guest information (hours, location, reservations, take-home, wine list) into a structured information architecture. From there, I designed a homepage that acts as a concise overview of the restaurant: hero imagery, primary CTAs for “View menus” and “Plan your visit,” and a clear path into lunch, dinner, and take-home options. Rather than one oversized PDF, each menu is broken into logical sections with typography and spacing tuned for comfortable reading on both mobile and desktop. Throughout, the design leans on a restrained palette, understated typography, and subtle motion that supports, rather than competes with, the food.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Homepage hero + menu overview",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The new interface is built around a few key flows: browse the menu, check hours and location, and book a visit. The homepage hero pairs a full-bleed photography treatment with a clear headline and dual CTAs—one for viewing menus and one for planning a visit. Sticky navigation keeps “Menus,” “Location & Hours,” and “Reservations” one tap away. Menu pages use section headers, price alignment, and short descriptions to keep long lists scannable, while callouts highlight signature dishes and limited-availability items. On mobile, menus condense into vertically stacked sections with generous line height and tap targets, avoiding the pinch-zoom behavior of PDFs entirely. Supporting pages like “Our Story” and “Take-Home” reinforce hospitality, attention to detail, and the restaurant’s Bergen County roots.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Mobile-first menu layout",
      },
      {
        id: "engineering",
        title: "Engineering",
        body:
          "The redesigned experience is implemented with the Next.js App Router and Tailwind CSS. Menu data is stored as structured content, making it easy to update items and pricing without editing PDFs. Pages are statically generated for speed and SEO, with incremental revalidation available for menu updates. Semantic HTML, accessible color contrast, and keyboard-friendly interactions improve usability for all guests. Micro-interactions and scroll-based fades are handled via Framer Motion at a subtle level—enough to add polish without feeling like a “marketing site.” Image optimization and responsive loading ensure that photography looks sharp while keeping performance budgets in check.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Location & hours + reservations flow",
      },
      {
        id: "outcome",
        title: "Outcome",
        body:
          "The result is a restaurant website that finally matches the in-person Houston’s experience: warm, polished, and intentionally designed. Guests can now browse menus in seconds on their phones, confirm hours and location without friction, and quickly find the best way to plan a visit. Behind the scenes, structured content and a modern frontend stack make updates simple and search-engine friendly, giving Houston’s a stronger foundation for local SEO and future marketing efforts. For SmalCoda, this case study showcases our specialty: thoughtful, conversion-focused sites for local restaurants that outgrow static PDF menus.",
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
