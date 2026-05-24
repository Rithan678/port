"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

export default function SelectedWork() {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const projects = [
    {
      title: "CureMe",
      desc: "A wearable health-tech jewelry concept blending luxury aesthetics with life-saving technology.",
      image: `${basePath}/cureme.jpg`,
    },
    {
      title: "IQAC Bulletin",
      desc: "An editorial design system for storytelling, layout, and publication impact.",
      image: `${basePath}/iqac.jpg`,
    },
  ];

  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  return (
    <>
      <ProjectModal
        open={!!selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
        project={selectedProject}
      />

      <section
        id="work"
        className="relative mx-auto max-w-7xl px-6 py-40"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section Heading */}
        <Reveal className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">Selected Work</p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Curated work,
            <span className="block text-neutral-500">built with intention.</span>
          </h2>
        </Reveal>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="hidden md:block md:col-span-2">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              glareEnable={true}
              glareMaxOpacity={0.08}
              scale={1.01}
              transitionSpeed={1500}
              className="rounded-[32px] md:col-span-2"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(projects[0])}
                className="glass-card spotlight-card group relative cursor-pointer rounded-[32px]"
              >
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={projects[0].image}
                    alt="CureMe"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover scale-100 transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 md:p-10">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
                      Health-Tech Concept
                    </p>

                    <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                      CureMe
                    </h3>

                    <p className="mt-4 max-w-xl text-neutral-300">
                      {projects[0].desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </div>

          <div className="md:hidden">
            <div
              onClick={() => setSelectedProject(projects[0])}
              className="glass-card spotlight-card group relative cursor-pointer rounded-[32px]"
            >
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={projects[0].image}
                  alt="CureMe"
                  fill
                  sizes="100vw"
                  className="object-cover transition duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
                    Health-Tech Concept
                  </p>

                  <h3 className="text-2xl font-medium tracking-tight">
                    CureMe
                  </h3>

                  <p className="mt-4 max-w-xl text-neutral-300">
                    {projects[0].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="hidden md:block">
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.08}
                scale={1.01}
                transitionSpeed={1500}
                className="rounded-[32px]"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(projects[1])}
                  className="glass-card spotlight-card group relative cursor-pointer rounded-[32px]"
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={projects[1].image}
                      alt="IQAC"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        Editorial Design
                      </p>

                      <h3 className="text-2xl font-medium tracking-tight">
                        IQAC Bulletin
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>

            <div className="md:hidden">
              <div
                onClick={() => setSelectedProject(projects[1])}
                className="glass-card spotlight-card group relative cursor-pointer rounded-[32px]"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={projects[1].image}
                    alt="IQAC"
                    fill
                    sizes="100vw"
                    className="object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                      Editorial Design
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      IQAC Bulletin
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.08}
                scale={1.01}
                transitionSpeed={1500}
                className="rounded-[32px]"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card spotlight-card rounded-[32px] p-8"
                >
                  <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Focus
                  </p>

                  <h3 className="text-3xl font-medium leading-tight tracking-tight">
                    Building immersive digital products through code & creativity.
                  </h3>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      "MERN",
                      "UI/UX",
                      "AI",
                      "Editorial",
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="glass-card rounded-full px-4 py-2 text-sm text-neutral-400"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </div>

            <div className="md:hidden">
              <div className="glass-card spotlight-card rounded-[32px] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Focus
                </p>

                <h3 className="text-lg font-medium leading-tight tracking-tight">
                  Building immersive digital products through code & creativity.
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "MERN",
                    "UI/UX",
                    "AI",
                    "Editorial",
                  ].map((tag, index) => (
                    <div
                      key={index}
                      className="glass-card rounded-full px-3 py-1 text-xs text-neutral-400"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
