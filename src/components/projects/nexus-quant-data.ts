export const nexusQuantStatItems = [
  { label: "性質", value: "UI study" },
  { label: "想定", value: "採用向け case study" },
  { label: "技術", value: "Next.js / TypeScript" },
  { label: "主眼", value: "読みやすい詳細設計" },
] as const;

export const nexusQuantBadgeItems = ["基盤再設計", "業務ダッシュボード", "デザインシステム"] as const;

export const nexusQuantOverviewPoints = [
  "実案件として見せるのではなく、UI study として設計意図が伝わることを重視しています。",
  "情報量の多い画面でも、視線の流れが乱れない順番に再構成しました。",
  "グルーピング、ラベル、表示領域を整理し、業務画面としての安心感を高めました。",
  "企業向けの信頼感を保ちつつ、見た目の密度も整えた方向性です。",
] as const;

export const nexusQuantSideInfoGroups = [
  {
    title: "性質",
    items: ["UI study", "採用向け case study", "抽象ビジュアルで構成"],
  },
  {
    title: "見るポイント",
    items: ["詳細画面設計", "情報構造設計", "読みやすい導線整理"],
  },
  {
    title: "対応領域",
    items: ["デザインシステム", "システム思考", "レスポンシブUI", "控えめな演出設計"],
  },
  {
    title: "技術",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
] as const;

export const nexusQuantDetailSections = [
  {
    eyebrow: "概要",
    title: "UI study として、採用の場で読みやすい詳細ページ。",
    body: [
      "採用担当者や面接官が最も長く読むページを想定し、最初は要点を拾いやすく、その後に落ち着いて読み進められる構成にしています。",
      "実案件の紹介ではなく、UI study として設計意図、情報の整理、見せ方の判断が伝わることを目的にしています。",
    ],
  },
  {
    eyebrow: "見るポイント",
    title: "何を作ったかだけでなく、どこを見れば実力が分かるかを明示する。",
    body: [
      "本文では、情報量の整理、セクションの優先順位、補助情報の置き方といった判断が分かるようにしています。",
      "抽象的なビジュアルを使っていても、性質ラベル、担当範囲、技術要素を並べることで、曖昧さが残らないようにしています。",
    ],
  },
  {
    eyebrow: "課題",
    title: "複雑なプロダクトの背景を、読みやすさを崩さず伝えること。",
    body: [
      "プロダクトの背景、事業上の意味、技術的な担当範囲、画面品質を、一つの流れの中で整理して伝える必要がありました。",
      "見た目の問題だけではなく、要約・詳細・補足情報の行き来が自然にできる構造にすることも重要でした。",
    ],
  },
  {
    eyebrow: "設計方針",
    title: "主軸の本文、補助情報のサイドレール、要所のビジュアルで組み立てる。",
    body: [
      "本文カラムは、説明に必要な深さを保ちつつ、行間と余白で読み進めやすさを確保しています。サイドレールには判断材料になる情報だけを置き、本文を邪魔しないようにしました。",
      "大きなビジュアルはページ後半に配置し、先に文脈を理解してから確認できるようにしています。全体として、記事というより参照しやすい記録に寄せています。",
    ],
  },
] as const;

export const nexusQuantImpactCards = [
  {
    title: "読みやすさ",
    description:
      "セクション名、本文幅、情報の強弱を整理し、採用の場でも確認しやすい画面にしています。",
  },
  {
    title: "判断材料の整理",
    description:
      "担当範囲、期間、技術要素をサイドに置くことで、本文を読みながらでも要点を確認しやすくしています。",
  },
] as const;

export const nexusQuantProjectMetaRows = [
  { label: "性質", value: "UI study" },
  { label: "対象", value: "採用向けの制作詳細ページ" },
  { label: "見るポイント", value: "情報設計 / 詳細導線 / 読みやすい本文構成" },
  { label: "技術", value: "Next.js / TypeScript / Tailwind CSS / Motion" },
] as const;

export const nexusQuantRelatedWorks = [
  {
    eyebrow: "次に見る制作",
    title: "Aether Intelligence",
    description:
      "AIを用いた意思決定支援を想定し、視線誘導と情報の階層を整えたシステム案です。",
  },
] as const;
