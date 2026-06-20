"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const floatingCards = [
  {
    id: 1,
    title: "Mobile App",
    subtitle: "Flutter & React Native",
    icon: "📱",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    position: "top-[15%] left-[5%]",
    delay: 0,
  },
  {
    id: 2,
    title: "AI Solutions",
    subtitle: "OpenAI & TensorFlow",
    icon: "🤖",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    position: "top-[20%] right-[4%]",
    delay: 0.5,
  },
  {
    id: 3,
    title: "SaaS Platform",
    subtitle: "Scalable & Secure",
    icon: "⚡",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
    position: "bottom-[25%] left-[3%]",
    delay: 1,
  },
  {
    id: 4,
    title: "Cloud Native",
    subtitle: "AWS & Firebase",
    icon: "☁️",
    color: "from-emerald-500/20 to-cyan-500/20",
    border: "border-emerald-500/20",
    position: "bottom-[20%] right-[5%]",
    delay: 1.5,
  },
];

function FloatingCard({
  card,
}: {
  card: (typeof floatingCards)[0];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: card.delay + 1, duration: 0.7, ease: "easeOut" }}
      className={`absolute ${card.position} hidden xl:block`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4 + card.delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay,
        }}
        className={`glass rounded-2xl p-4 border ${card.border} bg-gradient-to-br ${card.color} backdrop-blur-xl w-48`}
      >
        <div className="text-2xl mb-2">{card.icon}</div>
        <div className="text-white font-semibold text-sm">{card.title}</div>
        <div className="text-slate-400 text-xs mt-0.5">{card.subtitle}</div>
        <div className="mt-3 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-medium">Active</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating UI Cards */}
      {floatingCards.map((card) => (
        <FloatingCard key={card.id} card={card} />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-blue-300 text-sm font-medium">
            Premium Technology Studio
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          Building Products{" "}
          <span className="gradient-text">That Scale</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We transform ideas into powerful digital products through mobile apps,
          web platforms, AI solutions, SaaS systems, and custom software
          development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            id="hero-start-project"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl gradient-bg text-white font-semibold text-base shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#products"
            id="hero-explore-work"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass border border-white/10 text-white font-semibold text-base hover:bg-white/5 transition-colors duration-200"
          >
            <Play className="w-4 h-4" />
            Explore Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: 3, suffix: "+", label: "Products Built" },
            { value: 100, suffix: "%", label: "Custom Development" },
            { value: 10, suffix: "+", label: "Technologies" },
            { value: 24, suffix: "/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
