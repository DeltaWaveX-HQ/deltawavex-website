"use client";

import { motion } from "framer-motion";
import { TechItem } from "@/data/serviceData";
import { Code2 } from "lucide-react";

interface ServiceTechStackProps {
  techStack: TechItem[];
  accentColor: string;
}

export default function ServiceTechStack({ techStack, accentColor }: ServiceTechStackProps) {
  return (
    <section className="py-20 lg:py-24 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
            {"// FOCUSED TECH STACK"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Production Technologies
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Proven, battle-tested technologies engineered for stability, security, and developer efficiency.
          </p>
        </motion.div>

        {/* Tech Stack Grid (3 to 5 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-4 group"
            >
              {/* Tech Icon Badge */}
              <div
                className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform"
              >
                <Code2 className="w-5 h-5" style={{ color: accentColor }} />
              </div>

              <div>
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  {tech.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {tech.purpose}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
