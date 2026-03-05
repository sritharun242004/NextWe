// components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Bot,
  Palette,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing & Performance",
    description:
      "Data-backed strategies that generate traffic, leads, and revenue.",
    details: "Google Ads, Meta Ads, LinkedIn Ads, Analytics",
  },
  {
    icon: Globe,
    title: "Website & App Development",
    description:
      "Modern, fast, and conversion-focused digital platforms.",
    details: "React, Next.js, Node.js, TypeScript",
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "Intelligent systems that reduce manual work and boost efficiency.",
    details: "Custom AI, Chatbots, Process Automation, ML Models",
  },
  {
    icon: Palette,
    title: "UI/UX & Brand Experience",
    description: "Designs that users love and businesses benefit from.",
    details: "User Research, Prototyping, Brand Identity, Design Systems",
  },
];

export function ServicesSection() {
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
            Everything You Need to Build, <span className="text-[#a0ff4a]">Grow & Automate</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            At NextWe Studio, we don't just deliver projects — we build scalable digital ecosystems.
            Our integrated approach combines product development, growth marketing, and artificial
            intelligence to help businesses stay ahead in a rapidly evolving digital landscape.
          </p>
          <p className="text-md text-gray-400 max-w-3xl mx-auto">
            Whether you need a high-converting website, a complex SaaS platform, or an AI
            automation system, our team ensures every solution is performance-driven, future-ready,
            and aligned with your business goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-[#a0ff4a] transition-all duration-300 cursor-pointer group h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-[#a0ff4a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-black" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#a0ff4a] transition-colors mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
