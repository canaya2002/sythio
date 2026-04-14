"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./i18n/language-context";
import type { Locale } from "./i18n/translations";
import { trackWaitlistSignup } from "../lib/vercel-events";

const content: Record<Locale, {
  successTitle: string;
  successDesc: string;
  placeholder: string;
  join: string;
  joining: string;
  earlyAccess: string;
  earlyAccessHeading: string;
  earlyAccessDesc: string;
  joinWaitlist: string;
  freeInline: string;
  errorMsg: string;
  freeHero: string;
}> = {
  en: {
    successTitle: "You are on the list",
    successDesc: "We will notify you when Sythio launches.",
    placeholder: "Enter your email",
    join: "Join",
    joining: "Joining...",
    earlyAccess: "Early access",
    earlyAccessHeading: "Get early access to Sythio",
    earlyAccessDesc: "Join the waitlist and be the first to transform your audio into structured, actionable output.",
    joinWaitlist: "Join the Waitlist",
    freeInline: "Free to join. No spam. Unsubscribe anytime.",
    errorMsg: "Something went wrong. Please try again.",
    freeHero: "Free to join. Be the first to try Sythio.",
  },
  es: {
    successTitle: "Estás en la lista",
    successDesc: "Te notificaremos cuando Sythio se lance.",
    placeholder: "Introduce tu email",
    join: "Unirse",
    joining: "Uniéndose...",
    earlyAccess: "Acceso anticipado",
    earlyAccessHeading: "Obtén acceso anticipado a Sythio",
    earlyAccessDesc: "Únete a la lista de espera y sé el primero en transformar tu audio en resultados estructurados y accionables.",
    joinWaitlist: "Unirse a la lista",
    freeInline: "Gratis. Sin spam. Cancela cuando quieras.",
    errorMsg: "Algo salió mal. Inténtalo de nuevo.",
    freeHero: "Gratis. Sé el primero en probar Sythio.",
  },
  fr: {
    successTitle: "Vous êtes sur la liste",
    successDesc: "Nous vous notifierons au lancement de Sythio.",
    placeholder: "Entrez votre email",
    join: "Rejoindre",
    joining: "En cours...",
    earlyAccess: "Accès anticipé",
    earlyAccessHeading: "Obtenez un accès anticipé à Sythio",
    earlyAccessDesc: "Rejoignez la liste d'attente et soyez le premier à transformer votre audio en résultats structurés et exploitables.",
    joinWaitlist: "Rejoindre la liste",
    freeInline: "Gratuit. Pas de spam. Désabonnement à tout moment.",
    errorMsg: "Une erreur est survenue. Veuillez réessayer.",
    freeHero: "Gratuit. Soyez le premier à essayer Sythio.",
  },
  pt: {
    successTitle: "Você está na lista",
    successDesc: "Vamos notificá-lo quando o Sythio for lançado.",
    placeholder: "Digite seu email",
    join: "Entrar",
    joining: "Entrando...",
    earlyAccess: "Acesso antecipado",
    earlyAccessHeading: "Obtenha acesso antecipado ao Sythio",
    earlyAccessDesc: "Entre na lista de espera e seja o primeiro a transformar seu áudio em resultados estruturados e acionáveis.",
    joinWaitlist: "Entrar na lista",
    freeInline: "Gratuito. Sem spam. Cancele quando quiser.",
    errorMsg: "Algo deu errado. Tente novamente.",
    freeHero: "Gratuito. Seja o primeiro a experimentar o Sythio.",
  },
  it: {
    successTitle: "Sei nella lista",
    successDesc: "Ti avviseremo quando Sythio sarà disponibile.",
    placeholder: "Inserisci la tua email",
    join: "Iscriviti",
    joining: "Iscrizione...",
    earlyAccess: "Accesso anticipato",
    earlyAccessHeading: "Ottieni l'accesso anticipato a Sythio",
    earlyAccessDesc: "Unisciti alla lista d'attesa e sii il primo a trasformare il tuo audio in risultati strutturati e utilizzabili.",
    joinWaitlist: "Unisciti alla lista",
    freeInline: "Gratuito. Niente spam. Cancellati quando vuoi.",
    errorMsg: "Qualcosa è andato storto. Riprova.",
    freeHero: "Gratuito. Sii il primo a provare Sythio.",
  },
};

type WaitlistProps = {
  variant?: "hero" | "inline" | "compact";
  className?: string;
};

export default function Waitlist({ variant = "hero", className = "" }: WaitlistProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setState("loading");

    /* ── Replace with your real endpoint (Mailchimp, ConvertKit, custom API) ── */
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
    trackWaitlistSignup(variant);
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${className} ${variant === "compact" ? "" : "text-center"}`}
      >
        <div
          className={`inline-flex items-center gap-3 ${
            variant === "inline"
              ? "px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-100"
              : variant === "compact"
                ? "px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100"
                : "px-8 py-6 rounded-2xl bg-emerald-50 border border-emerald-100"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-emerald-900">{c.successTitle}</p>
            <p className="text-xs text-emerald-700">{c.successDesc}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={c.placeholder}
          required
          className="flex-1 h-11 px-4 rounded-xl bg-white border border-border-light text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground/20 focus:ring-2 focus:ring-foreground/5 transition-all"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="h-11 px-5 rounded-xl bg-foreground text-white text-sm font-medium hover:bg-accent-muted transition-all duration-300 disabled:opacity-60 shrink-0"
        >
          {state === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          ) : (
            c.join
          )}
        </button>
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`rounded-3xl bg-gradient-to-br from-foreground to-zinc-800 p-8 md:p-10 ${className}`}>
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/70">{c.earlyAccess}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {c.earlyAccessHeading}
          </h3>
          <p className="text-sm text-white/60 mb-6 leading-relaxed">
            {c.earlyAccessDesc}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 h-12 px-5 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="h-12 px-8 rounded-full bg-white text-foreground text-sm font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-60 shrink-0 shadow-sm"
            >
              {state === "loading" ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                    <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  {c.joining}
                </span>
              ) : (
                c.joinWaitlist
              )}
            </button>
          </form>
          <p className="mt-4 text-xs text-white/40">{c.freeInline}</p>
        </div>
      </div>
    );
  }

  /* ── Hero variant (default) ── */
  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="flex-1 h-14 px-6 rounded-full bg-white border border-border text-base text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground/20 focus:ring-4 focus:ring-foreground/5 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="h-14 px-10 rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 shrink-0"
        >
          {state === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {c.joining}
            </span>
          ) : (
            c.joinWaitlist
          )}
        </button>
      </form>
      <AnimatePresence>
        {state === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm text-red-500 mt-3"
          >
            {c.errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
      <p className="text-center text-sm text-muted mt-4">
        {c.freeHero}
      </p>
    </div>
  );
}
