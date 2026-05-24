"use client";

import type { ReactNode } from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ParallaxSection({
  children,
}: {
  children: ReactNode;
}) {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 2000],
    [0, -120]
  );

  return (
    <motion.div
      style={{ y }}
      transition={{
        type: "spring",
        stiffness: 40,
      }}
    >
      {children}
    </motion.div>
  );
}