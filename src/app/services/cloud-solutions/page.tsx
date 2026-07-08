"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Server, Cloud, Shield, Activity, HardDrive, RefreshCw, Layers } from "lucide-react";

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6">
              <Server className="w-4 h-4" />
              <span>DevOps & Cloud</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Cloud Architecture</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              We design, deploy, and manage highly available cloud infrastructures. From serverless microservices to complex Kubernetes clusters, we ensure 99.99% uptime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 font-bold text-white shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:shadow-[0_0_60px_rgba(14,165,233,0.4)] transition-shadow">
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
            {/* Abstract visual representation of servers/cloud */}
            <div className="aspect-[4/3] rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 relative overflow-hidden shadow-2xl flex flex-col justify-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 z-0" />
              
              {/* Server Racks */}
              <div className="flex flex-col gap-6 w-full z-10 relative">
                {[1,2,3].map((i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.2), duration: 0.5 }}
                    className="w-full h-16 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between px-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                  >
                    {/* Activity glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <div className="flex gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
                    </div>
                    <div className="flex gap-3 flex-1 px-8">
                      <div className="w-1/3 h-2 rounded-full bg-slate-800" />
                      <div className="w-1/4 h-2 rounded-full bg-slate-800" />
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (i * 0.2) }}
                      className="w-24 h-6 rounded-md bg-sky-500/20 border border-sky-500/30 flex items-center px-2 gap-1"
                    >
                      <div className="w-full h-1 bg-sky-400/50 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: i * 0.3 }}
                          className="w-1/2 h-full bg-sky-300"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Connecting lines overlay */}
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1, duration: 0.8 }} className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-sky-500/0 via-sky-500/50 to-blue-500/0 z-0 origin-top" />
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute top-0 right-16 w-px h-full bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-sky-500/0 z-0 origin-top" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure as a Competitive Advantage</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Stop worrying about servers. Let us automate your deployments and secure your data so your team can focus on shipping features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cloud, title: "Cloud Migration", desc: "Seamlessly transition your legacy systems to AWS, GCP, or Azure with zero data loss." },
              { icon: RefreshCw, title: "CI/CD Pipelines", desc: "Automate testing and deployment to ship updates securely multiple times a day." },
              { icon: Activity, title: "Monitoring & Alerting", desc: "24/7 observability with Datadog/Grafana to catch issues before your users do." },
              { icon: Layers, title: "Kubernetes & Docker", desc: "Containerize your applications for infinite scalability and environment consistency." },
              { icon: Shield, title: "Security & Compliance", desc: "Implement zero-trust architectures, WAFs, and automated vulnerability scanning." },
              { icon: HardDrive, title: "Database Optimization", desc: "Scaling strategies, read replicas, and caching layers for massive data workloads." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Our Cloud Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Datadog", "Cloudflare"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-sky-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
