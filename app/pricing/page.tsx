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
function Check({ className = "text-emerald-500" }: { className?: string }) {
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
      className={`${className} shrink-0 mt-0.5`}
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

/* ─── Pricing Page ─── */
export default function PricingPage() {
  const { s } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
              Start free, upgrade when you need more. Enterprise plans available for teams.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 md:pb-44 bg-white section-float-bg">
        <div className="max-w-6xl mx-auto px-6">
          <GsapStagger
            className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start"
            stagger={0.12}
          >
            {/* ─── Free ─── */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex flex-col rounded-3xl p-8 lg:p-10 bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">Free</h3>
                <p className="text-sm text-muted mb-6">Para empezar a explorar</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-foreground">$0</span>
                </div>
              </div>
              <ul className="space-y-3.5 mb-10 flex-1">
                {[
                  "5 recordings per month",
                  "3 output formats",
                  "Basic speaker detection",
                  "Text export",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check />
                    <span className="text-sm text-muted leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <MagneticHover strength={0.15}>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3.5 rounded-full text-sm font-medium bg-foreground text-white hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  Get Started Free
                </Link>
              </MagneticHover>
            </motion.div>

            {/* ─── Premium (highlighted) ─── */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex flex-col rounded-3xl p-8 lg:p-10 bg-foreground text-white shadow-[0_8px_32px_rgba(0,0,0,0.12),0_32px_80px_rgba(0,0,0,0.16)] scale-[1.02] lg:scale-105 transition-all duration-500"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block px-5 py-1.5 rounded-full bg-white text-foreground text-xs font-semibold tracking-wide shadow-sm">
                  Most Popular
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-2">Premium</h3>
                <p className="text-sm text-white/60 mb-6">For professionals who need more</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-white">$12</span>
                  <span className="text-sm text-white/50">/month</span>
                </div>
              </div>
              <ul className="space-y-3.5 mb-10 flex-1">
                {[
                  "Unlimited recordings",
                  "All 9 output formats",
                  "Advanced speaker detection",
                  "All export formats (PDF, text, more)",
                  "Searchable audio library",
                  "Priority processing",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="text-emerald-400" />
                    <span className="text-sm text-white/80 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <MagneticHover strength={0.15}>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3.5 rounded-full text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-all duration-300 shadow-sm"
                >
                  Get Premium
                </Link>
              </MagneticHover>
            </motion.div>

            {/* ─── Enterprise ─── */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex flex-col rounded-3xl p-8 lg:p-10 bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">Enterprise</h3>
                <p className="text-sm text-muted mb-6">For teams and organizations</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">Custom</span>
                </div>
              </div>
              <ul className="space-y-3.5 mb-10 flex-1">
                {[
                  "Everything in Premium",
                  "Team workspace & collaboration",
                  "Custom output templates",
                  "API access & integrations",
                  "Dedicated account manager",
                  "Advanced analytics & reporting",
                  "SSO & enterprise security",
                  "Custom onboarding",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check />
                    <span className="text-sm text-muted leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <MagneticHover strength={0.15}>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3.5 rounded-full text-sm font-medium bg-foreground text-white hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  Contact Sales
                </Link>
              </MagneticHover>
            </motion.div>
          </GsapStagger>

          {/* Comparison note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted mt-12"
          >
            All plans include secure processing, data privacy, and unlimited exports.{" "}
            <Link href="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Questions? Contact us
            </Link>
          </motion.p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 md:py-32 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What every plan includes
            </TextReveal>
            <TextReveal tag="p" className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Every Sythio plan gives you access to the core audio intelligence engine.
            </TextReveal>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            {[
              { title: "AI-Powered Processing", desc: "Advanced language models analyze your audio for context, meaning, and structure." },
              { title: "Speaker Detection", desc: "Automatic identification of who said what in every recording." },
              { title: "Multiple Output Formats", desc: "Summaries, tasks, action plans, reports, messages, study notes, and more." },
              { title: "Secure & Private", desc: "Your audio is processed securely and never shared. Delete your data anytime." },
            ].map((item) => (
              <ScrollScale key={item.title}>
                <div className="p-6 rounded-2xl bg-white border border-border-light hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 md:py-44 bg-white">
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
            <div className="bg-background rounded-3xl border border-border-light p-8 lg:p-10">
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
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal
              tag="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              Ready to transform how you work with audio?
            </TextReveal>
            <TextReveal
              tag="p"
              className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed"
            >
              Start free today. No credit card required.
            </TextReveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticHover>
                <Link
                  href="/contact"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  Start Using Sythio
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/product"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-foreground hover:text-white transition-all duration-300"
                >
                  Explore the Product
                </Link>
              </MagneticHover>
            </div>
            <p className="mt-6 text-sm text-muted">Free plan available. No credit card required.</p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
