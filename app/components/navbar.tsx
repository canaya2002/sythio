"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./i18n/language-context";
import LanguageSelector from "./i18n/language-selector";

const navLinks = [
  { key: "nav.product", href: "/product" },
  { key: "nav.features", href: "/features" },
  { key: "nav.useCases", href: "/use-cases" },
  { key: "nav.pricing", href: "/pricing" },
  { key: "nav.blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { s } = useLanguage();

  const allLinks = [
    ...navLinks,
    { key: "nav.about", href: "/about" },
    { key: "nav.faq", href: "/faq" },
    { key: "nav.contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Sythio logo"
            width={28}
            height={28}
            className="w-7 h-7"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Sythio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {s(link.key)}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <Link
            href="https://sythio.app"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-5 inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium hover:bg-accent-muted transition-colors duration-200"
          >
            {s("nav.getStarted")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-border-light transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.div
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-foreground rounded-full origin-center"
                transition={{ duration: 0.2 }}
              />
              <motion.div
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-foreground rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.div
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-foreground rounded-full origin-center"
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden border-t border-border-light bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-muted hover:text-foreground transition-colors"
                >
                  {s(link.key)}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="https://sythio.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="h-11 w-full inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium hover:bg-accent-muted transition-colors"
                >
                  {s("nav.getStarted")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
