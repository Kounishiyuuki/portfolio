import { ArrowRight } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectShowcaseCardProps = {
  title: string;
  category: string;
  description: string;
  accent: string;
  visual: "server" | "chip" | "orb" | "canvas";
  href?: string;
  layout?: "featured" | "default" | "wide";
  className?: string;
};

const mediaClasses = {
  featured: "aspect-[1.55/1] md:aspect-[1.68/1]",
  default: "aspect-[1/1]",
  wide: "aspect-[1.8/1] md:aspect-[2.1/1]",
} as const;

export function ProjectShowcaseCard({
  title,
  category,
  description,
  accent,
  visual,
  href = "/projects",
  layout = "default",
  className,
}: ProjectShowcaseCardProps) {
  return (
    <article className={className}>
      <Card
        padding="none"
        tone="default"
        className="group overflow-hidden rounded-[1.6rem] border-white/10"
      >
        <div
          className={cn(
            "relative overflow-hidden border-b border-white/10 bg-gradient-to-br",
            accent,
            mediaClasses[layout]
          )}
        >
          <ProjectVisual type={visual} />
        </div>

        <div className="space-y-4 px-5 py-5 md:px-6 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/90" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {category}
              </p>
            </div>
            <a
              href={href}
              aria-label={`${title} details`}
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/90"
            >
              Details
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="space-y-2.5">
            <h3 className="text-[1.3rem] font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[1.45rem]">
              {title}
            </h3>
            <p className="max-w-[34rem] text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </article>
  );
}

function ProjectVisual({ type }: { type: ProjectShowcaseCardProps["visual"] }) {
  if (type === "server") {
    return (
      <div className="absolute inset-0 flex items-end gap-3 px-5 pb-5">
        {[0, 1, 2, 3, 4].map((column) => (
          <div
            key={column}
            className="flex h-full flex-1 flex-col justify-between rounded-[1rem] border border-cyan-300/10 bg-slate-950/50 p-3"
          >
            {[0, 1, 2, 3, 4, 5].map((slot) => (
              <span
                key={slot}
                className={cn(
                  "h-1.5 rounded-full",
                  slot % 2 === 0 ? "bg-cyan-300/45" : "bg-white/10"
                )}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (type === "chip") {
    return (
      <div className="absolute inset-0 p-6">
        <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-cyan-200/10 bg-slate-950/40">
          <div className="relative aspect-square w-40 rounded-[1.6rem] border border-cyan-300/20 bg-slate-900/70 shadow-2xl">
            <div className="absolute inset-5 rounded-[1rem] border border-cyan-200/15 bg-cyan-300/5" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
            <div className="absolute top-1/2 w-full -translate-y-1/2 border-t border-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "orb") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 shadow-[0_0_80px_rgba(120,180,255,0.22)]" />
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 border-t border-white/10" />
        <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 border-l border-white/8" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 p-5">
      <div className="grid h-full grid-cols-[1.2fr_0.8fr] gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
        <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.04]" />
        <div className="space-y-3">
          <div className="h-10 rounded-[0.9rem] border border-white/8 bg-white/[0.06]" />
          <div className="h-20 rounded-[0.9rem] border border-white/8 bg-white/[0.04]" />
          <div className="h-16 rounded-[0.9rem] border border-white/8 bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}
