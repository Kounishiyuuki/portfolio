import type { Metadata } from "next";
import { PulseCueDocument } from "@/components/pulsecue/pulsecue-document";
import { pulseCuePrivacyPath, pulseCueSupportSections } from "@/lib/pulsecue-data";

export const metadata: Metadata = {
  title: "Pulse Cue サポート",
  description: "Pulse Cue のお問い合わせ、不具合報告、アカウント削除についてのご案内です。",
};

export default function PulseCueSupportPage() {
  return (
    <PulseCueDocument
      eyebrow="Pulse Cue"
      title="Pulse Cue サポート"
      lead="Pulse Cue に関するお問い合わせ、不具合報告、機能についてのご質問・ご要望はメールで受け付けています。"
      sections={pulseCueSupportSections}
      relatedLink={{ href: pulseCuePrivacyPath, label: "プライバシーポリシー（Privacy Policy）" }}
    />
  );
}
