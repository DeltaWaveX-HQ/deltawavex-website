"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProjectRef } from "@/data/serviceData";

interface FeaturedProjectsProps {
  projects: ProjectRef[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // If no projects available for this service, return null (never show fake projects)
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="py-20 lg:py-28 relative border-b border-slate-800/60">
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
            {"// PROVEN WORK"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Built for Real Products
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real production applications engineered and shipped by DeltaWaveX.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className={`grid grid-cols-1 ${projects.length > 1 ? "md:grid-cols-2" : "max-w-2xl mx-auto"} gap-8`}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${project.gradient.split(" ")[0].replace("from-", "")}, ${project.gradient.split(" ")[1].replace("to-", "")})`,
                }}
              />

              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-slate-400 block mt-1">
                      {project.tagline}
                    </span>
                  </div>
                  <Link
                    href="/#products"
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Capabilities / Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Row */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {project.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-slate-950 text-[11px] font-mono text-slate-400 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
