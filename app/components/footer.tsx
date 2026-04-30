"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./i18n/language-context";

/* SEO-critical: every public route should be reachable from the sitewide
   footer in ≤1 click. Missing internal links is the #1 reason GSC reports
   "Descubierta: actualmente sin indexar" — Googlebot finds the URL via the
   sitemap but has no context to prioritize crawling it. */

const productLinks = [
  { href: "/product", label: "Product" },
  { href: "/features", label: "All Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/integrations", label: "Integrations" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
];

const featureLinks = [
  { href: "/features/ai-summaries", label: "AI Summaries" },
  { href: "/features/speaker-detection", label: "Speaker Detection" },
  { href: "/features/task-extraction", label: "Task Extraction" },
  { href: "/features/action-plans", label: "Action Plans" },
  { href: "/features/clean-text", label: "Clean Text" },
  { href: "/features/reports", label: "Reports" },
  { href: "/features/study-notes", label: "Study Notes" },
  { href: "/features/key-points", label: "Key Points" },
  { href: "/features/ideas", label: "Ideas" },
  { href: "/features/messages", label: "Messages" },
];

const outputLinks = [
  { href: "/audio-to-summary", label: "Audio to Summary" },
  { href: "/audio-to-tasks", label: "Audio to Tasks" },
  { href: "/audio-to-action-plan", label: "Audio to Action Plan" },
  { href: "/audio-to-report", label: "Audio to Report" },
  { href: "/audio-to-clean-text", label: "Audio to Clean Text" },
  { href: "/audio-to-key-points", label: "Audio to Key Points" },
  { href: "/audio-to-study-notes", label: "Audio to Study Notes" },
  { href: "/audio-to-ideas", label: "Audio to Ideas" },
  { href: "/audio-to-messages", label: "Audio to Messages" },
  { href: "/audio-to-transcript", label: "Audio to Transcript" },
];

const useCaseLinks = [
  { href: "/use-cases", label: "All Use Cases" },
  { href: "/use-cases/meetings", label: "Meetings" },
  { href: "/use-cases/voice-notes", label: "Voice Notes" },
  { href: "/use-cases/brainstorming", label: "Brainstorming" },
  { href: "/use-cases/client-calls", label: "Client Calls" },
  { href: "/use-cases/lectures", label: "Lectures" },
  { href: "/use-cases/podcasts", label: "Podcasts" },
  { href: "/use-cases/interviews", label: "Interviews" },
];

const audienceLinks = [
  { href: "/for/students", label: "For Students" },
  { href: "/for/founders", label: "For Founders" },
  { href: "/for/project-managers", label: "For Project Managers" },
  { href: "/for/salespeople", label: "For Salespeople" },
  { href: "/for/consultants", label: "For Consultants" },
  { href: "/for/lawyers", label: "For Lawyers" },
];

const compareLinks = [
  { href: "/compare", label: "Compare Sythio" },
  { href: "/compare/otter", label: "Sythio vs Otter" },
  { href: "/compare/fireflies", label: "Sythio vs Fireflies" },
  { href: "/compare/tldv", label: "Sythio vs tl;dv" },
  { href: "/compare/audiopen", label: "Sythio vs Audiopen" },
  { href: "/compare/notta", label: "Sythio vs Notta" },
  { href: "/alternatives/otter", label: "Otter Alternative" },
  { href: "/alternatives/fireflies", label: "Fireflies Alternative" },
  { href: "/alternatives/tldv", label: "tl;dv Alternative" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/glossary", label: "Glossary" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { s } = useLanguage();

  return (
    <footer className="border-t border-border-light bg-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Top: brand + main nav */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Sythio home">
              <Image
                src="/logo.png"
                alt="Sythio logo"
                width={24}
                height={24}
                className="w-6 h-6"
                priority={false}
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                Sythio
              </span>
            </Link>
            <p className="text-[13px] text-muted leading-relaxed max-w-[260px]">
              {s("footer.tagline")}
            </p>

            {/* Language selector cluster — gives crawlers a clean path to each locale */}
            <nav aria-label="Languages" className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {[
                { href: "/", label: "English" },
                { href: "/es", label: "Español" },
                { href: "/fr", label: "Français" },
                { href: "/pt", label: "Português" },
                { href: "/it", label: "Italiano" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[12px] text-muted-light hover:text-foreground transition-colors"
                  hrefLang={l.href === "/" ? "en" : l.href.replace("/", "")}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <FooterColumn title={s("footer.product")} links={productLinks} />
          <FooterColumn title="Use Cases" links={useCaseLinks} />
          <FooterColumn title="Outputs" links={outputLinks} />
          <FooterColumn title="Compare" links={compareLinks} />
        </div>

        {/* Secondary cluster: features, audiences, resources */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-14 pt-12 border-t border-border-light">
          <FooterColumn title="Features" links={featureLinks} />
          <FooterColumn title="For Teams" links={audienceLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title={s("footer.company")} links={legalLinks} />
        </div>

        <div className="mt-14 pt-7 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-muted-light">
            &copy; {new Date().getFullYear()} Sythio. {s("footer.rights")}
          </p>
          <p className="text-[12px] text-muted-light">
            {s("footer.designed")}
          </p>
        </div>
      </div>
    </footer>
  );
}
