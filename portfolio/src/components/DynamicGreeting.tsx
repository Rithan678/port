"use client";

import { useEffect, useState } from "react";

export default function DynamicGreeting() {
  const [time, setTime] =
    useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setTime("Good morning");
    } else if (hour < 18) {
      setTime("Good afternoon");
    } else {
      setTime("Good evening");
    }
  }, []);

  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        {time}
      </p>
    </div>
  );
}