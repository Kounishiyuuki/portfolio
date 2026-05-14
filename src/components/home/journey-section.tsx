import { Card } from "@/components/ui/card";
import { InternalLink } from "@/components/ui/internal-link";
import { ArrowRight } from "@/components/ui/icons";
import { SectionContainer } from "@/components/ui/section-container";

const journeyItems = [
  {
    label: "2005年",
    title: "金沢で育つ",
    description: "金沢で生まれ、高校までを過ごす。",
  },
  {
    label: "大学入学",
    title: "制作に関心を持つ",
    description: "アプリ開発、Web制作、UI設計に関心を持つ。",
  },
  {
    label: "大学2年",
    title: "プロジェクト活動で副リーダーを担当",
    description: "プロジェクト活動で副リーダーを担当する。",
  },
  {
    label: "現在",
    title: "制作を継続",
    description: "モバイルアプリ、Web、UIを中心に制作を継続。",
  },
] as const;

export function JourneySection() {
  return (
    <SectionContainer spacing="compact" className="pt-5 md:pt-8">
      <Card
        interactive={false}
        inset
        padding="none"
        tone="muted"
        className="relative overflow-hidden rounded-[1.8rem] border-white/12 px-5 py-6 shadow-[0_16px_42px_rgba(27,44,74,0.07)] md:px-7 md:py-7"
      >
        <div className="pointer-events-none absolute inset-x-[16%] top-0 h-24 rounded-full bg-accent/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-white/28 blur-3xl" />

        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="layout-header space-y-3">
            <p className="ui-eyebrow text-accent/90">Journey</p>
            <h2 className="ui-section-title layout-title-section text-foreground">
              これまでの歩み
            </h2>
            <InternalLink
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent/78"
            >
              詳しいプロフィールを見る
              <ArrowRight className="size-4" />
            </InternalLink>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {journeyItems.map((item) => (
              <div
                key={`${item.label}-${item.title}`}
                className="rounded-[1.25rem] border border-line/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(247,250,255,0.62))] px-4 py-4 shadow-[0_10px_26px_rgba(27,44,74,0.045)]"
              >
                <p className="text-[10px] font-semibold tracking-[0.12em] text-accent/90">
                  {item.label}
                </p>
                <h3 className="mt-2 text-[1rem] font-semibold leading-[1.45] tracking-[-0.025em] text-foreground md:text-[1.08rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.75] text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
}
