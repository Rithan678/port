"use client";

import Reveal from "./Reveal";

const skills = [
  "MERN Stack",
  "UI/UX Design",
  "Editorial Design",
  "Creative Direction",
  "AI Workflows",
  "Visual Storytelling",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-6 max-w-7xl mx-auto"
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <Reveal className="">
          <p className="uppercase tracking-[0.3em] text-neutral-500 text-xs md:text-sm mb-8">
            About
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight tracking-tight font-medium">
            Creating digital
            <span className="block text-neutral-500">
              experiences with
            </span>
            purpose & creativity.
          </h2>

          <p className="mt-10 text-neutral-400 leading-relaxed text-lg max-w-xl">
            I’m Rithan Dsouza, a BCA student and creative fullstack developer
            based in Mangaluru, India.
          </p>

          <p className="mt-6 text-neutral-500 leading-relaxed max-w-xl">
            My work blends technology, design, and storytelling — from building
            modern web applications to crafting editorial experiences and
            immersive digital interfaces.
          </p>

          <p className="mt-6 text-neutral-500 leading-relaxed max-w-xl">
            Alongside development, I explore AI-assisted workflows, visual
            communication, and creative systems to build experiences that feel
            both functional and meaningful.
          </p>
        </Reveal>

        {/* RIGHT SIDE */}
        <Reveal className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6"
            >
              <p className="text-sm text-neutral-400">{skill}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}