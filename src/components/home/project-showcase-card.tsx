import { ArrowRight } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { InternalLink } from "@/components/ui/internal-link";
import { cn } from "@/lib/utils";

type ProjectShowcaseCardProps = {
  title: string;
  category: string;
  kind: "自主制作" | "UI study" | "コンセプト案";
  description: string;
  focus: string;
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

const bodySpacingClasses = {
  featured: "space-y-4.5 px-5 py-5 md:px-6 md:py-6",
  default: "space-y-4 px-5 py-5 md:px-6 md:py-6",
  wide: "space-y-4.5 px-5 py-5 md:px-6 md:py-6",
} as const;

export function ProjectShowcaseCard({
  title,
  category,
  kind,
  description,
  focus,
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
        className={cn(
          "group overflow-hidden rounded-[1.6rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(248,250,253,0.72))] shadow-[0_10px_28px_rgba(27,44,74,0.08)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-line-strong/95 hover:shadow-[0_18px_38px_rgba(27,44,74,0.12)]",
          layout === "featured" && "shadow-[0_14px_34px_rgba(27,44,74,0.1)] hover:shadow-[0_22px_44px_rgba(27,44,74,0.14)]"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden border-b border-white/10 bg-gradient-to-br transition-[border-color,box-shadow] duration-300 group-hover:border-white/12",
            accent,
            mediaClasses[layout]
          )}
        >
          <div className="absolute left-4 top-4 z-[2] flex items-center gap-2">
            <span className="rounded-pill border border-white/14 bg-white/88 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-foreground/76 shadow-[0_10px_24px_rgba(27,44,74,0.08)]">
              {kind}
            </span>
            <span className="rounded-pill border border-white/12 bg-white/[0.16] px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] text-foreground/72 backdrop-blur-md">
              {category}
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(6,10,18,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-[16%] top-5 z-[1] h-12 rounded-full bg-white/[0.08] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          <ProjectVisual type={visual} />
        </div>

        <div className={bodySpacingClasses[layout]}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
              採用担当向けに確認しやすい制作
            </p>
            <InternalLink
              href={href}
              aria-label={`${title} の詳細を見る`}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.03em] text-accent/90 transition-colors duration-200 hover:text-accent"
            >
              制作を見る
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </InternalLink>
          </div>

          <div className="space-y-2.5">
            <h3
              className={cn(
                "font-semibold leading-[1.5] tracking-[-0.015em] text-foreground",
                layout === "featured"
                  ? "text-[1.45rem] md:min-h-[4.4rem] md:text-[1.72rem]"
                  : "text-[1.28rem] md:min-h-[4.2rem] md:text-[1.4rem]"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "max-w-[26rem] text-sm leading-[1.9] text-muted-foreground",
                layout === "featured" ? "md:min-h-[5.6rem]" : "md:min-h-[5.25rem]"
              )}
            >
              {description}
            </p>
            <div className="rounded-[1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-3.5 py-3">
              <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                見るポイント
              </p>
              <p className="mt-1.5 text-[12px] leading-[1.75] text-foreground/74">
                {focus}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
}

function ProjectVisual({ type }: { type: ProjectShowcaseCardProps["visual"] }) {
  if (type === "server") {
    return (
      <div className="absolute inset-0 flex items-end gap-3 px-5 pb-5 transition-transform duration-500 group-hover:scale-[1.03]">
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
      <div className="absolute inset-0 p-6 transition-transform duration-500 group-hover:scale-[1.03]">
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
      <div className="absolute inset-0 overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 shadow-[0_0_42px_rgba(120,180,255,0.12)] transition-shadow duration-300 group-hover:shadow-[0_0_48px_rgba(120,180,255,0.14)]" />
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 border-t border-white/10" />
        <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 border-l border-white/8" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 p-5 transition-transform duration-500 group-hover:scale-[1.03]">
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
