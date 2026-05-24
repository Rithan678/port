"use client";

import { motion } from "framer-motion";

export default function StatusBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
    >
      <div className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
      </div>

      <p className="text-sm text-neutral-300">
        Available for opportunities
      </p>
    </motion.div>
  );
}
