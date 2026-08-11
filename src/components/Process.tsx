"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Palette, Code2, FlaskConical, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We deep-dive into your business, goals, and target audience to understand the full picture.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    number: "02",
    title: "Planning",
    description: "Strategic roadmap, technical architecture, and sprint planning to set your project up for success.",
    icon: Map,
    color: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    number: "03",
    title: "Design",
    description: "Pixel-perfect UI/UX design with user testing, design systems, and interactive prototypes.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    number: "04",
    title: "Development",
    description: "Agile development with weekly demos, clean code, and continuous integration from day one.",
    icon: Code2,
    color: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous QA, performance testing, security audits, and cross-device compatibility checks.",
    icon: FlaskConical,
    color: "from-emerald-500 to-green-500",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    number: "06",
    title: "Launch",
    description: "Smooth production deployment with monitoring, alerts, and zero-downtime release strategies.",
    icon: Rocket,
    color: "from-rose-500 to-pink-500",
    glowColor: "rgba(244, 63, 94, 0.3)",
  },
  {
    number: "07",
    title: "Support",
    description: "24/7 post-launch support, ongoing maintenance, performance optimization, and feature growth.",
    icon: Headphones,
    color: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative mb-12 lg:mb-20">
      {/* Desktop Alternating Grid / Mobile Stack */}
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Left Side Content / Spacer */}
        <div
          className={`w-full lg:w-[calc(50%-40px)] pl-12 sm:pl-16 lg:pl-0 ${
            isLeft ? "lg:text-right lg:order-1" : "lg:order-3"
          }`}
        >
          {isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative bg-slate-900/60 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-md hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl hover:-translate-y-1"
              style={{
                boxShadow: `0 10px 30px -10px ${step.glowColor}`,
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-4 lg:flex-row-reverse">
                {/* Icon Container with subtle hover micro-scale */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  </div>
                </div>
                {/* Secondary Step Number */}
                <span className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-30 font-mono select-none`}>
                  {step.number}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg lg:text-xl mb-2 text-left lg:text-right">
                {step.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed text-left lg:text-right">
                {step.description}
              </p>
            </motion.div>
          ) : (
            /* Spacer for left column when card is on right */
            <div className="hidden lg:block" />
          )}
        </div>

        {/* Central Primary Step Timeline Node */}
        <div className="absolute left-0 top-3 lg:static lg:w-[80px] flex-shrink-0 flex items-center justify-center z-10 lg:order-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0.6 }}
            whileInView={{ scale: 1.08, opacity: 1, borderColor: "rgba(34, 211, 238, 0.9)" }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-slate-950 border-2 border-white/20 flex items-center justify-center shadow-lg transition-all duration-300"
            style={{
              boxShadow: `0 0 16px ${step.glowColor}`,
            }}
          >
            <span className="text-white text-xs font-bold font-mono">{step.number}</span>
          </motion.div>
        </div>

        {/* Right Side Content / Spacer */}
        <div
          className={`w-full lg:w-[calc(50%-40px)] pl-12 sm:pl-16 lg:pl-0 ${
            !isLeft ? "lg:text-left lg:order-3" : "lg:order-1"
          }`}
        >
          {!isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative bg-slate-900/60 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-md hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl hover:-translate-y-1"
              style={{
                boxShadow: `0 10px 30px -10px ${step.glowColor}`,
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                {/* Icon Container with subtle hover micro-scale */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  </div>
                </div>
                {/* Secondary Step Number */}
                <span className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-30 font-mono select-none`}>
                  {step.number}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg lg:text-xl mb-2 text-left">
                {step.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed text-left">
                {step.description}
              </p>
            </motion.div>
          ) : (
            /* Spacer for right column when card is on left */
            <div className="hidden lg:block" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic scroll-driven progress along the central timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  return (
    <section id="process" ref={containerRef} className="py-10 lg:py-14 bg-transparent relative overflow-hidden">
      {/* Subtle ambient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(15,23,42,0)_0%,rgba(2,6,23,0.25)_100%)] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center px-6 mb-16 lg:mb-24 relative z-10">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
          How We Work
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Our <span className="gradient-text">Development Process</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          A proven, transparent 7-step process taking your software vision from initial concept to high-performing production deployment.
        </p>
      </div>

      {/* 7-Step Process Timeline Container */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Base central vertical line on desktop */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 bottom-12 w-0.5 bg-slate-800/80" />

        {/* Scroll-illuminated central gradient line on desktop */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 bottom-12 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-emerald-400 origin-top z-0 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
        />

        {/* Traveling Technical Data Signal Pulse on desktop */}
        <motion.div
          animate={{ top: ["2%", "98%"], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)] z-10 pointer-events-none"
        />

        {/* Base vertical line on mobile */}
        <div className="lg:hidden absolute left-[19px] sm:left-[23px] top-6 bottom-12 w-0.5 bg-slate-800/80" />

        {/* Scroll-illuminated line on mobile */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="lg:hidden absolute left-[19px] sm:left-[23px] top-6 bottom-12 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-emerald-400 origin-top z-0 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
        />

        {/* All 7 steps in document flow */}
        <div className="relative">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
