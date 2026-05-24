"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Figma",
  "Canva",
  "UI/UX",
  "AI Workflows",
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="mb-12 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Tech Stack
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-6xl">
            Technologies &
            <span className="block text-neutral-500">
              creative tools I use.
            </span>
          </h2>
        </div>

        <Marquee speed={40} gradient={false} pauseOnHover>
          {tech.map((item, index) => (
            <div
              key={index}
              className="glass-card mx-4 rounded-full px-8 py-4 text-lg text-neutral-300"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
