import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Website disclaimer for SmalCoda Web Solutions covering accuracy, third-party tools, limitations of liability, and contact information.",
};

export default function LegalNoticePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Legal Notice"
        description="Website disclaimer for smalcoda.studio covering accuracy, third-party tools, and limits of liability."
      />

      <Section>
        <Container className="space-y-10">
          <div className="space-y-2 text-base leading-relaxed text-brand-sand/80">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-sage">
              Website Disclaimer
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
                The information provided on smalcoda.studio (the “Site”) is for general informational
                and educational purposes only. SmalCoda Web Solutions (“Company,” “we,” “our,” or
                “us”) makes no guarantees regarding accuracy, results, or outcomes of any kind. By
                using this Site, you agree to this Disclaimer.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">1. No Professional Advice</h2>
              <p>Nothing on this Site constitutes:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Legal advice</li>
                <li>Tax advice</li>
                <li>Financial advice</li>
                <li>Business or marketing guarantees</li>
                <li>Technical or professional advice</li>
              </ul>
              <p>You should consult qualified professionals before making decisions.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">2. No Guarantees of Results</h2>
              <p>
                While we may discuss web design, development, SEO, marketing, branding, and business
                strategy, we make no guarantees regarding:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>SEO rankings or improvements</li>
                <li>Traffic or conversions</li>
                <li>Revenue, sales, or lead generation</li>
                <li>Website uptime or speed</li>
                <li>Third-party integrations functioning as expected</li>
                <li>Accuracy or completeness of information</li>
              </ul>
              <p>
                All results vary based on factors outside our control, including client actions,
                content quality, algorithm changes, and hosting environments.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">3. Third-Party Tools &amp; Links</h2>
              <p>Our Site may reference or integrate third-party tools such as:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Google Analytics</li>
                <li>Vercel</li>
                <li>Tally</li>
                <li>Notion</li>
                <li>Zapier</li>
                <li>StartMail</li>
                <li>Stripe</li>
                <li>Social media platforms</li>
                <li>Plugins or APIs</li>
              </ul>
              <p>We do not control these third parties and are not responsible for:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Their accuracy</li>
                <li>Their availability</li>
                <li>Their performance</li>
                <li>Their security practices</li>
              </ul>
              <p>External links do not imply endorsement.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">4. Technical Risks</h2>
              <p>While we aim to maintain a secure and functional Site, we cannot guarantee:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>The Site will be error-free or uninterrupted</li>
                <li>Files or downloads will be virus-free</li>
                <li>Future browser or device updates will maintain compatibility</li>
                <li>Forms, buttons, or integrations will work at all times</li>
              </ul>
              <p>You use the Site at your own risk.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">5. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, SmalCoda Web Solutions is not liable for any:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Direct or indirect damages</li>
                <li>Data loss</li>
                <li>Business interruption</li>
                <li>Loss of profits</li>
                <li>Third-party failures</li>
                <li>Errors, omissions, or inaccuracies on the Site</li>
              </ul>
              <p>Use of the Site signifies acceptance of this limitation.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">6. Changes to This Disclaimer</h2>
              <p>
                We may update this Disclaimer periodically. Continued use of the Site indicates
                acceptance of any revised terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">7. Contact Us</h2>
              <p>If you have questions about this Disclaimer:</p>
              <p>SmalCoda Web Solutions</p>
              <p>Hackensack, NJ</p>
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
