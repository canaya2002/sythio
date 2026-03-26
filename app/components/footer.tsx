"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./i18n/language-context";

export default function Footer() {
  const { s } = useLanguage();

  return (
    <footer className="border-t border-border-light bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
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
              <Link href="/use-cases" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.useCases")}
              </Link>
              <Link href="/pricing" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.pricing")}
              </Link>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
              {s("footer.company")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.about")}
              </Link>
              <Link href="/faq" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.faq")}
              </Link>
              <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("footer.contact")}
              </Link>
              <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">
                {s("nav.blog")}
              </Link>
            </div>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
              {s("footer.legal")}
            </h4>
            <div className="flex flex-col gap-3">
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
