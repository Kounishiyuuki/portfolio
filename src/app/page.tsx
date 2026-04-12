import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ProjectShowcaseCard } from "@/components/home/project-showcase-card";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { InternalLink } from "@/components/ui/internal-link";
import { featuredProjectItems } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

const mailToHref = `mailto:${siteConfig.email}`;

const overviewSteps = [
  {
    label: "01",
    title: "制作物を見る",
    note: "Projects で制作の内容、技術、GitHub への導線をまとめて確認できます。",
  },
  {
    label: "02",
    title: "プロフィールを見る",
    note: "About では所属や主軸技術、画面づくりで大切にしていることを紹介しています。",
  },
  {
    label: "03",
    title: "GitHub / 連絡先へ進む",
    note: "実装を見る場合は GitHub、ご連絡はメールから自然に進める構成です。",
  },
] as const;

export default function HomePage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <HeroSection />

      <SectionContainer spacing="default" className="pt-4 md:pt-8">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="ui-eyebrow text-accent/90">Featured Works</p>
            <h2 className="max-w-[12ch] text-balance text-[1.88rem] font-semibold leading-[1.38] tracking-[-0.02em] text-foreground md:text-[2.28rem]">
              まず見てほしい制作を、
              すぐに確認できるようにしています。
            </h2>
            <p className="ui-copy max-w-[36rem] md:text-[15px]">
              内容が伝わりやすいものを先に並べ、詳しく見たい場合は Projects 一覧と GitHub に進めるようにしています。
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

        <div className="mb-5 rounded-[1.45rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,249,253,0.82))] px-5 py-4 shadow-[0_10px_26px_rgba(27,44,74,0.05)]">
          <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
            注目制作の見方
          </p>
          <p className="mt-2 max-w-3xl text-[13px] leading-[1.8] text-foreground/78">
            代表的な制作だけを抜き出し、性質ラベルと見るポイントを添えています。短時間で方向性を掴みたい場合は、ここから確認するのが最も分かりやすい導線です。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:items-start">
          {featuredProjectItems.map((project) => (
            <ProjectShowcaseCard key={project.title} {...project} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer spacing="default" className="pt-6 md:pt-10">
        <Card
          interactive={false}
          inset
          padding="lg"
          tone="muted"
          className="overflow-hidden rounded-[2.2rem] border-white/12 px-5 py-8 md:px-10 md:py-12"
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-x-[14%] top-8 h-28 rounded-full bg-accent/8 blur-3xl" />
            <div className="relative rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-6 py-12 text-center shadow-[0_18px_48px_rgba(27,44,74,0.09)] md:px-12 md:py-16">
              <div className="mx-auto max-w-3xl space-y-5">
                <p className="ui-eyebrow text-accent/90">Contact</p>
                <h2 className="text-balance font-display text-[1.92rem] leading-[1.34] tracking-[-0.02em] text-foreground md:text-[3.05rem]">
                  制作やプロフィールを見たあとに、
                  <span className="block">そのまま連絡先へ進めます。</span>
                </h2>
                <p className="ui-copy mx-auto max-w-[36rem] md:text-[15px] md:leading-7">
                  メールと GitHub をシンプルにまとめているので、
                  ご質問やご相談がある場合も自然に確認できます。
                </p>
              </div>

              <div className="mt-8 flex justify-center md:mt-9">
                <Button href="/contact" size="lg" className="min-w-[11rem]">
                  連絡先を見る
                </Button>
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
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(21rem,0.82fr)]">
        <Card
          interactive={false}
          inset
          padding="lg"
          tone="muted"
          className="overflow-hidden rounded-[2rem] lg:min-h-[34rem]"
        >
          <div className="relative flex h-full flex-col justify-between gap-12 md:gap-14">
            <div className="pointer-events-none absolute inset-y-0 right-[-14%] top-12 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute left-[8%] top-8 h-24 w-24 rounded-full bg-white/30 blur-3xl" />

            <div className="relative max-w-[42rem] space-y-8 md:space-y-10">
              <div className="space-y-2.5">
                <p className="text-[1.28rem] font-semibold tracking-[-0.035em] text-foreground md:text-[1.6rem]">
                  {siteConfig.name}
                </p>
                <p className="text-[11px] font-medium tracking-[0.08em] text-muted-foreground/90">
                  {siteConfig.role}
                </p>
              </div>

              <div className="space-y-4.5 md:space-y-5">
                <h1 className="max-w-[10ch] text-balance font-display text-[2.34rem] leading-[1.22] tracking-[-0.024em] md:text-[4.05rem]">
                  学生として取り組んでいる
                  <span className="text-accent">制作と実装</span>
                  をまとめたポートフォリオです。
                </h1>
                <p className="ui-copy max-w-[34rem] md:text-[15px] md:leading-[1.9]">
                  Swift / Kotlin / Next.js を軸に、情報設計を意識した UI 実装に取り組んでいます。
                  制作物、プロフィール、GitHub、連絡先をシンプルに確認できる構成です。
                </p>
                <div className="flex flex-wrap gap-2.5 pt-0.5">
                  <span className="ui-chip px-3.5 py-1.5 text-[11px] text-foreground/80 shadow-none">Swift</span>
                  <span className="ui-chip px-3.5 py-1.5 text-[11px] text-foreground/80 shadow-none">Kotlin</span>
                  <span className="ui-chip px-3.5 py-1.5 text-[11px] text-foreground/80 shadow-none">Next.js</span>
                  <span className="ui-chip px-3.5 py-1.5 text-[11px] text-foreground/80 shadow-none">情報設計</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button href="/projects" size="lg" className="min-w-[13rem]">
                  制作物を見る
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href={siteConfig.githubUrl}
                  variant="secondary"
                  size="lg"
                  className="min-w-[10.5rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  href={mailToHref}
                  variant="ghost"
                  size="lg"
                  className="min-w-[10rem] border border-line/75 bg-white/70 text-foreground/78 hover:bg-white/86"
                >
                  メール
                </Button>
                <Button
                  href="/about"
                  variant="secondary"
                  size="lg"
                  className="min-w-[11rem]"
                >
                  プロフィールを見る
                </Button>
              </div>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-3">
              <MetricCard label="主軸" value="UI 実装" note="読みやすさを意識した画面づくり" />
              <MetricCard label="技術" value="Web / Mobile" note="Swift / Kotlin / Next.js" />
              <MetricCard label="導線" value="Projects" note="制作物、GitHub、連絡先を確認しやすい構成" />
            </div>
          </div>
        </Card>

        <Card
          interactive={false}
          padding="none"
          tone="strong"
          className="overflow-hidden rounded-[2rem] border-white/12 lg:min-h-[34rem]"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs tracking-[0.1em] text-muted-foreground">
                  このサイトで分かること
                </p>
                <p className="mt-1 text-sm text-foreground">自己紹介と制作物を、順番に追いやすくしています</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-line-strong/80" />
                <span className="size-2 rounded-full bg-accent/80" />
              </div>
            </div>

            <div className="grid flex-1 gap-4 p-5">
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    GitHub
                  </p>
                  <p className="mt-3 text-lg leading-[1.75] text-foreground">
                    実装を確認したい場合は、制作物一覧からそのまま GitHub に進めます。
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    連絡先
                  </p>
                  <p className="mt-3 text-lg leading-[1.75] text-foreground">
                    ご質問やご相談がある場合は、Contact からメールでご連絡いただけます。
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
