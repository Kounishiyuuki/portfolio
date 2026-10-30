import { ArrowRight } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { InternalLink } from "@/components/ui/internal-link";
import { PageContainer } from "@/components/ui/page-container";
import {
  pulseCueSupportEmail,
  pulseCueSupportMailtoHref,
  type PulseCueSection,
} from "@/lib/pulsecue-data";

type PulseCueDocumentProps = {
  eyebrow: string;
  title: string;
  lead: string;
  meta?: string;
  sections: readonly PulseCueSection[];
  relatedLink: { href: string; label: string };
};

const linkClassName =
  "inline-flex items-center gap-1.5 rounded-pill border border-line/75 bg-white/80 px-3.5 py-2 text-[13px] font-semibold text-foreground transition-[border-color,background-color] duration-200 hover:border-line-strong/85 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/42 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function PulseCueDocument({ eyebrow, title, lead, meta, sections, relatedLink }: PulseCueDocumentProps) {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <article className="mx-auto w-full max-w-3xl space-y-6 pt-8 md:space-y-8 md:pt-12">
        <header className="layout-header space-y-4">
          <p className="ui-eyebrow text-muted-foreground">{eyebrow}</p>
          <h1 className="ui-page-title layout-title-page text-foreground">{title}</h1>
          <p className="ui-copy layout-reading">{lead}</p>
          {meta ? <p className="text-[13px] text-muted-foreground">{meta}</p> : null}
        </header>

        <Card
          interactive={false}
          inset
          padding="lg"
          tone="default"
          className="rounded-[1.8rem] px-5 py-6 shadow-[0_14px_34px_rgba(0,0,0,0.06)] md:px-8 md:py-8"
        >
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="ui-card-title text-[1.15rem] font-semibold tracking-[-0.02em] text-foreground">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[14px] leading-7 text-foreground/82">
                    {paragraph}
                  </p>
                ))}
                {section.items ? (
                  <ul className="list-disc space-y-1.5 pl-5 text-[14px] leading-7 text-foreground/82">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Card>

        <Card
          interactive={false}
          inset
          padding="lg"
          tone="muted"
          className="rounded-[1.8rem] px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.075)] md:px-6 md:py-6"
        >
          <div className="space-y-4">
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">お問い合わせ先</p>
              <p className="break-all text-[1rem] font-semibold tracking-[-0.02em] text-foreground/94">
                {pulseCueSupportEmail}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={pulseCueSupportMailtoHref} className={`${linkClassName} justify-center`}>
                メールで問い合わせる
                <ArrowRight className="size-3.5" />
              </a>
              <InternalLink href={relatedLink.href} className={`${linkClassName} justify-center`}>
                {relatedLink.label}
                <ArrowRight className="size-3.5" />
              </InternalLink>
            </div>
          </div>
        </Card>
      </article>
    </PageContainer>
  );
}
