import { describe, expect, it } from "vitest";
import {
  allWorkProjectItems,
  featuredProjectItems,
  getProjectsByFilter,
  matchesProjectFilter,
  projectFilterOptions,
  projectItems,
} from "@/lib/projects-data";

describe("projects data", () => {
  it("keeps the all filter aligned with the full project list", () => {
    expect(projectFilterOptions.map((option) => option.id)).toEqual([
      "all",
      "mobile",
      "web",
      "ai",
      "hackathon",
    ]);
    expect(getProjectsByFilter("all")).toEqual(projectItems);
  });

  it("filters projects by user-facing categories", () => {
    const mobileProjects = getProjectsByFilter("mobile");
    const webProjects = getProjectsByFilter("web");
    const aiProjects = getProjectsByFilter("ai");
    const hackathonProjects = getProjectsByFilter("hackathon");

    expect(mobileProjects.map((project) => project.title)).toEqual(
      expect.arrayContaining(["WinCook", "Share Fit", "PulseCue"])
    );
    expect(webProjects.map((project) => project.title)).toContain("Portfolio");
    expect(aiProjects.map((project) => project.title)).toEqual(expect.arrayContaining(["WinCook", "AIVY"]));
    expect(hackathonProjects.map((project) => project.title)).toEqual(
      expect.arrayContaining(["WinCook", "Share Fit"])
    );
  });

  it("exports only showcase-ready featured projects", () => {
    expect(featuredProjectItems.map((project) => project.title)).toEqual(["WinCook", "Share Fit", "AIVY"]);
    expect(featuredProjectItems.every((project) => project.featured && project.showcase)).toBe(true);
    expect(featuredProjectItems.every((project) => matchesProjectFilter(project, "mobile"))).toBe(true);
    expect(featuredProjectItems.map((project) => project.href)).toEqual([
      "/projects/wincook",
      "/projects/share-fit",
      "/projects/aivy",
    ]);
  });

  it("keeps non-featured works separate from featured projects", () => {
    expect(allWorkProjectItems.map((project) => project.title)).toEqual(["Portfolio", "PulseCue"]);
    expect(allWorkProjectItems.every((project) => !project.featured)).toBe(true);
  });
});
