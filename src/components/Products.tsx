"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const products = [
  {
    name: "Zomico",
    tagline: "Home Services Marketplace",
    description:
      "Premium home services marketplace connecting customers with trusted professionals for every home need.",
    emoji: "🏠",
    features: ["Customer App", "Technician App", "Admin Dashboard"],
    gradient: "from-blue-600 via-cyan-500 to-blue-700",
    accentColor: "blue",
    bgPattern: "from-blue-950/50 to-slate-900/80",
    stats: [
      { label: "Platforms", value: "3" },
      { label: "Services", value: "20+" },
      { label: "Users", value: "Multi" },
    ],
  },
  {
    name: "ShootKaro",
    tagline: "Photographer Booking Platform",
    description:
      "Discover and book talented photographers for events, portraits, weddings, and professional shoots.",
    emoji: "📸",
    features: ["Photographer Discovery", "Booking System", "Event Scheduling"],
    gradient: "from-purple-600 via-pink-500 to-violet-700",
    accentColor: "purple",
    bgPattern: "from-purple-950/50 to-slate-900/80",
    stats: [
      { label: "Categories", value: "10+" },
      { label: "Booking Flow", value: "Smart" },
      { label: "Scheduling", value: "Real-time" },
    ],
  },
  {
    name: "Inventory Pro",
    tagline: "Business Inventory Software",
    description:
      "Powerful inventory and billing software for warehouses, retailers, and small businesses to manage stock seamlessly.",
    emoji: "📦",
    features: ["Excel Import/Export", "Stock Tracking", "Billing Management"],
    gradient: "from-emerald-600 via-teal-500 to-green-700",
    accentColor: "emerald",
    bgPattern: "from-emerald-950/50 to-slate-900/80",
    stats: [
      { label: "Reports", value: "Auto" },
      { label: "Import", value: "Excel" },
      { label: "Tracking", value: "Live" },
    ],
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Products We've{" "}
            <span className="gradient-text">Launched</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From marketplaces to SaaS platforms — real products shipped for real businesses.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative h-full bg-slate-900/60 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${product.gradient}`} />

                {/* Card Header */}
                <div className={`relative p-8 pb-6 bg-gradient-to-br ${product.bgPattern}`}>
                  {/* Icon */}
                  <div className="text-5xl mb-4">{product.emoji}</div>

                  {/* Name & tagline */}
                  <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                  <span
                    className={`inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white mb-4`}
                  >
                    {product.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                </div>

                {/* Features */}
                <div className="px-8 py-5 border-t border-white/5">
                  <div className="space-y-2.5">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="px-8 py-5 border-t border-white/5 grid grid-cols-3 gap-3">
                  {product.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-slate-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
