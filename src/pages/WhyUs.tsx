import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Eye, HardHat, Shield, Palette, Clock, Users, CheckCircle, ArrowRight, DollarSign, UserX } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";


const differentiators = [
  {
    icon: Eye,
    title: "Transparent Materials & Billing",
    description: "No hidden charges. No surprises. You know exactly what materials are used, their quality, and where your money goes.",
  },
  {
    icon: HardHat,
    title: "Daily On-Site Supervision",
    description: "A dedicated engineer or supervisor monitors your site every single day. This ensures quality control, accurate execution, zero shortcuts, and real-time updates.",
  },
  {
    icon: Shield,
    title: "High-Quality Workmanship",
    description: "We follow strict engineering standards, reliable materials, and skilled labor to ensure your home is built to last for generations — not just look good in photos.",
  },
  {
    icon: Palette,
    title: "Designs That Are Truly Buildable",
    description: "Our 3D visuals are not just pretty renders — They are realistic, accurate, and achievable on-site. The final result matches the design you approved.",
  },
  {
    icon: Clock,
    title: "Clear Timelines & Project Planning",
    description: "Homes get delayed when there's no structure. Our step-by-step process ensures defined schedules, planned stages, and work completed on time.",
  },
  {
    icon: Users,
    title: "Experienced Team You Can Trust",
    description: "With 7+ years of industry expertise and 100+ completed projects, our team blends engineering, creativity, and practical experience to deliver exceptional homes.",
  },
];

const homeProblems = [
  { icon: Clock, text: "Delays, excuses, and zero accountability" },
  { icon: AlertTriangle, text: "Poor-quality materials and shortcuts" },
  { icon: DollarSign, text: "Budget overruns and hidden costs" },
  { icon: UserX, text: "Contractors who disappear when you need them" },
  { icon: Palette, text: "Designs that look good on paper but fail in execution" },
];

const solutions = [
  "Transparent materials & billing",
  "Daily on-site supervision",
  "Accurate timelines & no shortcuts",
  "High-quality workmanship",
  "Premium 3D designs before construction",
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Problem */}
          <div className={cn(
            "bg-red-100 rounded-2xl p-8 lg:p-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans text-red-800">
              The Problem
            </h2>
            <p className="text-lg text-red-700 mb-8">
              Building a home in Kerala shouldn't feel stressful — but most people face the same issues:
            </p>
            <ul className="space-y-4">
              {homeProblems.map((problem, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-start gap-4 transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="p-2 rounded-lg bg-red-200">
                    <problem.icon className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-red-800 font-medium pt-1">{problem.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-semibold text-red-800">
              You deserve a team that values your home as much as you do.
            </p>
          </div>

          {/* Solution */}
          <div className={cn(
            "bg-green-100 rounded-2xl p-8 lg:p-12 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans text-green-900">
              The HarrietBuildesign Promise
            </h2>
            <p className="text-lg text-green-700 mb-8">
              We build and design homes with:
            </p>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-start gap-4 transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: isVisible ? `${(index * 100) + 400}ms` : '0ms' }}
                >
                  <CheckCircle className="h-6 w-6 text-green-800 flex-shrink-0" />
                  <span className="text-green-800 font-medium">{solution}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-semibold text-green-800">
              We handle everything — from concept to handover.
            </p>
          </div>
        </div>
      </div>
    </section>
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
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-foreground">
                Why Choose Us
              </h1>
              <p className="text-xl text-muted-foreground">
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
                <div key={index} className="bg-card p-8 rounded-xl border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
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
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WhyUs;