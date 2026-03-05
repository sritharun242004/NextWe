// components/sections/WhyChooseSection.tsx
"use client";

import { motion } from "framer-motion";
import { Bot, Building, Target, Zap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Bot,
    title: "AI-First Approach",
    description: "We embed intelligence into every solution, helping your business stay future-ready.",
  },
  {
    icon: Building,
    title: "Scalable Engineering",
    description: "Our systems are built to grow with your business — from MVP to enterprise scale.",
  },
  {
    icon: Target,
    title: "ROI-Driven Execution",
    description: "Every project is aligned with clear business metrics and performance goals.",
  },
  {
    icon: Zap,
    title: "Agile & Transparent Process",
    description: "You get full visibility, faster iterations, and predictable delivery timelines.",
  },
  {
    icon: Users,
    title: "Dedicated Expert Team",
    description: "Work with experienced developers, designers, marketers, and AI engineers.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Technology Partner — <span className="text-[#a0ff4a]">Not Just a Vendor</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choosing the right digital partner can define your growth trajectory. At NextWe Studio, we
            focus on long-term impact, scalable architecture, and measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-[#a0ff4a] transition-all duration-300 h-full group">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#a0ff4a] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg group-hover:text-[#a0ff4a] transition-colors leading-tight">
                        {benefit.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {benefits.slice(3).map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-[#a0ff4a] transition-all duration-300 h-full group">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#a0ff4a] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg group-hover:text-[#a0ff4a] transition-colors leading-tight">
                        {benefit.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
