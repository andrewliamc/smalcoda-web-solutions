import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Future articles and tools from SmalCoda Web Solutions. Bookmark for calm, practical web guidance.",
};

const placeholders = [
  {
    title: "Planning a calm launch",
    description: "A short guide to scoping and sequencing your first release.",
  },
  {
    title: "Design systems for small teams",
    description: "How to pick the right level of structure for your site.",
  },
  {
    title: "Performance checklist",
    description: "Practical steps to keep marketing sites fast and accessible.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Resources & notes"
        description="Lightweight guides and templates for teams who want calmer, clearer web projects. Coming soon."
        actions={<Button href="/contact">Request a topic</Button>}
      />

      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          {placeholders.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-brand-moss/50 p-5"
            >
              <p className="text-sm font-medium text-brand-sage">In progress</p>
              <h3 className="mt-2 text-xl font-heading text-brand-sand">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-sand/80">{item.description}</p>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
