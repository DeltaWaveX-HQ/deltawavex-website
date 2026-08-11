"use client";

import { motion } from "framer-motion";
import { MetricItem } from "@/data/serviceData";

interface EngineeringMetricsProps {
  metrics: MetricItem[];
  accentColor: string;
}

export default function EngineeringMetrics({ metrics, accentColor }: EngineeringMetricsProps) {
  return (
    <section className="py-8 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="px-4 py-3 sm:px-6 sm:py-2 flex flex-col justify-center"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                {metric.label}
              </span>
              <span
                className="text-lg sm:text-xl font-bold font-mono my-0.5"
                style={{ color: accentColor }}
              >
                {metric.value}
              </span>
              <span className="text-xs text-slate-400 leading-tight">
                {metric.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
