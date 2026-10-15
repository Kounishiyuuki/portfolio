import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IosShowcaseStatic, iosShowcaseProjects } from "@/components/home/ios-showcase-static";

describe("IosShowcaseStatic", () => {
  it("shows MannerPath before PulseCue with their current status", () => {
    render(<IosShowcaseStatic />);

    expect(iosShowcaseProjects.map((project) => project.title)).toEqual(["MannerPath", "PulseCue"]);
    expect(screen.getByRole("region", { name: "主軸にしているiOSアプリ" })).toBeInTheDocument();
    expect(screen.getByText("App Store提出準備中")).toBeInTheDocument();
    expect(screen.getByText("継続開発中")).toBeInTheDocument();
  });
});
