import { Card } from "@/components/ui/card";
import { InfoChip } from "@/components/ui/info-chip";
import { SectionHeader } from "@/components/ui/section-header";
import { categoryBlocks, infraHighlights, skillGroups } from "@/components/skills/skills-data";

export function SkillsOverviewSection() {
  return (
    <section className="pt-8 md:pt-14">
      <Card
        interactive={false}
        inset
        padding="lg"
        tone="muted"
        className="relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-10 md:py-10"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top_left,rgba(88,148,255,0.18),transparent_52%)]" />
        <div className="pointer-events-none absolute right-[-8%] top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative space-y-8">
          <SectionHeader
            eyebrow="技術スタック"
            title={
              <>
                使っている技術を、
                <span className="block text-accent">役割ごとに整理する。</span>
              </>
            }
            description="使用技術、インフラの考え方、実装時に重視している原則を、何にどう使っているかが分かるように整理しています。"
            className="max-w-3xl space-y-4"
            eyebrowClassName="ui-eyebrow text-accent/90"
            titleClassName="max-w-[10ch] text-balance text-[3rem] leading-[1.2] md:text-[4.9rem]"
            descriptionClassName="ui-copy max-w-[38rem]"
          />

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_20rem]">
            <Card
              interactive={false}
              inset
              padding="lg"
              tone="default"
              className="rounded-[1.65rem] border-white/8 px-5 py-5 md:px-6 md:py-6"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4 md:pb-5">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">
                    主要な言語と用途
                  </p>
                  <p className="mt-1 text-sm text-foreground/88">
                    プロダクトづくりで中心になる技術
                  </p>
                </div>
                <InfoChip className="text-foreground/70">
                  現在の重点
                </InfoChip>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-4.5">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4 shadow-[0_10px_24px_rgba(27,44,74,0.04)] md:p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                          {group.label}
                        </p>
                        <h2 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-foreground">
                          {group.title}
                        </h2>
                        <p className="mt-3 text-[13px] leading-[1.8] text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                      <span className="shrink-0 pt-0.5 text-[10px] font-semibold tracking-[0.08em] text-accent">
                        {group.level}
                      </span>
                    </div>

                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,rgba(88,148,255,0.95),rgba(120,171,255,0.65))]"
                        style={{ width: group.level }}
                      />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <InfoChip
                          key={item}
                          className="border-white/8 bg-white/[0.035] tracking-[0.06em] text-foreground/70"
                        >
                          {item}
                        </InfoChip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card
              interactive={false}
              inset
              padding="lg"
              tone="strong"
              className="rounded-[1.65rem] border-white/10 px-5 py-5 md:px-6 md:py-6"
            >
              <div className="flex h-full flex-col">
                <div>
                  <div className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-accent/14 text-sm font-semibold text-accent">
                    +
                  </div>
                  <p className="mt-5 text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">
                    インフラ
                  </p>
                  <h2 className="mt-2 text-[1.55rem] font-semibold leading-[1.45] tracking-[-0.02em] text-foreground">
                    落ち着いて進めるための
                    <span className="block text-foreground/72">インフラと運用。</span>
                  </h2>
                </div>

                <div className="mt-6 space-y-3">
                  {infraHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] px-4 py-4 shadow-[0_10px_24px_rgba(27,44,74,0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[11px] text-accent">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium text-foreground/90">
                            {item.title}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-5 text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {["AWS", "Docker", "Pipelines"].map((item) => (
                    <InfoChip key={item} className="font-medium text-foreground/74">
                      {item}
                    </InfoChip>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <Card
            interactive={false}
            inset
            padding="lg"
            tone="default"
            className="rounded-[1.65rem] border-white/8 px-5 py-5 md:px-6 md:py-6"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 border-b border-white/8 pb-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <SectionHeader
                    eyebrow="全体像"
                    title="ツール名だけでなく、役割で読めるようにしています。"
                    className="space-y-2"
                    eyebrowClassName="text-[11px] font-semibold"
                    titleClassName="text-[1.9rem] font-semibold leading-[1.4]"
                  />
                </div>
                <p className="max-w-lg text-sm leading-[1.8] text-muted-foreground">
                  実装、基盤、体験設計が一つの流れの中でどうつながるかを見渡せるように整理しています。
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                {categoryBlocks.map((block) => (
                  <div
                    key={block.label}
                    className="rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] px-4 py-4 shadow-[0_10px_24px_rgba(27,44,74,0.04)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-[10px] text-accent">
                        {block.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold tracking-[0.08em] text-accent/90">
                          {block.label}
                        </p>
                        <p className="mt-2 text-[12px] leading-[1.7] text-foreground/76">
                          {block.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
}
