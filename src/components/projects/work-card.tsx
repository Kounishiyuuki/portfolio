import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { InternalLink } from "@/components/ui/internal-link";
import type { ProjectItem } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export type WorkCardProps = ProjectItem & {
  ctaLabel?: string;
  ctaAriaLabel?: string;
};

export function WorkCard({
  title,
  category,
  kind,
  year,
  description,
  focus,
  tags,
  techStack,
  highlightPoints,
  visual,
  coverImage,
  coverAlt,
  featured = false,
  href = "/projects",
  ctaLabel = "制作詳細を見る",
  ctaAriaLabel,
  githubUrl,
  githubLabel = "GitHubを見る",
}: WorkCardProps) {
  return (
    <div className="h-full">
      <Card
        padding="none"
        tone="muted"
        className="group h-full overflow-hidden rounded-[1.55rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,250,253,0.82))] shadow-[0_12px_30px_rgba(27,44,74,0.08)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-line-strong/95 hover:shadow-[0_20px_42px_rgba(27,44,74,0.12)]"
      >
        <div className="p-3 pb-0 md:p-4 md:pb-0">
          <div
            className={cn(
              "relative overflow-hidden rounded-[1.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] transition-[border-color,box-shadow,transform] duration-300 group-hover:border-white/12 group-hover:shadow-[0_16px_34px_rgba(27,44,74,0.14)]",
              featured ? "aspect-[1.22/1] md:aspect-[1.32/1]" : "aspect-[1.12/1]"
            )}
          >
            <div className="absolute left-4 top-4 z-[2] flex items-center gap-2">
              {featured ? (
                <span className="rounded-pill border border-accent/18 bg-accent/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.05em] text-accent-foreground shadow-[0_10px_24px_rgba(88,148,255,0.16)]">
                  注目
                </span>
              ) : null}
              <span className="rounded-pill border border-white/14 bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-foreground/74 shadow-[0_10px_24px_rgba(27,44,74,0.08)]">
                {kind}
              </span>
              <span className="rounded-pill border border-white/12 bg-white/[0.16] px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] text-foreground/72 backdrop-blur-md">
                {category}
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(15,22,35,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-[16%] top-4 z-[1] h-12 rounded-full bg-white/[0.08] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            {coverImage ? (
              <ProjectCover src={coverImage} alt={coverAlt} />
            ) : (
              <WorkVisual type={visual} />
            )}
          </div>
        </div>

        <div className="flex min-h-[18.4rem] min-w-0 flex-col px-4 py-4 md:px-5 md:py-5">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
              制作の概要
            </p>
            <p className="text-[10px] tracking-[0.08em] text-muted-foreground">
              {year}
            </p>
          </div>

          <div className="mt-3 min-w-0 space-y-3">
            <h2 className="ui-card-title layout-title-card text-foreground md:text-[clamp(1.1rem,0.9vw,1.24rem)] xl:min-h-[3.9rem]">
              {title}
            </h2>
            <p className="ui-body-sm layout-card-copy text-muted-foreground xl:min-h-[4.85rem] md:text-[13px]">
              {description}
            </p>
          </div>

          <div className="mt-4 space-y-3.5">
            <InfoBlock
              label="見てほしいポイント"
              summary={focus}
              items={highlightPoints}
              tone="accent"
            />
            <InfoBlock
              label="使用技術"
              items={techStack}
            />
          </div>

          <div className="mt-auto space-y-3 pt-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.04em] text-foreground/58">
              {tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-foreground/18" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            <div className="space-y-3 border-t border-line/65 pt-3">
              <span className="block text-[10px] tracking-[0.06em] text-muted-foreground">
                技術と確認先をまとめています
              </span>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                {githubUrl ? (
                  <Button
                    href={githubUrl}
                    variant="secondary"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 sm:min-w-[8.9rem] lg:flex-none"
                  >
                    {githubLabel}
                  </Button>
                ) : null}
                <InternalLink
                  href={href}
                  aria-label={ctaAriaLabel ?? `${title} - ${ctaLabel}`}
                  className="inline-flex w-full justify-center sm:flex-1 lg:w-auto lg:flex-none min-h-11 items-center gap-1.5 rounded-pill border border-line/75 bg-white/78 px-4 text-[11px] font-semibold tracking-[0.04em] text-accent/90 transition-[border-color,color,background-color,box-shadow] duration-200 hover:border-line-strong/90 hover:bg-white hover:text-accent"
                >
                  {ctaLabel}
                  <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </InternalLink>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function InfoBlock({
  label,
  items,
  summary,
  tone = "default",
}: {
  label: string;
  items: readonly string[];
  summary?: string;
  tone?: "default" | "accent";
}) {
  return (
    <div
      className={[
        "rounded-[1rem] border px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]",
        tone === "accent"
          ? "border-accent/12 bg-[linear-gradient(180deg,rgba(247,251,255,0.92),rgba(241,247,255,0.62))]"
          : "border-line/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,250,253,0.48))]",
      ].join(" ")}
    >
      <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
        {label}
      </p>
      {summary ? (
        <p className="mt-1.5 text-[12px] leading-[1.75] text-foreground/74">
          {summary}
        </p>
      ) : null}
      <div className="mt-2.5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={[
              "inline-flex items-center rounded-pill border px-2.5 py-1 text-[10px] tracking-[0.04em]",
              tone === "accent"
                ? "border-accent/12 bg-white/72 text-foreground/76"
                : "border-line/65 bg-white/72 text-foreground/68",
            ].join(" ")}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(247,250,253,0.94),rgba(229,238,251,0.76))] p-3.5 transition-transform duration-500 group-hover:scale-[1.02] md:p-4">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1rem] border border-white/70 bg-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_18px_34px_rgba(27,44,74,0.12)]">
        <div
          aria-hidden="true"
          className="absolute inset-x-[12%] top-[10%] h-16 rounded-full bg-accent/10 blur-2xl"
        />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="relative z-[1] max-h-full max-w-full object-contain p-2.5 drop-shadow-[0_16px_24px_rgba(27,44,74,0.16)] md:p-3"
        />
      </div>
    </div>
  );
}

