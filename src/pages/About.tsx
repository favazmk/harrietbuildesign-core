import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Heart, Shield, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  { icon: Shield, title: "Quality First", description: "No shortcuts, no compromises." },
  { icon: CheckCircle, title: "Transparency", description: "Clear pricing, clear materials, clear communication." },
  { icon: Lightbulb, title: "Innovation", description: "Smart designs, better planning, and modern execution." },
  { icon: Heart, title: "Integrity", description: "Doing what's right, even when no one is watching." },
  { icon: Users, title: "Customer-Centric", description: "Your home, your needs, your vision." },
];

const team = [
  { name: "Muhammed Hakkim", role: "Co-Founder", description: "Focused on project execution, quality control, and ensuring every detail meets our standards." },
  { name: "Mohammed Ramees", role: "Co-Founder", description: "Leads client relations, supervision systems, and oversees overall project management." },
  { name: "Shahaba Shaharin", role: "Civil Engineer", description: "Responsible for structural accuracy, load calculations, and site engineering." },
  { name: "Arun", role: "3D Visualizer", description: "Transforms ideas into realistic visuals so clients can see their home before it's built." },
  { name: "Harikrishnan", role: "Civil Draughtsman", description: "Creates precise technical drawings and plan documentation for flawless execution." },
];

const differentiators = [
  "Transparent pricing and material selection",
  "Daily site supervision and progress updates",
  "High-quality workmanship across all stages",
  "Realistic timelines with disciplined project planning",
  "Custom 3D designs for every home",
  "7+ years of experience and 100+ completed projects",
  "One team handling everything — from design to handover",
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
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-foreground">
                Who We Are
              </h1>
              <p className="text-xl text-muted-foreground">
                HarrietBuildesign is a construction and design company built on one belief: every family deserves a home that is honest, durable, and beautifully designed.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    HarrietBuildesign began when two young engineers saw the same frustration repeated across Kerala home projects—poor supervision, hidden costs, cheap materials, and designs that didn't translate into real results.
                  </p>
                  <p>
                    So we created a company that does things differently: honest communication, daily supervision, quality materials, and designs that are truly buildable.
                  </p>
                  <p>
                    Today, HarrietBuildesign is known for combining engineering precision with creative design, delivering homes that feel good, function well, and last for generations.
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-8 lg:p-12">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To deliver high-quality homes and interiors with transparency, professionalism, and thoughtful design — ensuring a stress-free experience for every homeowner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-foreground text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                A dedicated team that blends creativity, engineering, and execution
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border border-border">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-foreground text-center">
                What Makes Us Different
              </h2>
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-center text-lg text-muted-foreground italic">
                We aren't just contractors. We are partners in building your dream home.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary-foreground">
              Let's Build Something Beautiful Together
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're planning a new home, renovating an old one, or designing functional interiors — we're here to guide you at every step.
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

export default About;
