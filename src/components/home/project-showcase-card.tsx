import Image from "next/image";
import { ArrowRight } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { InternalLink } from "@/components/ui/internal-link";
import { ProjectAppIcon } from "@/components/projects/project-app-icon";
import type { ProjectItem } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

type ProjectShowcaseCardProps = ProjectItem & {
  ctaAriaLabel?: string;
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
  coverImage,
  coverAlt,
  appIcon,
  showcase,
  ctaLabel = "制作を見る",
  ctaAriaLabel,
  href = "/projects",
  className,
}: ProjectShowcaseCardProps) {
  if (!showcase) {
    return null;
  }

  const {
    eyebrow = "見やすく整理した制作",
    accent,
    visual,
    layout = "default",
    className: showcaseClassName,
  } = showcase;

  return (
    <article className={cn("min-w-0", showcaseClassName, className)}>
      <Card
        padding="none"
        tone="default"
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-[1.6rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,248,249,0.76))] shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-line-strong/95 hover:shadow-[0_18px_42px_rgba(0,0,0,0.12)]",
          layout === "featured" && "shadow-[0_14px_34px_rgba(0,0,0,0.1)] hover:shadow-[0_22px_44px_rgba(0,0,0,0.14)]"
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
            <span className="rounded-pill border border-white/14 bg-white/88 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-foreground/76 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
              {kind}
            </span>
            <span className="rounded-pill border border-white/12 bg-white/[0.16] px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] text-foreground/72 backdrop-blur-md">
              {category}
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(6,10,18,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-[16%] top-5 z-[1] h-12 rounded-full bg-white/[0.08] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          {coverImage ? (
            <ProjectShowcaseCover src={coverImage} alt={coverAlt} />
          ) : (
            <>
              <ProjectVisual type={visual} />
              {appIcon ? (
                <div className="absolute inset-0 z-[1] flex items-center justify-center p-6">
                  <ProjectAppIcon
                    icon={appIcon}
                    className="size-24 rounded-[1.45rem] md:size-[7.5rem]"
                    sizes="(min-width: 768px) 7.5rem, 6rem"
                  />
                </div>
              ) : null}
            </>
          )}
        </div>

        <div className={cn("flex flex-1 flex-col justify-between min-w-0", bodySpacingClasses[layout])}>
          <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
              {eyebrow}
            </p>
            <InternalLink
              href={href}
              aria-label={ctaAriaLabel ?? `${title} - ${ctaLabel}`}
              className="inline-flex max-w-full items-center gap-1.5 text-[12px] font-semibold tracking-[0.03em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {ctaLabel}
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </InternalLink>
          </div>

          <div className="min-w-0 space-y-2.5">
            <h3
              className={cn(
                "ui-card-title max-w-[min(100%,28ch)] text-foreground",
                layout === "featured"
                  ? "md:text-[clamp(1.38rem,1.5vw,1.72rem)] lg:min-h-[4.4rem]"
                  : "md:text-[clamp(1.22rem,1.15vw,1.4rem)] lg:min-h-[4.2rem]"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "ui-body-sm max-w-[44rem] text-muted-foreground",
                layout === "featured" ? "lg:min-h-[5.6rem]" : "lg:min-h-[5.25rem]"
              )}
            >
              {description}
            </p>
            <div className="rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.06))] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]">
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

function ProjectShowcaseCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-[1.02] md:p-5">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/55 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_18px_34px_rgba(0,0,0,0.12)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 45vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-contain p-2.5 drop-shadow-[0_16px_24px_rgba(0,0,0,0.16)] md:p-3"
        />
      </div>
    </div>
  );
}

function ProjectVisual({
  type,
}: {
  type: NonNullable<ProjectItem["showcase"]>["visual"];
}) {
  if (type === "server") {
    return (
      <div className="absolute inset-0 flex items-end gap-3 px-5 pb-5 transition-transform duration-500 group-hover:scale-[1.03]">
        {[0, 1, 2, 3, 4].map((column) => (
          <div
            key={column}
            className="flex h-full flex-1 flex-col justify-between rounded-[1rem] border border-white/10 bg-neutral-950/50 p-3"
          >
            {[0, 1, 2, 3, 4, 5].map((slot) => (
              <span
                key={slot}
                className={cn(
                  "h-1.5 rounded-full",
                  slot % 2 === 0 ? "bg-white/38" : "bg-white/10"
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
        <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-white/10 bg-neutral-950/40">
          <div className="relative aspect-square w-40 rounded-[1.6rem] border border-white/20 bg-neutral-900/70 shadow-2xl">
            <div className="absolute inset-5 rounded-[1rem] border border-white/15 bg-white/5" />
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
        <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 shadow-[0_0_42px_rgba(134,134,139,0.12)] transition-shadow duration-300 group-hover:shadow-[0_0_48px_rgba(134,134,139,0.14)]" />
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
