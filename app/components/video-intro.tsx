"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoIntro() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay blocked — dismiss immediately
      setVisible(false);
    });

    function handleEnded() {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 800);
    }

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  function handleSkip() {
    setFadeOut(true);
    setTimeout(() => setVisible(false), 600);
  }

  if (!visible) return null;

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
            src="/video/intro_sythio.mp4"
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 cursor-pointer"
          >
            Skip Intro
          </button>

          {/* Sythio logo watermark */}
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
