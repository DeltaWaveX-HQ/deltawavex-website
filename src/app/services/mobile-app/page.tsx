"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Smartphone, Code2, Rocket, Layout, Cpu, CheckCircle2 } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Mobile Engineering</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mobile Apps</span> Built for Scale
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              We craft high-performance, native and cross-platform mobile applications that captivate users and drive business growth. From concept to App Store launch, we ensure a seamless and premium mobile experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-shadow">
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
            {/* Abstract visual representation of a phone/app */}
            <div className="aspect-[4/5] rounded-[3rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 z-0" />
              <div className="h-full w-full rounded-[2.5rem] bg-slate-950 border border-slate-800 relative z-10 overflow-hidden flex flex-col">
                <div className="h-12 w-full flex justify-center items-end pb-2 relative">
                  <div className="absolute top-2 right-6 flex gap-2">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <div className="w-24 h-6 bg-slate-900 rounded-b-xl border-x border-b border-slate-800" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-[2s] pointer-events-none" />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-full h-32 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center shadow-[inset_0_0_20px_rgba(37,99,235,0.1)] relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <Smartphone className="w-10 h-10 text-blue-400" />
                    </motion.div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-900/50 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-1/2 h-full bg-cyan-400"
                      />
                    </div>
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="w-1/2 h-24 rounded-2xl bg-slate-800/50 flex flex-col justify-center items-center gap-3 border border-slate-700/50 relative overflow-hidden"
                    >
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center border border-slate-600 border-t-blue-500">
                        <div className="w-4 h-4 rounded-sm bg-blue-400/40" />
                      </motion.div>
                      <div className="w-12 h-2 rounded-full bg-slate-700 overflow-hidden">
                        <motion.div animate={{ width: ["0%", "100%", "0%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="h-full bg-blue-500/50" />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="w-1/2 h-24 rounded-2xl bg-slate-800/50 flex flex-col justify-center items-center gap-3 border border-slate-700/50 relative overflow-hidden"
                    >
                      <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center border border-slate-600 border-t-cyan-500">
                        <div className="w-4 h-4 rounded-full bg-cyan-400/40" />
                      </motion.div>
                      <div className="w-12 h-2 rounded-full bg-slate-700 overflow-hidden">
                        <motion.div animate={{ width: ["100%", "0%", "100%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="h-full bg-cyan-500/50" />
                      </div>
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="w-full flex-1 rounded-2xl bg-slate-800/30 border border-slate-700/30 p-5 flex flex-col gap-3 relative overflow-hidden"
                  >
                    <motion.div animate={{ opacity: [0, 0.1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-blue-500" />
                    <div className="flex items-center gap-3 mb-2 relative z-10">
                      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30" />
                      <div className="flex-1 space-y-2">
                        <div className="w-1/2 h-2 rounded-full bg-slate-600" />
                        <div className="w-1/4 h-2 rounded-full bg-slate-700" />
                      </div>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700/50" />
                    <div className="w-5/6 h-2 rounded-full bg-slate-700/50" />
                    <div className="w-4/6 h-2 rounded-full bg-slate-700/50" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Mobile Solutions?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We combine cutting-edge technology with stunning design to deliver apps that stand out in crowded app stores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layout, title: "Stunning UI/UX", desc: "Pixel-perfect designs with fluid animations that keep users engaged." },
              { icon: Cpu, title: "High Performance", desc: "Optimized for speed and battery life, ensuring a smooth experience." },
              { icon: Code2, title: "Clean Codebase", desc: "Maintainable and scalable architecture built with modern frameworks." },
              { icon: Smartphone, title: "Cross-Platform", desc: "Write once, run anywhere with React Native and Flutter." },
              { icon: Rocket, title: "Rapid Development", desc: "Agile methodologies to get your MVP to market faster." },
              { icon: CheckCircle2, title: "Rigorous QA", desc: "Comprehensive testing on real devices for a bug-free launch." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Our Mobile Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "Tailwind"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-blue-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
