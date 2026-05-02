import type { ReactElement } from "react";
import { render } from "@testing-library/react";

export const viewportWidths = {
  mobile: 390,
  tablet: 768,
  desktop: 1280,
} as const;

export function setViewport(width: number, height = 900) {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: width,
    writable: true,
  });
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: height,
    writable: true,
  });
  window.dispatchEvent(new Event("resize"));
}

export function renderAtViewport(ui: ReactElement, width: number, height?: number) {
  setViewport(width, height);
  return render(ui);
}
