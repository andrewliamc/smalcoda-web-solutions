import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from SmalCoda Web Solutions — custom sites built with care, clarity, and performance.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work"
        description="Examples of calm, thoughtful builds shaped by collaboration and delivered with clear outcomes."
        actions={<Button href="/contact">Start a project</Button>}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <ProjectCard
                key={study.slug}
                title={study.title}
                category={study.category}
                description={study.summary}
                tags={study.tags}
                tech={study.tech}
                liveUrl={study.liveUrl}
                href={`/work/${study.slug}`}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
