"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { MagneticWrapper } from "./magnetic-button";
import { GitHubIcon, LinkedInIcon } from "./ui/icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group relative text-sm text-muted transition-colors duration-200 hover:text-foreground"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group relative font-sans text-sm font-semibold tracking-tight text-foreground"
          aria-label="Ansari Huzair — home"
        >
          <span className="transition-all duration-300 group-hover:opacity-0">
            Huzair
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
            Huzair
          </span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <MagneticWrapper>
            <a
              href="https://github.com/huzair12233"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-surface/50 text-muted transition-all duration-200 hover:border-white/20 hover:text-foreground"
            >
              <GitHubIcon size={15} />
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href="https://linkedin.com/in/ansari-huzair-787112240"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-surface/50 text-muted transition-all duration-200 hover:border-white/20 hover:text-foreground"
            >
              <LinkedInIcon size={15} />
            </a>
          </MagneticWrapper>

          <ThemeToggle />

          <MagneticWrapper>
            <a
              href="/Ansari_Huzair_Resume.pdf"
              download="Ansari_Huzair_Resume.pdf"
              className="hidden rounded-full border border-white/10 bg-foreground px-4 py-2 text-xs font-medium text-background transition-all duration-200 hover:border-white/20 hover:opacity-90 sm:inline-flex items-center"
            >
              Resume
            </a>
          </MagneticWrapper>
        </div>
      </nav>
    </motion.header>
  );
}
