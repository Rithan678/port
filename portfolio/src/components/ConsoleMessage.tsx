"use client";

import { useEffect } from "react";

export default function ConsoleMessage() {
  useEffect(() => {
    console.log(
      `%c👋 Hey Developer!`,
      `
      font-size: 28px;
      font-weight: bold;
      color: #ffffff;
      `
    );

    console.log(
      `%cThanks for checking out Rithan's portfolio.
Built with Next.js, Framer Motion, cinematic interactions & futuristic UI.`,
      `
      font-size: 14px;
      color: #a1a1aa;
      line-height: 1.8;
      `
    );

    console.log(
      `%cGitHub → github.com/Rithan678`,
      `
      font-size: 14px;
      color: #22d3ee;
      `
    );
  }, []);

  return null;
}