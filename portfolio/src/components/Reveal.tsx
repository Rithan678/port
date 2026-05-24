"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Reveal({
  children,
  className,
}: Props) {
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );

    e.currentTarget.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        filter: "blur(4px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={className}
      onMouseMove={handleMouseMove}
    >
      {children}
    </motion.div>
  );
}
