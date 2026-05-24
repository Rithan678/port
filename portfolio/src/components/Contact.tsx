"use client";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 px-6 max-w-7xl mx-auto">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Reveal className="glass-card rounded-[40px] p-10 md:p-20 overflow-hidden relative">
        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

        {/* Content */}
        <div className="relative z-10">
          <p className="uppercase tracking-[0.3em] text-neutral-500 text-xs md:text-sm mb-6">
            Contact
          </p>

          <h2 className="text-4xl md:text-7xl leading-[0.95] tracking-tight font-medium max-w-4xl">
            Let’s create
            <span className="block text-neutral-500">something meaningful together.</span>
          </h2>

          <p className="mt-10 text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Whether it’s a modern web experience, creative collaboration,
            or digital product idea — I’m always open to building
            thoughtful and impactful work.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:rithandsouza678@gmail.com"
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-[1.03] transition-all duration-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Rithan678"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/10 text-white text-sm hover:bg-white/5 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rithan-dsouza"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/10 text-white text-sm hover:bg-white/5 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
        <p>© 2026 Rithan Dsouza</p>

        <div className="flex items-center gap-6">
          <a href="https://x.com/RithanD43135" target="_blank" className="hover:text-white transition">
            Twitter
          </a>

          <a href="https://www.instagram.com/r__d_creatives/" target="_blank" className="hover:text-white transition">
            Instagram
          </a>

          <a href="https://github.com/Rithan678" target="_blank" className="hover:text-white transition">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
