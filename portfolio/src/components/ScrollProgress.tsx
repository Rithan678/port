"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{
        scaleX,
      }}
      className="fixed left-0 top-0 z-[9999] h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
    />
  );
}