import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Professional team, transparent from day one. They completed our home exactly as promised.",
    author: "Homeowner",
    location: "Perinthalmanna",
  },
  {
    quote: "Loved the 3D design — the final result looked exactly like the visual.",
    author: "Client",
    location: "Kerala",
  },
  {
    quote: "Reliable, detail-oriented, and extremely supportive throughout the project.",
    author: "Renovation Client",
    location: "Malappuram",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from homeowners who trusted us with their dream spaces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl border border-border"
            >
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-foreground text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/testimonials">
              Read More Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
