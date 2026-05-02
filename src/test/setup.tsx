import React from "react";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string | { pathname?: string };
    children: React.ReactNode;
  }) => {
    const resolvedHref = typeof href === "string" ? href : href.pathname ?? "";

    return (
      <a href={resolvedHref} {...props}>
        {children}
      </a>
    );
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
}));

vi.mock("motion/react", () => {
  const filterMotionProps = (props: Record<string, unknown>) => {
    const {
      animate,
      exit,
      initial,
      layout,
      layoutId,
      transition,
      variants,
      viewport,
      whileHover,
      whileInView,
      whileTap,
      ...domProps
    } = props;

    void animate;
    void exit;
    void initial;
    void layout;
    void layoutId;
    void transition;
    void variants;
    void viewport;
    void whileHover;
    void whileInView;
    void whileTap;

    return domProps;
  };

  const motion = new Proxy(
    {},
    {
      get: (_, tagName: string) => {
        const MotionComponent = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
          ({ children, ...props }, ref) =>
            React.createElement(tagName, { ref, ...filterMotionProps(props) }, children)
        );
        MotionComponent.displayName = `MockMotion.${tagName}`;
        return MotionComponent;
      },
    }
  );

  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useReducedMotion: () => false,
  };
});
