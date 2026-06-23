"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Click Aloysius",
    description:
      "A focused product direction for campus-related digital workflows and student-facing utility.",
    tag: "Campus UX",
  },
  {
    title: "AI Portfolio Assistant",
    description:
      "An interactive assistant that helps visitors explore projects, skills, and contact options quickly.",
    tag: "AI Experience",
  },
  {
    title: "Department Resource Hub",
    description:
      "A centralized place for documents, updates, and useful links designed for fast access.",
    tag: "Content System",
  },
  {
    title: "MCA Studies",
    description:
      "Ongoing academic growth alongside product work, research, and structured skill-building.",
    tag: "Studies",
  },
];

export default function WorkingOn() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mb-12 md:mb-16">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500 md:text-sm">
          What I&apos;m Working On
        </p>

        <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-6xl">
          Currently building
          <span className="block text-neutral-500">
            products, systems, and ideas that keep moving.
          </span>
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4 lg:sticky lg:top-24">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                className={`glass-card rounded-[24px] p-6 transition-all duration-300 ${
                  isActive
                    ? "border-white/20 bg-white/[0.07]"
                    : "bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                      {item.tag}
                    </p>

                    <h3 className="text-xl font-medium tracking-tight text-white md:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${isActive ? "bg-emerald-400" : "bg-white/20"}`} />
                </div>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card relative overflow-hidden rounded-[28px] p-6 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]" />

          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Live Snapshot
            </p>

            <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
              {items[activeIndex].title}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
              {items[activeIndex].description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                  Next upgrades
                </p>
                <p className="mt-2 text-sm text-neutral-300">
                  Detailed case studies, real screenshots, and demos.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                  Contact path
                </p>
                <p className="mt-2 text-sm text-neutral-300">
                  Add a resume download button and keep the contact CTA visible.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Contact Me
              </a>

              <a
                href="mailto:rithandsouza678@gmail.com?subject=Resume%20Request"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/5"
              >
                Resume Request
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}