import type { Metadata } from "next";
import { redirect } from "next/navigation";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact SmalCoda | Free Consultation | Hackensack Web Design",
  description:
    "Get a free consultation for your web design project. Email, phone, or book a call. Serving Hackensack, Northern NJ, and NYC. Response within 24 hours.",
};

async function handleContact(formData: FormData) {
  "use server";

  const sanitize = (value: FormDataEntryValue | null) =>
    String(value ?? "").trim();

  const name = sanitize(formData.get("name"));
  const email = sanitize(formData.get("email"));
  const company = sanitize(formData.get("company"));
  const website = sanitize(formData.get("website"));
  const budget = sanitize(formData.get("budget"));
  const timeline = sanitize(formData.get("timeline"));
  const projectTypes = formData
    .getAll("projectTypes")
    .map((value) => sanitize(value))
    .filter(Boolean);
  const details = sanitize(formData.get("details"));

  const formspreeId = process.env.FORMSPREE_ENDPOINT;
  const endpoint = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : null;

  try {
    if (!name || !email) {
      throw new Error("Name and email are required.");
    }

    if (!endpoint) {
      throw new Error(
        "Form is not configured correctly. Please email hello@smalcoda.studio."
      );
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        website,
        budget,
        timeline,
        projectTypes: projectTypes.join(", "),
        details,
      }),
    });

    if (!response.ok) {
      let errorText = "";
      try {
        errorText = await response.text();
      } catch (error) {
        console.error("Unable to read Formspree response body", error);
      }
      console.error("Formspree submission failed", response.status, errorText);
      throw new Error("Message not sent. Please try again.");
    }
  } catch (error) {
    console.error("Failed to submit contact form", error);
    const message =
      error instanceof Error && error.message
        ? error.message
        : "Message not sent. Please try again.";
    return redirect(`/contact?error=${encodeURIComponent(message)}`);
  }

  // ✅ Important: call redirect *after* the try/catch
  return redirect("/contact?success=1");
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ success?: string; error?: string }>;
}) {
  const params = await searchParams;
  const successMessage =
    params?.success === "1" ? "Thanks! Your message has been sent." : "";
  const errorMessage =
    typeof params?.error === "string" ? params.error : "";

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Tell me about your project"
        description="Prefer projects with thoughtful teams, clear goals, and timelines between 2–8 weeks. Expect a response within 1 business day."
      />

      <Section>
        <Container className="space-y-6">
          {errorMessage && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm font-semibold text-red-100">
              {errorMessage}
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
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

            <ContactForm action={handleContact} successMessage={successMessage} />
          </div>
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
