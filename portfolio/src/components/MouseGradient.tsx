"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect } from "react";

export default function MouseGradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="pointer-events-none hidden md:block fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[120px]"
    />
  );
}