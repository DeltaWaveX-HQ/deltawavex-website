"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4">
            How We Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven, transparent 7-step process that takes your idea from concept to a live, scaling product.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative lg:flex lg:items-center lg:gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } mb-8 lg:mb-16`}
                >
                  {/* Content */}
                  <div className={`lg:w-[calc(50%-40px)] ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:${step.glow} inline-block w-full`}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-30`}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-20 flex-shrink-0 items-center justify-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="lg:w-[calc(50%-40px)] hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
