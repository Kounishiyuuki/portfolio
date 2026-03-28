"use client";

import { motion } from "motion/react";
import { WorkCard } from "@/components/projects/work-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { defaultViewport } from "@/lib/motion/viewport";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";

const workFilters = ["注目", "UI", "AI", "Web", "基盤"] as const;

const works = [
  {
    title: "NexusOS",
    category: "UI設計",
    kind: "UI study",
    year: "2026",
    description:
      "情報の優先順位や第一印象の明快さを整えるために設計した UI study です。",
    focus: "情報の優先順位、視線誘導、最初の理解しやすさ",
    tags: ["Next.js", "TypeScript", "Motion"],
    visual: "figure",
    href: "/contact",
  },
  {
    title: "Aura Protocol",
    category: "検証UI",
    kind: "コンセプト案",
    year: "2026",
    description:
      "技術的な内容を密度を保ったまま読みやすく見せるためのコンセプト案です。",
    focus: "高密度な情報の見せ方、検証UIの構成、読みやすい文字組み",
    tags: ["Design Systems", "React", "Editorial"],
    visual: "vessel",
    href: "/contact",
  },
  {
    title: "Lattice Core",
    category: "Web基盤",
    kind: "コンセプト案",
    year: "2025",
    description:
      "モジュール構成と読みやすい画面設計を両立させるためのプラットフォーム案です。",
    focus: "モジュール分割、画面構造、基盤寄りの設計整理",
    tags: ["Architecture", "Platform", "UX"],
    visual: "mesh",
    href: "/contact",
  },
  {
    title: "Vortex SDK",
    category: "開発者向け",
    kind: "コンセプト案",
    year: "2025",
    description:
      "技術的な正確さを保ちながら、導入時の理解しやすさを高めるためのプロダクト案です。",
    focus: "開発者向け導線、導入時の理解しやすさ、情報整理",
    tags: ["Docs", "Developer Experience", "API"],
    visual: "crest",
    href: "/contact",
  },
  {
    title: "Synapse API",
    category: "システム",
    kind: "UI study",
    year: "2025",
    description:
      "運用状況の見通しや信頼感を高めるための、システム寄りの可視化 study です。",
    focus: "監視系UIの信頼感、可観測性、状態把握のしやすさ",
    tags: ["Backend", "Observability", "Cloud"],
    visual: "ring",
    href: "/contact",
  },
  {
    title: "Titan Edge",
    category: "AI UI",
    kind: "コンセプト案",
    year: "2024",
    description:
      "構造、文字組み、信頼感の3点を揃えて見せる AI プロダクト向けの画面案です。",
    focus: "AI UI の信頼感、構造整理、落ち着いた情報の見せ方",
    tags: ["AI", "Product", "Frontend"],
    visual: "portrait",
    href: "/contact",
  },
] as const;

export default function ProjectsPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerChildren(0.08)}
        className="pt-8 md:pt-14"
      >
        <motion.div variants={fadeInUp()} className="max-w-4xl space-y-8">
          <div className="space-y-3.5">
            <p className="ui-eyebrow text-accent/90">
              制作一覧
            </p>
            <h1 className="max-w-[11ch] text-balance font-display text-[3rem] leading-[1.2] tracking-[-0.02em] text-foreground md:text-[5rem]">
              制作内容を、
              <span className="block text-accent">順番に読み取れる一覧へ。</span>
            </h1>
            <p className="ui-copy max-w-[38rem]">
              各制作の性質を `UI study` と `コンセプト案` に分けて示し、何を作ったかと何を見ればよいかが短時間で分かるようにしています。
            </p>
          </div>

          <motion.div variants={fadeIn()} className="flex flex-wrap gap-3 pt-1">
            {workFilters.map((filter, index) => (
              <div
                key={filter}
                className={[
                  "rounded-pill border px-4 py-2 text-[11px] font-medium tracking-[0.04em] transition-[background-color,border-color,color,box-shadow] duration-200",
                  index === 0
                    ? "border-accent/22 bg-accent/92 text-accent-foreground shadow-[0_8px_18px_rgba(88,148,255,0.16)]"
                    : "border-line/80 bg-white/84 text-foreground/78 shadow-[0_8px_20px_rgba(27,44,74,0.04)]",
                ].join(" ")}
              >
                {filter}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn()}
            className="max-w-3xl rounded-[1.45rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,249,253,0.82))] px-5 py-4 shadow-[0_10px_26px_rgba(27,44,74,0.05)]"
          >
            <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
              gallery の見方
            </p>
            <p className="mt-2 text-[13px] leading-[1.8] text-foreground/78">
              抽象ビジュアルは補助表現として使い、各カードでは性質ラベル、要約、見るポイント、技術スタックを優先して確認できるようにしています。
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="pt-10 md:pt-12"
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
        variants={staggerChildren(0.08)}
      >
        <div className="grid gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work) => (
            <motion.article key={work.title} variants={fadeInUp()}>
              <WorkCard {...work} />
            </motion.article>
          ))}
        </div>
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
            <p className="ui-eyebrow text-muted-foreground">
              連絡
            </p>
            <h2 className="mt-4 text-balance font-display text-[1.95rem] leading-[1.35] tracking-[-0.02em] text-foreground md:text-[2.7rem]">
              気になる取り組みがあれば、
              ご相談の入口をご覧ください。
            </h2>
            <p className="ui-copy mx-auto mt-4 max-w-xl md:text-[14px] md:leading-7">
              現時点では、連絡責務をメールと外部プロフィールに絞っています。
              まずは簡単なご相談からでも歓迎です。
            </p>

            <Button href="/contact" size="lg" className="mt-9 min-w-[16rem]">
              連絡方法を見る
            </Button>
          </div>
        </Card>
      </motion.section>
    </PageContainer>
  );
}
