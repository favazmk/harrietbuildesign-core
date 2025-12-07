import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Eye, HardHat, Shield, Palette, Clock, Users, CheckCircle, XCircle, ArrowRight } from "lucide-react";

const problems = [
  "Contractors cutting corners to save cost",
  "Delays with no proper supervision",
  "Poor-quality materials used without transparency",
  "Designs that look good digitally but fail in execution",
  "Budgets that keep increasing halfway",
  "Zero accountability once work begins",
];

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

const comparison = [
  { feature: "Transparent pricing", harriet: true, traditional: false },
  { feature: "Daily supervision", harriet: true, traditional: false },
  { feature: "3D visualization before construction", harriet: true, traditional: false },
  { feature: "Single team from design to handover", harriet: true, traditional: false },
  { feature: "Clear timelines", harriet: true, traditional: false },
  { feature: "Quality material documentation", harriet: true, traditional: false },
  { feature: "Progress updates", harriet: true, traditional: false },
];

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

        {/* The Problem */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7 text-destructive" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                  The Real Problem in Kerala's Construction Industry
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Most homeowners face the same frustrations:
              </p>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{problem}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xl font-medium text-primary">
                We built HarrietBuildesign to solve these problems — permanently.
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

        {/* Comparison Table */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-foreground text-center">
              Compare Us vs Traditional Contractors
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-accent p-4 font-semibold text-foreground">
                  <div>Feature</div>
                  <div className="text-center">HarrietBuildesign</div>
                  <div className="text-center">Traditional</div>
                </div>
                {comparison.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 border-t border-border items-center">
                    <div className="text-foreground">{item.feature}</div>
                    <div className="flex justify-center">
                      {item.harriet ? (
                        <CheckCircle className="h-6 w-6 text-primary" />
                      ) : (
                        <XCircle className="h-6 w-6 text-muted" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.traditional ? (
                        <CheckCircle className="h-6 w-6 text-primary" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Statement */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-foreground">
              Built on Integrity. Delivered With Precision.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your home is one of the biggest investments of your life. We treat it with the care, expertise, and respect it deserves.
            </p>
          </div>
        </section>

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