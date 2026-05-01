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
        name: /所属と主軸が、自然に伝わるプロフィール。/,
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
    expect(screen.getByText("強みの出し方")).toBeInTheDocument();
  });
});
