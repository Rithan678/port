"use client";

import * as React from "react";
import { Command } from "cmdk";

const items = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Experience",
    href: "#experience",
  },

  {
    label: "Projects",
    href: "#work",
  },

  {
    label: "Contact",
    href: "#contact",
  },

  {
    label: "GitHub",
    href: "https://github.com/Rithan678",
  },
];

export default function CommandPalette() {
  const [open, setOpen] =
    React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key === "k"
      ) {
        e.preventDefault();

        setOpen((open) => !open);
      }
    };

    document.addEventListener(
      "keydown",
      down
    );

    return () =>
      document.removeEventListener(
        "keydown",
        down
      );
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed right-6 top-6 z-50 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-400 backdrop-blur-xl transition hover:bg-white/[0.06]"
      >
        ⌘K
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl">
          <div className="mx-auto mt-[12vh] w-[92%] max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-2xl">
            <Command className="w-full">
              <Command.Input
                autoFocus
                placeholder="Search..."
                className="w-full border-b border-white/10 bg-transparent px-6 py-5 text-lg outline-none placeholder:text-neutral-500"
              />

              <Command.List className="max-h-[400px] overflow-auto p-3">
                {items.map((item) => (
                  <Command.Item
                    key={item.label}
                    onSelect={() => {
                      window.location.href =
                        item.href;

                      setOpen(false);
                    }}
                    className="cursor-pointer rounded-2xl px-4 py-4 text-neutral-300 transition hover:bg-white/[0.05]"
                  >
                    {item.label}
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </div>

          <div
            className="absolute inset-0 -z-10"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}