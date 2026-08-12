import * as THREE from "three";
import { HeroScene, SectionParams } from "./HeroScene";
import { ParticleField } from "./ParticleField";
import { FloatingObjects } from "./FloatingObjects";

interface SectionConfig extends SectionParams {
  id: string;
  scroll: number;
}

export class ScrollController {
  private currentScroll: number = 0;
  private targetScroll: number = 0;

  // Dynamic Section Keyframes (Hero → Services → Products → Technologies → Process → Why Us → Testimonials → CTA → Footer)
  private sectionConfigs: SectionConfig[] = [
    {
      id: "hero",
      scroll: 0.0,
      waveX: 1.45,
      waveY: 0.05,
      waveZ: -0.4,
      scale: 0.95,
      waveOpacity: 0.75,
      lineOpacity: 0.2,
      aiOpacity: 0.75,
      aiLineOpacity: 0.28,
      speed: 0.28,
      gridStructureFactor: 0.0,
    },
    {
      id: "services",
      scroll: 0.12,
      waveX: 1.65,
      waveY: 0.1,
      waveZ: -0.5,
      scale: 0.9,
      waveOpacity: 0.65,
      lineOpacity: 0.16,
      aiOpacity: 0.65,
      aiLineOpacity: 0.22,
      speed: 0.22,
      gridStructureFactor: 0.15,
    },
    {
      id: "products",
      scroll: 0.25,
      waveX: 1.35,
      waveY: -0.05,
      waveZ: -0.5,
      scale: 0.92,
      waveOpacity: 0.6,
      lineOpacity: 0.16,
      aiOpacity: 0.6,
      aiLineOpacity: 0.2,
      speed: 0.25,
      gridStructureFactor: 0.25,
    },
    {
      id: "process",
      scroll: 0.45,
      waveX: 1.1,
      waveY: 0.12,
      waveZ: -0.4,
      scale: 0.92,
      waveOpacity: 0.5,
      lineOpacity: 0.12,
      aiOpacity: 0.5,
      aiLineOpacity: 0.14,
      speed: 0.32,
      gridStructureFactor: 0.35,
    },
    {
      id: "about",
      scroll: 0.68,
      waveX: 1.45,
      waveY: -0.08,
      waveZ: -0.6,
      scale: 0.88,
      waveOpacity: 0.55,
      lineOpacity: 0.14,
      aiOpacity: 0.55,
      aiLineOpacity: 0.16,
      speed: 0.22,
      gridStructureFactor: 0.1,
    },
    {
      id: "testimonials",
      scroll: 0.78,
      waveX: 1.5,
      waveY: -0.05,
      waveZ: -0.65,
      scale: 0.85,
      waveOpacity: 0.48,
      lineOpacity: 0.12,
      aiOpacity: 0.48,
      aiLineOpacity: 0.14,
      speed: 0.18,
      gridStructureFactor: 0.05,
    },
    {
      id: "contact",
      scroll: 0.9,
      waveX: 1.35,
      waveY: 0.05,
      waveZ: -0.4,
      scale: 0.95,
      waveOpacity: 0.72,
      lineOpacity: 0.2,
      aiOpacity: 0.72,
      aiLineOpacity: 0.24,
      speed: 0.32,
      gridStructureFactor: 0.2,
    },
    {
      id: "footer",
      scroll: 1.0,
      waveX: 1.45,
      waveY: 0.0,
      waveZ: -0.8,
      scale: 0.8,
      waveOpacity: 0.28,
      lineOpacity: 0.08,
      aiOpacity: 0.25,
      aiLineOpacity: 0.08,
      speed: 0.15,
      gridStructureFactor: 0.0,
    },
  ];

  constructor() {
    this.bindScroll();
    this.recalculateSectionPositions();
  }

