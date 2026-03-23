"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../components/i18n/language-context";
import {
  TextReveal,
  ScrollScale,
  GsapStagger,
  MagneticHover,
  PageReveal,
  TiltCard,
} from "../components/gsap-effects";

/* ─── Contact Category Cards ─── */
const categories = [
  {
    key: "general",
    titleKey: "contact.general",
    descKey: "contact.generalDesc",
    email: "hello@sythio.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: "support",
    titleKey: "contact.support",
    descKey: "contact.supportDesc",
    email: "support@sythio.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "partnerships",
    titleKey: "contact.partnerships",
    descKey: "contact.partnershipsDesc",
    email: "partners@sythio.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    key: "press",
    titleKey: "contact.press",
    descKey: "contact.pressDesc",
    email: "press@sythio.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z" />
        <path d="M7 8h6M7 12h6M7 16h4" />
      </svg>
    ),
  },
];

/* ─── Contact Form ─── */
function ContactForm() {
  const { s } = useLanguage();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  }

  return (
    <ScrollScale>
      <div className="relative">
        <div className="absolute -inset-6 bg-gradient-to-br from-indigo-50/50 via-violet-50/30 to-transparent rounded-[2rem] blur-2xl pointer-events-none" />
        <div className="relative bg-white rounded-3xl border border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] p-8 md:p-12">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {s("contact.form.sent")}
                </h3>
                <p className="text-muted text-base">{s("contact.response")}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-medium text-muted hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {s("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full h-12 px-4 rounded-xl bg-background border border-border-light text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-border transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {s("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full h-12 px-4 rounded-xl bg-background border border-border-light text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-border transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {s("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-background border border-border-light text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-border transition-all duration-200"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {s("contact.form.message")}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border-light text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-border transition-all duration-200 resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-muted-light">{s("contact.response")}</p>
                  <MagneticHover>
                    <button
                      type="submit"
                      disabled={sending}
                      className="h-12 px-8 rounded-full bg-foreground text-white text-sm font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {sending ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : null}
                      {s("contact.form.send")}
                    </button>
                  </MagneticHover>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrollScale>
  );
}

/* ─── Contact Page ─── */
export default function ContactPage() {
  const { s } = useLanguage();

  return (
    <PageReveal>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-50/40 via-violet-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              {s("contact.hero.label")}
            </span>
            <TextReveal tag="h1" className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              {s("contact.hero.title")}
            </TextReveal>
            <TextReveal tag="p" className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              {s("contact.hero.subtitle")}
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
            {categories.map((cat) => (
              <TiltCard key={cat.key}>
                <div className="group p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border-light flex items-center justify-center mb-5 text-muted group-hover:text-foreground group-hover:border-border group-hover:shadow-sm transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {s(cat.titleKey)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {s(cat.descKey)}
                  </p>
                  <span className="text-xs font-medium text-muted-light group-hover:text-foreground transition-colors duration-300">
                    {cat.email}
                  </span>
                </div>
              </TiltCard>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-14">
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {s("contact.form.send")}
            </TextReveal>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Response Time Note */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border-light">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted">{s("contact.response")}</span>
            </div>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
