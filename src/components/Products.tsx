"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Zomico",
    tagline: "Home Services Marketplace",
    description:
      "Premium home services marketplace connecting customers with trusted professionals for every home need.",
    emoji: "🏠",
    features: ["Customer App", "Technician App", "Admin Dashboard"],
    gradient: "135deg, #2563EB 0%, #06B6D4 50%, #2563EB 100%",
    glowColor: "rgba(37, 99, 235, 0.35)",
    accentRgb: "37, 99, 235",
    badgeBg: "linear-gradient(135deg, #2563EB, #06B6D4)",
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
    gradient: "135deg, #7C3AED 0%, #EC4899 50%, #7C3AED 100%",
    glowColor: "rgba(139, 92, 246, 0.35)",
    accentRgb: "139, 92, 246",
    badgeBg: "linear-gradient(135deg, #7C3AED, #EC4899)",
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
    gradient: "135deg, #059669 0%, #06B6D4 50%, #059669 100%",
    glowColor: "rgba(16, 185, 129, 0.35)",
    accentRgb: "16, 185, 129",
    badgeBg: "linear-gradient(135deg, #059669, #06B6D4)",
    stats: [
      { label: "Reports", value: "Auto" },
      { label: "Import", value: "Excel" },
      { label: "Tracking", value: "Live" },
    ],
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section
      id="products"
      className="pt-8 pb-[10vh] lg:pt-12 lg:pb-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Large background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.08) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-2 rounded-full"
            style={{
              color: "#C084FC",
              background: "rgba(139, 92, 246, 0.08)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Products We&apos;ve{" "}
            <span className="gradient-text">Launched</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From marketplaces to SaaS platforms — real products shipped for
            real businesses.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative"
            >
              <div
                className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px) scale(1.01)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${product.glowColor}, 0 0 80px ${product.glowColor}50, 0 30px 80px rgba(0,0,0,0.5)`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${product.accentRgb}, 0.35)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* Animated shimmer top bar */}
                <div className="relative h-1.5 w-full overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(${product.gradient})`, backgroundSize: "200% 100%" }}
                  />
                  {/* Shimmer sweep on the bar */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 + index }}
                    className="absolute inset-y-0 w-1/2 skew-x-12"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}
                  />
                </div>

                {/* Card Header */}
                <div
                  className="relative p-8 pb-6"
                  style={{
                    background: `radial-gradient(ellipse at top left, rgba(${product.accentRgb}, 0.08) 0%, transparent 70%)`,
                  }}
                >
                  {/* Top highlight */}
                  <div
                    className="absolute top-0 left-8 right-8 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(${product.accentRgb}, 0.3), transparent)`,
                    }}
                  />

                  {/* Emoji with glow */}
                  <div className="text-5xl mb-5 drop-shadow-lg filter">
                    {product.emoji}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-black text-white mb-2">
                    {product.name}
                  </h3>

                  {/* Tagline badge */}
                  <span
                    className="inline-block text-xs font-bold tracking-wide px-3 py-1.5 rounded-full text-white mb-4"
                    style={{
                      background: product.badgeBg,
                      boxShadow: `0 0 15px rgba(${product.accentRgb}, 0.3)`,
                    }}
                  >
                    {product.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div
                  className="px-8 py-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="space-y-2.5">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: `rgba(${product.accentRgb}, 1)` }}
                        />
                        <span className="text-slate-300 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div
                  className="px-8 py-5 grid grid-cols-3 gap-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  {product.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="font-black text-lg"
                        style={{
                          background: `linear-gradient(${product.gradient})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-slate-600 text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* View Project link */}
                <div
                  className="px-8 pb-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                  style={{ color: `rgba(${product.accentRgb}, 1)` }}
                >
                  <span className="text-xs font-bold tracking-wide">View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                {/* Large hover glow overlay */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, rgba(${product.accentRgb}, 0.06) 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
