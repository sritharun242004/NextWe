// components/ui/floating-elements.tsx
"use client";

import { motion } from "framer-motion";

export function FloatingElements() {
  const elements = [
    {
      size: 60,
      delay: 0,
      duration: 20,
      left: 15,
      top: 20,
      gradientIndex: 0
    },
    {
      size: 80,
      delay: 2,
      duration: 25,
      left: 75,
      top: 60,
      gradientIndex: 1
    },
    {
      size: 40,
      delay: 4,
      duration: 18,
      left: 85,
      top: 15,
      gradientIndex: 2
    },
    {
      size: 100,
      delay: 1,
      duration: 30,
      left: 45,
      top: 75,
      gradientIndex: 0
    },
    {
      size: 30,
      delay: 3,
      duration: 22,
      left: 25,
      top: 45,
      gradientIndex: 1
    },
  ];

  const greenGradients = [
    "from-green-400/10 to-green-600/10",
    "from-green-500/10 to-green-400/10",
    "from-green-600/10 to-green-500/10"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const gradient = greenGradients[element.gradientIndex];

        return (
          <motion.div
            key={index}
            className={`absolute rounded-full bg-gradient-to-r ${gradient} backdrop-blur-sm`}
            style={{
              width: element.size,
              height: element.size,
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
