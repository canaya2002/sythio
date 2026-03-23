"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./language-context";
import { type Locale, localeNames, localeFlags } from "./translations";

const locales: Locale[] = ["en", "es", "fr", "pt", "it"];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="h-9 px-3 inline-flex items-center gap-1.5 rounded-full border border-border-light hover:border-border text-sm font-medium text-muted hover:text-foreground transition-all duration-200 bg-white/80 backdrop-blur-sm"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{localeFlags[locale]}</span>
        <span className="hidden sm:inline text-xs">{locale.toUpperCase()}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl border border-border-light shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden z-50"
          >
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                  l === locale
                    ? "bg-foreground/5 text-foreground font-medium"
                    : "text-muted hover:bg-background hover:text-foreground"
                }`}
              >
                <span className="text-base">{localeFlags[l]}</span>
                <span>{localeNames[l]}</span>
                {l === locale && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-foreground">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
