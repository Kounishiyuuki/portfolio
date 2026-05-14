"use client";

import Image from "next/image";
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
    label: "学科 / 学年",
    value: `${siteConfig.department} / ${siteConfig.year}`,
  },
] as const;

const storyBlocks = [
  {
    index: "01",
    title: "はじまり",
    description:
      "大学で学びながら、アプリや Web の画面をどう整理して伝えるかに関心を持ってきました。見た目だけでなく、情報の優先順位や読みやすさまで考えることが出発点です。",
    cta: "学びの起点",
  },
  {
    index: "02",
    title: "技術の主軸",
    description:
      "Swift、Kotlin、Next.js を主軸に、UI の読みやすさと実装の整理しやすさが両立する構成を意識しています。モバイルと Web の両方から、使いやすい画面を考えるのが得意です。",
    cta: "主軸技術",
  },
  {
    index: "03",
    title: "強み",
    description:
      "情報の優先順位、ラベル、余白、実装構造まで含めて、使いやすい画面を考えています。",
    cta: "UIと実装",
  },
] as const;

const timelineItems = [...siteConfig.focusAreas, "情報設計", siteConfig.role] as const;

const journeyItems = [
  {
    period: "2005年",
    title: "金沢で生まれ、高校までを過ごす",
    description:
      "落ち着いた環境で学びながら、ものづくりや表現への関心を少しずつ広げてきました。",
  },
  {
    period: "大学入学",
    title: "アプリ開発やWeb制作に関心を持つ",
    description:
      "大学での学びを通して、アプリ開発、Web制作、UI設計、実際に使えるプロダクトづくりに取り組み始めました。",
  },
  {
    period: "大学2年",
    title: "プロジェクト活動で副リーダーを担当",
    description:
      "チームでの制作を進めながら、進行管理や実装面の整理にも関わるようになりました。",
  },
  {
    period: "現在",
    title: "制作とプロジェクト活動を継続",
    description:
      "モバイルアプリ、Web、UIを中心に、学びと実装を往復しながら制作を続けています。",
  },
] as const;

