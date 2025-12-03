import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { caseStudies } from "@/lib/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
  };
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="mt-6 flex aspect-[16/9] items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-brand-sand/70">
      {label}
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Section>
        <Container className="space-y-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-brand-sage transition hover:text-brand-sand"
          >
            <span aria-hidden>←</span>
            Back to work
          </Link>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-brand-sand/70">
                <span className="rounded-full bg-white/5 px-3 py-1 text-brand-sage">
                  {study.category}
                </span>
                <span className="rounded-full border border-brand-sage/30 px-3 py-1">
                  Case study
                </span>
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-heading text-brand-sand md:text-5xl">
                  {study.title}
                </h1>
                <p className="text-lg text-brand-sand/80">{study.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-sage/30 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-brand-sage">
                <span className="rounded-full bg-brand-moss/60 px-3 py-1">
                  {study.role}
                </span>
                {study.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-brand-night/60 px-3 py-1 text-brand-sand/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {study.liveUrl ? (
              <div className="flex items-start gap-3 md:pt-1">
                <Button
                  href={study.liveUrl}
                  variant="primary"
                  className="whitespace-nowrap"
                  target="_blank"
                  rel="noreferrer"
                >
                  View live site
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  Start a project
                </Button>
              </div>
            ) : (
              <Button href="/contact" variant="secondary" className="whitespace-nowrap">
                Start a project
              </Button>
            )}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-10">
          <div className="glass relative overflow-hidden rounded-3xl border border-brand-sage/20 bg-gradient-to-br from-brand-moss/70 via-brand-night to-brand-night shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(159,189,170,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(194,169,138,0.25),transparent_30%)]" />
            <div className="relative flex flex-col justify-between gap-4 p-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-sage/70">
                  Project snapshot
                </p>
                <h3 className="text-2xl font-heading text-brand-sand">
                  {study.snapshotTitle ?? "Calm, tactile UI with conversion paths built in."}
                </h3>
                <p className="text-sm text-brand-sand/70">
                  {study.snapshotDescription ??
                    "Placeholder space for hero visuals and key UI moments."}
                </p>
              </div>
              <Button href="/contact" variant="ghost" className="whitespace-nowrap">
                Book this style
              </Button>
            </div>
          </div>

          <div className="space-y-12">
            {study.sections.map((section) => (
              <div key={section.id} className="space-y-3">
                <h2 className="section-heading">{section.title}</h2>
                <p className="text-brand-sand/80">{section.body}</p>
                {section.hasImagePlaceholder && section.imagePlaceholderLabel ? (
                  <ImagePlaceholder label={section.imagePlaceholderLabel} />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
