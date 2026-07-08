"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe, Code2, Rocket, Layout, Cpu, CheckCircle2 } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-600/20 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              <span>Web Engineering</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Web Apps</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              We build lightning-fast, SEO-optimized, and highly interactive web applications using Next.js and modern frameworks. Designed to drive conversions and scale effortlessly.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 font-bold text-white shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-shadow">
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
            {/* Abstract visual representation of a web browser */}
              <div className="aspect-[4/3] rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-2 relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 z-0" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[2s] z-0" />
                <div className="h-full w-full rounded-2xl bg-slate-950 border border-slate-800 relative z-10 overflow-hidden flex flex-col">
                  {/* Browser top bar */}
                  <div className="h-10 w-full bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2 relative">
                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="w-3 h-3 rounded-full bg-red-500/80" />
                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <div className="mx-4 flex-1 h-5 rounded-md bg-slate-800 overflow-hidden relative">
                      <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute inset-y-0 w-1/3 bg-cyan-500/20 blur-sm" />
                    </div>
                  </div>
                  {/* Browser content */}
                  <div className="flex-1 p-6 flex flex-col gap-4">
                    <motion.div 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "66%" }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="h-10 rounded-lg bg-gradient-to-r from-cyan-600/20 to-sky-600/20 border border-cyan-500/20 flex items-center px-4 overflow-hidden relative"
                    >
                      <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-y-0 w-1/2 bg-cyan-400/10 skew-x-12" />
                      <div className="w-1/2 h-2 rounded-full bg-cyan-400/30 overflow-hidden relative">
                         <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="w-1/2 h-full bg-cyan-300/80" />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="w-full h-32 rounded-xl bg-slate-800/30 border border-slate-700/30 mt-4 flex items-center justify-center relative overflow-hidden"
                    >
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute right-4 bottom-4">
                        <Globe className="w-12 h-12 text-cyan-500/20" />
                      </motion.div>
                      <div className="w-full h-full p-6 flex flex-col justify-center gap-3 relative z-10">
                        <div className="w-1/3 h-3 rounded-full bg-slate-600 overflow-hidden">
                           <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="w-full h-full bg-slate-500" />
                        </div>
                        <div className="w-1/2 h-2 rounded-full bg-slate-700" />
                        <div className="w-1/4 h-2 rounded-full bg-slate-700" />
                      </div>
                    </motion.div>
                    <div className="flex gap-4 mt-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + (i * 0.15), duration: 0.4 }}
                          className="w-1/3 h-24 rounded-xl bg-slate-800/40 border border-slate-700/50 p-4 flex flex-col justify-between overflow-hidden relative"
                        >
                          <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.5, ease: "linear" }} className="absolute inset-x-0 h-1/2 bg-cyan-500/5 blur-xl" />
                          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }} className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20" />
                          <div className="space-y-2 relative z-10">
                            <div className="w-full h-2 rounded-full bg-slate-600" />
                            <div className="w-2/3 h-2 rounded-full bg-slate-700" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Web Solutions?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We use modern architectures like React Server Components and Edge computing to deliver unparalleled user experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Blazing Fast", desc: "Optimized Core Web Vitals for immediate load times and interactivity." },
              { icon: Layout, title: "Responsive Design", desc: "Flawless layouts across all devices, from mobile to ultra-wide monitors." },
              { icon: Code2, title: "Modern Tech", desc: "Built with Next.js, React, and server-side rendering for optimal SEO." },
              { icon: Globe, title: "Global CDN", desc: "Deployed to the edge for minimum latency wherever your users are." },
              { icon: Cpu, title: "Scalable Architecture", desc: "Microservices and serverless functions that grow with your traffic." },
              { icon: CheckCircle2, title: "Accessibility First", desc: "WCAG compliant designs ensuring everyone can use your application." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Our Web Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "tRPC", "Prisma", "Vercel"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-cyan-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
