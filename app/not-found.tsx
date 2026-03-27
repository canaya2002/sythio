"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./components/i18n/language-context";
import { MagneticHover } from "./components/gsap-effects";

export default function NotFound() {
  const { s } = useLanguage();
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative text-center max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-light mb-4"
        >
          {s("notFound.code")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
        >
          {s("notFound.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-muted leading-relaxed mb-10"
        >
          {s("notFound.desc")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <MagneticHover>
            <Link
              href="/"
              className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
            >
              {s("common.goHome")}
            </Link>
          </MagneticHover>
          <MagneticHover>
            <Link
              href="/contact"
              className="h-12 px-8 inline-flex items-center justify-center rounded-full border border-border text-sm font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
            >
              {s("common.contactSupport")}
            </Link>
          </MagneticHover>
        </motion.div>
      </div>
    </section>
  );
}
