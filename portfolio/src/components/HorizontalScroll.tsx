"use client";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "CureMe",
    desc: "Luxury wearable health-tech concept.",
  },

  {
    title: "IQAC Bulletin",
    desc: "Editorial design & storytelling system.",
  },

  {
    title: "AI Portfolio",
    desc: "Futuristic portfolio with immersive UX.",
  },

  {
    title: "Creative Design",
    desc: "Posters, branding & digital experiences.",
  },
];

export default function HorizontalScroll() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const triggerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      gsap.to(section, {
        x: "-300vw",

        ease: "none",

        scrollTrigger: {
          trigger,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      className="hidden md:block relative h-[100vh] overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="flex h-screen w-[400vw]"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex h-screen w-screen items-center justify-center p-10"
          >
            <div className="glass-card flex max-w-3xl flex-col justify-center rounded-[24px] md:rounded-[40px] p-6 md:p-16">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Featured Project
              </p>

              <h2 className="text-4xl md:text-7xl font-medium tracking-tight">
                {project.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg text-neutral-400">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}