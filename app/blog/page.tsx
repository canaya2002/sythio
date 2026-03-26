import Link from "next/link";
import { posts, getCategoryColor, formatDate } from "./lib/posts";
import { ExploreAll } from "../components/internal-links";

function CategoryBadge({ name }: { name: string }) {
  const color = getCategoryColor(name);
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
      style={{ background: `${color}10`, color }}
    >
      {name}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 hero-animated-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Insights on audio, AI, and productivity
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Guides, deep dives, and comparisons for anyone who works with
              voice recordings, meetings, or spoken content.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featured && (
        <section className="pb-16 md:pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block rounded-3xl bg-gradient-to-br from-foreground via-zinc-800 to-zinc-900 p-8 md:p-12 lg:p-16 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),0_32px_80px_rgba(0,0,0,0.16)]"
            >
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 border border-white/10"
                    style={{ color: getCategoryColor(featured.category) }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs text-white/40">Featured</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5 group-hover:text-white/90 transition-colors">
                  {featured.title}
                </h2>

                <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
                  {featured.description}
                </p>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span>{formatDate(featured.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{featured.readingTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    Read article <ArrowIcon />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Post Grid ── */}
      <section className="pb-32 md:pb-44 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              All Articles
            </h2>
            <span className="text-sm text-muted">
              {posts.length} articles
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col rounded-2xl bg-white border border-border-light overflow-hidden transition-all duration-500 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div
                  className="h-1 transition-all duration-500 group-hover:h-1.5"
                  style={{ background: getCategoryColor(post.category) }}
                />

                <div className="flex flex-col flex-1 p-6 lg:p-8">
                  <div className="mb-4">
                    <CategoryBadge name={post.category} />
                  </div>

                  <h3 className="text-lg lg:text-xl font-bold tracking-tight text-foreground leading-snug mb-3 group-hover:text-accent-muted transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border-light">
                    <div className="flex items-center gap-3 text-xs text-muted-light">
                      <span>{formatDate(post.date)}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{post.readingTime}</span>
                    </div>
                    <span className="text-muted-light group-hover:text-foreground transition-colors">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links for SEO authority distribution ── */}
      <ExploreAll />
    </>
  );
}
