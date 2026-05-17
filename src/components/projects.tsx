"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Projects() {
  const shouldReduce = useReducedMotion();
  const featuredProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-[1100px] px-6 py-28">
      {/* Section label */}
      <motion.p
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-3 font-mono text-xs font-medium tracking-widest text-muted/60 uppercase"
      >
        01 / Work
      </motion.p>

      <motion.h2
        variants={shouldReduce ? undefined : sectionVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14 text-3xl font-bold tracking-tight md:text-4xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        Selected Projects
      </motion.h2>

      {/* Featured grid */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured
            index={i}
          />
        ))}
      </div>

      {/* Additional projects */}
      {additionalProjects.length > 0 && (
        <>
          <motion.p
            variants={shouldReduce ? undefined : sectionVariants}
            initial={shouldReduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-5 font-mono text-[11px] font-medium tracking-widest text-muted/50 uppercase"
          >
            More work
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {additionalProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={false}
                index={i}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
