import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Quote, CheckCircle, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "They delivered exactly what they promised. HarrietBuildesign handled everything from design to execution with total honesty. The daily updates kept us stress-free, and the final house looked even better than the 3D design.",
    author: "Homeowner",
    location: "Perinthalmanna",
    type: "Construction",
  },
  {
    quote: "Professional team with great attention to detail. Every corner was perfectly finished. They listened to our ideas and improved them with better solutions. Highly recommended for anyone building a home in Kerala.",
    author: "Residential Client",
    location: "Malappuram",
    type: "Construction",
  },
  {
    quote: "Transparent, reliable, and easy to work with. No hidden costs, no surprises. They guided us through materials, budgeting, and timelines very clearly. Their supervision made a huge difference in quality.",
    author: "Renovation Client",
    location: "Nilambur",
    type: "Renovation",
  },
  {
    quote: "The 3D visual matched the final result — exactly. We were worried about how the interiors would turn out, but the execution was spot on. The finishing and color balance were perfect.",
    author: "Interior Design Client",
    location: "Kerala",
    type: "Interior Design",
  },
  {
    quote: "They transformed our old house into a modern beauty. Our renovation looked impossible at first, but HarrietBuildesign brought it back to life without losing its charm.",
    author: "Full Home Renovation",
    location: "Kerala",
    type: "Renovation",
  },
  {
    quote: "Very trustworthy team. We live outside Kerala and couldn't visit the site often. Their daily supervision and updates gave us complete confidence throughout the project.",
    author: "NRI Homeowner",
    location: "Kerala",
    type: "Construction",
  },
];

const clientLove = [
  "Clear communication",
  "Transparent pricing",
  "Top-quality materials",
  "Daily supervision",
  "Beautiful, practical designs",
  "Reliable timelines",
  "A team that truly cares",
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | HarrietBuildesign - Client Reviews</title>
        <meta
          name="description"
          content="Read real stories from homeowners who trusted HarrietBuildesign with their dream spaces. Professional, transparent, and reliable construction services."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-foreground">
                Testimonials
              </h1>
              <p className="text-xl text-muted-foreground">
                Real stories from homeowners who trusted us with their dream spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl border border-border"
                >
                  <Quote className="h-10 w-10 text-primary/30 mb-4" />
                  <p className="text-foreground text-lg mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">— {testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clients Love Us */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-foreground text-center">
              Why Homeowners Love Working With Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {clientLove.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary-foreground">
              Your Dream Home Could Be Next
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's create a home that feels personal, durable, and beautifully designed.
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

export default Testimonials;
