"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Layers,
  Network,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  sublabel: string;
  icon: typeof Brain;
  xPct: number; // Hexagonal coordinates for 6 nodes
  yPct: number;
  color: string;
  glowColor: string;
}

const capabilityNodes: NodeData[] = [
  {
    id: "ai-ml",
    label: "AI & ML",
    sublabel: "LLMs, Automation & Predictive Models",
    icon: Brain,
    xPct: 50,
    yPct: 10,
    color: "from-indigo-600 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.35)",
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    sublabel: "CI/CD & Scalable Infrastructure",
    icon: Cloud,
    xPct: 82,
    yPct: 25,
    color: "from-blue-600 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.35)",
  },
  {
    id: "saas-products",
    label: "SaaS Products",
    sublabel: "Multi-Tenant Cloud Platforms",
    icon: Layers,
    xPct: 82,
    yPct: 75,
    color: "from-cyan-600 to-blue-500",
    glowColor: "rgba(37, 99, 235, 0.35)",
  },
  {
    id: "apis-integrations",
    label: "APIs & Integrations",
    sublabel: "Enterprise Gateways & Microservices",
    icon: Network,
    xPct: 50,
    yPct: 90,
    color: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.35)",
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    sublabel: "Native iOS, Android & Cross-Platform",
    icon: Smartphone,
    xPct: 18,
    yPct: 75,
    color: "from-purple-600 to-indigo-500",
    glowColor: "rgba(147, 51, 234, 0.35)",
  },
  {
    id: "web-platforms",
    label: "Web Platforms",
    sublabel: "High-Performance Modern Web Apps",
    icon: Globe,
    xPct: 18,
    yPct: 25,
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.35)",
  },
];

const techExamples = [
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "Python",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Docker",
];

export default function Technologies() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const containerRef = useRef(null);

  const activeData = capabilityNodes.find((n) => n.id === activeNode);

  return (
    <section
      id="technologies"
      ref={containerRef}
      className="py-16 lg:py-24 bg-transparent relative overflow-hidden"
    >
      {/* Soft atmospheric background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] pointer-events-none opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.2) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNOLOGY ECOSYSTEM</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technology <span className="gradient-text">Without Limits</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We choose the right technology for the problem — building scalable, reliable, and
            future-ready digital products.
          </p>
        </motion.div>

        {/* ======================== DESKTOP & TABLET 6-NODE HEXAGONAL ECOSYSTEM ======================== */}
        <div className="hidden sm:block relative w-full max-w-4xl mx-auto h-[480px] lg:h-[520px] my-4">
          {/* SVG Connection Network Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {capabilityNodes.map((node) => {
              const isActive = activeNode === node.id;
              return (
                <g key={node.id}>
                  {/* Subtle Connection Line */}
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${node.xPct}%`}
                    y2={`${node.yPct}%`}
                    stroke={isActive ? "rgba(6, 182, 212, 0.75)" : "rgba(255, 255, 255, 0.1)"}
                    strokeWidth={isActive ? "1.5" : "1"}
                    strokeDasharray={isActive ? "none" : "3 3"}
                    className="transition-colors duration-300"
                  />
                  {/* Traveling Pulse Circle */}
                  <circle r={isActive ? "3" : "1.8"} fill={isActive ? "#06B6D4" : "#3B82F6"}>
                    <animateMotion
                      path={`M 50%,50% L ${node.xPct}%,${node.yPct}%`}
                      dur={isActive ? "2s" : "4s"}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Central Hub Node: DeltaWaveX */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 20px rgba(37, 99, 235, 0.25)",
                  "0 0 35px rgba(6, 182, 212, 0.4)",
                  "0 0 20px rgba(37, 99, 235, 0.25)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative px-7 py-4.5 rounded-2xl bg-slate-950/95 border border-cyan-500/35 text-center shadow-2xl backdrop-blur-xl group cursor-default"
            >
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 mb-0.5">
                DeltaWaveX
              </div>
              <div className="text-sm font-semibold text-slate-300 tracking-wide">
                Solution-Focused Engineering
              </div>
            </motion.div>
          </div>

          {/* 6 Capability Nodes */}
          {capabilityNodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;

            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-1.5"
                style={{
                  left: `${node.xPct}%`,
                  top: `${node.yPct}%`,
                }}
              >
                <div
                  className={`px-4 py-3 rounded-xl bg-slate-900/90 border ${
                    isActive
                      ? "border-cyan-400 shadow-xl scale-105 -translate-y-1"
                      : "border-white/10 hover:border-cyan-500/40"
                  } backdrop-blur-md transition-all duration-300 flex items-center gap-3 min-w-[155px] lg:min-w-[180px]`}
                  style={{
                    boxShadow: isActive ? `0 8px 25px ${node.glowColor}` : "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-xs lg:text-sm font-bold truncate">
                      {node.label}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate hidden lg:block">
                      {node.sublabel}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================== MOBILE RESPONSIVE LAYOUT (320px - 430px) ======================== */}
        <div className="block sm:hidden my-6">
          {/* Central Hub Mobile Card */}
          <div className="text-center mb-5">
            <div className="inline-flex flex-col items-center p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/35 shadow-xl">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest mb-0.5">
                DeltaWaveX
              </span>
              <span className="text-xs font-semibold text-slate-300">
                Solution-Focused Engineering
              </span>
            </div>
          </div>

          {/* 6-Node Grid */}
          <div className="grid grid-cols-2 gap-3">
            {capabilityNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="p-3 rounded-xl bg-slate-900/85 border border-white/10 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold leading-tight">{node.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight truncate">{node.sublabel}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fixed-Height Slot for Active Node Detail Banner to Prevent Layout Shifts & Flickering */}
        <div className="hidden sm:flex items-center justify-center h-10 my-3">
          <div
            className={`flex items-center justify-center gap-2.5 p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/25 max-w-lg w-full text-center transition-all duration-300 ${
              activeData ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {activeData && (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs text-slate-200 font-medium">
                  <strong className="text-white font-bold">{activeData.label}:</strong> {activeData.sublabel}
                </span>
              </>
            )}
          </div>
        </div>

        {/* ======================== SECONDARY TECHNOLOGY STRIP ======================== */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 text-center">
          <p className="text-slate-400 text-xs font-medium tracking-wider uppercase mb-5">
            Modern tools. The right technology for every product.
          </p>

          {/* Marquee Container */}
          <div
            className="overflow-hidden w-full"
            style={{
              maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="flex w-max animate-marquee whitespace-nowrap gap-3 sm:gap-4 py-1">
              {[...techExamples, ...techExamples].map((item, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 text-xs font-mono font-medium flex items-center gap-2 shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-500 text-[11px] mt-4 max-w-md mx-auto leading-relaxed">
            Technology choices driven by your specific product requirements — not fixed stack limitations.
          </p>
        </div>
      </div>
    </section>
  );
}
