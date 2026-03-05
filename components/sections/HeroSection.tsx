// components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ui/particle-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FloatingElements } from "@/components/ui/floating-elements";

export function HeroSection() {
  const words = [
    { text: "We" },
    { text: "Build" },
    { text: "High-Performance", className: "text-[#a0ff4a]" },
    { text: "Websites,", className: "text-[#a0ff4a]" },
    { text: "Apps", className: "text-[#a0ff4a]" },
    { text: "&" },
    { text: "AI", className: "text-[#a0ff4a]" },
    { text: "Solutions" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <FloatingElements />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <TypewriterEffect
            words={words}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-[#a0ff4a] font-bold mb-4"
          >
            That Drive Real Business Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Your end-to-end digital transformation partner combining development, marketing, and AI to deliver measurable ROI — not just good-looking products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <Button
              size="lg"
              className="bg-[#a0ff4a] hover:bg-[#8ee639] text-black px-8 py-3 rounded-md transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Book a Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#a0ff4a] text-[#a0ff4a] hover:bg-[#a0ff4a] hover:text-black px-8 py-3 rounded-md transform hover:scale-105 transition-all duration-300"
            >
              Request a Custom Quote
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm text-gray-500"
          >
            Trusted by growing brands across multiple industries.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
