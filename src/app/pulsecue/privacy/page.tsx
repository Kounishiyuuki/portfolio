import type { Metadata } from "next";
import { PulseCueDocument } from "@/components/pulsecue/pulsecue-document";
import {
  pulseCuePrivacyEffectiveDate,
  pulseCuePrivacySections,
  pulseCueSupportPath,
} from "@/lib/pulsecue-data";

export const metadata: Metadata = {
  title: "Pulse Cue プライバシーポリシー",
  description: "Pulse Cue における情報の取り扱いについて説明します。",
};

export default function PulseCuePrivacyPage() {
  return (
    <PulseCueDocument
      eyebrow="Pulse Cue"
      title="Pulse Cue プライバシーポリシー"
      lead="本ポリシーは、iOS アプリ Pulse Cue における情報の取り扱いについて説明するものです。"
      meta={`制定日: ${pulseCuePrivacyEffectiveDate}`}
      sections={pulseCuePrivacySections}
      relatedLink={{ href: pulseCueSupportPath, label: "サポートページ" }}
    />
  );
}
