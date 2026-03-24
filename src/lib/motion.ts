export const motionTokens = {
  duration: {
    instant: 0.18,
    smooth: 0.32,
    slow: 0.52,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1] as const,
    entrance: [0.16, 1, 0.3, 1] as const,
  },
  offset: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 40,
  },
} as const;

export function fadeInUp(distance = motionTokens.offset.md) {
  return {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: motionTokens.duration.smooth,
      ease: motionTokens.ease.entrance,
    },
  } as const;
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: motionTokens.duration.smooth,
      ease: motionTokens.ease.standard,
      delay,
    },
  } as const;
}

export function staggerChildren(gap = 0.08) {
  return {
    animate: {
      transition: {
        staggerChildren: gap,
        delayChildren: 0.04,
      },
    },
  } as const;
}
