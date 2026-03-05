import { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { DetailedServicesSection } from "@/components/sections/DetailedServicesSection";
import { BoldCTASection } from "@/components/sections/BoldCTASection";

export const metadata: Metadata = {
  title: "Services | NextWe Studio - AI Solutions, Web Development & Digital Marketing",
  description:
    "Transform your business with NextWe Studio's comprehensive services: Website & App Development, AI & Automation Solutions, Digital Marketing, and Custom AI/ML Development. Scalable technology solutions that drive real business growth.",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Creative Design */}
      <ServicesHero />

      {/* Main Services Overview */}
      <ServicesSection />

      {/* Detailed Services Breakdown */}
      <DetailedServicesSection />

      {/* Bold CTA Section */}
      <BoldCTASection />
    </div>
  );
}
