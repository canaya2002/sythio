"use client";

import Link from "next/link";
import { useLanguage } from "./i18n/language-context";

const content: Record<string, {
  heading: string;
  description: string;
  button: string;
  free: string;
}> = {
  en: {
    heading: "Start using Sythio",
    description: "Transform your audio into summaries, tasks, action plans, and structured outputs — in seconds.",
    button: "Start Using Sythio",
    free: "Free plan available. No credit card required.",
  },
  es: {
    heading: "Empieza a usar Sythio",
    description: "Transforma tu audio en resúmenes, tareas, planes de acción y resultados estructurados — en segundos.",
    button: "Empezar a usar Sythio",
    free: "Plan gratuito disponible. Sin tarjeta de crédito.",
  },
  fr: {
    heading: "Commencez à utiliser Sythio",
    description: "Transformez votre audio en résumés, tâches, plans d'action et résultats structurés — en quelques secondes.",
    button: "Commencer avec Sythio",
    free: "Plan gratuit disponible. Sans carte bancaire.",
  },
  pt: {
    heading: "Comece a usar o Sythio",
    description: "Transforme seu áudio em resumos, tarefas, planos de ação e resultados estruturados — em segundos.",
    button: "Começar a usar Sythio",
    free: "Plano gratuito disponível. Sem cartão de crédito.",
  },
  it: {
    heading: "Inizia a usare Sythio",
    description: "Trasforma il tuo audio in riepiloghi, attività, piani d'azione e risultati strutturati — in pochi secondi.",
    button: "Inizia con Sythio",
    free: "Piano gratuito disponibile. Senza carta di credito.",
  },
};

export default function BlogCTA() {
  const { locale } = useLanguage();
  const c = content[locale] ?? content.en;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-foreground to-zinc-800 p-8 md:p-10">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-white/70">Sythio</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {c.heading}
        </h3>
        <p className="text-sm text-white/60 mb-6 leading-relaxed">
          {c.description}
        </p>
        <Link
          href="https://sythio.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 px-8 items-center justify-center rounded-full bg-white text-foreground text-sm font-semibold hover:bg-white/90 transition-all duration-300 shadow-sm"
        >
          {c.button}
        </Link>
        <p className="mt-4 text-xs text-white/40">{c.free}</p>
      </div>
    </div>
  );
}
