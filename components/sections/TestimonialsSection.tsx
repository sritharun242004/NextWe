// components/sections/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "NextWe Studio didn't just build our platform — they helped us rethink our entire digital strategy. Highly recommended for any growth-focused company.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechGrow Solutions"
  },
  {
    quote: "The AI automation they implemented saved us hundreds of manual hours every month.",
    author: "Michael Chen",
    position: "Operations Director",
    company: "ScaleUp Industries"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-[#a0ff4a]">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-[#a0ff4a] transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-[#a0ff4a] mb-4" />
                    <p className="text-lg text-gray-300 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-[#a0ff4a] text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}