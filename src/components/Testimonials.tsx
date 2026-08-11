"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder",
    company: "Zomico Marketplace",
    avatar: "AM",
    avatarColor: "from-blue-500 to-cyan-500",
    text: "DeltaWaveX didn't just build our app — they built our business foundation. The quality of the design, the robustness of the backend, and the speed of delivery were all exceptional. We went from concept to a live scaling product in record time.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder",
    company: "ShootKaro Booking",
    avatar: "PS",
    avatarColor: "from-purple-500 to-pink-500",
    text: "Working with DeltaWaveX felt like having an elite product team in-house. Their attention to detail in the UI, the seamless booking workflow, and their technical responsiveness throughout the project were outstanding.",
    rating: 5,
  },
  {
    name: "Raj Kapoor",
    role: "CEO",
    company: "RetailPro Solutions",
    avatar: "RK",
    avatarColor: "from-emerald-500 to-teal-500",
    text: "Inventory Pro transformed how we manage stock across multiple warehouses. The real-time integration saved us hours every week. DeltaWaveX understood our complex workflow needs and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Product Lead",
    company: "Analytics SaaS",
    avatar: "SP",
    avatarColor: "from-orange-500 to-amber-500",
    text: "The AI workflow integration built for our platform improved user engagement significantly. DeltaWaveX brought both technical depth and product-first engineering discipline to the table.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  // Autoplay with hover pause
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      next();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  // Keyboard arrow keys navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-transparent relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.05) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            CLIENT STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3.5">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Real feedback from founders and engineering leaders we&apos;ve partnered with to build digital products.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Client testimonials carousel. Use left and right arrow keys to navigate."
        >
          {/* Card Frame */}
          <div className="bg-slate-900/85 border border-white/10 rounded-3xl p-7 sm:p-9 lg:p-10 backdrop-blur-md shadow-xl relative overflow-hidden min-h-[220px] flex flex-col justify-between">
            {/* Top gradient highlight line */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${t.avatarColor} transition-all duration-500`} />

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -40) next();
                  else if (offset.x > 40) prev();
                }}
                className="flex flex-col justify-between h-full cursor-grab active:cursor-grabbing"
              >
                <div>
                  {/* Subtle 5-Star Rating */}
                  <div className="flex gap-1 mb-4" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]" />
                    ))}
                  </div>

                  {/* Clean Quote Block */}
                  <blockquote className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-normal italic">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                </div>

                {/* Compact Client Attribution */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} p-0.5 shadow-md flex-shrink-0`}
                  >
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-white font-bold text-xs font-mono">
                      {t.avatar}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm lg:text-base leading-snug">{t.name}</div>
                    <div className="text-slate-400 text-xs">
                      {t.role} &bull; <span className="text-slate-500">{t.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Accessible Carousel Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <button
              id="testimonial-prev"
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    i === current
                      ? "w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
