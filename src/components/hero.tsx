"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AuroraBackground } from "./aurora-background";
import { MagneticWrapper } from "./magnetic-button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const headline = ["Hi,", "I'm", "Huzair", "—"];
const subheadline = "I build AI-powered apps and full-stack platforms.";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const shouldReduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  const gradientPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      <AuroraBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* Status pill */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-[pulse-ring_2s_ease-out_infinite] rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="font-mono text-xs text-muted">
            Open to work — ML / AI / Full-Stack roles
          </span>
        </motion.div>

        {/* Headline word-by-word */}
        <motion.h1
          className="mb-4 flex flex-wrap gap-x-[0.3em] font-sans font-bold tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
          variants={shouldReduce ? undefined : containerVariants}
          initial={shouldReduce ? false : "hidden"}
          animate="show"
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              variants={shouldReduce ? undefined : wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-headline with scroll-driven gradient */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
          className="mb-6 max-w-[680px] font-sans font-semibold"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          <motion.span
            className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
            style={{
              backgroundPositionX: shouldReduce ? "0%" : gradientPosition,
              backgroundSize: "200%",
            }}
          >
            {subheadline}
          </motion.span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
          className="mb-10 max-w-[620px] text-[17px] leading-[1.6] text-muted"
        >
          CS graduate with dual degrees from JNTUH and IIT Madras(Foundation). I specialize
          in shipping end-to-end ML applications, generative AI tools, and
          modern web platforms — from synthetic data generators to live client
          websites.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.95 }}
          className="mb-12 flex flex-wrap gap-4"
        >
          <MagneticWrapper>
            <button
              onClick={scrollToProjects}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View Projects
            </button>
          </MagneticWrapper>

          <MagneticWrapper>
            <button
              onClick={scrollToContact}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-white/30 hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Get in Touch
            </button>
          </MagneticWrapper>
        </motion.div>

        {/* Exploring line */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
          className="font-mono text-xs text-muted/60"
        >
          Currently exploring: LangChain · RAG · MLOps · Next.js
        </motion.p>
      </div>

      {/* Scroll cue */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={shouldReduce ? {} : { y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={18} className="text-muted/50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
