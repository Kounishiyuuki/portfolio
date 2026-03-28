import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InfoChip } from "@/components/ui/info-chip";
import { MetaRowList } from "@/components/ui/meta-row-list";
import {
  nexusQuantDetailSections,
  nexusQuantImpactCards,
  nexusQuantOverviewPoints,
  nexusQuantProjectMetaRows,
  nexusQuantSideInfoGroups,
} from "@/components/projects/nexus-quant-data";

export function NexusQuantContentSection() {
  return (
    <section className="grid gap-10 xl:grid-cols-[minmax(0,1.35fr)_19rem] xl:gap-8">
      <div className="space-y-14">
        <Card
          inset
          padding="lg"
          tone="muted"
          className="rounded-[2rem] border-white/10 px-6 py-7 md:px-8 md:py-8"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent/70" />
                <p className="text-[11px] font-semibold tracking-[0.1em] text-foreground">
                  要約
                </p>
              </div>

              <div className="space-y-4">
                <p className="max-w-[42rem] text-[15px] leading-[2.05] text-muted-foreground md:text-[15.5px]">
                  Nexus Quant は、採用の場でじっくり読まれることを前提に設計した UI study の制作詳細ページです。
                  何を作ったかだけでなく、どこを見れば設計判断や画面整理の考え方が分かるかを明確にしています。
                </p>

                <div className="space-y-3">
                  {nexusQuantOverviewPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2.5 size-2 rounded-full bg-accent" />
                      <p className="text-sm leading-[1.95] text-foreground/86 md:text-[14px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4 md:p-5">
              <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
                一覧で確認
              </p>
              <MetaRowList rows={nexusQuantProjectMetaRows} className="mt-4" />
            </div>
          </div>
        </Card>

        <div className="space-y-14">
          {nexusQuantDetailSections.map((section) => (
            <article key={section.title} className="grid gap-4 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-6">
              <div className="pt-1">
                <p className="text-[11px] font-semibold tracking-[0.1em] text-accent/90">
                  {section.eyebrow}
                </p>
              </div>
              <div className="space-y-5">
                <h2 className="max-w-[14ch] text-balance font-display text-[1.95rem] leading-[1.35] tracking-[-0.02em] text-foreground md:text-[2.45rem]">
                  {section.title}
                </h2>
                <div className="max-w-3xl space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-[42rem] text-[15px] leading-[2.05] text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {nexusQuantImpactCards.map((card) => (
            <Card
              key={card.title}
              inset
              padding="md"
              tone="muted"
              className="rounded-[1.5rem] border-white/10 px-5 py-5"
            >
              <p className="text-[10px] tracking-[0.1em] text-accent/90">
                補足
              </p>
              <p className="mt-3 text-sm font-semibold tracking-[-0.03em] text-foreground">
                {card.title}
              </p>
              <p className="mt-3 text-[13px] leading-6 text-muted-foreground">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <aside className="xl:pt-1">
        <div className="xl:sticky xl:top-28">
          <Card
            inset
            padding="lg"
            tone="muted"
            className="rounded-[1.8rem] border-white/10 px-5 py-6 md:px-6"
          >
            <div className="space-y-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">
                  プロジェクトメモ
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/84">
                  性質、見るポイント、技術要素を横で確認できるよう、判断材料だけをまとめています。
                </p>
              </div>

              {nexusQuantSideInfoGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4"
                >
                  <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <InfoChip key={item} className="text-[11px] tracking-[0.02em] text-foreground/82">
                        {item}
                      </InfoChip>
                    ))}
                  </div>
                </div>
              ))}

              <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
                  読み方の補助
                </p>
                <p className="mt-3 text-[13px] leading-6 text-foreground/76">
                  抽象ビジュアルだけで判断されないよう、本文を読み進めながら性質と判断材料を横で確認できるようにしています。
                </p>
              </div>

              <div className="border-t border-white/8 pt-5">
                <Button href="/contact" size="md" className="w-full justify-center">
                  近いご相談をする
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </aside>
    </section>
  );
}
