"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ServiceCTAProps {
  accentColor: string;
}

export default function ServiceCTA({ accentColor }: ServiceCTAProps) {
  return (
    <section className="py-24 lg:py-32 relative bg-slate-950 overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-15 blur-[140px]"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4 block">
            {"// NEXT STEPS"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Ready to Build Your Product?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us what you&apos;re building. We&apos;ll help turn the concept into a production-ready software system built for scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              data-cursor="magnetic"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
