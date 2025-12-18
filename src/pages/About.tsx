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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-accent-foreground">
                Who We Are
              </h1>
              <p className="text-xl text-accent-foreground/80">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-harriet-700">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-harriet-700 text-center">
              Our Values
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-secondary shadow-neumorphic-light rounded-xl border-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)]">
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-harriet-700">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                A dedicated team that blends creativity, engineering, and execution
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-secondary shadow-neumorphic-light p-6 rounded-xl border-none w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.33%-21.33px)]">
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


      </Layout>
    </>
  );
};

export default About;
