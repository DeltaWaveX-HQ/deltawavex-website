"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Zap,
  TrendingUp,
  Brain,
  Package,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Startup Mindset",
    description:
      "We think like founders. Speed, resourcefulness, and market-first thinking are baked into everything we build.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description:
      "Ship your MVP in weeks, not months. Our agile process is optimized for velocity without sacrificing quality.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Every product we build is architected to scale from 10 users to 10 million without breaking a sweat.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Innovation",
    description:
      "We integrate cutting-edge AI into every product — from intelligent automation to personalization engines.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Package,
    title: "End-to-End Delivery",
    description:
      "Strategy, design, development, QA, and deployment — one team, one vision, zero handoff chaos.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't just deliver and disappear. We're your growth partner — here for every sprint, pivot, and milestone.",
    gradient: "from-sky-500 to-blue-500",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-900/50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">
            Why Delta Wave X
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built to Be Your{" "}
            <span className="gradient-text">Unfair Advantage</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We combine the speed of a startup with the discipline of an enterprise to deliver world-class products.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-slate-900/60 border border-white/5 rounded-2xl p-7 hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon with gradient */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.gradient} mb-5 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>

                {/* Subtle gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* About highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 border border-white/5 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Your Technology Partner for Growth
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Delta Wave X helps startups and businesses build scalable digital products — from idea validation to launch and growth. We bring strategy, design, and engineering under one roof.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Product Strategy", "UI/UX Design", "Development", "Deployment", "Maintenance"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Products Launched", color: "text-blue-400" },
                { value: "100%", label: "Custom Built", color: "text-cyan-400" },
                { value: "10+", label: "Technologies", color: "text-purple-400" },
                { value: "24/7", label: "Support", color: "text-emerald-400" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900/60 border border-white/5 rounded-2xl p-5 text-center"
                >
                  <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
