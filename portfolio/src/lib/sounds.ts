let audioContext: AudioContext | null = null;
let unlocked = false;

const getAudioContext = () => {
  if (typeof window === "undefined") return null;

  if (!audioContext) {
    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & {
        webkitAudioContext?: typeof AudioContext;
      }).webkitAudioContext;

    if (!AudioContextClass) return null;

    audioContext = new AudioContextClass();
  }

  return audioContext;
};

const unlockAudio = () => {
  if (unlocked) return;

  const context = getAudioContext();

  if (!context) return;

  void context.resume();
  unlocked = true;
};

if (typeof window !== "undefined") {
  window.addEventListener("pointerdown", unlockAudio, {
    once: true,
  });
}

export const playSound = (src: string) => {
  if (typeof window === "undefined") return;

  const context = getAudioContext();

  if (!context || context.state !== "running") return;

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  const presets: Record<string, {
    frequency: number;
    duration: number;
    type: OscillatorType;
  }> = {
    "hover": {
      frequency: 680,
      duration: 0.05,
      type: "sine",
    },
    "click": {
      frequency: 440,
      duration: 0.08,
      type: "triangle",
    },
    "open": {
      frequency: 520,
      duration: 0.12,
      type: "sine",
    },
  };

  const preset = Object.entries(presets).find(([key]) =>
    src.includes(key)
  )?.[1] ?? presets.click;

  oscillator.type = preset.type;
  oscillator.frequency.value = preset.frequency;

  gainNode.gain.setValueAtTime(0.0001, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.03,
    context.currentTime + 0.01
  );
  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    context.currentTime + preset.duration
  );

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start();
  oscillator.stop(context.currentTime + preset.duration + 0.02);
};