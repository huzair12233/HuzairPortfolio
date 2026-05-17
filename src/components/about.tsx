"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const quickFacts = [
  { value: 6, suffix: "+", label: "projects shipped" },
  { value: 4, suffix: "", label: "languages spoken" },
  { value: 2, suffix: "", label: "live client deployments" },
];

export function About() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="mx-auto max-w-[1100px] px-6 py-28">
      {/* Section label */}
      <motion.p
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-3 font-mono text-xs font-medium tracking-widest text-muted/60 uppercase"
      >
        About
      </motion.p>

      <motion.h2
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14 text-3xl font-bold tracking-tight md:text-4xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        The slightly longer version.
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left — bio */}
        <motion.div
          variants={shouldReduce ? undefined : sectionVariants}
          initial={shouldReduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-5 text-[17px] leading-[1.7] text-muted"
        >
          <p>
            I&apos;m a final-year CS student with a slightly unusual path —
            pursuing both a B.Tech at JNTU Hyderabad and a BSc in Programming
            and Data Science at IIT Madras simultaneously. The dual track lets
            me move between pure ML/data work and shipping real applications.
          </p>
          <p>
            My strongest interest is the intersection of AI and product — using
            LLMs, computer vision, and ML models to build tools people actually
            use. I&apos;ve built a synthetic data generator using SDV and Gemini, an
            automated grading system that reads handwritten exams, and live
            deployed websites for real clients. I prototype fast, use AI tools
            heavily to accelerate my workflow, and care about shipping over
            perfecting.
          </p>
          <p>
            Outside code: chess, gaming, and reading about how AI agents are
            about to change everything.
          </p>
        </motion.div>

        {/* Right — quick facts card */}
        <motion.div
          variants={shouldReduce ? undefined : sectionVariants}
          initial={shouldReduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="rounded-2xl border border-white/[0.08] bg-surface/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-sm font-semibold tracking-wide text-muted/70 uppercase font-mono">
              Quick Facts
            </h3>

            {/* Counters */}
            <div className="mb-6 space-y-4">
              {quickFacts.map(({ value, suffix, label }) => (
                <div key={label} className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold tabular-nums tracking-tight">
                    <AnimatedCounter value={value} suffix={suffix} />
                  </span>
                  <span className="text-sm text-muted">{label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-6 h-px bg-white/[0.06]" />

            {/* Location + Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-muted">
                <MapPin size={14} className="shrink-0 text-muted/50" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-muted">
                <GraduationCap size={14} className="mt-0.5 shrink-0 text-muted/50" />
                <div className="space-y-0.5">
                  <p>IIT Madras — BSc Prog. & Data Science</p>
                  <p>JNTU Hyderabad — B.Tech CSE</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