  private bindScroll() {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        this.targetScroll = Math.min(1.0, Math.max(0.0, window.scrollY / maxScroll));
      }
    };

    const handleResize = () => {
      this.recalculateSectionPositions();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleScroll();
  }

  public recalculateSectionPositions() {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    this.sectionConfigs.forEach((config) => {
      if (config.id === "hero") {
        config.scroll = 0.0;
        return;
      }
      if (config.id === "footer") {
        config.scroll = 1.0;
        return;
      }

      const el = document.getElementById(config.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const center = top + rect.height / 2 - window.innerHeight / 2;
        config.scroll = Math.min(0.98, Math.max(0.02, center / maxScroll));
      }
    });

    // Ensure sorted order
    this.sectionConfigs.sort((a, b) => a.scroll - b.scroll);
    this.sectionConfigs[0].scroll = 0.0;
    this.sectionConfigs[this.sectionConfigs.length - 1].scroll = 1.0;
  }

  public update(
    camera: THREE.PerspectiveCamera,
    heroScene: HeroScene,
    particleField: ParticleField,
    floatingObjects: FloatingObjects,
    mouse: { x: number; y: number },
    reducedMotion: boolean = false
  ) {
    // Smooth lerp for scroll progress
    this.currentScroll += (this.targetScroll - this.currentScroll) * 0.08;
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (!reducedMotion) {
      // 1. Mouse parallax in fixed viewport coordinates
      const parallaxFactor = width < 768 ? 0.12 : 0.35;
      const parallaxX = mouse.x * parallaxFactor;
      const parallaxY = mouse.y * (parallaxFactor * 0.7);

      // Keep camera anchored in fixed viewport space so wave NEVER leaves the screen
      camera.position.x = parallaxX;
      camera.position.y = parallaxY;
      camera.position.z = 7;
      camera.lookAt(0, 0, 0);

      // 2. Interpolate section parameters seamlessly & apply responsive mobile scaling/positioning
      const interpolatedParams = this.interpolateKeyframes(this.currentScroll);
      const responsiveParams = this.getResponsiveParams(interpolatedParams, width);
      heroScene.setSectionInterpolation(responsiveParams);
    }
  }

  private getResponsiveParams(params: SectionParams, width: number): SectionParams {
    if (width >= 1024) {
      // Desktop: Preserved 100% exact baseline design parameters
      return params;
    }

    if (width >= 768) {
      // Tablet (768px - 1023px)
      return {
        ...params,
        waveX: params.waveX * 0.48,
        waveY: params.waveY,
        scale: params.scale * 0.72,
        waveOpacity: Math.min(0.65, params.waveOpacity * 0.85),
        aiOpacity: Math.min(0.55, params.aiOpacity * 0.75),
        aiLineOpacity: Math.min(0.2, params.aiLineOpacity * 0.75),
      };
    }

    if (width >= 375) {
      // Standard Mobile (375px - 767px): Top-right wave entry + subtle centered network
      return {
        ...params,
        waveX: params.waveX * 0.3,
        waveY: params.waveY + 0.12,
        waveZ: params.waveZ - 0.15,
        scale: params.scale * 0.58,
        waveOpacity: Math.min(0.5, params.waveOpacity * 0.68),
        lineOpacity: Math.min(0.14, params.lineOpacity * 0.7),
        aiOpacity: Math.min(0.42, params.aiOpacity * 0.58),
        aiLineOpacity: Math.min(0.15, params.aiLineOpacity * 0.55),
      };
    }

    // Very Narrow Mobile (< 375px down to 320px): Fit inside narrow 320px viewport
    return {
      ...params,
      waveX: params.waveX * 0.22,
      waveY: params.waveY + 0.08,
      waveZ: params.waveZ - 0.2,
      scale: params.scale * 0.48,
      waveOpacity: Math.min(0.45, params.waveOpacity * 0.6),
      lineOpacity: Math.min(0.12, params.lineOpacity * 0.6),
      aiOpacity: Math.min(0.38, params.aiOpacity * 0.5),
      aiLineOpacity: Math.min(0.12, params.aiLineOpacity * 0.5),
    };
  }

  private interpolateKeyframes(scroll: number): SectionParams {
    let k1 = this.sectionConfigs[0];
    let k2 = this.sectionConfigs[this.sectionConfigs.length - 1];

    for (let i = 0; i < this.sectionConfigs.length - 1; i++) {
      if (scroll >= this.sectionConfigs[i].scroll && scroll <= this.sectionConfigs[i + 1].scroll) {
        k1 = this.sectionConfigs[i];
        k2 = this.sectionConfigs[i + 1];
        break;
      }
    }

    const range = k2.scroll - k1.scroll;
    const factor = range > 0 ? (scroll - k1.scroll) / range : 0;
    // Smooth step easing
    const t = factor * factor * (3 - 2 * factor);

    return {
      waveX: THREE.MathUtils.lerp(k1.waveX, k2.waveX, t),
      waveY: THREE.MathUtils.lerp(k1.waveY, k2.waveY, t),
      waveZ: THREE.MathUtils.lerp(k1.waveZ, k2.waveZ, t),
      scale: THREE.MathUtils.lerp(k1.scale, k2.scale, t),
      waveOpacity: THREE.MathUtils.lerp(k1.waveOpacity, k2.waveOpacity, t),
      lineOpacity: THREE.MathUtils.lerp(k1.lineOpacity, k2.lineOpacity, t),
      aiOpacity: THREE.MathUtils.lerp(k1.aiOpacity, k2.aiOpacity, t),
      aiLineOpacity: THREE.MathUtils.lerp(k1.aiLineOpacity, k2.aiLineOpacity, t),
      speed: THREE.MathUtils.lerp(k1.speed, k2.speed, t),
      gridStructureFactor: THREE.MathUtils.lerp(k1.gridStructureFactor, k2.gridStructureFactor, t),
    };
  }

  public getScrollProgress(): number {
    return this.currentScroll;
  }
}
