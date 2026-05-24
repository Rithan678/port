"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = ["glass", "cyber", "minimal"];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/40 p-2 backdrop-blur-md md:bottom-auto md:left-auto md:right-6 md:top-20 md:-translate-x-0 md:backdrop-blur-xl">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition ${
            theme === t
              ? "bg-white text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
