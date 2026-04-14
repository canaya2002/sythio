"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./i18n/language-context";
import { trackFooterClick } from "../lib/vercel-events";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => trackFooterClick(href)}
      className="text-[13px] text-muted hover:text-foreground transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const { s } = useLanguage();

  return (
    <footer className="border-t border-border-light bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.png"
                alt="Sythio logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                Sythio
              </span>
            </Link>
            <p className="text-[13px] text-muted leading-relaxed max-w-[220px]">
              {s("footer.tagline")}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
              {s("footer.product")}
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/product">{s("nav.product")}</FooterLink>
              <FooterLink href="/features">{s("footer.features")}</FooterLink>
              <FooterLink href="/pricing">{s("footer.pricing")}</FooterLink>
              <FooterLink href="/integrations">Integrations</FooterLink>
              <FooterLink href="/enterprise">Enterprise</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
              {s("footer.useCases")}
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/use-cases/voice-notes">Voice Notes</FooterLink>
              <FooterLink href="/use-cases/meetings">Meetings</FooterLink>
              <FooterLink href="/use-cases/lectures">Lectures</FooterLink>
              <FooterLink href="/use-cases/brainstorming">Brainstorming</FooterLink>
              <FooterLink href="/use-cases/client-calls">Client Calls</FooterLink>
              <FooterLink href="/use-cases/podcasts">Podcasts</FooterLink>
              <FooterLink href="/use-cases/interviews">Interviews</FooterLink>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/blog">{s("nav.blog")}</FooterLink>
              <FooterLink href="/compare">Compare</FooterLink>
              <FooterLink href="/compare/otter">Sythio vs Otter</FooterLink>
              <FooterLink href="/compare/fireflies">Sythio vs Fireflies</FooterLink>
              <FooterLink href="/glossary">Glossary</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/faq">{s("footer.faq")}</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
              {s("footer.company")}
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/about">{s("footer.about")}</FooterLink>
              <FooterLink href="/contact">{s("footer.contact")}</FooterLink>
              <FooterLink href="/privacy-policy">{s("footer.privacy")}</FooterLink>
              <FooterLink href="/terms">{s("footer.terms")}</FooterLink>
              <FooterLink href="/cookie-policy">{s("footer.cookies")}</FooterLink>
            </div>
          </div>
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
