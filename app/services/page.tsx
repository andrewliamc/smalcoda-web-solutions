import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { addOns, services } from "@/data/services";
import { faqs } from "@/data/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Clear, custom website services for small businesses and creative teams. Built with a calm, collaborative process.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we offer"
        title="Services"
        description="Every project is custom, delivered through a clear, repeatable process that balances design, engineering, and communication."
        actions={<Button href="/contact">Start a project</Button>}
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-6">
          <div>
            <p className="eyebrow">Add-ons</p>
            <h2 className="section-heading">Extras that move the work faster</h2>
            <p className="text-brand-sand/80">
              Layer in strategy, copy, and analytics to keep the launch aligned and measurable.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {addOns.map((addOn) => (
              <div
                key={addOn.title}
                className="glass h-full rounded-2xl border border-brand-sage/20 bg-brand-moss/60 p-5"
              >
                <h3 className="text-xl font-heading text-brand-sand">{addOn.title}</h3>
                <p className="mt-2 text-sm text-brand-sand/80">{addOn.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="section-heading">Frequently asked</h2>
            <p className="text-brand-sand/80">
              The short answers. Happy to go deeper on a call.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-brand-moss/50 px-4 py-3 text-brand-sand/90"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-heading text-brand-sand marker:hidden">
                  <span>{faq.question}</span>
                  <span className="text-brand-sage transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-brand-sand/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Have a project in mind?"
        description="Share what you’re building and I’ll propose a right-sized plan, timeline, and investment."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="View work"
        secondaryHref="/work"
      />
    </>
  );
}
