"use client";

import { useState } from "react";

const commands: Record<string, string> = {
  help: `
Available commands:

about
skills
projects
contact
github
linkedin
clear
`,

  about:
    "Rithan Dsouza — MERN Fullstack Developer, UI/UX enthusiast & futuristic frontend designer.",

  skills:
    "React, Next.js, Tailwind, Framer Motion, MongoDB, Node.js, UI/UX, Canva.",

  projects:
    "CureMe, IQAC Editorial Bulletin, AI Portfolio.",

  contact:
    "Email: rithandsouza@gmail.com",

  github:
    "github.com/Rithan678",

  linkedin:
    "linkedin.com/in/rithan-dsouza",
};

export default function TerminalMode() {
  const [open, setOpen] =
    useState(false);

  const [history, setHistory] =
    useState<string[]>([
      "Type 'help' to begin.",
    ]);

  const [input, setInput] =
    useState("");

  const handleCommand = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const cmd = input.toLowerCase();

    if (cmd === "clear") {
      setHistory([]);

      setInput("");

      return;
    }

    const output =
      commands[cmd] ||
      "Command not found.";

    setHistory((prev) => [
      ...prev,
      `> ${cmd}`,
      output,
    ]);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-24 left-6 z-50 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-neutral-400 backdrop-blur-xl transition hover:bg-white/[0.06]"
      >
        terminal
      </button>

      {open && (
        <div className="relative md:fixed md:bottom-6 md:left-6 z-[9999] flex h-[70vh] w-[92%] max-w-2xl mx-auto flex-col overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#050505]/95 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <button onClick={() => setOpen(false)} className="text-neutral-500 hover:text-white">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 font-mono text-sm text-green-400">
            {history.map((line, index) => (
              <div key={index} className="mb-2 whitespace-pre-line">
                {line}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3 font-mono text-green-400">
              <span>{">"}</span>

              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                placeholder="Enter command..."
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
