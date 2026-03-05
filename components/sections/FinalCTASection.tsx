// components/sections/FinalCTASection.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-[#a0ff4a] rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="h-8 w-8 text-black" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-[#a0ff4a]">Future-Proof</span> Your Business?
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how NextWe Studio can help you build faster, automate smarter, and scale confidently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#a0ff4a] hover:bg-[#8ee639] text-black px-8 py-4 rounded-md transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Book a Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#a0ff4a] text-[#a0ff4a] hover:bg-[#a0ff4a] hover:text-black px-8 py-4 rounded-md transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}