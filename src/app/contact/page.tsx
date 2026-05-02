import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import {
  collaborationNotes,
  contactChannels,
  contactMailtoHref,
  messageTemplate,
} from "@/lib/contact-data";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <section className="pt-8 md:pt-12">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(22rem,1.08fr)] xl:items-start xl:gap-6">
          <div className="space-y-5 md:space-y-6">
            <div className="layout-header space-y-4">
              <p className="ui-eyebrow text-accent/90">連絡先</p>
              <h1 className="ui-page-title layout-title-page text-foreground md:text-[clamp(2.2rem,3.7vw,3.7rem)]">
                <span className="text-accent">メールと GitHub</span> をまとめています。
              </h1>
              <p className="ui-copy layout-reading">
                制作のことを聞きたいときや、コードを見たいときに、そのまま確認できるようにしています。
              </p>
            </div>

            <Card
              interactive={false}
              inset
              padding="lg"
              tone="muted"
              className="rounded-[1.8rem] px-5 py-5 shadow-[0_16px_40px_rgba(27,44,74,0.075)] md:px-6 md:py-6"
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                    連絡方法
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/82">
                    まずはメールが分かりやすく、GitHub は補助的に見ていただけます。
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
                              "mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-pill px-3 py-1.5 text-[12px] font-semibold tracking-[0.01em] transition-[border-color,color,background-color,box-shadow] duration-200 sm:w-auto",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/42 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                              index === 0
                                ? "border border-accent/16 bg-white/84 text-accent shadow-[0_10px_22px_rgba(88,148,255,0.08)] hover:bg-accent/8"
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
              className="rounded-[1.8rem] px-5 py-5 shadow-[0_14px_34px_rgba(27,44,74,0.06)] md:px-6 md:py-6"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                    こんな内容で使えます
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/82">
                    最初のメールで書きやすい内容を、簡単にまとめています。
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
            className="relative overflow-hidden rounded-[2rem] px-5 py-5 shadow-[0_18px_46px_rgba(27,44,74,0.08)] md:px-7 md:py-7"
          >
            <div className="pointer-events-none absolute inset-x-[18%] top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(88,148,255,0.1),transparent_58%)]" />
            <div className="pointer-events-none absolute inset-x-[24%] bottom-8 h-20 rounded-full bg-white/30 blur-3xl" />

            <div className="relative space-y-6">
              <div className="space-y-2 border-b border-line/80 pb-4.5 md:pb-5">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                  ご連絡方法
                </p>
                <h2 className="ui-card-title layout-title-card text-foreground md:text-[clamp(1.3rem,1.2vw,1.58rem)]">
                  まずはメールからご連絡ください。
                </h2>
                <p className="layout-reading text-sm leading-6 text-muted-foreground">
                  最初の連絡で書きやすいように、ひな型を入れたメールを用意しています。
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,249,253,0.84))] p-5 shadow-[0_12px_26px_rgba(27,44,74,0.06)]">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
                  メールに入れておくと分かりやすい内容
                </p>
                <p className="mt-2 text-[13px] leading-6 text-foreground/74">
                  ボタンを押すと、下の項目が入ったメールをそのまま開けます。必要なところだけ書いていただければ大丈夫です。
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
                  <Button href={contactMailtoHref} variant="secondary" size="lg" className="w-full rounded-[1rem]">
                    メールで連絡する
                  </Button>
                  <Button
                    href={siteConfig.githubUrl}
                    variant="ghost"
                    size="lg"
                    className="w-full rounded-[1rem] border border-line/70 bg-white/60 text-foreground/76 hover:bg-white/78 hover:text-foreground/88"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHubを見る
                  </Button>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <p className="text-center text-[11px] leading-5 text-muted-foreground">
                  ボタンを押すと、ひな型が入った状態でメールを書き始められます。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageContainer>
  );
}
