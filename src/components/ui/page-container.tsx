import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  bleed?: boolean;
};

export function PageContainer({
  className,
  bleed = false,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-container flex-col",
        bleed ? "px-0" : "px-[var(--container-padding)]",
        className
      )}
      {...props}
    />
  );
}
