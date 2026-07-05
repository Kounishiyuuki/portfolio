import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { featuredProjectItems } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

describe("HomePage", () => {
  it("renders a strong first impression with primary portfolio actions", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /学生制作と実装のポートフォリオ/,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(siteConfig.role)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /制作物を見る/ })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "プロフィールを見る" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "メール" })).toHaveAttribute(
      "href",
      `mailto:${siteConfig.email}`
    );
  });

  it("surfaces featured projects and preserves GitHub as an external action", () => {
    render(<HomePage />);

    for (const project of featuredProjectItems) {
      expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
    }
    expect(featuredProjectItems[0]?.title).toBe("PulseCue");
    expect(screen.getByAltText("PulseCueのアプリアイコン")).toBeInTheDocument();
    expect(screen.getByAltText("Barnsのアプリアイコン")).toBeInTheDocument();

    const githubLink = screen.getByRole("link", { name: "GitHub" });
    expect(githubLink).toHaveAttribute("href", siteConfig.githubUrl);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
