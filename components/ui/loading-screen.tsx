'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}


export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showText, setShowText] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show text after 1 second (during spiral animation)
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 1000)

    // Start fade out after 15 seconds total (let galaxy fully complete)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 15000)

    // Complete loading after 16.5 seconds
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 16500)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-[9999] overflow-hidden">
      {/* Spiral Animation Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}>
        <SpiralAnimation />
      </div>

      {/* Company Name Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <AnimatePresence>
          {showText && !fadeOut && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: -10
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center relative"
            >
              {/* Main Text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold relative">
                <motion.div
                  initial={{ opacity: 0, letterSpacing: '0.3em' }}
                  animate={{ opacity: 1, letterSpacing: '0.1em' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-mono tracking-[0.1em] drop-shadow-2xl"
                >
                  NextWe
                </motion.div>

                {/* Enhanced glow effects */}
                <motion.div
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 text-[#a0ff4a] blur-sm -z-10"
                  style={{
                    textShadow: '0 0 30px #a0ff4a, 0 0 60px #a0ff4a, 0 0 90px #a0ff4a'
                  }}
                >
                  NextWe
                </motion.div>

                {/* White glow for contrast */}
                <motion.div
                  animate={{
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 text-white blur-lg -z-10"
                  style={{
                    textShadow: '0 0 20px white, 0 0 40px white'
                  }}
                >
                  NextWe
                </motion.div>
              </h1>

              {/* Floating particles around text */}
              <div className="absolute -inset-16 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, Math.sin(i) * 40, 0],
                      y: [0, Math.cos(i) * 25, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    className="absolute w-2 h-2 bg-[#a0ff4a] rounded-full blur-sm"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${30 + Math.random() * 40}%`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fade out overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeOut ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black z-20 pointer-events-none"
      />

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: fadeOut ? '200px' : '0px' }}
          transition={{ duration: 1.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-[#a0ff4a] to-transparent"
        />
      </div>
    </div>
  )
}