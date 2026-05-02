"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { WorkCard } from "@/components/projects/work-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { defaultViewport } from "@/lib/motion/viewport";
import {
  allWorkProjectItems,
  featuredProjectItems,
  matchesProjectFilter,
  projectFilterOptions,
  type ProjectItem,
  type ProjectFilterId,
} from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");
  const visibleFeaturedWorks = featuredProjectItems.filter((project) => matchesProjectFilter(project, activeFilter));
  const visibleAllWorks = allWorkProjectItems.filter((project) => matchesProjectFilter(project, activeFilter));
  const visibleWorksCount = visibleFeaturedWorks.length + visibleAllWorks.length;
  const activeFilterLabel =
    projectFilterOptions.find((filter) => filter.id === activeFilter)?.label ?? "すべて";

  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerChildren(0.08)}
        className="pt-8 md:pt-12"
      >
        <motion.div variants={fadeInUp({ reducedMotion: true })} className="space-y-7 md:space-y-8">
          <div className="layout-header space-y-4">
            <p className="ui-eyebrow text-accent/90">制作一覧</p>
            <h1 className="ui-page-title layout-title-page text-foreground md:text-[clamp(2.3rem,4.2vw,4.35rem)]">
              制作を、<span className="text-accent">一覧で見やすくまとめています。</span>
            </h1>
            <p className="ui-copy layout-reading">
              就職活動で見てほしい制作を中心に、内容・担当範囲・使った技術・GitHub への導線をまとめています。
            </p>
          </div>

          <motion.div
            variants={fadeIn(0, true)}
            className="rounded-[1.6rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,248,253,0.86))] p-3 shadow-[0_14px_34px_rgba(27,44,74,0.06)] md:p-4"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">
                    絞り込み
                  </p>
                  <p className="text-[13px] leading-[1.8] text-foreground/76">
                    モバイルアプリ、Web、AI・メディア、ハッカソン制作の切り口で絞れます。
                  </p>
                </div>
                <div className="hidden rounded-pill border border-line/75 bg-white/78 px-3 py-1.5 text-[11px] font-medium tracking-[0.04em] text-foreground/68 md:inline-flex">
                  {activeFilterLabel} / {visibleWorksCount}件
                </div>
              </div>

              <div className="relative -mx-1 rounded-[1.2rem] bg-white/36 py-1">
                <div
                  className="overflow-x-auto px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  aria-label="制作物の絞り込み"
                  role="toolbar"
                >
                  <div className="flex min-w-max items-center gap-2.5 pr-8">
                    {projectFilterOptions.map((filter) => {
                      const isActive = filter.id === activeFilter;
                      const resultCount =
                        featuredProjectItems.filter((project) => matchesProjectFilter(project, filter.id)).length +
                        allWorkProjectItems.filter((project) => matchesProjectFilter(project, filter.id)).length;

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
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-5 rounded-l-[1.2rem] bg-gradient-to-r from-white/94 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-12 rounded-r-[1.2rem] bg-gradient-to-l from-white/94 to-transparent"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/70 px-1 pt-1.5">
                <p className="text-[12px] leading-[1.8] text-muted-foreground">
                  今は <span className="font-semibold text-foreground/82">{activeFilterLabel}</span> の制作を表示しています。
                </p>
                <div className="rounded-pill border border-line/75 bg-white/78 px-3 py-1.5 text-[11px] font-medium tracking-[0.04em] text-foreground/68 md:hidden">
                  {visibleWorksCount}件
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn(0, true)}
            className="layout-reading-wide rounded-[1.45rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,249,253,0.82))] px-5 py-4 shadow-[0_10px_26px_rgba(27,44,74,0.05)]"
          >
            <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">一覧の見方</p>
            <p className="mt-2 text-[13px] leading-[1.8] text-foreground/78">
              Featured Projects は大きく表示し、All Works は補足として小さめにまとめています。
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="pt-9 md:pt-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren(0.06)}
      >
        <div className="mb-5 flex flex-col gap-2.5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">表示中</p>
          <p className="mt-1 text-sm leading-[1.8] text-foreground/72">
              {activeFilterLabel} に該当する制作を表示しています。
            </p>
          </div>
          <p className="text-[12px] font-medium tracking-[0.03em] text-muted-foreground">
            {visibleWorksCount}件
          </p>
        </div>

        {visibleFeaturedWorks.length > 0 ? (
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] text-accent/90">Featured Projects</p>
              <p className="mt-1 text-[13px] leading-[1.8] text-foreground/72">
                まず見てほしい、プロダクトに近い制作です。
              </p>
            </div>
            <div className="grid gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleFeaturedWorks.map((work, index) => (
                <motion.article
                  key={`${activeFilter}-${work.title}`}
                  variants={fadeInUp({ delay: index * 0.02, distance: 16, reducedMotion: true })}
                >
                  <WorkCard {...work} />
                </motion.article>
              ))}
            </div>
          </div>
        ) : null}

        {visibleAllWorks.length > 0 ? (
          <div className="space-y-4 pt-10 md:pt-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">All Works</p>
              <p className="mt-1 text-[13px] leading-[1.8] text-foreground/72">
                補足として見られる個人制作です。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {visibleAllWorks.map((work, index) => (
                <motion.article
                  key={`${activeFilter}-${work.title}`}
                  variants={fadeInUp({ delay: index * 0.02, distance: 12, reducedMotion: true })}
                >
                  <CompactWorkCard project={work} />
                </motion.article>
              ))}
            </div>
          </div>
        ) : null}

        {visibleWorksCount === 0 ? (
          <motion.div variants={fadeInUp({ reducedMotion: true })} className="pt-6">
            <Card
              interactive={false}
              inset
              padding="lg"
              tone="muted"
              className="rounded-[1.7rem] px-6 py-8 text-center"
            >
              <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">該当なし</p>
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
        variants={fadeInUp({ reducedMotion: true })}
      >
        <Card
          interactive={false}
          inset
          padding="lg"
          tone="muted"
          className="relative overflow-hidden rounded-[1.85rem] border-white/8 px-6 py-12 md:px-10 md:py-16"
        >
          <div className="pointer-events-none absolute inset-x-[24%] top-12 h-20 rounded-full bg-accent/6 blur-3xl" />
          <div className="layout-header relative mx-auto flex flex-col items-center text-center">
            <p className="ui-eyebrow text-muted-foreground">連絡</p>
            <h2 className="ui-section-title layout-title-section mt-4 text-foreground">
              気になる制作があれば、連絡先も見られます。
            </h2>
            <p className="ui-copy layout-reading mx-auto mt-4 md:text-[14px] md:leading-7">
              メールと GitHub をまとめたページを用意しています。
            </p>

            <Button href="/contact" variant="secondary" size="lg" className="mt-9 w-full sm:w-auto sm:min-w-[16rem]">
              連絡先を見る
            </Button>
          </div>
        </Card>
      </motion.section>
    </PageContainer>
  );
}

