import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-[10px] tracking-[0.1em] text-muted-foreground",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <h2
          className={cn(
            "font-display text-[2rem] leading-[1.35] tracking-[-0.02em] text-foreground",
            titleClassName
          )}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={cn(
            "text-sm leading-7 text-muted-foreground",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
