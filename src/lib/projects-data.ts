import { siteConfig } from "@/lib/site-config";

export const projectFilterOptions = [
  { id: "all", label: "すべて" },
  { id: "mobile", label: "モバイル" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI" },
  { id: "hackathon", label: "ハッカソン" },
] as const;

export type ProjectFilterId = (typeof projectFilterOptions)[number]["id"];

export type ProjectItem = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  kind: "チーム制作" | "個人制作";
  year: string;
  description: string;
  role: string;
  focus: string;
  tags: readonly string[];
  techStack: readonly string[];
  features: readonly string[];
  focusPoints: readonly string[];
  learned: readonly string[];
  highlightPoints: readonly string[];
  visual: "figure" | "vessel" | "mesh" | "crest" | "ring" | "portrait";
  href: string;
  ctaLabel: string;
  githubUrl?: string;
  githubLabel?: string;
  coverImage?: string;
  coverAlt: string;
  screenshots?: readonly {
    src: string;
    alt: string;
  }[];
  status: string;
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
    title: "WinCook",
    slug: "wincook",
    summary: "まばたき操作とAI会話を使った料理支援アプリ",
    category: "JPHACKS / iOS",
    kind: "チーム制作",
    year: "2025",
    description:
      "JPHACKSで制作した料理支援アプリです。調理中に手が離せない状況を想定し、まばたきによるレシピ操作とAI会話で手順確認をしやすくすることを目指しました。",
    role: "アプリ側の実装とUI設計の一部を担当しました。",
    focus: "調理中の操作しにくさを、視線・音声・会話の入力で補助する設計",
    tags: ["JPHACKS", "iOS", "SwiftUI", "Go", "AI"],
    techStack: ["Swift", "SwiftUI", "Go", "Supabase", "Vision Framework", "Speech Framework", "AVFoundation"],
    features: ["まばたきによるレシピ操作", "AI会話による調理中の確認", "音声・映像系フレームワークの活用"],
    focusPoints: ["手が使いにくい場面を前提にした操作設計", "iOSアプリとバックエンドを組み合わせた構成", "短期間のチーム開発"],
    learned: ["ハッカソンでの機能優先順位の決め方", "Apple系フレームワークの組み合わせ", "体験を検証しながら実装する進め方"],
    highlightPoints: ["入力体験の設計", "SwiftUI実装", "チーム開発"],
    visual: "figure",
    href: "/projects/wincook",
    ctaLabel: "詳細を見る",
    githubUrl: "https://github.com/jphacks/kz_2503",
    githubLabel: "GitHubを見る",
    coverImage: "/images/projects/wincook/cover.png",
    coverAlt: "WinCookのREADMEに掲載されているアプリビジュアル",
    screenshots: [
      {
        src: "/images/projects/wincook/logo.png",
        alt: "WinCookのロゴ画像",
      },
      {
        src: "/images/projects/wincook/character.png",
        alt: "WinCookのキャラクター画像",
      },
    ],
    status: "ハッカソン制作",
    featured: true,
    filterHints: ["Mobile", "iOS", "Hackathon", "AI"],
    showcase: {
      eyebrow: "Featured",
      accent: "from-sky-500/30 via-cyan-500/10 to-transparent",
      layout: "featured",
      visual: "server",
      className: "md:col-span-2 xl:col-span-7",
    },
  },
  {
    title: "Share Fit",
    slug: "share-fit",
    summary: "位置情報とフィットネスデータを使ったAndroid向け運動支援アプリ",
    category: "JPHACKS / Android",
    kind: "チーム制作",
    year: "2024",
    description:
      "JPHACKSで制作したAndroid向けの運動支援アプリです。フィットネスデータ、位置情報、ジオフェンスを使い、同じ場所で運動するユーザー同士のつながりを作ることを目指しました。",
    role: "アプリ側の実装とUI設計の一部を担当しました。",
    focus: "運動を続ける動機づけを、位置情報とユーザー同士の存在感で補助する設計",
    tags: ["JPHACKS", "Android", "Kotlin", "Ktor", "PostgreSQL"],
    techStack: ["Kotlin", "Android Studio", "Ktor", "PostgreSQL"],
    features: ["フィットネスデータの活用", "位置情報とジオフェンスを使った体験設計", "ユーザー間通信を想定した構成"],
    focusPoints: ["Androidアプリとしての体験設計", "位置情報を使った機能検討", "チームでの短期開発"],
    learned: ["Android開発の実装フロー", "位置情報を扱うアプリ設計", "バックエンドを含む構成の考え方"],
    highlightPoints: ["Android実装", "位置情報活用", "チーム開発"],
    visual: "vessel",
    href: "/projects/share-fit",
    ctaLabel: "詳細を見る",
    githubUrl: "https://github.com/jphacks/kz_2402",
    githubLabel: "GitHubを見る",
    coverImage: "/images/projects/share-fit/screen-1.png",
    coverAlt: "Share Fitのタイトル画面用画像",
    screenshots: [
      {
        src: "/images/projects/share-fit/cover.png",
        alt: "Share Fitのアプリ内ロゴ画像",
      },
      {
        src: "/images/projects/share-fit/icon.png",
        alt: "Share Fitのアプリアイコン",
      },
    ],
    status: "ハッカソン制作",
    featured: true,
    filterHints: ["Mobile", "Android", "Hackathon"],
    showcase: {
      eyebrow: "Featured",
      accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
      layout: "default",
      visual: "chip",
      className: "xl:col-span-5",
    },
  },
  {
    title: "AIVY",
    slug: "aivy",
    summary: "AIキャラクターとの会話体験を扱うメディアアプリ",
    category: "AI / Media",
    kind: "チーム制作",
    year: "2025",
    description:
      "AIキャラクターとの会話体験を扱うアプリです。キャラクター設定、会話、音声・メディア連携を組み合わせたプロダクトとして制作されています。",
    role: "チーム開発に参加。公開情報だけでは担当範囲を断定できないため、役割は控えめに記載しています。",
    focus: "AI API、音声、メディア再生を組み合わせた会話体験の構成",
    tags: ["AI", "Kotlin", "Jetpack Compose", "Firebase", "VOICEVOX"],
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "YouTube API", "OpenAI API", "VOICEVOX"],
    features: ["AIキャラクターとの会話", "キャラクター設定", "音声・メディア系APIの活用"],
    focusPoints: ["複数APIを組み合わせた体験設計", "モバイルUIとAI機能の接続", "実装範囲を分けたチーム開発"],
    learned: ["AI APIを使うアプリ構成", "モバイルでのメディア体験設計", "外部サービス連携の扱い方"],
    highlightPoints: ["AI連携", "Jetpack Compose", "メディア連携"],
    visual: "mesh",
    href: "/projects/aivy",
    ctaLabel: "詳細を見る",
    githubUrl: "https://github.com/ko-tarou/AIVY",
    githubLabel: "GitHubを見る",
    coverImage: "/images/projects/aivy/cover.jpg",
    coverAlt: "AIVYのREADMEに掲載されているアプリ画面例",
    screenshots: [
      {
        src: "/images/projects/aivy/icon.png",
        alt: "AIVYのアプリアイコン",
      },
    ],
    status: "制作中 / 検証中",
    featured: true,
    filterHints: ["AI", "Mobile", "Android"],
    showcase: {
      eyebrow: "Featured",
      accent: "from-slate-200/10 via-sky-500/10 to-transparent",
      layout: "default",
      visual: "orb",
      className: "xl:col-span-4",
    },
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    summary: "就職活動向けに制作しているポートフォリオサイト",
    category: "Web / Portfolio",
    kind: "個人制作",
    year: "2026",
    description:
      "制作物、スキル、連絡先を整理するためのポートフォリオサイトです。Next.js、React、TypeScript、Tailwind CSSで実装しています。",
    role: "個人制作として、情報設計、UI実装、データ整理、テスト整備を担当しています。",
    focus: "採用担当者が制作内容と技術を短時間で確認しやすい構成",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    features: ["制作一覧", "スキル紹介", "連絡先導線", "レスポンシブ対応"],
    focusPoints: ["情報の優先順位", "読みやすいカード設計", "保守しやすいデータ管理"],
    learned: ["Next.js App Routerの構成", "Tailwind CSSでのUI調整", "テストを前提にしたデータ設計"],
    highlightPoints: ["情報設計", "フロントエンド実装", "テスト整備"],
    visual: "crest",
    href: "/projects",
    ctaLabel: "一覧で見る",
    githubUrl: siteConfig.githubUrl,
    githubLabel: "GitHubを見る",
    coverAlt: "Portfolioの画面キャプチャは未追加のため、カード内では抽象ビジュアルを表示",
    status: "制作中",
    featured: false,
    filterHints: ["Web", "Frontend"],
  },
  {
    title: "PulseCue",
    slug: "pulsecue-ios",
    summary: "ワークアウト進行管理と日次健康ログをまとめるiOSアプリ",
    category: "iOS / Health",
    kind: "個人制作",
    year: "2026",
    description:
      "筋トレ中の進行管理と、摂取・消費・睡眠・体重の記録を1つにまとめたiOSアプリです。オフラインで使える構成を前提にしています。",
    role: "個人制作として、アプリ設計、SwiftUI実装、SwiftDataを使ったローカル保存を担当しています。",
    focus: "運動中に迷わず使える進行管理と、日々の記録を続けやすくする設計",
    tags: ["iOS", "Swift", "SwiftUI", "SwiftData", "Offline"],
    techStack: ["Swift", "SwiftUI", "SwiftData", "MVVM"],
    features: ["Now / Rest / Nextの進行表示", "ルーティン管理", "DayLogによる健康記録", "通知・触覚・ビープによる合図"],
    focusPoints: ["オフライン前提の設計", "運動中の操作負荷を下げるUI", "ローカルデータ管理"],
    learned: ["SwiftUIでの状態管理", "SwiftDataを使ったデータ保存", "通知・触覚を含むiOS体験設計"],
    highlightPoints: ["SwiftUI実装", "ローカルデータ管理", "健康ログ設計"],
    visual: "ring",
    href: "/projects",
    ctaLabel: "一覧で見る",
    githubUrl: "https://github.com/Kounishiyuuki/pulsecue-ios",
    githubLabel: "GitHubを見る",
    coverAlt: "PulseCueの画面キャプチャは未追加のため、カード内では抽象ビジュアルを表示",
    status: "制作中",
    featured: false,
    filterHints: ["Mobile", "iOS"],
  },
] as const satisfies readonly ProjectItem[];

