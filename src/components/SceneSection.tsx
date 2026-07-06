"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  isHero?: boolean;
  zIndex?: number;
}

/**
 * SceneSection — wraps any section with a 3D scroll-depth transition:
 *
 * • ENTERING: section rises from below + fades in
 * • EXITING:  section recedes into the screen (scale↓, rotateX↑, opacity→0)
 *
 * Gives the feel that sections are "layers in 3D space" rather than a flat scroll.
 */
export default function SceneSection({ children, isHero = false, zIndex = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Hero: only exit (starts visible, recedes as you scroll away)
  const { scrollYProgress: heroScroll } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Non-hero: full lifecycle — enter from below + exit receding
  const { scrollYProgress: fullScroll } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ─── Hero transforms (exit only) ────────────────────────────────────────────
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.88]);
  const heroOpacity = useTransform(heroScroll, [0, 0.55, 1], [1, 0.85, 0]);
  const heroRotateX = useTransform(heroScroll, [0, 1], ["0deg", "7deg"]);

  // ─── Section transforms (enter + exit) ──────────────────────────────────────
  // Enter: y 60→0, opacity 0→1  (0% → 10% of progress)
  // Rest:  everything at 1       (10% → 80% of progress)
  // Exit:  scale+rotateX+opacity  (80% → 100% of progress)
  const sectionScale = useTransform(fullScroll, [0, 0.1, 0.8, 1], [1, 1, 1, 0.88]);
  const sectionOpacity = useTransform(fullScroll, [0, 0.08, 0.8, 1], [0, 1, 1, 0]);
  const sectionRotateX = useTransform(fullScroll, [0.8, 1], ["0deg", "7deg"]);
  const sectionY = useTransform(fullScroll, [0, 0.1], [70, 0]);

  const scale = isHero ? heroScale : sectionScale;
  const opacity = isHero ? heroOpacity : sectionOpacity;
  const rotateX = isHero ? heroRotateX : sectionRotateX;
  const y = isHero ? 0 : sectionY;

  return (
    <div
      ref={ref}
      style={{
        perspective: "1600px",
        perspectiveOrigin: "50% 0%",
        position: "relative",
        zIndex,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          rotateX,
          y,
          transformOrigin: "50% 40%",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
