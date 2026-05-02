import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

const sizeClasses = {
  default: "layout-shell",
  wide: "layout-shell-wide",
  narrow: "layout-reading",
} as const;

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--container-padding)]",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
