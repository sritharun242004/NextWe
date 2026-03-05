import { Metadata } from "next";
// import { motion } from 'framer-motion';
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { GlobalImpactSection } from "@/components/sections/GlobalImpactSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | NextWe Studio",
  description: "Learn about NextWe Studio's mission to empower businesses with scalable digital products and intelligent AI solutions that accelerate growth and operational efficiency.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          About <span className="text-[#a0ff4a]">NextWe Studio</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          We build scalable digital ecosystems that combine cutting-edge development, data-driven marketing, and advanced AI engineering to help ambitious businesses launch faster, operate smarter, and scale without limits.
        </p>
      </div>

      {/* Company Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-[#a0ff4a]">Story</span>
              </h2>
              <p className="text-gray-300 mb-6">
                NextWe Studio was founded with a simple but powerful belief: businesses shouldn't
                struggle with outdated technology or inefficient manual processes.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a focused development team quickly evolved into a full-stack digital and
                AI innovation partner. Today, we help startups, SMBs, and enterprises transform their
                digital presence, automate workflows, and build scalable technology products that drive
                measurable growth.
              </p>
              <p className="text-gray-300">
                Our strength lies in combining deep technical expertise with real business understanding
                — ensuring every solution we build creates tangible value.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-[#393e42]/20 rounded-lg border border-[#a0ff4a]/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-white font-semibold">Company Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-[#a0ff4a] transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-[#a0ff4a]">Mission</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower forward-thinking businesses with scalable digital products and intelligent AI
                solutions that accelerate growth and operational efficiency.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-[#a0ff4a] transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-[#a0ff4a]">Vision</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a globally trusted leader in AI-powered digital transformation and next-
                generation software engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 bg-[#393e42]/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our <span className="text-[#a0ff4a]">Process</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Strategy",
                description: "We deeply understand your business, users, and growth goals."
              },
              {
                step: "2",
                title: "Solution Architecture",
                description: "We design scalable, secure, and future-ready systems."
              },
              {
                step: "3",
                title: "Agile Development",
                description: "Rapid, transparent, and milestone-driven execution."
              },
              {
                step: "4",
                title: "AI Integration & Testing",
                description: "Rigorous testing ensures performance and reliability."
              },
              {
                step: "5",
                title: "Launch & Scale",
                description: "Smooth deployment with scalability planning."
              },
              {
                step: "6",
                title: "Continuous Optimization",
                description: "Ongoing improvements based on real performance data."
              }
            ].map((process, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-[#a0ff4a] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#a0ff4a] flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-[#393e42]/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Meet Our <span className="text-[#a0ff4a]">Founders</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center mb-12">
            NextWe Studio was built by a team that believes technology should solve real business
            problems — not create more complexity. Our founders bring together hands-on experience
            in sales, technology, and finance, working closely with clients to build solutions that truly
            make an impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Abinesh S",
                position: "Founder & CEO",
                tagline: "Driving Growth Through Strong Relationships & Smart Strategy",
                description: "Abinesh is the energy behind NextWe Studio's growth story. With a natural strength in sales, client relationships, and business development, he focuses on building long-term partnerships rather than one-time projects.",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
              },
              {
                name: "Sriram P",
                position: "Chief Technology Officer (CTO)",
                tagline: "Turning Complex Ideas Into Scalable Technology",
                description: "Sriram leads the technology backbone of NextWe Studio. Calm, detail-oriented, and deeply technical, he ensures every product we build is stable, scalable, and ready for real-world usage.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
              {
                name: "Harsha Carippa",
                position: "Chief Financial Officer (CFO)",
                tagline: "Bringing Financial Clarity to Scalable Growth",
                description: "Harsha ensures that NextWe Studio grows with financial discipline and long-term stability. His structured and analytical mindset supports data-backed decision-making.",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-[#a0ff4a] transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#a0ff4a] mb-2">{member.position}</p>
                  <p className="text-sm text-gray-400 italic mb-3">{member.tagline}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <GlobalImpactSection />
    </div>
  );
}
