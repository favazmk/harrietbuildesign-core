import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/BLACK LOGO.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Why Us", href: "/why-us" },

  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: "blur(4px) saturate(200%)",
        WebkitBackdropFilter: "blur(5px) saturate(200%)",
        backgroundColor: "rgba(176, 176, 176, 0.8)",
        borderRadius: "0 0 12px 12px", // Applying radius only to bottom corners for a header
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.05)", // Reduced shadow opacity for cleaner look
        backgroundImage: "linear-gradient(to top right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Harriet Buildesign" className="h-8 w-auto" />
            <div>
              <span className="text-xl font-bold text-primary font-serif">Harriet</span>
              <span className="text-xl font-bold text-foreground font-serif">Buildesign</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a href="tel:+919744707505" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" />
              <span>97447 07505</span>
            </a>
            <Button asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;