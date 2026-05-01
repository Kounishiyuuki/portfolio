export const skillCategories = [
  {
    icon: "A/W",
    label: "アプリ / Web",
    title: "アプリとWebの実装",
    description:
      "Swift、Kotlin、Next.js を主軸に、画面設計からUI実装まで一貫して組み立てています。",
    items: [
      { name: "Swift", featured: true },
      { name: "Kotlin", featured: true },
      { name: "Next.js", featured: true },
    ],
    note: "iOS、Android、Web を横断して、読みやすい画面づくりを考えられます。",
  },
  {
    icon: "C++",
    label: "プログラミング",
    title: "ロジックと基礎実装",
    description:
      "C++ を通して、アルゴリズムやデータ構造、処理の組み立て方を丁寧に学んでいます。",
    items: [{ name: "C++", featured: false }],
    note: "見た目だけでなく、内部の構造まで整理して考える土台になっています。",
  },
  {
    icon: "UI",
    label: "デザイン / 制作",
    title: "UI設計とプロトタイプ",
    description:
      "Figma を使いながら、情報の優先順位や画面の流れを整えて制作しています。",
    items: [
      { name: "Figma", featured: true },
      { name: "情報設計", featured: false },
    ],
    note: "使いやすさと見やすさを両立するための整理も大切にしています。",
  },
  {
    icon: "3D",
    label: "3D / 表現",
    title: "3Dとインタラクティブ制作",
    description:
      "Unity、Blender、Maya を組み合わせて、体験づくりやビジュアル表現にも取り組んでいます。",
    items: [
      { name: "Unity", featured: false },
      { name: "Blender", featured: false },
      { name: "Maya", featured: false },
    ],
    note: "アプリやWeb以外にも、立体表現やインタラクションの視点を持っています。",
  },
] as const;

export const primarySkills = ["Swift", "Kotlin", "Next.js", "Figma"] as const;

export const skillSnapshots = [
  {
    name: "Swift",
    area: "iOS",
    level: "主軸",
    usage: "画面設計からUI実装まで、iOSアプリの見やすさを意識して組み立てます。",
    output: "ネイティブUI / 画面遷移 / 情報整理",
  },
  {
    name: "Kotlin",
    area: "Android",
    level: "主軸",
    usage: "Androidアプリの構成や表示を、読みやすく保てるように整理します。",
    output: "ネイティブUI / 状態整理 / 実装の分割",
  },
  {
    name: "Next.js",
    area: "Web",
    level: "主軸",
    usage: "ページ構成、コンポーネント、レスポンシブ表示を一体で考えて実装します。",
    output: "Reactコンポーネント / ルーティング / Tailwind CSS",
  },
  {
    name: "Figma",
    area: "Design",
    level: "設計",
    usage: "作る前に情報の優先順位や画面の流れを整理し、実装しやすい形へ落とし込みます。",
    output: "ワイヤー / UI整理 / プロトタイプ",
  },
] as const;

export const focusHighlights = [
  {
    icon: "01",
    title: "主軸技術",
    detail: "Swift、Kotlin、Next.js、Figma を中心に、学生制作の幅を組み立てています。",
  },
  {
    icon: "02",
    title: "制作の流れ",
    detail: "画面設計、実装、プロトタイプ、3D表現までを、つながりのある工程として扱えます。",
  },
  {
    icon: "03",
    title: "見せたい強み",
    detail: "開発系と制作系の両方を持ちながら、読みやすいUIに整理してまとめることが得意です。",
  },
] as const;

export const capabilityBlocks = [
  {
    icon: "A",
    label: "アプリ",
    value: "Swift / Kotlin",
    description: "ネイティブUI実装",
  },
  {
    icon: "W",
    label: "Web",
    value: "Next.js",
    description: "整理されたフロントエンド",
  },
  {
    icon: "D",
    label: "デザイン",
    value: "Figma",
    description: "情報設計とUI整理",
  },
  {
    icon: "3D",
    label: "3D",
    value: "Unity / Blender / Maya",
    description: "3Dとインタラクティブ表現",
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
