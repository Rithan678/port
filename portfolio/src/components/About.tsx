"use client";

import Reveal from "./Reveal";

const skills = [
  {
    title: "MERN Stack",
    desc: "Building scalable fullstack web applications.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and beautiful experiences.",
    icon: "🎨",
  },
  {
    title: "Editorial Design",
    desc: "Creating magazines, bulletins and publications.",
    icon: "📖",
  },
  {
    title: "Creative Direction",
    desc: "Combining design, strategy and storytelling.",
    icon: "✨",
  },
  {
    title: "AI Workflows",
    desc: "Using AI tools to improve productivity and creativity.",
    icon: "🤖",
  },
  {
    title: "Visual Storytelling",
    desc: "Communicating ideas through engaging visuals.",
    icon: "🎬",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 px-6 max-w-7xl mx-auto"
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <Reveal className="">
          <p className="uppercase tracking-[0.3em] text-neutral-500 text-xs md:text-sm mb-8">
            About
          </p>

          <h2 className="text-3xl md:text-6xl leading-tight tracking-tight font-medium">
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

          <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <h3 className="text-2xl font-semibold">15+</h3>
              <p className="text-neutral-500">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">5+</h3>
              <p className="text-neutral-500">Hackathons</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">2+</h3>
              <p className="text-neutral-500">Years Learning</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">10+</h3>
              <p className="text-neutral-500">Technologies</p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>

              <h3 className="text-lg font-medium">{skill.title}</h3>

              <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}