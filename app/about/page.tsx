"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../components/i18n/language-context";
import RotatingText from "../components/rotating-text";
import {
  TextReveal,
  ScrollScale,
  ScrollSlide,
  GsapStagger,
  MagneticHover,
  ParallaxFloat,
  PageReveal,
} from "../components/gsap-effects";

/* ─── Value Icons ─── */
const valueIcons: Record<string, string> = {
  clarity:
    "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  voice:
    "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  structure:
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  privacy:
    "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
};

/* ─── About Page ─── */
export default function AboutPage() {
  const { s } = useLanguage();

  const values = [
    {
      title: s("about.value1.title"),
      desc: s("about.value1.desc"),
      icon: valueIcons.clarity,
    },
    {
      title: s("about.value2.title"),
      desc: s("about.value2.desc"),
      icon: valueIcons.voice,
    },
    {
      title: s("about.value3.title"),
      desc: s("about.value3.desc"),
      icon: valueIcons.structure,
    },
    {
      title: s("about.value4.title"),
      desc: s("about.value4.desc"),
      icon: valueIcons.privacy,
    },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg">
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
                <span className="text-xs font-medium text-muted">{s("about.hero.label")}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Why Sythio <RotatingText words={["exists", "matters", "works", "transforms"]} className="text-zinc-400" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
            >
              {s("about.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticHover>
                <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                  Explore the Product
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                  View Pricing
                </Link>
              </MagneticHover>
            </motion.div>
          </div>

          {/* Hero visual — audio to structure transformation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-6 md:gap-10"
          >
            {/* Audio waveform abstraction */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-[3px] p-5 rounded-2xl bg-white border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {[8,12,18,24,20,28,22,16,24,30,26,18,12,16,22,26,18,10].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] rounded-full bg-gradient-to-t from-indigo-300 to-violet-300"
                  animate={{ height: [h, h * 1.4, h] }}
                  transition={{ duration: 1.5 + i * 0.08, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                  style={{ height: h }}
                />
              ))}
            </motion.div>

            {/* Arrow */}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>

            {/* Structured output abstraction */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="p-5 rounded-2xl bg-white border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] space-y-2.5 w-48 md:w-56"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <div className="h-2 flex-1 rounded bg-foreground/10" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <div className="h-2 w-4/5 rounded bg-foreground/7" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="h-2 w-3/5 rounded bg-foreground/5" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="h-2 w-4/5 rounded bg-foreground/7" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <ParallaxFloat speed={0.05} className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-violet-50/40 to-transparent rounded-full blur-3xl pointer-events-none">
          <div />
        </ParallaxFloat>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <ScrollSlide direction="left" distance={60}>
              <div>
                <TextReveal
                  tag="h2"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sticky top-32"
                >
                  {s("about.mission.title")}
                </TextReveal>
              </div>
            </ScrollSlide>

            <div className="space-y-8">
              <TextReveal
                tag="p"
                className="text-lg md:text-xl text-muted leading-relaxed"
              >
                {s("about.mission.p1")}
              </TextReveal>
              <TextReveal
                tag="p"
                className="text-lg md:text-xl text-muted leading-relaxed"
              >
                {s("about.mission.p2")}
              </TextReveal>
              <TextReveal
                tag="p"
                className="text-lg md:text-xl text-foreground leading-relaxed font-medium"
              >
                {s("about.mission.p3")}
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-border-light" />
        </div>
      </div>

      {/* Values */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              Our principles
            </span>
            <TextReveal
              tag="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              {s("about.values.title")}
            </TextReveal>
          </div>

          <GsapStagger
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            stagger={0.1}
          >
            {values.map((value) => (
              <ScrollScale key={value.title}>
                <div className="group p-10 lg:p-12 rounded-3xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-background border border-border-light flex items-center justify-center mb-8 text-muted group-hover:text-foreground group-hover:border-border group-hover:shadow-sm transition-all duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 md:py-32 bg-white section-float-bg-warm">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollScale>
            <blockquote className="text-center">
              <TextReveal
                tag="p"
                className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground leading-snug tracking-tight"
              >
                &ldquo;We built Sythio because we believe audio deserves better.
                Not just transcription &mdash; transformation.&rdquo;
              </TextReveal>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-border" />
                <span className="text-sm text-muted">The Sythio Team</span>
                <div className="w-8 h-px bg-border" />
              </div>
            </blockquote>
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
                  href="/product"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("cta.button2")}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-foreground hover:text-white transition-all duration-300"
                >
                  {s("nav.pricing")}
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
