"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Store, CreditCard, MessageSquare, ShieldCheck, BarChart, Users } from "lucide-react";

export default function MarketplacePlatformsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/20 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6">
              <Store className="w-4 h-4" />
              <span>Platform Engineering</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Two-Sided <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-400">Marketplaces</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              We engineer complex multi-vendor platforms with seamless payment routing, real-time messaging, and robust trust & safety mechanisms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 font-bold text-white shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.4)] transition-shadow">
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
            <div className="aspect-[4/3] rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4 relative overflow-hidden shadow-2xl flex flex-col gap-4 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-red-500/10 z-0" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-[2s] pointer-events-none" />
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full h-14 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between px-4 relative z-10 shadow-md overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                    <Store className="w-4 h-4 text-amber-400" />
                  </motion.div>
                  <div className="w-24 h-3 rounded-full bg-slate-700 overflow-hidden relative">
                    <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-full h-full bg-slate-600" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-6 rounded-full bg-slate-800 border border-amber-500/30" />
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-6 h-6 rounded-full bg-slate-800 border border-amber-500/30" />
                </div>
              </motion.div>
              <div className="flex-1 flex gap-4 relative z-10 h-full">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-1/3 md:w-1/4 h-full bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col gap-4 relative overflow-hidden"
                >
                  <div className="w-full h-2 rounded bg-slate-700 mb-2" />
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (i * 0.1) }}
                      className="w-full flex items-center gap-2"
                    >
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }} className="w-4 h-4 rounded bg-amber-500/50" />
                      <div className="h-2 rounded bg-slate-800 flex-1 overflow-hidden relative">
                        <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.3, ease: "linear" }} className="w-full h-full bg-slate-700" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="flex-1 h-full bg-slate-950 rounded-xl border border-slate-800 p-4 grid grid-cols-2 gap-4 overflow-hidden relative">
                  <motion.div animate={{ y: ["0%", "-50%", "0%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute inset-0 flex flex-col gap-4 p-4 w-full h-[200%]">
                    {[1,2,3,4,5,6].map((i) => (
                      <motion.div 
                        key={i}
                        className="rounded-lg bg-slate-900 border border-slate-800 p-2 flex flex-col gap-3 group relative overflow-hidden h-32"
                      >
                        <div className="w-full flex-1 rounded-md bg-gradient-to-br from-amber-600/10 to-red-600/10 border border-amber-500/10 group-hover:border-amber-500/30 transition-colors flex items-center justify-center relative overflow-hidden" >
                          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }} className="w-8 h-8 rounded-full bg-white/5" />
                        </div>
                        <div className="px-1 space-y-2">
                          <div className="w-3/4 h-2 rounded-full bg-slate-600" />
                          <div className="flex justify-between items-center">
                            <div className="w-1/3 h-2 rounded-full bg-amber-500/50" />
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }} className="w-4 h-4 rounded-full bg-emerald-500/50" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Scale & Trust</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Marketplaces require a delicate balance of buyer and seller features. We provide the technical foundation for liquidity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Vendor Dashboards", desc: "Dedicated portals for sellers to manage inventory, orders, and analytics." },
              { icon: CreditCard, title: "Split Payments", desc: "Complex payment routing and escrow using Stripe Connect." },
              { icon: MessageSquare, title: "Real-time Chat", desc: "In-app messaging to facilitate buyer-seller communication instantly." },
              { icon: ShieldCheck, title: "Trust & Safety", desc: "KYC/AML verification, review systems, and dispute resolution workflows." },
              { icon: Store, title: "Catalog Management", desc: "Advanced search, filtering, and taxonomy for massive product inventories." },
              { icon: BarChart, title: "Admin Insights", desc: "Global marketplace metrics, GMV tracking, and commission management." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Marketplace Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["Stripe Connect", "Algolia", "Sendbird", "Next.js", "GraphQL", "PostgreSQL", "Prisma", "Elasticsearch"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-amber-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
