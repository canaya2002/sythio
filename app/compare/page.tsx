"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

export default function ComparePage() {
  const { s } = useLanguage();

  const comparisons = [
    {
      name: "Otter.ai",
      href: "/compare/otter",
      tagline: s("compare.otter.tagline"),
      description: s("compare.otter.desc"),
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#6366f1",
    },
    {
      name: "Fireflies.ai",
      href: "/compare/fireflies",
      tagline: s("compare.fireflies.tagline"),
      description: s("compare.fireflies.desc"),
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "#f59e0b",
    },
    {
      name: "tl;dv",
      href: "/compare/tldv",
      tagline: s("compare.tldv.tagline"),
      description: s("compare.tldv.desc"),
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      color: "#8b5cf6",
    },
    {
      name: "AudioPen",
      href: "/compare/audiopen",
      tagline: s("compare.audiopen.tagline"),
      description: s("compare.audiopen.desc"),
      icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8M12 4a3 3 0 00-3 3v4a3 3 0 006 0V7a3 3 0 00-3-3z",
      color: "#ec4899",
    },
    {
      name: "Notta.ai",
      href: "/compare/notta",
      tagline: s("compare.notta.tagline"),
      description: s("compare.notta.desc"),
      icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
      color: "#14b8a6",
    },
  ];

  const differentiators = [
    {
      title: s("compare.diff1"),
      description: s("compare.diff1Desc"),
      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
      color: "#6366f1",
    },
    {
      title: s("compare.diff2"),
      description: s("compare.diff2Desc"),
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      color: "#22c55e",
    },
    {
      title: s("compare.diff3"),
      description: s("compare.diff3Desc"),
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "#8b5cf6",
    },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {s("compare.label")}
            </p>
            <TextReveal tag="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {s("compare.title")}
            </TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {s("compare.subtitle")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("common.startFree")}
                </Link>
              </MagneticHover>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {s("common.seeHowItWorks")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Sythio Different */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {s("compare.differenceLabel")}
            </p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {s("compare.differenceTitle")}
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              {s("compare.differenceSubtitle")}
            </p>
          </div>

          <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>
            {differentiators.map((item) => (
              <ScrollScale key={item.title}>
              <div
                className="p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* Compare with Specific Tools */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {s("compare.headToHead")}
            </p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {s("compare.headToHeadTitle")}
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              {s("compare.headToHeadSubtitle")}
            </p>
          </div>

          <GsapStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
            {comparisons.map((tool) => (
              <ScrollScale key={tool.name}>
              <Link
                key={tool.name}
                href={tool.href}
                className="group p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${tool.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={tool.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={tool.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent-muted transition-colors">
                  Sythio vs {tool.name}
                </h3>
                <p className="text-sm font-medium text-muted-light mb-4">
                  {tool.tagline}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {s("common.readComparison")}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {s("compare.ctaTitle")}
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              {s("compare.ctaSubtitle")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("common.startFree")}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/features"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
                >
                  {s("common.exploreFeatures")}
                </Link>
              </MagneticHover>
            </div>
            <p className="mt-6 text-sm text-muted-light">
              {s("common.freePlan")}
            </p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
