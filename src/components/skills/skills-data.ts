export const skillGroups = [
  {
    title: "TypeScript",
    level: "95%",
    label: "主要言語",
    description:
      "アプリ構造の設計、コンポーネントの整理、読みやすいフロントエンド実装の中心に置いています。",
    items: ["Next.js 構成設計", "型を活かしたUI", "API連携"],
  },
  {
    title: "Python",
    level: "90%",
    label: "自動化",
    description:
      "自動化、スクリプト、分析補助などを、速さと保守しやすさの両面から扱っています。",
    items: ["データ処理", "作業自動化", "補助ツール"],
  },
  {
    title: "C++",
    level: "82%",
    label: "基礎力",
    description:
      "アルゴリズム、性能意識、低レイヤへの理解を深める基礎として学んできました。",
    items: ["データ構造", "アルゴリズム", "低レイヤ理解"],
  },
  {
    title: "Rust",
    level: "74%",
    label: "学習中",
    description:
      "安全性を重視した設計や、性能と保守性を両立する考え方を広げるために学習しています。",
    items: ["所有権モデル", "信頼性", "システム探究"],
  },
] as const;

export const infraHighlights = [
  {
    icon: "◌",
    title: "Docker / Dev Containers",
    detail: "開発環境の差分を減らし、再現しやすいワークフローを整えます。",
  },
  {
    icon: "△",
    title: "AWS 基礎",
    detail: "サービスの役割と構成パターンを踏まえて、現実的なクラウド利用を考えます。",
  },
  {
    icon: "□",
    title: "CI/CD 運用",
    detail: "再現性、レビューしやすさ、安定運用を意識したデリバリーを心がけています。",
  },
] as const;

export const categoryBlocks = [
  {
    icon: "◧",
    label: "フロントエンド",
    value: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: "↗",
    label: "バックエンド",
    value: "Python, API設計, 外部連携",
  },
  {
    icon: "●",
    label: "インフラ",
    value: "Docker, AWS, CI/CD, デプロイ運用",
  },
  {
    icon: "◇",
    label: "体験設計",
    value: "情報設計, UIシステム, 落ち着いた画面構成",
  },
  {
    icon: "○",
    label: "品質",
    value: "読みやすいコード, 保守しやすい構成, 丁寧な実装基準",
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "構造を明快にする",
    description:
      "構造を見れば意図が伝わる設計を好みます。使う人にも、引き継ぐ人にも負荷が少ないことを重視します。",
  },
  {
    index: "02",
    title: "最初から安全に考える",
    description:
      "安全性は後から足すのではなく、設計の初期段階から組み込むべきだと考えています。",
  },
  {
    index: "03",
    title: "必要十分な速さを保つ",
    description:
      "無理に速さだけを追うのではなく、使う場面に対して十分に軽く、意図のある実装を保つことを大切にしています。",
  },
] as const;
