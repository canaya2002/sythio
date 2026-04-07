"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TranscriptMockup } from "../mockups";
import { MacBookFrame, IPhoneFrame } from "../devices";
import { SoundWave } from "../gsap-effects";
import { useLanguage } from "../i18n/language-context";
import RotatingText from "../rotating-text";
import Link from "next/link";
import { MagneticHover } from "../gsap-effects";

function IPhoneAppScreen() {
  const { locale } = useLanguage();

  const content: Record<string, { recordingsToday: string; sprintPlanning: string; sprintMeta: string; outputModes: string[]; quickIdea: string; quickIdeaMeta: string; clientCall: string; clientCallMeta: string }> = {
    en: { recordingsToday: "3 recordings today", sprintPlanning: "Sprint Planning", sprintMeta: "3:42 · 2 speakers", outputModes: ["Summary", "Tasks", "Action Plan", "Message"], quickIdea: "Quick idea — app redesign", quickIdeaMeta: "1:15 · 1 speaker", clientCall: "Client call — Acme Corp", clientCallMeta: "23:10 · 3 speakers" },
    es: { recordingsToday: "3 grabaciones hoy", sprintPlanning: "Sprint Planning", sprintMeta: "3:42 · 2 hablantes", outputModes: ["Resumen", "Tareas", "Plan de acción", "Mensaje"], quickIdea: "Idea rápida — rediseño de app", quickIdeaMeta: "1:15 · 1 hablante", clientCall: "Llamada con cliente — Acme Corp", clientCallMeta: "23:10 · 3 hablantes" },
    fr: { recordingsToday: "3 enregistrements aujourd'hui", sprintPlanning: "Sprint Planning", sprintMeta: "3:42 · 2 intervenants", outputModes: ["Résumé", "Tâches", "Plan d'action", "Message"], quickIdea: "Idée rapide — refonte de l'app", quickIdeaMeta: "1:15 · 1 intervenant", clientCall: "Appel client — Acme Corp", clientCallMeta: "23:10 · 3 intervenants" },
    pt: { recordingsToday: "3 gravações hoje", sprintPlanning: "Sprint Planning", sprintMeta: "3:42 · 2 falantes", outputModes: ["Resumo", "Tarefas", "Plano de ação", "Mensagem"], quickIdea: "Ideia rápida — redesign do app", quickIdeaMeta: "1:15 · 1 falante", clientCall: "Ligação com cliente — Acme Corp", clientCallMeta: "23:10 · 3 falantes" },
    it: { recordingsToday: "3 registrazioni oggi", sprintPlanning: "Sprint Planning", sprintMeta: "3:42 · 2 parlanti", outputModes: ["Riepilogo", "Attività", "Piano d'azione", "Messaggio"], quickIdea: "Idea veloce — redesign dell'app", quickIdeaMeta: "1:15 · 1 parlante", clientCall: "Chiamata cliente — Acme Corp", clientCallMeta: "23:10 · 3 parlanti" },
  };

  const c = content[locale] || content.en;

  return (
    <div className="bg-background p-5 min-h-[580px] md:min-h-[680px]">
      <div className="flex items-center justify-between mb-6 mt-2">
        <div>
          <h3 className="text-base font-semibold text-foreground">Sythio</h3>
          <p className="text-xs text-muted">{c.recordingsToday}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
          <span className="text-xs font-bold text-white">CA</span>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-border-light p-4 mb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
              <path d="M19 10v2a7 7 0 01-14 0v-2" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">{c.sprintPlanning}</p>
            <p className="text-xs text-muted">{c.sprintMeta}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-[2px] h-8">
          {[6,10,14,18,22,16,20,24,18,14,22,26,20,16,12,18,22,14,10,8,14,18,22,16,12,8,10,14,18,22,16,12,8,14,20,24,18,16].map((h, i) => (
            <div key={i} className="w-[3px] rounded-full bg-indigo-200" style={{ height: h }} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {c.outputModes.map((label) => (
          <div key={label} className="px-3 py-1.5 rounded-full bg-white border border-border-light text-xs font-medium text-muted">
            {label}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-border-light p-4 mb-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">{c.quickIdea}</p>
            <p className="text-xs text-muted">{c.quickIdeaMeta}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-border-light p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">{c.clientCall}</p>
            <p className="text-xs text-muted">{c.clientCallMeta}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 rounded-full bg-red-400" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { s } = useLanguage();

  useEffect(() => {
    // Hero entrance animations via GSAP context
    const ctx = gsap.context(() => {}, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-muted">{s("hero.badge")}</span>
            </div>
          </motion.div>

          {/* Server-rendered H1 for SEO — rotating text is visual enhancement */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            <RotatingText
              words={[s("hero.rotate.speak"), s("hero.rotate.record"), s("hero.rotate.capture"), s("hero.rotate.share")]}
              interval={2200}
            />{" "}
            <RotatingText
              words={[s("hero.rotate.once"), s("hero.rotate.freely"), s("hero.rotate.anything"), s("hero.rotate.always")]}
              interval={2200}
              className="text-zinc-400"
            />
            <br />
            <span className="bg-gradient-to-r from-foreground via-zinc-500 to-zinc-400 bg-clip-text text-transparent">
              {s("hero.title2")}
            </span>
          </motion.h1>
          {/* Hidden server-rendered text for crawlers */}
          <span className="sr-only">
            {s("hero.srOnly")}
          </span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
          >
            {s("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticHover>
              <Link
                href="https://sythio.com"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                {s("hero.cta1")}
              </Link>
            </MagneticHover>
            <MagneticHover>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-foreground hover:text-white transition-all duration-300"
              >
                {s("hero.cta2")}
              </Link>
            </MagneticHover>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-5 text-center text-sm text-muted"
          >
            {s("common.freePlan")}
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-macbook"
          >
              <MacBookFrame>
                <div className="bg-background">
                  <TranscriptMockup />
                </div>
              </MacBookFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="hero-iphone absolute -right-2 md:right-8 lg:right-16 top-4 md:top-8 z-10 hidden md:block"
          >
              <IPhoneFrame>
                <IPhoneAppScreen />
              </IPhoneFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -bottom-4 left-8 md:left-16 bg-white rounded-xl border border-border-light shadow-xl p-4 z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                  <path d="M19 10v2a7 7 0 01-14 0v-2" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">{s("hero.processingComplete")}</p>
                <p className="text-[10px] text-muted">{s("hero.outputsGenerated")}</p>
              </div>
            </div>
          </motion.div>

          {/* Sound wave floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="absolute -bottom-4 right-8 md:right-16 lg:right-28 bg-white rounded-xl border border-border-light shadow-xl px-4 py-3 z-10 hidden md:block float-y-slow"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground">{s("hero.audioAnalyzed")}</p>
                <SoundWave bars={16} className="mt-1" color="#6366f1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
