import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-primary-foreground font-serif">Harriet</span>
              <span className="text-xl font-bold font-serif">Buildesign</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Premium construction, interiors, renovation, and landscaping — delivered with honesty, quality, and daily supervision.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/HarrietBuildesign"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/harriet_builders"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Process", href: "/process" },

              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Home Construction",
                "Interior Design",
                "Renovation",
                "Landscaping",
                "3D Visualization",
                "Site Supervision",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919744707505" className="block hover:text-primary-foreground transition-colors">
                    97447 07505
                  </a>
                  <a href="tel:+918589883505" className="block hover:text-primary-foreground transition-colors">
                    85898 83505
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:harrietbuilders@gmail.com" className="hover:text-primary-foreground transition-colors">
                  harrietbuilders@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  2nd Floor, Puthanveettil Tower,<br />
                  Bypass Road, Perinthalmanna, Kerala
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} HarrietBuildesign. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Building dreams across Kerala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
