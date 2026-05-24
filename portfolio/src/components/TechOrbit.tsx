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
    <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden py-40">
      <div className="glass-card relative z-10 flex h-56 w-56 items-center justify-center rounded-full text-center">
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
          width: 500,
          height: 500,
          left: "50%",
          top: "50%",
          marginLeft: -250,
          marginTop: -250,
        }}
      >
        {skills.map((skill, index) => {
          const angle =
            (index / skills.length) * Math.PI * 2;
          const radius = 260;
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

      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
    </section>
  );
}
