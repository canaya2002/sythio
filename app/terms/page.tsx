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

/* ─── Terms of Service Page ─── */
export default function TermsPage() {
  const lastUpdated = "March 23, 2026";

  const sections = [
    { id: "acceptance", number: "01", title: "Acceptance of Terms" },
    { id: "eligibility", number: "02", title: "Eligibility" },
    { id: "accounts", number: "03", title: "Accounts" },
    { id: "subscriptions", number: "04", title: "Subscriptions & Billing" },
    { id: "acceptable-use", number: "05", title: "Acceptable Use" },
    { id: "user-content", number: "06", title: "User Content" },
    { id: "ai-outputs", number: "07", title: "AI-Generated Outputs" },
    { id: "intellectual-property", number: "08", title: "Intellectual Property" },
    { id: "prohibited-conduct", number: "09", title: "Prohibited Conduct" },
    { id: "availability", number: "10", title: "Service Availability" },
    { id: "termination", number: "11", title: "Termination" },
    { id: "disclaimers", number: "12", title: "Disclaimers" },
    { id: "liability", number: "13", title: "Limitation of Liability" },
    { id: "governing-law", number: "14", title: "Governing Law" },
    { id: "contact", number: "15", title: "Contact" },
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
            Terms of Service
          </TextReveal>
          <TextReveal
            tag="p"
            className="mt-6 text-lg text-muted leading-relaxed"
          >
            These terms govern your use of Sythio. By accessing or using our
            services, you agree to be bound by these terms.
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
          <Section id="acceptance" number="01" title="Acceptance of Terms">
            <p>
              By creating an account, accessing, or using Sythio (the
              &quot;Service&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree to these Terms, you
              may not use the Service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and
              Sythio. We may update these Terms from time to time. We will notify
              you of material changes via email or in-app notification. Your
              continued use of the Service after such changes constitutes
              acceptance of the updated Terms.
            </p>
          </Section>

          <Section id="eligibility" number="02" title="Eligibility">
            <p>
              To use Sythio, you must be at least 16 years old and have the legal
              capacity to enter into a binding agreement. By using the Service,
              you represent and warrant that you meet these requirements.
            </p>
            <p>
              If you are using Sythio on behalf of an organization, you represent
              that you have the authority to bind that organization to these
              Terms.
            </p>
          </Section>

          <Section id="accounts" number="03" title="Accounts">
            <p>
              You are responsible for maintaining the security of your account
              credentials. You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Provide accurate and complete information when creating your
                account.
              </li>
              <li>
                Keep your password secure and not share your account credentials
                with others.
              </li>
              <li>
                Notify us immediately of any unauthorized access to your account.
              </li>
              <li>
                Accept responsibility for all activity that occurs under your
                account.
              </li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these Terms or that we reasonably believe have been compromised.
            </p>
          </Section>

          <Section
            id="subscriptions"
            number="04"
            title="Subscriptions & Billing"
          >
            <p>
              Sythio offers both free and paid subscription plans. By subscribing
              to a paid plan, you agree to the following:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">Billing Cycle:</strong>{" "}
                Subscriptions are billed monthly or annually, depending on the
                plan you select. Charges are processed at the beginning of each
                billing cycle.
              </li>
              <li>
                <strong className="text-foreground font-medium">Auto-Renewal:</strong>{" "}
                Subscriptions automatically renew at the end of each billing
                period unless you cancel before the renewal date.
              </li>
              <li>
                <strong className="text-foreground font-medium">Price Changes:</strong> We may
                adjust pricing with at least 30 days&apos; notice. Updated prices
                take effect at the start of your next billing cycle.
              </li>
              <li>
                <strong className="text-foreground font-medium">Refunds:</strong> Refund
                requests are evaluated on a case-by-case basis. You may request a
                refund within 14 days of your initial subscription purchase.
              </li>
              <li>
                <strong className="text-foreground font-medium">Cancellation:</strong> You may
                cancel your subscription at any time. You will retain access to
                paid features until the end of your current billing period.
              </li>
            </ul>
          </Section>

          <Section id="acceptable-use" number="05" title="Acceptable Use">
            <p>
              You agree to use Sythio in compliance with all applicable laws and
              regulations. You are solely responsible for the content you record,
              upload, and process through the Service. You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Obtain all necessary consents before recording conversations with
                other individuals.
              </li>
              <li>
                Comply with all applicable recording and wiretapping laws in your
                jurisdiction.
              </li>
              <li>
                Not use the Service for any unlawful, harmful, or fraudulent
                purpose.
              </li>
              <li>
                Not attempt to reverse-engineer, decompile, or extract the source
                code of our AI models or algorithms.
              </li>
            </ul>
          </Section>

          <Section id="user-content" number="06" title="User Content">
            <p>
              You retain ownership of all content you upload to or create through
              Sythio, including audio recordings, text inputs, and any materials
              you provide (&quot;User Content&quot;).
            </p>
            <p>
              By using the Service, you grant Sythio a limited, non-exclusive,
              worldwide license to process, store, and transmit your User Content
              solely for the purpose of providing and improving the Service. This
              license ends when you delete your content or close your account.
            </p>
            <p>
              You represent that you have all necessary rights to your User
              Content and that its use through Sythio does not infringe on the
              rights of any third party.
            </p>
          </Section>

          <Section id="ai-outputs" number="07" title="AI-Generated Outputs">
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              <p className="text-foreground font-medium text-sm mb-2">
                Important Disclaimer
              </p>
              <p className="text-sm leading-relaxed">
                Sythio uses artificial intelligence to generate transcripts,
                summaries, action items, and other outputs. While we strive for
                accuracy, AI-generated outputs may contain errors, inaccuracies,
                or omissions. You should always review and verify AI-generated
                content before relying on it for important decisions.
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                AI-generated outputs are provided &quot;as is&quot; and should not
                be treated as professional, legal, medical, or financial advice.
              </li>
              <li>
                Transcription accuracy depends on audio quality, speaker clarity,
                background noise, and language complexity.
              </li>
              <li>
                Speaker detection and attribution are probabilistic and may not
                always be accurate.
              </li>
              <li>
                You are responsible for verifying the accuracy and completeness of
                all AI-generated outputs.
              </li>
              <li>
                Sythio is not liable for any decisions made or actions taken based
                on AI-generated outputs.
              </li>
            </ul>
          </Section>

          <Section
            id="intellectual-property"
            number="08"
            title="Intellectual Property"
          >
            <p>
              Sythio and its associated trademarks, logos, designs, code,
              algorithms, AI models, and documentation are the exclusive property
              of Sythio and are protected by intellectual property laws.
            </p>
            <p>
              Nothing in these Terms grants you any right, title, or interest in
              Sythio&apos;s intellectual property except for the limited license
              to use the Service as described herein.
            </p>
            <p>
              You may not copy, modify, distribute, sell, or lease any part of
              our Service or its underlying technology without our prior written
              consent.
            </p>
          </Section>

          <Section
            id="prohibited-conduct"
            number="09"
            title="Prohibited Conduct"
          >
            <p>When using Sythio, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Use the Service to record or process content that is illegal,
                harassing, defamatory, obscene, or otherwise objectionable.
              </li>
              <li>
                Attempt to gain unauthorized access to other users&apos; accounts
                or data.
              </li>
              <li>
                Use automated tools (bots, scrapers, etc.) to access the Service
                in a manner that exceeds reasonable use.
              </li>
              <li>
                Interfere with or disrupt the Service, its servers, or networks
                connected to the Service.
              </li>
              <li>
                Upload content that contains malware, viruses, or any harmful
                code.
              </li>
              <li>
                Resell, sublicense, or commercially exploit the Service without
                authorization.
              </li>
              <li>
                Use the Service to develop competing products or services.
              </li>
              <li>
                Circumvent any technical measures we use to protect the Service.
              </li>
            </ul>
          </Section>

          <Section id="availability" number="10" title="Service Availability">
            <p>
              We strive to maintain high availability of the Sythio Service.
              However, we do not guarantee uninterrupted or error-free operation.
              The Service may be temporarily unavailable due to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Scheduled maintenance (we will provide advance notice when possible).</li>
              <li>Unscheduled outages caused by technical issues or force majeure events.</li>
              <li>Updates, upgrades, or improvements to the Service.</li>
            </ul>
            <p>
              We will make reasonable efforts to restore service promptly and
              communicate any significant disruptions to users.
            </p>
          </Section>

          <Section id="termination" number="11" title="Termination">
            <p>
              You may close your account and stop using Sythio at any time. We
              may also suspend or terminate your access to the Service if:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You violate these Terms or any applicable law.</li>
              <li>
                Your use of the Service poses a security risk or could cause harm
                to other users.
              </li>
              <li>
                Your account has been inactive for an extended period (we will
                notify you before taking any action).
              </li>
              <li>We are required to do so by law or legal process.</li>
            </ul>
            <p>
              Upon termination, your right to use the Service ceases immediately.
              We will retain your data for a reasonable period to allow you to
              export it, after which it will be deleted in accordance with our{" "}
              <Link
                href="/privacy-policy"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="disclaimers" number="12" title="Disclaimers">
            <p className="uppercase text-xs tracking-wider font-medium text-foreground">
              The following disclaimers apply to the fullest extent permitted by
              applicable law:
            </p>
            <p>
              The Service is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, either express
              or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
            <p>
              Sythio does not warrant that the Service will be uninterrupted,
              secure, or error-free, that AI-generated outputs will be accurate or
              complete, or that defects will be corrected.
            </p>
          </Section>

          <Section
            id="liability"
            number="13"
            title="Limitation of Liability"
          >
            <p className="uppercase text-xs tracking-wider font-medium text-foreground">
              To the maximum extent permitted by applicable law:
            </p>
            <p>
              Sythio and its officers, directors, employees, and agents shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your use of or inability to use the Service.</li>
              <li>
                Any errors, inaccuracies, or omissions in AI-generated outputs.
              </li>
              <li>
                Unauthorized access to or alteration of your data or
                transmissions.
              </li>
              <li>Any third-party conduct on the Service.</li>
            </ul>
            <p>
              In no event shall Sythio&apos;s total liability exceed the amount
              you paid to Sythio in the twelve (12) months preceding the event
              giving rise to the claim.
            </p>
          </Section>

          <Section id="governing-law" number="14" title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Governing Jurisdiction], without regard to its conflict
              of law provisions.
            </p>
            <p>
              Any disputes arising out of or relating to these Terms or the
              Service shall be resolved exclusively in the courts located in
              [Governing Jurisdiction]. You consent to the personal jurisdiction
              of such courts.
            </p>
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5">
              <p className="text-sm text-blue-900/70 leading-relaxed">
                <strong className="font-medium text-blue-900/90">Note:</strong>{" "}
                Bracketed items such as [Governing Jurisdiction] are placeholders
                that will be finalized upon legal review.
              </p>
            </div>
          </Section>

          <Section id="contact" number="15" title="Contact">
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="rounded-xl border border-border-light bg-background/50 p-6 space-y-2 not-prose">
              <p className="text-sm">
                <strong className="text-foreground font-medium">Email:</strong>{" "}
                <a
                  href="mailto:legal@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  legal@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">Support:</strong>{" "}
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
