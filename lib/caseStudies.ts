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
    slug: "ashtin-communications",
    title: "Ashtin Communications",
    category: "B2B Service Website",
    location: "Gainesville, FL",
    liveUrl: "https://www.ashtincomm.com",
    isConceptDemo: false,
    snapshotTitle: "Professional, conversion-focused website for a commercial two-way radio provider",
    snapshotDescription:
      "A clean, modern B2B website showcasing 27+ years of expertise in radio sales, rentals, repairs, and service for businesses across North Florida.",
    metaTitle: "Ashtin Communications – Client Website | SmalCoda Web Solutions",
    metaDescription:
      "Client project: Professional B2B website for Ashtin Communications, a commercial two-way radio provider in Gainesville, FL, featuring modern design, mobile optimization, and clear conversion paths.",
    summary:
      "Professional B2B website for a 27-year commercial two-way radio provider, featuring modern design, mobile-first UX, and clear paths to quote requests and service information.",
    tags: ["Client Work"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "B2B", "Local Business"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "Ashtin Communications is a commercial two-way radio provider established in 1997, serving businesses across Gainesville and North Florida. The client needed a modern website to replace their outdated online presence and better showcase their expertise in Motorola radio sales, rentals, airtime, and professional repair services. The goal was to establish credibility, improve local SEO, and create clear conversion paths for quote requests.",
      },
      {
        id: "challenge",
        title: "Challenge",
        body:
          "The client had no functional website, which meant potential customers couldn't find basic information about services, products, or contact details online. For a business serving commercial clients who often search online before making purchasing decisions, this created a significant barrier to growth. The website needed to convey 27+ years of expertise while making it easy for busy business owners to request quotes and understand service offerings.",
      },
      {
        id: "approach",
        title: "Design Approach",
        body:
          "The design prioritizes clarity and professionalism. A blue color scheme aligns with the Motorola partnership branding while maintaining a modern, trustworthy aesthetic. The site is structured around three core service areas: Radio Sales, Repairs & Service, and Rentals & Airtime. Each section uses card-based layouts with clear CTAs. Customer testimonials and the '27+ Years' credibility marker are prominently featured to build trust.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Homepage hero with service cards and testimonials",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The navigation is streamlined to six key pages: Home, About, Products, Rentals & Airtime, Repairs & Service, and Contact. Multiple 'Request Quote' CTAs are strategically placed throughout the site to capture leads. The mobile experience uses a responsive toggle menu and tap-friendly buttons. High-contrast white text on dark blue backgrounds ensures readability, while testimonials provide social proof above the fold.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Mobile navigation and service detail pages",
      },
      {
        id: "engineering",
        title: "Technical Implementation",
        body:
          "Built with Next.js and Tailwind CSS for performance and maintainability. The site includes schema markup for local business SEO, helping Ashtin Communications appear in local search results. Google Maps integration and geolocation features make it easy for customers to find the physical location. The mobile-first responsive design ensures the site works seamlessly across all devices. Social media links to Facebook and LinkedIn provide additional touchpoints.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "SEO structure and responsive layouts",
      },
      {
        id: "outcome",
        title: "Outcome",
        body:
          "The website successfully launched and gave Ashtin Communications a professional online presence for the first time. The client now appears in Google search results for commercial two-way radio services in Gainesville and North Florida. Quote requests can be easily submitted through multiple entry points, and customers can quickly find service information, products, and contact details. The modern design reflects the quality and professionalism of their 27-year track record.",
      },
    ],
  },
];
