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

/* ─── Cookie Table Row ─── */
function CookieRow({
  name,
  purpose,
  duration,
}: {
  name: string;
  purpose: string;
  duration: string;
}) {
  return (
    <tr className="border-b border-border-light last:border-0">
      <td className="py-3 pr-4 text-sm font-mono text-foreground whitespace-nowrap">
        {name}
      </td>
      <td className="py-3 pr-4 text-sm text-muted">{purpose}</td>
      <td className="py-3 text-sm text-muted-light whitespace-nowrap">
        {duration}
      </td>
    </tr>
  );
}

/* ─── Cookie Policy Page ─── */
export default function CookiePolicyPage() {
  const lastUpdated = "March 23, 2026";

  const sections = [
    { id: "what-are-cookies", number: "01", title: "What Are Cookies" },
    { id: "types-used", number: "02", title: "Types of Cookies We Use" },
    { id: "essential", number: "03", title: "Essential Cookies" },
    { id: "analytics", number: "04", title: "Analytics Cookies" },
    { id: "functionality", number: "05", title: "Functionality Cookies" },
    { id: "manage", number: "06", title: "How to Manage Cookies" },
    { id: "updates", number: "07", title: "Updates to This Policy" },
    { id: "contact", number: "08", title: "Contact Us" },
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
            Cookie Policy
          </TextReveal>
          <TextReveal
            tag="p"
            className="mt-6 text-lg text-muted leading-relaxed"
          >
            This policy explains how Sythio uses cookies and similar technologies
            to recognize you when you visit our website and use our services.
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
            id="what-are-cookies"
            number="01"
            title="What Are Cookies"
          >
            <p>
              Cookies are small text files that are stored on your device (computer,
              tablet, or mobile phone) when you visit a website. They are widely
              used to make websites work efficiently, provide a better user
              experience, and give website owners useful information.
            </p>
            <p>
              Cookies can be &quot;persistent&quot; (remaining on your device until
              they expire or you delete them) or &quot;session&quot; (deleted when
              you close your browser). They can be set by the website you are
              visiting (&quot;first-party cookies&quot;) or by third-party services
              operating on that website (&quot;third-party cookies&quot;).
            </p>
          </Section>

          <Section
            id="types-used"
            number="02"
            title="Types of Cookies We Use"
          >
            <p>
              Sythio uses the following categories of cookies. Each serves a
              specific purpose and is described in detail in the sections below.
            </p>
            <div className="rounded-xl border border-border-light overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Category
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Purpose
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Required
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-light">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      Essential
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      Authentication, security, core functionality
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">Yes</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      Analytics
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      Understanding usage patterns and improving services
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">No</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      Functionality
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      Preferences, language settings, personalization
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="essential" number="03" title="Essential Cookies">
            <p>
              Essential cookies are necessary for Sythio to function properly.
              They enable core features like user authentication, session
              management, and security protections. Without these cookies, the
              Service cannot operate as intended.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border-light">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Cookie
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Purpose
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow
                    name="session_id"
                    purpose="Maintains your login session"
                    duration="Session"
                  />
                  <CookieRow
                    name="csrf_token"
                    purpose="Prevents cross-site request forgery attacks"
                    duration="Session"
                  />
                  <CookieRow
                    name="auth_token"
                    purpose="Authenticates API requests"
                    duration="30 days"
                  />
                  <CookieRow
                    name="cookie_consent"
                    purpose="Stores your cookie preferences"
                    duration="1 year"
                  />
                </tbody>
              </table>
            </div>
            <p>
              These cookies cannot be disabled as they are essential for the
              Service to function securely.
            </p>
          </Section>

          <Section id="analytics" number="04" title="Analytics Cookies">
            <p>
              Analytics cookies help us understand how visitors interact with
              Sythio. They collect information about page visits, feature usage,
              and navigation patterns. All analytics data is aggregated and
              anonymized.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border-light">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Cookie
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Purpose
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow
                    name="_analytics_id"
                    purpose="Distinguishes unique visitors"
                    duration="1 year"
                  />
                  <CookieRow
                    name="_analytics_session"
                    purpose="Groups page views into sessions"
                    duration="30 minutes"
                  />
                  <CookieRow
                    name="utm_params"
                    purpose="Tracks marketing campaign attribution"
                    duration="90 days"
                  />
                </tbody>
              </table>
            </div>
            <p>
              You can opt out of analytics cookies through your browser settings
              or our cookie preferences menu.
            </p>
          </Section>

          <Section id="functionality" number="05" title="Functionality Cookies">
            <p>
              Functionality cookies allow Sythio to remember your preferences and
              provide a more personalized experience. These cookies enhance
              usability but are not strictly necessary for the Service to operate.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border-light">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Cookie
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Purpose
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow
                    name="language"
                    purpose="Stores your language preference"
                    duration="1 year"
                  />
                  <CookieRow
                    name="theme"
                    purpose="Stores your display theme preference"
                    duration="1 year"
                  />
                  <CookieRow
                    name="recent_outputs"
                    purpose="Remembers recently accessed outputs for quick access"
                    duration="30 days"
                  />
                </tbody>
              </table>
            </div>
            <p>
              Disabling functionality cookies may result in a less personalized
              experience but will not prevent you from using the Service.
            </p>
          </Section>

          <Section id="manage" number="06" title="How to Manage Cookies">
            <p>
              You have several options for managing cookies:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">Browser Settings:</strong>{" "}
                Most browsers allow you to block or delete cookies through their
                settings. Consult your browser&apos;s help documentation for
                specific instructions.
              </li>
              <li>
                <strong className="text-foreground font-medium">Cookie Preferences:</strong>{" "}
                When available, use our in-app cookie preferences banner to manage
                non-essential cookies.
              </li>
              <li>
                <strong className="text-foreground font-medium">Do Not Track:</strong> We
                respect &quot;Do Not Track&quot; browser signals. When enabled, we
                limit non-essential tracking.
              </li>
            </ul>
            <p>
              Please note that blocking essential cookies may prevent Sythio from
              functioning properly.
            </p>
            <div className="rounded-xl border border-border-light bg-background/50 p-5">
              <p className="text-sm font-medium text-foreground mb-2">
                Browser-specific instructions
              </p>
              <div className="space-y-1.5">
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Chrome:</strong>{" "}
                  Settings &gt; Privacy and Security &gt; Cookies
                </p>
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Firefox:</strong>{" "}
                  Settings &gt; Privacy &amp; Security &gt; Cookies
                </p>
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Safari:</strong>{" "}
                  Preferences &gt; Privacy &gt; Manage Website Data
                </p>
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Edge:</strong>{" "}
                  Settings &gt; Cookies and Site Permissions
                </p>
              </div>
            </div>
          </Section>

          <Section id="updates" number="07" title="Updates to This Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in the cookies we use, our practices, or legal
              requirements. When we make changes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We will update the &quot;Last Updated&quot; date at the top of this
                policy.
              </li>
              <li>
                For significant changes, we will provide notice through a banner
                on our website or via email.
              </li>
              <li>
                We will give you the opportunity to review and update your cookie
                preferences.
              </li>
            </ul>
          </Section>

          <Section id="contact" number="08" title="Contact Us">
            <p>
              If you have any questions about our use of cookies or this Cookie
              Policy, please reach out:
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
                <strong className="text-foreground font-medium">Website:</strong>{" "}
                <Link
                  href="/contact"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  sythio.com/contact
                </Link>
              </p>
            </div>
            <p>
              For more details on how we handle your personal data, please review
              our{" "}
              <Link
                href="/privacy-policy"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                Privacy Policy
              </Link>
              .
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
