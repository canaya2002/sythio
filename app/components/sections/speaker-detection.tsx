"use client";

import { TextReveal, ScrollSlide, ScrollScale, ParallaxFloat } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { SpeakerBadges } from "../mockups";
import { IPhoneFrame } from "../devices";
import { useLanguage } from "../i18n/language-context";

const content: Record<string, {
  meetingTranscript: string;
  speakersDetected: string;
  dialogues: { speaker: string; color: string; text: string; time: string }[];
  speakingTime: string;
  features: { title: string; description: string }[];
  accuracy: string;
  accuracyValue: string;
  speakerIdentification: string;
  sectionLabel: string;
  heading: string;
  rotatingWords: string[];
  subtitle: string;
}> = {
  en: {
    meetingTranscript: "Meeting transcript",
    speakersDetected: "3 speakers detected",
    dialogues: [
      { speaker: "Alex", color: "#6366f1", text: "Let's go over the client feedback.", time: "0:00" },
      { speaker: "Maria", color: "#8b5cf6", text: "Main concern was export functionality.", time: "0:24" },
      { speaker: "Jordan", color: "#a78bfa", text: "I can prioritize that next sprint.", time: "0:51" },
      { speaker: "Alex", color: "#6366f1", text: "Great. Let's document the timeline.", time: "1:08" },
      { speaker: "Maria", color: "#8b5cf6", text: "I'll send the recap email today.", time: "1:32" },
    ],
    speakingTime: "Speaking time",
    features: [
      { title: "Automatic detection", description: "Identifies when different people are speaking — no setup required." },
      { title: "Speaker separation", description: "See exactly who said what. Every statement attributed to the right person." },
      { title: "Rename speakers", description: "Label speakers with real names for clearer outputs and better context." },
      { title: "Smarter outputs", description: "Summaries, tasks, and follow-ups organized by speaker — who agreed to what." },
    ],
    accuracy: "Accuracy",
    accuracyValue: "98.4%",
    speakerIdentification: "Speaker identification",
    sectionLabel: "Speaker detection",
    heading: "Know who said ",
    rotatingWords: ["what", "when", "which", "everything"],
    subtitle: "Multi-speaker conversations are common. Sythio understands them. Every voice is identified, every statement attributed, every responsibility clearly assigned.",
  },
  es: {
    meetingTranscript: "Transcripción de reunión",
    speakersDetected: "3 hablantes detectados",
    dialogues: [
      { speaker: "Alex", color: "#6366f1", text: "Repasemos los comentarios del cliente.", time: "0:00" },
      { speaker: "Maria", color: "#8b5cf6", text: "La principal preocupación era la funcionalidad de exportación.", time: "0:24" },
      { speaker: "Jordan", color: "#a78bfa", text: "Puedo priorizar eso en el próximo sprint.", time: "0:51" },
      { speaker: "Alex", color: "#6366f1", text: "Genial. Documentemos el cronograma.", time: "1:08" },
      { speaker: "Maria", color: "#8b5cf6", text: "Enviaré el correo de resumen hoy.", time: "1:32" },
    ],
    speakingTime: "Tiempo de habla",
    features: [
      { title: "Detección automática", description: "Identifica cuándo hablan diferentes personas — sin configuración necesaria." },
      { title: "Separación de hablantes", description: "Ve exactamente quién dijo qué. Cada declaración atribuida a la persona correcta." },
      { title: "Renombrar hablantes", description: "Etiqueta a los hablantes con nombres reales para resultados más claros y mejor contexto." },
      { title: "Resultados más inteligentes", description: "Resúmenes, tareas y seguimientos organizados por hablante — quién acordó qué." },
    ],
    accuracy: "Precisión",
    accuracyValue: "98.4%",
    speakerIdentification: "Identificación de hablantes",
    sectionLabel: "Detección de hablantes",
    heading: "Sabe quién dijo ",
    rotatingWords: ["qué", "cuándo", "cuál", "todo"],
    subtitle: "Las conversaciones con varios hablantes son comunes. Sythio las comprende. Cada voz es identificada, cada declaración atribuida, cada responsabilidad claramente asignada.",
  },
  fr: {
    meetingTranscript: "Transcription de réunion",
    speakersDetected: "3 intervenants détectés",
    dialogues: [
      { speaker: "Alex", color: "#6366f1", text: "Passons en revue les retours du client.", time: "0:00" },
      { speaker: "Maria", color: "#8b5cf6", text: "La principale préoccupation concernait la fonctionnalité d'export.", time: "0:24" },
      { speaker: "Jordan", color: "#a78bfa", text: "Je peux prioriser cela pour le prochain sprint.", time: "0:51" },
      { speaker: "Alex", color: "#6366f1", text: "Parfait. Documentons le calendrier.", time: "1:08" },
      { speaker: "Maria", color: "#8b5cf6", text: "J'enverrai l'e-mail récapitulatif aujourd'hui.", time: "1:32" },
    ],
    speakingTime: "Temps de parole",
    features: [
      { title: "Détection automatique", description: "Identifie quand différentes personnes parlent — aucune configuration requise." },
      { title: "Séparation des intervenants", description: "Voyez exactement qui a dit quoi. Chaque déclaration attribuée à la bonne personne." },
      { title: "Renommer les intervenants", description: "Attribuez de vrais noms aux intervenants pour des résultats plus clairs et un meilleur contexte." },
      { title: "Résultats plus intelligents", description: "Résumés, tâches et suivis organisés par intervenant — qui a accepté quoi." },
    ],
    accuracy: "Précision",
    accuracyValue: "98.4%",
    speakerIdentification: "Identification des intervenants",
    sectionLabel: "Détection des intervenants",
    heading: "Sachez qui a dit ",
    rotatingWords: ["quoi", "quand", "lequel", "tout"],
    subtitle: "Les conversations à plusieurs intervenants sont courantes. Sythio les comprend. Chaque voix est identifiée, chaque déclaration attribuée, chaque responsabilité clairement assignée.",
  },
  pt: {
    meetingTranscript: "Transcrição da reunião",
    speakersDetected: "3 falantes detectados",
    dialogues: [
      { speaker: "Alex", color: "#6366f1", text: "Vamos revisar o feedback do cliente.", time: "0:00" },
      { speaker: "Maria", color: "#8b5cf6", text: "A principal preocupação era a funcionalidade de exportação.", time: "0:24" },
      { speaker: "Jordan", color: "#a78bfa", text: "Posso priorizar isso no próximo sprint.", time: "0:51" },
      { speaker: "Alex", color: "#6366f1", text: "Ótimo. Vamos documentar o cronograma.", time: "1:08" },
      { speaker: "Maria", color: "#8b5cf6", text: "Enviarei o e-mail de resumo hoje.", time: "1:32" },
    ],
    speakingTime: "Tempo de fala",
    features: [
      { title: "Detecção automática", description: "Identifica quando diferentes pessoas estão falando — sem configuração necessária." },
      { title: "Separação de falantes", description: "Veja exatamente quem disse o quê. Cada declaração atribuída à pessoa certa." },
      { title: "Renomear falantes", description: "Rotule os falantes com nomes reais para resultados mais claros e melhor contexto." },
      { title: "Resultados mais inteligentes", description: "Resumos, tarefas e acompanhamentos organizados por falante — quem concordou com o quê." },
    ],
    accuracy: "Precisão",
    accuracyValue: "98.4%",
    speakerIdentification: "Identificação de falantes",
    sectionLabel: "Detecção de falantes",
    heading: "Saiba quem disse ",
    rotatingWords: ["o quê", "quando", "qual", "tudo"],
    subtitle: "Conversas com vários falantes são comuns. O Sythio as compreende. Cada voz é identificada, cada declaração atribuída, cada responsabilidade claramente designada.",
  },
  it: {
    meetingTranscript: "Trascrizione della riunione",
    speakersDetected: "3 parlanti rilevati",
    dialogues: [
      { speaker: "Alex", color: "#6366f1", text: "Esaminiamo il feedback del cliente.", time: "0:00" },
      { speaker: "Maria", color: "#8b5cf6", text: "La preoccupazione principale era la funzionalità di esportazione.", time: "0:24" },
      { speaker: "Jordan", color: "#a78bfa", text: "Posso dare priorità a questo nel prossimo sprint.", time: "0:51" },
      { speaker: "Alex", color: "#6366f1", text: "Ottimo. Documentiamo la tempistica.", time: "1:08" },
      { speaker: "Maria", color: "#8b5cf6", text: "Invierò l'e-mail di riepilogo oggi.", time: "1:32" },
    ],
    speakingTime: "Tempo di parola",
    features: [
      { title: "Rilevamento automatico", description: "Identifica quando parlano persone diverse — nessuna configurazione richiesta." },
      { title: "Separazione dei parlanti", description: "Vedi esattamente chi ha detto cosa. Ogni dichiarazione attribuita alla persona giusta." },
      { title: "Rinomina parlanti", description: "Assegna nomi reali ai parlanti per risultati più chiari e un contesto migliore." },
      { title: "Risultati più intelligenti", description: "Riassunti, attività e follow-up organizzati per parlante — chi ha concordato cosa." },
    ],
    accuracy: "Precisione",
    accuracyValue: "98.4%",
    speakerIdentification: "Identificazione dei parlanti",
    sectionLabel: "Rilevamento dei parlanti",
    heading: "Scopri chi ha detto ",
    rotatingWords: ["cosa", "quando", "quale", "tutto"],
    subtitle: "Le conversazioni con più parlanti sono comuni. Sythio le comprende. Ogni voce è identificata, ogni dichiarazione attribuita, ogni responsabilità chiaramente assegnata.",
  },
};

