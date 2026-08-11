"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Store,
  Building2,
  Server,
  Rocket,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps built with Flutter and React Native. Performant, beautiful, and user-centric.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.25)",
    borderColor: "rgba(59, 130, 246, 0.35)",
    accentText: "group-hover:text-blue-400",
    ctaColor: "text-blue-400",
    href: "/services/mobile-app",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications using Next.js, React, and modern web technologies that drive conversions.",
    gradient: "from-cyan-500 to-sky-500",
    glowColor: "rgba(6, 182, 212, 0.25)",
    borderColor: "rgba(6, 182, 212, 0.35)",
    accentText: "group-hover:text-cyan-400",
    ctaColor: "text-cyan-400",
    href: "/services/web-development",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "End-to-end SaaS platforms with subscription management, multi-tenancy, and enterprise-grade security.",
    gradient: "from-purple-500 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.25)",
    borderColor: "rgba(139, 92, 246, 0.35)",
    accentText: "group-hover:text-purple-400",
    ctaColor: "text-purple-400",
    href: "/services/saas-development",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI integrations, intelligent automation, and machine learning models powered by cutting-edge APIs.",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.25)",
    borderColor: "rgba(236, 72, 153, 0.35)",
    accentText: "group-hover:text-pink-400",
    ctaColor: "text-pink-400",
    href: "/services/ai-machine-learning",
  },
  {
    icon: Store,
    title: "Marketplace Platforms",
    description:
      "Two-sided marketplaces with vendor management, payments, reviews, and real-time communication.",
    gradient: "from-amber-500 to-rose-500",
    glowColor: "rgba(245, 158, 11, 0.25)",
    borderColor: "rgba(245, 158, 11, 0.35)",
    accentText: "group-hover:text-amber-400",
    ctaColor: "text-amber-400",
    href: "/services/marketplace-platforms",
  },
  {
    icon: Building2,
    title: "Business Software",
    description:
      "Custom ERP, CRM, and internal tools built for operational efficiency and business intelligence.",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.25)",
    borderColor: "rgba(16, 185, 129, 0.35)",
    accentText: "group-hover:text-emerald-400",
    ctaColor: "text-emerald-400",
    href: "/services/business-software",
  },
  {
    icon: Server,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure on AWS and Firebase with CI/CD pipelines, monitoring, and 99.9% uptime.",
    gradient: "from-sky-500 to-blue-500",
    glowColor: "rgba(14, 165, 233, 0.25)",
    borderColor: "rgba(14, 165, 233, 0.35)",
    accentText: "group-hover:text-sky-400",
    ctaColor: "text-sky-400",
    href: "/services/cloud-solutions",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Rapid MVP development to validate your idea in weeks. Ship fast, learn faster, and iterate with confidence.",
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(124, 58, 237, 0.25)",
    borderColor: "rgba(124, 58, 237, 0.35)",
    accentText: "group-hover:text-violet-400",
    ctaColor: "text-violet-400",
    href: "/services/startup-mvp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section
      id="services"
      className="py-10 lg:py-14 bg-transparent relative overflow-hidden"
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Section ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Services Built for <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to deployment, we deliver premium digital products
            across every platform and technology.
          </p>
        </motion.div>

        {/* 4-Column Cards Grid with Reduced Vertical Row Gap */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-6 gap-y-4 lg:gap-y-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div key={index} variants={cardVariants} className="group h-full">
                <Link
                  href={service.href}
                  className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <div
                    className="relative rounded-2xl p-6 lg:p-7 h-full flex flex-col justify-between bg-slate-900/85 border border-white/5 backdrop-blur-md hover:-translate-y-[3px] transition-all duration-250 ease-out motion-reduce:transition-none motion-reduce:transform-none shadow-md overflow-hidden"
                    style={{
                      // Soft border illumination using service accent color on hover
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = service.borderColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                    }}
                  >
                    {/* Top gradient highlight line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-250`}
                    />

                    <div>
                      {/* Icon Container with subtle, restrained glow */}
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-5 shadow-sm group-hover:scale-105 transition-transform duration-250 motion-reduce:transition-none`}
                        style={{
                          boxShadow: `0 0 12px ${service.glowColor}`,
                        }}
                      >
                        <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-5 h-5 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Card Title & Description */}
                      <h3 className={`text-white font-bold text-base lg:text-lg mb-2.5 leading-snug ${service.accentText} transition-colors duration-250`}>
                        {service.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Subtle Reveal Arrow CTA Indicator on Hover */}
                    <div className={`mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold ${service.ctaColor} opacity-75 group-hover:opacity-100 transition-all duration-250`}>
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-250 ease-out motion-reduce:transform-none" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
