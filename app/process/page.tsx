import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProcessStep from "@/components/ProcessStep";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { processSteps } from "@/data/processSteps";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A calm, transparent process that guides you from discovery through launch and beyond.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="How the work gets done"
        description="A clear path from discovery to launch that protects your time, keeps decisions visible, and ships with intention."
        actions={<Button href="/contact">Start a project</Button>}
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step) => (
            <ProcessStep key={step.id} step={step} showDetails />
          ))}
        </Container>
      </Section>
    </>
  );
}
