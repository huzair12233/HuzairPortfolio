"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  as?: "button" | "a" | "div";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  as = "button",
  disabled,
  type = "button",
}: MagneticButtonProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.25);

  const motionProps = {
    style: { x, y },
    onMouseMove,
    onMouseLeave,
    className,
  };

  if (as === "a" || href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...motionProps}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      {...motionProps}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticWrapper({ children, className }: MagneticWrapperProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.2);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
}
