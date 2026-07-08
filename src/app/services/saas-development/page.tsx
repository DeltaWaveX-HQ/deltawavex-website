"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cloud, Shield, Database, Lock, Settings, Users } from "lucide-react";

export default function SaaSDevelopmentPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
              <Cloud className="w-4 h-4" />
              <span>Enterprise SaaS</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">SaaS Platforms</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              We design and build end-to-end multi-tenant SaaS products complete with subscription management, advanced analytics, and enterprise-grade security.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 font-bold text-white shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.4)] transition-shadow">
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
            {/* Abstract visual representation of a SaaS Dashboard */}
            <div className="aspect-[4/3] rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4 relative overflow-hidden shadow-2xl flex gap-4 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-violet-500/10 z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[2s] pointer-events-none" />
              {/* Sidebar */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-16 md:w-24 h-full rounded-xl bg-slate-950 border border-slate-800 relative z-10 flex flex-col items-center py-6 gap-6 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.2)]"
              >
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center mb-4 border border-purple-500/40">
                  <Cloud className="w-4 h-4 text-purple-400" />
                </motion.div>
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-purple-500/20 transition-colors cursor-pointer relative overflow-hidden" 
                  >
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }} className="absolute inset-0 bg-purple-400/20" />
                  </motion.div>
                ))}
              </motion.div>
              {/* Main Content */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex-1 h-full rounded-xl bg-slate-950 border border-slate-800 relative z-10 p-4 md:p-6 flex flex-col gap-4 shadow-xl overflow-hidden"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-8 rounded-lg bg-gradient-to-r from-purple-600/20 to-violet-600/20 border border-purple-500/20 flex items-center px-3 overflow-hidden relative"
                >
                  <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-y-0 w-1/2 bg-purple-400/20 skew-x-12" />
                  <div className="w-1/2 h-2 bg-purple-400/30 rounded-full" />
                </motion.div>
                
                <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 + (i * 0.1), duration: 0.4 }}
                      className="w-1/3 h-20 rounded-xl bg-slate-800/40 border border-slate-700/30 p-3 flex flex-col justify-between overflow-hidden relative"
                    >
                      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }} className="absolute inset-0 bg-purple-500/5" />
                      <div className="w-1/2 h-2 bg-slate-600 rounded-full relative z-10" />
                      <div className="w-3/4 h-4 bg-slate-500 rounded-full overflow-hidden relative z-10">
                        <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }} className="w-full h-full bg-purple-400/40" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="flex-1 rounded-xl bg-slate-800/30 border border-slate-700/30 flex flex-col p-4 relative overflow-hidden"
                >
                   <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
                   <div className="w-1/4 h-3 bg-slate-600 rounded-full mb-6 relative z-10" />
                   <div className="flex-1 border-b-2 border-l-2 border-slate-700 relative flex items-end justify-around pb-0 px-2 z-10">
                     {[40, 70, 45, 90, 60].map((h, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         transition={{ delay: 1.6 + (i * 0.1), duration: 0.6, type: "spring" }}
                         className="w-8 md:w-12 rounded-t-sm bg-gradient-to-t from-purple-600/50 to-violet-400/80 border-t border-x border-purple-400/50 relative overflow-hidden"
                       >
                         <motion.div animate={{ y: ["100%", "-100%"] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2, ease: "linear" }} className="w-full h-1/2 bg-white/20 blur-sm" />
                       </motion.div>
                     ))}
                   </div>
                </motion.div>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core SaaS Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We implement the foundational features every SaaS needs so you can focus on your unique value proposition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Multi-Tenancy", desc: "Securely isolate data across different organizations and workspaces." },
              { icon: Settings, title: "Admin Dashboards", desc: "Comprehensive tools to manage users, roles, billing, and content." },
              { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliance readiness, SSO integration, and RBAC." },
              { icon: Lock, title: "Authentication", desc: "Passwordless login, MFA, and social providers built-in." },
              { icon: Database, title: "Subscription Billing", desc: "Stripe/Paddle integration for seamless MRR and usage-based billing." },
              { icon: Cloud, title: "Automated Deployments", desc: "Zero-downtime CI/CD pipelines for rapid feature iteration." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Our SaaS Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["Next.js App Router", "Supabase", "Stripe", "Clerk / Auth0", "PostgreSQL", "Redis", "Docker", "AWS ECS"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-purple-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
