// components/ui/typewriter-effect.tsx
"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  return (
    <div className={cn("text-center", className)}>
      {words.map((word, idx) => (
        <motion.span
          key={`word-${idx}`}
          className={cn("text-white", word.className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: idx * 0.1,
          }}
        >
          {word.text}{" "}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("text-[#a0ff4a]", cursorClassName)}
      >
        |
      </motion.span>
    </div>
  );
};

export const TypewriterCycleEffect = ({
  staticText,
  phrases,
  className,
  staticClassName,
  phraseClassName,
  cursorClassName,
  typingSpeed = 60,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: {
  staticText: string;
  phrases: string[];
  className?: string;
  staticClassName?: string;
  phraseClassName?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentPhrase = phrases[currentPhraseIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < currentPhrase.length) {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      } else {
        // Finished typing — pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting backward
      if (displayedText.length > 0) {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
      } else {
        // Finished deleting — move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [displayedText, isDeleting, isPaused, currentPhrase, phrases.length, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <div className={cn("text-center", className)}>
      <span className={cn("text-white", staticClassName)}>{staticText}</span>
      <span className={cn("text-[#a0ff4a]", phraseClassName)}>
        {displayedText.split("\n").map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className={cn("text-[#a0ff4a] ml-[2px]", cursorClassName)}
      >
        |
      </motion.span>
    </div>
  );
};
