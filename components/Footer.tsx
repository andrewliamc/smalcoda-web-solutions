import Link from "next/link";
import Container from "./Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-moss/40">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div>
            <p className="text-lg font-sans font-black uppercase tracking-[0.12em] text-brand-sand">
              SMALCODA
            </p>
            <p className="text-xs font-sans font-thin uppercase tracking-[0.28em] text-brand-sand/60">
              WEB SOLUTIONS
            </p>
          </div>
          <p className="max-w-md text-brand-sand/80">
            A calm, design-forward web studio creating modern, high-performing sites for small businesses in Hackensack, Bergen County, North Jersey, and beyond.
          </p>
          <Link
            href="mailto:hello@smalcoda.studio"
            className="text-sm font-medium text-brand-sage hover:text-brand-sand"
          >
            hello@smalcoda.studio
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="space-y-2">
            <p className="text-sm font-medium text-brand-sage">Navigate</p>
            <div className="flex flex-col gap-2 text-sm text-brand-sand/80">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-brand-sage"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-brand-sage">Connect</p>
            <div className="flex flex-col gap-2 text-sm text-brand-sand/80">
              <Link href="/contact" className="hover:text-brand-sage">
                Start a project
              </Link>
              <Link href="/work" className="hover:text-brand-sage">
                View the work
              </Link>
              <Link href="/resources" className="hover:text-brand-sage">
                Resources (soon)
              </Link>
            </div>
          </div>
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
