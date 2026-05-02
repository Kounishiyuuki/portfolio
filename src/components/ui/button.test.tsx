import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders a native button with a safe default type", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>送信する</Button>);

    const button = screen.getByRole("button", { name: "送信する" });
    expect(button).toHaveAttribute("type", "button");

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call click handlers when disabled", async () => {
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        送信する
      </Button>
    );

    await userEvent.click(screen.getByRole("button", { name: "送信する" }));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders internal links through the app link path", () => {
    render(<Button href="/projects">制作物を見る</Button>);

    expect(screen.getByRole("link", { name: "制作物を見る" })).toHaveAttribute("href", "/projects");
  });

  it("preserves external link attributes", () => {
    render(
      <Button href="https://github.com/Kounishiyuuki" target="_blank" rel="noopener noreferrer">
        GitHubを見る
      </Button>
    );

    const link = screen.getByRole("link", { name: "GitHubを見る" });
    expect(link).toHaveAttribute("href", "https://github.com/Kounishiyuuki");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
