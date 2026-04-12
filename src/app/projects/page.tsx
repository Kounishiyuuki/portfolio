"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { WorkCard } from "@/components/projects/work-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { defaultViewport } from "@/lib/motion/viewport";
import {
  getProjectsByFilter,
  projectFilterOptions,
  type ProjectFilterId,
} from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");
  const visibleWorks = getProjectsByFilter(activeFilter);
  const activeFilterLabel =
    projectFilterOptions.find((filter) => filter.id === activeFilter)?.label ?? "すべて";

  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerChildren(0.08)}
        className="pt-8 md:pt-14"
      >
        <motion.div variants={fadeInUp()} className="max-w-5xl space-y-8">
          <div className="space-y-4">
            <p className="ui-eyebrow text-accent/90">制作一覧</p>
            <h1 className="max-w-[10ch] text-balance font-display text-[2.78rem] leading-[1.22] tracking-[-0.02em] text-foreground md:text-[4.45rem]">
              制作内容を、
              <span className="block text-accent">一覧で分かりやすく見られるように。</span>
            </h1>
            <p className="ui-copy max-w-[38rem]">
              制作の性質、簡単な説明、使用技術、GitHub への導線をカードごとにまとめています。
              興味のある種類だけを絞って、そのまま確認できる一覧です。
            </p>
          </div>

          <motion.div
            variants={fadeIn()}
            className="rounded-[1.6rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,248,253,0.86))] p-3 shadow-[0_14px_34px_rgba(27,44,74,0.06)] md:p-4"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">
                    FILTER
                  </p>
                  <p className="text-[13px] leading-[1.8] text-foreground/76">
                    UI / Web / 分析 / 構想の切り口で、近い制作を自然に絞り込めます。
                  </p>
                </div>
                <div className="hidden rounded-pill border border-line/75 bg-white/78 px-3 py-1.5 text-[11px] font-medium tracking-[0.04em] text-foreground/68 md:inline-flex">
                  {activeFilterLabel} / {visibleWorks.length}件
                </div>
              </div>

              <div
                className="-mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="制作物の絞り込み"
                role="toolbar"
              >
                <div className="flex min-w-max items-center gap-2.5">
                  {projectFilterOptions.map((filter) => {
                    const isActive = filter.id === activeFilter;
                    const resultCount = getProjectsByFilter(filter.id).length;

                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        aria-pressed={isActive}
                        className={cn(
                          "group inline-flex items-center gap-2 rounded-pill border px-4 py-2.5 text-[12px] font-medium tracking-[0.03em] transition-[background-color,border-color,color,box-shadow,transform] duration-200",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/42 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          isActive
                            ? "border-accent/24 bg-[linear-gradient(180deg,rgba(88,148,255,0.96),rgba(71,128,232,0.92))] text-accent-foreground shadow-[0_12px_24px_rgba(88,148,255,0.22)]"
                            : "border-line/75 bg-white/72 text-foreground/72 shadow-[0_8px_20px_rgba(27,44,74,0.04)] hover:border-line-strong/85 hover:bg-white/92 hover:text-foreground/88"
                        )}
                      >
                        <span>{filter.label}</span>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] tracking-[0.04em] transition-colors duration-200",
                            isActive
                              ? "bg-white/18 text-white/90"
                              : "bg-[rgba(27,44,74,0.05)] text-foreground/46 group-hover:text-foreground/58"
                          )}
                        >
                          {resultCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/70 px-1 pt-1.5">
                <p className="text-[12px] leading-[1.8] text-muted-foreground">
                  現在は <span className="font-semibold text-foreground/82">{activeFilterLabel}</span> を表示中。
                  要約、使用技術、GitHub 導線を見比べやすい構成です。
                </p>
                <div className="rounded-pill border border-line/75 bg-white/78 px-3 py-1.5 text-[11px] font-medium tracking-[0.04em] text-foreground/68 md:hidden">
                  {visibleWorks.length}件
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn()}
            className="max-w-3xl rounded-[1.45rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,249,253,0.82))] px-5 py-4 shadow-[0_10px_26px_rgba(27,44,74,0.05)]"
          >
            <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">一覧の見方</p>
            <p className="mt-2 text-[13px] leading-[1.8] text-foreground/78">
              抽象ビジュアルは補助表現にとどめ、カードでは制作内容と技術要素を先に読めるようにしています。
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="pt-10 md:pt-12"
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
        variants={staggerChildren(0.06)}
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">RESULTS</p>
            <p className="mt-1 text-sm leading-[1.8] text-foreground/72">
              {activeFilterLabel} に該当する制作を表示しています。
            </p>
          </div>
          <p className="text-[12px] font-medium tracking-[0.03em] text-muted-foreground">
            {visibleWorks.length} projects
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleWorks.map((work, index) => (
            <motion.article
              key={`${activeFilter}-${work.title}`}
              variants={fadeInUp({ delay: index * 0.02, distance: 16 })}
              layout
            >
              <WorkCard {...work} />
            </motion.article>
          ))}
        </div>

        {visibleWorks.length === 0 ? (
          <motion.div variants={fadeInUp()} className="pt-6">
            <Card
              interactive={false}
              inset
              padding="lg"
              tone="muted"
              className="rounded-[1.7rem] px-6 py-8 text-center"
            >
              <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">NO RESULTS</p>
              <p className="mt-3 text-[15px] leading-[1.9] text-foreground/78">
                条件に合う制作がまだないため、別カテゴリを選ぶと一覧を確認できます。
              </p>
            </Card>
          </motion.div>
        ) : null}
      </motion.section>

      <motion.section
        className="pt-[calc(var(--section-space)*1.02)]"
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
        variants={fadeInUp()}
      >
        <Card
          interactive={false}
          inset
          padding="lg"
          tone="muted"
          className="relative overflow-hidden rounded-[1.85rem] border-white/8 px-6 py-12 md:px-10 md:py-16"
        >
          <div className="pointer-events-none absolute inset-x-[24%] top-12 h-20 rounded-full bg-accent/6 blur-3xl" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="ui-eyebrow text-muted-foreground">連絡</p>
            <h2 className="mt-4 text-balance font-display text-[1.82rem] leading-[1.35] tracking-[-0.02em] text-foreground md:text-[2.45rem]">
              制作を見たあとに、
              <span className="block">連絡先もそのまま確認できます。</span>
            </h2>
            <p className="ui-copy mx-auto mt-4 max-w-xl md:text-[14px] md:leading-7">
              メールと GitHub をまとめたシンプルな連絡ページを用意しています。
            </p>

            <Button href="/contact" size="lg" className="mt-9 min-w-[16rem]">
              連絡先を見る
            </Button>
          </div>
        </Card>
      </motion.section>
    </PageContainer>
  );
}
