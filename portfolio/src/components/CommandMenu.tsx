"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  const navigate = (href: string) => {
    window.location.href = href;
    setOpen(false);
  };

  return (
    <>
      {/* Floating Hint */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-neutral-400 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
      >
        ⌘K
      </button>

      {/* Command Dialog */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/50 p-4 backdrop-blur-sm">
          <Command className="mt-32 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
            <Command.Input
              autoFocus
              placeholder="Search sections..."
              className="w-full border-b border-white/10 bg-transparent px-6 py-5 text-white outline-none placeholder:text-neutral-500"
            />

            <Command.List className="p-3">
              <Command.Item
                onSelect={() => navigate("#work")}
                className="cursor-pointer rounded-2xl px-4 py-3 text-neutral-300 transition hover:bg-white/[0.05]"
              >
                Selected Work
              </Command.Item>

              <Command.Item
                onSelect={() => navigate("#about")}
                className="cursor-pointer rounded-2xl px-4 py-3 text-neutral-300 transition hover:bg-white/[0.05]"
              >
                About
              </Command.Item>

              <Command.Item
                onSelect={() => navigate("#experience")}
                className="cursor-pointer rounded-2xl px-4 py-3 text-neutral-300 transition hover:bg-white/[0.05]"
              >
                Experience
              </Command.Item>

              <Command.Item
                onSelect={() => navigate("#contact")}
                className="cursor-pointer rounded-2xl px-4 py-3 text-neutral-300 transition hover:bg-white/[0.05]"
              >
                Contact
              </Command.Item>
            </Command.List>
          </Command>
        </div>
      )}
    </>
  );
}
