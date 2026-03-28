import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ProjectShowcaseCard } from "@/components/home/project-showcase-card";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { InternalLink } from "@/components/ui/internal-link";

const projectItems = [
  {
    title: "クラウド基盤設計",
    category: "基盤設計",
    kind: "コンセプト案",
    description:
      "長期運用を前提に、基盤構成と監視設計をどのように整理するかをまとめたコンセプト案です。",
    focus: "構成整理、監視設計、長期運用を意識した情報の組み立て方",
    accent: "from-sky-500/30 via-cyan-500/10 to-transparent",
    className: "md:col-span-7",
    layout: "featured",
    visual: "server",
  },
  {
    title: "ニューラルデータ解析",
    category: "AI / 分析UI",
    kind: "UI study",
    description:
      "推論フローや実験結果を、日本語でも追いやすい情報構造に落とし込むための UI study です。",
    focus: "複雑な分析結果を、視線の流れを崩さず読ませる整理",
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
    className: "md:col-span-5",
    layout: "default",
    visual: "chip",
  },
  {
    title: "Tokenomics Explorer",
    category: "数値ダッシュボード",
    kind: "UI study",
    description:
      "複雑な数値情報を、信頼感を保ちながら整理して見せるダッシュボード study です。",
    focus: "数値の優先順位、ラベル設計、密度の高い画面の読みやすさ",
    accent: "from-slate-200/10 via-sky-500/10 to-transparent",
    className: "md:col-span-4",
    layout: "default",
    visual: "orb",
  },
  {
    title: "Vitreous UI Framework",
    category: "UI設計",
    kind: "UI study",
    description:
      "情報階層、面設計、静かな操作感をどう整えるかが分かる UI 設計の取り組みです。",
    focus: "面の階層、CTA の優先順位、落ち着いた操作感のつくり方",
    accent: "from-white/14 via-sky-400/14 to-transparent",
    className: "md:col-span-8",
    layout: "wide",
    visual: "canvas",
  },
] as const;

const stackItems = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Node.js",
  "PostgreSQL",
] as const;

export default function HomePage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <HeroSection />

      <SectionContainer spacing="default" className="pt-4 md:pt-8">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="ui-eyebrow text-accent/90">
              まず見てほしい制作
            </p>
            <h2 className="max-w-[12ch] text-balance text-[2rem] font-semibold leading-[1.35] tracking-[-0.02em] text-foreground md:text-[2.45rem]">
              実力が伝わりやすい制作から、
              優先して確認できる構成です。
            </h2>
            <p className="ui-copy max-w-[38rem] md:text-base">
              UI study とコンセプト案を分けて示し、何を作ったかと何を見ればよいかが分かる順番にしています。
              実案件のように見せるのではなく、制作の性質を明記したうえで実力が伝わる構成にしています。
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
            featured projects の見方
          </p>
          <p className="mt-2 max-w-3xl text-[13px] leading-[1.8] text-foreground/78">
            代表的な制作だけを抜き出し、性質ラベルと見るポイントを添えています。短時間で方向性を掴みたい場合は、ここから確認するのが最も分かりやすい導線です。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:items-start">
          {projectItems.map((project) => (
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
              <div className="mx-auto max-w-3xl space-y-6">
                <p className="ui-eyebrow text-accent/90">
                  応募・ご相談
                </p>
                <h2 className="text-balance font-display text-[2.15rem] leading-[1.3] tracking-[-0.02em] text-foreground md:text-[3.7rem]">
                  興味を持っていただけた場合に、
                  <span className="block">迷わず次へ進める入口を用意しています。</span>
                </h2>
                <p className="ui-copy mx-auto max-w-[42rem] md:text-base md:leading-8">
                  興味を持っていただけた場合は、連絡ページからメールまたは外部プロフィールをご確認ください。
                  現時点での受付方法を明確にしているため、迷わず連絡に進めます。
                </p>
              </div>

              <div className="mt-8 flex justify-center md:mt-10">
                <Button href="/contact" size="lg" className="min-w-[11rem]">
                  応募・相談方法を見る
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
              <div className="ui-chip inline-flex w-fit items-center px-3 py-1.5 text-muted-foreground shadow-none">
                新卒・インターン応募を想定したポートフォリオ
              </div>

              <div className="space-y-5 md:space-y-7">
                <p className="text-xs font-semibold tracking-[0.1em] text-accent/90">
                  日本の採用担当向けに整理した flagship page
                </p>
                <h1 className="max-w-[11ch] text-balance font-display text-[3.2rem] leading-[1.18] tracking-[-0.02em] md:text-[5.45rem]">
                  情報設計と実装で、
                  <span className="block text-accent">読みやすく信頼できる画面をつくる。</span>
                </h1>
                <p className="ui-copy max-w-[39rem] md:text-[1.04rem]">
                  UI の読みやすさ、情報の整理、落ち着いた実装品質を強みとしています。
                  制作一覧を見ると、どのような画面をつくり、どの判断に力を入れているかを短時間で確認できます。
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="ui-chip px-3.5 py-1.5 text-[11px] text-foreground/80 shadow-none">UI設計</span>
                  <span className="ui-chip px-3.5 py-1.5 text-[11px] text-foreground/80 shadow-none">情報整理</span>
                  <span className="ui-chip px-3.5 py-1.5 text-[11px] text-foreground/80 shadow-none">実装品質</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button href="/projects" size="lg" className="min-w-[13.5rem]">
                  まず制作を見る
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="/about"
                  variant="secondary"
                  size="lg"
                  className="min-w-[12rem]"
                >
                  経歴と強みを見る
                </Button>
              </div>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-3">
              <MetricCard label="見どころ" value="UI" note="読みやすい情報設計と画面整理" />
              <MetricCard label="強み" value="実装" note="構造を保ちながら丁寧に組むこと" />
              <MetricCard label="導線" value="Projects" note="最初に確認すべき制作を集約" />
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
                  採用担当向けの見方
                </p>
                <p className="mt-1 text-sm text-foreground">まず何を見ると分かりやすいか</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-line-strong/80" />
                <span className="size-2 rounded-full bg-accent/80" />
              </div>
            </div>

            <div className="grid flex-1 gap-4 p-5">
              <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(242,246,252,0.04))] p-5 shadow-[0_14px_32px_rgba(27,44,74,0.08)]">
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    先に確認しやすい要素
                  </p>
                <div className="mt-5 space-y-4">
                  {stackItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm text-foreground/92">{item}</span>
                      <span className="text-xs tracking-[0.08em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    まず分かること
                  </p>
                  <p className="mt-3 text-lg leading-[1.75] text-foreground">
                    情報設計から UI 実装まで、意図が読み取れる形に整理できること。
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    見る順番
                  </p>
                  <p className="mt-3 text-lg leading-[1.75] text-foreground">
                    Home で概要を見て、Projects で制作を確認し、必要なら About を見る流れです。
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
