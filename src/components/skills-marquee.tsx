"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MarqueeRowProps {
  skills: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}

function MarqueeRow({
  skills,
  direction = "left",
  duration = 40,
  className,
}: MarqueeRowProps) {
  const [paused, setPaused] = useState(false);
  const shouldReduce = useReducedMotion();

  const doubled = [...skills, ...skills];

  if (shouldReduce) {
    return (
      <div className={cn("flex flex-wrap gap-2.5", className)}>
        {skills.map((skill, i) => (
          <SkillChip key={i} label={skill} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={cn(
          "flex w-max gap-2.5",
          direction === "right" ? "animate-marquee-right" : "animate-marquee"
        )}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((skill, i) => (
          <SkillChip key={i} label={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ label }: { label: string }) {
  return (
    <span className="group inline-flex cursor-default items-center whitespace-nowrap rounded-full border border-white/[0.08] bg-surface/40 px-4 py-2 font-mono text-xs text-muted transition-all duration-200 hover:scale-105 hover:border-violet-500/40 hover:text-foreground">
      {label}
    </span>
  );
}

interface SkillsMarqueeProps {
  rows: string[][];
}

export function SkillsMarquee({ rows }: SkillsMarqueeProps) {
  return (
    <div className="space-y-3">
      <MarqueeRow skills={rows[0]} direction="left" duration={40} />
      <MarqueeRow skills={rows[1]} direction="right" duration={50} />
      <MarqueeRow skills={rows[2]} direction="left" duration={45} />
    </div>
  );
}
