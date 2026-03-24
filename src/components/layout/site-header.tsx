import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-5">
        <div className="surface-hairline flex items-center justify-between rounded-pill border border-white/10 bg-surface/60 px-5 py-3 shadow-glow backdrop-blur-chrome">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.22em] text-foreground/92 uppercase"
          >
            {siteConfig.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-pill px-4 py-2 text-sm text-muted-foreground transition-colors",
                  "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
