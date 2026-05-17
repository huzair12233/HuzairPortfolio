"use client";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-8">
        <p className="font-mono text-xs text-muted/50">
          © 2026 Ansari Huzair · Built from scratch with Next.js
        </p>
        <a
          href="#"
          onClick={scrollToTop}
          className="group relative font-mono text-xs text-muted/50 transition-colors duration-200 hover:text-foreground"
        >
          ↑ Back to top
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
        </a>
      </div>
    </footer>
  );
}
