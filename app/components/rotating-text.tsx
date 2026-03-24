"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingText({
  words,
  interval = 2500,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-grid items-center ${className}`}>
      {/* Invisible words stacked in same grid cell to reserve width of longest word */}
      {words.map((word) => (
        <span
          key={`measure-${word}`}
          className="invisible [grid-area:1/1] pointer-events-none"
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
      {/* Animated visible word in same grid cell */}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="[grid-area:1/1]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
