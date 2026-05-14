import { Card } from "@/components/ui/card";
import { InfoChip } from "@/components/ui/info-chip";
import { SectionHeader } from "@/components/ui/section-header";
import {
  capabilityBlocks,
  focusHighlights,
  primarySkills,
  skillCategories,
  skillSnapshots,
} from "@/components/skills/skills-data";

export function SkillsOverviewSection() {
  return (
    <section className="pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-line/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,246,255,0.86)_48%,rgba(255,255,255,0.92))] px-5 py-7 shadow-[0_24px_70px_rgba(27,44,74,0.09)] md:px-9 md:py-9">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_14%_0%,rgba(88,148,255,0.2),transparent_36%),radial-gradient(circle_at_88%_12%,rgba(137,171,255,0.16),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-x-5 top-5 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(88,148,255,0.28),transparent)] md:block" />

        <div className="relative space-y-9 md:space-y-10">
          <div className="grid gap-7 xl:grid-cols-[minmax(0,1.02fr)_minmax(20rem,0.78fr)] xl:items-end">
            <SectionHeader
              eyebrow="使える技術"
              title={
                <>
                  開発と制作の<span className="text-accent">主軸技術</span>
                </>
              }
              className="max-w-4xl space-y-4"
              eyebrowClassName="ui-eyebrow text-accent/90"
              titleClassName="ui-page-title max-w-[14ch] text-foreground md:text-[clamp(2.35rem,4vw,4.35rem)]"
              descriptionClassName="ui-copy max-w-[43rem]"
            />

            <div className="rounded-[1.7rem] border border-line/70 bg-white/76 p-4 shadow-[0_18px_46px_rgba(27,44,74,0.075)] backdrop-blur-md md:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-line/60 pb-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">
                    SKILL MAP
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground/88">
                    主軸から制作領域まで
                  </p>
                </div>
                <InfoChip className="border-accent/18 bg-accent/10 font-medium tracking-[0.06em] text-accent">
                  4 domains
                </InfoChip>
              </div>

              <div className="mt-4 grid gap-2.5">
                {capabilityBlocks.map((block, index) => (
                  <div key={block.label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line/70 bg-white text-[10px] font-semibold text-accent shadow-[0_8px_18px_rgba(27,44,74,0.06)]">
                      {block.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-[12px] font-semibold text-foreground/90">
                          {block.label}
                        </p>
                        <p className="text-[10px] tracking-[0.08em] text-muted-foreground">
                          0{index + 1}
                        </p>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-line/55">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(88,148,255,0.95),rgba(120,171,255,0.56))]"
                          style={{ width: `${92 - index * 9}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                interactive={false}
                inset
                padding="lg"
                tone="default"
                className="group h-full overflow-hidden rounded-[1.55rem] border-line/70 bg-white/78 px-4.5 py-5 shadow-[0_16px_40px_rgba(27,44,74,0.065)] md:px-5"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 min-w-11 items-center justify-center rounded-[1rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.82))] px-2 text-[11px] font-semibold tracking-[0.08em] text-accent shadow-[0_10px_22px_rgba(88,148,255,0.1)]">
                      {category.icon}
                    </div>
                    <p className="rounded-pill border border-line/70 bg-white/72 px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                      {category.label}
                    </p>
                  </div>

                  <h3 className="mt-5 text-[1.12rem] font-semibold leading-[1.45] text-foreground md:text-[1.2rem]">
                    {category.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.82] text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item.name}
                        className={
                          item.featured
                            ? "rounded-pill border border-accent/18 bg-accent/[0.12] px-3 py-1.5 text-[11px] font-semibold tracking-[0.04em] text-accent shadow-[0_8px_20px_rgba(88,148,255,0.1)]"
                            : "rounded-pill border border-line/70 bg-white/68 px-3 py-1.5 text-[11px] font-medium tracking-[0.04em] text-foreground/74"
                        }
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5">
                    <div className="rounded-[1.1rem] border border-line/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(246,249,253,0.64))] px-3.5 py-3">
                      <p className="text-[10px] font-semibold tracking-[0.08em] text-accent/90">
                        POINT
                      </p>
                      <p className="mt-1.5 text-[12px] leading-[1.7] text-foreground/76">
                        {category.note}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(145deg,rgba(18,26,40,0.96),rgba(35,52,82,0.92))] px-5 py-5 text-white shadow-[0_22px_58px_rgba(27,44,74,0.16)] md:px-6 md:py-6">
              <div className="relative flex h-full flex-col">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/10 bg-white/10 text-[11px] font-semibold tracking-[0.08em] text-white">
                    主軸
                  </div>

                  <div className="mt-5">
                    <p className="text-[11px] font-semibold tracking-[0.1em] text-white/54">
                      主軸技術
                    </p>
                    <h2 className="ui-card-title mt-2 max-w-[17ch] text-white md:text-[clamp(1.42rem,1.4vw,1.75rem)]">
                      Swift / Kotlin / Next.js / Figma
                    </h2>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {primarySkills.map((skill) => (
                      <InfoChip
                        key={skill}
                        className="border-white/12 bg-white/10 px-3.5 py-2 text-[11px] font-semibold tracking-[0.06em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                      >
                        {skill}
                      </InfoChip>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    {focusHighlights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.2rem] border border-white/10 bg-white/[0.065] px-4 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-[10px] font-semibold tracking-[0.08em] text-accent">
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[13px] font-medium text-white/92">
                              {item.title}
                            </p>
                            <p className="mt-1.5 text-[12px] leading-5 text-white/58">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Card
              interactive={false}
              inset
              padding="lg"
              tone="default"
              className="rounded-[1.65rem] border-line/70 bg-white/78 px-5 py-5 md:px-6 md:py-6"
            >
              <div className="flex flex-col">
                <div className="grid gap-3 md:grid-cols-2">
                  {capabilityBlocks.map((block) => (
                    <div
                      key={block.label}
                      className="rounded-[1.25rem] border border-line/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,250,255,0.66))] px-4 py-4 shadow-[0_10px_24px_rgba(27,44,74,0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 min-w-8 items-center justify-center rounded-full border border-line/70 bg-white px-2 text-[10px] font-semibold tracking-[0.08em] text-accent">
                          {block.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold tracking-[0.08em] text-accent/90">
                            {block.label}
                          </p>
                          <p className="mt-2 text-[13px] font-medium text-foreground/90">
                            {block.value}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-[1.7] text-muted-foreground">
                            {block.description}
                          </p>
                        </div>
                      </div>
                    </div>
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
            className="rounded-[1.65rem] border-line/70 bg-white/78 px-5 py-5 md:px-6 md:py-6"
          >
            <div className="flex flex-col">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {skillSnapshots.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex h-full flex-col rounded-[1.25rem] border border-line/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,250,255,0.68))] px-4 py-4 shadow-[0_10px_24px_rgba(27,44,74,0.04)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                          {skill.area}
                        </p>
                        <h3 className="mt-2 text-[1.05rem] font-semibold tracking-[-0.035em] text-foreground">
                          {skill.name}
                        </h3>
                      </div>
                      <InfoChip className="border-accent/18 bg-accent/12 font-semibold text-accent">
                        {skill.level}
                      </InfoChip>
                    </div>

                    <p className="mt-4 text-[12px] leading-[1.75] text-muted-foreground">
                      {skill.usage}
                    </p>
                    <div className="mt-auto pt-4">
                      <p className="text-[10px] font-semibold tracking-[0.08em] text-accent/90">
                        できる形
                      </p>
                      <p className="mt-1.5 text-[12px] leading-[1.65] text-foreground/78">
                        {skill.output}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
