import { useState, useMemo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu, X, Phone, Home, HelpCircle, Briefcase,
  Image as ImageIcon, Quote, Settings, User, Mail, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/BLACK LOGO.png";
import Dock, { DockItemData } from "@/components/ui/Dock";

const navigation = [
  { name: "Home", href: "/", icon: <Home size={20} /> },
  { name: "Why Us", href: "/why-us", icon: <HelpCircle size={20} /> },
  { name: "Services", href: "/services", icon: <Briefcase size={20} /> },
  { name: "Portfolio", href: "/portfolio", icon: <ImageIcon size={20} /> },
  { name: "Testimonials", href: "/testimonials", icon: <Quote size={20} /> },
  { name: "Process", href: "/process", icon: <Settings size={20} /> },
  { name: "About", href: "/about", icon: <User size={20} /> },
  { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const checkDimensions = () => {
      // Compact mode if screen is vertically short
      setIsCompact(window.innerHeight < 800);
    };

    // Initial check
    checkDimensions();

    // Listen for resize
    window.addEventListener('resize', checkDimensions);
    return () => window.removeEventListener('resize', checkDimensions);
  }, []);

  const dockItems: DockItemData[] = useMemo(() =>
    navigation.map((item) => ({
      icon: item.icon,
      label: item.name,
      onClick: () => navigate(item.href),
      className: cn(
        "transition-all duration-300",
        location.pathname === item.href
          ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
          : "text-harriet-700 hover:bg-white/50"
      )
    })), [location.pathname, navigate]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[999] transition-all duration-300",
        isCompact ? "h-16" : "h-20"
      )}
      style={{
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        backgroundColor: "rgba(176, 176, 176, 0.45)",
        borderRadius: "0 0 20px 20px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
      }}
    >
      <nav className={cn("w-full mx-auto max-w-[1800px] h-full transition-all duration-300", isCompact ? "px-4 min-[1270px]:px-6" : "px-6 min-[1270px]:px-12")}>
        <div className="flex items-center justify-between relative h-full">
          {/* Logo & Company Name (Always Left) */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0 z-10 group">
            <div className="relative">
              <img
                src={logo}
                alt="Harriet Buildesign"
                className={cn(
                  "w-auto transition-all duration-300 group-hover:scale-105",
                  isCompact ? "h-7 md:h-8" : "h-8 md:h-9"
                )}
              />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className={cn("font-bold text-primary font-serif tracking-tight transition-all duration-300", isCompact ? "text-base md:text-lg" : "text-lg md:text-xl")}>Harriet</span>
              <span className={cn("font-bold text-foreground font-serif tracking-tight transition-all duration-300", isCompact ? "text-base md:text-lg" : "text-lg md:text-xl")}>Buildesign</span>
            </div>
          </Link>

          {/* Centered Dock Navigation (Desktop) */}
          <div className="hidden min-[1270px]:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dock
              items={dockItems}
              baseItemSize={isCompact ? 36 : 42}
              magnification={isCompact ? 50 : 58}
              distance={isCompact ? 100 : 140}
            />
          </div>

          {/* Right side info (Desktop) */}
          <div className="hidden min-[1270px]:flex items-center gap-3 xl:gap-5 z-10 transition-all duration-300">
            <a href="tel:+919744707505" className={cn("flex items-center gap-1.5 font-semibold text-harriet-800 hover:text-primary transition-colors", isCompact ? "text-[10px]" : "text-xs")}>
              <Phone className={cn(isCompact ? "h-3 w-3" : "h-3.5 w-3.5")} />
              <span className={cn("hidden xl:inline", isCompact ? "hidden" : "")}>97447 07505</span>
            </a>
            <Button asChild size={isCompact ? "sm" : "sm"} className={cn("rounded-full font-semibold shadow-sm transition-all duration-300", isCompact ? "h-8 px-4 text-xs" : "h-9 px-5 text-sm")}>
              <Link to="/contact">
                <span className="hidden xl:inline">Book Consultation</span>
                <span className="xl:hidden">Book</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "min-[1270px]:hidden inline-flex items-center justify-center rounded-xl bg-white/30 backdrop-blur-sm text-foreground border border-white/40 active:scale-95 transition-all",
              isCompact ? "p-2" : "p-2.5"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={cn(isCompact ? "h-5 w-5" : "h-6 w-6")} /> : <Menu className={cn(isCompact ? "h-5 w-5" : "h-6 w-6")} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="min-[1270px]:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl mb-4 border border-white/20 shadow-xl"
            >
              <div className="flex flex-col p-4 gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3.5 text-sm font-semibold rounded-xl transition-all",
                      location.pathname === item.href
                        ? "text-white bg-primary shadow-md shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-neutral-100"
                    )}
                  >
                    <span className="opacity-70">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
                <div className="mt-2 pt-4 border-t border-neutral-100">
                  <Button asChild className="w-full h-12 rounded-xl text-base font-bold">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Book Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;