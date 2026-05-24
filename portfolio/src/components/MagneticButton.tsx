"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function MagneticButton({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    const element = ref.current;

    if (!element) return;

    element.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150 }}
      className="inline-block transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
}