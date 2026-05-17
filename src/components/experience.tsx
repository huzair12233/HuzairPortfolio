"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ExperienceItem {
  title: string;
  year: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Freelance Web Developer",
    year: "2025",
    description:
      "Built and deployed alqalamieschool.com and aaassociate.vercel.app for real clients. Full ownership: design, development, deployment.",
  },
  {
    title: "Freelance Developer — Dubai Client",
    year: "Mar – Apr 2024",
    description:
      "Built an Excel-based inventory management system for an aviation parts supplier. Automated stock tracking with formula-driven logic.",
  },
  {
    title: "Freelance Developer",
    year: "Aug – Oct 2021",
    description:
      "Created a landing page for a local education business. First freelance project — got me hooked on shipping.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Experience() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="experience" className="mx-auto max-w-[1100px] px-6 py-28">
      <motion.p
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-3 font-mono text-xs font-medium tracking-widest text-muted/60 uppercase"
      >
        03 / Experience
      </motion.p>

      <motion.h2
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14 text-3xl font-bold tracking-tight md:text-4xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        Where I&apos;ve shipped.
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-white/[0.06] sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={shouldReduce ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: EASE,
                delay: i * 0.1,
              }}
              className="relative sm:pl-8"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 -translate-x-[3px] rounded-full border border-white/[0.12] bg-surface sm:block" />

              <div className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <span className="font-mono text-xs text-muted/50">
                    {exp.year}
                  </span>
                </div>
                <p className="text-[15px] leading-[1.65] text-muted">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
