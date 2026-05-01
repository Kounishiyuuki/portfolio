import { render, screen } from "@testing-library/react";
import { notFound } from "next/navigation";
import { describe, expect, it, vi } from "vitest";
import FeaturedProjectDetailPage, {
  generateMetadata,
  generateStaticParams,
} from "@/app/projects/[slug]/page";
import { featuredProjectItems } from "@/lib/projects-data";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("FeaturedProjectDetailPage", () => {
  it("generates static params for the final featured projects", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "wincook" },
      { slug: "share-fit" },
      { slug: "aivy" },
    ]);
  });

  it("renders a featured project detail page with real repository media", async () => {
    const page = await FeaturedProjectDetailPage({
      params: Promise.resolve({ slug: "wincook" }),
    });

    render(page);

    expect(screen.getByRole("heading", { level: 1, name: "WinCook" })).toBeInTheDocument();
    expect(screen.getByText(featuredProjectItems[0].role)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHubを見る/ })).toHaveAttribute(
      "href",
      featuredProjectItems[0].githubUrl
    );
    expect(screen.getAllByAltText("WinCookのREADMEに掲載されているアプリビジュアル").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByAltText("WinCookのロゴ画像")).toBeInTheDocument();
  });

  it("returns project metadata from the selected project", async () => {
    await expect(
      generateMetadata({
        params: Promise.resolve({ slug: "aivy" }),
      })
    ).resolves.toMatchObject({
      title: "AIVY | 制作詳細",
      description: "AIキャラクターとの会話体験を扱うメディアアプリ",
    });
  });

  it("uses notFound for non-featured or stale project detail routes", async () => {
    await expect(
      FeaturedProjectDetailPage({
        params: Promise.resolve({ slug: "nexus-quant" }),
      })
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(vi.mocked(notFound)).toHaveBeenCalled();
  });
});
