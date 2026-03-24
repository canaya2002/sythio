import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-base text-muted leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="h-11 px-6 inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium hover:bg-accent-muted transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="h-11 px-6 inline-flex items-center justify-center rounded-full border border-border text-sm font-medium text-foreground hover:bg-background transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
