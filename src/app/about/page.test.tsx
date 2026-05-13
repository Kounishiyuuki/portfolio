import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "@/app/about/page";
import { siteConfig } from "@/lib/site-config";

describe("AboutPage", () => {
  it("renders profile identity, school information, and core skills", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "プロフィール",
      })
    ).toBeInTheDocument();
    expect(screen.getByText(siteConfig.name)).toBeInTheDocument();
    expect(screen.getByText(`${siteConfig.department} / ${siteConfig.year}`)).toBeInTheDocument();
    for (const skill of ["Swift", "Kotlin", "Next.js"]) {
      expect(screen.getAllByText(skill)).toHaveLength(2);
    }
  });

  it("shows the three story blocks in order", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: "はじまり" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "技術の主軸" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "強み" })).toBeInTheDocument();
    expect(screen.getByText("学びの起点")).toBeInTheDocument();
    expect(screen.getByText("主軸技術")).toBeInTheDocument();
    expect(screen.getByText("UIと実装")).toBeInTheDocument();
  });

  it("shows a concise journey timeline", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "これまでの歩み",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("2005年")).toBeInTheDocument();
    expect(screen.getByText("金沢で生まれ、高校までを過ごす")).toBeInTheDocument();
    expect(screen.getByText("大学入学")).toBeInTheDocument();
    expect(screen.getByText("大学2年")).toBeInTheDocument();
    expect(screen.getByText("現在")).toBeInTheDocument();
  });
});
