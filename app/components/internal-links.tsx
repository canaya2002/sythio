import Link from "next/link";

/* ─── Contextual internal links for SEO ─── */
/* These link blocks provide topical cluster connections between related pages */

type LinkItem = { label: string; href: string; description: string };

const featureLinks: LinkItem[] = [
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
];

const useCaseLinks: LinkItem[] = [
  { label: "Meetings", href: "/use-cases/meetings", description: "AI meeting notes and follow-ups" },
  { label: "Voice Notes", href: "/use-cases/voice-notes", description: "Structure your spoken ideas" },
  { label: "Brainstorming", href: "/use-cases/brainstorming", description: "Capture group creativity" },
  { label: "Lectures", href: "/use-cases/lectures", description: "Study-ready lecture notes" },
  { label: "Client Calls", href: "/use-cases/client-calls", description: "Documentation and follow-ups" },
];

const audienceLinks: LinkItem[] = [
  { label: "For Students", href: "/for/students", description: "AI-powered study material" },
  { label: "For Founders", href: "/for/founders", description: "Voice memos to priorities" },
  { label: "For Project Managers", href: "/for/project-managers", description: "Meeting accountability" },
];

const compareLinks: LinkItem[] = [
  { label: "vs Otter.ai", href: "/compare/otter", description: "Multi-output vs transcription" },
  { label: "vs Fireflies.ai", href: "/compare/fireflies", description: "Audio intelligence vs meeting bot" },
  { label: "vs tl;dv", href: "/compare/tldv", description: "Audio transformation vs video recording" },
];

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
  const items = featureLinks.filter((l) => l.href !== exclude).slice(0, 4);
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Explore more features</h2>
        <LinkGrid items={items} columns={4} />
      </div>
    </section>
  );
}

export function RelatedUseCases({ exclude }: { exclude?: string }) {
  const items = useCaseLinks.filter((l) => l.href !== exclude);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold text-foreground mb-6">See how others use Sythio</h2>
        <LinkGrid items={items} columns={3} />
      </div>
    </section>
  );
}

export function ExploreAll() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-10">Explore Sythio</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">Features</h3>
            <LinkGrid items={featureLinks.slice(0, 6)} columns={3} />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">Use Cases</h3>
            <LinkGrid items={useCaseLinks} columns={3} />
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">Built For</h3>
              <LinkGrid items={audienceLinks} columns={2} />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">Compare</h3>
              <LinkGrid items={compareLinks} columns={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
