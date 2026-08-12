"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Send, CheckCircle2, BookOpen, Cpu, Layers, Smartphone } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const previewTopics = [
  {
    icon: Cpu,
    category: "AI & ML ENGINEERING",
    title: "Building Production-Ready LLM Agents for Enterprise Workflows",
    desc: "A deep dive into prompt pipelines, vector databases, and real-time streaming architectures.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    category: "FULL-STACK ARCHITECTURE",
    title: "Scaling Multi-Tenant SaaS Systems with Next.js & Supabase",
    desc: "Best practices for tenant isolation, database partitioning, and real-time synchronization.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    category: "MOBILE ENGINEERING",
    title: "Achieving Fluid 60FPS UI & Offline-First Data Sync",
    desc: "Engineering high-performance mobile apps with React Native, Flutter, and background queues.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="bg-slate-950 min-h-screen text-white relative selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Atmosphere */}
      <section className="relative pt-36 pb-24 px-6 lg:px-8 overflow-hidden min-h-[85vh] flex flex-col justify-center">
        {/* Background glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] pointer-events-none opacity-20 blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.3) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Back to Home link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-slate-900/90 border border-cyan-500/30 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INSIGHTS & ENGINEERING ARTICLES</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6"
          >
            DeltaWaveX Insights <br />
            <span className="gradient-text">Coming Soon</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            We&apos;re preparing in-depth technical guides, engineering breakdown articles, and product case studies on AI systems, scalable full-stack architecture, and mobile development.
          </motion.p>

          {/* Email Subscription Notification Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto mb-16"
          >
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-3 text-emerald-400">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">
                  You&apos;re on the list! We&apos;ll notify you when articles launch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  }}
                >
                  <span>Notify Me</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Topic Preview Grid Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-10 border-t border-slate-800/80 text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                UPCOMING TECHNICAL TOPICS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {previewTopics.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center text-white`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          COMING SOON
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        {topic.category}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
