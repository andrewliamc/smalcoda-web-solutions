import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <Section>
        <Container className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">Case study</p>
            <h1 className="text-4xl font-heading text-brand-sand md:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg text-brand-sand/80">{project.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand-sage/30 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-brand-sage">
            {project.role.map((role) => (
              <span key={role} className="rounded-full bg-brand-moss/60 px-3 py-1">
                {role}
              </span>
            ))}
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full bg-brand-night/60 px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
          <Button href="/contact" variant="secondary">
            Start a project
          </Button>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="glass relative aspect-[16/9] overflow-hidden rounded-3xl border border-brand-sage/20 bg-gradient-to-br from-brand-moss/70 via-brand-night to-brand-night shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(159,189,170,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(194,169,138,0.25),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-sage/70">
                Case study mockup
              </p>
              <h3 className="mt-2 text-2xl font-heading text-brand-sand">
                A modern, tactile experience built with clarity.
              </h3>
              <p className="text-sm text-brand-sand/70">
                Placeholder visual space for hero screens and UI highlights.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="section-heading">Problem</h2>
              <p className="mt-3 text-brand-sand/80">{project.problem}</p>
            </div>
            <div>
              <h2 className="section-heading">Approach</h2>
              <ul className="mt-3 space-y-3 text-brand-sand/80">
                {project.approach.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-sage/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading">Outcome & results</h2>
              <p className="mt-3 text-brand-sand/80">{project.outcome}</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-sand/70">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl border border-white/10 bg-brand-moss/50 p-6">
            <div>
              <p className="text-sm font-medium text-brand-sage">Roles</p>
              <p className="text-brand-sand/80">{project.role.join(", ")}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-brand-sage">Tech stack</p>
              <ul className="mt-2 space-y-2 text-brand-sand/80">
                {project.stack.map((tech) => (
                  <li key={tech} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-brand-sage">Services included</p>
              <ul className="space-y-2 text-brand-sand/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                  <span>Discovery & positioning</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                  <span>Design system + responsive UI</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                  <span>Front-end build & QA</span>
                </li>
              </ul>
            </div>
            <Button href="/contact" variant="primary">
              Book a project
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
