"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Rocket, Zap, Clock, Target, Layers, PlayCircle, TrendingUp } from "lucide-react";

export default function StartupMVPPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-violet-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/#services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4" />
              <span>Agile Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Rapid <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">MVP Development</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              Transform your idea into a working product in weeks, not months. We help founders launch fast, validate assumptions, and iterate based on real user feedback.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold text-white shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.4)] transition-shadow">
                Start Your Project
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract visual representation of rapid growth / rocket launch */}
            <div className="aspect-[4/3] rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4 relative overflow-hidden shadow-2xl flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-fuchsia-500/10 z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[2s] pointer-events-none" />
              
              <div className="relative z-10 w-full h-full flex items-end justify-center pb-8">
                {/* Chart bars growing */}
                <div className="flex items-end gap-4 h-full pt-16">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [`${i * 20}%`, `${i * 15}%`, `${i * 20}%`] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.2, ease: "easeInOut" }}
                      className="w-12 rounded-t-xl bg-gradient-to-t from-violet-600/40 to-fuchsia-500/80 border-t border-x border-fuchsia-400/50 relative overflow-hidden"
                    >
                      <motion.div animate={{ y: ["100%", "-100%"] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3, ease: "linear" }} className="w-full h-1/2 bg-white/20 blur-sm" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Line chart over bars */}
                <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_rgba(217,70,239,0.5)] pointer-events-none" preserveAspectRatio="none">
                  <motion.path 
                    animate={{ strokeDashoffset: [100, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    strokeDasharray="10 10"
                    d="M 15% 80% L 35% 60% L 50% 65% L 70% 35% L 85% 20%" 
                    stroke="#d946ef" 
                    strokeWidth="4" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Glowing data points */}
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute left-[15%] bottom-[20%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_15px_#d946ef] z-20 -ml-1.5 -mb-1.5" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="absolute left-[35%] bottom-[40%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_15px_#d946ef] z-20 -ml-1.5 -mb-1.5" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }} className="absolute left-[50%] bottom-[35%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_15px_#d946ef] z-20 -ml-1.5 -mb-1.5" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 1.2 }} className="absolute left-[70%] bottom-[65%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_15px_#d946ef] z-20 -ml-1.5 -mb-1.5" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 1.6 }} className="absolute left-[85%] bottom-[80%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_15px_#d946ef] z-20 -ml-1.5 -mb-1.5" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Strategy for Founders</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We focus on the 20% of features that deliver 80% of the value. Ship quickly, test the market, and secure your next funding round.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Speed to Market", desc: "Go from concept to a live application in 4-8 weeks using proven, reusable tech stacks." },
              { icon: Target, title: "Core Features Only", desc: "We help you prioritize ruthlessy to build a true Minimum Viable Product." },
              { icon: TrendingUp, title: "Investor Ready", desc: "Build a polished, functioning product that wows angels and VCs during demos." },
              { icon: Clock, title: "Iterative Sprints", desc: "Weekly deliverables so you can see progress and pivot instantly if needed." },
              { icon: Layers, title: "Scalable Foundation", desc: "Fast doesn't mean fragile. We build on architectures that can scale post-launch." },
              { icon: PlayCircle, title: "User Analytics", desc: "Built-in tracking (Mixpanel/PostHog) to understand user behavior from day one." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-slate-900/50 rounded-3xl p-12 border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Our MVP Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["Next.js", "Supabase", "Firebase", "Tailwind CSS", "Vercel", "Stripe", "Figma", "PostHog"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-violet-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
