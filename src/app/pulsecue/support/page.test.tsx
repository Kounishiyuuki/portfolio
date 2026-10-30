import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PulseCueSupportPage from "@/app/pulsecue/support/page";
import { siteConfig } from "@/lib/site-config";

describe("PulseCueSupportPage", () => {
  it("renders the support heading, topics, and account deletion steps", () => {
    render(<PulseCueSupportPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Pulse Cue サポート" })).toBeInTheDocument();
    for (const name of ["Pulse Cueについての問い合わせ", "不具合報告", "機能についての質問・要望", "アカウント削除について"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
    expect(
      screen.getByText("Pulse Cueアカウントは、アプリ内の「設定 → アカウント → アカウントを削除」から削除できます。")
    ).toBeInTheDocument();
  });

  it("links to the portfolio email and the privacy policy", () => {
    render(<PulseCueSupportPage />);

    expect(screen.getByRole("link", { name: "メールで問い合わせる" })).toHaveAttribute(
      "href",
      expect.stringContaining(`mailto:${siteConfig.email}`)
    );
    expect(screen.getByRole("link", { name: /プライバシーポリシー/ })).toHaveAttribute("href", "/pulsecue/privacy");
  });
});