function WorkVisual({ type }: { type: WorkCardProps["visual"] }) {
  if (type === "figure") {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_18%,rgba(255,255,255,0.12),transparent_24%)] transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="absolute left-1/2 top-[18%] h-24 w-20 -translate-x-1/2 rounded-full bg-white/[0.1] blur-[2px] transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute left-1/2 top-[30%] h-44 w-28 -translate-x-1/2 rounded-t-[4rem] rounded-b-[1.4rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.04))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(8,12,19,0),rgba(8,12,19,0.72))]" />
      </div>
    );
  }

  if (type === "vessel") {
    return (
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="absolute left-1/2 top-1/2 h-40 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/14" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />
        <div className="absolute inset-x-[18%] bottom-7 h-px bg-white/10" />
      </div>
    );
  }

  if (type === "mesh") {
    return (
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6"
            style={{ transform: `translate(-50%, -50%) scale(${0.72 + item * 0.07})` }}
          />
        ))}
      </div>
    );
  }

  if (type === "crest") {
    return (
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="relative h-36 w-44">
          <div className="absolute inset-x-1/2 top-0 h-20 w-16 -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.05))] [clip-path:polygon(50%_0%,100%_100%,0%_100%)]" />
          <div className="absolute inset-y-10 left-0 w-24 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] [clip-path:polygon(0_24%,100%_0,70%_100%,0_100%)]" />
          <div className="absolute inset-y-10 right-0 w-24 bg-[linear-gradient(225deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] [clip-path:polygon(100%_24%,0_0,30%_100%,100%_100%)]" />
        </div>
      </div>
    );
  }

  if (type === "ring") {
    return (
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="relative h-56 w-56 rounded-full border border-white/10">
          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/8"
              style={{
                width: `${7 + item * 1.8}rem`,
                height: `${7 + item * 1.8}rem`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_26%)] transition-transform duration-500 group-hover:scale-[1.03]">
      <div className="absolute left-1/2 top-[16%] h-28 w-24 -translate-x-1/2 rounded-full bg-white/[0.12]" />
      <div className="absolute left-1/2 top-[34%] h-48 w-36 -translate-x-1/2 rounded-t-[5rem] rounded-b-[1.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(8,12,19,0),rgba(8,12,19,0.74))]" />
    </div>
  );
}
