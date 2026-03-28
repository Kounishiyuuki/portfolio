import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { siteConfig } from "@/lib/site-config";

const mailSubject = "ポートフォリオを拝見し、応募・ご相談のご連絡です";

const mailBodyLines = [
  "ご所属 / お名前:",
  "",
  "応募・ご相談の背景:",
  "",
  "ご連絡内容:",
  "",
  "希望時期:",
  "",
];

const mailToHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBodyLines.join("\n"))}`;

const contactChannels = [
  {
    label: "メール",
    value: siteConfig.email,
    note: "現在の正式な受付方法です。応募やインターンのご相談を、そのまま始められるメール作成画面が開きます。",
    href: mailToHref,
    action: "応募・相談メールを作成",
    icon: "@",
    iconClassName: "bg-[#2563eb] text-white border-[#2563eb]/20",
  },
  {
    label: "GitHub",
    value: "github.com/yuukikounishi",
    note: "実装の進め方や、扱っている技術の傾向を確認したい場合の補助導線です。",
    href: siteConfig.githubUrl,
    action: "GitHubで実装を見る",
    icon: "</>",
    iconClassName: "bg-[#111827] text-white border-[#111827]/20",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yuki-kounishi",
    note: "プロフィールの確認や、まず短くご連絡したい場合の補助導線です。",
    href: siteConfig.linkedInUrl,
    action: "LinkedInを見る",
    icon: "in",
    iconClassName: "bg-[#0a66c2] text-white border-[#0a66c2]/20",
  },
] as const;

const collaborationNotes = [
  "新卒採用・インターン応募に関するご連絡",
  "ポートフォリオを見たうえでの、面談や選考に関するご相談",
  "UI実装、情報設計、フロントエンドの得意領域に関する確認",
] as const;

const messageTemplate = [
  "1. ご所属 / お名前",
  "2. 応募・ご相談の背景",
  "3. ご連絡内容",
  "4. 希望時期",
] as const;

export default function ContactPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <section className="pt-8 md:pt-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(22rem,1.12fr)] lg:items-start">
          <div className="space-y-5 md:space-y-6">
            <div className="space-y-5">
              <div className="ui-chip inline-flex w-fit items-center px-3 py-1.5 text-muted-foreground shadow-none">
                portfolio の最後に置く、応募・相談の入口です
              </div>
              <p className="ui-eyebrow text-accent/90">応募・ご相談</p>
              <h1 className="max-w-[10ch] text-balance font-display text-[3rem] leading-[1.22] tracking-[-0.02em] text-foreground md:text-[4.8rem]">
                最後の連絡導線まで、
                <span className="block text-accent">迷わず進める形に整える。</span>
              </h1>
              <p className="ui-copy max-w-[36rem]">
                新卒・インターン応募やご相談の入口として、現在の正式な受付方法をメールに一本化しています。
                送信責務が曖昧なフォームは置かず、確実に連絡できる導線だけを残しています。
              </p>
            </div>

            <Card
              interactive={false}
              inset
              padding="lg"
              tone="muted"
              className="rounded-[1.8rem] px-5 py-5 md:px-6 md:py-6"
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                    連絡方法
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/82">
                    まずはメールを正規の窓口とし、GitHub と LinkedIn は判断材料や補助導線として置いています。
                  </p>
                </div>

                <div className="space-y-3.5">
                  {contactChannels.map((item, index) => (
                    <div
                      key={item.label}
                      className={[
                        "rounded-[1.35rem] border border-line/80 px-4 py-4 shadow-[0_10px_24px_rgba(27,44,74,0.06)]",
                        index === 0
                          ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,248,255,0.88))] shadow-[0_14px_30px_rgba(37,99,235,0.08)]"
                          : "bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,249,253,0.84))]",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`flex size-10 shrink-0 items-center justify-center rounded-[1rem] border text-[11px] font-semibold tracking-[-0.02em] ${item.iconClassName}`}
                        >
                          {item.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                              {item.label}
                            </p>
                            {index === 0 ? (
                              <span className="rounded-pill border border-accent/14 bg-accent/10 px-2 py-0.5 text-[9px] font-semibold tracking-[0.04em] text-accent">
                                正式窓口
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1 break-all text-[1rem] font-semibold tracking-[-0.02em] text-foreground/94">
                            {item.value}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-5 text-muted-foreground">
                            {item.note}
                          </p>
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="mt-3 inline-flex items-center gap-1.5 rounded-pill border border-line/75 bg-white/80 px-3 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-accent transition-[border-color,color,background-color,box-shadow] duration-200 hover:border-line-strong/85 hover:bg-white hover:text-accent/90"
                          >
                            {item.action}
                            <ArrowRight className="size-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card
              interactive={false}
              inset
              padding="lg"
              tone="default"
              className="rounded-[1.8rem] px-5 py-5 md:px-6 md:py-6"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                    連絡していただきやすい内容
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/82">
                    応募や面談前提の確認を含め、比較的スムーズにお返事しやすい内容です。
                  </p>
                </div>

                <div className="space-y-2.5">
                  {collaborationNotes.map((note, index) => (
                    <div key={note} className="flex items-start gap-3">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-line/80 bg-background text-[10px] font-semibold text-accent">
                        0{index + 1}
                      </div>
                      <p className="pt-1 text-[13px] leading-6 text-muted-foreground">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.15rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,249,253,0.72))] px-4 py-3">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">
                    所属
                  </p>
                  <p className="mt-1.5 text-sm text-foreground/88">
                    {siteConfig.school} {siteConfig.faculty} / {siteConfig.role}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card
            interactive={false}
            inset
            padding="lg"
            tone="muted"
            className="relative overflow-hidden rounded-[2rem] px-5 py-5 md:px-7 md:py-7"
          >
            <div className="pointer-events-none absolute inset-x-[18%] top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(88,148,255,0.1),transparent_58%)]" />
            <div className="pointer-events-none absolute inset-x-[24%] bottom-8 h-20 rounded-full bg-white/30 blur-3xl" />

            <div className="relative space-y-7">
              <div className="space-y-2 border-b border-line/80 pb-5 md:pb-6">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                  正式な受付方法
                </p>
                <h2 className="text-[1.6rem] font-semibold leading-[1.45] tracking-[-0.02em] text-foreground md:text-[1.85rem]">
                  現時点では、応募・ご相談はメールから受け付けています。
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  action や server action を持たないフォームを置くと、送れそうに見えて実際には責務が不明になります。
                  そのため、今は応募やご相談を始めやすいメール作成画面を正式な入口にしています。
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,249,253,0.84))] p-5 shadow-[0_12px_26px_rgba(27,44,74,0.06)]">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                  メール作成時のひな型
                </p>
                <div className="mt-4 space-y-3">
                  {messageTemplate.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,249,253,0.72))] px-4 py-3 text-sm text-foreground/86"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] px-4 py-4 shadow-[0_12px_28px_rgba(27,44,74,0.06)]">
                <div className="space-y-3">
                  <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                    最後の導線
                  </p>
                  <Button href={mailToHref} size="lg" className="w-full rounded-[1rem]">
                    応募・相談メールを作成する
                  </Button>
                  <Button
                    href={siteConfig.linkedInUrl}
                    variant="secondary"
                    size="lg"
                    className="w-full rounded-[1rem]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn でプロフィールを見る
                  </Button>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <p className="text-center text-[11px] leading-5 text-muted-foreground">
                  クリックするとメールクライアントが開きます。本文には、応募やご相談を始めやすい最低限のひな型を入れています。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageContainer>
  );
}
