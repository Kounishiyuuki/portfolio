import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { principles } from "@/components/skills/skills-data";

export function SkillsPrinciplesSection() {
  return (
    <section className="pt-10 md:pt-14">
      <Card
        interactive={false}
        inset
        padding="lg"
        tone="muted"
        className="rounded-[2rem] border-white/8 px-5 py-6 md:px-8 md:py-8"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.82fr)] lg:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="実装で重視すること"
              title="技術選定だけでなく、実装姿勢でも信頼をつくる。"
              description="ツールの新しさだけでなく、理解しやすさ、手戻りの少なさ、長く保てる構成を重視しています。"
              className="space-y-3"
              eyebrowClassName="ui-eyebrow text-muted-foreground"
              titleClassName="max-w-[12ch] text-balance text-[2rem] md:text-[2.85rem]"
              descriptionClassName="ui-copy max-w-xl"
            />

            <div className="grid gap-3">
              {principles.map((principle) => (
                <div
                  key={principle.index}
                  className="grid gap-4 rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-4 py-4 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:px-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-accent/14 text-[11px] font-semibold text-accent">
                    {principle.index}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[1rem] font-semibold tracking-[-0.04em] text-foreground md:text-[1.05rem]">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 max-w-[52ch] text-[13px] leading-6 text-muted-foreground md:text-[14px]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[24rem] lg:max-w-none">
            <div className="pointer-events-none absolute inset-x-[18%] top-6 h-24 rounded-full bg-accent/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[linear-gradient(145deg,rgba(238,243,255,0.12),rgba(27,34,46,0.82))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.22),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_24%)]" />
                <div className="absolute inset-x-0 top-[18%] h-px bg-white/10" />
                <div className="absolute inset-x-0 top-[38%] h-px bg-white/10" />
                <div className="absolute inset-x-0 top-[58%] h-px bg-white/10" />
                <div className="absolute inset-x-0 top-[78%] h-px bg-white/10" />
                <div className="absolute inset-y-0 left-[18%] w-px bg-white/10" />
                <div className="absolute inset-y-0 left-[41%] w-px bg-white/10" />
                <div className="absolute inset-y-0 left-[64%] w-px bg-white/10" />
                <div className="absolute inset-y-0 left-[84%] w-px bg-white/10" />

                <div className="absolute left-[10%] top-[16%] h-12 w-20 rounded-[1rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />
                <div className="absolute left-[36%] top-[30%] h-16 w-24 rounded-[1.1rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />
                <div className="absolute left-[20%] top-[56%] h-14 w-28 rounded-[1.1rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.03))]" />
                <div className="absolute left-[58%] top-[58%] h-12 w-20 rounded-[0.95rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.03))]" />

                <div className="absolute left-[29%] top-[22%] h-px w-[14%] bg-accent/50" />
                <div className="absolute left-[48%] top-[38%] h-[18%] w-px bg-accent/40" />
                <div className="absolute left-[34%] top-[63%] h-px w-[24%] bg-accent/45" />
                <div className="absolute left-[68%] top-[62%] h-[11%] w-px bg-accent/35" />
              </div>

              <div className="absolute bottom-2 left-2 rounded-[1rem] border border-white/10 bg-surface/86 px-3 py-2 shadow-[0_12px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
                  補助イメージ
                </p>
                <p className="mt-1 text-[12px] font-medium text-foreground/90">
                  構成を分けて考える
                  <span className="block text-foreground/66">システム視点</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
