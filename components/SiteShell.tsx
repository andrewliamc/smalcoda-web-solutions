"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/** Preserve the marketing layout while allowing the unlisted coaching experience. */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/coaching" || pathname.startsWith("/coaching/")) return <>{children}</>;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(159,189,170,0.16),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(194,169,138,0.12),transparent_30%)]" />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
