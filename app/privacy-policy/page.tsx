"use client";

import Link from "next/link";
import { TextReveal, PageReveal } from "../components/gsap-effects";

/* ─── Section Component ─── */
function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-xs font-mono text-muted-light tracking-wider">
          {number}
        </span>
        <h2 className="text-xl font-semibold text-foreground tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-[15px] text-muted leading-[1.8] space-y-4 pl-10">
        {children}
      </div>
    </section>
  );
}

/* ─── Privacy Policy Page ─── */
export default function PrivacyPolicyPage() {
  const lastUpdated = "March 23, 2026";

  const sections = [
    { id: "information-collected", number: "01", title: "Information We Collect" },
    { id: "audio-data", number: "02", title: "Audio Data" },
    { id: "transcripts-outputs", number: "03", title: "Transcripts & Outputs" },
    { id: "usage-data", number: "04", title: "Usage Data" },
    { id: "cookies", number: "05", title: "Cookies & Similar Technologies" },
    { id: "how-we-use", number: "06", title: "How We Use Your Data" },
    { id: "data-retention", number: "07", title: "Data Retention" },
    { id: "deletion-rights", number: "08", title: "Your Rights & Deletion" },
    { id: "third-party", number: "09", title: "Third-Party Services" },
    { id: "security", number: "10", title: "Security" },
    { id: "international", number: "11", title: "International Transfers" },
    { id: "children", number: "12", title: "Children's Privacy" },
    { id: "contact", number: "13", title: "Contact Us" },
    { id: "updates", number: "14", title: "Policy Updates" },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-neutral-50/60 via-neutral-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            Legal
          </span>
          <TextReveal
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Privacy Policy
          </TextReveal>
          <TextReveal
            tag="p"
            className="mt-6 text-lg text-muted leading-relaxed"
          >
            Your privacy matters to us. This policy explains how Sythio collects,
            uses, and protects your information when you use our services.
          </TextReveal>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-light">
            <span>Last updated: {lastUpdated}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Effective: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-border-light bg-background/50 p-6 md:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">
              Table of Contents
            </h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-baseline gap-2.5 text-sm text-muted hover:text-foreground transition-colors py-1"
                >
                  <span className="font-mono text-xs text-muted-light">
                    {s.number}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 md:pb-44 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <Section
            id="information-collected"
            number="01"
            title="Information We Collect"
          >
            <p>
              When you create an account or use Sythio, we may collect the
              following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">Account Information:</strong>{" "}
                Your name, email address, and password when you register for an
                account.
              </li>
              <li>
                <strong className="text-foreground font-medium">Profile Information:</strong>{" "}
                Optional details you provide, such as your profile picture, job
                title, or organization.
              </li>
              <li>
                <strong className="text-foreground font-medium">Payment Information:</strong>{" "}
                Billing details processed securely through our third-party payment
                provider. We do not store your full credit card number.
              </li>
              <li>
                <strong className="text-foreground font-medium">Communications:</strong>{" "}
                Information you provide when contacting our support team or
                responding to surveys.
              </li>
            </ul>
          </Section>

          <Section id="audio-data" number="02" title="Audio Data">
            <p>
              Sythio processes audio recordings you provide to generate
              transcripts, summaries, and other outputs. Here is how we handle
              your audio data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Audio files are uploaded to our secure servers for processing and
                are encrypted both in transit (TLS 1.3) and at rest (AES-256).
              </li>
              <li>
                Audio is processed by our AI models to generate transcripts,
                summaries, tasks, and other structured outputs you request.
              </li>
              <li>
                We do not use your audio recordings to train our AI models unless
                you explicitly opt in to our improvement program.
              </li>
              <li>
                You may delete your audio recordings at any time through your
                account settings.
              </li>
            </ul>
          </Section>

          <Section
            id="transcripts-outputs"
            number="03"
            title="Transcripts & Outputs"
          >
            <p>
              When Sythio processes your audio, it generates various outputs
              including transcripts, summaries, action items, and structured
              notes. These outputs:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Are stored in your account and accessible only to you unless you
                choose to share them.
              </li>
              <li>
                May contain speaker identification labels based on voice
                characteristics detected in the audio.
              </li>
              <li>
                Are encrypted at rest and in transit using industry-standard
                protocols.
              </li>
              <li>
                Can be exported or deleted at any time through your account
                dashboard.
              </li>
            </ul>
          </Section>

          <Section id="usage-data" number="04" title="Usage Data">
            <p>
              We automatically collect certain information about how you interact
              with Sythio, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Device information (browser type, operating system, device model).
              </li>
              <li>
                Log data (IP address, access times, pages viewed, features used).
              </li>
              <li>
                Performance metrics (app load times, error reports, crash logs).
              </li>
              <li>
                Feature usage patterns (which outputs you generate most, recording
                frequency).
              </li>
            </ul>
            <p>
              This data helps us improve Sythio, diagnose technical issues, and
              understand how our features are used.
            </p>
          </Section>

          <Section
            id="cookies"
            number="05"
            title="Cookies & Similar Technologies"
          >
            <p>
              Sythio uses cookies and similar technologies for authentication,
              preferences, and analytics. For complete details on the cookies we
              use and how to manage them, please see our{" "}
              <Link
                href="/cookie-policy"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="how-we-use" number="06" title="How We Use Your Data">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, maintain, and improve the Sythio service.</li>
              <li>Process your audio recordings and generate requested outputs.</li>
              <li>
                Send you service-related communications, including account
                verification, security alerts, and billing notifications.
              </li>
              <li>
                Respond to your support requests and provide customer assistance.
              </li>
              <li>
                Analyze usage patterns to improve our AI models and user
                experience (using aggregated, anonymized data only).
              </li>
              <li>
                Detect, prevent, and address fraud, abuse, and security issues.
              </li>
              <li>
                Comply with legal obligations and enforce our Terms of Service.
              </li>
            </ul>
            <p>
              We will never sell your personal information to third parties.
            </p>
          </Section>

          <Section id="data-retention" number="07" title="Data Retention">
            <p>
              We retain your data for as long as your account is active or as
              needed to provide you with our services. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">Account data</strong> is
                retained for the lifetime of your account.
              </li>
              <li>
                <strong className="text-foreground font-medium">Audio recordings</strong> are
                retained until you delete them or close your account.
              </li>
              <li>
                <strong className="text-foreground font-medium">Generated outputs</strong>{" "}
                (transcripts, summaries, etc.) are retained until you delete them
                or close your account.
              </li>
              <li>
                <strong className="text-foreground font-medium">Usage data</strong> is
                retained in identifiable form for up to 24 months, after which it
                is anonymized.
              </li>
              <li>
                <strong className="text-foreground font-medium">Backup copies</strong> may
                persist in our encrypted backup systems for up to 90 days after
                deletion.
              </li>
            </ul>
          </Section>

          <Section
            id="deletion-rights"
            number="08"
            title="Your Rights & Deletion"
          >
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">Access:</strong> Request a copy
                of the personal data we hold about you.
              </li>
              <li>
                <strong className="text-foreground font-medium">Correction:</strong> Request
                correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong className="text-foreground font-medium">Deletion:</strong> Request
                deletion of your personal data and account.
              </li>
              <li>
                <strong className="text-foreground font-medium">Portability:</strong> Request
                your data in a structured, machine-readable format.
              </li>
              <li>
                <strong className="text-foreground font-medium">Objection:</strong> Object to
                certain processing of your data.
              </li>
              <li>
                <strong className="text-foreground font-medium">Restriction:</strong> Request
                that we limit how we use your data.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@sythio.com"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                privacy@sythio.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </Section>

          <Section id="third-party" number="09" title="Third-Party Services">
            <p>
              Sythio integrates with or relies on the following types of
              third-party services:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">Cloud Infrastructure:</strong>{" "}
                We use industry-leading cloud providers to host and process your
                data securely.
              </li>
              <li>
                <strong className="text-foreground font-medium">Payment Processing:</strong>{" "}
                Payments are handled by PCI-DSS compliant processors. We never
                see or store your full card details.
              </li>
              <li>
                <strong className="text-foreground font-medium">Analytics:</strong> We use
                privacy-focused analytics tools to understand aggregate usage
                patterns.
              </li>
              <li>
                <strong className="text-foreground font-medium">AI Processing:</strong> Audio
                processing may involve third-party AI services, which are bound by
                strict data processing agreements.
              </li>
            </ul>
            <p>
              We carefully vet all third-party providers and require them to
              maintain appropriate security and privacy standards.
            </p>
          </Section>

          <Section id="security" number="10" title="Security">
            <p>
              We take the security of your data seriously and implement
              industry-standard measures to protect it:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                All data is encrypted in transit using TLS 1.3 and at rest using
                AES-256 encryption.
              </li>
              <li>
                Access to user data is strictly limited to authorized personnel on
                a need-to-know basis.
              </li>
              <li>
                We conduct regular security audits and penetration testing.
              </li>
              <li>
                We maintain incident response procedures and will notify affected
                users of any data breach within 72 hours as required by applicable
                law.
              </li>
            </ul>
            <p>
              While no system is 100% secure, we continuously work to protect
              your information and promptly address any vulnerabilities.
            </p>
          </Section>

          <Section
            id="international"
            number="11"
            title="International Transfers"
          >
            <p>
              Sythio operates globally, and your data may be transferred to and
              processed in countries other than your country of residence. When we
              transfer data internationally, we ensure appropriate safeguards are
              in place, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Standard Contractual Clauses (SCCs) approved by the European
                Commission.
              </li>
              <li>
                Data processing agreements with all service providers that handle
                personal data.
              </li>
              <li>
                Compliance with applicable data protection frameworks, including
                GDPR requirements for EU/EEA users.
              </li>
            </ul>
          </Section>

          <Section id="children" number="12" title="Children's Privacy">
            <p>
              Sythio is not intended for use by children under the age of 16. We
              do not knowingly collect personal information from children under
              16. If we become aware that we have collected data from a child
              under 16, we will take steps to delete that information promptly.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided
              us with personal information, please contact us at{" "}
              <a
                href="mailto:privacy@sythio.com"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                privacy@sythio.com
              </a>
              .
            </p>
          </Section>

          <Section id="contact" number="13" title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="rounded-xl border border-border-light bg-background/50 p-6 space-y-2 not-prose">
              <p className="text-sm">
                <strong className="text-foreground font-medium">Email:</strong>{" "}
                <a
                  href="mailto:privacy@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  privacy@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">General:</strong>{" "}
                <a
                  href="mailto:support@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  support@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">Website:</strong>{" "}
                <Link
                  href="/contact"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  sythio.com/contact
                </Link>
              </p>
            </div>
          </Section>

          <Section id="updates" number="14" title="Policy Updates">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes, we will:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Post the updated policy on this page with a revised &quot;Last
                Updated&quot; date.
              </li>
              <li>
                Notify you via email or through an in-app notification if the
                changes are significant.
              </li>
              <li>
                Provide you with an opportunity to review the changes before they
                take effect, where required by law.
              </li>
            </ul>
            <p>
              Your continued use of Sythio after the effective date of any changes
              constitutes your acceptance of the updated policy.
            </p>
          </Section>

          {/* Divider & back to top */}
          <div className="pt-8 border-t border-border-light flex items-center justify-between">
            <p className="text-sm text-muted-light">
              &copy; {new Date().getFullYear()} Sythio. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
