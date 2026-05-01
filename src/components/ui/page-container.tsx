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
        "layout-shell mx-auto flex w-full flex-col",
        bleed ? "px-0" : "px-[var(--container-padding)]",
        className
      )}
      {...props}
    />
  );
}
