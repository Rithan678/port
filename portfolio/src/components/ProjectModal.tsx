"use client";

import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    desc: string;
    image: string;
  } | null;
}

export default function ProjectModal({
  open,
  onClose,
  project,
}: Props) {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-2xl">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="glass-card relative z-10 w-[92%] max-w-5xl rounded-[24px] md:rounded-[40px] p-6 md:p-16">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-neutral-500 transition hover:text-white"
        >
          ✕
        </button>

        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Featured Project
        </p>

        <h2 className="text-4xl md:text-7xl font-medium tracking-tight">
          {project.title}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-400">
          {project.desc}
        </p>

        <div className="group relative mt-12 overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10">
          <div className="relative h-[420px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover transition duration-[2000ms] group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-sm text-neutral-300">Interactive Project Showcase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}