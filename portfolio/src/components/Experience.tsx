"use client";

import Reveal from "./Reveal";
import Tilt from "react-parallax-tilt";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-40 px-6 max-w-7xl mx-auto"
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Heading */}
      <Reveal className="mb-20">
        <p className="uppercase tracking-[0.3em] text-neutral-500 text-xs md:text-sm mb-6">
          Experience
        </p>

        <h2 className="text-4xl md:text-6xl leading-tight tracking-tight font-medium">
          Building creative
          <span className="block text-neutral-500">digital experiences.</span>
        </h2>
      </Reveal>

      {/* Timeline Card */}
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable={true}
        glareMaxOpacity={0.08}
        scale={1.01}
        transitionSpeed={1500}
        className="rounded-[24px] md:rounded-[32px]"
      >
        <Reveal className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* LEFT */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
                Aug 2025 — Present
              </p>

              <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                Student Intern — IQAC Editorial Board
              </h3>

              <p className="mt-4 text-neutral-500">St. Aloysius (Deemed to be University)</p>
            </div>

            {/* RIGHT */}
            <div className="max-w-2xl">
              <p className="text-neutral-400 leading-relaxed">
                Contributed to editorial publishing, newsletter production,
                and visual content organization for the IQAC Editorial Board.
                Collaborated with faculty and students while developing strong
                skills in communication, content management, and creative
                coordination.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Editorial Design",
                  "Visual Storytelling",
                  "Content Systems",
                  "Creative Coordination",
                ].map((tag, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-full px-4 py-2 text-sm text-neutral-400"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Tilt>
    </section>
  );
}
