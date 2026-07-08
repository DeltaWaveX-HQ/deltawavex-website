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
    gradient: "135deg, #2563EB, #06B6D4",
    glowColor: "rgba(37, 99, 235, 0.4)",
    glowHover: "rgba(37, 99, 235, 0.25)",
    borderHover: "rgba(37, 99, 235, 0.4)",
    iconBg: "linear-gradient(135deg, #2563EB, #06B6D4)",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications using Next.js, React, and modern web technologies that drive conversions.",
    gradient: "135deg, #06B6D4, #0EA5E9",
    glowColor: "rgba(6, 182, 212, 0.4)",
    glowHover: "rgba(6, 182, 212, 0.25)",
    borderHover: "rgba(6, 182, 212, 0.4)",
    iconBg: "linear-gradient(135deg, #06B6D4, #0EA5E9)",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "End-to-end SaaS platforms with subscription management, multi-tenancy, and enterprise-grade security.",
    gradient: "135deg, #8B5CF6, #7C3AED",
    glowColor: "rgba(139, 92, 246, 0.4)",
    glowHover: "rgba(139, 92, 246, 0.25)",
    borderHover: "rgba(139, 92, 246, 0.4)",
    iconBg: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI integrations, intelligent automation, and machine learning models powered by cutting-edge APIs.",
    gradient: "135deg, #EC4899, #F43F5E",
    glowColor: "rgba(236, 72, 153, 0.4)",
    glowHover: "rgba(236, 72, 153, 0.25)",
    borderHover: "rgba(236, 72, 153, 0.4)",
    iconBg: "linear-gradient(135deg, #EC4899, #F43F5E)",
  },
  {
    icon: Store,
    title: "Marketplace Platforms",
    description:
      "Two-sided marketplaces with vendor management, payments, reviews, and real-time communication.",
    gradient: "135deg, #F59E0B, #EF4444",
    glowColor: "rgba(245, 158, 11, 0.4)",
    glowHover: "rgba(245, 158, 11, 0.25)",
    borderHover: "rgba(245, 158, 11, 0.4)",
    iconBg: "linear-gradient(135deg, #F59E0B, #EF4444)",
  },
  {
    icon: Building2,
    title: "Business Software",
    description:
      "Custom ERP, CRM, and internal tools built for operational efficiency and business intelligence.",
    gradient: "135deg, #10B981, #059669",
    glowColor: "rgba(16, 185, 129, 0.4)",
    glowHover: "rgba(16, 185, 129, 0.25)",
    borderHover: "rgba(16, 185, 129, 0.4)",
    iconBg: "linear-gradient(135deg, #10B981, #059669)",
  },
  {
    icon: Server,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure on AWS and Firebase with CI/CD pipelines, monitoring, and 99.9% uptime.",
    gradient: "135deg, #0EA5E9, #2563EB",
    glowColor: "rgba(14, 165, 233, 0.4)",
    glowHover: "rgba(14, 165, 233, 0.25)",
    borderHover: "rgba(14, 165, 233, 0.4)",
    iconBg: "linear-gradient(135deg, #0EA5E9, #2563EB)",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Rapid MVP development to validate your idea in weeks. Ship fast, learn faster, and iterate with confidence.",
    gradient: "135deg, #7C3AED, #8B5CF6",
    glowColor: "rgba(124, 58, 237, 0.4)",
    glowHover: "rgba(124, 58, 237, 0.25)",
    borderHover: "rgba(124, 58, 237, 0.4)",
    iconBg: "linear-gradient(135deg, #7C3AED, #8B5CF6)",
  },
];

// Mouse-tracking 3D tilt card
function TiltCard({
  children,
  service,
  className,
  style,
}: {
  children: React.ReactNode;
  service: (typeof services)[0];
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -9;
    const rotY = ((x - cx) / cx) * 9;
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px) scale(1.02)`;
    card.style.setProperty("--glow-x", `${glowX}%`);
    card.style.setProperty("--glow-y", `${glowY}%`);
    card.style.boxShadow = `0 0 30px ${service.glowHover}, 0 0 60px ${service.glowHover}, 0 20px 60px rgba(0,0,0,0.4)`;
    card.style.borderColor = service.borderHover;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)";
    card.style.boxShadow = "none";
    card.style.borderColor = "rgba(255,255,255,0.06)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.35s cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 0.35s ease, border-color 0.35s ease",
        willChange: "transform",
        ...style,
      }}
    >
      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 200px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.04) 0%, transparent 80%)",
        }}
      />
      {children}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section
      id="services"
      className="pt-24 pb-[10vh] lg:pt-32 lg:pb-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Section glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.06) 0%, transparent 70%)" }}
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
              color: "#60A5FA",
              background: "rgba(37, 99, 235, 0.08)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
            }}
          >
            What We Build
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Services Built for{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to deployment, we deliver premium digital products
            across every platform and technology.
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
              <motion.div key={index} variants={cardVariants} className="group">
                <TiltCard
                  service={service}
                  className="relative rounded-2xl p-6 cursor-pointer h-full overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  } as React.CSSProperties}
                >
                  {/* Top highlight line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(${service.gradient})` }}
                  />

                  {/* Icon */}
                  <div
                    className="inline-flex p-3 rounded-xl mb-5 shadow-lg"
                    style={{
                      background: service.iconBg,
                      boxShadow: `0 0 20px ${service.glowColor}40, 0 4px 16px rgba(0,0,0,0.3)`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-base mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom arrow */}
                  <div
                    className="mt-5 text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                    style={{ color: "#60A5FA" }}
                  >
                    Learn more
                    <span>→</span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
