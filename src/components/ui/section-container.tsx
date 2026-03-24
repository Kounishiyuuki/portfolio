import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  spacing?: "default" | "compact" | "hero";
};

const spacingClasses = {
  default: "py-[var(--section-space)]",
  compact: "py-12 md:py-16",
  hero: "py-16 md:py-24",
} as const;

export function SectionContainer({
  as: Component = "section",
  className,
  children,
  eyebrow,
  title,
  description,
  align = "left",
  spacing = "default",
  ...props
}: SectionContainerProps) {
  return (
    <Component
      className={cn(spacingClasses[spacing], className)}
      {...props}
    >
      {(eyebrow || title || description) && (
        <div
          className={cn(
            "mb-8 flex max-w-prose flex-col gap-4",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow ? (
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="text-balance font-display text-3xl leading-tight md:text-5xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      )}
      <div className="flex flex-col gap-[var(--section-gap)]">{children}</div>
    </Component>
  );
}
