"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { defaultViewport } from "@/lib/motion/viewport";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

const introPills = ["Swift", "Kotlin", "Next.js", "情報設計"] as const;

const introMeta = [
  {
    label: "所属",
    value: `${siteConfig.school} ${siteConfig.faculty}`,
  },
  {
    label: "立場",
    value: siteConfig.role,
  },
] as const;

const storyBlocks = [
  {
    index: "01",
    title: "はじまり",
    description:
      "金沢工業大学 メディア情報学部で学びながら、アプリや Web の画面がどう組み立てられているかに関心を持ち、実装と設計の両方を継続して見てきました。見た目の印象だけでなく、情報がどう整理されているかまで含めて観察することが出発点です。",
    cta: "学びの起点",
  },
  {
    index: "02",
    title: "技術の主軸",
    description:
      "特に Swift、Kotlin、Next.js を軸に、UI の読みやすさと実装の整理しやすさが両立する構成を意識しています。モバイルと Web の両方から、使いやすい画面の作り方を考えるのが得意です。",
    cta: "主軸技術",
  },
  {
    index: "03",
    title: "強み",
    description:
      "見た目を整えるだけでなく、情報の優先順位、ラベル、余白、実装構造まで含めて読みやすく整理することを重視しています。採用の場でも、判断しやすい形で成果物を見せることを意識しています。",
    cta: "強みの出し方",
  },
] as const;

const timelineItems = [...siteConfig.focusAreas, "学生ITエンジニア"] as const;

