import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import footerImage from "@/assets/ft.png";

import LightRays from "@/components/ui/LightRays";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={2.4}
          lightSpread={2}
          rayLength={3}
          pulsating={false}
          fadeDistance={1.4}
          saturation={0}
          mouseInfluence={1}
          noiseAmount={0.5}
          distortion={0}
          className="z-0"
        />
      </div>

      {/* Background Image */}
      <img
        src={footerImage}
        alt=""
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] object-cover opacity-5 pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl font-bold text-primary-foreground font-serif">Harriet</span>
              <span className="text-xl font-bold font-serif">Buildesign</span>
            </div>
            <p className="text-neutral-400 mb-4 mx-auto max-w-[250px]">
              Premium construction, interiors, renovation, and landscaping — delivered with honesty, quality, and daily supervision.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com/HarrietBuildesign"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/harriet_builders"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Why Us", href: "/why-us" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Process", href: "/process" },
                { name: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              {[
                "Home Construction",
                "Interior Design",
                "Renovation",
                "Landscaping",
                "Architectural Design",
                "Site Supervision",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-3 w-full flex flex-col items-center">
              <li className="flex flex-col items-center gap-2 text-center">
                <Phone className="h-5 w-5" />
                <div>
                  <a href="tel:+919744707505" className="block hover:text-primary-foreground transition-colors">
                    97447 07505
                  </a>
                  <a href="tel:+918589883505" className="block hover:text-primary-foreground transition-colors">
                    85898 83505
                  </a>
                </div>
              </li>
              <li className="flex flex-col items-center gap-2 text-center">
                <Mail className="h-5 w-5" />
                <a href="mailto:harrietbuilders@gmail.com" className="hover:text-primary-foreground transition-colors">
                  harrietbuilders@gmail.com
                </a>
              </li>
              <li className="flex flex-col items-center gap-2 text-center">
                <MapPin className="h-5 w-5" />
                <span className="text-neutral-400">
                  2nd Floor, Puthanveettil Tower,<br />
                  Bypass Road, Perinthalmanna, Kerala
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} HarrietBuildesign. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm">
              Building dreams across Kerala
            </p>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
