"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { InternalLink } from "@/components/ui/internal-link";
import { getNavFeedback } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/projects", label: "制作物" },
  { href: "/about", label: "プロフィール" },
  { href: "/contact", label: "連絡先" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavId = useId();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const navFeedback = getNavFeedback(prefersReducedMotion);

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-5">
        <div className="surface-hairline flex min-w-0 items-center justify-between gap-3 rounded-pill border border-line/80 bg-white/84 px-4 py-2.5 shadow-glow backdrop-blur-chrome md:px-5">
          <InternalLink
            href="/"
            className="min-w-0 rounded-[1.1rem] px-2.5 py-1.5 transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/42 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="flex flex-col leading-none">
              <span className="truncate text-[1rem] font-semibold tracking-[-0.035em] text-foreground/94">
                {siteConfig.name}
              </span>
              <span className="mt-1 text-[10px] font-medium tracking-[0.08em] text-muted-foreground">
                {siteConfig.role}
              </span>
            </span>
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
          <div className="relative shrink-0 md:hidden">
            <motion.button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls={mobileNavId}
              initial={false}
              animate={navFeedback.rest}
              whileHover={navFeedback.hover}
              whileTap={navFeedback.press}
              transition={navFeedback.transition}
              className={cn(
                "rounded-pill border border-line/90 bg-background/90 px-4 py-2 text-sm font-medium tracking-[0.01em] text-foreground/88",
                "transition-[background-color,color,border-color,box-shadow] duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isMenuOpen && "bg-background text-foreground shadow-[0_8px_18px_rgba(27,44,74,0.07)]"
              )}
            >
              メニュー
            </motion.button>
            <nav
              id={mobileNavId}
              aria-label="モバイルナビゲーション"
              hidden={!isMenuOpen}
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
