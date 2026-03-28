import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InfoChipProps = HTMLAttributes<HTMLSpanElement>;

export function InfoChip({ className, ...props }: InfoChipProps) {
  return (
    <span
      className={cn(
        "rounded-pill border border-white/10 bg-white/[0.04] px-3 py-1.5",
        "text-[10px] tracking-[0.08em] text-foreground/72",
        className
      )}
      {...props}
    />
  );
}
