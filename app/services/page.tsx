import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { aLaCarteServices, carePlans, services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services & Pricing | Starting at $2,500",
  description:
    "Transparent web design pricing: Starter ($2,500), Professional ($5,000), Custom ($7,500+). Next.js development with care plans. View packages.",
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
        <Container className="space-y-12">
          <div className="space-y-2">
            <p className="eyebrow">Ongoing Support Services</p>
            <h2 className="section-heading">Care Plans</h2>
            <p className="text-brand-sand/80">
              Hands-on support to keep your site secure, fast, and evolving with your business.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {carePlans.map((plan) => (
              <Card key={plan.title} className="h-full p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-heading text-brand-sand">{plan.title}</h3>
                  <span className="text-sm font-medium text-brand-sage">{plan.price}</span>
                </div>
                <p className="mt-2 text-sm text-brand-sand/80">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-brand-sand/80">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="space-y-2">
            <p className="eyebrow">À La Carte</p>
            <h2 className="section-heading">À La Carte Services</h2>
            <p className="text-brand-sand/80">
              Perfect for quick upgrades, smaller needs, or add-ons to any project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {aLaCarteServices.map((group) => (
              <Card
                key={group.title}
                className="h-full p-5"
              >
                <h4 className="text-lg font-heading text-brand-sand">{group.title}</h4>
                <ul className="mt-3 space-y-2 text-sm text-brand-sand/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-8">
          <div className="text-center">
            <p className="eyebrow">Client feedback</p>
            <h2 className="section-heading">What Clients Say</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            {testimonials
              .filter((t) => t.id === "bill-ashtin-communications")
              .map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  rating={testimonial.rating}
                />
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
