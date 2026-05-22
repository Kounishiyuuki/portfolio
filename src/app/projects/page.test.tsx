import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ProjectsPage from "@/app/projects/page";

describe("ProjectsPage", () => {
  it("renders all projects by default with filter controls", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "制作一覧",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("toolbar", { name: "制作物の絞り込み" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /すべて/ })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
    expect(screen.getByText("All Works")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "PulseCue" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "PulseCue - 詳細を見る" })).toHaveAttribute(
      "href",
      "/projects/pulsecue-ios"
    );
    expect(screen.getByRole("heading", { name: "WinCook" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Share Fit" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AIVY" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "WinCook - 詳細を見る" })).toHaveAttribute("href", "/projects/wincook");
    expect(screen.getByRole("heading", { name: "TabFlow" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "TabFlow - 詳細を見る" })).toHaveAttribute("href", "/projects/tabflow");
    expect(screen.getByRole("heading", { name: "Portfolio" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Nexus Quant/ })).not.toBeInTheDocument();
  });

  it("filters visible project cards from user interaction", async () => {
    render(<ProjectsPage />);

    await userEvent.click(screen.getByRole("button", { name: /AI/ }));

    expect(screen.getByRole("button", { name: /AI/ })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/今は/)).toHaveTextContent("AI");
    expect(screen.getByRole("heading", { name: "WinCook" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AIVY" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Share Fit" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Portfolio" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "TabFlow" })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /すべて/ }));

    expect(screen.getByRole("button", { name: /すべて/ })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: "WinCook" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Share Fit" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AIVY" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "TabFlow" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Portfolio" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "PulseCue" })).toBeInTheDocument();
  });

  it("keeps the contact call-to-action available after filtering", async () => {
    render(<ProjectsPage />);

    await userEvent.click(screen.getByRole("button", { name: /Web/ }));

    const contactSection = screen.getByRole("heading", {
      name: /気になる制作があれば、連絡先も見られます。/,
    }).closest("section");

    expect(contactSection).not.toBeNull();
    expect(within(contactSection as HTMLElement).getByRole("link", { name: "連絡先を見る" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
