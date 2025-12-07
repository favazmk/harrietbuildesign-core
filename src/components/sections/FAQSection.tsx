import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much does a new home cost to build?",
    answer: "Costs depend on design, materials, and size. We provide a detailed estimate before starting, with complete transparency on material pricing and labor costs.",
  },
  {
    question: "How long does construction take?",
    answer: "Most homes take 6–12 months depending on scale and complexity. We provide a clear timeline during the planning phase and stick to it with disciplined project management.",
  },
  {
    question: "Do you handle building permits and government approvals?",
    answer: "Yes, we handle the technical documentation and guide you through the process of obtaining necessary building permits and approvals from local authorities, saving you the hassle.",
  },
  {
    question: "What is your design philosophy?",
        answer: "Our design philosophy is centered on creating spaces that are both beautiful and functional. We believe in a collaborative process, working closely with you to ensure your vision is realized.",
  },
  {
    question: "How do you ensure the project stays on budget?",
    answer: "We establish a detailed, transparent budget at the start of every project. Any potential changes or unexpected costs are communicated to you immediately for approval before we proceed. Our goal is to stick to the agreed-upon budget while maintaining the highest quality standards.",
  },
  {
    question: "What materials do you use?",
    answer: "We use only high-quality, durable materials and provide complete transparency in material selection. You'll know exactly what's being used in your home.",
  },
  {
    question: "What about warranty and after-service?",
    answer: "We stand behind our work with proper warranties on construction and finishing. Our team remains available for any support you need after handover.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our construction and design services
            </p>
          </div>

          <Accordion 
            type="single" 
            collapsible 
            className={cn(
              "w-full transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;