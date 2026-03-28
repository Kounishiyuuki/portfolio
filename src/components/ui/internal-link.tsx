import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type InternalLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  children: ReactNode;
  className?: string;
};

export function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function InternalLink({ children, className, ...props }: InternalLinkProps) {
  return (
    <Link
      className={cn(
        "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
