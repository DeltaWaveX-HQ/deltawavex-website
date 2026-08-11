"use client";

import { motion } from "framer-motion";
import { ArchLayer } from "@/data/serviceData";
import { ArrowDown } from "lucide-react";

interface ArchitectureDiagramProps {
  title: string;
  layers: ArchLayer[];
  accentColor: string;
}

export default function ArchitectureDiagram({ title, layers, accentColor }: ArchitectureDiagramProps) {
  return (
    <section id="architecture" className="py-20 lg:py-28 bg-slate-950 relative border-t border-b border-slate-800/60 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-10 blur-[140px]"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
            {"// ARCHITECTURE TOPOLOGY"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Engineered From Interface to Infrastructure
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {title}: A multi-tiered architectural model ensuring data integrity, high availability, and seamless scalability.
          </p>
        </motion.div>

        {/* 5-Layer Vertical Diagram Flow */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3 relative">
          {layers.map((layer, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Layer Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="w-full rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 sm:p-6 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-lg"
              >
                {/* Left side: Step + Label */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs shrink-0"
                    style={{ color: accentColor }}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase block">
                      {layer.step}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {layer.label}
                    </h3>
                  </div>
                </div>

                {/* Middle: Technology */}
                <div className="sm:text-center">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-950 text-slate-300 border border-slate-800 inline-block">
                    {layer.tech}
                  </span>
                </div>

                {/* Right side: Detail */}
                <div className="sm:text-right text-xs text-slate-400 font-mono">
                  {layer.detail}
                </div>
              </motion.div>

              {/* Connecting Data Flow Arrow (between layers, not after last) */}
              {idx < layers.length - 1 && (
                <div className="py-2 flex flex-col items-center justify-center relative">
                  <div className="w-[1px] h-6 bg-slate-800 relative overflow-hidden">
                    <motion.div
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: idx * 0.3 }}
                      className="w-full h-3 bg-cyan-400 shadow-[0_0_8px_#06B6D4]"
                    />
                  </div>
                  <ArrowDown className="w-3.5 h-3.5 text-slate-600 -mt-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
