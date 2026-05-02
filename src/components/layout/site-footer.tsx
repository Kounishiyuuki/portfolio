import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="pb-8 pt-16">
      <Container>
        <div className="flex flex-col gap-4 rounded-card border border-line/80 bg-white/84 px-6 py-5 text-sm text-muted-foreground shadow-card md:flex-row md:items-center md:justify-between">
          <div>
            <p className="ui-eyebrow text-foreground/72">このサイトについて</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              {siteConfig.name} のポートフォリオです。制作物、プロフィール、GitHub、メールを見やすくまとめています。
            </p>
          </div>
          <p className="text-sm leading-6 text-muted-foreground md:max-w-xs md:text-right">
            Next.js / TypeScript / Tailwind CSS / Motion で制作しています。
          </p>
        </div>
      </Container>
    </footer>
  );
}
