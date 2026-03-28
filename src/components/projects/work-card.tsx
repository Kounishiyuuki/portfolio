import { ArrowRight } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { InternalLink } from "@/components/ui/internal-link";

export type WorkCardProps = {
  title: string;
  category: string;
  kind: "自主制作" | "UI study" | "コンセプト案";
  year: string;
  description: string;
  focus: string;
  tags: readonly string[];
  visual: "figure" | "vessel" | "mesh" | "crest" | "ring" | "portrait";
  href?: string;
};

export function WorkCard({
  title,
  category,
  kind,
  year,
  description,
  focus,
  tags,
  visual,
  href = "/projects",
}: WorkCardProps) {
  return (
    <div className="h-full">
      <Card
        padding="none"
        tone="muted"
        className="group h-full overflow-hidden rounded-[1.55rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,253,0.78))] shadow-[0_12px_30px_rgba(27,44,74,0.08)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-line-strong/95 hover:shadow-[0_20px_42px_rgba(27,44,74,0.12)]"
      >
        <div className="p-3 pb-0 md:p-4 md:pb-0">
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-[1.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] transition-[border-color,box-shadow,transform] duration-300 group-hover:border-white/12 group-hover:shadow-[0_16px_34px_rgba(27,44,74,0.14)]">
            <div className="absolute left-4 top-4 z-[2] flex items-center gap-2">
              <span className="rounded-pill border border-white/14 bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-foreground/74 shadow-[0_10px_24px_rgba(27,44,74,0.08)]">
                {kind}
              </span>
              <span className="rounded-pill border border-white/12 bg-white/[0.16] px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] text-foreground/72 backdrop-blur-md">
                {category}
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(6,10,18,0.1))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-[16%] top-4 z-[1] h-12 rounded-full bg-white/[0.08] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <WorkVisual type={visual} />
          </div>
        </div>

        <div className="flex min-h-[14.1rem] flex-col px-4 py-4 md:px-5 md:py-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
              採用担当向けに確認しやすい制作
            </p>
            <p className="text-[10px] tracking-[0.08em] text-muted-foreground">
              {year}
            </p>
          </div>

          <div className="mt-3 space-y-3">
            <h2 className="text-[1.14rem] font-semibold leading-[1.5] tracking-[-0.015em] text-foreground md:min-h-[3.9rem] md:text-[1.24rem]">
              {title}
            </h2>
            <p className="max-w-[28ch] text-[12.5px] leading-[1.9] text-muted-foreground md:min-h-[4.9rem] md:text-[13px]">
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

          <div className="mt-auto space-y-3 pt-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] tracking-[0.04em] text-foreground/58">
              {tags.map((tag, index) => (
                <span key={tag} className="inline-flex items-center gap-3">
                  {index > 0 ? <span className="h-1 w-1 rounded-full bg-white/18" /> : null}
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/8 pt-3">
              <span className="text-[10px] tracking-[0.06em] text-muted-foreground">
                性質と技術を明記
              </span>
              <InternalLink
                href={href}
                aria-label={`${title} の詳細を見る`}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.04em] text-accent/90 transition-[color,opacity] duration-200 hover:text-accent"
              >
                制作概要を見る
                <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </InternalLink>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function WorkVisual({ type }: { type: WorkCardProps["visual"] }) {
  if (type === "figure") {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_18%,rgba(255,255,255,0.12),transparent_24%)] transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="absolute left-1/2 top-[18%] h-24 w-20 -translate-x-1/2 rounded-full bg-white/[0.1] blur-[2px] transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute left-1/2 top-[30%] h-44 w-28 -translate-x-1/2 rounded-t-[4rem] rounded-b-[1.4rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.04))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(8,12,19,0),rgba(8,12,19,0.94))]" />
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
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(8,12,19,0),rgba(8,12,19,0.96))]" />
    </div>
  );
}
