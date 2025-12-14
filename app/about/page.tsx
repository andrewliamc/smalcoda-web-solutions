import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Andrew Cox & SmalCoda | Web Designer in Hackensack, NJ",
  description:
    "Meet Andrew Cox, founder of SmalCoda. Front-end developer & UI designer in Hackensack, NJ, specializing in modern websites for small businesses.",
};

const values = [
  { title: "Clarity", description: "Decisions stay visible with structured feedback and clear next steps." },
  { title: "Craft", description: "Thoughtful typography, spacing, and motion for experiences that feel calm." },
  { title: "Care", description: "Partner mindset—understanding your team, audience, and constraints." },
  { title: "Consistency", description: "Design systems and clean code that age gracefully." },
];

const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Figma", "Adobe Creative Suite", "Git & GitHub"];

const contact = [
  { label: "Email", value: "hello@smalcoda.studio", href: "mailto:hello@smalcoda.studio", preferred: true },
  { label: "Phone", value: "201-903-3854", href: "tel:+12019033854" },
  { label: "LinkedIn", value: "linkedin.com/in/andrewliamcox", href: "https://www.linkedin.com/in/andrewliamcox/" },
  { label: "GitHub", value: "github.com/andrewliamc", href: "https://github.com/andrewliamc" },
  { label: "Portfolio", value: "andrewliamdesigns.com", href: "https://andrewliamdesigns.com" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Andrew Cox"
        description="Front-end developer and UI designer based in Hackensack, NJ, specializing in modern, accessible web experiences built with React and Next.js."
        actions={<Button href="/contact">Start a project</Button>}
      />

      <Section>
        <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="space-y-4">
            <div className="glass relative aspect-square max-w-sm overflow-hidden rounded-2xl border border-brand-sage/20 bg-brand-moss/60">
              <Image
                src="/images/andrew-cox-photo.jpg"
                alt="Andrew Cox, founder of SmalCoda Web Solutions, front-end developer and UI designer based in Hackensack, NJ"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="section-heading">About Andrew</h2>
            <p className="text-brand-sand/80">
              Since January 2020, I've been running SmalCoda Web Solutions—a small, design-forward studio that helps local businesses and creative teams build calm, high-performing websites. My background blends technical problem-solving with visual design, customer experience, and a genuine interest in making digital tools feel human.
            </p>
            <p className="text-brand-sand/80">
              Before starting SmalCoda, I spent over 8 years at Apple—first as a Technical Expert helping customers navigate complex hardware and software challenges, then as a Mac Systems Architecture Tools Developer building internal automation systems for engineering teams. That experience taught me how to balance precision with empathy, diagnose problems quickly, and communicate technical concepts clearly to non-technical audiences.
            </p>
            <p className="text-brand-sand/80">
              I hold a B.S. in Chemistry from the University of North Florida, an A.S. in Graphic Design from Santa Fe College, and completed Meta's Front-End Developer Professional Certificate. I'm also a regular user of AI-assisted development tools like GitHub Copilot and ChatGPT, which help me prototype faster and write cleaner code.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-8">
          <div>
            <p className="eyebrow">Origin Story</p>
            <h2 className="section-heading">How SmalCoda Started</h2>
          </div>
          <div className="glass rounded-2xl border border-brand-sage/20 bg-brand-moss/60 p-6 md:p-8">
            <p className="text-lg text-brand-sand/90">
              SmalCoda Web Solutions was born from a belief that great websites don't need to be loud to be powerful—they need to be clear, thoughtful, and well-crafted. I started SmalCoda to blend design sensibility with modern engineering and help small businesses turn "small code" into meaningful, lasting digital impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl border border-brand-sage/20 bg-brand-moss/60 p-6">
              <h3 className="text-xl font-heading text-brand-sand">Values</h3>
              <div className="mt-4 grid gap-4">
                {values.map((value) => (
                  <div key={value.title}>
                    <p className="text-sm font-medium text-brand-sage">{value.title}</p>
                    <p className="text-sm text-brand-sand/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-brand-moss/60 p-5">
                <p className="text-sm font-medium text-brand-sage">How I Work</p>
                <p className="text-brand-sand/80">
                  One clear point of contact, a visible plan, and async-friendly updates.
                  Feedback cycles are structured, and you get prototypes early to react to.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-brand-moss/60 p-5">
                <p className="text-sm font-medium text-brand-sage">Impact</p>
                <p className="text-brand-sand/80">
                  Launches that feel on-brand, load fast, and align with business goals.
                  Teams leave with documentation and systems they can extend.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <div>
            <p className="eyebrow">Tools & Stack</p>
            <h2 className="section-heading">Built with modern, proven tech</h2>
            <p className="text-brand-sand/80">
              Opinionated defaults: accessible components, fast performance, and clean
              build pipelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-brand-sand/80">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-brand-sage/30 px-3 py-1"
              >
                {tool}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-8">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="section-heading">Connect With Me</h2>
          </div>
          <div className="glass rounded-2xl border border-brand-sage/20 bg-brand-moss/60 p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {contact.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-sm font-medium text-brand-sage">
                    {item.label}
                    {item.preferred && (
                      <span className="ml-2 text-xs text-brand-sand/70">(preferred)</span>
                    )}
                  </p>
                  <a
                    href={item.href}
                    className="block text-brand-sand/90 transition hover:text-brand-sage"
                    target={item.label === "LinkedIn" || item.label === "GitHub" || item.label === "Portfolio" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" || item.label === "GitHub" || item.label === "Portfolio" ? "noopener noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
