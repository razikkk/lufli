import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Travel", path: "/travel" },
    // { name: "Study Abroad", path: "/study-abroad" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar */}
      <div className="bg-[#002D62] text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918891416777" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              +91 8891416777
            </a>
            <a href="mailto:hr@lufliinternational.com " className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              hr@lufliinternational.com            
            </a>
          </div>
          <p className="text-primary-foreground/80">Your Gateway to Global Opportunities</p>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
        {/* Logo */}
<Link to="/" className="flex items-center group">
  <div className="relative overflow-visible flex items-center justify-center">
    <img 
      src="lufli-logo.png" 
      alt="Lufli Logo" 
      className="
        /* Mobile size */
        h-20 w-auto 
        /* Desktop size */
        md:h-28 lg:h-28 
        /* Behavior */
        object-contain transition-transform duration-300 group-hover:scale-105
        /* Positioning adjustments */
        -my-4 // This allows the logo to 'bleed' slightly into the padding for a bigger look
      " 
    />
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#002D62] relative py-2 ${
                  isActive(link.path) 
                    ? "text-[#002D62] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent" 
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-golden-dark text-accent-foreground font-semibold">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary py-2 ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-accent hover:bg-golden-dark text-accent-foreground font-semibold mt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
