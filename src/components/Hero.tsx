"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const floatingCards = [
  {
    id: 1,
    title: "Mobile App",
    subtitle: "Flutter & React Native",
    icon: "📱",
    stat: "4.9★",
    statLabel: "App Store",
    bg: "rgba(37, 99, 235, 0.12)",
    border: "rgba(37, 99, 235, 0.35)",
    glow: "0 0 30px rgba(37, 99, 235, 0.3), 0 0 60px rgba(37, 99, 235, 0.12), 0 20px 40px rgba(0,0,0,0.4)",
    position: "top-[16%] left-[4%]",
    delay: 0,
  },
  {
    id: 2,
    title: "AI Solutions",
    subtitle: "OpenAI & TensorFlow",
    icon: "🤖",
    stat: "99%",
    statLabel: "Accuracy",
    bg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.35)",
    glow: "0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.12), 0 20px 40px rgba(0,0,0,0.4)",
    position: "top-[16%] right-[4%]",
    delay: 0.6,
  },
  {
    id: 3,
    title: "SaaS Platform",
    subtitle: "Scalable & Secure",
    icon: "⚡",
    stat: "99.9%",
    statLabel: "Uptime",
    bg: "rgba(6, 182, 212, 0.12)",
    border: "rgba(6, 182, 212, 0.35)",
    glow: "0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.12), 0 20px 40px rgba(0,0,0,0.4)",
    position: "bottom-[26%] left-[3%]",
    delay: 1.2,
  },
  {
    id: 4,
    title: "Cloud Native",
    subtitle: "AWS & Firebase",
    icon: "☁️",
    stat: "<2s",
    statLabel: "Load Time",
    bg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.35)",
    glow: "0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.12), 0 20px 40px rgba(0,0,0,0.4)",
    position: "bottom-[26%] right-[3%]",
    delay: 1.8,
  },
];

const techItems = [
  "React Native", "Next.js", "Flutter", "Node.js", "Python", "TensorFlow",
  "AWS", "Firebase", "PostgreSQL", "MongoDB", "Docker", "Kubernetes",
  "OpenAI", "Stripe", "GraphQL", "TypeScript", "Prisma", "Redis",
];

function FloatingCard({ card }: { card: (typeof floatingCards)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: card.delay + 0.6, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`absolute ${card.position} hidden xl:block z-20`}
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{
          duration: 5 + card.delay * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay * 0.3,
        }}
      >
        <div
          className="relative rounded-2xl p-5 w-52 overflow-hidden"
          style={{
            background: card.bg,
            border: `1px solid ${card.border}`,
            boxShadow: card.glow,
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
          }}
        >
          {/* Top highlight line */}
          <div
            className="absolute top-0 left-4 right-4 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${card.border}, transparent)` }}
          />
          {/* Inner gradient highlight */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            <div className="text-3xl mb-3 drop-shadow-sm">{card.icon}</div>
            <div className="text-white font-bold text-sm mb-0.5">{card.title}</div>
            <div className="text-slate-400 text-xs mb-4">{card.subtitle}</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div
                    className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 opacity-60"
                    style={{ animation: "pulse-ring 2s ease-out infinite" }}
                  />
                </div>
                <span className="text-emerald-400 text-xs font-semibold">Live</span>
              </div>
              <div className="text-right">
                <div className="text-white font-black text-sm">{card.stat}</div>
                <div className="text-slate-500 text-[10px] mt-0.5">{card.statLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* ======================== BACKGROUND ======================== */}

      {/* Multi-color gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(37, 99, 235, 0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 10%, rgba(139, 92, 246, 0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 50% 90%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Large animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-80 -left-80 w-[1100px] h-[1100px] rounded-full blur-[180px]"
        style={{ background: "rgba(37, 99, 235, 0.2)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -top-60 -right-80 w-[900px] h-[900px] rounded-full blur-[160px]"
        style={{ background: "rgba(139, 92, 246, 0.2)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute -bottom-80 left-1/4 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{ background: "rgba(6, 182, 212, 0.15)" }}
      />

      {/* === 3D PERSPECTIVE GRID FLOOR === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[60%]">
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "-30%",
              right: "-30%",
              height: "100%",
              backgroundImage: `
                linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
              transform: "perspective(500px) rotateX(73deg)",
              transformOrigin: "center bottom",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
            }}
          />
          {/* Grid center glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] blur-3xl"
            style={{ background: "rgba(37, 99, 235, 0.08)" }}
          />
        </div>
      </div>

      {/* Scattered bright dots */}
      {[
        { x: "15%", y: "25%", size: 3, color: "rgba(96, 165, 250, 0.6)", delay: 0 },
        { x: "85%", y: "30%", size: 2, color: "rgba(192, 132, 252, 0.6)", delay: 1 },
        { x: "10%", y: "65%", size: 2, color: "rgba(6, 182, 212, 0.5)", delay: 2 },
        { x: "90%", y: "60%", size: 3, color: "rgba(96, 165, 250, 0.5)", delay: 0.5 },
        { x: "50%", y: "15%", size: 2, color: "rgba(192, 132, 252, 0.4)", delay: 1.5 },
        { x: "30%", y: "80%", size: 2, color: "rgba(6, 182, 212, 0.4)", delay: 2.5 },
        { x: "72%", y: "75%", size: 2, color: "rgba(96, 165, 250, 0.4)", delay: 0.8 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3 + dot.delay, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            boxShadow: `0 0 ${dot.size * 4}px ${dot.color}`,
          }}
        />
      ))}

      {/* ======================== FLOATING CARDS ======================== */}
      {floatingCards.map((card) => (
        <FloatingCard key={card.id} card={card} />
      ))}

      {/* ======================== MAIN CONTENT ======================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-48">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8"
          style={{
            background: "rgba(37, 99, 235, 0.08)",
            border: "1px solid rgba(37, 99, 235, 0.3)",
            boxShadow:
              "0 0 30px rgba(37, 99, 235, 0.15), 0 0 60px rgba(37, 99, 235, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
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

        {/* HEADLINE — Massive & Bold */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[90px] font-black tracking-tight text-white leading-[1.02] mb-6">
            Building{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #60A5FA 0%, #22D3EE 35%, #818CF8 65%, #C084FC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Products
            </span>
            <br />
            <span className="text-white">That </span>
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 45%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Scale
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We transform ideas into powerful digital products — mobile apps, web
          platforms, AI solutions, and SaaS systems built for the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
            <span className="relative">Start Your Project</span>
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: 3, suffix: "+", label: "Products Built" },
            { value: 100, suffix: "%", label: "Custom Code" },
            { value: 10, suffix: "+", label: "Technologies" },
            { value: 24, suffix: "/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className="text-3xl sm:text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #06B6D4 50%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ======================== TECH MARQUEE ======================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-24 left-0 right-0 overflow-hidden z-10"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Divider lines */}
        <div className="w-full h-px mb-3" style={{ background: "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent)" }} />
        <div className="flex" style={{ width: "max-content" }}>
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap pr-8">
            {[...techItems, ...techItems].map((item, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="text-slate-600 text-[11px] font-semibold tracking-[0.15em] uppercase">
                  {item}
                </span>
                <div className="w-1 h-1 rounded-full bg-slate-700 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-px mt-3" style={{ background: "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent)" }} />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
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
