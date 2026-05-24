"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Projects Built",
  },

  {
    number: "10+",
    label: "Technologies",
  },

  {
    number: "5+",
    label: "Hackathons",
  },

  {
    number: "2+",
    label: "Years Learning",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[60px] md:blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-center"
          >
            <h2 className="text-3xl md:text-6xl font-medium tracking-tight">
              {stat.number}
            </h2>

            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
