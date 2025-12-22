import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  FileSearch, ScanEye, Medal, DraftingCompass, CalendarClock, Briefcase,
  Hourglass, Construction, Wallet, UserMinus, ImageOff, CheckCircle, ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import TiltedCard from "@/components/ui/TiltedCard";


const differentiators = [
  {
    icon: FileSearch,
    title: "Transparent Materials & Billing",
    description: "We prioritize uncompromising quality while maintaining complete financial transparency. You’ll know exactly what premium materials are used, their grade, and costs—ensuring you get the best value without hidden charges.",
  },
  {
    icon: ScanEye,
    title: "Daily On-Site Supervision",
    description: "A dedicated engineer or supervisor monitors your site every single day. This ensures quality control, accurate execution, zero shortcuts, and real-time updates.",
  },
  {
    icon: Medal,
    title: "High-Quality Workmanship",
    description: "We follow strict engineering standards, reliable materials, and skilled labor to ensure your home is built to last for generations — not just look good in photos.",
  },
  {
    icon: DraftingCompass,
    title: "Designs That Are Truly Buildable",
    description: "Our 3D visuals are not just pretty renders — They are realistic, accurate, and achievable on-site. The final result matches the design you approved.",
  },
  {
    icon: CalendarClock,
    title: "Clear Timelines & Project Planning",
    description: "Homes get delayed when there's no structure. Our step-by-step process ensures defined schedules, planned stages, and work completed on time.",
  },
  {
    icon: Briefcase,
    title: "Experienced Team You Can Trust",
    description: "With 7+ years of industry expertise and 100+ completed projects, our team blends engineering, creativity, and practical experience to deliver exceptional homes.",
  },
];

const homeProblems = [
  { icon: Hourglass, text: "Delays, excuses, and zero accountability" },
  { icon: Construction, text: "Poor-quality materials and shortcuts" },
  { icon: Wallet, text: "Budget overruns and hidden costs" },
  { icon: UserMinus, text: "Contractors who disappear when you need them" },
  { icon: ImageOff, text: "Designs that look good on paper but fail in execution" },
];

const solutions = [
  "Transparent materials & billing",
  "Daily on-site supervision",
  "Accurate timelines & no shortcuts",
  "High-quality workmanship",
  "Premium 3D designs before construction",
];

import StarBorder from "@/components/ui/StarBorder";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className={cn(
        "max-w-6xl mx-auto px-4 lg:px-8 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        {/* Problem */}
        <StarBorder
          as="div"
          color="#ef4444"
          speed="5s"
          className="w-full"
          innerClassName="rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-red-200/60"
          innerStyle={{
            background: 'linear-gradient(135deg, rgba(254, 226, 226, 0.8) 0%, rgba(254, 202, 202, 0.8) 100%)',
            boxShadow: '0 0 30px -10px rgba(239, 68, 68, 0.3), 0 8px 32px 0 rgba(239, 68, 68, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.4)'
          }}
        >
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
            {/* Header Side */}
            <div className="text-left space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-sans text-red-800">
                The Problem
              </h2>
              <p className="text-base md:text-lg text-red-700 leading-relaxed">
                Building a home in Kerala shouldn't feel stressful — but most people face the same issues:
              </p>
              <div className="hidden lg:block h-1 w-20 bg-red-400/50 rounded-full mt-4"></div>
            </div>

            {/* List Side */}
            <div className="space-y-6">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {homeProblems.map((problem, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500 bg-white/40 p-3 rounded-lg hover:bg-white/60",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                  >
                    <div className="p-1.5 rounded-md bg-red-200/80 shrink-0 mt-0.5">
                      <problem.icon className="h-4 w-4 text-red-700" />
                    </div>
                    <span className="text-red-900 font-medium text-sm leading-tight">{problem.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base font-semibold text-red-800 lg:text-right">
                You deserve a team that values your home as much as you do.
              </p>
            </div>
          </div>
        </StarBorder>
      </div>
    </section >
  );
};

const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Us | HarrietBuildesign - Quality & Transparency</title>
        <meta
          name="description"
          content="Discover why homeowners trust HarrietBuildesign. Transparent pricing, daily supervision, quality workmanship, and 7+ years of experience."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section
          className="py-20 bg-cover relative min-h-[300px] flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/assets/patterns/why-us-pattern-v4.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px', // Adjusted for tileable pattern visibility
            backgroundPosition: 'center 0%'
          }}
        >
          {/* Black overlay for text readability */}
          <div className="absolute inset-0 bg-harriet-900/70 pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                Why Choose Us
              </h1>
              <p className="text-xl text-white/90">
                Quality, transparency, and trust — the three pillars behind every home we deliver.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-foreground text-center">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <TiltedCard key={index} showMobileWarning={false} showTooltip={false} scaleOnHover={1.03} rotateAmplitude={10}>
                  <div className="bg-secondary p-5 md:p-8 rounded-xl shadow-neumorphic-light border border-white/50 h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </TiltedCard>
              ))}
            </div>
          </div>
        </section>

        <ProblemSection />



        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary-foreground">
              Ready to Work With a Team That Truly Cares?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's build a home that stands the test of time — beautifully, safely, and honestly.
            </p>
            <Button size="lg" variant="secondary" asChild className="h-auto py-4 px-6 md:px-8 whitespace-normal text-center">
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 shrink-0 inline-block" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WhyUs;