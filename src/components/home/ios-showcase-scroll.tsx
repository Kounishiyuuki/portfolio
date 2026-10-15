"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  IosShowcaseCopy,
  IosShowcaseIntro,
  IosShowcaseScreen,
  IosShowcaseStatic,
  iosShowcaseProjects,
  type IosShowcaseProject,
} from "@/components/home/ios-showcase-static";

const [firstProject, secondProject] = iosShowcaseProjects;

// The phone turns its back to the viewer around the midpoint, which is where the screen swaps.
const turnStops = [0, 0.3, 0.5, 0.7, 1];
const turnDegrees = [-28, -8, 180, 352, 368];

export function IosShowcaseScroll() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion || !firstProject || !secondProject) {
    return <IosShowcaseStatic />;
  }

  return <AnimatedShowcase first={firstProject} second={secondProject} />;
}

function AnimatedShowcase({ first, second }: { first: IosShowcaseProject; second: IosShowcaseProject }) {
  const isCompact = useIsCompactViewport();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // A spring on the raw progress keeps wheel steps smooth and rewinds naturally on scroll up.
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.35 });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ios-showcase-title"
      className="relative h-[220vh] md:h-[280vh]"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center gap-6 pb-6 pt-[5.5rem] md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:gap-10 md:py-0">
        <div className="space-y-6 md:space-y-10">
          <IosShowcaseIntro id="ios-showcase-title" />
          <div className="relative min-h-[11rem] md:min-h-[14rem]">
            <ShowcaseStep progress={progress} range={[0.42, 0.53]} direction="out">
              <IosShowcaseCopy project={first} />
            </ShowcaseStep>
            <ShowcaseStep progress={progress} range={[0.47, 0.58]} direction="in">
              <IosShowcaseCopy project={second} />
            </ShowcaseStep>
          </div>
        </div>

        <div className="order-first flex justify-center md:order-none" aria-hidden="true">
          <PhoneModel progress={progress} compact={isCompact} first={first} second={second} />
        </div>
      </div>
    </section>
  );
}

function ShowcaseStep({
  progress,
  range,
  direction,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  direction: "in" | "out";
  children: ReactNode;
}) {
  const opacity = useTransform(progress, range, direction === "in" ? [0, 1] : [1, 0]);
  // The two ranges overlap around the midpoint so the copy crossfades instead of leaving a gap.
  const y = useTransform(progress, range, direction === "in" ? [12, 0] : [0, -12]);
  // Hidden copy must not be read out or receive pointer events while it is faded away.
  const visibility = useTransform(opacity, (value) => (value < 0.05 ? "hidden" : "visible"));
  // Blurring the fading copy keeps the brief overlap from reading as doubled text.
  const blur = useTransform(opacity, [0, 1], [6, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div className="absolute inset-x-0 top-0" style={{ opacity, y, visibility, filter }}>
      {children}
    </motion.div>
  );
}

function PhoneModel({
  progress,
  compact,
  first,
  second,
}: {
  progress: MotionValue<number>;
  compact: boolean;
  first: IosShowcaseProject;
  second: IosShowcaseProject;
}) {
  const motionScale = compact ? 0.55 : 1;
  const rotateY = useTransform(progress, turnStops, turnDegrees);
  const rotateX = useTransform(progress, [0, 1], [12 * motionScale, -6 * motionScale]);
  const rotateZ = useTransform(progress, [0, 0.5, 1], [-4 * motionScale, 0, 3 * motionScale]);
  const y = useTransform(progress, [0, 1], [70 * motionScale, -50 * motionScale]);
  const x = useTransform(progress, [0, 0.5, 1], [-24 * motionScale, 0, 24 * motionScale]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.88, 1, 0.94]);
  const firstScreen = useTransform(progress, [0.495, 0.505], [1, 0]);
  const secondScreen = useTransform(progress, [0.495, 0.505], [0, 1]);
  const shadowSpread = useTransform(progress, [0, 0.5, 1], [0.18, 0.1, 0.16]);
  const shadow = useMotionTemplate`0 40px 80px rgba(0,0,0,${shadowSpread})`;

  return (
    <div className="[perspective:1600px]">
      <motion.div
        className="relative aspect-[640/1390] w-[var(--phone-w)] [--phone-depth:11px] [--phone-w:min(40vw,11rem,18svh)] [@media(max-height:700px)]:[--phone-w:min(40vw,11rem,15svh)] [transform-style:preserve-3d] md:[--phone-w:16rem] lg:[--phone-w:17.5rem] [will-change:transform]"
        style={{ rotateX, rotateY, rotateZ, x, y, scale }}
      >
        {/* Front: bezel + real screen captures */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-[13%/6%] border-[6px] border-neutral-900 bg-neutral-900 [backface-visibility:hidden] [transform:translateZ(calc(var(--phone-depth)/2))]"
          style={{ boxShadow: shadow }}
        >
          <motion.div className="absolute inset-0 overflow-hidden rounded-[11%/5%]" style={{ opacity: firstScreen }}>
            <IosShowcaseScreen project={first} />
          </motion.div>
          <motion.div className="absolute inset-0 overflow-hidden rounded-[11%/5%]" style={{ opacity: secondScreen }}>
            <IosShowcaseScreen project={second} />
          </motion.div>
          <div className="absolute left-1/2 top-[1.6%] h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-neutral-950" />
        </motion.div>

        {/* Back */}
        <div className="absolute inset-0 rounded-[13%/6%] bg-[linear-gradient(150deg,#e9e9ec,#c9c9ce)] [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(calc(var(--phone-depth)/2))]">
          <div className="absolute left-[8%] top-[4%] grid aspect-square w-[36%] grid-cols-2 content-start gap-[8%] rounded-[22%] bg-[#d6d6da] p-[7%] shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)]">
            <span className="aspect-square rounded-full bg-neutral-800" />
            <span className="aspect-square rounded-full bg-neutral-800" />
            <span className="aspect-square rounded-full bg-neutral-800" />
          </div>
        </div>

        {/* Edges give the body visible thickness while it turns */}
        <div className="absolute inset-y-[5%] left-1/2 w-[var(--phone-depth)] -translate-x-1/2 bg-[#b9b9bf] [transform:rotateY(90deg)_translateZ(calc(var(--phone-w)/2))]" />
        <div className="absolute inset-y-[5%] left-1/2 w-[var(--phone-depth)] -translate-x-1/2 bg-[#b9b9bf] [transform:rotateY(-90deg)_translateZ(calc(var(--phone-w)/2))]" />
      </motion.div>
    </div>
  );
}

function useIsCompactViewport() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isCompact;
}
