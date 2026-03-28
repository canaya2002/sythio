"use client";

import Link from "next/link";
import { useLanguage } from "./i18n/language-context";

/* ─── Contextual internal links for SEO ─── */
/* These link blocks provide topical cluster connections between related pages */

type LinkItem = { label: string; href: string; description: string };

type LinksContent = {
  features: LinkItem[];
  useCases: LinkItem[];
  audience: LinkItem[];
  compare: LinkItem[];
  audioTo: LinkItem[];
  resources: LinkItem[];
  headings: {
    exploreFeatures: string;
    seeHowOthers: string;
    exploreSythio: string;
    features: string;
    useCases: string;
    builtFor: string;
    compare: string;
    audioTo: string;
    resources: string;
  };
};

const content: Record<string, LinksContent> = {
  en: {
    features: [
      { label: "AI Summaries", href: "/features/ai-summaries", description: "Concise overviews from audio" },
      { label: "Speaker Detection", href: "/features/speaker-detection", description: "Know who said what" },
      { label: "Task Extraction", href: "/features/task-extraction", description: "Action items with owners" },
      { label: "Action Plans", href: "/features/action-plans", description: "Structured step-by-step plans" },
      { label: "Clean Text", href: "/features/clean-text", description: "Polished readable prose" },
      { label: "Reports", href: "/features/reports", description: "Executive-ready documents" },
      { label: "Study Notes", href: "/features/study-notes", description: "Organized learning material" },
      { label: "Key Points", href: "/features/key-points", description: "Essential info extracted" },
      { label: "Ideas", href: "/features/ideas", description: "Categorized brainstorming" },
      { label: "Messages", href: "/features/messages", description: "Follow-up drafts" },
    ],
    useCases: [
      { label: "Meetings", href: "/use-cases/meetings", description: "AI meeting notes and follow-ups" },
      { label: "Voice Notes", href: "/use-cases/voice-notes", description: "Structure your spoken ideas" },
      { label: "Brainstorming", href: "/use-cases/brainstorming", description: "Capture group creativity" },
      { label: "Lectures", href: "/use-cases/lectures", description: "Study-ready lecture notes" },
      { label: "Client Calls", href: "/use-cases/client-calls", description: "Documentation and follow-ups" },
      { label: "Podcasts", href: "/use-cases/podcasts", description: "Show notes and transcripts" },
      { label: "Interviews", href: "/use-cases/interviews", description: "Structured interview summaries" },
    ],
    audience: [
      { label: "For Students", href: "/for/students", description: "AI-powered study material" },
      { label: "For Founders", href: "/for/founders", description: "Voice memos to priorities" },
      { label: "For Project Managers", href: "/for/project-managers", description: "Meeting accountability" },
    ],
    compare: [
      { label: "vs Otter.ai", href: "/compare/otter", description: "Multi-output vs transcription" },
      { label: "vs Fireflies.ai", href: "/compare/fireflies", description: "Audio intelligence vs meeting bot" },
      { label: "vs tl;dv", href: "/compare/tldv", description: "Audio transformation vs video recording" },
    ],
    audioTo: [
      { label: "Audio to Transcript", href: "/audio-to-transcript", description: "Accurate speech-to-text conversion" },
    ],
    resources: [
      { label: "Security", href: "/security", description: "How we protect your data" },
      { label: "Integrations", href: "/integrations", description: "Connect with your tools" },
      { label: "Enterprise", href: "/enterprise", description: "Solutions for large teams" },
      { label: "Case Studies", href: "/case-studies", description: "Real-world success stories" },
    ],
    headings: {
      exploreFeatures: "Explore more features",
      seeHowOthers: "See how others use Sythio",
      exploreSythio: "Explore Sythio",
      features: "Features",
      useCases: "Use Cases",
      builtFor: "Built For",
      compare: "Compare",
      audioTo: "Audio To",
      resources: "Resources",
    },
  },
  es: {
    features: [
      { label: "Resúmenes con IA", href: "/features/ai-summaries", description: "Resúmenes concisos a partir de audio" },
      { label: "Detección de hablantes", href: "/features/speaker-detection", description: "Identifica quién dijo qué" },
      { label: "Extracción de tareas", href: "/features/task-extraction", description: "Tareas con responsables asignados" },
      { label: "Planes de acción", href: "/features/action-plans", description: "Planes estructurados paso a paso" },
      { label: "Texto limpio", href: "/features/clean-text", description: "Prosa pulida y legible" },
      { label: "Informes", href: "/features/reports", description: "Documentos listos para directivos" },
      { label: "Apuntes de estudio", href: "/features/study-notes", description: "Material de estudio organizado" },
      { label: "Puntos clave", href: "/features/key-points", description: "Información esencial extraída" },
      { label: "Ideas", href: "/features/ideas", description: "Lluvia de ideas categorizada" },
      { label: "Mensajes", href: "/features/messages", description: "Borradores de seguimiento" },
    ],
    useCases: [
      { label: "Reuniones", href: "/use-cases/meetings", description: "Notas y seguimiento de reuniones con IA" },
      { label: "Notas de voz", href: "/use-cases/voice-notes", description: "Estructura tus ideas habladas" },
      { label: "Lluvia de ideas", href: "/use-cases/brainstorming", description: "Captura la creatividad del grupo" },
      { label: "Clases", href: "/use-cases/lectures", description: "Apuntes listos para estudiar" },
      { label: "Llamadas con clientes", href: "/use-cases/client-calls", description: "Documentación y seguimiento" },
      { label: "Podcasts", href: "/use-cases/podcasts", description: "Notas del programa y transcripciones" },
      { label: "Entrevistas", href: "/use-cases/interviews", description: "Resúmenes estructurados de entrevistas" },
    ],
    audience: [
      { label: "Para estudiantes", href: "/for/students", description: "Material de estudio con IA" },
      { label: "Para fundadores", href: "/for/founders", description: "De notas de voz a prioridades" },
      { label: "Para project managers", href: "/for/project-managers", description: "Responsabilidad en reuniones" },
    ],
    compare: [
      { label: "vs Otter.ai", href: "/compare/otter", description: "Múltiples formatos vs transcripción" },
      { label: "vs Fireflies.ai", href: "/compare/fireflies", description: "Inteligencia de audio vs bot de reuniones" },
      { label: "vs tl;dv", href: "/compare/tldv", description: "Transformación de audio vs grabación de video" },
    ],
    audioTo: [
      { label: "Audio a transcripción", href: "/audio-to-transcript", description: "Conversión precisa de voz a texto" },
    ],
    resources: [
      { label: "Seguridad", href: "/security", description: "Cómo protegemos tus datos" },
      { label: "Integraciones", href: "/integrations", description: "Conecta con tus herramientas" },
      { label: "Empresas", href: "/enterprise", description: "Soluciones para grandes equipos" },
      { label: "Casos de éxito", href: "/case-studies", description: "Historias de éxito reales" },
    ],
    headings: {
      exploreFeatures: "Explora más funcionalidades",
      seeHowOthers: "Descubre cómo otros usan Sythio",
      exploreSythio: "Explora Sythio",
      features: "Funcionalidades",
      useCases: "Casos de uso",
      builtFor: "Creado para",
      compare: "Comparar",
      audioTo: "Audio a",
      resources: "Recursos",
    },
  },
  fr: {
    features: [
      { label: "Résumés IA", href: "/features/ai-summaries", description: "Synthèses concises à partir de l'audio" },
      { label: "Détection des locuteurs", href: "/features/speaker-detection", description: "Identifiez qui a dit quoi" },
      { label: "Extraction de tâches", href: "/features/task-extraction", description: "Tâches avec responsables assignés" },
      { label: "Plans d'action", href: "/features/action-plans", description: "Plans structurés étape par étape" },
      { label: "Texte épuré", href: "/features/clean-text", description: "Prose soignée et lisible" },
      { label: "Rapports", href: "/features/reports", description: "Documents prêts pour la direction" },
      { label: "Notes d'étude", href: "/features/study-notes", description: "Supports d'apprentissage organisés" },
      { label: "Points clés", href: "/features/key-points", description: "Informations essentielles extraites" },
      { label: "Idées", href: "/features/ideas", description: "Brainstorming catégorisé" },
      { label: "Messages", href: "/features/messages", description: "Brouillons de suivi" },
    ],
    useCases: [
      { label: "Réunions", href: "/use-cases/meetings", description: "Notes et suivis de réunion par IA" },
      { label: "Notes vocales", href: "/use-cases/voice-notes", description: "Structurez vos idées parlées" },
      { label: "Brainstorming", href: "/use-cases/brainstorming", description: "Capturez la créativité du groupe" },
      { label: "Cours", href: "/use-cases/lectures", description: "Notes de cours prêtes à réviser" },
      { label: "Appels clients", href: "/use-cases/client-calls", description: "Documentation et suivis" },
      { label: "Podcasts", href: "/use-cases/podcasts", description: "Notes d'émission et transcriptions" },
      { label: "Entretiens", href: "/use-cases/interviews", description: "Résumés d'entretiens structurés" },
    ],
    audience: [
      { label: "Pour les étudiants", href: "/for/students", description: "Supports d'étude alimentés par l'IA" },
      { label: "Pour les fondateurs", href: "/for/founders", description: "Des mémos vocaux aux priorités" },
      { label: "Pour les chefs de projet", href: "/for/project-managers", description: "Responsabilisation en réunion" },
    ],
    compare: [
      { label: "vs Otter.ai", href: "/compare/otter", description: "Formats multiples vs transcription" },
      { label: "vs Fireflies.ai", href: "/compare/fireflies", description: "Intelligence audio vs bot de réunion" },
      { label: "vs tl;dv", href: "/compare/tldv", description: "Transformation audio vs enregistrement vidéo" },
    ],
    audioTo: [
      { label: "Audio en transcription", href: "/audio-to-transcript", description: "Conversion précise de la parole en texte" },
    ],
    resources: [
      { label: "Sécurité", href: "/security", description: "Comment nous protégeons vos données" },
      { label: "Intégrations", href: "/integrations", description: "Connectez vos outils" },
      { label: "Entreprise", href: "/enterprise", description: "Solutions pour grandes équipes" },
      { label: "Études de cas", href: "/case-studies", description: "Témoignages de réussite" },
    ],
    headings: {
      exploreFeatures: "Explorer plus de fonctionnalités",
      seeHowOthers: "Découvrez comment d'autres utilisent Sythio",
      exploreSythio: "Explorer Sythio",
      features: "Fonctionnalités",
      useCases: "Cas d'utilisation",
      builtFor: "Conçu pour",
      compare: "Comparer",
      audioTo: "Audio en",
      resources: "Ressources",
    },
  },
  pt: {
    features: [
      { label: "Resumos com IA", href: "/features/ai-summaries", description: "Resumos concisos a partir de áudio" },
      { label: "Detecção de falantes", href: "/features/speaker-detection", description: "Saiba quem disse o quê" },
      { label: "Extração de tarefas", href: "/features/task-extraction", description: "Tarefas com responsáveis atribuídos" },
      { label: "Planos de ação", href: "/features/action-plans", description: "Planos estruturados passo a passo" },
      { label: "Texto limpo", href: "/features/clean-text", description: "Prosa polida e legível" },
      { label: "Relatórios", href: "/features/reports", description: "Documentos prontos para executivos" },
      { label: "Notas de estudo", href: "/features/study-notes", description: "Material de estudo organizado" },
      { label: "Pontos-chave", href: "/features/key-points", description: "Informações essenciais extraídas" },
      { label: "Ideias", href: "/features/ideas", description: "Brainstorming categorizado" },
      { label: "Mensagens", href: "/features/messages", description: "Rascunhos de acompanhamento" },
    ],
    useCases: [
      { label: "Reuniões", href: "/use-cases/meetings", description: "Notas e acompanhamento de reuniões com IA" },
      { label: "Notas de voz", href: "/use-cases/voice-notes", description: "Estruture suas ideias faladas" },
      { label: "Brainstorming", href: "/use-cases/brainstorming", description: "Capture a criatividade do grupo" },
      { label: "Aulas", href: "/use-cases/lectures", description: "Notas de aula prontas para estudar" },
      { label: "Chamadas com clientes", href: "/use-cases/client-calls", description: "Documentação e acompanhamento" },
      { label: "Podcasts", href: "/use-cases/podcasts", description: "Notas do programa e transcrições" },
      { label: "Entrevistas", href: "/use-cases/interviews", description: "Resumos estruturados de entrevistas" },
    ],
    audience: [
      { label: "Para estudantes", href: "/for/students", description: "Material de estudo com IA" },
      { label: "Para fundadores", href: "/for/founders", description: "De notas de voz a prioridades" },
      { label: "Para gerentes de projeto", href: "/for/project-managers", description: "Responsabilidade em reuniões" },
    ],
    compare: [
      { label: "vs Otter.ai", href: "/compare/otter", description: "Múltiplos formatos vs transcrição" },
      { label: "vs Fireflies.ai", href: "/compare/fireflies", description: "Inteligência de áudio vs bot de reunião" },
      { label: "vs tl;dv", href: "/compare/tldv", description: "Transformação de áudio vs gravação de vídeo" },
    ],
    audioTo: [
      { label: "Áudio para transcrição", href: "/audio-to-transcript", description: "Conversão precisa de fala em texto" },
    ],
    resources: [
      { label: "Segurança", href: "/security", description: "Como protegemos seus dados" },
      { label: "Integrações", href: "/integrations", description: "Conecte suas ferramentas" },
      { label: "Empresarial", href: "/enterprise", description: "Soluções para grandes equipes" },
      { label: "Estudos de caso", href: "/case-studies", description: "Histórias de sucesso reais" },
    ],
    headings: {
      exploreFeatures: "Explore mais funcionalidades",
      seeHowOthers: "Veja como outros usam o Sythio",
      exploreSythio: "Explore o Sythio",
      features: "Funcionalidades",
      useCases: "Casos de uso",
      builtFor: "Feito para",
      compare: "Comparar",
      audioTo: "Áudio para",
      resources: "Recursos",
    },
  },
  it: {
    features: [
      { label: "Riassunti IA", href: "/features/ai-summaries", description: "Sintesi concise dall'audio" },
      { label: "Rilevamento parlanti", href: "/features/speaker-detection", description: "Scopri chi ha detto cosa" },
      { label: "Estrazione attività", href: "/features/task-extraction", description: "Attività con responsabili assegnati" },
      { label: "Piani d'azione", href: "/features/action-plans", description: "Piani strutturati passo dopo passo" },
      { label: "Testo pulito", href: "/features/clean-text", description: "Prosa curata e leggibile" },
      { label: "Report", href: "/features/reports", description: "Documenti pronti per i dirigenti" },
      { label: "Appunti di studio", href: "/features/study-notes", description: "Materiale didattico organizzato" },
      { label: "Punti chiave", href: "/features/key-points", description: "Informazioni essenziali estratte" },
      { label: "Idee", href: "/features/ideas", description: "Brainstorming categorizzato" },
      { label: "Messaggi", href: "/features/messages", description: "Bozze di follow-up" },
    ],
    useCases: [
      { label: "Riunioni", href: "/use-cases/meetings", description: "Note e follow-up delle riunioni con IA" },
      { label: "Note vocali", href: "/use-cases/voice-notes", description: "Struttura le tue idee parlate" },
      { label: "Brainstorming", href: "/use-cases/brainstorming", description: "Cattura la creatività del gruppo" },
      { label: "Lezioni", href: "/use-cases/lectures", description: "Appunti pronti per lo studio" },
      { label: "Chiamate clienti", href: "/use-cases/client-calls", description: "Documentazione e follow-up" },
      { label: "Podcast", href: "/use-cases/podcasts", description: "Note del programma e trascrizioni" },
      { label: "Interviste", href: "/use-cases/interviews", description: "Riassunti strutturati delle interviste" },
    ],
    audience: [
      { label: "Per studenti", href: "/for/students", description: "Materiale di studio con IA" },
      { label: "Per fondatori", href: "/for/founders", description: "Da memo vocali a priorità" },
      { label: "Per project manager", href: "/for/project-managers", description: "Responsabilità nelle riunioni" },
    ],
    compare: [
      { label: "vs Otter.ai", href: "/compare/otter", description: "Formati multipli vs trascrizione" },
      { label: "vs Fireflies.ai", href: "/compare/fireflies", description: "Intelligenza audio vs bot per riunioni" },
      { label: "vs tl;dv", href: "/compare/tldv", description: "Trasformazione audio vs registrazione video" },
    ],
    audioTo: [
      { label: "Audio in trascrizione", href: "/audio-to-transcript", description: "Conversione accurata da voce a testo" },
    ],
    resources: [
      { label: "Sicurezza", href: "/security", description: "Come proteggiamo i tuoi dati" },
      { label: "Integrazioni", href: "/integrations", description: "Connetti i tuoi strumenti" },
      { label: "Enterprise", href: "/enterprise", description: "Soluzioni per grandi team" },
      { label: "Casi di studio", href: "/case-studies", description: "Storie di successo reali" },
    ],
    headings: {
      exploreFeatures: "Esplora altre funzionalità",
      seeHowOthers: "Scopri come altri usano Sythio",
      exploreSythio: "Esplora Sythio",
      features: "Funzionalità",
      useCases: "Casi d'uso",
      builtFor: "Pensato per",
      compare: "Confronta",
      audioTo: "Audio in",
      resources: "Risorse",
    },
  },
};

