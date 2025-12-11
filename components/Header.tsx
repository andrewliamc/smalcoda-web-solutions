'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Button from "./Button";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) || pathname === href;

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-brand-night/80 backdrop-blur-lg">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-sans font-black uppercase tracking-[0.19em] text-brand-sand group-hover:text-brand-sage">
              SMALCODA
            </span>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-brand-sand/60">
              WEB SOLUTIONS
            </span>
          </div>
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-brand-sand md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-brand-sand"></span>
            <span className="block h-0.5 w-6 bg-brand-sand"></span>
            <span className="block h-0.5 w-6 bg-brand-sand"></span>
          </div>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-brand-sand/80 transition hover:text-brand-sage",
                isActive(item.href) && "text-brand-sage",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary">
            Start a project
          </Button>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-white/5 bg-brand-moss/70 md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm text-brand-sand/90 transition hover:text-brand-sage",
                  isActive(item.href) && "text-brand-sage",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="w-full justify-center">
              Start a project
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Header;
