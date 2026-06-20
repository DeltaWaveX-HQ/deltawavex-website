"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Store,
  Building2,
  Server,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps built with Flutter and React Native. Performant, beautiful, and user-centric.",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20",
    border: "group-hover:border-blue-500/30",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications using Next.js, React, and modern web technologies that drive conversions.",
    color: "from-cyan-500 to-teal-500",
    glow: "group-hover:shadow-cyan-500/20",
    border: "group-hover:border-cyan-500/30",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "End-to-end SaaS platforms with subscription management, multi-tenancy, and enterprise-grade security.",
    color: "from-purple-500 to-violet-500",
    glow: "group-hover:shadow-purple-500/20",
    border: "group-hover:border-purple-500/30",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI integrations, intelligent automation, and machine learning models powered by cutting-edge APIs.",
    color: "from-pink-500 to-rose-500",
    glow: "group-hover:shadow-pink-500/20",
    border: "group-hover:border-pink-500/30",
  },
  {
    icon: Store,
    title: "Marketplace Platforms",
    description:
      "Two-sided marketplaces with vendor management, payments, reviews, and real-time communication.",
    color: "from-orange-500 to-amber-500",
    glow: "group-hover:shadow-orange-500/20",
    border: "group-hover:border-orange-500/30",
  },
  {
    icon: Building2,
    title: "Business Software",
    description:
      "Custom ERP, CRM, and internal tools built for operational efficiency and business intelligence.",
    color: "from-emerald-500 to-green-500",
    glow: "group-hover:shadow-emerald-500/20",
    border: "group-hover:border-emerald-500/30",
  },
  {
    icon: Server,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure on AWS and Firebase with CI/CD pipelines, monitoring, and 99.9% uptime.",
    color: "from-sky-500 to-blue-500",
    glow: "group-hover:shadow-sky-500/20",
    border: "group-hover:border-sky-500/30",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Rapid MVP development to validate your idea in weeks. Ship fast, learn faster, and iterate with confidence.",
    color: "from-violet-500 to-purple-500",
    glow: "group-hover:shadow-violet-500/20",
    border: "group-hover:border-violet-500/30",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">
            What We Build
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Services Built for{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver premium digital products across every platform and technology.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative bg-slate-900/50 border border-white/5 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-slate-900/80 hover:shadow-xl ${service.glow} ${service.border} hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
