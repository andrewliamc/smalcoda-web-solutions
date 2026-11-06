import { ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";
import Button from "./Button";

type CTASectionProps = {
  title: string;
  description?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <Section>
      <Container>
        <div className="glass rounded-2xl border border-brand-sage/20 bg-brand-moss/60 px-6 py-10 shadow-soft md:px-10 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-heading text-brand-sand md:text-4xl">
                {title}
              </h2>
              {description ? (
                <p className="max-w-2xl text-brand-sand/80">{description}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryLabel && secondaryHref ? (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CTASection;
