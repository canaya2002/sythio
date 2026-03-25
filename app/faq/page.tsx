"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../components/i18n/language-context";
import RotatingText from "../components/rotating-text";
import {
  TextReveal,
  GsapStagger,
  MagneticHover,
  PageReveal,
} from "../components/gsap-effects";

/* ─── FAQ Data ─── */

/* ─── Accordion Item ─── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border-light last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-foreground group-hover:text-accent-muted transition-colors pr-8 leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-muted shrink-0 w-8 h-8 rounded-full border border-border-light flex items-center justify-center group-hover:border-border transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── FAQ Page ─── */
export default function FAQPage() {
  const { s } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    { question: s("faq.q1"), answer: s("faq.a1") },
    { question: s("faq.q2"), answer: s("faq.a2") },
    { question: s("faq.q3"), answer: s("faq.a3") },
    { question: s("faq.q4"), answer: s("faq.a4") },
    { question: s("faq.q5"), answer: s("faq.a5") },
    { question: s("faq.q6"), answer: s("faq.a6") },
    { question: s("faq.q7"), answer: s("faq.a7") },
    { question: s("faq.q8"), answer: s("faq.a8") },
    { question: s("faq.q9"), answer: s("faq.a9") },
    { question: s("faq.q10"), answer: s("faq.a10") },
  ];

  const relatedLinks = [
    { href: "/product", label: s("faq.explore") },
    { href: "/features", label: s("faq.seeFeatures") },
    { href: "/pricing", label: s("faq.viewPricing") },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 hero-animated-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted">{s("faq.hero.label")}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Frequently asked <RotatingText words={["questions", "topics", "answers", "insights"]} className="text-zinc-400" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto"
            >
              {s("faq.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticHover>
                <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                  Get Started
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                  Explore Product
                </Link>
              </MagneticHover>
            </motion.div>
          </div>

          {/* Hero visual — floating Q&A preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex justify-center gap-4 md:gap-6"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-52 md:w-60 bg-white rounded-2xl border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-indigo-500">Q</span>
                </div>
                <div className="h-2 flex-1 rounded bg-foreground/8" />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded bg-foreground/5" />
                <div className="h-1.5 w-3/4 rounded bg-foreground/5" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="w-52 md:w-60 bg-white rounded-2xl border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] p-5 hidden sm:block"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-emerald-500">A</span>
                </div>
                <div className="h-2 flex-1 rounded bg-foreground/8" />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded bg-foreground/5" />
                <div className="h-1.5 w-4/5 rounded bg-foreground/5" />
                <div className="h-1.5 w-2/3 rounded bg-foreground/5" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="w-52 md:w-60 bg-white rounded-2xl border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] p-5 hidden md:block"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-violet-500">Q</span>
                </div>
                <div className="h-2 flex-1 rounded bg-foreground/8" />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded bg-foreground/5" />
                <div className="h-1.5 w-1/2 rounded bg-foreground/5" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-32 md:pb-44 bg-white section-float-bg">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-background rounded-3xl border border-border-light p-8 lg:p-12">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-24 md:py-32 bg-background animated-gradient-bg">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <TextReveal
              tag="h2"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              {s("faq.learnMore")}
            </TextReveal>
          </div>
          <GsapStagger
            className="grid sm:grid-cols-3 gap-4"
            stagger={0.08}
          >
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-center gap-2 p-6 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {link.label}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-hover:translate-x-1 transition-transform duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal
              tag="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              {s("cta.title1")}
              <br />
              {s("cta.title2")}
            </TextReveal>
            <TextReveal
              tag="p"
              className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed"
            >
              {s("cta.subtitle")}
            </TextReveal>
            <div className="mt-12">
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("cta.button")}
                </Link>
              </MagneticHover>
              <p className="mt-6 text-sm text-muted">{s("cta.free")}</p>
            </div>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
