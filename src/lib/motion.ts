export const motionTokens = {
  duration: {
    instant: 0.12,
    fast: 0.18,
    base: 0.26,
    slow: 0.38,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1] as const,
    entrance: [0.16, 1, 0.3, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
    gentle: [0.25, 0.94, 0.32, 1] as const,
  },
  reveal: {
    distance: {
      xs: 8,
      sm: 12,
      md: 18,
      lg: 24,
    },
    opacity: {
      initial: 0,
      final: 1,
    },
  },
  stagger: {
    tight: 0.04,
    base: 0.07,
    relaxed: 0.1,
    delay: 0.03,
  },
  interaction: {
    button: {
      lift: -1,
      hoverScale: 1.002,
      pressOffset: 0.5,
      pressScale: 0.992,
      spring: {
        type: "spring" as const,
        stiffness: 420,
        damping: 28,
        mass: 0.7,
      },
    },
    card: {
      lift: -2,
      hoverScale: 1.002,
      spring: {
        type: "spring" as const,
        stiffness: 280,
        damping: 26,
        mass: 0.9,
      },
    },
  },
} as const;

type FadeUpOptions = {
  distance?: number;
  delay?: number;
  duration?: number;
  reducedMotion?: boolean;
};

type StaggerOptions = {
  gap?: number;
  delayChildren?: number;
  reducedMotion?: boolean;
};

export function fadeIn(delay = 0, reducedMotion = false) {
  return {
    initial: { opacity: reducedMotion ? 1 : motionTokens.reveal.opacity.initial },
    animate: { opacity: motionTokens.reveal.opacity.final },
    transition: {
      duration: reducedMotion ? 0 : motionTokens.duration.fast,
      ease: motionTokens.ease.gentle,
      delay: reducedMotion ? 0 : delay,
    },
  } as const;
}

export function fadeInUp(distance?: number): ReturnType<typeof createFadeInUp>;
export function fadeInUp(options?: FadeUpOptions): ReturnType<typeof createFadeInUp>;
export function fadeInUp(input: number | FadeUpOptions = {}) {
  const options = typeof input === "number" ? { distance: input } : input;
  return createFadeInUp(options);
}

function createFadeInUp(options: FadeUpOptions = {}) {
  const {
    distance = motionTokens.reveal.distance.md,
    delay = 0,
    duration = motionTokens.duration.base,
    reducedMotion = false,
  } = options;

  return {
    initial: {
      opacity: reducedMotion ? 1 : motionTokens.reveal.opacity.initial,
      y: reducedMotion ? 0 : distance,
    },
    animate: { opacity: motionTokens.reveal.opacity.final, y: 0 },
    transition: {
      duration: reducedMotion ? 0 : duration,
      ease: motionTokens.ease.gentle,
      delay: reducedMotion ? 0 : delay,
    },
  } as const;
}

export function staggerChildren(gap?: number): ReturnType<typeof createStaggerChildren>;
export function staggerChildren(options?: StaggerOptions): ReturnType<typeof createStaggerChildren>;
export function staggerChildren(input: number | StaggerOptions = {}) {
  const options = typeof input === "number" ? { gap: input } : input;
  return createStaggerChildren(options);
}

function createStaggerChildren(options: StaggerOptions = {}) {
  const {
    gap = motionTokens.stagger.base,
    delayChildren = motionTokens.stagger.delay,
    reducedMotion = false,
  } = options;

  return {
    animate: {
      transition: {
        staggerChildren: reducedMotion ? 0 : gap,
        delayChildren: reducedMotion ? 0 : delayChildren,
      },
    },
  } as const;
}

export function getButtonFeedback(prefersReducedMotion: boolean, disabled = false) {
  if (prefersReducedMotion || disabled) {
    return {
      rest: { y: 0, scale: 1 },
      hover: { y: 0, scale: 1 },
      press: { y: 0, scale: 1 },
      transition: { duration: 0 },
    } as const;
  }

  return {
    rest: { y: 0, scale: 1 },
    hover: {
      y: motionTokens.interaction.button.lift,
      scale: motionTokens.interaction.button.hoverScale,
    },
    press: {
      y: motionTokens.interaction.button.pressOffset,
      scale: motionTokens.interaction.button.pressScale,
    },
    transition: motionTokens.interaction.button.spring,
  } as const;
}

export function getCardHoverFeedback(prefersReducedMotion: boolean, interactive = true) {
  if (prefersReducedMotion || !interactive) {
    return {
      rest: { y: 0, scale: 1 },
      hover: { y: 0, scale: 1 },
      press: { y: 0, scale: 1 },
      transition: { duration: 0 },
    } as const;
  }

  return {
    rest: { y: 0, scale: 1 },
    hover: {
      y: motionTokens.interaction.card.lift,
      scale: motionTokens.interaction.card.hoverScale,
    },
    press: { y: 0, scale: 1 },
    transition: motionTokens.interaction.card.spring,
  } as const;
}
