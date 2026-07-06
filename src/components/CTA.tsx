"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Code, MessageSquare, Sparkles, Paperclip } from "lucide-react";

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(37, 99, 235, 0.12) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(37, 99, 235, 0.18)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(139, 92, 246, 0.18)" }}
      />

      {/* 3D Perspective grid at top */}
      <div className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden pointer-events-none" style={{ transform: "scaleY(-1)" }}>
        <div className="absolute bottom-0 left-0 right-0 h-full">
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "-30%",
              right: "-30%",
              height: "100%",
              backgroundImage: `
                linear-gradient(rgba(37, 99, 235, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37, 99, 235, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
              transform: "perspective(500px) rotateX(73deg)",
              transformOrigin: "center bottom",
              maskImage: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8"
              style={{
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.1)",
              }}
            >
              <div className="relative flex h-2 w-2">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </div>
              <span className="text-emerald-400 text-sm font-semibold">
                Currently Accepting Projects
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
              Whether you&apos;re launching a startup, scaling a business, or
              building the next big product — Delta Wave X is ready to help you
              make it a reality.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Free Discovery Call",
                "No Commitment Required",
                "24hr Response Time",
                "NDA Available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 lg:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                />
              </div>

              {/* Type of Software */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Code className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3.5 pl-12 pr-10 text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                >
                  <option value="" disabled>Select Software Type</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI / Machine Learning Solution</option>
                  <option value="saas">SaaS Platform</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative group">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                  <MessageSquare className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Project Details & Requirements..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                />
              </div>

              {/* File Upload */}
              <div className="relative group">
                <input
                  type="file"
                  id="file-upload"
                  accept=".pdf"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="w-full flex items-center justify-between bg-slate-900/50 border border-slate-800 border-dashed rounded-xl py-3 px-4 cursor-pointer hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group-focus-within:ring-2 ring-blue-500/50"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Paperclip className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    <span className="text-slate-400 truncate text-sm">
                      {fileName ? (
                        <span className="text-white font-medium">{fileName}</span>
                      ) : (
                        "Attach Project Brief (PDF optional)"
                      )}
                    </span>
                  </div>
                  <span className="text-xs font-medium bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Browse
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-white font-bold text-base relative overflow-hidden disabled:opacity-70"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #8B5CF6 100%)",
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)",
                }}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
