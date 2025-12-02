import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell SmalCoda Web Solutions about your project. Expect a quick reply with a fit check, rough scope, and next steps.",
};

async function handleContact(formData: FormData) {
  "use server";

  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    website: formData.get("website"),
    budget: formData.get("budget"),
    timeline: formData.get("timeline"),
    projectTypes: formData.getAll("projectTypes"),
    details: formData.get("details"),
  };

  // TODO: Connect to email service or CRM.
  console.log("Contact inquiry from smalcoda-web-solutions.com", submission);
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Tell me about your project"
        description="Prefer projects with thoughtful teams, clear goals, and timelines between 2–8 weeks. Expect a response within 1 business day."
      />

      <Section>
        <Container className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <h2 className="section-heading">How this works</h2>
            <p className="text-brand-sand/80">
              Share a bit about what you’re building and where you are in the process.
              I’ll review, follow up with any clarifying questions, and propose a
              right-sized plan with a timeline and investment range.
            </p>
            <ul className="space-y-3 text-brand-sand/80">
              {[
                "Weekly updates and structured feedback windows.",
                "Transparent milestones tied to outcomes.",
                "Design, development, and QA handled in one place.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-sage/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-white/10 bg-brand-moss/60 p-5 text-sm text-brand-sand/80">
              <p className="font-medium text-brand-sage">Prefer email?</p>
              <p>
                Reach out at{" "}
                <a
                  href="mailto:hello@smalcoda.studio"
                  className="font-semibold text-brand-sage hover:text-brand-sand"
                >
                  hello@smalcoda.studio
                </a>
                . I’ll reply with a short fit check and booking link.
              </p>
            </div>
          </div>

          <ContactForm action={handleContact} />
        </Container>
      </Section>

      <CTASection
        title="Not ready yet?"
        description="Bookmark this page or reach out with a rough idea. I’ll help you shape it into a simple plan."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="See services"
        secondaryHref="/services"
      />
    </>
  );
}
