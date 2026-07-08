"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Map, Palette, Code2, FlaskConical, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We deep-dive into your business, goals, and target audience to understand the full picture.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/30",
  },
  {
    number: "02",
    title: "Planning",
    description: "Strategic roadmap, technical architecture, and sprint planning to set your project up for success.",
    icon: Map,
    color: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/30",
  },
  {
    number: "03",
    title: "Design",
    description: "Pixel-perfect UI/UX design with user testing, design systems, and interactive prototypes.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/30",
  },
  {
    number: "04",
    title: "Development",
    description: "Agile development with weekly demos, clean code, and continuous integration from day one.",
    icon: Code2,
    color: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/30",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous QA, performance testing, security audits, and cross-device compatibility checks.",
    icon: FlaskConical,
    color: "from-emerald-500 to-green-500",
    glow: "shadow-emerald-500/30",
  },
  {
    number: "06",
    title: "Launch",
    description: "Smooth production deployment with monitoring, alerts, and zero-downtime release strategies.",
    icon: Rocket,
    color: "from-rose-500 to-pink-500",
    glow: "shadow-rose-500/30",
  },
  {
    number: "07",
    title: "Support",
    description: "24/7 post-launch support, ongoing maintenance, performance optimization, and feature growth.",
    icon: Headphones,
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/30",
  },
];

function StepVisual({ color, Icon }: { color: string; Icon: any }) {
  // Use a massive, glowing literal icon for all steps to ensure unified style
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Background pulsing glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${color} blur-2xl opacity-30`}
      />
      
      {/* Floating Icon Glass Card */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-24 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-md flex items-center justify-center overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
        <Icon className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
      </motion.div>
    </div>
  );
}

function StepCard({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[0];
  index: number;
  progress: ReturnType<typeof useTransform<number, number>>;
}) {
  const Icon = step.icon;
  const isLeft = index % 2 === 0;
  const total = steps.length;

  const start = index === 0 ? 0 : (index * 0.85) / total;
  const end = index === 0 ? 0.05 : start + 0.15;

  const x = useTransform(
    progress,
    [start, end],
    [isLeft ? -100 : 100, 0]
  );
  
  const opacity = useTransform(
    progress,
    [start, end],
    [0, 1]
  );

  const scale = useTransform(
    progress,
    [start, end],
    [0, 1]
  );

  return (
    <div
      className={`relative lg:flex lg:items-center lg:gap-8 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } mb-12 lg:mb-32`}
    >
      {/* Content */}
      <div className={`lg:w-[calc(50%-40px)] ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
        <motion.div
          style={{ x, opacity }}
          className={`bg-slate-900/60 border border-white/5 rounded-2xl overflow-hidden shadow-xl inline-block w-full text-left flex flex-col group`}
        >
          {/* VISUAL AREA */}
          <div className="h-48 relative border-b border-white/5 overflow-hidden flex items-center justify-center bg-slate-950/50">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none z-0" />
            <div className="relative z-10 w-full h-full">
               <StepVisual color={step.color} Icon={Icon} />
            </div>
          </div>

          {/* TEXT AREA */}
          <div className="p-6">
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-30`}>
                {step.number}
              </span>
            </div>
            <h3 className={`text-white font-bold text-lg mb-2 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
              {step.title}
            </h3>
            <p className={`text-slate-400 text-sm leading-relaxed ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
              {step.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex w-20 flex-shrink-0 items-center justify-center relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
        >
          <span className="text-white text-xs font-bold">{index + 1}</span>
        </motion.div>
      </div>

      {/* Empty spacer for alternating layout */}
      <div className="lg:w-[calc(50%-40px)] hidden lg:block" />
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // The scroll progress across the entire sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Timeline moves up visually while the user scrolls down the sticky section
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-430vh"]);

  return (
    <section id="process" ref={containerRef} className="relative h-[600vh] bg-slate-950">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_100%)] pointer-events-none" />




        {/* Masked Area for Scrolling Timeline */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {/* Scrolling Timeline Wrapper */}
          <motion.div
            style={{ y }}
            className="absolute top-[3vh] left-0 right-0 w-full pointer-events-auto"
          >
          {/* Section Header — scrolls with the timeline */}
          <div className="text-center px-6 mb-16">
            <span className="inline-block text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4">
              How We Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A proven, transparent 7-step process that takes your idea from concept to a live, scaling product.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />
            
            {/* Steps */}
            <div className="relative z-10 pb-[30vh]">
              {steps.map((step, index) => (
                <StepCard
                  key={step.number}
                  step={step}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </motion.div>
        </div>
        {/* Progress bar at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 z-30">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>

      </div>
    </section>
  );
}
