import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutPreview = () => {
  const highlights = [
    "5+ Years of Industry Excellence",
    "Trusted by clients globally for manpower, education, and travel services",
    "End-to-end solutions across multiple sectors",
    "Professional, ethical, and transparent approach",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional consultants team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-2xl -z-10"></div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl z-20">
              <p className="text-4xl font-bold font-serif">10K+</p>
              <p className="text-primary-foreground/80 text-sm">Successful Placements</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-serif leading-tight">
              Your Trusted Partner for
              <span className="text-primary"> Global Opportunities</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Lufli International was founded with a clear vision: to simplify global opportunities
for individuals and organizations through reliable, ethical, and expert-driven services.
With over 5+ years of industry experience, we have grown into a trusted name across
manpower solutions, travel & tourism, and education services.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
            From our early days, our focus has always been on quality, transparency, and long-
term relationships. What started as a small initiative has evolved into a multi-service
organization serving clients across domestic and international markets.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-golden-dark text-accent-foreground font-semibold text-lg px-8"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
