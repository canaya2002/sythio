"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../components/i18n/language-context";
import { motion } from "framer-motion";
import {
  TextReveal,
  GsapStagger,
  MagneticHover,
  PageReveal,
} from "../components/gsap-effects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Export format definitions ─── */
function ExportFormats() {
  const { s } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const formats = [
    {
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: s("integrations.exportPdf"),
      desc: s("integrations.exportPdfDesc"),
      color: "from-red-50 to-rose-50",
      accent: "#ef4444",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: s("integrations.exportText"),
      desc: s("integrations.exportTextDesc"),
      color: "from-blue-50 to-indigo-50",
      accent: "#6366f1",
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: s("integrations.exportMarkdown"),
      desc: s("integrations.exportMarkdownDesc"),
      color: "from-zinc-50 to-gray-100",
      accent: "#71717a",
    },
    {
      icon: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
      title: s("integrations.exportClipboard"),
      desc: s("integrations.exportClipboardDesc"),
      color: "from-emerald-50 to-green-50",
      accent: "#22c55e",
    },
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".export-card");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );
  }, []);

  return (
    <section className="py-32 md:py-44 bg-white section-float-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {s("integrations.exportLabel")}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {s("integrations.exportTitle")}
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("integrations.exportSubtitle")}
          </TextReveal>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {formats.map((fmt) => (
            <div
              key={fmt.title}
              className="export-card group p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${fmt.color} flex items-center justify-center mb-5`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={fmt.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={fmt.icon} />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent-muted transition-colors">{fmt.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{fmt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Integration cards grid ─── */
function IntegrationGrid() {
  const { s } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const integrations = [
    {
      name: "Notion",
      desc: s("integrations.notionDesc"),
      icon: "M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z",
      color: "from-zinc-50 to-gray-100",
      accent: "#000000",
      status: "coming_soon" as const,
    },
    {
      name: "Slack",
      desc: s("integrations.slackDesc"),
      icon: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zm0 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h5z",
      color: "from-purple-50 to-violet-50",
      accent: "#611f69",
      status: "coming_soon" as const,
    },
    {
      name: "Google Docs",
      desc: s("integrations.googleDocsDesc"),
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "from-blue-50 to-indigo-50",
      accent: "#4285f4",
      status: "coming_soon" as const,
    },
    {
      name: "Zapier",
      desc: s("integrations.zapierDesc"),
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "from-orange-50 to-amber-50",
      accent: "#ff4a00",
      status: "coming_soon" as const,
    },
    {
      name: "Email",
      desc: s("integrations.emailDesc"),
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "from-teal-50 to-emerald-50",
      accent: "#14b8a6",
      status: "available" as const,
    },
    {
      name: "Calendar",
      desc: s("integrations.calendarDesc"),
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "from-sky-50 to-cyan-50",
      accent: "#0ea5e9",
      status: "coming_soon" as const,
    },
    {
      name: "Trello / Asana",
      desc: s("integrations.trelloAsanaDesc"),
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      color: "from-violet-50 to-purple-50",
      accent: "#8b5cf6",
      status: "coming_soon" as const,
    },
    {
      name: "API",
      desc: s("integrations.apiDesc"),
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      color: "from-rose-50 to-pink-50",
      accent: "#f43f5e",
      status: "coming_soon" as const,
    },
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".int-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, scale: 0.93 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      }
    );
  }, []);

  return (
    <section className="py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {s("integrations.connectLabel")}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {s("integrations.connectTitle")}
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {s("integrations.connectSubtitle")}
          </TextReveal>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {integrations.map((intg) => (
            <div
              key={intg.name}
              className="int-card group p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 relative"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                {intg.status === "available" ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {s("integrations.available")}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-semibold text-amber-700 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {s("integrations.comingSoon")}
                  </span>
                )}
              </div>

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${intg.color} flex items-center justify-center mb-5`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={intg.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={intg.icon} />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent-muted transition-colors">{intg.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{intg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── API Access section ─── */
function ApiAccess() {
  const { s } = useLanguage();

  return (
    <section className="py-32 md:py-44 bg-white section-float-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              {s("integrations.apiLabel")}
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {s("integrations.apiTitle")}
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              {s("integrations.apiSubtitle")}
            </TextReveal>
            <GsapStagger className="mt-10 space-y-4" stagger={0.1}>
              {[
                s("integrations.apiFeat1"),
                s("integrations.apiFeat2"),
                s("integrations.apiFeat3"),
                s("integrations.apiFeat4"),
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{item}</span>
                </div>
              ))}
            </GsapStagger>
          </div>

          {/* Code mockup */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-violet-100/40 via-indigo-50/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-zinc-500 font-mono">api-example.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p><span className="text-violet-400">const</span> <span className="text-blue-300">response</span> <span className="text-zinc-400">=</span> <span className="text-violet-400">await</span> <span className="text-yellow-300">fetch</span><span className="text-zinc-400">(</span></p>
                <p className="pl-4"><span className="text-emerald-400">&quot;https://api.sythio.com/v1/process&quot;</span><span className="text-zinc-400">,</span></p>
                <p className="pl-4"><span className="text-zinc-400">{"{"}</span></p>
                <p className="pl-8"><span className="text-blue-300">method</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;POST&quot;</span><span className="text-zinc-400">,</span></p>
                <p className="pl-8"><span className="text-blue-300">headers</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">{"{"}</span></p>
                <p className="pl-12"><span className="text-emerald-400">&quot;Authorization&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;Bearer sk_...&quot;</span></p>
                <p className="pl-8"><span className="text-zinc-400">{"}"}</span><span className="text-zinc-400">,</span></p>
                <p className="pl-8"><span className="text-blue-300">body</span><span className="text-zinc-400">:</span> <span className="text-yellow-300">JSON</span><span className="text-zinc-400">.</span><span className="text-yellow-300">stringify</span><span className="text-zinc-400">({"{"}</span></p>
                <p className="pl-12"><span className="text-blue-300">audio_url</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;https://...&quot;</span><span className="text-zinc-400">,</span></p>
                <p className="pl-12"><span className="text-blue-300">outputs</span><span className="text-zinc-400">:</span> <span className="text-zinc-400">[</span><span className="text-emerald-400">&quot;summary&quot;</span><span className="text-zinc-400">,</span> <span className="text-emerald-400">&quot;tasks&quot;</span><span className="text-zinc-400">]</span></p>
                <p className="pl-8"><span className="text-zinc-400">{"}"})</span></p>
                <p className="pl-4"><span className="text-zinc-400">{"}"}</span></p>
                <p><span className="text-zinc-400">);</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function IntegrationsCTA() {
  const { s } = useLanguage();

  return (
    <section className="py-32 md:py-44 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {s("integrations.ctaTitle1")}
            <br />
            {s("integrations.ctaTitle2")}
          </TextReveal>
          <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("integrations.ctaSubtitle")}
          </TextReveal>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticHover>
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                {s("integrations.ctaButton")}
              </Link>
            </MagneticHover>
            <Link
              href="/features"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
            >
              {s("integrations.ctaButton2")}
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-light">{s("cta.free")}</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Integrations Page ─── */
export default function IntegrationsPage() {
  const { s } = useLanguage();

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
                <span className="text-xs font-medium text-muted">{s("integrations.hero.label")}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              {s("integrations.hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
            >
              {s("integrations.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticHover>
                <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                  {s("integrations.hero.getStarted")}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                  {s("integrations.hero.viewFeatures")}
                </Link>
              </MagneticHover>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Export Anywhere */}
      <ExportFormats />

      {/* Connect Your Tools */}
      <IntegrationGrid />

      {/* API Access */}
      <ApiAccess />

      {/* CTA */}
      <IntegrationsCTA />
    </PageReveal>
  );
}
