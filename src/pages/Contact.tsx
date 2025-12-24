import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import MagneticSocialLinks from "@/components/ui/MagneticSocialLinks";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    const serviceID = 'service_jbzwebg';
    const templateID = 'template_316owmq';
    const publicKey = 'QhmGxKMH7zt0xbOi2';

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          toast({
            title: "Inquiry Sent!",
            description: "We have received your message and will get back to you shortly.",
            className: "bg-green-50 border-green-200 text-green-900",
          });

          setFormData({
            name: "",
            phone: "",
            email: "",
            location: "",
            projectType: "",
            message: "",
          });

          // Optional: Reset the form element itself
          form.current?.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          toast({
            title: "Failed to send",
            description: "Something went wrong. Please try again or contact us directly on WhatsApp.",
            variant: "destructive",
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | HarrietBuildesign - Book Consultation</title>
        <meta
          name="description"
          content="Contact HarrietBuildesign for construction, interior design, renovation & landscaping services. Book your free consultation today. Call: 97447 07505"
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section
          className="py-14 bg-cover relative min-h-[300px] flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/assets/patterns/contact-pattern-v2.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px'
          }}
        >
          {/* Overlay to ensure text readability against pattern */}
          <div className="absolute inset-0 bg-harriet-900/70 pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                Contact Us
              </h1>
              <p className="text-xl text-white/90">
                Let's start building your dream home together. Our team is here to answer your questions, guide your planning, and help you take the next step with complete confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid dsk:grid-cols-2 gap-16">
              {/* Contact Form */}

              <div className="p-8 rounded-2xl shadow-neumorphic-light bg-secondary h-full">
                <h2 className="text-2xl font-bold mb-6 font-serif text-harriet-700">
                  Book a Free Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us a little about your project and our team will contact you shortly.
                </p>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location / Plot Area</Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="e.g., Perinthalmanna"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Type of Project</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                        name="project_type"
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="interiors">Interior Design</SelectItem>
                          <SelectItem value="renovation">Renovation</SelectItem>
                          <SelectItem value="landscaping">Landscaping</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {/* Hidden input to ensure Select value is included in emailjs form data */}
                      <input type="hidden" name="project_type" value={formData.projectType} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full group relative flex items-center justify-center gap-3 bg-harriet-900 text-white hover:bg-black h-14 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    <span className="text-lg font-serif tracking-wide transition-transform duration-300 group-hover:-translate-x-2">
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </span>

                    {!isSubmitting && (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        <Send className="w-4 h-4 text-white group-hover:text-harriet-900 transition-colors duration-300 -ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                  </Button>

                  {/* Social Links with Magnetic Effect */}
                  <div className="pt-6">
                    <p className="text-center text-sm text-muted-foreground mb-4">Follow us on</p>
                    <MagneticSocialLinks />
                  </div>
                </form>
              </div>


              {/* Contact Info */}

              <div className="p-8 rounded-2xl shadow-neumorphic-light bg-secondary h-full">
                <h2 className="text-2xl font-bold mb-6 font-serif text-harriet-700">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <a href="tel:+919744707505" className="block text-muted-foreground hover:text-primary transition-colors">
                        97447 07505
                      </a>
                      <a href="tel:+918589883505" className="block text-muted-foreground hover:text-primary transition-colors">
                        85898 83505
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:harrietbuilders@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        harrietbuilders@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                      <p className="text-muted-foreground">
                        2nd Floor, Puthanveettil Tower,<br />
                        Bypass Road, Perinthalmanna, Kerala
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday – Saturday: 9:00 AM – 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-card"
                    asChild
                  >
                    <a
                      href="https://wa.me/919744707505"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h3 className="font-semibold text-foreground mb-4">Find Us on Map</h3>
                  <div className="aspect-video rounded-xl overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.8548573098566!2d76.22959731480188!3d10.976166692196507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cfb5c8d9f6e1%3A0x8e5f2e6c9b8e9a1e!2sPerinthalmanna%2C%20Kerala!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="HarrietBuildesign Location"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
