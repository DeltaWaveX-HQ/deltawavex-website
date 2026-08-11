"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { HeroScene } from "./HeroScene";
import { ParticleField } from "./ParticleField";
import { FloatingObjects } from "./FloatingObjects";
import { ScrollController } from "./ScrollController";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Check device capabilities & reduced motion preference
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    // Dark deep navy/black atmospheric background mist
    scene.fog = new THREE.FogExp2(0x020617, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 7);

    // 2. Renderer Setup with Adaptive DPR
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });

    const maxDPR = isMobile ? 1.5 : Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(maxDPR);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 3. Initialize 3D Visual Modules
    const heroScene = new HeroScene(isMobile);
    scene.add(heroScene.group);

    const particleField = new ParticleField(isMobile);
    scene.add(particleField.points);

    const floatingObjects = new FloatingObjects(isMobile);
    scene.add(floatingObjects.group);

    const scrollController = new ScrollController();

    // 4. Mouse / Pointer Parallax State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 5. Responsive Resize Handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      heroScene.updatePosition(width);
    };
    window.addEventListener("resize", handleResize);

    // 6. Tab Visibility Auto-Pause (Saves GPU/Battery)
    let animationFrameId: number;
    let isPaused = false;

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 7. Render Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isPaused) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Damped mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update 3D scene modules
      heroScene.setMousePosition(mouse.x, mouse.y);
      heroScene.update(time, delta, prefersReducedMotion);
      particleField.update(time, scrollController.getScrollProgress(), prefersReducedMotion);
      floatingObjects.update(time, scrollController.getScrollProgress(), prefersReducedMotion);
      scrollController.update(camera, heroScene, particleField, floatingObjects, mouse, prefersReducedMotion);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Clean Resource Disposal on Component Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      heroScene.dispose();
      particleField.dispose();
      floatingObjects.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
