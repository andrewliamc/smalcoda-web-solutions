import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Inter,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SmalCoda Web Solutions",
  url: "https://smalcoda.studio",
  description:
    "Modern web design and development studio specializing in Next.js, React, and TypeScript for small businesses in Hackensack and Northern New Jersey.",
  founder: {
    "@type": "Person",
    name: "Andrew Cox",
    jobTitle: "Front End Engineer & UI Designer",
    url: "https://www.linkedin.com/in/andrewliamcox/",
  },
  telephone: "+1-201-903-3854",
  email: "hello@smalcoda.studio",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hackensack",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hackensack",
      containedInPlace: {
        "@type": "State",
        name: "New Jersey",
      },
    },
    {
      "@type": "Place",
      name: "Northern New Jersey",
    },
    {
      "@type": "City",
      name: "New York City",
      containedInPlace: {
        "@type": "State",
        name: "New York",
      },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  serviceType: [
    "Web design",
    "Web development",
    "Next.js sites",
    "Small business websites",
    "Restaurant websites",
    "Cafe websites",
    "Landing pages",
    "Website refresh",
    "SEO optimization",
  ],
  sameAs: [
    "https://www.linkedin.com/in/andrewliamcox/",
    "https://github.com/andrewliamc",
    "https://www.linkedin.com/company/smalcoda/",
    "https://www.instagram.com/smalcoda/",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Web Design & Development in Hackensack, NJ | SmalCoda",
    template: "%s | SmalCoda",
  },
  description:
    "Custom Next.js websites for small businesses in Hackensack & Northern NJ. Modern, fast, accessible design. Starting at $2,500. Free consultation.",
  openGraph: {
    title: "SmalCoda Web Solutions | Web Design in Hackensack, NJ",
    description:
      "Modern, fast, accessible websites for small businesses in Hackensack and Northern New Jersey. Built with Next.js and React.",
    url: "https://smalcoda.studio",
    siteName: "SmalCoda Web Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmalCoda Web Solutions - Modern Web Design in Hackensack, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmalCoda Web Solutions | Hackensack Web Design",
    description:
      "Modern websites for small businesses in Hackensack & Northern NJ. Next.js development with care plans. Starting at $2,500.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://smalcoda.studio"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-376699974"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-376699974');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${inter.variable} bg-brand-night text-brand-sand`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(159,189,170,0.16),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(194,169,138,0.12),transparent_30%)]" />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
