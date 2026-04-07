"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./i18n/language-context";

export default function Footer() {
  const { s } = useLanguage();

  return (
    <footer className="border-t border-border-light bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Sythio logo"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Sythio
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              {s("footer.tagline")}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
              {s("footer.product")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/product" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("nav.product")}
              </Link>
              <Link href="/features" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.features")}
              </Link>
              <Link href="/pricing" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.pricing")}
              </Link>
              <Link href="/integrations" className="text-sm text-muted hover:text-foreground transition-colors">
                Integrations
              </Link>
              <Link href="/enterprise" className="text-sm text-muted hover:text-foreground transition-colors">
                Enterprise
              </Link>
              <Link href="/security" className="text-sm text-muted hover:text-foreground transition-colors">
                Security
              </Link>
            </div>
          </div>

          {/* Use Cases & Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
              {s("footer.useCases")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/use-cases/voice-notes" className="text-sm text-muted hover:text-foreground transition-colors">
                Voice Notes
              </Link>
              <Link href="/use-cases/meetings" className="text-sm text-muted hover:text-foreground transition-colors">
                Meetings
              </Link>
              <Link href="/use-cases/lectures" className="text-sm text-muted hover:text-foreground transition-colors">
                Lectures
              </Link>
              <Link href="/use-cases/brainstorming" className="text-sm text-muted hover:text-foreground transition-colors">
                Brainstorming
              </Link>
              <Link href="/use-cases/client-calls" className="text-sm text-muted hover:text-foreground transition-colors">
                Client Calls
              </Link>
              <Link href="/use-cases/podcasts" className="text-sm text-muted hover:text-foreground transition-colors">
                Podcasts
              </Link>
              <Link href="/use-cases/interviews" className="text-sm text-muted hover:text-foreground transition-colors">
                Interviews
              </Link>
            </div>
          </div>

          {/* Compare & Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("nav.blog")}
              </Link>
              <Link href="/compare" className="text-sm text-muted hover:text-foreground transition-colors">
                Compare
              </Link>
              <Link href="/compare/otter" className="text-sm text-muted hover:text-foreground transition-colors">
                Sythio vs Otter
              </Link>
              <Link href="/compare/fireflies" className="text-sm text-muted hover:text-foreground transition-colors">
                Sythio vs Fireflies
              </Link>
              <Link href="/glossary" className="text-sm text-muted hover:text-foreground transition-colors">
                Glossary
              </Link>
              <Link href="/case-studies" className="text-sm text-muted hover:text-foreground transition-colors">
                Case Studies
              </Link>
              <Link href="/faq" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.faq")}
              </Link>
            </div>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
              {s("footer.company")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.about")}
              </Link>
              <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.contact")}
              </Link>
              <Link href="/privacy-policy" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.privacy")}
              </Link>
              <Link href="/terms" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.terms")}
              </Link>
              <Link href="/cookie-policy" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.cookies")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-light">
            &copy; {new Date().getFullYear()} Sythio. {s("footer.rights")}
          </p>
          <p className="text-xs text-muted-light">
            {s("footer.designed")}
          </p>
        </div>
      </div>
    </footer>
  );
}
