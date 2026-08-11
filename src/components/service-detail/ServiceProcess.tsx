"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description: "Deep-dive into your business goals, technical constraints, target audience, and architecture requirements to outline a clear project spec.",
  },
  {
    step: "02",
    title: "System Architecture",
    description: "Designing the database schema, API endpoints, data flow, third-party integrations, and cloud infrastructure model.",
  },
  {
    step: "03",
    title: "UI / UX Design",
    description: "Crafting intuitive user interfaces, component design systems, interactive prototypes, and mobile-first layouts.",
  },
  {
    step: "04",
    title: "Iterative Development",
    description: "Engineering clean, modular TypeScript code with daily commits, weekly sprint builds, and continuous integration checks.",
  },
  {
    step: "05",
    title: "Quality Assurance & Testing",
    description: "Rigorous automated testing, security vulnerability scans, multi-device QA, and performance optimization.",
  },
  {
    step: "06",
    title: "Production Deployment",
    description: "Zero-downtime release to App Stores or Edge cloud infrastructure with real-time monitoring and post-launch support.",
  },
];

interface ServiceProcessProps {
  accentColor: string;
}

export default function ServiceProcess({ accentColor }: ServiceProcessProps) {
  return (
    <section className="py-20 lg:py-28 relative bg-slate-950/60 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
            {"// ENGINEERING PROCESS"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            How We Execute
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A structured 6-phase engineering workflow delivering predictable milestones from concept to production.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 -translate-x-1/2" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {processSteps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Content Box */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
                      <span
                        className="text-xs font-mono font-bold uppercase tracking-wider block mb-1"
                        style={{ color: accentColor }}
                      >
                        PHASE {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Circle */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-300 z-10 shadow-md">
                    <span style={{ color: accentColor }}>{item.step}</span>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
