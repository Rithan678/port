"use client";

import React from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import Link from "next/link";

const items = [
  {
    name: "About",
    href: "#about",
    emoji: "👨‍💻",
  },

  {
    name: "Experience",
    href: "#experience",
    emoji: "🚀",
  },

  {
    name: "Work",
    href: "#work",
    emoji: "💼",
  },

  {
    name: "Contact",
    href: "#contact",
    emoji: "✉️",
  },
];

function DockItem({
  mouseX,
  item,
}: any) {
  const ref = React.useRef<HTMLAnchorElement>(null);

  const distance = useTransform(
    mouseX,
    (x: number) => {
      const rect =
        ref.current?.getBoundingClientRect();

      if (!rect) return 0;

      return (
        x -
        rect.left -
        rect.width / 2
      );
    }
  );

  const scale = useTransform(
    distance,
    [-150, 0, 150],
    [1, 1.8, 1]
  );

  const smoothScale = useSpring(scale, {
    stiffness: 200,
    damping: 15,
  });

  return (
    <motion.div
      style={{
        scale: smoothScale,
      }}
    >
      <Link
        href={item.href}
        ref={ref}
        className="glass-card flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
      >
        {item.emoji}
      </Link>
    </motion.div>
  );
}

export default function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) =>
        mouseX.set(e.pageX)
      }
      onMouseLeave={() =>
        mouseX.set(Infinity)
      }
      className="hidden md:flex fixed bottom-6 left-1/2 z-50 -translate-x-1/2 gap-4 rounded-[28px] border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md md:backdrop-blur-2xl"
    >
      {items.map((item) => (
        <DockItem
          key={item.name}
          mouseX={mouseX}
          item={item}
        />
      ))}
    </div>
  );
}