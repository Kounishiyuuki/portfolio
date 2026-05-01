import { Card } from "@/components/ui/card";
import { nexusQuantBadgeItems, nexusQuantStatItems } from "@/components/projects/nexus-quant-data";

export function NexusQuantHeroSection() {
  return (
    <section>
      <Card
        padding="none"
        tone="strong"
        className="relative overflow-hidden rounded-[2.1rem] border-white/12 shadow-[0_24px_72px_rgba(27,44,74,0.12)]"
      >
        <div className="relative min-h-[34rem] overflow-hidden px-5 pb-9 pt-5 md:min-h-[40rem] md:px-8 md:pb-11 md:pt-6">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,21,0.08),rgba(7,13,21,0.42)_48%,rgba(245,247,250,0.98)_100%),radial-gradient(circle_at_50%_30%,rgba(109,212,255,0.2),transparent_24%),linear-gradient(135deg,rgba(12,20,32,0.92),rgba(7,12,20,0.7))]" />
          <div className="absolute inset-x-0 top-0 h-[74%] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_52%)]" />
          <div className="absolute inset-0 opacity-60">
            {Array.from({ length: 17 }).map((_, index) => (
              <span
                key={index}
                className="absolute left-1/2 top-[8%] h-[34rem] w-px bg-[linear-gradient(180deg,rgba(120,225,255,0.48),rgba(120,225,255,0))]"
                style={{
                  transform: `translateX(-50%) rotate(${index * 8 - 64}deg)`,
                  transformOrigin: "top center",
                }}
              />
            ))}
          </div>
          <div className="absolute inset-x-[14%] top-[18%] h-64 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute inset-[8%] rounded-[2rem] border border-white/8" />
          <div className="absolute left-1/2 top-[22%] h-[15.5rem] w-[16rem] -translate-x-1/2 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.16)] blur-[0.2px] md:h-[19rem] md:w-[19rem]" />
          <div className="absolute left-1/2 top-[15%] h-40 w-40 -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.2),rgba(255,255,255,0.03)_65%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[11rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_24%,rgba(248,249,251,0.96)_88%)]" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-1">
              <p className="text-[11px] font-semibold tracking-[0.1em] text-foreground/78">
                制作詳細
              </p>
              <span className="rounded-pill border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[10px] tracking-[0.08em] text-foreground/68">
                UIスタディ
              </span>
            </div>

            <div className="relative mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-2 text-center sm:px-4">
              <div className="rounded-pill border border-white/12 bg-white/[0.08] px-4 py-2 text-[10px] font-medium tracking-[0.08em] text-foreground/70 backdrop-blur-md">
                金融・分析領域を想定した UIスタディ
              </div>
              <h1 className="ui-display-title mt-6 max-w-[9ch] text-foreground md:text-[clamp(2.6rem,5vw,5.2rem)]">
                Nexus
                <span className="text-accent"> Quant</span>
              </h1>
              <p className="ui-copy mt-4 max-w-[34rem] text-foreground/62 md:text-[15px]">
                実案件紹介ではなく、数字・グラフ・補助情報をどう整理するかという判断が伝わるように構成した制作詳細ページです。
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                {nexusQuantBadgeItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-pill border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] text-foreground/74 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-auto">
              <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2 xl:grid-cols-4">
                {nexusQuantStatItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.2rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.84))] px-5 py-4 shadow-[0_18px_40px_rgba(18,28,42,0.1)]"
                  >
                    <p className="text-[10px] tracking-[0.08em] text-slate-500/90">
                      {item.label}
                    </p>
                    <p className="mt-2.5 text-[1.05rem] font-semibold tracking-[-0.04em] text-slate-900 md:text-[1.14rem]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
