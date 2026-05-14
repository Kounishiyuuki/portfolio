import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsPage from "@/app/skills/page";
import { principles, skillCategories, skillSnapshots } from "@/components/skills/skills-data";

describe("SkillsPage", () => {
  it("renders the skills overview and primary technology groups", () => {
    render(<SkillsPage />);

    expect(
      screen.getByRole("heading", {
        name: /開発と制作の主軸技術/,
      })
    ).toBeInTheDocument();
    for (const category of skillCategories) {
      expect(screen.getByRole("heading", { name: category.title })).toBeInTheDocument();
    }
    for (const skill of ["Swift", "Kotlin", "Next.js"]) {
      expect(screen.getAllByText(skill).length).toBeGreaterThanOrEqual(2);
    }
    expect(screen.getByText("Blender")).toBeInTheDocument();
    expect(screen.getAllByText("できる形").length).toBeGreaterThan(0);
    expect(screen.getAllByText("主軸").length).toBeGreaterThan(0);
    for (const skill of skillSnapshots) {
      expect(screen.getByRole("heading", { name: skill.name })).toBeInTheDocument();
      expect(screen.getByText(skill.output)).toBeInTheDocument();
    }
  });

  it("shows implementation principles as readable sections", () => {
    render(<SkillsPage />);

    expect(screen.getByRole("heading", { name: /技術選定だけでなく/ })).toBeInTheDocument();
    for (const principle of principles) {
      expect(screen.getByRole("heading", { name: principle.title })).toBeInTheDocument();
    }
  });
});