export default function AboutPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerChildren(0.08)}
        className="pt-8 md:pt-14"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(21rem,0.88fr)]">
          <motion.div variants={fadeInUp()}>
            <Card
              interactive={false}
              inset
              padding="lg"
              tone="muted"
              className="relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-10 md:py-11 lg:min-h-[32rem]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,rgba(88,148,255,0.18),transparent_55%)]" />
              <div className="pointer-events-none absolute -left-16 top-20 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-12">
                <div className="max-w-[39rem] space-y-8">
                  <div className="space-y-4">
                    <p className="ui-eyebrow text-accent/90">
                      Editorial Profile
                    </p>
                    <h1 className="max-w-[10ch] text-balance font-display text-[3rem] leading-[1.2] tracking-[-0.025em] text-foreground md:text-[5.1rem]">
                      所属と技術の重心が、
                      <span className="block text-accent">静かに伝わるプロフィールへ。</span>
                    </h1>
                    <p className="ui-copy max-w-[36rem] md:text-[1.02rem]">
                      {siteConfig.school} {siteConfig.faculty} に所属する {siteConfig.role} として、
                      Swift、Kotlin、Next.js を主軸に、読みやすい UI と整理された情報設計を重視して取り組んでいます。
                    </p>
                  </div>

                  <div className="rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-4 py-4 shadow-[0_10px_28px_rgba(27,44,74,0.05)] md:px-5">
                    <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                      現在の主軸
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.85] text-foreground/82">
                      モバイルと Web の両方から、情報の優先順位、読みやすさ、実装の整理しやすさを考えて画面を組み立てています。
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/8 pt-5">
                    {introMeta.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="flex size-6 items-center justify-center rounded-full bg-accent/14 text-[10px] font-semibold text-accent">
                          +
                        </span>
                        <div>
                          <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm text-foreground/90">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {introPills.map((item) => (
                    <div
                      key={item}
                      className="ui-chip px-4 py-2 text-[12px] text-foreground/88"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp()}>
            <Card
              interactive={false}
              padding="none"
              tone="strong"
              className="overflow-hidden rounded-[2rem] border-white/12 lg:min-h-[32rem]"
            >
              <div className="flex h-full flex-col">
                <div className="flex flex-1 flex-col p-5">
                  <div className="relative flex min-h-[30rem] flex-1 items-end overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.07),transparent_30%)]" />
                    <div className="absolute inset-x-[16%] top-8 h-40 rounded-full bg-white/[0.05] blur-3xl" />
                    <div className="absolute inset-x-0 bottom-0 h-[72%] bg-[linear-gradient(180deg,rgba(7,12,20,0),rgba(7,12,20,0.96))]" />
                    <div className="absolute inset-x-6 inset-y-6 rounded-[1.35rem] border border-white/6" />

                    <div className="absolute left-1/2 top-[15%] h-44 w-44 -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.32),rgba(255,255,255,0.1)_43%,rgba(255,255,255,0.02)_74%)] shadow-[0_20px_60px_rgba(0,0,0,0.36)]" />
                    <div className="absolute left-1/2 top-[31%] h-56 w-48 -translate-x-1/2 rounded-t-[5.5rem] rounded-b-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.04))]" />
                    <div className="absolute left-[calc(50%-3.8rem)] top-[28.5%] h-4 w-8 rounded-full bg-white/[0.08]" />
                    <div className="absolute right-[calc(50%-3.8rem)] top-[28.5%] h-4 w-8 rounded-full bg-white/[0.08]" />
                    <div className="absolute left-1/2 top-[35.5%] h-16 w-20 -translate-x-1/2 rounded-[999px] border border-white/6 bg-white/[0.03]" />

                    <div className="relative z-10 mt-auto w-full rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(16,21,31,0.58))] px-4 py-4 backdrop-blur-md">
                      <p className="text-[1.55rem] font-semibold tracking-[-0.04em] text-foreground">
                        {siteConfig.name}
                      </p>
                      <p className="mt-1 text-[11px] tracking-[0.08em] text-muted-foreground">
                        {siteConfig.role}
                      </p>
                      <p className="mt-2 text-[11px] tracking-[0.06em] text-foreground/52">
                        {siteConfig.school} / {siteConfig.faculty}
                      </p>
                      <p className="mt-3 text-[12px] leading-[1.7] text-foreground/72">
                        Swift / Kotlin / Next.js を中心に、読みやすい体験と実装品質の両立を目指しています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="pt-10 md:pt-14"
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
        variants={staggerChildren(0.08)}
      >
        <motion.div
          variants={fadeIn()}
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3.5"
        >
          {timelineItems.map((item) => (
            <div
              key={item}
              className="ui-chip"
            >
              {item}
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp()} className="mx-auto mt-14 max-w-2xl text-center">
          <p className="ui-eyebrow text-muted-foreground">
            Profile Notes
          </p>
          <h2 className="mt-4 text-balance font-display text-[2rem] leading-[1.35] tracking-[-0.02em] text-foreground md:text-[2.55rem]">
            所属、技術の主軸、
            仕事で大切にしていることを整えて伝える。
          </h2>
          <p className="ui-copy mt-4">
            所属情報、主軸にしている技術、実際の制作で重視している判断軸を、
            採用の場で短時間でも読み取りやすい順番に整理しています。
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.08)}
          className="mt-10 grid gap-5 md:grid-cols-3 md:items-stretch"
        >
          {storyBlocks.map((block) => (
            <motion.div key={block.index} variants={fadeInUp()}>
              <Card
                interactive={false}
                inset
                padding="lg"
                tone="muted"
                className="h-full rounded-[1.7rem] border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-6 py-7 shadow-[0_12px_28px_rgba(27,44,74,0.05)] md:px-7"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-7 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-accent/14 text-sm font-semibold text-accent">
                      {block.index}
                    </div>
                    <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-foreground md:text-[1.35rem]">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.95] text-muted-foreground md:text-[14px]">
                    {block.description}
                  </p>
                  <p className="mt-6 text-[11px] font-semibold tracking-[0.08em] text-accent/90">
                    {block.cta}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="pt-[calc(var(--section-space)*0.9)]"
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
          className="relative overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="pointer-events-none absolute inset-x-[18%] top-10 h-24 rounded-full bg-accent/8 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.78fr_minmax(0,1.22fr)] lg:items-center">
            <div className="max-w-sm space-y-3">
              <p className="ui-eyebrow text-muted-foreground">
                Closing Note
              </p>
              <h2 className="text-balance font-display text-[2rem] leading-[1.35] tracking-[-0.02em] text-foreground md:text-[2.6rem]">
                実在感と落ち着いた印象が、
                同時に残ることを重視しています。
              </h2>
            </div>

            <div className="max-w-2xl justify-self-end rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-7 shadow-[0_14px_34px_rgba(27,44,74,0.07)] md:px-8">
              <p className="ui-copy max-w-[36rem] md:text-base">
                氏名や所属を必要な範囲で明示しつつ、過剰に個人情報を出しすぎない形を意識しています。
                採用担当が短時間で「どんな技術を軸にしているか」と「どのような姿勢で作る人か」を理解できることを優先しています。
              </p>
            </div>
          </div>
        </Card>
      </motion.section>
    </PageContainer>
  );
}
