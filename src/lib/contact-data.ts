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
  "お名前・ご所属:",
  "",
  "ご用件:",
  "",
  "確認したい内容:",
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
    note: "制作物や活動について興味を持っていただけた場合は、こちらからご連絡いただけます。",
    href: contactMailtoHref,
    action: "メールで連絡する",
    icon: "@",
    iconClassName: "bg-[#1D1D1F] text-white border-[#1D1D1F]/20",
  },
  {
    label: "GitHub",
    value: "github.com/Kounishiyuuki",
    note: "公開しているコードや制作内容をご確認いただけます。",
    href: siteConfig.githubUrl,
    action: "GitHubを見る",
    icon: "</>",
    iconClassName: "bg-black text-white border-black/20",
  },
] as const;

export const collaborationNotes = [
  "ポートフォリオについてのご質問",
  "制作や得意分野についての確認",
  "GitHub や実装についてのご相談",
] as const;

export const messageTemplate = [
  {
    label: "お名前・ご所属",
    note: "差し支えない範囲で添えていただけます。",
  },
  {
    label: "ご用件",
    note: "ご連絡の概要を簡単に添えていただけます。",
  },
  {
    label: "確認したい内容",
    note: "制作物や活動について、気になる点があれば添えていただけます。",
  },
] as const;
