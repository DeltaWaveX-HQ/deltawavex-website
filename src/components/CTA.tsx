"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Currently Accepting Projects</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you&apos;re launching a startup, scaling a business, or building the next big product — Delta Wave X is ready to help you make it a reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="mailto:hello@deltawavex.com"
              id="cta-book-consultation"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl gradient-bg text-white font-semibold text-base shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
            >
              <CalendarDays className="w-4 h-4" />
              Book Consultation
            </motion.a>
            <motion.a
              href="mailto:hello@deltawavex.com"
              id="cta-contact-us"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass border border-white/10 text-white font-semibold text-base hover:bg-white/5 transition-colors duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
            {[
              "✦ Free Discovery Call",
              "✦ No Commitment Required",
              "✦ 24hr Response Time",
              "✦ NDA Available",
            ].map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
