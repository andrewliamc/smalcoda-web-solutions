import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <Container>
        <div className="glass mx-auto max-w-2xl rounded-3xl border border-brand-sage/20 bg-brand-moss/60 px-6 py-10 text-center shadow-soft md:px-10 md:py-14">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-sage/70">
                404 Error
              </p>
              <h1 className="text-4xl font-heading text-brand-sand md:text-5xl">
                Page Not Found
              </h1>
            </div>
            <p className="text-lg text-brand-sand/80">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <nav className="flex flex-wrap justify-center gap-3 pt-4">
              <Button href="/">← Back to Home</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
              <Button href="/work" variant="ghost">
                See Our Work
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </Container>
    </Section>
  );
}
