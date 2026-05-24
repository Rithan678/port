"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    const hoverTargets = document.querySelectorAll(
      "a, button"
    );

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);

      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: hovering ? 2.8 : 1,
          rotate: hovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mix-blend-difference md:block"
      />

      {/* Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: hovering ? 5 : 2,
          opacity: hovering ? 0.18 : 0.08,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-12 w-12 rounded-full bg-white blur-2xl md:block"
      />
    </>
  );
}
