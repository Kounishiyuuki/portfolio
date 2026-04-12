import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { siteConfig } from "@/lib/site-config";

const mailSubject = "ポートフォリオについてご連絡です";

const mailBodyLines = [
  "ご所属 / お名前:",
  "",
  "ご連絡の背景:",
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
    note: "ご質問やご相談がある場合は、まずこちらからご連絡いただければ大丈夫です。",
    href: mailToHref,
    action: "メールを作成する",
    icon: "@",
    iconClassName: "bg-[#2563eb] text-white border-[#2563eb]/20",
  },
  {
    label: "GitHub",
    value: "github.com/Kounishiyuuki",
    note: "実装の進め方や、扱っている技術の傾向を確認したい場合の補助導線です。",
    href: siteConfig.githubUrl,
    action: "GitHubを見る",
    icon: "</>",
    iconClassName: "bg-[#111827] text-white border-[#111827]/20",
  },
] as const;

const collaborationNotes = [
  "ポートフォリオを見たうえでのご質問",
  "新卒応募やインターンに関するご相談",
  "制作や得意領域についての確認",
] as const;

const messageTemplate = [
  {
    label: "ご所属 / お名前",
    note: "会社名や学校名、ご担当者名があると分かりやすいです。",
  },
  {
    label: "ご連絡の背景",
    note: "新卒応募、インターン相談、ポートフォリオに関するご質問などを簡単にご記載ください。",
  },
  {
    label: "ご連絡内容",
    note: "面談希望、確認したい点、見てほしい制作などがあればそのまま書いていただけます。",
  },
  {
    label: "希望時期",
    note: "もし日程感があれば、候補や目安を添えていただけると助かります。",
  },
] as const;

export default function ContactPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <section className="pt-8 md:pt-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(22rem,1.12fr)] lg:items-start">
          <div className="space-y-5 md:space-y-6">
            <div className="space-y-4.5">
              <div className="ui-chip inline-flex w-fit items-center px-3 py-1.5 text-muted-foreground shadow-none">
                portfolio の最後に置く、連絡先ページです
              </div>
              <p className="ui-eyebrow text-accent/90">連絡先</p>
              <h1 className="max-w-[8ch] text-balance font-display text-[2.42rem] leading-[1.25] tracking-[-0.02em] text-foreground md:text-[3.7rem]">
                ご質問やご相談を、
                <span className="block text-accent">シンプルに確認できるように。</span>
              </h1>
              <p className="ui-copy max-w-[33rem]">
                このポートフォリオについてのご質問や、新卒応募・インターンのご相談などに使えるよう、
                メールと GitHub を分かりやすくまとめています。
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
                    メールを主な連絡方法とし、GitHub は制作や実装の補足を見ていただくために置いています。
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
                                おすすめ
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
                            className={[
                              "mt-3 inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-[12px] font-semibold tracking-[0.01em] transition-[border-color,color,background-color,box-shadow] duration-200",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/42 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                              index === 0
                                ? "border border-accent/16 bg-accent text-accent-foreground shadow-[0_10px_22px_rgba(88,148,255,0.16)] hover:bg-accent/94"
                                : "border border-line/75 bg-white/80 text-accent hover:border-line-strong/85 hover:bg-white hover:text-accent/90",
                            ].join(" ")}
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
                    ご連絡いただきやすい内容
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/82">
                    最初のご連絡として送りやすい内容を、簡単にまとめています。
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
                    {siteConfig.school} {siteConfig.faculty} / {siteConfig.department} / {siteConfig.role}
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
            className="relative overflow-hidden rounded-[2rem] px-5 py-5 md:px-7 md:py-6.5"
          >
            <div className="pointer-events-none absolute inset-x-[18%] top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(88,148,255,0.1),transparent_58%)]" />
            <div className="pointer-events-none absolute inset-x-[24%] bottom-8 h-20 rounded-full bg-white/30 blur-3xl" />

            <div className="relative space-y-6">
              <div className="space-y-2 border-b border-line/80 pb-4.5 md:pb-5">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                  ご連絡方法
                </p>
                <h2 className="text-[1.34rem] font-semibold leading-[1.45] tracking-[-0.02em] text-foreground md:text-[1.56rem]">
                  まずはメールをご利用いただく形が分かりやすいです。
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  ポートフォリオに関するご質問やご相談など、
                  最初の連絡に使いやすいひな型を入れた状態でメールを始められます。
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,249,253,0.84))] p-5 shadow-[0_12px_26px_rgba(27,44,74,0.06)]">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                  メールに入れていただくと分かりやすい内容
                </p>
                <p className="mt-2 text-[13px] leading-6 text-foreground/74">
                  クリックするとメールアプリが開き、下記の項目が本文に入った状態になります。
                  必要なところだけ書いていただければ大丈夫です。
                </p>
                <div className="mt-4 space-y-3">
                  {messageTemplate.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,249,253,0.76))] px-4 py-3"
                    >
                      <p className="text-sm font-medium text-foreground/88">{item.label}</p>
                      <p className="mt-1.5 text-[12px] leading-5 text-muted-foreground">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] px-4 py-4 shadow-[0_12px_28px_rgba(27,44,74,0.06)]">
                <div className="space-y-3">
                  <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                    連絡する
                  </p>
                  <Button href={mailToHref} size="lg" className="w-full rounded-[1rem]">
                    メールを作成する
                  </Button>
                  <Button
                    href={siteConfig.githubUrl}
                    variant="ghost"
                    size="lg"
                    className="w-full rounded-[1rem] border border-line/70 bg-white/60 text-foreground/76 hover:bg-white/78 hover:text-foreground/88"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub を補助的に見る
                  </Button>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <p className="text-center text-[11px] leading-5 text-muted-foreground">
                  メール作成ボタンを押すと、ひな型が入った状態でそのまま書き始められます。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageContainer>
  );
}
