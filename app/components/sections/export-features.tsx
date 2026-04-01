"use client";

import { TextReveal, ScrollScale, GsapStagger } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

const content: Record<string, {
  sectionLabel: string;
  heading: string;
  rotatingWords: string[];
  subtitle: string;
  formats: { title: string; description: string; icon: string; gradient: string }[];
  extras: { title: string; description: string; icon: string }[];
}> = {
  en: {
    sectionLabel: "Export",
    heading: "Take it ",
    rotatingWords: ["anywhere", "everywhere", "with you", "further"],
    subtitle: "Every output ready to leave Sythio in the format you need. One click, multiple notes, any destination.",
    formats: [
      {
        title: "PDF",
        description: "Professional documents ready for clients and stakeholders.",
        icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
        gradient: "from-red-500 to-red-600",
      },
      {
        title: "Excel",
        description: "Structured data across multiple sheets. Tasks, timelines, and metrics organized.",
        icon: "M3 10h18M3 14h18M9 4v16m6-16v16M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        title: "Word",
        description: "Editable documents with formatting preserved. Ready for collaboration.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        title: "SRT",
        description: "Subtitle files with timestamps. Perfect for video content and accessibility.",
        icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
        gradient: "from-violet-500 to-violet-600",
      },
    ],
    extras: [
      {
        title: "Batch export",
        description: "Select multiple notes and export them all at once. No one-by-one tedium.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
      {
        title: "Copy by section",
        description: "Copy individual sections of any output to your clipboard. Grab just what you need.",
        icon: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
      },
      {
        title: "Public share links",
        description: "Generate shareable links to any note. Recipients view without logging in.",
        icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      },
    ],
  },
  es: {
    sectionLabel: "Exportación",
    heading: "Llévalo a ",
    rotatingWords: ["cualquier lugar", "todas partes", "contigo", "donde quieras"],
    subtitle: "Cada resultado listo para salir de Sythio en el formato que necesitas. Un clic, múltiples notas, cualquier destino.",
    formats: [
      {
        title: "PDF",
        description: "Documentos profesionales listos para clientes y stakeholders.",
        icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
        gradient: "from-red-500 to-red-600",
      },
      {
        title: "Excel",
        description: "Datos estructurados en múltiples hojas. Tareas, cronogramas y métricas organizados.",
        icon: "M3 10h18M3 14h18M9 4v16m6-16v16M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        title: "Word",
        description: "Documentos editables con formato preservado. Listos para colaborar.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        title: "SRT",
        description: "Archivos de subtítulos con timestamps. Perfecto para contenido en video y accesibilidad.",
        icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
        gradient: "from-violet-500 to-violet-600",
      },
    ],
    extras: [
      {
        title: "Exportación por lotes",
        description: "Selecciona múltiples notas y expórtalas todas de una vez. Sin repetir uno por uno.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
      {
        title: "Copiar por sección",
        description: "Copia secciones individuales de cualquier resultado al portapapeles. Toma solo lo que necesitas.",
        icon: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
      },
      {
        title: "Links públicos",
        description: "Genera enlaces compartibles a cualquier nota. Los destinatarios ven sin iniciar sesión.",
        icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      },
    ],
  },
  fr: {
    sectionLabel: "Exportation",
    heading: "Emportez-le ",
    rotatingWords: ["partout", "n'importe où", "avec vous", "plus loin"],
    subtitle: "Chaque résultat prêt à quitter Sythio dans le format dont vous avez besoin. Un clic, plusieurs notes, n'importe quelle destination.",
    formats: [
      {
        title: "PDF",
        description: "Documents professionnels prêts pour les clients et parties prenantes.",
        icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
        gradient: "from-red-500 to-red-600",
      },
      {
        title: "Excel",
        description: "Données structurées sur plusieurs feuilles. Tâches, calendriers et métriques organisés.",
        icon: "M3 10h18M3 14h18M9 4v16m6-16v16M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        title: "Word",
        description: "Documents modifiables avec mise en forme préservée. Prêts pour la collaboration.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        title: "SRT",
        description: "Fichiers de sous-titres avec horodatage. Parfaits pour le contenu vidéo et l'accessibilité.",
        icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
        gradient: "from-violet-500 to-violet-600",
      },
    ],
    extras: [
      {
        title: "Export par lots",
        description: "Sélectionnez plusieurs notes et exportez-les toutes en une fois.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
      {
        title: "Copier par section",
        description: "Copiez des sections individuelles de n'importe quel résultat dans votre presse-papiers.",
        icon: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
      },
      {
        title: "Liens publics",
        description: "Générez des liens partageables vers n'importe quelle note. Consultation sans connexion.",
        icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      },
    ],
  },
  pt: {
    sectionLabel: "Exportação",
    heading: "Leve para ",
    rotatingWords: ["qualquer lugar", "todo lugar", "com você", "mais longe"],
    subtitle: "Cada resultado pronto para sair do Sythio no formato que você precisa. Um clique, múltiplas notas, qualquer destino.",
    formats: [
      {
        title: "PDF",
        description: "Documentos profissionais prontos para clientes e stakeholders.",
        icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
        gradient: "from-red-500 to-red-600",
      },
      {
        title: "Excel",
        description: "Dados estruturados em múltiplas planilhas. Tarefas, cronogramas e métricas organizados.",
        icon: "M3 10h18M3 14h18M9 4v16m6-16v16M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        title: "Word",
        description: "Documentos editáveis com formatação preservada. Prontos para colaboração.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        title: "SRT",
        description: "Arquivos de legendas com timestamps. Perfeito para conteúdo em vídeo e acessibilidade.",
        icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
        gradient: "from-violet-500 to-violet-600",
      },
    ],
    extras: [
      {
        title: "Exportação em lote",
        description: "Selecione múltiplas notas e exporte todas de uma vez.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
      {
        title: "Copiar por seção",
        description: "Copie seções individuais de qualquer resultado para a área de transferência.",
        icon: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
      },
      {
        title: "Links públicos",
        description: "Gere links compartilháveis para qualquer nota. Visualização sem login.",
        icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      },
    ],
  },
  it: {
    sectionLabel: "Esportazione",
    heading: "Portalo ",
    rotatingWords: ["ovunque", "dappertutto", "con te", "oltre"],
    subtitle: "Ogni risultato pronto a lasciare Sythio nel formato di cui hai bisogno. Un clic, più note, qualsiasi destinazione.",
    formats: [
      {
        title: "PDF",
        description: "Documenti professionali pronti per clienti e stakeholder.",
        icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
        gradient: "from-red-500 to-red-600",
      },
      {
        title: "Excel",
        description: "Dati strutturati su più fogli. Attività, tempistiche e metriche organizzate.",
        icon: "M3 10h18M3 14h18M9 4v16m6-16v16M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        title: "Word",
        description: "Documenti modificabili con formattazione preservata. Pronti per la collaborazione.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        title: "SRT",
        description: "File di sottotitoli con timestamp. Perfetto per contenuti video e accessibilità.",
        icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
        gradient: "from-violet-500 to-violet-600",
      },
    ],
    extras: [
      {
        title: "Esportazione in batch",
        description: "Seleziona più note ed esportale tutte in una volta.",
        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
      {
        title: "Copia per sezione",
        description: "Copia singole sezioni di qualsiasi risultato negli appunti.",
        icon: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
      },
      {
        title: "Link pubblici",
        description: "Genera link condivisibili per qualsiasi nota. Visualizzazione senza login.",
        icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      },
    ],
  },
};

export default function ExportFeatures() {
  const { locale } = useLanguage();
  const t = content[locale] ?? content.en;

  return (
    <section className="py-32 md:py-44 bg-white section-float-bg-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {t.sectionLabel}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {t.heading}<RotatingText words={t.rotatingWords} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </TextReveal>
        </div>

        {/* Format cards */}
        <GsapStagger className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12" stagger={0.08}>
          {t.formats.map((format) => (
            <ScrollScale key={format.title}>
              <div className="group relative p-6 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 text-center">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${format.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d={format.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{format.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{format.description}</p>
              </div>
            </ScrollScale>
          ))}
        </GsapStagger>

        {/* Extra features */}
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {t.extras.map((extra) => (
            <ScrollScale key={extra.title}>
              <div className="group flex gap-4 p-6 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border-light flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-white transition-colors duration-300">
                    <path d={extra.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1">{extra.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{extra.description}</p>
                </div>
              </div>
            </ScrollScale>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}
