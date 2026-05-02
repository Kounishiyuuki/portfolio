import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePathname } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/site-config";

const mockedUsePathname = vi.mocked(usePathname);

describe("SiteHeader", () => {
  beforeEach(() => {
    mockedUsePathname.mockReturnValue("/");
  });

  it("renders the brand link and primary navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: new RegExp(siteConfig.name) })).toHaveAttribute("href", "/");
    expect(screen.getAllByRole("link", { name: "ホーム" })[0]).toHaveAttribute("href", "/");
    expect(screen.getAllByRole("link", { name: "制作物" })[0]).toHaveAttribute("href", "/projects");
    expect(screen.getAllByRole("link", { name: "プロフィール" })[0]).toHaveAttribute("href", "/about");
    expect(screen.getAllByRole("link", { name: "連絡先" })[0]).toHaveAttribute("href", "/contact");
  });

  it("marks the current page in desktop and mobile navigation", async () => {
    mockedUsePathname.mockReturnValue("/projects");

    render(<SiteHeader />);

    await userEvent.click(screen.getByRole("button", { name: "メニュー" }));

    const currentLinks = screen.getAllByRole("link", { name: "制作物", current: "page" });
    expect(currentLinks).toHaveLength(2);
  });

  it("opens and closes the mobile menu from user actions", async () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "メニュー" });
    let mobileNav = screen.getByLabelText("モバイルナビゲーション");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileNav).not.toBeVisible();

    fireEvent.click(menuButton);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "メニュー" })).toHaveAttribute("aria-expanded", "true");
    });
    mobileNav = screen.getByLabelText("モバイルナビゲーション");
    expect(mobileNav).toBeVisible();

    const contactLink = screen.getAllByRole("link", { name: "連絡先" }).at(-1)!;
    contactLink.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(contactLink);

    expect(screen.getByRole("button", { name: "メニュー" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByLabelText("モバイルナビゲーション")).not.toBeVisible();
  });
});
