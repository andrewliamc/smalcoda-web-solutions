import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for SmalCoda Web Solutions, outlining our commitment to inclusive, accessible experiences.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Accessibility"
        description="SmalCoda Web Solutions’ commitment to inclusive, accessible digital experiences aligned with WCAG 2.1 Level AA."
      />

      <Section>
        <Container className="space-y-10">
          <div className="space-y-2 text-base leading-relaxed text-brand-sand/80">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-sage">
              Accessibility Statement
            </p>
            <p className="text-sm text-brand-sand/70">Last Updated: December 5, 2025</p>
            <p className="text-sm text-brand-sand/70">
              SmalCoda Web Solutions — smalcoda.studio
            </p>
          </div>

          <div className="space-y-10 text-base leading-relaxed text-brand-sand/80">
            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">Overview</h2>
              <p>
                SmalCoda Web Solutions (“Company,” “we,” “our,” or “us”) is committed to ensuring
                digital accessibility for people of all abilities. We strive to meet or exceed the
                standards outlined in the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              </p>
              <p>
                While we are continuously improving the accessibility of our Site, we recognize that
                some areas may still require enhancement.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">1. Our Commitment</h2>
              <p>We aim to provide a website experience that is:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Inclusive</li>
                <li>Accessible</li>
                <li>User-friendly</li>
                <li>Compatible with assistive technologies</li>
              </ul>
              <p>
                Our ongoing efforts include reviewing content, improving interface elements, and
                implementing best practices in design and development.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">2. Accessibility Features</h2>
              <p>We work to incorporate features such as:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Descriptive alt text for images</li>
                <li>Sufficient color contrast</li>
                <li>Keyboard navigation support</li>
                <li>Semantic HTML structure</li>
                <li>Resizable text</li>
                <li>Logical heading hierarchy</li>
                <li>Forms that include accessible labels</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">3. Areas for Improvement</h2>
              <p>Despite our efforts, we acknowledge that:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Some linked third-party content may not be fully accessible</li>
                <li>Some older components or embeds may not meet all WCAG standards</li>
                <li>Accessibility improvements are ongoing and iterative</li>
              </ul>
              <p>We welcome feedback to help prioritize accessibility enhancements.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">4. Third-Party Tools and Integrations</h2>
              <p>
                Some third-party services (such as fonts, analytics, embedded forms, or scheduling
                tools) may not fully conform to accessibility standards outside our control.
              </p>
              <p>We cannot guarantee compliance on external platforms but strive to choose accessible tools when possible.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">5. Feedback &amp; Contact Information</h2>
              <p>
                If you encounter any accessibility barriers on our Site, please contact us so we can
                assist you:
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@smalcoda.studio"
                  className="text-brand-sage hover:text-brand-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage/60"
                >
                  hello@smalcoda.studio
                </a>
              </p>
              <p>Location: Hackensack, NJ</p>
              <p>
                Website:{" "}
                <a
                  href="https://smalcoda.studio"
                  className="text-brand-sage hover:text-brand-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage/60"
                >
                  https://smalcoda.studio
                </a>
              </p>
              <p>Please include:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>The page or element you are experiencing difficulty with</li>
                <li>The nature of the issue</li>
                <li>Any assistive technology you are using</li>
              </ul>
              <p>We typically respond within 3–5 business days.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">6. Ongoing Improvements</h2>
              <p>
                We regularly monitor our website and update both content and code to improve
                accessibility. Our goal is continuous improvement as standards evolve.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
