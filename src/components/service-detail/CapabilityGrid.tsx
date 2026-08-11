"use client";

import { motion } from "framer-motion";
import { CapabilityItem } from "@/data/serviceData";

interface CapabilityGridProps {
  capabilities: CapabilityItem[];
  accentColor: string;
}

export default function CapabilityGrid({ capabilities, accentColor }: CapabilityGridProps) {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
            {"// CAPABILITIES"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            What We Engineer
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From interface architecture to production deployment, every layer is engineered for reliability, security, and long-term maintainability.
          </p>
        </motion.div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle accent hover indicator line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: accentColor }}
              />

              <div>
                {/* Header row: Number + Title */}
                <div className="flex items-baseline gap-4 mb-3">
                  <span
                    className="text-sm font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors duration-300"
                  >
                    {cap.number}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed font-normal pl-8">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
