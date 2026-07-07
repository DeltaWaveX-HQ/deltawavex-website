"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const techStack = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20",
    hoverBg: "hover:bg-blue-500/5",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", desc: "UI Library" },
      { name: "Next.js", icon: "/next.svg", desc: "Web Framework" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", desc: "Mobile Apps" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", desc: "Cross Platform" },
    ],
  },
  {
    category: "Backend",
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500/20",
    hoverBg: "hover:bg-purple-500/5",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", desc: "Runtime" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", desc: "Backend-as-a-Service" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", desc: "Database" },
    ],
  },
  {
    category: "AI",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/20",
    hoverBg: "hover:bg-pink-500/5",
    techs: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", desc: "AI Language" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", desc: "ML Framework" },
      { name: "OpenAI APIs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg", desc: "Generative AI" },
    ],
  },
  {
    category: "Cloud",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/20",
    hoverBg: "hover:bg-emerald-500/5",
    techs: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", desc: "Cloud Platform" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", desc: "Realtime Cloud" },
      { name: "Vercel", icon: "/vercel.svg", desc: "Edge Deployment" },
    ],
  },
];

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="technologies"
      className="py-24 lg:py-32 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
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
          <span className="inline-block text-sm font-semibold text-cyan-400 tracking-widest uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Powered by{" "}
            <span className="gradient-text">Modern Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We leverage the best tools in the industry to deliver fast, scalable, and maintainable software.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStack.map((stack, stackIndex) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
              className={`bg-slate-900/60 border ${stack.borderColor} rounded-2xl p-6 hover:bg-slate-900/80 transition-all duration-300`}
              onMouseEnter={() => setActiveCategory(stack.category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Category Header */}
              <div className="mb-5">
                <div className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-gradient-to-r ${stack.color} text-white mb-3`}>
                  {stack.category}
                </div>
                <div className={`h-0.5 w-full bg-gradient-to-r ${stack.color} rounded-full opacity-30`} />
              </div>

              {/* Tech Items */}
              <div className="space-y-3">
                {stack.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: stackIndex * 0.1 + techIndex * 0.05 + 0.2 }}
                    className={`group relative flex items-center gap-3 p-3 rounded-xl ${stack.hoverBg} transition-colors duration-200 cursor-default border border-transparent hover:border-white/5 overflow-hidden`}
                  >
                    {/* Magnetic Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stack.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 z-0`} />
                    
                    <div className="relative w-6 h-6 flex-shrink-0 z-10 flex items-center justify-center">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        fill
                        sizes="24px"
                        className="object-contain transition-transform duration-300 group-hover:scale-110" 
                        style={{ filter: ['Next.js', 'Vercel', 'OpenAI APIs', 'AWS'].includes(tech.name) ? 'brightness(0) invert(1)' : 'none' }}
                      />
                    </div>
                    <div className="z-10 relative">
                      <div className="text-white text-sm font-semibold leading-none mb-0.5">
                        {tech.name}
                      </div>
                      <div className="text-slate-500 text-xs">{tech.desc}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Many More Item */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: stackIndex * 0.1 + stack.techs.length * 0.05 + 0.2 }}
                  className={`flex items-center gap-3 p-3 rounded-xl ${stack.hoverBg} transition-colors duration-200 cursor-default border border-transparent hover:border-white/5`}
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 text-slate-400 bg-slate-800/50 rounded-full border border-slate-700/50">
                    <span className="text-xs font-bold leading-none mb-1">+</span>
                  </div>
                  <div>
                    <div className="text-slate-300 text-sm font-semibold leading-none mb-0.5">
                      Many more...
                    </div>
                    <div className="text-slate-600 text-xs">Other modern tools</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
