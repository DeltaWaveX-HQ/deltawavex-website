"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Zap,
  TrendingUp,
  Brain,
  Package,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Startup Mindset",
    description:
      "Fast decisions, lean execution, and product-first thinking from idea to launch.",
    gradient: "from-blue-500 to-cyan-500",
    borderColor: "rgba(59, 130, 246, 0.35)",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description:
      "Agile delivery with short feedback cycles, continuous integration, and production-focused engineering.",
    gradient: "from-cyan-500 to-sky-500",
    borderColor: "rgba(6, 182, 212, 0.35)",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Architecture designed for reliable growth, from early-stage MVPs to high-volume production systems.",
    gradient: "from-emerald-500 to-teal-500",
    borderColor: "rgba(16, 185, 129, 0.35)",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: Brain,
    title: "AI-Powered Innovation",
    description:
      "Practical AI integration across automation, intelligent workflows, personalization, and decision systems.",
    gradient: "from-purple-500 to-violet-500",
    borderColor: "rgba(139, 92, 246, 0.35)",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    icon: Package,
    title: "End-to-End Delivery",
    description:
      "Strategy, UX, engineering, testing, deployment, and ongoing optimization under one team.",
    gradient: "from-rose-500 to-pink-500",
    borderColor: "rgba(244, 63, 94, 0.35)",
    glowColor: "rgba(244, 63, 94, 0.25)",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Continuous engineering support, product iteration, maintenance, and technical improvements beyond launch.",
    gradient: "from-violet-500 to-purple-500",
    borderColor: "rgba(124, 58, 237, 0.35)",
    glowColor: "rgba(124, 58, 237, 0.25)",
  },
];

const capabilities = [
  {
    title: "Production-Ready",
    subtitle: "Architecture",
    color: "text-blue-400",
    borderColor: "rgba(59, 130, 246, 0.35)",
  },
  {
    title: "Custom-Built",
    subtitle: "Software",
    color: "text-cyan-400",
    borderColor: "rgba(6, 182, 212, 0.35)",
  },
  {
    title: "Agile Delivery",
    subtitle: "Iterative Development",
    color: "text-purple-400",
    borderColor: "rgba(139, 92, 246, 0.35)",
  },
  {
    title: "Ongoing Support",
    subtitle: "Maintenance & Optimization",
    color: "text-emerald-400",
    borderColor: "rgba(16, 185, 129, 0.35)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section id="about" className="py-10 lg:py-14 bg-transparent relative overflow-hidden">
      {/* Subtle section background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 lg:mb-18"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            WHY DELTAWAVEX
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3.5">
            Built for <span className="gradient-text">Speed. Designed for Scale.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine product thinking, engineering discipline, and modern technology to build software that delivers measurable business value.
          </p>
        </motion.div>

        {/* 6 Cards Desktop 3-Column Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="group h-full">
                <div
                  tabIndex={0}
                  className="relative rounded-2xl p-6 lg:p-7 h-full flex flex-col justify-between bg-slate-900/85 border border-white/5 backdrop-blur-md hover:-translate-y-[3px] transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none shadow-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = reason.borderColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  {/* Top gradient highlight line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Radial subtle accent glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`}
                  />

                  <div>
                    {/* Icon container with soft glow */}
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${reason.gradient} p-0.5 mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300 motion-reduce:transition-none`}
                      style={{
                        boxShadow: `0 0 14px ${reason.glowColor}`,
                      }}
                    >
                      <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="text-white font-bold text-lg lg:text-xl mb-2.5 leading-snug">
                      {reason.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Refined Strategic Technology Partner Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-16 lg:mt-24 bg-slate-900/75 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-9 backdrop-blur-md shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left side: Heading, Controlled-width Description, Capability Tags */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Your Strategic Technology Partner
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">
                DeltaWaveX helps startups and growing enterprises build reliable, high-performance software — from early concept validation to continuous production scaling.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {["Product Strategy", "UI/UX Architecture", "Full-Stack Development", "AI Integration", "Cloud & Maintenance"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right side: 2x2 Compact Engineering Capability Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {capabilities.map((card) => (
                <div
                  key={card.title}
                  tabIndex={0}
                  className="group/cap relative bg-slate-950/70 border border-white/5 rounded-2xl p-4 lg:p-5 backdrop-blur-md hover:-translate-y-[2px] transition-all duration-300 ease-out shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 motion-reduce:transition-none motion-reduce:transform-none"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = card.borderColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <div className={`text-base lg:text-lg font-bold ${card.color} mb-1 transition-colors duration-300 group-hover/cap:brightness-110`}>
                    {card.title}
                  </div>
                  <div className="text-slate-400 text-xs font-medium">{card.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
