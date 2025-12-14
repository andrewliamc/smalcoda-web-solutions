import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import Button from "@/components/Button";
import Card from "@/components/Card";
import LeadMagnet from "@/components/LeadMagnet";
import { aLaCarteServices, carePlans, services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services & Pricing | Starting at $2,500",
  description:
    "Transparent web design pricing: Starter ($2,500), Professional ($5,000), Custom ($7,500+). Next.js development with care plans. View packages.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a custom website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our websites start at $2,500 for a starter site (1-3 pages), $5,000 for a professional website (4-6 pages), and $7,500+ for fully custom builds. We also offer care plans starting at $250/month for ongoing support and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A starter site typically takes 2.5-4 weeks, professional websites take 4-6 weeks, and custom projects take 5-7+ weeks depending on complexity, scope, and how quickly content and feedback are provided.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clients outside of New Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! While I'm based in Hackensack, NJ, I work with clients remotely across the United States. I also meet in-person with clients in Northern New Jersey and New York City when needed.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from me to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To get started, I need brand assets (logo, colors, fonts), content or outlines for each page, access to any existing tools (domain, hosting, analytics), and a primary point of contact. I provide a simple checklist during our kickoff so you always know what's needed next.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer website maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! I offer three care plan tiers: Essentials ($250/month) for steady maintenance, Growth ($450/month) for maintenance plus improvements, and Premium ($650/month) for proactive, high-touch support with unlimited small updates.",
      },
    },
    {
      "@type": "Question",
      name: "What makes SmalCoda different from other web designers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SmalCoda focuses on calm, thoughtful web design using modern technology (Next.js, React, TypeScript) with transparent pricing, clear communication, and a people-first approach. Every project is custom-built, not based on templates, and designed to be fast, accessible, and easy to maintain.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow="What we offer"
        title="Services"
        description="Every project is custom, delivered through a clear, repeatable process that balances design, engineering, and communication."
        actions={<Button href="/contact">Start a project</Button>}
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              popular={service.id === "professional-website"}
            />
          ))}
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-8">
          <div className="text-center">
            <p className="eyebrow">Compare packages</p>
            <h2 className="section-heading">Find the Right Fit</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-brand-sage/20">
                  <th className="px-4 py-3 text-left text-sm font-medium text-brand-sage">Feature</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-brand-sage">Starter</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-brand-sage">Professional ⭐</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-brand-sage">Custom</th>
                </tr>
              </thead>
              <tbody className="text-brand-sand/80">
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">Number of Pages</td>
                  <td className="px-4 py-3 text-center text-sm">1-3</td>
                  <td className="px-4 py-3 text-center text-sm">4-6</td>
                  <td className="px-4 py-3 text-center text-sm">8+</td>
                </tr>
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">Timeline</td>
                  <td className="px-4 py-3 text-center text-sm">2.5-4 weeks</td>
                  <td className="px-4 py-3 text-center text-sm">4-6 weeks</td>
                  <td className="px-4 py-3 text-center text-sm">5-7+ weeks</td>
                </tr>
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">Design Revisions</td>
                  <td className="px-4 py-3 text-center text-sm">1 round</td>
                  <td className="px-4 py-3 text-center text-sm">2 rounds</td>
                  <td className="px-4 py-3 text-center text-sm">Unlimited</td>
                </tr>
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">Component System</td>
                  <td className="px-4 py-3 text-center text-sm">Basic</td>
                  <td className="px-4 py-3 text-center text-sm">Advanced</td>
                  <td className="px-4 py-3 text-center text-sm">Fully Custom</td>
                </tr>
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">SEO Optimization</td>
                  <td className="px-4 py-3 text-center text-sm">Basic on-page</td>
                  <td className="px-4 py-3 text-center text-sm">Enhanced</td>
                  <td className="px-4 py-3 text-center text-sm">Comprehensive</td>
                </tr>
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">Analytics & Tracking</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                  <td className="px-4 py-3 text-center text-sm">✓ + Custom</td>
                </tr>
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">Mobile Responsive</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                </tr>
                <tr className="border-b border-brand-sage/10">
                  <td className="px-4 py-3 text-sm">Contact Form</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                  <td className="px-4 py-3 text-center text-sm">✓</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Price</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-brand-sage">$2,500</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-brand-sage">$5,000</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-brand-sage">$7,500+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
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
        <Container>
          <LeadMagnet />
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
