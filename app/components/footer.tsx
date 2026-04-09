"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./i18n/language-context";

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
              <Link href="/product" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("nav.product")}
              </Link>
              <Link href="/features" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.features")}
              </Link>
              <Link href="/pricing" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.pricing")}
              </Link>
              <Link href="/integrations" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Integrations
              </Link>
              <Link href="/enterprise" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Enterprise
              </Link>
              <Link href="/security" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Security
              </Link>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
              {s("footer.useCases")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/use-cases/voice-notes" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Voice Notes
              </Link>
              <Link href="/use-cases/meetings" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Meetings
              </Link>
              <Link href="/use-cases/lectures" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Lectures
              </Link>
              <Link href="/use-cases/brainstorming" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Brainstorming
              </Link>
              <Link href="/use-cases/client-calls" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Client Calls
              </Link>
              <Link href="/use-cases/podcasts" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Podcasts
              </Link>
              <Link href="/use-cases/interviews" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Interviews
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/blog" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("nav.blog")}
              </Link>
              <Link href="/compare" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Compare
              </Link>
              <Link href="/compare/otter" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Sythio vs Otter
              </Link>
              <Link href="/compare/fireflies" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Sythio vs Fireflies
              </Link>
              <Link href="/glossary" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Glossary
              </Link>
              <Link href="/case-studies" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                Case Studies
              </Link>
              <Link href="/faq" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.faq")}
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light mb-5">
              {s("footer.company")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.about")}
              </Link>
              <Link href="/contact" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.contact")}
              </Link>
              <Link href="/privacy-policy" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.privacy")}
              </Link>
              <Link href="/terms" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.terms")}
              </Link>
              <Link href="/cookie-policy" className="text-[13px] text-muted hover:text-foreground transition-colors duration-200">
                {s("footer.cookies")}
              </Link>
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
