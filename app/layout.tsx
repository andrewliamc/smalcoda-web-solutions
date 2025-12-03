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
    "SmalCoda Web Solutions builds clean, modern websites for small businesses in Hackensack and Bergen County, offering web design, web development, and Next.js builds.",
  telephone: "+1-201-903-3584",
  email: "hello@smalcoda.studio",
  priceRange: "$$",
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hackensack",
        addressRegion: "NJ",
        addressCountry: "US",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Bergen County",
      address: {
        "@type": "PostalAddress",
        addressRegion: "NJ",
        addressCountry: "US",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "North Jersey",
      address: {
        "@type": "PostalAddress",
        addressRegion: "NJ",
        addressCountry: "US",
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
    "SEO-optimization",
  ],
  sameAs: [
    "https://www.instagram.com/smalcoda",
    "https://www.linkedin.com/company/smalcodawebsolutions",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "SmalCoda Web Solutions | Small code. Big impact.",
    template: "%s | SmalCoda Web Solutions",
  },
  description:
    "SmalCoda Web Solutions builds modern, handcrafted web experiences for small businesses and creative teams.",
  openGraph: {
    title: "SmalCoda Web Solutions",
    description:
      "A calm, design-forward web studio crafting modern sites that feel as good as they perform.",
    url: "https://smalcoda.studio",
    siteName: "SmalCoda Web Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmalCoda Web Solutions",
    description:
      "Small code. Big impact. Modern web design and development for thoughtful teams.",
  },
  metadataBase: new URL("https://smalcoda.studio"),
  icons: {
    icon: "/favicon.ico",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-8YMBYTM6LV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8YMBYTM6LV');
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
