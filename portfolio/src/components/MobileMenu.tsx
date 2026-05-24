"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useState } from "react";

const links = [
  {
    name: "About",
    href: "#about",
  },

  {
    name: "Experience",
    href: "#experience",
  },

  {
    name: "Projects",
    href: "#work",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function MobileMenu() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-6 top-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl md:hidden"
      >
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[9999] bg-[#050505]/95 backdrop-blur-2xl md:hidden"
          >
            
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-3xl text-white"
            >
              ✕
            </button>

            {/* Links */}
            <div className="flex h-full flex-col items-center justify-center gap-8">
              
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="text-4xl font-medium tracking-tight text-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
