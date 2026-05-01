import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ProjectShowcaseCard } from "@/components/home/project-showcase-card";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { InternalLink } from "@/components/ui/internal-link";
import { plainMailtoHref } from "@/lib/contact-data";
import { featuredProjectItems } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

const overviewSteps = [
  {
    label: "01",
    title: "制作物を見る",
    note: "制作の内容と使った技術を、一覧でまとめて見られます。",
  },
  {
    label: "02",
    title: "プロフィールを見る",
    note: "所属や主軸にしている技術を、短く整理して載せています。",
  },
  {
    label: "03",
    title: "GitHub とメール",
    note: "実装を見たいときや連絡したいときも、迷わず進めます。",
  },
] as const;

const heroTechGroups = [
  {
    label: "開発",
    note: "実装",
    items: ["Swift", "Kotlin", "Next.js", "C++"],
  },
  {
    label: "制作",
    note: "UI / 3D",
    items: ["Figma", "Unity", "Blender", "Maya"],
  },
] as const;

const featuredProjectLayoutClasses = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-8",
] as const;

export default function HomePage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <HeroSection />

      <SectionContainer spacing="default" className="pt-4 md:pt-8">
        <div className="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="layout-header space-y-3">
            <p className="ui-eyebrow text-accent/90">注目制作</p>
            <h2 className="ui-section-title layout-title-section text-foreground">
              まず見てほしい制作を、先にまとめています。
            </h2>
            <p className="ui-copy layout-reading md:text-[15px]">
              代表的な制作を先に載せています。気になったものは、そのまま制作一覧や GitHub で詳しく見られます。
            </p>
          </div>
          <InternalLink
            href="/projects"
            className="hidden items-center gap-1.5 rounded-pill border border-line/80 bg-white/84 px-4 py-2 text-sm font-semibold tracking-[0.01em] text-accent/90 shadow-[0_8px_20px_rgba(27,44,74,0.05)] transition-[border-color,box-shadow,color,background-color] duration-200 hover:border-line-strong/90 hover:bg-white hover:text-accent md:inline-flex"
          >
            制作一覧を見る
            <ArrowRight className="size-4" />
          </InternalLink>
        </div>

        <div className="mb-5 grid gap-3 rounded-[1.45rem] border border-line/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(246,249,253,0.76))] px-5 py-4 shadow-[0_10px_26px_rgba(27,44,74,0.05)] md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
              注目制作の見方
            </p>
            <p className="mt-2 max-w-[54rem] text-[13px] leading-[1.8] text-foreground/78">
              制作の種類と見るポイントを先に読めるように整理しています。短時間で雰囲気を知りたい場合は、ここから見るのが分かりやすいです。
            </p>
          </div>
          <InternalLink
            href="/projects"
            className="inline-flex w-fit items-center gap-1.5 rounded-pill border border-line/75 bg-white/78 px-3.5 py-2 text-[12px] font-semibold text-accent/90 shadow-[0_8px_18px_rgba(27,44,74,0.04)] transition-[border-color,background-color,color] duration-200 hover:border-line-strong/90 hover:bg-white hover:text-accent md:hidden"
          >
            一覧へ
            <ArrowRight className="size-3.5" />
          </InternalLink>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:items-stretch">
          {featuredProjectItems.map((project, index) => (
            <ProjectShowcaseCard
              key={project.title}
              {...project}
              className={featuredProjectLayoutClasses[index]}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer spacing="default" className="pt-6 md:pt-10">
        <Card
          interactive={false}
          inset
          padding="lg"
          tone="muted"
          className="overflow-hidden rounded-[2rem] border-white/12 px-5 py-7 md:px-9 md:py-10"
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-x-[22%] top-4 h-20 rounded-full bg-accent/7 blur-3xl" />
            <div className="relative rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] px-5 py-6 shadow-[0_14px_34px_rgba(27,44,74,0.07)] md:px-7 md:py-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="layout-header space-y-3">
                  <p className="ui-eyebrow text-accent/90">連絡先</p>
                  <h2 className="ui-section-title max-w-[12ch] text-foreground md:max-w-[14ch]">
                    メールと GitHub をまとめています。
                  </h2>
                  <p className="ui-copy max-w-[34rem] md:text-[14.5px] md:leading-7">
                    気になったときに、そのまま確認しやすい連絡先ページです。
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 sm:flex-row md:flex-col md:items-end lg:flex-row">
                  <p className="text-[11px] leading-5 text-muted-foreground md:max-w-[16rem] md:text-right lg:max-w-none lg:text-left">
                    連絡先ページで、メールと GitHub を見られます。
                  </p>
                  <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto sm:min-w-[10.5rem]">
                    連絡先を見る
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}

function HeroSection() {
  return (
    <SectionContainer
      spacing="hero"
      className="pt-8 md:pt-14"
    >
        <div className="grid min-w-0 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
        <Card
          interactive={false}
          inset
          padding="lg"
          tone="muted"
          className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(27,44,74,0.1)] lg:col-span-7 lg:min-h-[34rem]"
        >
          <div className="relative flex h-full flex-col justify-between gap-12 md:gap-14">
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_88%_18%,rgba(88,148,255,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.18),transparent_48%)]" />

            <div className="relative min-w-0 space-y-8 md:space-y-10">
              <div className="space-y-2.5">
                <p className="text-[1.28rem] font-semibold tracking-[-0.035em] text-foreground md:text-[1.6rem]">
                  {siteConfig.name}
                </p>
                <p className="text-[11px] font-medium tracking-[0.08em] text-muted-foreground/90">
                  {siteConfig.role}
                </p>
              </div>

              <div className="space-y-4.5 md:space-y-5">
                <h1 className="ui-display-title max-w-[15ch] text-foreground sm:max-w-[17ch] lg:max-w-[14.5ch]">
                  学生制作と<span className="text-accent">実装</span>のポートフォリオ
                </h1>
                <p className="ui-copy max-w-[40rem] md:text-[15px] md:leading-[1.85]">
                  学生として取り組んできた制作や実装を、見やすくまとめています。
                </p>
                <div className="max-w-[43rem] rounded-[1.3rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(246,249,253,0.5))] p-3.5 shadow-[0_12px_30px_rgba(27,44,74,0.06)] md:p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground/88">
                      使える技術
                    </p>
                    <p className="text-[11px] text-foreground/58">
                      情報設計も意識
                    </p>
                  </div>

                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {heroTechGroups.map((group) => (
                      <div
                        key={group.label}
                        className="rounded-[1.05rem] border border-line/45 bg-white/54 px-3.5 py-3"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="text-[11px] font-semibold tracking-[0.08em] text-foreground/74">
                            {group.label}
                          </p>
                          <p className="text-[10px] tracking-[0.06em] text-muted-foreground">
                            {group.note}
                          </p>
                        </div>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-pill border border-line/55 bg-white/84 px-2.5 py-1 text-[11px] font-medium text-foreground/78 shadow-[0_4px_12px_rgba(27,44,74,0.03)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid max-w-[43rem] gap-3 pt-1 sm:grid-cols-2">
                <Button href="/projects" size="lg" className="w-full">
                  制作物を見る
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href={siteConfig.githubUrl}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  href={plainMailtoHref}
                  variant="ghost"
                  size="lg"
                  className="w-full border border-line/75 bg-white/70 text-foreground/78 hover:bg-white/86"
                >
                  メール
                </Button>
                <Button
                  href="/about"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  プロフィールを見る
                </Button>
              </div>
            </div>

            <div className="relative grid gap-4 md:grid-cols-3">
              <MetricCard label="内容" value="制作と実装" note="学生として取り組んできたものを整理" />
              <MetricCard label="領域" value="モバイル・Web・3D" note="Swift、Kotlin、Next.js、Unity などを横断" />
              <MetricCard label="見せ方" value="整理して伝える" note="技術の広がりが先に伝わる構成" />
            </div>
          </div>
        </Card>

        <Card
          interactive={false}
          padding="none"
          tone="strong"
          className="overflow-hidden rounded-[2rem] border-white/12 shadow-[0_24px_70px_rgba(27,44,74,0.12)] lg:col-span-5 lg:min-h-[34rem]"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs tracking-[0.1em] text-muted-foreground">
                  このサイトで分かること
                </p>
                <p className="mt-1 text-sm text-foreground">自己紹介と制作物を、見やすくまとめています</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-line-strong/80" />
                <span className="size-2 rounded-full bg-accent/80" />
              </div>
            </div>

            <div className="grid flex-1 gap-4 p-4 md:p-5">
              <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(242,246,252,0.04))] p-5 shadow-[0_14px_32px_rgba(27,44,74,0.08)]">
                <p className="text-xs tracking-[0.1em] text-muted-foreground">
                  まず見る場所
                </p>
                <div className="mt-5 space-y-4">
                  {overviewSteps.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <div className="pr-4">
                        <p className="text-sm font-medium text-foreground/92">{item.title}</p>
                        <p className="mt-1 text-[12px] leading-5 text-muted-foreground">{item.note}</p>
                      </div>
                      <span className="shrink-0 text-xs tracking-[0.08em] text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    GitHub
                  </p>
                  <p className="mt-3 text-[1rem] leading-[1.72] text-foreground md:text-[1.08rem]">
                    制作ごとの GitHub も、そのまま確認できます。
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    連絡先
                  </p>
                  <p className="mt-3 text-[1rem] leading-[1.72] text-foreground md:text-[1.08rem]">
                    メールで、気軽に連絡できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

function MetricCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_10px_24px_rgba(27,44,74,0.05)]">
      <p className="text-xs tracking-[0.1em] text-muted-foreground">{label}</p>
      <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p>
    </div>
  );
}
