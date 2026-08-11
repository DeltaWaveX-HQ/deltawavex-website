"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Terminal, Clock } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Production-Ready Architecture",
    description:
      "We design system schemas, database models, and APIs that scale reliably from early stage to enterprise workloads.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Performance-First Engineering",
    description:
      "Optimization at every layer: fast initial render, low latency database queries, and lightweight GPU-friendly UI rendering.",
  },
  {
    number: "03",
    icon: Terminal,
    title: "Transparent Development",
    description:
      "Direct code access, daily commits, structured weekly sprints, and clear communication with no hidden surprises.",
  },
  {
    number: "04",
    icon: Clock,
    title: "Long-Term Technical Support",
    description:
      "We don't abandon code post-launch. We provide security updates, framework upgrades, and continuous performance tuning.",
  },
];

interface ServiceWhyUsProps {
  accentColor: string;
}

export default function ServiceWhyUs({ accentColor }: ServiceWhyUsProps) {
  return (
    <section className="py-20 lg:py-28 relative bg-slate-950/40 border-b border-slate-800/60">
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
            {"// ENGINEERING DISCIPLINE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Why Teams Choose DeltaWaveX
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Engineered with product discipline, technical precision, and absolute transparency.
          </p>
        </motion.div>

        {/* 2x2 Grid of 4 Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex gap-5 group"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                >
                  <Icon className="w-5 h-5 text-cyan-400" style={{ color: accentColor }} />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
