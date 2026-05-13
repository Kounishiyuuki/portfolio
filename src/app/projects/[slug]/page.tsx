import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { InternalLink } from "@/components/ui/internal-link";
import { PageContainer } from "@/components/ui/page-container";
import {
  featuredProjectItems,
  featuredProjectSlugs,
  getFeaturedProjectBySlug,
  type ProjectItem,
} from "@/lib/projects-data";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredProjectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedProjectBySlug(slug);

  if (!project) {
    return {
      title: "制作詳細",
    };
  }

  return {
    title: `${project.title} | 制作詳細`,
    description: project.summary,
  };
}

export default async function FeaturedProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getFeaturedProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = featuredProjectItems.filter((item) => item.slug !== project.slug);
  const mediaItems = [
    ...(project.coverImage
      ? [
          {
            src: project.coverImage,
            alt: project.coverAlt,
            label: "README image",
          },
        ]
      : []),
    ...(project.screenshots ?? []).map((image) => ({
      ...image,
      label: "Repository asset",
    })),
  ];

  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.95)] pt-[var(--page-space)]">
      <main className="space-y-[calc(var(--section-space)*0.72)]">
        <section className="grid gap-8 pt-8 md:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:items-start">
          <div className="layout-header min-w-0 space-y-6">
            <InternalLink
              href="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-pill border border-line/75 bg-white/78 px-4 py-2 text-[12px] font-semibold text-foreground/70 shadow-[0_8px_20px_rgba(27,44,74,0.05)] hover:border-line-strong/90 hover:bg-white hover:text-foreground"
            >
              制作一覧へ戻る
            </InternalLink>

            <div className="space-y-4">
              <p className="ui-eyebrow text-accent/90">Featured Project</p>
              <h1 className="ui-page-title layout-title-page text-foreground md:text-[clamp(2.35rem,4.6vw,4.65rem)]">
                {project.title}
              </h1>
              <p className="ui-copy layout-reading md:text-[15px]">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[project.category, project.kind, project.year, project.status].map((item) => (
                <span key={item} className="ui-chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.githubUrl ? (
                <Button
                  href={project.githubUrl}
                  variant="primary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-fit"
                >
                  {project.githubLabel ?? "GitHubを見る"}
                  <ArrowRight className="size-4" />
                </Button>
              ) : null}
              <Button href="/projects" variant="secondary" size="lg" className="w-full sm:w-fit">
                制作一覧を見る
              </Button>
            </div>
          </div>

          <div className="rounded-[1.85rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,253,0.86))] p-3 shadow-[0_18px_46px_rgba(27,44,74,0.08)] md:p-4">
            <ProjectMediaFrame project={project} />
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.46fr)]">
          <div className="space-y-5">
            <DetailPanel eyebrow="担当範囲" title="担当したこと">
              <p className="text-[14px] leading-[1.95] text-foreground/76">
                {project.role}
              </p>
              <p className="mt-4 text-[14px] leading-[1.95] text-foreground/76">
                {project.focus}
              </p>
            </DetailPanel>

            <DetailListPanel
              eyebrow="実装と機能"
              title="制作で扱った主な機能"
              items={project.features}
            />

            <DetailListPanel
              eyebrow="見てほしいポイント"
              title="確認しやすい判断材料"
              items={project.focusPoints}
            />

            <DetailListPanel
              eyebrow="学び"
              title="次の制作に活かしていること"
              items={project.learned}
            />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <DetailListPanel
              eyebrow="使用技術"
              title="Tech Stack"
              items={project.techStack}
              compact
            />
            <DetailListPanel
              eyebrow="キーワード"
              title="Tags"
              items={project.tags}
              compact
            />
          </aside>
        </section>

        {mediaItems.length > 0 ? (
          <section className="space-y-5">
            <div className="layout-header space-y-3">
              <p className="ui-eyebrow text-muted-foreground">Project Media</p>
              <h2 className="ui-section-title layout-title-section text-foreground">
                README やリポジトリにある実画像だけを掲載しています。
              </h2>
              <p className="ui-copy layout-reading md:text-[14px]">
                画面の状態を新しく作らず、公開済みの画像から確認できる内容に絞っています。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {mediaItems.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-[1.45rem] border border-line/75 bg-white/84 p-3 shadow-[0_12px_30px_rgba(27,44,74,0.06)]"
                >
                  <div className="relative aspect-[1.2/1] overflow-hidden rounded-[1.05rem] border border-line/55 bg-[linear-gradient(135deg,rgba(248,250,253,0.96),rgba(231,239,251,0.72))]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain p-4 drop-shadow-[0_14px_22px_rgba(27,44,74,0.14)]"
                    />
                  </div>
                  <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] leading-5 text-muted-foreground">
                    <span>{image.label}</span>
                    <span>{image.alt}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="rounded-[1.85rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,249,253,0.82))] p-5 shadow-[0_16px_42px_rgba(27,44,74,0.06)] md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="layout-header space-y-3">
              <p className="ui-eyebrow text-muted-foreground">Related</p>
              <h2 className="ui-section-title layout-title-section text-foreground">
                他の Featured Project も確認できます。
              </h2>
            </div>
            <Button href="/projects" variant="secondary" size="md" className="w-full sm:w-fit">
              制作一覧へ
            </Button>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <InternalLink
                key={item.slug}
                href={item.href}
                className="group rounded-[1.2rem] border border-line/70 bg-white/76 p-4 shadow-[0_10px_24px_rgba(27,44,74,0.045)] hover:border-line-strong/90 hover:bg-white"
              >
                <span className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
                  {item.category}
                </span>
                <span className="mt-2 flex items-center justify-between gap-4">
                  <span className="text-[16px] font-semibold text-foreground">{item.title}</span>
                  <ArrowRight className="size-4 text-accent/85 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-2 block text-[13px] leading-[1.75] text-muted-foreground">
                  {item.summary}
                </span>
              </InternalLink>
            ))}
          </div>
        </section>
      </main>
    </PageContainer>
  );
}

