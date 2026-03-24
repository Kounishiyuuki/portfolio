import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  inset?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  tone?: "default" | "muted" | "strong";
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
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "surface-hairline surface-panel rounded-card border border-white/10",
        "supports-[backdrop-filter]:backdrop-blur-chrome",
        paddingClasses[padding],
        toneClasses[tone],
        inset && "glass-muted",
        className
      )}
      {...props}
    />
  );
}
