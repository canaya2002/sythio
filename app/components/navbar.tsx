"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./i18n/language-context";
import LanguageSelector from "./i18n/language-selector";
import { trackCTAClick, trackNavClick } from "../lib/vercel-events";

const navLinks = [
  { key: "nav.product", href: "/product" },
  { key: "nav.features", href: "/features" },
  { key: "nav.useCases", href: "/use-cases" },
  { key: "nav.pricing", href: "/pricing" },
  { key: "nav.blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { s } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allLinks = [
    ...navLinks,
    { key: "nav.about", href: "/about" },
    { key: "nav.faq", href: "/faq" },
    { key: "nav.contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-white/75 border-b border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "backdrop-blur-xl bg-white/60 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="Sythio logo"
            width={26}
            height={26}
            className="w-[26px] h-[26px]"
            priority
          />
          <span className="text-[17px] font-semibold tracking-tight text-foreground">
            Sythio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => trackNavClick(link.href)}
              className="text-[13px] font-medium text-muted hover:text-foreground px-3.5 py-2 rounded-lg hover:bg-foreground/[0.04] transition-all duration-200"
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
            onClick={() => trackCTAClick("get_started", "navbar")}
            className="h-9 px-5 inline-flex items-center justify-center rounded-full bg-foreground text-white text-[13px] font-medium hover:bg-accent-muted transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:-translate-y-[1px] active:translate-y-0"
          >
            {s("nav.getStarted")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-foreground/[0.04] transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <motion.div
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-[18px] h-[1.5px] bg-foreground rounded-full origin-center"
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.div
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-[18px] h-[1.5px] bg-foreground rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.div
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-[18px] h-[1.5px] bg-foreground rounded-full origin-center"
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
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
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden border-t border-border-light bg-white/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => { trackNavClick(link.href); setMobileOpen(false); }}
                    className="text-[15px] font-medium text-muted hover:text-foreground transition-colors py-2.5 px-3 rounded-lg hover:bg-foreground/[0.04] block"
                  >
                    {s(link.key)}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 mt-2 border-t border-border-light">
                <Link
                  href="https://sythio.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { trackCTAClick("get_started", "navbar_mobile"); setMobileOpen(false); }}
                  className="h-11 w-full inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium hover:bg-accent-muted transition-all duration-200"
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
