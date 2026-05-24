"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Magnetic from "./Magnetic";
import DynamicGreeting from "./DynamicGreeting";
import StatusBadge from "./StatusBadge";

export default function Hero() {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const { scrollY } = useScroll();

  const textY = useTransform(
    scrollY,
    [0, 500],
    [0, 120]
  );

  const imageY = useTransform(
    scrollY,
    [0, 500],
    [0, 180]
  );

  const opacity = useTransform(
    scrollY,
    [0, 400],
    [1, 0]
  );

  return (
    <section className="relative min-h-screen overflow-hidden px-6 flex items-center">
      <div className="aurora left-[10%] top-[10%] h-[350px] w-[350px] bg-cyan-500/30" />

      <div className="aurora right-[10%] top-[20%] h-[300px] w-[300px] bg-purple-500/30" />

      <div className="aurora bottom-[5%] left-[35%] h-[280px] w-[280px] bg-pink-500/20" />

      <div className="noise" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-white/5 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-16 pt-32 md:pt-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <motion.div
          style={{
            y: textY,
            opacity,
          }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-500 md:text-sm"
          >
            AI-Assisted MERN Fullstack Developer
          </motion.p>

          <DynamicGreeting />

          <StatusBadge />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {[
              "Building immersive",
              "digital experiences",
              "through code,",
              "design & storytelling.",
            ].map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  variants={{
                    hidden: {
                      y: 120,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`text-[42px] font-medium leading-[0.95] tracking-[-0.06em] sm:text-[64px] md:text-[92px] md:leading-[0.9] ${
                    index === 3
                      ? "shimmer-text"
                      : ""
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-neutral-500 md:mt-10 md:text-lg lg:mx-0"
          >
            I’m Rithan Dsouza, a BCA student and creative developer focused on
            modern web applications, editorial experiences, and AI-assisted
            digital products.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Magnetic>
              <a
                href="#work"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03]"
              >
                Selected Work
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-white/5"
              >
                Contact
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          style={{
            y: imageY,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
            },
            scale: {
              duration: 1,
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative mt-10 flex justify-center lg:-mt-10 lg:mt-0 lg:justify-end"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full border border-white/10 sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]">
            <Image
              src={`${basePath}/profile.jpg`}
              alt="Rithan Dsouza"
              fill
              sizes="(max-width: 768px) 320px, 420px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
