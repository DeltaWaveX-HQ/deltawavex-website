"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const techStack = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    hoverBorder: "hover:border-blue-500/35",
    accentColor: "group-hover:text-blue-400",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", desc: "UI Library" },
      { name: "Next.js", icon: "/next.svg", desc: "Web Framework", invert: true },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", desc: "Type-safe Development" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", desc: "Mobile Apps" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", desc: "Cross Platform" },
    ],
  },
  {
    category: "Backend",
    color: "from-purple-500 to-violet-500",
    hoverBorder: "hover:border-purple-500/35",
    accentColor: "group-hover:text-purple-400",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", desc: "Runtime" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", desc: "API Framework", invert: true },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", desc: "Database" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", desc: "ORM", invert: true },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", desc: "Backend Services" },
    ],
  },
  {
    category: "AI / ML",
    color: "from-pink-500 to-rose-500",
    hoverBorder: "hover:border-pink-500/35",
    accentColor: "group-hover:text-pink-400",
    techs: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", desc: "AI & ML" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", desc: "ML Framework" },
      { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", desc: "Machine Learning" },
      { name: "OpenAI APIs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg", desc: "Generative AI", invert: true },
      { name: "Gemini APIs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg", desc: "Generative AI", invert: true },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-emerald-500 to-teal-500",
    hoverBorder: "hover:border-emerald-500/35",
    accentColor: "group-hover:text-emerald-400",
    techs: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", desc: "Cloud Platform", invert: true },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", desc: "Cloud Backend" },
      { name: "Vercel", icon: "/vercel.svg", desc: "Edge Deployment", invert: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", desc: "Containerization" },
      { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", desc: "Automated Deployment" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section
      id="technologies"
      className="py-18 lg:py-26 bg-transparent relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase mb-3 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Powered by <span className="gradient-text">Modern Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We choose proven technologies to build fast, scalable, and maintainable digital products.
          </p>
        </motion.div>

        {/* 4-Column Tech Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {techStack.map((stack) => (
            <motion.div
              key={stack.category}
              variants={cardVariants}
              className={`bg-slate-900/85 border border-white/5 ${stack.hoverBorder} rounded-2xl p-6 lg:p-7 backdrop-blur-md transition-all duration-250 ease-out shadow-md flex flex-col justify-between h-full group/card`}
            >
              {/* Category Header */}
              <div>
                <div className="mb-5">
                  <div className={`inline-block text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-gradient-to-r ${stack.color} text-white mb-3 shadow-sm`}>
                    {stack.category}
                  </div>
                  <div className={`h-0.5 w-full bg-gradient-to-r ${stack.color} rounded-full opacity-30`} />
                </div>

                {/* Tech Items List */}
                <div className="space-y-2">
                  {stack.techs.map((tech) => (
                    <div
                      key={tech.name}
                      tabIndex={0}
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/50 focus:bg-slate-800/50 transition-all duration-250 ease-out cursor-default transform hover:translate-x-[3px] focus:translate-x-[3px] focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 motion-reduce:transform-none"
                    >
                      <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <Image 
                          src={tech.icon} 
                          alt={tech.name} 
                          fill
                          sizes="20px"
                          className="object-contain opacity-85 group-hover:opacity-100 transition-all duration-250 group-hover:scale-105 motion-reduce:transform-none" 
                          style={{ filter: tech.invert ? 'brightness(0) invert(1)' : 'none' }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-white text-sm font-semibold leading-tight ${stack.accentColor} transition-colors duration-250 truncate`}>
                          {tech.name}
                        </div>
                        <div className="text-slate-400 text-xs truncate mt-0.5">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
