"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, Zomico",
    company: "Home Services Marketplace",
    avatar: "AM",
    avatarColor: "from-blue-500 to-cyan-500",
    text: "Delta Wave X didn't just build our app — they built our business. The quality of the design, the robustness of the backend, and the speed of delivery were all exceptional. We went from idea to live product in record time.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder, ShootKaro",
    company: "Photography Booking Platform",
    avatar: "PS",
    avatarColor: "from-purple-500 to-pink-500",
    text: "Working with Delta Wave X felt like having a world-class product team in-house. Their attention to detail in the UI, the seamless booking flow they designed, and their responsiveness throughout the project were outstanding.",
    rating: 5,
  },
  {
    name: "Raj Kapoor",
    role: "CEO, RetailPro Solutions",
    company: "Inventory & Billing Software",
    avatar: "RK",
    avatarColor: "from-emerald-500 to-teal-500",
    text: "Inventory Pro transformed how we manage stock across 5 warehouses. The Excel integration alone saved us 10+ hours a week. Delta Wave X understood our business needs perfectly and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Product Manager",
    company: "SaaS Startup",
    avatar: "SP",
    avatarColor: "from-orange-500 to-amber-500",
    text: "The AI integration they built for our platform completely changed our user retention metrics. Delta Wave X brought both technical depth and product thinking to the table — a rare combination.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="gradient-text">Founders & Teams</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-16 h-16 text-blue-400" />
            </div>

            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${t.avatarColor}`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-200 text-lg lg:text-xl leading-relaxed mb-8 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-slate-400 text-sm">{t.role}</div>
                    <div className="text-slate-500 text-xs">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev"
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-blue-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