function LinkGrid({ items, columns = 2 }: { items: LinkItem[]; columns?: 2 | 3 | 4 }) {
  const gridClass = columns === 4
    ? "grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
    : columns === 3
      ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      : "grid sm:grid-cols-2 gap-4";

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group p-4 rounded-xl bg-white border border-border-light hover:border-border hover:shadow-sm transition-all duration-300"
        >
          <span className="text-sm font-semibold text-foreground group-hover:text-accent-muted transition-colors">
            {item.label}
          </span>
          <p className="text-xs text-muted mt-1">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

export function RelatedFeatures({ exclude }: { exclude?: string }) {
  const { locale } = useLanguage();
  const t = content[locale] || content.en;
  const items = t.features.filter((l) => l.href !== exclude).slice(0, 4);
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold text-foreground mb-6">{t.headings.exploreFeatures}</h2>
        <LinkGrid items={items} columns={4} />
      </div>
    </section>
  );
}

export function RelatedUseCases({ exclude }: { exclude?: string }) {
  const { locale } = useLanguage();
  const t = content[locale] || content.en;
  const items = t.useCases.filter((l) => l.href !== exclude);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold text-foreground mb-6">{t.headings.seeHowOthers}</h2>
        <LinkGrid items={items} columns={3} />
      </div>
    </section>
  );
}

export function ExploreAll() {
  const { locale } = useLanguage();
  const t = content[locale] || content.en;
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-10">{t.headings.exploreSythio}</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">{t.headings.features}</h3>
            <LinkGrid items={t.features.slice(0, 6)} columns={3} />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">{t.headings.useCases}</h3>
            <LinkGrid items={t.useCases} columns={3} />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">{t.headings.audioTo}</h3>
            <LinkGrid items={t.audioTo} columns={3} />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">{t.headings.resources}</h3>
            <LinkGrid items={t.resources} columns={4} />
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">{t.headings.builtFor}</h3>
              <LinkGrid items={t.audience} columns={2} />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">{t.headings.compare}</h3>
              <LinkGrid items={t.compare} columns={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
