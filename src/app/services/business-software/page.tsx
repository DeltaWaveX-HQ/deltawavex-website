"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, Briefcase, BarChart3, Database, Key, LayoutDashboard } from "lucide-react";

export default function BusinessSoftwarePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-600/20 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              <span>Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Business Software</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              Streamline operations, automate repetitive workflows, and gain actionable insights with bespoke ERP, CRM, and internal tools tailored precisely to your business processes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 font-bold text-white shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-shadow">
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
            {/* Abstract visual representation of a Dashboard/ERP */}
            <div className="aspect-[4/3] rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4 relative overflow-hidden shadow-2xl flex flex-col gap-4 group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 z-0" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[2s] pointer-events-none" />
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between px-4 relative z-10 shadow-lg"
              >
                <div className="w-1/4 h-3 rounded-full bg-slate-700 overflow-hidden relative">
                   <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-y-0 w-full bg-slate-600" />
                </div>
                <div className="flex gap-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                  </motion.div>
                </div>
              </motion.div>
              {/* Content Grid */}
              <div className="flex-1 grid grid-cols-3 gap-4 relative z-10">
                <div className="col-span-2 flex flex-col gap-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-4 shadow-xl flex flex-col relative overflow-hidden"
                  >
                    <div className="w-1/3 h-3 rounded-full bg-slate-700 mb-4" />
                    <div className="w-full flex-1 rounded bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-500/10 relative overflow-hidden flex items-end px-4 gap-2 pb-0">
                      {[30, 70, 50, 90, 60, 80, 40].map((h, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [`${h}%`, `${Math.max(20, h - 20)}%`, `${Math.min(100, h + 10)}%`, `${h}%`] }}
                          transition={{ repeat: Infinity, duration: 3, delay: i * 0.2, ease: "easeInOut" }}
                          className="flex-1 bg-emerald-500/30 rounded-t-sm border-t border-emerald-400/50"
                        />
                      ))}
                      <motion.div animate={{ opacity: [0, 1, 0], y: ["100%", "-100%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                  <div className="flex gap-4 h-24">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-3 shadow-md flex flex-col justify-center relative overflow-hidden"
                    >
                      <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute inset-y-0 w-1/2 bg-emerald-500/5 skew-x-12" />
                      <div className="w-1/2 h-2 rounded-full bg-slate-600 mb-3 relative z-10" />
                      <div className="w-3/4 h-4 rounded-full bg-emerald-400/20 overflow-hidden relative z-10">
                         <motion.div animate={{ x: ["-100%", "0%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-full h-full bg-emerald-400/50" />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-3 shadow-md flex flex-col justify-center relative overflow-hidden"
                    >
                      <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "linear" }} className="absolute inset-y-0 w-1/2 bg-teal-500/5 skew-x-12" />
                      <div className="w-1/2 h-2 rounded-full bg-slate-600 mb-3 relative z-10" />
                      <div className="w-3/4 h-4 rounded-full bg-teal-400/20 overflow-hidden relative z-10">
                         <motion.div animate={{ x: ["-100%", "0%"] }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }} className="w-full h-full bg-teal-400/50" />
                      </div>
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="col-span-1 bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-3 shadow-xl overflow-hidden relative"
                >
                  <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-emerald-500/5" />
                  <div className="w-1/2 h-3 rounded-full bg-slate-700 mb-4 relative z-10" />
                  {[1,2,3,4,5].map((i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + (i * 0.1) }}
                      className="w-full h-8 rounded-lg bg-slate-800/50 flex items-center px-3 gap-2 relative z-10 overflow-hidden"
                    >
                      <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }} className="w-3 h-3 rounded-full bg-emerald-400" />
                      <div className="h-2 flex-1 rounded-full bg-slate-700 overflow-hidden relative">
                         <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3, ease: "linear" }} className="w-full h-full bg-slate-600" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Excellence</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Off-the-shelf software often forces you to change your processes. We build software that adapts to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: "Custom ERPs", desc: "Integrate all facets of an operation, including product planning, development, manufacturing, and sales." },
              { icon: LayoutDashboard, title: "CRM Systems", desc: "Track leads, manage pipelines, and improve customer retention with tailored workflows." },
              { icon: BarChart3, title: "Business Intelligence", desc: "Custom reporting dashboards that turn raw operational data into strategic insights." },
              { icon: Database, title: "Legacy Migration", desc: "Modernize outdated systems securely without losing historical data or causing downtime." },
              { icon: Key, title: "Role-Based Access", desc: "Granular permission systems to ensure data privacy across different departments." },
              { icon: Building2, title: "Internal Tools", desc: "Admin panels and workflow automation apps that make your team 10x more efficient." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Enterprise Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["Next.js", "Java Spring", "PostgreSQL", "React", "GraphQL", "Retool", "Snowflake", "Docker"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-emerald-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
