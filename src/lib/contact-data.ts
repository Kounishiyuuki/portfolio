import { siteConfig } from "@/lib/site-config";

type MailtoHrefOptions = {
  subject?: string;
  bodyLines?: readonly string[];
};

export function createMailtoHref(email: string, { subject, bodyLines }: MailtoHrefOptions = {}) {
  const queryParts = [
    subject ? `subject=${encodeURIComponent(subject)}` : null,
    bodyLines && bodyLines.length > 0 ? `body=${encodeURIComponent(bodyLines.join("\n"))}` : null,
  ].filter(Boolean);

  return queryParts.length > 0 ? `mailto:${email}?${queryParts.join("&")}` : `mailto:${email}`;
}

export const contactMailSubject = "ポートフォリオについてご連絡です";

export const contactMailBodyLines = [
  "ご所属 / お名前:",
  "",
  "ご連絡の背景:",
  "",
  "ご連絡内容:",
  "",
  "希望時期:",
  "",
] as const;

export const plainMailtoHref = createMailtoHref(siteConfig.email);

export const contactMailtoHref = createMailtoHref(siteConfig.email, {
  subject: contactMailSubject,
  bodyLines: contactMailBodyLines,
});

export const contactChannels = [
  {
    label: "メール",
    value: siteConfig.email,
    note: "制作のことやプロフィールについて、気軽にご連絡いただけます。",
    href: contactMailtoHref,
    action: "メールで連絡する",
    icon: "@",
    iconClassName: "bg-[#2563eb] text-white border-[#2563eb]/20",
  },
  {
    label: "GitHub",
    value: "github.com/Kounishiyuuki",
    note: "コードや使っている技術を見たいときの補助導線です。",
    href: siteConfig.githubUrl,
    action: "GitHubを見る",
    icon: "</>",
    iconClassName: "bg-[#111827] text-white border-[#111827]/20",
  },
] as const;

export const collaborationNotes = [
  "ポートフォリオについてのご質問",
  "制作や得意分野についての確認",
  "GitHub や実装についてのご相談",
] as const;

export const messageTemplate = [
  {
    label: "ご所属 / お名前",
    note: "会社名や学校名、ご担当者名があると分かりやすいです。",
  },
  {
    label: "ご連絡の背景",
    note: "ポートフォリオについてのご質問や、ご連絡のきっかけを簡単に書いていただければ大丈夫です。",
  },
  {
    label: "ご連絡内容",
    note: "面談希望、確認したい点、見てほしい制作などがあればそのまま書いていただけます。",
  },
  {
    label: "希望時期",
    note: "もし日程感があれば、候補や目安を添えていただけると助かります。",
  },
] as const;
