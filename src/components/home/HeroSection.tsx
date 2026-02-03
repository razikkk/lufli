import { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "in", location);
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-royal-dark">        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse"></span>
            NOW HIRING WORLDWIDE
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-serif leading-tight animate-fade-in-up">
            Find Your Dream Career
            <span className="block text-accent">Across The Globe</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up">
            Connect with verified employers worldwide. We've helped over 10,000+ professionals 
            find rewarding careers in USA, Dubai, Canada, UK, and beyond.
          </p>

          {/* Search Bar */}
          {/* <form onSubmit={handleSearch} className="bg-background rounded-2xl p-3 shadow-2xl max-w-3xl mx-auto animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 border-0 bg-muted/50 text-lg"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Country or city"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-12 h-14 border-0 bg-muted/50 text-lg"
                />
              </div>
              <Button type="submit" className="h-14 px-8 bg-accent hover:bg-golden-dark text-accent-foreground font-semibold text-lg">
                <Search className="mr-2 h-5 w-5" />
                Search Jobs
              </Button>
            </div>
          </form> */}

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 animate-fade-in-up">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">10K+</p>
              <p className="text-primary-foreground/70">Jobs Placed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">50+</p>
              <p className="text-primary-foreground/70">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">98%</p>
              <p className="text-primary-foreground/70">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">10+</p>
              <p className="text-primary-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
