"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { ServiceConfig } from "@/data/serviceData";

interface ServiceHeroProps {
  service: ServiceConfig;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Subtle background glow tailored to service accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] pointer-events-none opacity-20 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${service.accentColor} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Technical Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Technical Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: `1px solid ${service.accentBorder}`,
                color: service.accentColor,
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{service.category}</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${service.accentColor} 100%)`,
                }}
              >
                {service.title.split(" ").slice(-1)[0]}
              </span>
              <br />
              <span className="gradient-text font-black">{service.gradientWord}</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {service.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#contact"
                data-cursor="magnetic"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    window.location.hash = "#contact";
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <span>View Architecture</span>
              </a>
            </div>

            {/* Tech Pills Row */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                Core Stack:
              </span>
              {service.techPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Service Visual System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative rounded-2xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Top Bar Indicators */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    SYSTEM STATUS // ONLINE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {service.slug.toUpperCase()}
                </span>
              </div>

              {/* Dynamic Service Visual */}
              <RenderServiceVisual type={service.visualType} accent={service.accentColor} />

              {/* HUD Technical Indicators (4 grid stats) */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800/80">
                {service.hudIndicators.map((hud, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {hud.label}
                    </span>
                    <span
                      className="text-xs font-mono font-bold mt-1"
                      style={{ color: service.accentColor }}
                    >
                      {hud.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

{/* Helper to render clean technical visuals based on visualType */}
function RenderServiceVisual({ type, accent }: { type: string; accent: string }) {
  if (type === "mobile") {
    return (
      <div className="relative flex justify-center py-4">
        {/* Smartphone Silhouette Mockup */}
        <div className="w-[200px] h-[340px] rounded-[2.2rem] bg-slate-950 border-2 border-slate-700/80 p-3 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Speaker / Notch */}
          <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-900" />
          </div>

          {/* Realistic App UI View */}
          <div className="flex-1 rounded-xl bg-slate-900/90 p-3 flex flex-col gap-2 border border-slate-800/80 overflow-hidden">
            <div className="h-6 rounded-md bg-slate-800/80 flex items-center px-2 justify-between">
              <span className="text-[9px] font-mono text-slate-300">DeltaWave App</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            </div>
            <div className="h-16 rounded-md bg-gradient-to-br from-slate-800 to-slate-900 p-2 flex flex-col justify-between border border-slate-800">
              <div className="w-16 h-1.5 rounded bg-slate-600" />
              <div className="w-24 h-2 rounded bg-cyan-400" />
            </div>
            <div className="grid grid-cols-2 gap-1.5 flex-1">
              <div className="rounded-md bg-slate-800/50 p-2 flex flex-col justify-between border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <div className="w-10 h-1.5 rounded bg-slate-600" />
              </div>
              <div className="rounded-md bg-slate-800/50 p-2 flex flex-col justify-between border border-slate-800">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <div className="w-10 h-1.5 rounded bg-slate-600" />
              </div>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
        </div>
      </div>
    );
  }

  if (type === "web") {
    return (
      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
        {/* Browser Top Header */}
        <div className="h-7 bg-slate-900 border-b border-slate-800 flex items-center px-3 gap-1.5">
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <div className="ml-2 flex-1 h-3.5 rounded bg-slate-950 border border-slate-800 px-2 flex items-center">
            <span className="text-[8px] font-mono text-slate-400">https://app.deltawavex.com</span>
          </div>
        </div>
        {/* Web UI Body */}
        <div className="p-4 flex flex-col gap-2.5">
          <div className="h-10 rounded-md bg-slate-900 border border-slate-800 p-2 flex items-center justify-between">
            <div className="w-20 h-2 rounded bg-cyan-400" />
            <div className="flex gap-1">
              <div className="w-6 h-2 rounded bg-slate-700" />
              <div className="w-6 h-2 rounded bg-slate-700" />
            </div>
          </div>
          <div className="h-24 rounded-md bg-slate-900/60 border border-slate-800 p-3 flex flex-col justify-between">
            <div className="w-32 h-3 rounded bg-slate-300" />
            <div className="w-48 h-2 rounded bg-slate-600" />
            <div className="w-16 h-4 rounded bg-cyan-600/40 border border-cyan-500/50" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "saas") {
    return (
      <div className="rounded-xl bg-slate-950 border border-slate-800 p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono text-slate-200">SaaS Multi-Tenant Hub</span>
          </div>
          <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/30">
            TENANT_ID: #8092
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1">
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <span className="text-[8px] text-slate-400 block">MRR</span>
            <span className="text-xs font-mono font-bold text-purple-400">$12,450</span>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <span className="text-[8px] text-slate-400 block">Active Users</span>
            <span className="text-xs font-mono font-bold text-cyan-400">1,840</span>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <span className="text-[8px] text-slate-400 block">System Load</span>
            <span className="text-xs font-mono font-bold text-emerald-400">0.12ms</span>
          </div>
        </div>
        <div className="h-16 rounded bg-slate-900 border border-slate-800 p-2 flex items-center justify-between">
          <div className="space-y-1">
            <div className="w-24 h-2 rounded bg-slate-500" />
            <div className="w-16 h-1.5 rounded bg-slate-700" />
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      </div>
    );
  }

  // Default fallback visual (AI, Cloud, MVP, Business, Marketplace)
  return (
    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono text-slate-200">ENGINEERING ARCHITECTURE</span>
        </div>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
          HEALTHY
        </span>
      </div>
      <div className="space-y-2 py-2">
        <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-300">Client Request Handler</span>
          <span className="text-[10px] font-mono text-cyan-400">200 OK</span>
        </div>
        <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-300">API Gateway & Auth</span>
          <span className="text-[10px] font-mono text-purple-400">JWT Verified</span>
        </div>
        <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-300">PostgreSQL DB Cluster</span>
          <span className="text-[10px] font-mono text-emerald-400">0.4ms latency</span>
        </div>
      </div>
    </div>
  );
}
