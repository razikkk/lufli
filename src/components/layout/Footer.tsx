import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Travel Services", path: "/travel" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Job Placement",
    "Visa Assistance",
    "Travel Packages",
    "Study Programs",
    "Documentation Support",
    "Career Counseling",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/lufli_travel_company?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#002D62] text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
    {/* THIS GRID WRAPPER MAKES THEM APPEAR IN A ROW */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* 1. Company Info (Left Side) */}
      <div>
        <Link to="/" className="inline-block mb-6">
          <img 
            src="lufli-white.png" 
            alt="Lufli Logo" 
            className="h-20 md:h-24 w-auto object-contain -ml-14" 
          />
        </Link>
        <p className="text-primary-foreground/80 mb-6 leading-relaxed">
          Your trusted partner for global opportunities. With over 10 years of experience, 
          we help you achieve your dreams of working, traveling, and studying abroad.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* 2. Quick Links (Center Left) */}
      <div>
        <h3 className="text-lg font-semibold mb-6 font-serif">Quick Links</h3>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Services (Center Right) */}
      <div>
        <h3 className="text-lg font-semibold mb-6 font-serif">Our Services</h3>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service} className="text-primary-foreground/80">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Contact Info (Right Side) */}
      <div>
        <h3 className="text-lg font-semibold mb-6 font-serif">Contact Us</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Main Office</span>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <p className="text-sm text-primary-foreground/80">
              Apco Hyundai, Puthiyara, Kozhikode, Kerala 673004
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Enquiries</span>
            <a href="tel:+918891416777" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              <Phone className="h-5 w-5 text-accent" />
              +91 8891416777
            </a>
            <a href="mailto:hr@lufliinternational.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              <Mail className="h-5 w-5 text-accent" />
              hr@lufliinternational.com            </a>
          </div>
        </div>
      </div>

    </div> {/* End of Grid Wrapper */}
  </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Lufli. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
