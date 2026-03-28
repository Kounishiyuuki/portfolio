import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function NexusQuantMediaSection() {
  return (
    <section className="space-y-8 pt-4 md:space-y-10">
      <SectionHeader
        align="center"
        eyebrow="補助ビジュアル"
        description="まず文脈を理解したあとで、画面全体の完成度を一枚で確認できるようにしています。"
        descriptionClassName="max-w-2xl text-[14px]"
      />

      <Card
        padding="none"
        tone="strong"
        className="overflow-hidden rounded-[2rem] border-white/10"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[linear-gradient(135deg,rgba(4,18,29,1),rgba(3,8,16,0.96))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(76,220,255,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
          <div className="absolute inset-6 rounded-[1.6rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(7,24,34,0.88),rgba(2,8,14,0.92))] shadow-[0_34px_80px_rgba(0,0,0,0.34)] md:inset-12">
            <div className="grid h-full grid-cols-12 gap-3 p-4 md:gap-4 md:p-7">
              <div className="col-span-7 grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  {[0, 1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-cyan-200/10 bg-cyan-300/[0.04] p-3"
                    >
                      <div className="h-2 w-20 rounded-full bg-cyan-200/15" />
                      <div className="mt-4 h-20 rounded-[0.9rem] bg-[linear-gradient(180deg,rgba(80,230,255,0.14),rgba(80,230,255,0.02))]" />
                    </div>
                  ))}
                </div>
                <div className="grid h-full grid-cols-[1.2fr_0.8fr] gap-3">
                  <div className="rounded-[1rem] border border-cyan-200/10 bg-cyan-300/[0.04] p-3">
                    <div className="h-2 w-16 rounded-full bg-cyan-200/15" />
                    <div className="mt-4 flex h-[calc(100%-1.5rem)] items-end gap-2">
                      {[36, 58, 48, 72, 66, 88, 74, 92].map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className="flex-1 rounded-t-full bg-[linear-gradient(180deg,rgba(80,230,255,0.35),rgba(80,230,255,0.06))]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1rem] border border-cyan-200/10 bg-cyan-300/[0.04] p-3">
                    <div className="h-2 w-14 rounded-full bg-cyan-200/15" />
                    <div className="mt-4 grid h-[calc(100%-1.5rem)] grid-cols-2 gap-2">
                      {[0, 1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="rounded-[0.8rem] border border-cyan-200/8 bg-[radial-gradient(circle_at_50%_40%,rgba(95,245,255,0.18),rgba(80,230,255,0.02)_70%)]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-5 flex flex-col gap-3">
                <div className="rounded-[1rem] border border-cyan-200/10 bg-cyan-300/[0.04] p-3">
                  <div className="h-2 w-20 rounded-full bg-cyan-200/15" />
                  <div className="mt-4 space-y-2">
                    {[0, 1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="h-7 rounded-full bg-[linear-gradient(90deg,rgba(80,230,255,0.14),rgba(80,230,255,0.03))]"
                      />
                    ))}
                  </div>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-3">
                  {[0, 1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-cyan-200/10 bg-cyan-300/[0.04]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card
          inset
          padding="md"
          tone="muted"
          className="rounded-[1.5rem] border-white/10 px-5 py-5"
        >
          <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
            役割
          </p>
          <p className="mt-3 text-sm leading-7 text-foreground/82">
            補助ビジュアルは別の話題を増やすためではなく、本文で伝えた内容の完成度を支えるために置いています。
          </p>
        </Card>
        <Card
          inset
          padding="md"
          tone="muted"
          className="rounded-[1.5rem] border-white/10 px-5 py-5"
        >
          <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
            配置の考え方
          </p>
          <p className="mt-3 text-sm leading-7 text-foreground/82">
            先に情報を理解し、その後でビジュアルを確認する順番にすることで、ページ全体の流れを崩しにくくしています。
          </p>
        </Card>
      </div>
    </section>
  );
}
