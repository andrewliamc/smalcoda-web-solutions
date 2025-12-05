import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for SmalCoda Web Solutions describing how cookies and similar technologies are used on smalcoda.studio.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        description="How SmalCoda Web Solutions uses cookies and similar technologies on smalcoda.studio."
      />

      <Section>
        <Container className="space-y-10">
          <div className="space-y-2 text-base leading-relaxed text-brand-sand/80">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-sage">
              Cookie Policy
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
                This Cookie Policy explains how SmalCoda Web Solutions (“Company,” “we,” “our,” or
                “us”) uses cookies and similar technologies on smalcoda.studio (the “Site”). By
                continuing to use the Site, you consent to the use of cookies as described in this
                policy.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They
                help websites function, improve user experience, track analytics, and enable
                marketing features.
              </p>
              <p>Cookies may be:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Session cookies (expire when you close your browser)</li>
                <li>Persistent cookies (stored until manually deleted or expired)</li>
                <li>First-party cookies (set by us)</li>
                <li>Third-party cookies (set by external services like Google)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">2. Types of Cookies We Use</h2>
              <div className="space-y-2">
                <h3 className="text-lg font-heading text-brand-sand">2.1 Strictly Necessary Cookies</h3>
                <p>These enable core website functionality such as:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Page navigation</li>
                  <li>Security</li>
                  <li>Form submissions</li>
                  <li>Basic hosting operations</li>
                </ul>
                <p>The Site cannot function properly without these cookies.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-heading text-brand-sand">2.2 Analytics &amp; Performance Cookies</h3>
                <p>Used to understand how visitors interact with the Site.</p>
                <p>Tools may include:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Google Analytics</li>
                  <li>Vercel analytics</li>
                  <li>Tally form analytics</li>
                </ul>
                <p>We track:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Page views</li>
                  <li>Time spent on pages</li>
                  <li>Referring pages</li>
                  <li>Device types</li>
                  <li>Geographic data (approximate)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-heading text-brand-sand">2.3 Marketing &amp; Advertising Cookies</h3>
                <p>These cookies support advertising and retargeting.</p>
                <p>They may come from:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Meta Pixel</li>
                  <li>TikTok Pixel</li>
                  <li>Google Ads</li>
                  <li>Other social platforms</li>
                </ul>
                <p>These cookies track visits and user behavior to show relevant ads.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-heading text-brand-sand">2.4 Functional Cookies</h3>
                <p>Enable features such as:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Remembering preferences</li>
                  <li>Improved navigation</li>
                  <li>Performance enhancements</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">3. Third-Party Cookies</h2>
              <p>Third parties may place cookies on your device for analytics, tracking, advertising, or embedded content.</p>
              <p>These parties include:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Google</li>
                <li>Meta</li>
                <li>TikTok</li>
                <li>Vercel</li>
                <li>Tally</li>
                <li>Zapier (indirectly via webhook tracking)</li>
              </ul>
              <p>We do not control third-party cookie lifespans or behavior.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">4. Managing Cookies</h2>
              <p>You may control cookies by:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Adjusting browser settings</li>
                <li>Blocking cookies entirely</li>
                <li>Clearing existing cookies</li>
                <li>Opting out through analytics tools</li>
              </ul>
              <p>Note: disabling cookies may impair website performance or functionality.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">5. Consent</h2>
              <p>
                By using our Site, you consent to our use of cookies. If a cookie banner is present,
                your continued use constitutes acceptance of non-essential cookies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">6. Updates to This Cookie Policy</h2>
              <p>We may update this policy from time to time. The “Last Updated” date will reflect any changes.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-brand-sand">7. Contact Us</h2>
              <p>If you have questions about our Cookie Policy, contact:</p>
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
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
