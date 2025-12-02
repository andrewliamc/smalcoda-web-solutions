import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "SmalCoda Web Solutions builds clean, modern websites for small businesses in Hackensack and Bergen County, offering web design, web development, and Next.js builds.",
};

const values = [
  { title: "Clarity", description: "Decisions stay visible with structured feedback and clear next steps." },
  { title: "Craft", description: "Thoughtful typography, spacing, and motion for experiences that feel calm." },
  { title: "Care", description: "Partner mindset—understanding your team, audience, and constraints." },
  { title: "Consistency", description: "Design systems and clean code that age gracefully." },
];

const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Storybook", "Contentful / Sanity", "Figma"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About SmalCoda"
        description="A small, design-forward web studio specializing in modern, responsive sites built with React and Next.js."
        actions={<Button href="/contact">Start a project</Button>}
      />

      <Section>
        <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="space-y-4">
            <h2 className="section-heading">A short story</h2>
            <p className="text-brand-sand/80">
              SmalCoda is led by a front-end engineer who designs. After years inside
              agencies and product teams, I built a studio that keeps the craft and the
              collaboration close. Every engagement blends strategy, UX, and development
              so the final site is cohesive, performant, and easy to maintain.
            </p>
            <p className="text-brand-sand/80">
              I care about clear communication, thoughtful design details, and code that
              future you will appreciate. You’ll get a calm partner who works alongside
              you, not behind a curtain.
            </p>
          </div>
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
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <p className="eyebrow">Tools & stack</p>
            <h2 className="section-heading">Built with modern, proven tech</h2>
            <p className="text-brand-sand/80">
              Opinionated defaults: accessible components, fast performance, and clean
              build pipelines.
            </p>
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
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-brand-moss/60 p-5">
              <p className="text-sm font-medium text-brand-sage">How I work</p>
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
        </Container>
      </Section>
    </>
  );
}
