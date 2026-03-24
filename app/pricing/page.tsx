"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../components/i18n/language-context";
import RotatingText from "../components/rotating-text";
import {
  TextReveal,
  ScrollScale,
  GsapStagger,
  MagneticHover,
  PageReveal,
} from "../components/gsap-effects";

/* ─── Checkmark Icon ─── */
function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-emerald-500 shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── FAQ Accordion Item ─── */
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-light last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base font-medium text-foreground group-hover:text-accent-muted transition-colors pr-8">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted shrink-0"
        >
          <svg
            width="20"
            height="20"
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
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-muted leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Pricing Card ─── */
function PricingCard({
  name,
  price,
  description,
  features,
  isPopular,
  ctaLabel,
  popularLabel,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaLabel: string;
  popularLabel: string;
}) {
  const { s } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 ${
        isPopular
          ? "bg-foreground text-white shadow-[0_8px_32px_rgba(0,0,0,0.12),0_32px_80px_rgba(0,0,0,0.16)] scale-[1.02] lg:scale-105"
          : "bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-block px-5 py-1.5 rounded-full bg-white text-foreground text-xs font-semibold tracking-wide shadow-sm">
            {popularLabel}
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`text-lg font-semibold mb-2 ${
            isPopular ? "text-white/90" : "text-foreground"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-sm mb-6 ${
            isPopular ? "text-white/60" : "text-muted"
          }`}
        >
          {description}
        </p>
        <div className="flex items-baseline gap-1">
          <span
            className={`text-5xl font-bold tracking-tight ${
              isPopular ? "text-white" : "text-foreground"
            }`}
          >
            {price}
          </span>
          {price !== "$0" && (
            <span
              className={`text-sm ${
                isPopular ? "text-white/50" : "text-muted"
              }`}
            >
              {s("pricing.month")}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-3.5 mb-10 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            {isPopular ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400 shrink-0 mt-0.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <Check />
            )}
            <span
              className={`text-sm leading-relaxed ${
                isPopular ? "text-white/80" : "text-muted"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <MagneticHover strength={0.15}>
        <Link
          href="/contact"
          className={`block w-full text-center py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
            isPopular
              ? "bg-white text-foreground hover:bg-white/90 shadow-sm"
              : "bg-foreground text-white hover:bg-accent-muted shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          }`}
        >
          {ctaLabel}
        </Link>
      </MagneticHover>
    </motion.div>
  );
}

/* ─── Pricing Page ─── */
export default function PricingPage() {
  const { s } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const tiers = [
    {
      name: s("pricing.free"),
      price: s("pricing.free.price"),
      description: s("pricing.free.desc"),
      features: [
        s("pricing.free.f1"),
        s("pricing.free.f2"),
        s("pricing.free.f3"),
        s("pricing.free.f4"),
      ],
      isPopular: false,
    },
    {
      name: s("pricing.pro"),
      price: s("pricing.pro.price"),
      description: s("pricing.pro.desc"),
      features: [
        s("pricing.pro.f1"),
        s("pricing.pro.f2"),
        s("pricing.pro.f3"),
        s("pricing.pro.f4"),
        s("pricing.pro.f5"),
        s("pricing.pro.f6"),
      ],
      isPopular: true,
    },
    {
      name: s("pricing.premium"),
      price: s("pricing.premium.price"),
      description: s("pricing.premium.desc"),
      features: [
        s("pricing.premium.f1"),
        s("pricing.premium.f2"),
        s("pricing.premium.f3"),
        s("pricing.premium.f4"),
        s("pricing.premium.f5"),
        s("pricing.premium.f6"),
      ],
      isPopular: false,
    },
  ];

  const faqs = [
    { q: s("pricing.faq.q1"), a: s("pricing.faq.a1") },
    { q: s("pricing.faq.q2"), a: s("pricing.faq.a2") },
    { q: s("pricing.faq.q3"), a: s("pricing.faq.a3") },
    { q: s("pricing.faq.q4"), a: s("pricing.faq.a4") },
    { q: s("pricing.faq.q5"), a: s("pricing.faq.a5") },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-background pointer-events-none" />
        <div className="hero-glow-animated absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-b from-indigo-50/50 via-violet-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted">{s("pricing.hero.label")}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Simple, <RotatingText words={["transparent", "honest", "fair", "clear"]} className="text-zinc-400" /> pricing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
            >
              {s("pricing.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticHover>
                <Link href="/contact" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                  Start Free
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                  See Features
                </Link>
              </MagneticHover>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 md:pb-44 bg-white section-float-bg">
        <div className="max-w-5xl mx-auto px-6">
          <GsapStagger
            className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start"
            stagger={0.12}
          >
            {tiers.map((tier) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
                ctaLabel={s("pricing.getStarted")}
                popularLabel={s("pricing.popular")}
              />
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <TextReveal
              tag="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            >
              {s("pricing.faq.title")}
            </TextReveal>
          </div>
          <ScrollScale>
            <div className="bg-white rounded-3xl border border-border-light p-8 lg:p-10">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQ === i}
                  onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                />
              ))}
            </div>
          </ScrollScale>
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
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticHover>
                <Link
                  href="/contact"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("cta.button")}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/product"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-foreground hover:text-white transition-all duration-300"
                >
                  {s("cta.button2")}
                </Link>
              </MagneticHover>
            </div>
            <p className="mt-6 text-sm text-muted">{s("cta.free")}</p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
