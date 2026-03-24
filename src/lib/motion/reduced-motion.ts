"use client";

import { useReducedMotion } from "motion/react";
import { motionTokens } from "@/lib/motion";

export function useMotionDuration(duration: keyof typeof motionTokens.duration) {
  const prefersReducedMotion = useReducedMotion();

  return prefersReducedMotion ? 0 : motionTokens.duration[duration];
}
