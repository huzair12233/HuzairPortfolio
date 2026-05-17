import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 font-mono text-xs text-muted/60 uppercase tracking-widest">
        404
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight" style={{ letterSpacing: "-0.03em" }}>
        Page not found.
      </h1>
      <p className="mb-8 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-80"
      >
        Back to home
      </Link>
    </div>
  );
}
