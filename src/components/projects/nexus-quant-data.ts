export const nexusQuantStatItems = [
  { label: "性質", value: "UI study" },
  { label: "対象", value: "金融・分析領域の study" },
  { label: "技術", value: "Next.js / TypeScript / Tailwind CSS" },
  { label: "主眼", value: "複雑な情報の整理" },
] as const;

export const nexusQuantBadgeItems = ["金融・分析UI", "情報設計", "フロントエンド実装"] as const;

export const nexusQuantOverviewPoints = [
  "実案件として見せるのではなく、金融・分析領域を想定した UI study として設計意図が伝わることを重視しています。",
  "数字、グラフ、補助情報の優先順位を整理し、視線誘導しやすい構成にしています。",
  "情報量が多くても、何から読めばよいかが自然に分かる画面構成を目指しました。",
  "抽象ビジュアルに頼りすぎず、性質、担当範囲、技術要素を明示して判断材料を補っています。",
] as const;

export const nexusQuantSideInfoGroups = [
  {
    title: "性質",
    items: ["UI study", "金融・分析領域の study", "公開用に整理した制作詳細"],
  },
  {
    title: "見るポイント",
    items: ["複雑な情報を整理して見せる力", "数字とグラフの優先順位", "視線誘導しやすい構成"],
  },
  {
    title: "対応領域",
    items: ["情報設計", "UI設計", "フロントエンド実装"],
  },
  {
    title: "技術",
    items: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
] as const;

export const nexusQuantDetailSections = [
  {
    eyebrow: "概要",
    title: "金融・分析領域を想定した UI study の制作詳細。",
    body: [
      "金額や指標、グラフ、補助説明が同時に存在する画面を想定し、何を先に読めばよいかが伝わる構成にしています。",
      "実案件の紹介ではなく、UI study として情報設計、見せ方の判断、フロントエンド実装の方向性が伝わることを目的にしています。",
    ],
  },
  {
    eyebrow: "見るポイント",
    title: "何を作ったかだけでなく、どこを見ればよいかを明示する。",
    body: [
      "本文では、数字・グラフ・補助情報の優先順位、セクションの切り分け、補助説明の置き方といった判断が分かるようにしています。",
      "抽象的なビジュアルを使っていても、性質ラベル、担当範囲、技術要素を並べることで、曖昧さが残らないようにしています。",
    ],
  },
  {
    eyebrow: "課題",
    title: "数字と説明が多い画面でも、流れを崩さず理解できること。",
    body: [
      "分析画面では、数値だけを並べると意図が伝わりにくく、説明だけを増やすと視線が散りやすくなります。",
      "そのため、要約・詳細・補助情報の行き来が自然にできる構造にし、数字を追いながら意味も理解しやすい形を目指しました。",
    ],
  },
  {
    eyebrow: "設計方針",
    title: "主軸の情報から読み始め、補助情報へ滑らかにつながる構成にする。",
    body: [
      "本文カラムは、必要な説明量を保ちつつ、行間と余白で読み進めやすさを確保しています。サイドレールには担当範囲や技術だけを置き、本文を邪魔しないようにしました。",
      "大きなビジュアルは補助表現として扱い、先に文脈を理解してから確認できるようにしています。全体として、実案件紹介よりも study の記録として読みやすい形に寄せています。",
    ],
  },
] as const;

export const nexusQuantImpactCards = [
  {
    title: "読みやすさ",
    description:
      "セクション名、本文幅、情報の強弱を整理し、数字と説明が混在しても確認しやすい画面にしています。",
  },
  {
    title: "判断材料の整理",
    description:
      "担当範囲、技術要素、見るポイントを横に置くことで、本文を読みながらでも要点を確認しやすくしています。",
  },
] as const;

export const nexusQuantProjectMetaRows = [
  { label: "性質", value: "UI study" },
  { label: "担当範囲", value: "情報設計 / UI設計 / フロントエンド実装" },
  { label: "見るポイント", value: "複雑な情報を整理して見せる力" },
  { label: "技術", value: "Next.js / TypeScript / Tailwind CSS" },
] as const;

export const nexusQuantRelatedWorks = [
  {
    eyebrow: "次に見る制作",
    title: "ニューラルデータ解析",
    description:
      "分析結果を見やすく整理する UI study として、グラフと説明文の優先順位を整えた制作です。",
  },
] as const;
