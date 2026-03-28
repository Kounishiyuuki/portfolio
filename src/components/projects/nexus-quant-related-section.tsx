import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import { nexusQuantRelatedWorks } from "@/components/projects/nexus-quant-data";

export function NexusQuantRelatedSection() {
  return (
    <section className="pt-6">
      <Card
        padding="none"
        tone="strong"
        className="overflow-hidden rounded-[2rem] border-white/10"
      >
        <div className="space-y-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 md:p-8">
          <SectionHeader align="center" eyebrow="関連する制作" />

          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_75%_20%,rgba(255,166,89,0.3),transparent_26%),linear-gradient(135deg,rgba(48,39,72,0.85),rgba(8,10,18,0.96))] px-5 py-8 shadow-[0_18px_42px_rgba(12,16,28,0.22)] transition-[border-color,box-shadow,transform] duration-300 hover:border-white/14 hover:shadow-[0_24px_54px_rgba(12,16,28,0.28)] md:px-7 md:py-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,184,120,0.24),transparent_30%)]" />
              <div className="pointer-events-none absolute inset-x-[18%] top-8 h-16 rounded-full bg-white/[0.06] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              {nexusQuantRelatedWorks.map((work) => (
                <div key={work.title} className="relative max-w-xl">
                  <p className="text-[10px] tracking-[0.1em] text-accent/90">
                    {work.eyebrow}
                  </p>
                  <h2 className="mt-4 text-balance font-display text-[1.95rem] leading-[1.35] tracking-[-0.02em] text-foreground md:text-[2.55rem]">
                    {work.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/72 md:text-[14px]">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center md:pb-2">
              <Link
                href="/projects"
                className="inline-flex size-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-foreground shadow-[0_10px_24px_rgba(12,16,28,0.16)] transition-[border-color,background-color,box-shadow,transform] duration-300 hover:border-white/18 hover:bg-white/8 hover:shadow-[0_14px_30px_rgba(12,16,28,0.2)]"
              >
                <ArrowRight className="size-4 transition-transform duration-300 hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {nexusQuantRelatedWorks.map((work, index) => (
              <Card
                key={`${work.title}-meta`}
                inset
                padding="md"
                tone="muted"
                className={cn(
                  "rounded-[1.35rem] border-white/10 px-4 py-4",
                  "bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(248,250,253,0.72))]",
                  "shadow-[0_10px_26px_rgba(27,44,74,0.08)] transition-[border-color,box-shadow,background-color] duration-300",
                  "hover:border-line-strong/90 hover:shadow-[0_16px_32px_rgba(27,44,74,0.12)]"
                )}
              >
                <p className="text-[10px] tracking-[0.08em] text-muted-foreground">
                  {index === 0 ? "つながり" : "見どころ"}
                </p>
                <p className="mt-3 text-[13px] leading-[1.85] text-foreground/78">
                  同じく、情報整理と落ち着いた見せ方を軸にしながら、別の文脈へ展開した制作です。
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