function ProjectMediaFrame({ project }: { project: ProjectItem }) {
  if (!project.coverImage) {
    return (
      <div className="flex aspect-[1.12/1] items-center justify-center rounded-[1.45rem] border border-line/65 bg-[linear-gradient(135deg,rgba(247,250,253,0.94),rgba(229,238,251,0.74))]">
        <span className="rounded-pill border border-white/70 bg-white/78 px-4 py-2 text-[12px] font-semibold text-foreground/64">
          {project.status}
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[1.12/1] overflow-hidden rounded-[1.45rem] border border-line/65 bg-[linear-gradient(135deg,rgba(247,250,253,0.94),rgba(229,238,251,0.74))]">
      <Image
        src={project.coverImage}
        alt={project.coverAlt}
        fill
        priority
        loading="eager"
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-contain p-5 drop-shadow-[0_20px_34px_rgba(27,44,74,0.16)] md:p-7"
      />
    </div>
  );
}

function DetailPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.55rem] border border-line/80 bg-white/82 p-5 shadow-[0_12px_32px_rgba(27,44,74,0.055)] md:p-6">
      <p className="ui-eyebrow text-accent/90">{eyebrow}</p>
      <h2 className="ui-section-title mt-3 max-w-[22ch] text-foreground md:text-[clamp(1.3rem,1.2vw,1.7rem)]">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function DetailListPanel({
  eyebrow,
  title,
  items,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
  compact?: boolean;
}) {
  return (
    <section className="rounded-[1.55rem] border border-line/80 bg-white/82 p-5 shadow-[0_12px_32px_rgba(27,44,74,0.055)] md:p-6">
      <p className="ui-eyebrow text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-2 text-[18px] font-semibold leading-[1.45] text-foreground">
        {title}
      </h2>
      <ul className={compact ? "mt-4 flex flex-wrap gap-2" : "mt-4 space-y-3"}>
        {items.map((item) => (
          <li
            key={item}
            className={
              compact
                ? "rounded-pill border border-line/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,250,253,0.78))] px-3 py-1.5 text-[12px] text-foreground/72"
                : "flex gap-3 text-[14px] leading-[1.85] text-foreground/76"
            }
          >
            {compact ? null : <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/62" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
