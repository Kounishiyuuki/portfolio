import { describe, expect, it } from "vitest";
import {
  allWorkProjectItems,
  featuredProjectItems,
  getProjectsByFilter,
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

    expect(mobileProjects.map((project) => project.title)).toEqual(["PulseCue", "Barns", "WinCook", "Share Fit", "AIVY"]);
    expect(webProjects.map((project) => project.title)).toEqual(["TabFlow", "Portfolio"]);
    expect(aiProjects.map((project) => project.title)).toEqual(["WinCook", "AIVY"]);
    expect(hackathonProjects.map((project) => project.title)).toEqual(["WinCook", "Share Fit"]);
  });

  it("exports only showcase-ready featured projects", () => {
    expect(featuredProjectItems.map((project) => project.title)).toEqual(["PulseCue", "Barns", "WinCook", "Share Fit", "AIVY", "TabFlow"]);
    expect(featuredProjectItems.every((project) => project.featured && project.showcase)).toBe(true);
    expect(featuredProjectItems.map((project) => project.href)).toEqual([
      "/projects/pulsecue-ios",
      "/projects/barns",
      "/projects/wincook",
      "/projects/share-fit",
      "/projects/aivy",
      "/projects/tabflow",
    ]);
  });

  it("provides real app icon assets for PulseCue and Barns", () => {
    expect(projectItems.find((project) => project.title === "PulseCue")?.appIcon).toEqual({
      src: "/images/projects/pulsecue/icon.png",
      alt: "PulseCueのアプリアイコン",
    });
    expect(projectItems.find((project) => project.title === "Barns")?.appIcon).toEqual({
      src: "/images/projects/barns/icon.png",
      alt: "Barnsのアプリアイコン",
    });
  });

  it("frames Barns as a modest request-based MVP project", () => {
    const barns = projectItems.find((project) => project.title === "Barns");

    expect(barns).toMatchObject({
      kind: "依頼制作",
      status: "MVPまで構築",
      summary: "知人からの依頼をもとにMVPまで形にしたアプリ",
    });
    expect(barns?.description).toContain("知人からの依頼");
    expect(barns?.description).toContain("MVPまで構築");
  });

  it("keeps non-featured works separate from featured projects", () => {
    expect(allWorkProjectItems.map((project) => project.title)).toEqual(["Portfolio"]);
    expect(allWorkProjectItems.every((project) => !project.featured)).toBe(true);
  });
});
