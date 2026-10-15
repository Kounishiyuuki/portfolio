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
  kind: "チーム制作" | "個人制作" | "依頼制作";
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
  appIcon?: {
    src: string;
    alt: string;
  };
  screenshots?: readonly {
    src: string;
    alt: string;
  }[];
  status: string;
  // Keeps unfinished work out of `features` so the detail page never reads as shipped.
  roadmap?: {
    inProgress: readonly string[];
    planned: readonly string[];
  };
  featured?: boolean;
  filterIds?: readonly Exclude<ProjectFilterId, "all">[];
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
    title: "MannerPath",
    slug: "mannerpath",
    summary: "確認根拠のある喫煙可能場所を探すiPhone・Apple Watchアプリ",
    category: "iOS / Navigation",
    kind: "個人制作",
    year: "2026",
    description: "自治体などの公式情報をもとに、喫煙可能場所と灰皿の場所を検索できるiPhone・Apple Watchアプリです。位置の精度や確認根拠を明示し、保存済みの情報はオフラインでも参照できます。現在はApp Store提出に向けた最終確認段階です。",
    role: "企画、iOS・watchOSのUI実装、Cloudflare Workers・D1によるAPIとデータ管理、情報源の検証、リリース準備まで個人で取り組んでいます。",
    focus: "位置情報の正確さと確認根拠を優先し、アプリ・API・公開データを一貫して設計すること",
    tags: ["iOS", "watchOS", "SwiftUI", "MapKit", "Cloudflare Workers", "D1"],
    techStack: ["Swift", "SwiftUI", "MapKit", "Core Location", "WidgetKit", "WatchConnectivity", "Cloudflare Workers", "TypeScript", "Hono", "D1"],
    features: ["地図とリストからの場所検索と徒歩ルート", "出典・位置精度・情報の鮮度を示す詳細表示", "Apple WatchとWidgetからの確認", "地域別データ配信と保存済みデータのオフライン参照", "公式ソースの検証と公開データの品質管理"],
    focusPoints: ["施設が存在するだけでは灰皿設置・喫煙可能と判断しないデータ採用基準", "正確な場所と概略位置を区別し、不明な情報を断定しないUI", "正確な現在地は端末内で距離計算に使い、APIには地域タイル単位でのみアクセスするプライバシー設計"],
    learned: ["iOS・watchOS・Widgetを横断する機能設計", "Cloudflare WorkersとD1によるAPI・データ公開基盤", "一次情報・ライセンス・位置精度を踏まえたリリース品質管理"],
    highlightPoints: ["iOS / watchOS", "Cloudflare Workers / D1", "データ品質と公開設計"],
    visual: "ring",
    href: "/projects/mannerpath",
    ctaLabel: "詳細を見る",
    githubUrl: "https://github.com/Kounishiyuuki/MannerPath",
    githubLabel: "GitHubを見る",
    coverAlt: "MannerPathの実アプリ画面：近くの場所を地図とリストで表示",
    coverImage: "/images/projects/mannerpath/iphone-nearby.png",
    appIcon: { src: "/images/projects/mannerpath/icon.png", alt: "MannerPathのアプリアイコン" },
    screenshots: [
      { src: "/images/projects/mannerpath/iphone-detail.png", alt: "MannerPathのiPhone画面：確認根拠と位置精度を表示" },
      { src: "/images/projects/mannerpath/watch-nearby.png", alt: "MannerPathのApple Watch画面：近くの場所" },
    ],
    status: "App Store提出準備中",
    roadmap: {
      inProgress: ["App Store提出に向けた審査情報・プライバシー申告・ストア用スクリーンショットの準備", "リリース候補版のUI回帰テストとApple Watch・Widgetの動作確認"],
      planned: ["公式情報源の追加による対応地域の拡大"],
    },
    featured: true,
    filterIds: ["mobile"],
    filterHints: ["Mobile", "iOS", "watchOS"],
    showcase: { eyebrow: "Release Candidate", accent: "from-amber-100/65 via-neutral-100/35 to-transparent", layout: "featured", visual: "orb", className: "md:col-span-2 xl:col-span-7" },
  },
  {
    title: "PulseCue",
    slug: "pulsecue-ios",
    summary: "トレーニングの実行と日々の健康記録をつなぐiOSアプリ",
    category: "iOS / Health",
    kind: "個人制作",
    year: "2026",
    description: "ワークアウトの進行、食事・栄養・睡眠・体重の記録をまとめたiOSアプリです。記録はSwiftDataで端末内に保存するローカルファースト構成で、アカウント単位の同期は基盤を段階的に整備している段階です。",
    role: "個人開発として、SwiftUIでの画面設計と実装、SwiftDataの永続化とスキーマ移行、ワークアウトの状態管理、サインインと同期基盤の設計・テストに取り組んでいます。",
    focus: "運動中の操作負荷を下げながら、記録の継続性とデータの安全な扱いを両立すること",
    tags: ["iOS", "Swift", "SwiftUI", "SwiftData", "Health"],
    techStack: ["Swift", "SwiftUI", "SwiftData", "Vision", "AVFoundation"],
    features: ["Now / Rest / Nextのワークアウト実行画面", "ルーティン管理と運動履歴の確認", "食事・栄養・睡眠・体重の記録と目標との差分の可視化", "バーコード商品照会・栄養表示OCRからの入力補助（確認してから保存）", "ワークアウト記録のアカウント別所有と同期キューのローカル基盤"],
    focusPoints: ["運動中でも迷わず操作できるNative-firstの画面設計", "入力候補を確認してから保存するデータ処理", "ローカルの記録とアカウント別同期の責務分離"],
    learned: ["SwiftUIの状態管理とApple標準UIの使い分け", "SwiftDataの移行とアカウント別データ保護", "運動・栄養フローのテストとアクセシビリティ改善"],
    highlightPoints: ["SwiftUI / SwiftData", "ワークアウト体験", "データ分離・同期基盤"],
    visual: "ring",
    href: "/projects/pulsecue-ios",
    ctaLabel: "詳細を見る",
    githubUrl: "https://github.com/Kounishiyuuki/pulsecue-ios",
    githubLabel: "GitHubを見る",
    coverAlt: "PulseCueの画面キャプチャは未追加のため、カード内ではアプリアイコンを表示",
    appIcon: { src: "/images/projects/pulsecue/icon.png", alt: "PulseCueのアプリアイコン" },
    status: "継続開発中",
    roadmap: {
      inProgress: ["サインインとサーバー同期クライアントの接続", "HealthKitからの読み取りによる入力補助（書き込みは行わない方針）"],
      planned: ["写真からの栄養推定（現在はモックの候補フローのみ）"],
    },
    featured: true,
    filterIds: ["mobile"],
    filterHints: ["Mobile", "iOS"],
    showcase: { eyebrow: "iOS Application", accent: "from-neutral-950/22 via-neutral-500/10 to-transparent", layout: "featured", visual: "orb", className: "xl:col-span-5" },
  },
  {
    title: "Barns",
    slug: "barns",
    summary: "知人からの依頼をもとにMVPまで形にしたアプリ",
    category: "App / MVP",
    kind: "依頼制作",
    year: "2026",
    description:
      "知人からの依頼をもとに、要望を整理しながらMVPまで構築したアプリです。実際に使う場面を意識し、必要な機能から優先して形にしました。",
    role: "依頼内容の整理、画面設計、UI、MVP実装までを担当しました。",
    focus: "知人の要望をもとに、実利用に必要な範囲を整理してMVPとして形にすること",
    tags: ["MVP", "App", "依頼制作", "UI設計"],
    techStack: ["要件整理", "画面設計", "UI実装", "MVP開発"],
    features: ["知人の要望に基づく機能整理", "MVPに必要な画面と操作の実装", "実利用を意識した導線設計"],
    focusPoints: ["依頼内容を画面と機能に落とし込んだこと", "MVPとして必要な範囲を絞って実装したこと", "実際に使う人の要望を起点に制作したこと"],
    learned: ["要望を聞きながら機能範囲を決める進め方", "MVPとして優先度をつける判断", "実利用を意識した設計と実装"],
    highlightPoints: ["依頼ベースの制作", "MVPまで構築", "実利用を意識した設計"],
    visual: "vessel",
    href: "/projects/barns",
    ctaLabel: "詳細を見る",
    coverAlt: "Barnsの画面キャプチャは未追加のため、カード内では抽象ビジュアルを表示",
    appIcon: {
      src: "/images/projects/barns/icon.png",
      alt: "Barnsのアプリアイコン",
    },
    status: "MVPまで構築",
    featured: true,
    filterIds: ["mobile"],
    filterHints: ["Mobile", "App", "MVP"],
    showcase: {
      eyebrow: "依頼ベース",
      accent: "from-neutral-900/18 via-neutral-500/10 to-transparent",
      layout: "featured",
      visual: "chip",
      className: "md:col-span-2 xl:col-span-5",
    },
  },
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
    filterIds: ["mobile", "ai", "hackathon"],
    filterHints: ["Mobile", "iOS", "Hackathon", "AI"],
    showcase: {
      eyebrow: "Featured",
      accent: "from-neutral-950/22 via-neutral-500/10 to-transparent",
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
    filterIds: ["mobile", "hackathon"],
    filterHints: ["Mobile", "Android", "Hackathon"],
    showcase: {
      eyebrow: "Featured",
      accent: "from-neutral-900/20 via-neutral-500/10 to-transparent",
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
    filterIds: ["mobile", "ai"],
    filterHints: ["AI", "Mobile", "Android"],
    showcase: {
      eyebrow: "Featured",
      accent: "from-neutral-200/16 via-neutral-700/10 to-transparent",
      layout: "default",
      visual: "orb",
      className: "xl:col-span-4",
    },
  },
  {
    title: "TabFlow",
    slug: "tabflow",
    summary: "開きすぎたChromeタブを、自分のルールで自動整理するChrome拡張機能",
    category: "Productivity / Chrome Extension",
    kind: "個人制作",
    year: "2026",
    description:
      "TabFlowは、開発中や調べ物中に増えやすいChromeタブを、自分のルールに基づいて整理するChrome拡張機能です。URLやタイトルを判定し、Chromeのタブグループへ自動で分類することで、作業中の認知負荷を減らすことを目的としました。",
    role: "個人制作として、Manifest V3構成、Popup・Options・Background Service Worker、タブ分類ロジック、設定保存までを実装しました。",
    focus: "Chromeタブをカテゴリやカスタムルールに基づいて整理し、常時処理に頼らず軽量に動作させる設計",
    tags: ["Chrome Extension", "Manifest V3", "React", "TypeScript", "Vite", "Tailwind CSS"],
    techStack: [
      "Chrome Extension",
      "Manifest V3",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "chrome.tabs",
      "chrome.tabGroups",
      "chrome.storage",
    ],
    features: [
      "Organize nowによる手動整理",
      "URLやタイトルをもとにした自動分類",
      "Git、AI、Infra、Design、School、SNSなどのカテゴリ分類",
      "AI × Gitなどのカスタムグループ作成",
      "既存カテゴリを組み合わせたグループ作成",
      "Manual patternsによる独自ルール追加",
      "グループ色の変更",
      "しきい値を超えたカテゴリだけを自動グループ化",
    ],
    focusPoints: [
      "Manifest V3 Service Workerをイベント駆動にして、常時ループやpollingを避けた構成",
      "Auto organizeをカテゴリ単位のしきい値で動作させる設計",
      "chrome.storage.syncでユーザー設定を保存",
      "カスタムグループに安定したIDを持たせ、表示名や色の変更で設定が壊れないようにした実装",
    ],
    learned: [
      "Chrome拡張機能のManifest V3構成",
      "Service Workerのイベント駆動処理",
      "chrome.tabs、chrome.tabGroups、chrome.storageの扱い",
      "柔軟なユーザー設定と負荷を抑えた実装の両立",
    ],
    highlightPoints: ["Chrome拡張機能", "タブ自動整理", "イベント駆動設計"],
    visual: "crest",
    href: "/projects/tabflow",
    ctaLabel: "詳細を見る",
    githubUrl: "https://github.com/Kounishiyuuki/tabflow",
    githubLabel: "GitHubを見る",
    coverAlt: "TabFlowのスクリーンショットは未追加のため、カード内では抽象ビジュアルを表示",
    status: "制作済み",
    featured: true,
    filterIds: ["web"],
    filterHints: ["Web", "React", "TypeScript", "Chrome Extension", "Productivity"],
    showcase: {
      eyebrow: "Featured",
      accent: "from-neutral-100/18 via-neutral-600/10 to-transparent",
      layout: "wide",
      visual: "canvas",
      className: "xl:col-span-8",
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
    githubUrl: "https://github.com/Kounishiyuuki/portfolio",
    githubLabel: "GitHubを見る",
    coverAlt: "Portfolioの画面キャプチャは未追加のため、カード内では抽象ビジュアルを表示",
    status: "制作中",
    featured: false,
    filterIds: ["web"],
    filterHints: ["Web", "Frontend"],
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

  if (project.filterIds) {
    return project.filterIds.includes(filterId);
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
