"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { GitHubIcon } from "./ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

const projectIcons: Record<string, React.ReactNode> = {
  smartsynth: <Zap size={22} />,
  grading: <span className="text-lg">📝</span>,
  evdetection: <span className="text-lg">🎥</span>,
  alqalam: <Globe size={22} />,
  aaassociate: <Globe size={22} />,
  academia: <span className="text-lg">🎓</span>,
  colormatrix: <span className="text-lg">🎨</span>,
  medicalcolorization: <span className="text-lg">🔬</span>,
};

export function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const rotateX = useTransform(mouseY, [-100, 100], shouldReduce ? [0, 0] : [6, -6]);
  const rotateY = useTransform(mouseX, [-100, 100], shouldReduce ? [0, 0] : [-6, 6]);

  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduce) return;
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
      spotX.set(((e.clientX - rect.left) / rect.width) * 100);
      spotY.set(((e.clientY - rect.top) / rect.height) * 100);
    },
    [mouseX, mouseY, spotX, spotY, shouldReduce]
  );

  const onMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    spotX.set(50);
    spotY.set(50);
  }, [mouseX, mouseY, spotX, spotY]);

  const icon = projectIcons[project.id] ?? <Zap size={22} />;

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      style={
        shouldReduce
          ? {}
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }
      }
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/40 backdrop-blur-sm transition-[border-color] duration-300 hover:border-white/[0.18]",
        featured ? "p-7" : "p-5"
      )}
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 55%)",
          backgroundPositionX: spotX,
          backgroundPositionY: spotY,
        }}
      />

      {/* Browser mockup screenshot (live projects only) */}
      {project.isLive && project.image && featured && (
        <div className="mb-5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03]">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.03] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <div className="mx-2 flex h-4 flex-1 items-center rounded-sm border border-white/[0.07] bg-white/[0.04] px-2">
              <span className="truncate font-mono text-[9px] text-muted/40">
                {project.live?.replace("https://", "")}
              </span>
            </div>
          </div>
          {/* Screenshot */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      )}

      {/* LIVE badge */}
      {project.isLive && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-2.5 py-1 text-[11px] font-mono font-medium text-green-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-[pulse-ring_2s_ease-out_infinite] rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
          </span>
          LIVE
        </div>
      )}

      {/* Icon with parallax pop — hidden when browser mockup is shown */}
      {!(project.isLive && project.image && featured) && (
        <motion.div
          className={cn(
            "mb-5 flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-foreground",
            featured ? "h-12 w-12" : "h-10 w-10 text-sm"
          )}
          style={shouldReduce ? {} : { translateZ: 20 }}
        >
          {icon}
        </motion.div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <p className="mb-1 font-mono text-[11px] font-medium tracking-wider text-muted/50 uppercase">
          {project.tagline}
        </p>
        <h3
          className={cn(
            "mb-3 font-bold tracking-tight",
            featured ? "text-xl" : "text-base"
          )}
          style={{ letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>

        {featured && (
          <p className="mb-5 flex-1 text-sm leading-[1.65] text-muted">
            {project.description}
          </p>
        )}

        {/* Stack */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-muted/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:text-foreground"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon size={13} />
              <span className="relative">
                GitHub
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover/link:scale-x-100" />
              </span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:text-foreground"
              aria-label={`Visit live site for ${project.title}`}
            >
              <ExternalLink size={13} />
              <span className="relative">
                Live Site
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover/link:scale-x-100" />
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