function SpeakerPhoneScreen({ locale }: { locale: string }) {
  const t = content[locale] ?? content.en;
  return (
    <div className="bg-background pb-4">
      <div className="px-4 pt-3 pb-2">
        <h3 className="text-[13px] font-semibold text-foreground">{t.meetingTranscript}</h3>
        <p className="text-[9px] text-muted">{t.speakersDetected}</p>
      </div>
      <div className="px-4 space-y-3">
        {t.dialogues.map((item, i) => (
          <div key={i} className="flex gap-2">
            <div
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0"
              style={{ background: item.color }}
            >
              {item.speaker[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-semibold text-foreground">{item.speaker}</span>
                <span className="text-[8px] text-muted-light font-mono">{item.time}</span>
              </div>
              <p className="text-[10px] text-muted leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Speaker time bars */}
      <div className="px-4 mt-4 pt-3 border-t border-border-light">
        <p className="text-[9px] font-semibold text-muted-light uppercase tracking-wider mb-2">{t.speakingTime}</p>
        {[
          { name: "Alex", pct: 40, color: "#6366f1" },
          { name: "Maria", pct: 35, color: "#8b5cf6" },
          { name: "Jordan", pct: 25, color: "#a78bfa" },
        ].map((s) => (
          <div key={s.name} className="flex items-center gap-2 mb-1.5">
            <span className="text-[9px] text-muted w-10">{s.name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-border-light overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
            </div>
            <span className="text-[8px] text-muted-light w-6 text-right">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpeakerDetection() {
  const { locale } = useLanguage();
  const t = content[locale] ?? content.en;

  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden animated-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Visual */}
          <ScrollSlide direction="left" distance={100}>
            <div className="relative flex justify-center">
              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-violet-100/40 via-indigo-50/30 to-transparent rounded-full blur-3xl" />

              {/* iPhone */}
              <ParallaxFloat speed={0.1}>
                <IPhoneFrame>
                  <SpeakerPhoneScreen locale={locale} />
                </IPhoneFrame>
              </ParallaxFloat>

              {/* Floating speaker badges */}
              <div className="absolute -right-4 top-20 md:right-0">
                <SpeakerBadges className="flex-col" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -left-4 bottom-20 md:left-0 bg-white rounded-xl border border-border-light shadow-xl px-4 py-3">
                <p className="text-[10px] text-muted-light font-semibold uppercase tracking-wider mb-1">{t.accuracy}</p>
                <p className="text-2xl font-bold text-foreground tracking-tight">{t.accuracyValue}</p>
                <p className="text-[10px] text-emerald-600 font-medium">{t.speakerIdentification}</p>
              </div>
            </div>
          </ScrollSlide>

          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              {t.sectionLabel}
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {t.heading}<RotatingText words={t.rotatingWords} className="text-zinc-400" />
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              {t.subtitle}
            </TextReveal>
            <div className="mt-12 space-y-6">
              {t.features.map((feature, i) => (
                <ScrollScale key={i}>
                  <div className="flex gap-4 group">
                    <div className="mt-1.5 w-6 h-6 rounded-full bg-foreground/5 border border-border-light flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-white transition-colors duration-300">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
