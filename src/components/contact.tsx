"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, Copy, Check } from "lucide-react";
import { MagneticWrapper } from "./magnetic-button";
import { GitHubIcon, LinkedInIcon } from "./ui/icons";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const EMAIL = "ansari.huzair12233@gmail.com";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const shouldReduce = useReducedMotion();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="relative mb-10">
      <button
        onClick={handleCopy}
        className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-surface/40 px-6 py-4 text-left transition-all duration-200 hover:border-white/[0.15] hover:bg-surface/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label="Copy email address"
      >
        <span className="font-mono text-sm text-foreground sm:text-base">
          {EMAIL}
        </span>
        <span className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.04] text-muted transition-all duration-200 group-hover:border-white/[0.12] group-hover:text-foreground">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </span>
      </button>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute -bottom-10 left-0 rounded-full border border-white/[0.08] bg-surface/90 px-4 py-1.5 font-mono text-xs text-foreground backdrop-blur-sm"
          >
            Copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Contact() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-6 py-28">
      <motion.p
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-3 font-mono text-xs font-medium tracking-widest text-muted/60 uppercase"
      >
        04 / Contact
      </motion.p>

      <motion.h2
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        Let&apos;s build something.
      </motion.h2>

      <motion.p
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 max-w-[480px] text-[17px] leading-[1.65] text-muted"
      >
        I&apos;m open to ML/AI Engineer, Full-Stack, and Software Engineer roles,
        plus interesting freelance work.
      </motion.p>

      <motion.div
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <CopyEmailButton />

        {/* Buttons row */}
        <div className="flex flex-wrap gap-3">
          <MagneticWrapper>
            <a
              href="https://github.com/huzair12233"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-white/20 hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <GitHubIcon size={15} />
              GitHub
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href="https://linkedin.com/in/ansari-huzair-787112240"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-white/20 hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href="/Ansari_Huzair_Resume.pdf"
              download="Ansari_Huzair_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-white/20 hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Download size={15} />
              Download Resume
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Mail size={15} />
              Send Email
            </a>
          </MagneticWrapper>
        </div>

        <p className="mt-8 font-mono text-xs text-muted/50">
          Mumbai, India · Available immediately
        </p>
      </motion.div>
    </section>
  );
}
