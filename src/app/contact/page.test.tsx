import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "@/app/contact/page";
import { siteConfig } from "@/lib/site-config";

describe("ContactPage", () => {
  it("renders the contact page heading and available channels", () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /興味を持っていただけた場合は、メールからご連絡ください。/ })
    ).toBeInTheDocument();
    expect(screen.getByText(siteConfig.email)).toBeInTheDocument();
    expect(screen.getByText("github.com/Kounishiyuuki")).toBeInTheDocument();
    expect(screen.getByText(/金沢工業大学/)).toHaveTextContent(siteConfig.department);
  });

  it("provides mail links with a message template and an external GitHub link", () => {
    render(<ContactPage />);

    const mailLinks = screen.getAllByRole("link", { name: "メールで連絡する" });
    expect(mailLinks).toHaveLength(2);
    for (const link of mailLinks) {
      expect(link).toHaveAttribute("href", expect.stringContaining(`mailto:${siteConfig.email}`));
      expect(link).toHaveAttribute(
        "href",
        expect.stringContaining(encodeURIComponent("ポートフォリオについてご連絡です"))
      );
      expect(link).toHaveAttribute("href", expect.stringContaining(encodeURIComponent("確認したい内容:")));
    }

    const githubLinks = screen.getAllByRole("link", { name: "GitHubを見る" });
    expect(githubLinks).toHaveLength(2);
    for (const link of githubLinks) {
      expect(link).toHaveAttribute("href", siteConfig.githubUrl);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("shows the suggested first-message fields", () => {
    render(<ContactPage />);

    expect(screen.getByText("ポートフォリオについてのご質問")).toBeInTheDocument();
    expect(screen.getByText("制作や得意分野についての確認")).toBeInTheDocument();
    expect(screen.getByText("GitHub や実装についてのご相談")).toBeInTheDocument();
    expect(screen.getByText("お名前・ご所属")).toBeInTheDocument();
    expect(screen.getByText("ご用件")).toBeInTheDocument();
    expect(screen.getByText("確認したい内容")).toBeInTheDocument();
  });
});
