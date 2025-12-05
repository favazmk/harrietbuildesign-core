import { Award, Users, Eye, Clock, Palette, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "7+ Years Experience",
    description: "Proven expertise in Kerala's construction industry",
  },
  {
    icon: Users,
    title: "100+ Projects",
    description: "Successfully completed residential and interior projects",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear pricing and material selection with no hidden costs",
  },
  {
    icon: Clock,
    title: "Daily Supervision",
    description: "Dedicated engineer monitors your site every day",
  },
  {
    icon: Palette,
    title: "Premium 3D Designs",
    description: "See your home before it's built with realistic visuals",
  },
  {
    icon: Shield,
    title: "On-Time Delivery",
    description: "Disciplined project planning and reliable timelines",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
            Why Homeowners Trust Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building trust through quality, transparency, and exceptional service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
