"use client";

import { useEffect, useRef } from "react";

// ─── Interactive element detection ───────────────────────────────────
const INTERACTIVE_SELECTORS = [
  "a[href]",
  "button",
  'input:not([type="hidden"])',
  "textarea",
  "select",
  "[role=\"button\"]",
  "[tabindex]",
  "[data-cursor=\"interactive\"]",
  "label[for]",
  "label[htmlFor]",
].join(",");

function isInteractiveElement(el: Element | null): boolean {
  if (!el) return false;
  return el.matches(INTERACTIVE_SELECTORS) || !!el.closest(INTERACTIVE_SELECTORS);
}

function getAccentColor(el: Element | null): string | null {
  if (!el) return null;
  const card = el.closest("[data-cursor-accent]");
  if (card) return card.getAttribute("data-cursor-accent");
  return null;
}

// ─── Component ───────────────────────────────────────────────────────
export default function CustomCursor() {
  const coreRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ─── Capability check ──────────────────────────────────────
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasPointer || !hasHover) return;

    // ─── Reduced motion check ──────────────────────────────────
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    motionQuery.addEventListener("change", onMotionChange);

    // ─── Fast Mutable State ─────────────────────────────────────
    let mouseX = -100;
    let mouseY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let accentColor: string | null = null;
    let rafId = 0;

    // ─── Hide default cursor ──────────────────────────────────
    document.documentElement.classList.add("custom-cursor-active");
    document.body.classList.add("custom-cursor-active");

    // ─── Animation loop (RAF) ─────────────────────────────────
    function tick() {
      const core = coreRef.current;
      const wrapper = wrapperRef.current;

      if (!core || !wrapper) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      let coreScale = 1;
      if (isHovering && !prefersReducedMotion) coreScale = 1.15;
      if (isClicking) coreScale = 0.88;

      // Direct transform update — zero lag, instantaneous 1:1 mouse tracking
      core.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${coreScale})`;
      wrapper.style.opacity = isVisible ? "1" : "0";

      // Mouse SVG glow states
      const svgBody = core.querySelector(".cursor-mouse-body") as HTMLElement | null;
      const svgGlow = core.querySelector(".cursor-mouse-glow") as HTMLElement | null;
      if (svgBody) {
        if (isClicking) {
          svgBody.style.stroke = accentColor || "rgba(6, 182, 212, 1)";
          svgBody.style.filter = `drop-shadow(0 0 6px ${accentColor || "rgba(6, 182, 212, 0.7)"})`;
        } else if (isHovering) {
          svgBody.style.stroke = accentColor || "rgba(6, 182, 212, 0.9)";
          svgBody.style.filter = `drop-shadow(0 0 4px ${accentColor || "rgba(6, 182, 212, 0.6)"})`;
        } else {
          svgBody.style.stroke = "rgba(6, 182, 212, 0.65)";
          svgBody.style.filter = "drop-shadow(0 0 3px rgba(6, 182, 212, 0.35))";
        }
      }
      if (svgGlow) {
        svgGlow.style.opacity = isClicking ? "1" : isHovering ? "0.9" : "0.6";
      }

      rafId = requestAnimationFrame(tick);
    }

    // ─── Pointer move (Ultra lightweight) ───────────────────────
    const onMouseMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) isVisible = true;

      const target = e.target as Element | null;
      isHovering = isInteractiveElement(target);
      accentColor = getAccentColor(target);
    };

    const onMouseDown = () => { isClicking = true; };
    const onMouseUp = () => { isClicking = false; };
    const onMouseLeave = () => { isVisible = false; };
    const onMouseEnter = () => { isVisible = true; };

    document.addEventListener("pointermove", onMouseMove, { passive: true });
    document.addEventListener("pointerdown", onMouseDown, { passive: true });
    document.addEventListener("pointerup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onMouseLeave, { passive: true });
    document.documentElement.addEventListener("pointerenter", onMouseEnter, { passive: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("custom-cursor-active");
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("pointermove", onMouseMove);
      document.removeEventListener("pointerdown", onMouseDown);
      document.removeEventListener("pointerup", onMouseUp);
      document.documentElement.removeEventListener("pointerleave", onMouseLeave);
      document.documentElement.removeEventListener("pointerenter", onMouseEnter);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="custom-cursor-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 99999,
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 0.2s ease",
      }}
    >
      {/* Tiny Futuristic Mouse Silhouette */}
      <div
        ref={coreRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "14px",
          height: "20px",
          willChange: "transform",
        }}
      >
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "visible" }}
        >
          <rect
            className="cursor-mouse-body"
            x="1"
            y="1"
            width="12"
            height="18"
            rx="6"
            ry="6"
            fill="rgba(2, 6, 23, 0.85)"
            stroke="rgba(6, 182, 212, 0.65)"
            strokeWidth="1"
            style={{
              filter: "drop-shadow(0 0 3px rgba(6, 182, 212, 0.35))",
              transition: "stroke 0.2s ease, filter 0.2s ease",
            }}
          />
          <line x1="7" y1="2" x2="7" y2="8" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5" />
          <rect x="5.5" y="4" width="3" height="3.5" rx="1.5" fill="none" stroke="rgba(6, 182, 212, 0.45)" strokeWidth="0.6" />
          <circle
            className="cursor-mouse-glow"
            cx="7"
            cy="5.75"
            r="0.7"
            fill="#06B6D4"
            style={{ opacity: 0.6, transition: "opacity 0.2s ease" }}
          />
          <path d="M4 15 Q7 17 10 15" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
    </div>
  );
}
