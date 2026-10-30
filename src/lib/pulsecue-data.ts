import { createMailtoHref } from "@/lib/contact-data";
import { siteConfig } from "@/lib/site-config";

export type PulseCueSection = {
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
};

export const pulseCueSupportPath = "/pulsecue/support";
export const pulseCuePrivacyPath = "/pulsecue/privacy";

export const pulseCueSupportEmail = siteConfig.email;

export const pulseCueSupportMailtoHref = createMailtoHref(pulseCueSupportEmail, {
  subject: "Pulse Cue についてのお問い合わせ",
  bodyLines: ["お問い合わせの種類（不具合報告 / 機能についての質問・要望 / その他）:", "", "内容:", ""],
});

export const pulseCueAccountDeletionText =
  "Pulse Cueアカウントは、アプリ内の「設定 → アカウント → アカウントを削除」から削除できます。";

export const pulseCuePrivacyEffectiveDate = "2026年10月30日";

export const pulseCueSupportSections: readonly PulseCueSection[] = [
  {
    title: "Pulse Cueについての問い合わせ",
    paragraphs: [
      "Pulse Cue の使い方やご不明な点については、下記のメールアドレスまでお問い合わせください。内容を確認のうえ、順次ご返信いたします。",
    ],
  },
  {
    title: "不具合報告",
    paragraphs: ["不具合を見つけた場合は、以下の情報を添えてお知らせいただけると調査がスムーズです。"],
    items: [
      "お使いの iPhone の機種と iOS のバージョン",
      "Pulse Cue のバージョン",
      "発生した画面と操作の手順",
      "可能であればスクリーンショット",
    ],
  },
  {
    title: "機能についての質問・要望",
    paragraphs: [
      "機能の使い方に関するご質問や、追加・改善してほしい機能のご要望もメールで受け付けています。",
    ],
  },
  {
    title: "アカウント削除について",
    paragraphs: [
      pulseCueAccountDeletionText,
      "削除するとサーバー上のアカウント情報（ユーザーID、メールアドレス、セッション情報など）が削除されます。",
    ],
  },
];

export const pulseCuePrivacySections: readonly PulseCueSection[] = [
  {
    title: "1. 端末内に保存される記録",
    paragraphs: [
      "トレーニング、食事・栄養、体重、睡眠、ジム設定などの記録は、基本的にお使いの端末内に保存されます。これらの記録を Pulse Cue のサーバーへ送信することはありません。",
    ],
  },
  {
    title: "2. HealthKit（ヘルスケア）",
    paragraphs: [
      "Pulse Cue は、許可をいただいた場合に HealthKit から体重と睡眠のデータを読み取り、記録の入力補助に利用します。",
    ],
    items: [
      "HealthKit へのデータの書き込みは行いません。",
      "HealthKit から取得した健康情報を端末外へ送信しません。",
      "HealthKit 由来の健康情報を広告・マーケティングの目的で使用しません。",
    ],
  },
  {
    title: "3. アカウントとサインイン",
    paragraphs: [
      "Apple または Google でサインインした場合、認証とアカウント機能の提供のために、以下の情報を Pulse Cue のサーバーで扱う場合があります。",
    ],
    items: [
      "メールアドレス（Apple / Google から提供された場合。Apple の非公開リレーアドレスを含む）",
      "ユーザーID（Pulse Cue のユーザーID、サインインに使用したサービスの識別子）",
      "セッション管理情報（セッショントークン、端末名など）",
    ],
  },
  {
    title: "4. トラッキング",
    paragraphs: [
      "Pulse Cue は、取得した情報をトラッキングや広告の目的で利用しません。他社のアプリや Web サイトをまたいだ追跡も行いません。",
    ],
  },
  {
    title: "5. 食品バーコード検索（OpenFoodFacts）",
    paragraphs: [
      "食品のバーコード検索を行う場合、食品情報を取得するために、読み取ったバーコード情報を OpenFoodFacts（外部の食品データベース）へ送信する場合があります。通信の性質上、IP アドレスなどの一般的な通信情報も OpenFoodFacts に送られます。",
      "OpenFoodFacts へ Pulse Cue のアカウントIDやメールアドレスは送信しません。OpenFoodFacts における情報の取り扱いは、同サービスのプライバシーポリシーをご確認ください。",
    ],
  },
  {
    title: "6. 位置情報",
    paragraphs: [
      "位置情報は、近くのジムを検索するときにのみ利用します。検索には Apple の地図機能（MapKit）を使用し、Pulse Cue のサーバーに位置情報を保存することはありません。",
    ],
  },
  {
    title: "7. カメラ",
    paragraphs: ["カメラは、食品のバーコードを読み取るために使用します。"],
  },
  {
    title: "8. アカウントの削除",
    paragraphs: [
      pulseCueAccountDeletionText,
      "削除すると、サーバー上のアカウント情報（ユーザーID、メールアドレス、セッション情報など）が削除されます。",
    ],
  },
  {
    title: "9. お問い合わせ",
    paragraphs: ["本ポリシーに関するお問い合わせは、下記のメールアドレスまでご連絡ください。"],
  },
  {
    title: "10. 改定",
    paragraphs: ["本ポリシーの内容は、必要に応じて改定することがあります。改定した場合は本ページでお知らせします。"],
  },
];
