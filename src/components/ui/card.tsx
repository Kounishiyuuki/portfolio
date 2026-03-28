"use client";

import type { HTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";
import { getCardHoverFeedback } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CardDomProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

type CardProps = CardDomProps & {
  inset?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  tone?: "default" | "muted" | "strong";
  interactive?: boolean;
};

const paddingClasses = {
  none: "",
  sm: "p-4 md:p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
} as const;

const toneClasses = {
  default: "bg-surface/84",
  muted: "bg-surface/68",
  strong: "bg-surface-strong/90",
} as const;

export function Card({
  className,
  inset = false,
  padding = "md",
  tone = "default",
  interactive = true,
  ...props
}: CardProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const feedback = getCardHoverFeedback(prefersReducedMotion, interactive);

  return (
    <motion.div
      initial={false}
      animate={feedback.rest}
      whileHover={interactive ? feedback.hover : undefined}
      transition={feedback.transition}
      className={cn(
        "surface-hairline surface-panel rounded-card border border-line/80",
        "supports-[backdrop-filter]:backdrop-blur-chrome",
        "transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out",
        !prefersReducedMotion &&
          interactive &&
          "hover:border-line-strong/90 hover:shadow-[0_22px_55px_rgba(27,44,74,0.12)]",
        paddingClasses[padding],
        toneClasses[tone],
        inset && "glass-muted",
        className
      )}
      {...props}
    />
  );
}
