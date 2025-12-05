import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for SmalCoda Web Solutions describing how we collect, use, store, and protect information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How SmalCoda Web Solutions collects, uses, stores, and protects information when you visit smalcoda.studio, submit forms, or use our services."
      />

      <Section>
        <Container className="space-y-10">
          <div className="space-y-2 text-base leading-relaxed text-brand-sand/80">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-sage">
              Privacy Policy
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
                SmalCoda Web Solutions (“Company,” “we,” “our,” “us”) respects your privacy and is
                committed to protecting your personal information. This Privacy Policy explains how
                we collect, use, store, and protect information when you visit smalcoda.studio (the
                “Site”), submit forms, or use our services. By using this Site, you agree to the
                terms of this Privacy Policy.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">1. Information We Collect</h2>
              <div className="space-y-2">
                <h3 className="text-lg font-heading text-brand-sand">1.1 Information You Provide Directly</h3>
                <p>Such as when you submit a form through Tally, contact us, or schedule a consultation:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name</li>
                  <li>Project details</li>
                  <li>Budget information</li>
                  <li>Uploaded documents or files</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-heading text-brand-sand">1.2 Automatically Collected Information</h3>
                <p>When you browse the Site, we may collect:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                  <li>Time spent on the Site</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-heading text-brand-sand">1.3 Cookies &amp; Tracking Data</h3>
                <p>We use cookies, pixels, and similar technologies for:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Analytics</li>
                  <li>Performance tracking</li>
                  <li>Security</li>
                  <li>User experience</li>
                </ul>
                <p>Tools may include:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Google Analytics</li>
                  <li>Meta Pixel</li>
                  <li>TikTok Pixel</li>
                  <li>Vercel analytics</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">2. How We Use Your Information</h2>
              <p>We may use information for:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Responding to inquiries and form submissions</li>
                <li>Creating proposals or project estimates</li>
                <li>Operating and improving the Site</li>
                <li>Scheduling consultations</li>
                <li>Sending business communications</li>
                <li>Analytics and performance monitoring</li>
                <li>Marketing (with consent where required)</li>
                <li>CRM management via Notion</li>
                <li>Workflow automation via Zapier</li>
              </ul>
              <p>We do not sell personal data.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">3. Legal Bases for Processing (GDPR)</h2>
              <p>For users in the EU/UK, we process data under:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Contract necessity</li>
                <li>Legitimate interest</li>
                <li>Consent</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">4. How We Share Your Information</h2>
              <p>We may share information with trusted third-party service providers who help run our business, including:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Tally (form submissions)</li>
                <li>Notion (CRM / client tracking)</li>
                <li>Zapier (automation)</li>
                <li>Google Analytics / Google Ads</li>
                <li>StartMail (email communication)</li>
                <li>Vercel (hosting and analytics)</li>
                <li>Stripe (payments)</li>
                <li>Calendly / scheduling tools</li>
                <li>Social media platforms for advertising</li>
              </ul>
              <p>These providers process information only on our behalf and do not own or sell it.</p>
              <p>We may also disclose data:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>To comply with laws</li>
                <li>To protect our rights</li>
                <li>To prevent fraud</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">5. Data Retention</h2>
              <p>We retain personal information only as long as necessary for:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Business purposes</li>
                <li>Legal compliance</li>
                <li>Tax records</li>
                <li>Client documentation</li>
              </ul>
              <p>You may request deletion at any time.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">6. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have rights to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
                <li>Limit processing</li>
                <li>Request portability</li>
              </ul>
              <p>To exercise any rights, email hello@smalcoda.studio.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">7. Cookies &amp; Tracking Choices</h2>
              <p>You may:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Disable cookies through your browser</li>
                <li>Opt out of analytics tools</li>
                <li>Use cookie preferences (if implemented)</li>
              </ul>
              <p>However, disabling cookies may affect Site performance.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">8. Security</h2>
              <p>We take appropriate measures to protect your information, including:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Encrypted transmission (HTTPS)</li>
                <li>Limited internal access</li>
                <li>Secure password management</li>
              </ul>
              <p>No method of transmission is 100% secure.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">9. Children’s Privacy</h2>
              <p>This Site is not intended for users under 13. We do not knowingly collect information from minors.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. The “Last Updated” date will reflect
                changes. Continued use of the Site indicates acceptance of the revised policy.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">11. Contact Us</h2>
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