const filterKeywordMap: Record<Exclude<ProjectFilterId, "all">, readonly string[]> = {
  mobile: ["mobile", "ios", "android", "swift", "swiftui", "kotlin", "モバイル"],
  web: ["web", "next.js", "react", "tailwind css", "typescript", "frontend", "portfolio"],
  ai: [" ai ", "openai", "voicevox", "会話", "人工知能"],
  hackathon: ["hackathon", "jphacks", "ハッカソン"],
};

function normalizeProjectTerms(project: ProjectItem) {
  return [
    project.category,
    project.kind,
    project.summary,
    project.description,
    project.focus,
    project.role,
    project.status,
    ...project.tags,
    ...project.techStack,
    ...project.features,
    ...project.focusPoints,
    ...project.learned,
    ...(project.filterHints ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

export function matchesProjectFilter(project: ProjectItem, filterId: ProjectFilterId) {
  if (filterId === "all") {
    return true;
  }

  const normalizedTerms = ` ${normalizeProjectTerms(project)} `;
  return filterKeywordMap[filterId].some((keyword) => normalizedTerms.includes(keyword));
}

export function getProjectsByFilter(filterId: ProjectFilterId) {
  return projectItems.filter((project) => matchesProjectFilter(project, filterId));
}

export const featuredProjectItems = projectItems.filter((project) => project.featured && project.showcase);
export const allWorkProjectItems = projectItems.filter((project) => !project.featured);
export const featuredProjectSlugs = featuredProjectItems.map((project) => project.slug);

export function getProjectBySlug(slug: string) {
  return projectItems.find((project) => project.slug === slug) as ProjectItem | undefined;
}

export function getFeaturedProjectBySlug(slug: string) {
  return featuredProjectItems.find((project) => project.slug === slug) as ProjectItem | undefined;
}
