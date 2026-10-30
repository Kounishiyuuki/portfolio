import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PulseCuePrivacyPage from "@/app/pulsecue/privacy/page";
import { siteConfig } from "@/lib/site-config";

describe("PulseCuePrivacyPage", () => {
  it("renders the policy heading, effective date, and key disclosures", () => {
    const { container } = render(<PulseCuePrivacyPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Pulse Cue プライバシーポリシー" })
    ).toBeInTheDocument();
    expect(screen.getByText("制定日: 2026年10月30日")).toBeInTheDocument();
    expect(screen.getByText("HealthKit へのデータの書き込みは行いません。")).toBeInTheDocument();
    expect(screen.getByText(/OpenFoodFacts へ Pulse Cue のアカウントIDやメールアドレスは送信しません/)).toBeInTheDocument();
    expect(screen.getByText(/設定 → アカウント → アカウントを削除/)).toBeInTheDocument();

    const text = container.textContent ?? "";
    for (const excluded of ["クラウドバックアップ", "クラウド同期", "Apple Watch", "サブスクリプション", "AI"]) {
      expect(text).not.toContain(excluded);
    }
  });

  it("links to the support email and the support page", () => {
    render(<PulseCuePrivacyPage />);

    expect(screen.getByRole("link", { name: "メールで問い合わせる" })).toHaveAttribute(
      "href",
      expect.stringContaining(`mailto:${siteConfig.email}`)
    );
    expect(screen.getByRole("link", { name: "サポートページ" })).toHaveAttribute("href", "/pulsecue/support");
  });
});
