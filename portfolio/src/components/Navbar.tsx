"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    name: "Work",
    href: "#work",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.querySelector(link.href));

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(links[index].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 z-50 w-[92%] max-w-3xl -translate-x-1/2"
    >
      <div className="glass-card flex items-center justify-between rounded-full px-4 py-3 shadow-2xl md:px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-white transition duration-300 hover:opacity-80"
        >
          Rithan
        </Link>

        <div className="flex items-center gap-3 text-[11px] text-neutral-400 sm:gap-5 sm:text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`transition duration-300 hover:text-white ${
                active === link.href ? "text-white" : "text-neutral-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