export default function AboutPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerChildren(0.08)}
        className="pt-8 md:pt-12"
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] xl:gap-6">
          <motion.div variants={fadeInUp()}>
            <Card
              interactive={false}
              inset
              padding="lg"
              tone="muted"
              className="relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-10 md:py-10 xl:min-h-[31rem]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,rgba(29,29,31,0.18),transparent_55%)]" />
              <div className="pointer-events-none absolute -left-16 top-20 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-12">
                <div className="layout-reading-wide space-y-8">
                  <div className="space-y-4">
                    <p className="ui-eyebrow text-muted-foreground">
                      プロフィール
                    </p>
                    <h1 className="ui-display-title layout-title-display text-foreground md:text-[clamp(2.4rem,4.9vw,5rem)]">
                      プロフィール
                    </h1>
                    <p className="ui-copy layout-reading md:text-[1.02rem]">
                      {siteConfig.school} {siteConfig.faculty} {siteConfig.department} に所属する {siteConfig.year}の {siteConfig.role} として、
                      Swift、Kotlin、Next.js を主軸に、情報設計と UI 実装の両方を意識しながら取り組んでいます。
                    </p>
                  </div>

                  <div className="rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-4 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)] md:px-5">
                    <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                      現在の主軸
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.85] text-foreground/82">
                      Swift / Kotlin / Next.js を軸に、モバイルと Web の UI 実装に取り組んでいます。
                    </p>
                  </div>

                  <div className="grid gap-3 border-t border-white/8 pt-5 sm:grid-cols-2">
                    {introMeta.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="flex size-6 items-center justify-center rounded-full bg-foreground/8 text-[10px] font-semibold text-foreground">
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
              className="overflow-hidden rounded-[2rem] border-white/12 xl:min-h-[31rem]"
            >
              <div className="flex h-full flex-col">
                <div className="flex flex-1 flex-col p-5">
                  <div className="relative flex min-h-[23rem] flex-1 items-end overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.14)] sm:min-h-[28rem]">
                    <Image
                      src="/images/profile/profile-snow.jpg"
                      alt="雪山で撮影したプロフィール写真"
                      fill
                      sizes="(min-width: 1280px) 36vw, (min-width: 768px) 42vw, 100vw"
                      className="object-cover object-[50%_42%]"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,22,0.08),rgba(9,14,22,0.28)_48%,rgba(9,14,22,0.82))]" />
                    <div className="absolute inset-x-[16%] top-8 h-40 rounded-full bg-white/[0.08] blur-3xl" />
                    <div className="absolute inset-x-6 inset-y-6 rounded-[1.35rem] border border-white/6" />

                    <div className="relative z-10 mt-auto w-full rounded-[1.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(237,242,249,0.18))] px-4 py-4 backdrop-blur-md">
                      <p className="text-[1.55rem] font-semibold tracking-[-0.035em] text-foreground">
                        {siteConfig.name}
                      </p>
                      <p className="mt-1 text-[11px] font-medium tracking-[0.08em] text-foreground/62">
                        {siteConfig.role}
                      </p>
                      <p className="mt-2 text-[11px] tracking-[0.06em] text-foreground/56">
                        {siteConfig.school} / {siteConfig.faculty} / {siteConfig.department}
                      </p>
                      <p className="mt-3 text-[12px] leading-[1.7] text-foreground/78">
                        Swift / Kotlin / Next.js を中心に、UI 実装と情報設計に取り組んでいます。
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

        <motion.div
          variants={staggerChildren(0.08)}
          className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:items-stretch xl:grid-cols-3"
        >
          {storyBlocks.map((block) => (
            <motion.div key={block.index} variants={fadeInUp()}>
              <Card
                interactive={false}
                inset
                padding="lg"
                tone="muted"
                className="h-full rounded-[1.7rem] border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,0.05)] md:px-7"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-7 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-foreground/8 text-sm font-semibold text-foreground">
                      {block.index}
                    </div>
                    <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />
                  </div>

                  <h3 className="ui-card-title text-foreground">
                    {block.title}
                  </h3>
                  <p className="ui-body-sm mt-4 text-muted-foreground">
                    {block.description}
                  </p>
                  <p className="mt-6 text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
                    {block.cta}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="pt-10 md:pt-16"
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
        variants={staggerChildren(0.08)}
        aria-labelledby="journey-heading"
      >
        <motion.div variants={fadeInUp()} className="mb-7 space-y-3 md:mb-9">
          <p className="ui-eyebrow text-muted-foreground">Journey</p>
          <h2
            id="journey-heading"
            className="ui-section-title layout-title-section text-foreground"
          >
            これまでの歩み
          </h2>
          <p className="ui-copy layout-reading text-muted-foreground">
            学生としての学びと制作活動の流れを、簡潔にまとめています。
          </p>
        </motion.div>

        <motion.div variants={fadeInUp()}>
          <Card
            interactive={false}
            inset
            padding="none"
            tone="muted"
            className="overflow-hidden rounded-[1.8rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035))] px-5 py-6 shadow-[0_14px_34px_rgba(0,0,0,0.055)] md:px-8 md:py-8"
          >
            <ol className="relative grid gap-0 md:grid-cols-4 md:gap-4">
              {journeyItems.map((item, index) => (
                <li
                  key={item.period}
                  className="relative grid gap-4 border-l border-white/12 pb-7 pl-6 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-6"
                >
                  <span
                    className="absolute -left-[0.45rem] top-1 flex size-3.5 rounded-full border border-foreground/28 bg-foreground shadow-[0_0_0_5px_rgba(29,29,31,0.1)] md:left-0 md:top-[-0.45rem]"
                    aria-hidden="true"
                  />
                  <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
                    <span className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[1rem] font-semibold leading-[1.7] tracking-[-0.02em] text-foreground md:text-[1.02rem]">
                      {item.title}
                    </h3>
                    <p className="ui-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </motion.div>
      </motion.section>

    </PageContainer>
  );
}
