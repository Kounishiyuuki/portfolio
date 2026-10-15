import Image from "next/image";
import { projectItems, type ProjectItem } from "@/lib/projects-data";

export type IosShowcaseProject = {
  slug: string;
  title: string;
  status: string;
  summary: string;
  points: readonly string[];
  screen: string;
};

function pickProject(slug: string): ProjectItem {
  const project = projectItems.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`iOS showcase: project "${slug}" is missing from projectItems`);
  }

  return project;
}

const mannerPath = pickProject("mannerpath");
const pulseCue = pickProject("pulsecue-ios");

// PulseCue's screen is a Simulator capture from the app's own App Store screenshot script
// (DEBUG fixture route `runner-active`); it is not a repository asset, so it is only used here.
export const iosShowcaseProjects: readonly IosShowcaseProject[] = [
  {
    slug: mannerPath.slug,
    title: mannerPath.title,
    status: mannerPath.status,
    summary: mannerPath.summary,
    points: mannerPath.highlightPoints,
    screen: mannerPath.coverImage ?? "",
  },
  {
    slug: pulseCue.slug,
    title: pulseCue.title,
    status: pulseCue.status,
    summary: pulseCue.summary,
    points: pulseCue.highlightPoints,
    screen: "/images/projects/pulsecue/runner-active.png",
  },
];

export function IosShowcaseIntro({ id }: { id: string }) {
  return (
    <div className="layout-header space-y-3">
      <p className="ui-eyebrow text-muted-foreground">iOS開発</p>
      <h2 id={id} className="ui-section-title layout-title-section text-foreground">
        主軸にしているiOSアプリ
      </h2>
    </div>
  );
}

export function IosShowcaseCopy({ project }: { project: IosShowcaseProject }) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
        {project.status}
      </p>
      <p className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground">
        {project.title}
      </p>
      <p className="ui-copy max-w-[30rem]">{project.summary}</p>
      <ul className="flex flex-wrap gap-1.5 pt-1">
        {project.points.map((point) => (
          <li
            key={point}
            className="rounded-pill border border-line/70 bg-white/70 px-2.5 py-0.5 text-[11px] font-medium text-foreground/70"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IosShowcaseScreen({ project }: { project: IosShowcaseProject }) {
  return <Image src={project.screen} alt="" fill sizes="18rem" className="object-cover object-top" />;
}

// Used while the animated version loads, when motion is reduced, and as the no-JS output.
export function IosShowcaseStatic() {
  return (
    <section aria-labelledby="ios-showcase-static" className="py-10 md:py-16">
      <IosShowcaseIntro id="ios-showcase-static" />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {iosShowcaseProjects.map((project) => (
          <div key={project.slug} className="flex items-center gap-5">
            <div className="relative aspect-[640/1390] w-28 shrink-0 overflow-hidden rounded-[1.4rem] border-[5px] border-neutral-900 bg-neutral-900 shadow-[0_16px_32px_rgba(0,0,0,0.14)] md:w-32">
              <IosShowcaseScreen project={project} />
            </div>
            <IosShowcaseCopy project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
