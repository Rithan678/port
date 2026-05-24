"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GitHubSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-24 md:py-40 px-6 max-w-7xl mx-auto">
      
      {/* Divider */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        
        {/* Heading */}
        <div className="mb-16">
          
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500 md:text-sm">
            GitHub Activity
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Building consistently
            <span className="block text-neutral-500">
              through code & experimentation.
            </span>
          </h2>
        </div>

        {/* Calendar Card */}
        <div className="glass-card overflow-x-auto rounded-[24px] md:rounded-[32px] p-6 md:p-10">

          {mounted ? (
            <GitHubCalendar
              username="Rithan678"
              colorScheme="dark"
              fontSize={14}
              blockSize={14}
              blockMargin={5}
            />
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}
