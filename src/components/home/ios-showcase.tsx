"use client";

import dynamic from "next/dynamic";
import { IosShowcaseStatic } from "@/components/home/ios-showcase-static";

// Loaded on the client only, so the scroll-linked code stays out of the initial page bundle.
export const IosShowcase = dynamic(
  () => import("@/components/home/ios-showcase-scroll").then((module) => module.IosShowcaseScroll),
  { ssr: false, loading: () => <IosShowcaseStatic /> }
);
