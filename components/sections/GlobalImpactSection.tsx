// components/sections/GlobalImpactSection.tsx (renamed to Industries We Serve)
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Factory,
  Heart,
  ShoppingCart,
  CreditCard,
  Building,
  GraduationCap,
  Hotel,
  Truck,
  Rocket
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Smart automation, predictive systems, and B2B platforms"
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Secure, compliant, and patient-centric solutions"
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Conversion-focused online stores and growth marketing"
  },
  {
    icon: CreditCard,
    name: "Fintech",
    description: "Scalable, secure financial platforms"
  },
  {
    icon: Building,
    name: "Real Estate",
    description: "High-impact property platforms and lead systems"
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    description: "Learning platforms and AI-powered education tools"
  },
  {
    icon: Hotel,
    name: "Hospitality & Hotels",
    description: "Booking systems and guest experience platforms"
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    description: "Intelligent tracking and workflow automation"
  },
  {
    icon: Rocket,
    name: "Startups",
    description: "MVPs, SaaS products, and rapid scaling support"
  }
];

export function GlobalImpactSection() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for <span className="text-[#a0ff4a]">High-Growth Industries</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cross-industry experience allows us to understand unique business challenges and
            deliver tailored digital and AI solutions that create real competitive advantage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-[#393e42]/50 border-[#393e42]/30 hover:border-[#a0ff4a]/50 transition-all duration-300 h-full group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#a0ff4a]/20 flex items-center justify-center mb-3 group-hover:bg-[#a0ff4a] group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="h-6 w-6 text-[#a0ff4a] group-hover:text-black transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-[#a0ff4a] transition-colors duration-300">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
