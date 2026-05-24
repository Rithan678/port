"use client";

import Reveal from "./Reveal";
import Tilt from "react-parallax-tilt";

const certifications = [
  {
    title: "Create Scroll-Stopping Content",
    issuer: "Canva",
    year: "2026",
  },

  {
    title: "Human-Centered Design",
    issuer: "Canva",
    year: "2026",
  },

  {
    title: "Work Smarter with AI",
    issuer: "Canva",
    year: "2025",
  },

  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <section
      className="relative py-24 md:py-40 px-6 max-w-7xl mx-auto"
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Heading */}
      <Reveal className="mb-20">
        <p className="uppercase tracking-[0.3em] text-neutral-500 text-xs md:text-sm mb-6">
          Certifications
        </p>

        <h2 className="text-3xl md:text-6xl leading-tight tracking-tight font-medium">
          Continuous learning
          <span className="block text-neutral-500">through creativity & technology.</span>
        </h2>
      </Reveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            glareEnable={true}
            glareMaxOpacity={0.08}
            scale={1.01}
            transitionSpeed={1500}
            className="rounded-[24px] md:rounded-[28px]"
          >
            <Reveal
              className="glass-card spotlight-card rounded-[24px] md:rounded-[28px] p-6 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">
                {cert.issuer}
              </p>

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                {cert.title}
              </h3>

              <p className="mt-6 text-neutral-500">Issued in {cert.year}</p>
            </Reveal>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
