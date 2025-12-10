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
    slug: "jacksonville-pottery-studio",
    title: "Jacksonville Pottery Studio",
    category: "Studio Website Redesign",
    role: "Brand UX, Frontend Development",
    liveUrl: "https://jax-pottery-studio.vercel.app",
    snapshotTitle:
      "A modern, community-centered website for a Jacksonville pottery studio, designed to simplify booking, highlight memberships, and tell a more welcoming story around classes, events, and open studio time.",
    snapshotDescription:
      "Warm, tactile storytelling paired with clear paths into classes, memberships, events, and studio information—built to make booking effortless.",
    metaTitle:
      "Jacksonville Pottery Studio – Community Pottery Studio Website Redesign | SmalCoda Web Solutions",
    metaDescription:
      "A warm, conversion-focused website redesign for Jacksonville Pottery Studio, clarifying classes, memberships, events, and bookings for a growing community pottery studio.",
    summary:
      "A warm, conversion-focused website for a community pottery studio in Jacksonville, Florida, clarifying classes, memberships, and events while making booking effortless.",
    tags: [
      "Brand UX",
      "Frontend Development",
      "Next.js",
      "Tailwind CSS",
      "Booking UX",
      "Local SEO",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Local SEO"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body:
          "Jacksonville Pottery Studio is a community pottery studio offering wheel-throwing classes, hand-building courses, memberships, and private events. Their original Squarespace site had grown organically over time and relied heavily on long pages, PDFs, and scattered booking links. The goal of the redesign was to create a calm, welcoming site that clearly explains the studio’s offerings, makes booking a class feel effortless, and better supports ongoing membership growth.",
      },
      {
        id: "challenge",
        title: "Challenge",
        body:
          "The existing site did its job, but it made visitors work too hard. Class descriptions and policies were spread across multiple pages, open studio information was hard to compare at a glance, and key actions—like booking a Sip & Spin class or becoming a member—weren’t consistently highlighted. Heavy text blocks, PDF-style content, and a lack of clear hierarchy made it difficult for new visitors to quickly understand where to start. Our challenge was to restructure the information architecture around the real journeys people take: trying a class for the first time, signing up for a five-week course, becoming a member, or planning a private event. All of that needed to fit within a visual style that felt warm, handcrafted, and easy to navigate on mobile.",
      },
      {
        id: "approach",
        title: "Approach",
        body:
          "We started by mapping out the studio’s core offerings and grouping them into clear paths: Classes, Membership, Events, and Studio Info. Instead of separate, disconnected pages, we designed a streamlined primary navigation and a single, cohesive story on the homepage. On the content side, we rewrote the class descriptions and membership details into concise, scannable summaries, with supporting detail just one click away. Calls to action are now consistent across the site—“Book a Class,” “View Membership Details,” or “Request a Date”—so visitors always know what to do next. The brand language leans into warmth and community without losing clarity: headlines invite visitors to “Make Something Beautiful” while the supporting copy stays practical about pricing, session length, and experience levels.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Homepage hero + class and membership highlights",
      },
      {
        id: "ux",
        title: "UX & UI Design",
        body:
          "The new homepage introduces Jacksonville Pottery Studio with a full-width hero that pairs a soft, neutral color palette with close-up pottery imagery. A primary call to action drives visitors to book a class, while a secondary CTA offers a path into memberships for more experienced makers. Below the hero, we break the experience into approachable sections: Explore Our Classes—card-based layouts for Sip & Spin nights, five-week courses, workshops, and kids classes with price ranges, experience level, and a clear “View Classes” button; Memberships Made for Makers—a simple explanation of benefits paired with a callout for new potters to start with a beginner class; Private Events & Parties—three cards for birthday parties, team building, and bachelorette or girls’ nights with a “Request a Date” CTA; Meet the Team—a friendly introduction linking to bios for management, assistants, and instructors; Newsletter—an email capture inviting visitors to “Stay in the Clay.” Across the site, we used soft neutrals, terracotta accents, and rounded cards to echo clay, glaze, and the tactile feel of the studio. Typesetting is calm and readable, with a consistent vertical rhythm that keeps long-form content easy to skim.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Feature grid: classes, memberships, events, team",
      },
      {
        id: "engineering",
        title: "Engineering",
        body:
          "Under the hood, the site is built with Next.js and the App Router, styled with Tailwind CSS, and composed from a small set of reusable components. Hero sections, feature grids, and card layouts are all driven by shared building blocks, making it easy to introduce new classes, events, or membership tiers without redesigning the page. Server components handle static content and layout, while lightweight client components are used where interaction is needed—such as navigation, call-to-action buttons, and any future filtering of classes or events. The design is fully responsive, with mobile-first spacing and tap-friendly targets so booking a class on a phone feels just as smooth as on desktop. SEO-friendly page titles, descriptions, and semantic headings support local discovery around pottery classes in Jacksonville, Sip & Spin nights, and pottery memberships. Content is structured so the studio can grow into more events and workshops without needing a full rebuild.",
        hasImagePlaceholder: true,
        imagePlaceholderLabel: "Responsive layouts + component map",
      },
      {
        id: "outcome",
        title: "Outcome",
        body:
          "The result is a modern, conversion-focused studio website that feels as warm and welcoming as the space itself. Visitors can quickly understand what Jacksonville Pottery Studio offers, choose the right path—whether that’s a one-night Sip & Spin, a five-week beginner course, or a full membership—and complete their booking with confidence. For the studio, the new structure turns their site into a clear growth engine: fewer confused inquiries, more qualified bookings, and a stronger foundation for promoting special workshops, kids classes, and private events over time.",
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
