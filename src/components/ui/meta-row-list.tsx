import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MetaRow = {
  label: ReactNode;
  value: ReactNode;
};

type MetaRowListProps = {
  rows: readonly MetaRow[];
  className?: string;
  rowClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
};

export function MetaRowList({
  rows,
  className,
  rowClassName,
  labelClassName,
  valueClassName,
}: MetaRowListProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {rows.map((row) => (
        <div
          key={`${String(row.label)}-${String(row.value)}`}
          className={cn("border-b border-white/8 pb-3 last:border-b-0 last:pb-0", rowClassName)}
        >
          <p className={cn("text-[10px] tracking-[0.1em] text-muted-foreground", labelClassName)}>
            {row.label}
          </p>
          <p className={cn("mt-1.5 text-[13px] leading-6 text-foreground/84", valueClassName)}>
            {row.value}
          </p>
        </div>
      ))}
    </div>
  );
}
