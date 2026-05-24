"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const [loading, setLoading] = useState(true);
  const audioRef =
    useRef<HTMLAudioElement>(null);
  const introPlayedRef = useRef(false);
  const introPendingRef = useRef(true);

  const playIntroSound = () => {
    if (introPlayedRef.current || !introPendingRef.current) return;

    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = 0;

    void audio.play().then(() => {
      introPlayedRef.current = true;
      introPendingRef.current = false;
    }).catch(() => {
      // Autoplay can be blocked until the user interacts.
    });
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      playIntroSound();
    };

    window.addEventListener("pointerdown", handleFirstInteraction, {
      once: true,
    });

    audioRef.current?.load();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", handleFirstInteraction);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[999] overflow-hidden bg-[#050505]"
        >
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0 origin-top bg-white"
          />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -120, opacity: 0 }}
                onAnimationStart={playIntroSound}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-5xl md:text-8xl font-medium tracking-[-0.08em] text-white"
              >
                Rithan Dsouza
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.3,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0 bg-[#050505]"
          />

          <audio
            ref={audioRef}
            src={`${basePath}/sounds/intro.mp3`}
            preload="auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}