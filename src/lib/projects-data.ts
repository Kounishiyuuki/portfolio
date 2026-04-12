import { siteConfig } from "@/lib/site-config";

export const projectFilterOptions = [
  { id: "all", label: "すべて" },
  { id: "ui", label: "UI" },
  { id: "web", label: "Web" },
  { id: "analysis", label: "分析" },
  { id: "concept", label: "構想" },
] as const;

export type ProjectFilterId = (typeof projectFilterOptions)[number]["id"];

export type ProjectItem = {
  title: string;
  category: string;
  kind: "自主制作" | "UI study" | "コンセプト案";
  year: string;
  description: string;
  focus: string;
  tags: readonly string[];
  techStack: readonly string[];
  highlightPoints: readonly string[];
  visual: "figure" | "vessel" | "mesh" | "crest" | "ring" | "portrait";
  href: string;
  ctaLabel: string;
  githubUrl?: string;
  githubLabel?: string;
  featured?: boolean;
  filterHints?: readonly string[];
  showcase?: {
    eyebrow: string;
    accent: string;
    layout: "featured" | "default" | "wide";
    visual: "server" | "chip" | "orb" | "canvas";
    className?: string;
  };
};

export const projectItems = [
  {
    title: "Nexus Quant",
    category: "金融 / 分析UI",
    kind: "UI study",
    year: "2026",
    description:
      "金融・分析領域を想定し、数字・グラフ・補助情報の優先順位を整理して見せる UI study です。",
    focus: "複雑な情報を整理して見せる力",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web", "Dashboard"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlightPoints: ["情報設計", "分析UI", "フロントエンド実装"],
    visual: "figure",
    href: "/projects/nexus-quant",
    ctaLabel: "制作詳細を見る",
    githubUrl: "https://github.com/Kounishiyuuki/portfolio",
    githubLabel: "GitHubを見る",
    featured: true,
    filterHints: ["UI", "分析", "Web"],
    showcase: {
      eyebrow: "代表作",
      accent: "from-sky-500/30 via-cyan-500/10 to-transparent",
      layout: "featured",
      visual: "server",
      className: "md:col-span-7",
    },
  },
  {
    title: "ニューラルデータ解析",
    category: "AI / 分析UI",
    kind: "UI study",
    year: "2026",
    description:
      "分析結果を見やすく整理する UI study として、グラフと説明文の優先順位を整えた制作です。",
    focus: "複雑なデータの見せ方",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Visualization"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlightPoints: ["情報設計", "可視化UI", "レイアウト整理"],
    visual: "vessel",
    href: "/contact",
    ctaLabel: "この制作について相談する",
    githubUrl: siteConfig.githubUrl,
    githubLabel: "GitHubを見る",
    featured: true,
    filterHints: ["UI", "分析", "Web"],
    showcase: {
      eyebrow: "分析UI",
      accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
      layout: "default",
      visual: "chip",
      className: "md:col-span-5",
    },
  },
  {
    title: "Tokenomics Explorer",
    category: "数値ダッシュボード",
    kind: "UI study",
    year: "2025",
    description:
      "指標や構造を整理して確認できる UI study として、比較しやすい数値配置を検討した制作です。",
    focus: "データの整理と視認性",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Analytics"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlightPoints: ["ダッシュボードUI", "数値設計", "レスポンシブ対応"],
    visual: "mesh",
    href: "/contact",
    ctaLabel: "この制作について相談する",
    githubUrl: siteConfig.githubUrl,
    githubLabel: "GitHubを見る",
    featured: true,
    filterHints: ["UI", "分析", "Web"],
    showcase: {
      eyebrow: "数値UI",
      accent: "from-slate-200/10 via-sky-500/10 to-transparent",
      layout: "default",
      visual: "orb",
      className: "md:col-span-4",
    },
  },
  {
    title: "Vitreous UI Framework",
    category: "UI設計",
    kind: "UI study",
    year: "2025",
    description:
      "UI 表現とコンポーネント設計を検討し、一貫性のある見た目と再利用しやすさを意識した UI study です。",
    focus: "UI の整え方と設計意識",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Design System"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlightPoints: ["UI設計", "コンポーネント設計", "再利用性"],
    visual: "crest",
    href: "/contact",
    ctaLabel: "この制作について相談する",
    githubUrl: siteConfig.githubUrl,
    githubLabel: "GitHubを見る",
    featured: true,
    filterHints: ["UI", "Web"],
    showcase: {
      eyebrow: "設計スタディ",
      accent: "from-white/14 via-sky-400/14 to-transparent",
      layout: "wide",
      visual: "canvas",
      className: "md:col-span-8",
    },
  },
  {
    title: "クラウド基盤設計",
    category: "基盤設計",
    kind: "コンセプト案",
    year: "2026",
    description:
      "クラウド基盤の構成や考え方を可視化し、難しい内容でも理解しやすく整理したコンセプト案です。",
    focus: "技術的な内容を視覚的に整理する力",
    tags: ["Cloud", "Architecture", "Infrastructure"],
    techStack: ["Cloud", "Architecture", "Infrastructure"],
    highlightPoints: ["構成整理", "基盤設計", "技術説明の明確化"],
    visual: "ring",
    href: "/contact",
    ctaLabel: "この制作について相談する",
    githubUrl: siteConfig.githubUrl,
    githubLabel: "GitHubを見る",
    featured: false,
    filterHints: ["基盤"],
  },
  {
    title: "NexusOS",
    category: "UI設計",
    kind: "コンセプト案",
    year: "2026",
    description:
      "システム全体像を想定し、概念的な内容でも理解しやすい形に整理したコンセプト案です。",
    focus: "抽象度の高い内容の見せ方",
    tags: ["System Design", "Interface Concept", "Web"],
    techStack: ["System Design", "Interface Concept", "Web"],
    highlightPoints: ["全体設計", "UIコンセプト", "情報整理"],
    visual: "crest",
    href: "/contact",
    ctaLabel: "この制作について相談する",
    githubUrl: siteConfig.githubUrl,
    githubLabel: "GitHubを見る",
    featured: false,
    filterHints: ["UI", "Web", "基盤"],
  },
] as const satisfies readonly ProjectItem[];

const filterKeywordMap: Record<Exclude<ProjectFilterId, "all">, readonly string[]> = {
  ui: ["ui", "design", "interface", "dashboard", "visualization", "分析ui", "ui設計"],
  web: ["web", "next.js", "tailwind css", "typescript", "frontend"],
  analysis: ["分析", "analytics", "analysis", "data", "dashboard", "visualization", "金融"],
  concept: ["コンセプト案", "concept", "基盤", "architecture", "system"],
};

function normalizeProjectTerms(project: ProjectItem) {
  return [
    project.category,
    project.kind,
    project.description,
    project.focus,
    ...project.tags,
    ...(project.filterHints ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

export function matchesProjectFilter(project: ProjectItem, filterId: ProjectFilterId) {
  if (filterId === "all") {
    return true;
  }

  const normalizedTerms = normalizeProjectTerms(project);
  return filterKeywordMap[filterId].some((keyword) => normalizedTerms.includes(keyword));
}

export function getProjectsByFilter(filterId: ProjectFilterId) {
  return projectItems.filter((project) => matchesProjectFilter(project, filterId));
}

export const featuredProjectItems = projectItems.filter((project) => project.featured && project.showcase);
