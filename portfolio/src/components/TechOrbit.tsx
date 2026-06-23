"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Framer",
  "UI/UX",
  "TypeScript",
];

export default function TechOrbit() {
  return (
    <section className="relative hidden md:flex min-h-[760px] items-center justify-center overflow-hidden py-40 md:py-52">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
          Tools I use most
        </p>

        <p className="mt-3 text-sm text-neutral-400">
          A compact snapshot of the stack behind the work.
        </p>
      </div>

      <div className="glass-card relative z-10 flex h-48 w-48 items-center justify-center rounded-full text-center md:h-52 md:w-52">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xs uppercase tracking-[0.6em] text-neutral-400">
            CORE SKILLS
          </h2>

          <p className="mt-2 text-3xl md:text-5xl font-extrabold text-white">
            Expertise
          </p>
        </div>
      </div>





      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute"
        style={{
          width: 520,
          height: 520,
          left: "50%",
          top: "50%",
          marginLeft: -260,
          marginTop: -260,
        }}
      >
        {skills.map((skill, index) => {
          const angle =
            (index / skills.length) * Math.PI * 2;
          const radius = 250;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const rot = index % 2 === 0 ? -18 : 14;

          return (
            <div
              key={skill}
              className="absolute rounded-full px-5 py-3 text-sm text-white/90 bg-white/4 backdrop-blur-sm border border-white/8 shadow-sm"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg)`,
                left: "50%",
                top: "50%",
                width: "fit-content",
              }}
            >
              {skill}
            </div>
          );
        })}
      </motion.div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-wrap items-center justify-center gap-3">
        {[
          "React systems",
          "AI workflows",
          "UI polish",
        ].map((item) => (
          <div
            key={item}
            className="glass-card rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-300"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[60px] md:blur-[140px]" />
    </section>
  );
}
