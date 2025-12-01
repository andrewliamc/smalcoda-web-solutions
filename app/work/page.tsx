import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

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
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
