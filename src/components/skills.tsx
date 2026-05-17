"use client";

import { motion } from "framer-motion";
import { skillRows } from "@/lib/skills";
import { SkillsMarquee } from "./skills-marquee";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Skills() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="skills" className="overflow-hidden bg-surface/20 py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          variants={shouldReduce ? undefined : sectionVariants}
          initial={shouldReduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-3 font-mono text-xs font-medium tracking-widest text-muted/60 uppercase"
        >
          02 / Stack
        </motion.p>

        <motion.h2
          variants={shouldReduce ? undefined : sectionVariants}
          initial={shouldReduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-3xl font-bold tracking-tight md:text-4xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          Tools I work with.
        </motion.h2>
      </div>

      <SkillsMarquee rows={skillRows} />

      <div className="mx-auto mt-10 max-w-[1100px] px-6">
        <p className="text-center font-mono text-xs text-muted/50">
          Plus: heavy use of AI tools (Claude, GPT, Copilot) to accelerate
          development.
        </p>
      </div>
    </section>
  );
}
