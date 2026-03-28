"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { InternalLink } from "@/components/ui/internal-link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/projects", label: "制作実績" },
  { href: "/about", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavId = useId();

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-5">
        <div className="surface-hairline flex items-center justify-between rounded-pill border border-line/80 bg-white/84 px-4 py-2.5 shadow-glow backdrop-blur-chrome md:px-5">
          <InternalLink
            href="/"
            className="rounded-pill px-2.5 py-1.5 text-sm font-semibold tracking-[0.03em] text-foreground/92 hover:text-foreground"
          >
            勇輝 / Yuki
          </InternalLink>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <InternalLink
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-pill px-4 py-2 text-sm tracking-[0.01em] transition-[background-color,color,border-color,box-shadow] duration-200",
                  pathname === item.href
                    ? "bg-background text-foreground shadow-[0_8px_18px_rgba(27,44,74,0.07)]"
                    : "text-muted-foreground hover:bg-background/92 hover:text-foreground"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </InternalLink>
            ))}
          </nav>
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls={mobileNavId}
              className={cn(
                "rounded-pill border border-line/90 bg-background/90 px-4 py-2 text-sm font-medium tracking-[0.01em] text-foreground/88",
                "transition-[background-color,color,border-color,box-shadow] duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isMenuOpen && "bg-background text-foreground shadow-[0_8px_18px_rgba(27,44,74,0.07)]"
              )}
            >
              メニュー
            </button>
            <nav
              id={mobileNavId}
              aria-label="モバイルナビゲーション"
              className={cn(
                "absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-[1.2rem] border border-line/90 bg-white/96 p-2 shadow-[0_18px_40px_rgba(27,44,74,0.1)]",
                isMenuOpen ? "block" : "hidden"
              )}
            >
              {navItems.map((item) => (
                <InternalLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-[0.9rem] px-3 py-2.5 text-sm tracking-[0.01em] transition-[background-color,color,box-shadow] duration-200",
                    pathname === item.href
                      ? "bg-background text-foreground shadow-[0_8px_18px_rgba(27,44,74,0.06)]"
                      : "text-foreground/84 hover:bg-background hover:text-foreground"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </InternalLink>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
