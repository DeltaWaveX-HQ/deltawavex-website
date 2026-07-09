"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Code2, Smartphone, Brain, Layers } from "lucide-react";
import { useEffect, useRef } from "react";

const techItems = [
  "React Native", "Next.js", "Flutter", "Node.js", "Python", "TensorFlow",
  "AWS", "Firebase", "PostgreSQL", "MongoDB", "Docker", "Kubernetes",
  "OpenAI", "Stripe", "GraphQL", "TypeScript", "Prisma", "Redis",
];

const serviceHighlights = [
  { icon: Code2, label: "Custom Software" },
  { icon: Smartphone, label: "Mobile & Web Apps" },
  { icon: Brain, label: "AI-Powered Solutions" },
  { icon: Layers, label: "End-to-End Development" },
];

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    let effect: any = null;

    Promise.all([
      import("three"),
      import("@/lib/vanta-net")
    ]).then(([THREE, vantaNet]) => {
      if (isMounted && vantaRef.current) {
        const vantaInit = (vantaNet.default || vantaNet) as any;
        effect = vantaInit({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x06b6d4,          // theme secondary cyan color for high contrast tech look
          backgroundColor: 0x020617, // slate-950 background
          backgroundAlpha: 0.0,      // transparent to overlay on gradient
          points: 12,
          maxDistance: 22.00,
          spacing: 16.00,
          showDots: true,
        });
      }
    }).catch((err) => {
      console.error("Vanta Net loading error:", err);
    });

    return () => {
      isMounted = false;
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* ======================== BACKGROUND ======================== */}

      {/* Base gradient — centered behind headline */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 45%, rgba(37, 99, 235, 0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 55% 40%, rgba(139, 92, 246, 0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 45% 55%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Vanta Canvas Container */}
      <div ref={vantaRef} className="absolute inset-0 opacity-50 pointer-events-none" />

      {/* Aurora — soft animated gradient sweep */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(37, 99, 235, 0.08), transparent, rgba(139, 92, 246, 0.06), transparent, rgba(6, 182, 212, 0.06), transparent, rgba(37, 99, 235, 0.08))",
        }}
      />

      {/* Headline glow — focused blue-purple glow behind text */}
      <motion.div
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.18) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
        }}
      />

      {/* Slow breathing orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -top-20 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)" }}
      />

      {/* Subtle grid floor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[50%]">
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "-30%",
              right: "-30%",
              height: "100%",
              backgroundImage: `
                linear-gradient(rgba(37, 99, 235, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37, 99, 235, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              transform: "perspective(500px) rotateX(73deg)",
              transformOrigin: "center bottom",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 40%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Floating particles */}
      {[
        { x: "12%", y: "22%", size: 2, color: "rgba(96, 165, 250, 0.5)", delay: 0 },
        { x: "88%", y: "28%", size: 2, color: "rgba(192, 132, 252, 0.45)", delay: 1.2 },
        { x: "8%", y: "68%", size: 1.5, color: "rgba(6, 182, 212, 0.4)", delay: 2.4 },
        { x: "92%", y: "62%", size: 2, color: "rgba(96, 165, 250, 0.35)", delay: 0.6 },
        { x: "25%", y: "12%", size: 1.5, color: "rgba(192, 132, 252, 0.35)", delay: 1.8 },
        { x: "75%", y: "15%", size: 1.5, color: "rgba(37, 99, 235, 0.4)", delay: 3 },
        { x: "35%", y: "78%", size: 1.5, color: "rgba(6, 182, 212, 0.3)", delay: 2 },
        { x: "65%", y: "82%", size: 2, color: "rgba(96, 165, 250, 0.3)", delay: 0.8 },
        { x: "50%", y: "8%", size: 1.5, color: "rgba(139, 92, 246, 0.35)", delay: 1.5 },
        { x: "18%", y: "45%", size: 1.5, color: "rgba(6, 182, 212, 0.3)", delay: 3.5 },
        { x: "82%", y: "48%", size: 1.5, color: "rgba(139, 92, 246, 0.3)", delay: 2.8 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 4 + dot.delay, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            boxShadow: `0 0 ${dot.size * 6}px ${dot.color}`,
          }}
        />
      ))}

      {/* ======================== MAIN CONTENT ======================== */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-8 text-center pt-40 pb-56">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-14"
          style={{
            background: "rgba(37, 99, 235, 0.08)",
            border: "1px solid rgba(37, 99, 235, 0.25)",
            boxShadow:
              "0 0 25px rgba(37, 99, 235, 0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-blue-300 text-sm font-semibold tracking-wide">
            Premium Technology Studio
          </span>
          <div className="relative flex h-2 w-2">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50" />
            <div className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
          </div>
        </motion.div>

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-tight text-white leading-[1.08] mb-10">
            We Build{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #60A5FA 0%, #22D3EE 35%, #818CF8 65%, #C084FC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Software
            </span>
            <br />
            <span className="text-white">That Grows </span>
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 45%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Businesses
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-[680px] mx-auto leading-relaxed mb-16"
        >
          We design and develop high-performance mobile apps, web platforms,
          AI-powered solutions, and scalable SaaS products that help businesses
          launch faster and grow smarter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#contact"
            id="hero-start-project"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold text-base relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #8B5CF6 100%)",
              boxShadow:
                "0 0 30px rgba(37, 99, 235, 0.5), 0 0 80px rgba(37, 99, 235, 0.2), 0 8px 40px rgba(0,0,0,0.4)",
            }}
          >
            {/* Shimmer on button */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              className="absolute inset-y-0 w-1/3 skew-x-12"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
            />
            <span className="relative">Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4 relative" />
          </motion.a>

          <motion.a
            href="#products"
            id="hero-explore-work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <Play className="w-4 h-4" />
            Explore Our Work
          </motion.a>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {serviceHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-blue-400/80" />
                <span className="text-slate-400 text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ======================== TECH MARQUEE ======================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-16 left-0 right-0 overflow-hidden z-10"
      >
        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center text-slate-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5"
        >
          Technologies We Build With
        </motion.p>

        <div
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Divider lines */}
          <div className="w-full h-px mb-4" style={{ background: "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.25), transparent)" }} />
          <div className="flex" style={{ width: "max-content" }}>
            <div className="flex items-center animate-marquee whitespace-nowrap">
              {[...techItems, ...techItems].map((item, i) => (
                <div key={i} className="flex items-center gap-10 shrink-0 mr-10">
                  <span className="text-slate-500 text-xs font-semibold tracking-[0.15em] uppercase">
                    {item}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-px mt-4" style={{ background: "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.25), transparent)" }} />
        </div>

        {/* Trust statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center text-slate-600 text-[13px] font-medium mt-5"
        >
          Helping startups and businesses build scalable digital products.
        </motion.p>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-2.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.4)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
