"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { playSound } from "../lib/sounds";

const responses: Record<string, string> = {
  hello:
    "Hey! I'm Rithan's portfolio assistant. Ask me about projects, skills, experience or contact.",

  skills:
    "Rithan works with React, Next.js, MERN Stack, Tailwind CSS, Framer Motion, MongoDB, UI/UX and creative design tools.",

  projects:
    "Main projects include CureMe wearable health-tech concept and the IQAC Editorial Bulletin design system.",

  experience:
    "Rithan is currently a Student Intern at St. Aloysius University IQAC Editorial Board.",

  contact:
    "You can contact Rithan through LinkedIn, GitHub, Instagram or email.",

  github:
    "GitHub: github.com/Rithan678",

  linkedin:
    "LinkedIn: linkedin.com/in/rithan-dsouza",

  default:
    "I can help you with Rithan's skills, projects, experience and contact information.",
};

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const suggestions = [
    "What skills does Rithan have?",
    "Tell me about CureMe",
    "What experience does Rithan have?",
    "How can I contact Rithan?",
  ];

  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content: "Hey! Ask me something about Rithan 👋",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length, typing, open]);

  const getResponse = (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("skill")) return responses.skills;

    if (lower.includes("project")) return responses.projects;

    if (lower.includes("experience")) return responses.experience;

    if (lower.includes("contact")) return responses.contact;

    if (lower.includes("github")) return responses.github;

    if (lower.includes("linkedin")) return responses.linkedin;

    if (lower.includes("hello") || lower.includes("hi"))
      return responses.hello;

    return responses.default;
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!input) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    const response = getResponse(input);

    timeoutRef.current = window.setTimeout(() => {
      const assistantMessage = {
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setTyping(false);
    }, 900);

    setInput("");
  };

  if (!mounted) return null;

  const handleSuggestion = (item: string) => {
    playSound("/sounds/click.mp3");

    const userMessage = {
      role: "user",
      content: item,
    };

    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);

    const response = getResponse(item);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      const assistantMessage = {
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      <button
        onMouseEnter={() =>
          playSound("/sounds/hover.mp3")
        }
        onClick={() => {
          playSound("/sounds/open.mp3");
          setOpen(!open);
        }}
        className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xl backdrop-blur-xl transition hover:scale-110 hover:bg-white/[0.08]"
      >
        🤖
      </button>

      {open && (
        <div
          className="glass-card z-50 w-[92vw] max-w-[360px] rounded-[32px] bg-[#0a0a0a]/90 md:fixed md:bottom-20 md:right-6 relative mx-auto md:mx-0"
        >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <h2 className="text-sm font-medium">
                  AI Assistant
                </h2>

                <p className="mt-1 text-xs text-neutral-500">
                  Ask about Rithan
                </p>
              </div>

              <button
                onMouseEnter={() =>
                  playSound("/sounds/hover.mp3")
                }
                onClick={() => {
                  playSound("/sounds/click.mp3");
                  setOpen(false);
                }}
                className="text-neutral-500 transition hover:text-white"
              >
                ✕
              </button>
            </div>

            <div ref={containerRef} className="h-[60vh] md:h-[420px] overflow-y-auto px-4 py-4">
              <div className="flex flex-wrap gap-2 px-4 pt-4">
                {suggestions.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onMouseEnter={() =>
                      playSound("/sounds/hover.mp3")
                    }
                    onClick={() => handleSuggestion(item)}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {messages.map((m, index) => (
                <div
                  key={index}
                  className={`mb-4 rounded-2xl px-4 py-3 text-sm ${
                    m.role === "user"
                      ? "ml-auto max-w-[80%] bg-white text-black"
                      : "max-w-[85%] bg-white/[0.05] text-neutral-300"
                  }`}
                >
                  {m.role === "assistant" ? (
                    <TypeAnimation sequence={[m.content]} wrapper="span" speed={80} cursor={false} />
                  ) : (
                    m.content
                  )}
                </div>
              ))}

              {typing && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mb-4 max-w-[85%] rounded-2xl bg-white/[0.05] px-4 py-3 text-sm text-neutral-300"
                >
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:0.2s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:0.4s]" />
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => playSound("/sounds/click.mp3")}
                placeholder="Ask something..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-neutral-500"
              />
            </form>
          </div>
        )}
    </>
  );
}
