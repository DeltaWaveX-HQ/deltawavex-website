"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Brain, Cpu, Sparkles, Workflow, Zap, Network } from "lucide-react";

export default function AIMachineLearningPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-pink-500/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-600/20 blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-6">
              <Brain className="w-4 h-4" />
              <span>Artificial Intelligence</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">AI Solutions</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              Transform your business with custom LLM integrations, predictive analytics, and automated workflows. We turn cutting-edge AI research into practical business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 font-bold text-white shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.4)] transition-shadow">
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
            {/* Abstract visual representation of a Neural Network */}
            <div className="aspect-square rounded-[3rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 relative overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 z-0" />
              <div className="relative z-10 w-full h-full">
                {/* Neural net nodes */}
                <motion.div animate={{ y: ["0%", "-20%", "0%"] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full shadow-[0_0_15px_#f472b6] z-10" />
                <motion.div animate={{ y: ["0%", "20%", "0%"] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }} className="absolute top-1/2 left-1/6 w-4 h-4 bg-rose-400 rounded-full shadow-[0_0_15px_#fb7185] z-10" />
                <motion.div animate={{ y: ["0%", "-10%", "0%"] }} transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }} className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full shadow-[0_0_15px_#f472b6] z-10" />
                
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute top-1/3 left-1/2 w-6 h-6 bg-pink-500 rounded-full shadow-[0_0_20px_#ec4899] z-10" />
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5, ease: "easeInOut" }} className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-rose-500 rounded-full shadow-[0_0_20px_#f43f5e] z-10" />
                
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-[0_0_30px_#e11d48] z-10 flex items-center justify-center">
                  <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
                  <Sparkles className="w-4 h-4 text-white relative z-10" />
                </motion.div>
                
                {/* Connecting lines SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-60 z-0" preserveAspectRatio="none">
                  <motion.path animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} d="M 25% 25% L 50% 33%" stroke="#f472b6" strokeWidth="2" fill="none" />
                  <motion.path animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} d="M 16% 50% L 50% 33%" stroke="#fb7185" strokeWidth="2" fill="none" />
                  <motion.path animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }} d="M 25% 75% L 50% 66%" stroke="#f472b6" strokeWidth="2" fill="none" />
                  <motion.path animate={{ strokeDashoffset: [100, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} strokeDasharray="10 10" d="M 50% 33% L 75% 50%" stroke="#ec4899" strokeWidth="3" fill="none" />
                  <motion.path animate={{ strokeDashoffset: [100, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} strokeDasharray="10 10" d="M 50% 66% L 75% 50%" stroke="#f43f5e" strokeWidth="3" fill="none" />
                </svg>
                {/* Data packets flowing */}
                <motion.div animate={{ x: ["25%", "50%"], y: ["25%", "33%"], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] z-20" />
                <motion.div animate={{ x: ["16%", "50%"], y: ["50%", "33%"], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] z-20" />
                <motion.div animate={{ x: ["50%", "75%"], y: ["66%", "50%"], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }} className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] z-20" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pioneering AI Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Leverage state-of-the-art models to automate tasks, generate content, and uncover hidden insights in your data.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Generative AI", desc: "Custom ChatGPT-like experiences, image generation, and creative automation." },
              { icon: Network, title: "RAG Systems", desc: "Retrieval-Augmented Generation to make AI chat accurately with your private data." },
              { icon: Cpu, title: "Computer Vision", desc: "Object detection, facial recognition, and automated visual inspections." },
              { icon: Workflow, title: "Agentic Workflows", desc: "Autonomous AI agents that execute complex, multi-step business processes." },
              { icon: Zap, title: "Predictive Analytics", desc: "Forecast trends, churn, and revenue using advanced machine learning." },
              { icon: Brain, title: "NLP Models", desc: "Sentiment analysis, text summarization, and intelligent document processing." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Our AI Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["OpenAI", "Anthropic", "LangChain", "LlamaIndex", "Pinecone", "Hugging Face", "PyTorch", "TensorFlow"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-pink-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
