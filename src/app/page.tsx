import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ProjectShowcaseCard } from "@/components/home/project-showcase-card";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";

const projectItems = [
  {
    title: "Cloud-Native Core Architecture",
    category: "Architecture",
    description:
      "Scalable backend foundations, observability planning, and resilient infrastructure design for long-term growth.",
    accent: "from-sky-500/30 via-cyan-500/10 to-transparent",
    className: "md:col-span-7",
    layout: "featured",
    visual: "server",
  },
  {
    title: "Neural Data Analysis",
    category: "AI",
    description:
      "A research-oriented interface concept for exploring inference flows, datasets, and experimental outputs.",
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
    className: "md:col-span-5",
    layout: "default",
    visual: "chip",
  },
  {
    title: "Tokenomics Explorer",
    category: "Web Platform",
    description:
      "A premium dashboard direction focused on information architecture, financial clarity, and trust.",
    accent: "from-slate-200/10 via-sky-500/10 to-transparent",
    className: "md:col-span-4",
    layout: "default",
    visual: "orb",
  },
  {
    title: "Vitreous UI Framework",
    category: "Visual Systems",
    description:
      "A restrained design system study for portfolio surfaces, content hierarchy, and calm interaction patterns.",
    accent: "from-white/14 via-sky-400/14 to-transparent",
    className: "md:col-span-8",
    layout: "wide",
    visual: "canvas",
  },
] as const;

const stackItems = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Node.js",
  "PostgreSQL",
] as const;

export default function HomePage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <HeroSection />

      <SectionContainer spacing="default" className="pt-4 md:pt-8">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent/90">
              Case Studies
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-[2.5rem]">
              Selected Projects
            </h2>
            <p className="text-sm leading-7 text-muted-foreground md:text-base">
              Featured work presented with clear hierarchy, restrained surfaces, and
              a portfolio-friendly reading flow.
            </p>
          </div>
          <a
            href="/projects"
            className="hidden items-center gap-1 text-sm font-semibold text-accent/90 md:inline-flex"
          >
            View all
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:items-start">
          {projectItems.map((project) => (
            <ProjectShowcaseCard key={project.title} {...project} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer spacing="default" className="pt-6 md:pt-10">
        <Card
          inset
          padding="lg"
          tone="muted"
          className="overflow-hidden rounded-[2.2rem] border-white/12 px-5 py-8 md:px-10 md:py-12"
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-x-[14%] top-8 h-28 rounded-full bg-accent/8 blur-3xl" />
            <div className="relative rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:px-12 md:py-16">
              <div className="mx-auto max-w-3xl space-y-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent/90">
                  Final CTA
                </p>
                <h2 className="text-balance font-display text-[2.25rem] leading-[1.02] tracking-[-0.05em] text-foreground md:text-[4rem]">
                  Let&apos;s shape a portfolio
                  <span className="block">that feels future-ready.</span>
                </h2>
                <p className="mx-auto max-w-[42rem] text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  If you want a portfolio that feels calm, capable, and clear from the
                  first glance, this structure is ready to evolve into polished
                  project stories and a stronger hiring narrative.
                </p>
              </div>

              <div className="mt-8 flex justify-center md:mt-10">
                <Button href="/contact" size="lg" className="min-w-[10rem]">
                  Start the conversation
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}

function HeroSection() {
  return (
    <SectionContainer
      spacing="hero"
      className="pt-8 md:pt-14"
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(21rem,0.82fr)]">
        <Card
          inset
          padding="lg"
          tone="muted"
          className="overflow-hidden rounded-[2rem] lg:min-h-[34rem]"
        >
          <div className="relative flex h-full flex-col justify-between gap-14">
            <div className="pointer-events-none absolute inset-y-0 right-[-14%] top-12 w-56 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative max-w-[42rem] space-y-8 md:space-y-10">
              <div className="inline-flex w-fit items-center rounded-pill border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Available for internships and early-career roles
              </div>

              <div className="space-y-5 md:space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/90">
                  Student IT Engineer Portfolio
                </p>
                <h1 className="max-w-[12ch] text-balance font-display text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">
                  Designing the digital future through
                  <span className="block text-accent">engineering.</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  I build calm, structured digital experiences with a strong technical
                  foundation. This portfolio is designed to show clear thinking,
                  implementation quality, and recruiter-friendly communication from the
                  very first screen.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button href="/projects" size="lg" className="min-w-[12.5rem]">
                  View selected projects
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="/about"
                  variant="secondary"
                  size="lg"
                  className="min-w-[10rem]"
                >
                  Read profile
                </Button>
              </div>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-3">
              <MetricCard label="Projects" value="04" note="Featured case studies" />
              <MetricCard label="Focus" value="Full-stack" note="Design to implementation" />
              <MetricCard label="Approach" value="Calm" note="Structured and thoughtful" />
            </div>
          </div>
        </Card>

        <Card
          padding="none"
          tone="strong"
          className="overflow-hidden rounded-[2rem] border-white/12 lg:min-h-[34rem]"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Snapshot
                </p>
                <p className="mt-1 text-sm text-foreground">Portfolio direction</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-accent/80" />
              </div>
            </div>

            <div className="grid flex-1 gap-4 p-5">
              <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(160deg,rgba(7,20,33,0.88),rgba(10,18,30,0.45))] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Technical profile
                </p>
                <div className="mt-5 space-y-4">
                  {stackItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm text-foreground">{item}</span>
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Ready
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Strength
                  </p>
                  <p className="mt-3 text-lg leading-7 text-foreground">
                    Clear structure from concept to implementation.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Goal
                  </p>
                  <p className="mt-3 text-lg leading-7 text-foreground">
                    Leave a strong first impression in internships and hiring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

function MetricCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p>
    </div>
  );
}
