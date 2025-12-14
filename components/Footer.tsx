import Link from "next/link";
import Container from "./Container";
import NewsletterSignup from "./NewsletterSignup";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const connect = [
  { href: "mailto:hello@smalcoda.studio", label: "Email", external: true, newTab: false },
  { href: "https://www.instagram.com/smalcoda/", label: "Instagram", external: true, newTab: true },
  {
    href: "https://www.linkedin.com/company/smalcodawebsolutions",
    label: "LinkedIn",
    external: true,
    newTab: true,
  },
];

const resources = [
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/legal", label: "Legal Notice" },
];

const linkClass =
  "text-sm text-brand-sand/80 opacity-90 transition hover:text-brand-sand hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage/60";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-moss/40">
      <Container className="py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-4">
            <Link
              href="/"
              className="group inline-flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage/60"
            >
              <span className="text-lg font-sans font-black uppercase tracking-[0.19em] text-brand-sand group-hover:text-brand-sage">
                SMALCODA
              </span>
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-brand-sand/60">
                WEB SOLUTIONS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-brand-sand/80">
              A calm, design-forward web studio creating modern, high-performing sites for small businesses in Hackensack, Bergen County, North Jersey, and beyond.
            </p>
            <Link href="mailto:hello@smalcoda.studio" className={linkClass}>
              hello@smalcoda.studio
            </Link>
          </div>

          <div className="grid flex-1 gap-8 border-t border-white/5 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:border-t-0 lg:pt-0">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-sage">
                Navigation
              </p>
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-sage">
                Connect
              </p>
              <div className="flex flex-col gap-2">
                {connect.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.newTab === false ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      className={linkClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-sage">
                Resources
              </p>
              <div className="flex flex-col gap-2">
                {resources.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <NewsletterSignup variant="compact" />
        </div>
      </Container>
      <div className="border-t border-white/5">
        <Container className="flex flex-col items-start justify-between gap-3 py-4 text-xs text-brand-sand/60 md:flex-row">
          <span>© {new Date().getFullYear()} SmalCoda Web Solutions</span>
          <span>Independent, design-forward, remote-first.</span>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
