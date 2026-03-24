import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="pb-8 pt-16">
      <Container>
        <div className="flex flex-col gap-4 rounded-card border border-white/8 bg-surface/40 px-6 py-5 text-sm text-muted-foreground shadow-card md:flex-row md:items-center md:justify-between">
          <p>{siteConfig.name} portfolio foundation built with Next.js, TypeScript, Tailwind CSS, and Motion.</p>
          <p>Designed as a reusable shell for internship and job-hunting pages.</p>
        </div>
      </Container>
    </footer>
  );
}
