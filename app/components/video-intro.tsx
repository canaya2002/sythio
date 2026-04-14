"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./i18n/language-context";
import type { Locale } from "./i18n/translations";
import { trackVideoSkip, trackVideoComplete } from "../lib/vercel-events";

const VIDEO_SRC = "/video/intro_sythio.mp4";

const content: Record<Locale, { skipIntro: string }> = {
  en: { skipIntro: "Skip Intro" },
  es: { skipIntro: "Saltar intro" },
  fr: { skipIntro: "Passer l'intro" },
  pt: { skipIntro: "Pular intro" },
  it: { skipIntro: "Salta intro" },
};

export default function VideoIntro() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  useEffect(() => {
    // Check if the video file actually exists before showing anything
    fetch(VIDEO_SRC, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) return;
        setVisible(true);
        // Wait for next tick so the video element mounts
        requestAnimationFrame(() => {
          videoRef.current?.play().catch(() => setVisible(false));
        });
      })
      .catch(() => {
        // Video doesn't exist — silently do nothing
      });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !visible) return;

    function handleEnded() {
      trackVideoComplete();
      setFadeOut(true);
      setTimeout(() => setVisible(false), 800);
    }

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [visible]);

  function handleSkip() {
    trackVideoSkip();
    setFadeOut(true);
    setTimeout(() => setVisible(false), 600);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 cursor-pointer"
          >
            {c.skipIntro}
          </button>

          <div className="absolute top-8 left-8 flex items-center gap-2 opacity-60">
            <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">S</span>
            </div>
            <span className="text-white/80 text-sm font-medium tracking-tight">
              Sythio
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
