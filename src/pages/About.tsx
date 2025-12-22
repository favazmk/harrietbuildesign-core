import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Heart, Shield, Lightbulb, ArrowRight, Home } from "lucide-react";
import ReflectiveCard from "@/components/ui/ReflectiveCard";
import GlassIcons from "@/components/ui/GlassIcons";

const values = [
  { icon: <Shield size={20} />, title: "Quality First", description: "No shortcuts, no compromises.", color: "indigo" },
  { icon: <CheckCircle size={20} />, title: "Transparency", description: "Clear pricing, clear materials, clear communication.", color: "harriet" },
  { icon: <Lightbulb size={20} />, title: "Innovation", description: "Smart designs, better planning, and modern execution.", color: "orange" },
  { icon: <Heart size={20} />, title: "Integrity", description: "Doing what's right, even when no one is watching.", color: "red" },
  { icon: <Users size={20} />, title: "Customer-Centric", description: "Your home, your needs, your vision.", color: "blue" },
];

const team = [
  { name: "Muhammed Hakkim", role: "Co-Founder", description: "Focused on project execution, quality control, and ensuring every detail meets our standards." },
  { name: "Mohammed Ramees", role: "Co-Founder", description: "Leads client relations, supervision systems, and oversees overall project management." },
  { name: "Shahaba Shaharin", role: "Civil Engineer", description: "Responsible for structural accuracy, load calculations, and site engineering." },
  { name: "Arun", role: "3D Visualizer", description: "Transforms ideas into realistic visuals so clients can see their home before it's built." },
  { name: "Harikrishnan", role: "Civil Draughtsman", description: "Creates precise technical drawings and plan documentation for flawless execution." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | HarrietBuildesign - Construction Company Kerala</title>
        <meta
          name="description"
          content="Learn about HarrietBuildesign's mission, values, and team. 7+ years building quality homes in Kerala with transparency and dedication."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section
          className="py-20 bg-cover relative min-h-[300px] flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/assets/patterns/about-pattern-v2.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px'
          }}
        >
          {/* Overlay to ensure text readability against pattern */}
          <div className="absolute inset-0 bg-harriet-900/70 pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                Who We Are
              </h1>
              <p className="text-xl text-white/90">
                HarrietBuildesign is a construction and design company built on one belief: every family deserves a home that is honest, durable, and beautifully designed.
              </p>
            </div>
          </div>
        </section>

        {/* Story & Mission Section */}
        <section className="py-24 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Our Story - Layered Handwritten Paper */}
              <div className="relative transform lg:-rotate-1 scale-95 md:scale-[0.98] origin-center transition-all duration-500 shadow-2xl rounded-sm">
                {/* Layer 1: The Distorted Background Paper */}
                <div className="handwritten-paper" />

                {/* Layer 2: The Perfect Sharp Text */}
                <div className="relative z-10 p-8 pt-11 md:pt-14 pb-12 pl-24 md:pl-28 lg:pl-32">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 handwritten-font text-harriet-800 tracking-tight">
                    Our Story
                  </h2>
                  <div className="space-y-0 handwritten-font text-xl md:text-2xl text-slate-800">
                    <p className="mb-0">
                      HarrietBuildesign began when two young engineers saw the same frustration repeated across Kerala home projects—poor supervision, hidden costs, cheap materials, and designs that didn't translate into real results.
                    </p>
                    <p className="mb-0">
                      So we created a company that does things differently: honest communication, daily supervision, quality materials, and designs that are truly buildable.
                    </p>
                    <p className="mb-0">
                      Today, HarrietBuildesign is known for combining engineering precision with creative design, delivering homes that feel good, function well, and last for generations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Mission - Elegant Framed Certificate */}
              <div className="relative pt-20 pb-10">
                {/* Hanging Thread SVG */}
                <svg viewBox="0 0 100 80" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-20 pointer-events-none z-0 overflow-visible">
                  <path
                    d="M 50 4 L 10 90 M 50 4 L 90 90"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-70 drop-shadow-sm"
                  />
                </svg>

                {/* The Nail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 shadow-lg z-20 flex items-center justify-center border border-black/30">
                  <div className="w-2.5 h-[1px] bg-black/40 rotate-45 absolute" />
                  <div className="w-2.5 h-[1px] bg-black/40 -rotate-45 absolute" />
                </div>

                {/* The Golden Frame */}
                <div className="relative transform lg:rotate-1 z-10">
                  <div className="bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] p-1.5 shadow-2xl rounded-sm">
                    <div className="bg-[#1a1a1a] p-1">
                      <div className="bg-gradient-to-br from-[#B38728] via-[#FCF6BA] to-[#BF953F] p-0.5">
                        <div className="bg-[#fcfaf2] p-8 lg:p-12 border-[20px] border-double border-[#C5A059]/30 flex flex-col items-center text-center relative overflow-hidden">
                          {/* Corner Ornaments */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-[#C5A059]/40" />
                          <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-[#C5A059]/40" />
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-[#C5A059]/40" />
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-[#C5A059]/40" />

                          <h3 className="text-sm font-bold mb-6 text-[#8B6B23] tracking-[0.3em] uppercase border-b border-[#C5A059]/20 pb-2">
                            Mission Statement
                          </h3>

                          <p className="text-[#333] text-xl md:text-2xl leading-relaxed max-w-lg font-serif italic text-balance mb-8">
                            "To deliver high-quality homes and interiors with transparency, professionalism, and thoughtful design — ensuring a stress-free experience for every homeowner."
                          </p>

                          <div className="mt-2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
                          <div className="mt-4 text-[10px] text-[#8B6B23]/60 tracking-widest uppercase font-bold">
                            Harriet Buildesign • Established 2017
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background overflow-hidden border-t border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 font-serif text-harriet-700 text-center">
              Our Values
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {values.map((value, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] group">
                  <div className="h-full p-8 bg-primary/5 rounded-[32px] border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      <GlassIcons
                        items={[{ icon: value.icon, color: value.color, label: value.title }]}
                        className="!py-0"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-harriet-700">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-harriet-700">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A dedicated team of experts blending creativity, engineering precision, and flawless execution.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card shadow-lg p-8 rounded-2xl border border-border/50 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.33%-21.33px)] hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>

      {/* Persistence SVG Filter for Torn Paper Edges */}
      <svg className="fixed pointer-events-none opacity-0 h-0 w-0" aria-hidden="true">
        <filter id="torn-paper-filter" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </>
  );
};

export default About;
