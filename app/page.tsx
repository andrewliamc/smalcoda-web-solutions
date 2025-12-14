import Button from "@/components/Button";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import ProcessStep from "@/components/ProcessStep";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import LeadMagnet from "@/components/LeadMagnet";
import { services } from "@/data/services";
import { processSteps } from "@/data/processSteps";
import { testimonials } from "@/data/testimonials";
import { caseStudies } from "@/lib/caseStudies";

const serviceSnapshot = services.slice(0, 3);
const featuredCaseStudy =
  caseStudies.find((study) => study.slug === "willow-and-pine-tea-co") ?? caseStudies[0];
const featuredBadges = Array.from(
  new Set([featuredCaseStudy.category, ...featuredCaseStudy.tech])
);

export default function HomePage() {
  return (
    <>
      <Section className="pt-10">
        <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <h1 className="eyebrow">SmalCoda Web Solutions</h1>
            <h2 className="text-4xl font-heading text-brand-sand sm:text-5xl md:text-6xl">
              Your Business Deserves a Website That Actually Works
            </h2>
            <p className="text-lg text-brand-sand/80">
              Modern, mobile-first web design for small businesses in Hackensack and Northern New Jersey. Clean code. Clear timelines. Transparent pricing starting at $2,500.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="https://calendar.app.google/vSneyr2TZtLJubmt6" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>
          <div className="glass rounded-3xl border border-brand-sage/20 bg-brand-moss/50 p-6 shadow-soft">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-moss/60 via-brand-night to-brand-night p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-brand-sage/70">
                Studio snapshot
              </p>
              <div className="mt-4 space-y-3 text-brand-sand/90">
                <p>
                  High-touch, independent studio led by an engineer who designs. I work
                  with founders, marketing teams, and creative directors to launch
                  digital experiences that feel intentional.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/70" />
                    <span>Next.js, TypeScript, Tailwind foundations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/70" />
                    <span>Design systems for flexible sites</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/70" />
                    <span>Reliable delivery with clear communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">What I do</p>
              <h2 className="section-heading">Service Snapshot</h2>
            </div>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceSnapshot.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Featured project</p>
            <h2 className="section-heading">{featuredCaseStudy.title}</h2>
            <p className="text-brand-sand/80">
              Brand-forward ecommerce experience with sensory storytelling, tasting notes,
              and a calm, high-end shopping flow.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
              {featuredBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/5 bg-brand-night/60 px-3 py-1 text-brand-sand/80"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Button href={`/work/${featuredCaseStudy.slug}`}>View case study</Button>
              <Button href="/work" variant="ghost">
                See all work
              </Button>
            </div>
          </div>
          <div className="glass relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-sage/20 bg-gradient-to-br from-brand-moss/70 via-brand-night to-brand-night shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(159,189,170,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(194,169,138,0.25),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-sage/70">
                Mockup space
              </p>
              <h3 className="mt-2 text-2xl font-heading text-brand-sand">
                Calm, tactile UI with conversion paths built in.
              </h3>
              <p className="text-sm text-brand-sand/70">
                Placeholder visual for the featured project story.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Process</p>
              <h2 className="section-heading">Clear steps, calm delivery</h2>
            </div>
            <Button href="/process" variant="secondary">
              See the process
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step) => (
              <ProcessStep key={step.id} step={step} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-brand-night">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/working-together.jpg')] bg-cover bg-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-night/90 via-brand-moss/80 to-brand-night/92" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-4xl glass rounded-3xl border border-brand-sage/20 bg-brand-moss/55 px-6 py-10 shadow-soft md:px-10 md:py-14">
            <div className="space-y-4">
              <p className="eyebrow text-left">Working together</p>
              <h2 className="section-heading text-left">Why should you choose SmalCoda?</h2>
              <ul className="space-y-3 text-left text-brand-sand/80">
                {[
                  "Clear, friendly communication with no jargon walls.",
                  "Thoughtful, user-first design that respects attention.",
                  "Clean, maintainable code that’s easy to build on.",
                  "Reliable timelines with expectations set up front.",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-sage/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
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

      <Section tone="muted">
        <Container>
          <LeadMagnet />
        </Container>
      </Section>

      <CTASection
        title="Ready for a calmer, clearer web presence?"
        description="Tell me about your goals and I'll share a tailored plan, timeline, and investment range."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="View the work"
        secondaryHref="/work"
      />
    </>
  );
}
