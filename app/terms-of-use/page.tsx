import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions for using SmalCoda Web Solutions and smalcoda.studio.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="Please read these Terms & Conditions carefully before using smalcoda.studio. By accessing or using this Site, you agree to be bound by these Terms."
      />

      <Section>
        <Container className="space-y-10">
          <div className="space-y-2 text-base leading-relaxed text-brand-sand/80">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-sage">
              Terms &amp; Conditions
            </p>
            <p className="text-sm text-brand-sand/70">
              Last Updated: December 5, 2025
            </p>
            <p className="text-sm text-brand-sand/70">
              SmalCoda Web Solutions – smalcoda.studio
            </p>
          </div>

          <div className="space-y-10 text-base leading-relaxed text-brand-sand/80">
            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">
                Please read these Terms
              </h2>
              <p>
                Please read these Terms &amp; Conditions (“Terms”) carefully before using
                smalcoda.studio (the “Site”), owned and operated by SmalCoda Web Solutions
                (“Company,” “we,” “our,” or “us”). By accessing or using this Site, you agree to be
                bound by these Terms. If you do not agree, do not use this Site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">
                1. Ownership &amp; Intellectual Property
              </h2>
              <p>
                All content on this Site—including text, graphics, images, videos, logos, designs,
                code, and layouts—is the exclusive property of SmalCoda Web Solutions and is
                protected by U.S. and international copyright, trademark, and IP laws. You may not
                copy, reproduce, republish, sell, distribute, or modify any content without our
                prior written consent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">2. Acceptable Use</h2>
              <p className="text-brand-sand/80">You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Use the Site for unlawful or fraudulent activities</li>
                <li>Copy, scrape, or harvest data from the Site</li>
                <li>Attempt to reverse engineer or gain unauthorized access to any part of the Site</li>
                <li>Exploit bugs, errors, or vulnerabilities</li>
                <li>Interfere with the Site’s performance or security</li>
              </ul>
              <p>We may restrict access to the Site for any violation of these Terms.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">
                3. No Guarantees of Results (SEO, Marketing, Performance, or Revenue)
              </h2>
              <p>
                While SmalCoda Web Solutions may provide information about SEO, web design,
                strategy, marketing, or technical performance, we do not guarantee:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Search engine ranking results</li>
                <li>Increased traffic or conversions</li>
                <li>Revenue, leads, or business outcomes</li>
                <li>Any specific website performance metrics</li>
                <li>Results from third-party tools, APIs, or integrations</li>
              </ul>
              <p>
                All results vary based on numerous factors outside of our control, including
                algorithm changes, hosting environments, and client content.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">
                4. Third-Party Tools, Platforms &amp; Integrations
              </h2>
              <p>Our Site and services may reference or integrate with third-party platforms such as:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Tally</li>
                <li>Notion</li>
                <li>Zapier</li>
                <li>Google Analytics</li>
                <li>Vercel</li>
                <li>StartMail</li>
                <li>Stripe</li>
                <li>Social media platforms</li>
                <li>APIs or plugins</li>
              </ul>
              <p>
                We make no guarantees regarding the availability, reliability, security, or
                performance of third-party tools. We are not responsible for outages, errors, data
                loss, or issues caused by third-party services.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">5. No Professional Advice</h2>
              <p>Information on this Site is for general educational and informational purposes only.</p>
              <p>It does not constitute:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Legal advice</li>
                <li>Financial advice</li>
                <li>Tax advice</li>
                <li>Professional business advice</li>
              </ul>
              <p>You are responsible for consulting an appropriate professional as needed.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">
                6. Website &amp; Technical Disclaimers
              </h2>
              <p>We do not warrant that:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>The Site will be error-free or uninterrupted</li>
                <li>Servers or files will be free of viruses or harmful components</li>
                <li>Future browser or OS updates will maintain website compatibility</li>
              </ul>
              <p>You use the Site at your own risk.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by New Jersey law, SmalCoda Web Solutions is not liable for any damages resulting from:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Use or inability to use the Site</li>
                <li>Loss of data</li>
                <li>Loss of business or revenue</li>
                <li>Third-party failures</li>
                <li>Website downtime</li>
                <li>Errors, bugs, delays, or inaccuracies</li>
              </ul>
              <p>Our total liability for any claim shall not exceed $100.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">8. Indemnification</h2>
              <p>You agree to indemnify and hold SmalCoda Web Solutions harmless from any claims, damages, losses, or expenses arising from:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Your misuse of the Site</li>
                <li>Your violation of these Terms</li>
                <li>Your use of third-party tools or content</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">
                9. Links to Third-Party Websites
              </h2>
              <p>We are not responsible for third-party websites linked from our Site. Clicking external links is at your own discretion.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">10. Privacy Policy</h2>
              <p>Your use of the Site is also governed by our Privacy Policy, available on this Site.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">11. Changes to These Terms</h2>
              <p>We may update or modify these Terms at any time by posting revised Terms on this page. Continued use of the Site constitutes acceptance of the updated Terms.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">12. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of New Jersey, specifically Bergen County.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">13. Contact Information</h2>
              <p>SmalCoda Web Solutions</p>
              <p>Hackensack, New Jersey</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@smalcoda.studio"
                  className="text-brand-sage hover:text-brand-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage/60"
                >
                  hello@smalcoda.studio
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://smalcoda.studio"
                  className="text-brand-sage hover:text-brand-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage/60"
                >
                  https://smalcoda.studio
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