function CompactWorkCard({ project }: { project: ProjectItem }) {
  return (
    <Card
      interactive={false}
      padding="lg"
      tone="muted"
      className="h-full rounded-[1.35rem] px-5 py-5 shadow-[0_10px_24px_rgba(27,44,74,0.05)]"
    >
      <div className="flex h-full min-w-0 flex-col gap-4">
        <div className="relative aspect-[1.65/1] overflow-hidden rounded-[1rem] border border-line/70 bg-[linear-gradient(135deg,rgba(247,250,253,0.9),rgba(229,238,251,0.68))]">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-contain p-3.5 drop-shadow-[0_12px_20px_rgba(27,44,74,0.14)]"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <CompactVisual type={project.visual} />
              <span className="relative z-[1] rounded-pill border border-white/60 bg-white/76 px-3 py-1 text-[10px] font-semibold tracking-[0.06em] text-foreground/62">
                {project.status}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-pill border border-line/70 bg-white/76 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-foreground/70">
            {project.kind}
          </span>
          <span className="rounded-pill border border-line/60 bg-white/54 px-2.5 py-1 text-[10px] tracking-[0.04em] text-foreground/58">
            {project.category}
          </span>
          <span className="ml-auto text-[10px] tracking-[0.08em] text-muted-foreground">
            {project.year}
          </span>
        </div>

        <div className="min-w-0 space-y-2">
          <h2 className="ui-card-title text-foreground md:text-[1.08rem]">
            {project.title}
          </h2>
          <p className="text-[13px] leading-[1.8] text-muted-foreground">
            {project.summary}
          </p>
          <p className="text-[12px] leading-[1.75] text-foreground/70">
            {project.role}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-line/65 pt-3">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-pill border border-line/60 bg-white/72 px-2.5 py-1 text-[10px] text-foreground/68"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl ? (
          <Button
            href={project.githubUrl}
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-fit"
          >
            {project.githubLabel ?? "GitHubを見る"}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}

function CompactVisual({ type }: { type: ProjectItem["visual"] }) {
  const isRing = type === "ring";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(88,148,255,0.16),transparent_32%)]"
    >
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-accent/16 bg-white/34 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
          isRing ? "h-24 w-24 rounded-full" : "h-20 w-28 rounded-[1.2rem]"
        )}
      />
      <div className="absolute inset-x-[22%] bottom-5 h-px bg-accent/14" />
    </div>
  );
}
