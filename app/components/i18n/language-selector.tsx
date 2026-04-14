"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./language-context";
import { type Locale, localeNames, localeFlags } from "./translations";
import { trackLanguageChange } from "../../lib/vercel-events";

const locales: Locale[] = ["en", "es", "fr", "pt", "it"];

const localeRegions: Record<Locale, string> = {
  en: "United States",
  es: "España / LATAM",
  fr: "France",
  pt: "Brasil / Portugal",
  it: "Italia",
};

function LanguageModal({
  currentLocale,
  onSelect,
  onClose,
}: {
  currentLocale: Locale;
  onSelect: (l: Locale) => void;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ isolation: "isolate" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[6px]"
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-zinc-100 transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 pb-2">
          <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-foreground">
            Language
          </h3>
        </div>

        <div className="px-3 pb-4">
          {locales.map((l) => {
            const isActive = l === currentLocale;
            return (
              <button
                key={l}
                onClick={() => onSelect(l)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors duration-150 ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-foreground hover:bg-zinc-50"
                }`}
              >
                <span className="text-xl leading-none shrink-0">
                  {localeFlags[l]}
                </span>
                <div className="flex-1 text-left min-w-0">
                  <span className="text-sm font-medium block leading-tight">
                    {localeNames[l]}
                  </span>
                  <span
                    className={`text-[11px] leading-tight ${
                      isActive ? "text-zinc-400" : "text-muted-light"
                    }`}
                  >
                    {localeRegions[l]}
                  </span>
                </div>
                {isActive && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted] = useState(() => typeof window !== "undefined");

  const handleClose = useCallback(() => setOpen(false), []);
  const handleSelect = useCallback(
    (l: Locale) => {
      if (l !== locale) trackLanguageChange(locale, l);
      setLocale(l);
      setOpen(false);
    },
    [setLocale, locale]
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="h-9 px-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-border-light hover:border-border text-sm font-medium text-muted hover:text-foreground transition-all duration-200 bg-white/80 backdrop-blur-sm leading-none"
        aria-label="Select language"
      >
        <span className="text-[15px] leading-none flex items-center">{localeFlags[locale]}</span>
        <span className="hidden sm:inline text-xs leading-none">{locale.toUpperCase()}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <LanguageModal
                currentLocale={locale}
                onSelect={handleSelect}
                onClose={handleClose}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
