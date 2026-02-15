import { Globe2, Users, Trophy, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#002D62]">
      {/* --- PREMIUM BACKGROUND LAYER --- */}
      <div className="absolute inset-0">
        {/* Blue Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002D62] via-[#003b82] to-[#001a3a]"></div>
        
        {/* Subtle Map Overlay - Professional for Global Manpower */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/world-map.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Abstract Light Rays (Yellow hue) */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col items-center text-center">
          
          {/* 1. THE LOGO BOX (Centered & Impactful) */}
          <div className="mb-8 p-4 rounded-2xl shadow-2xl animate-fade-in transform hover:scale-105 transition-transform duration-500">
            {/* Replace /logo.png with your actual image path */}
            <img 
              src="/lufli-white.png" 
              alt="Company Logo" 
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>

          {/* 2. Headline with Yellow Accents */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Connecting Talent to <br />
            <span className="text-[#FFD700]">Global Opportunities</span>
          </h1>

          {/* 3. Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
            Your trusted partner in international recruitment. We bridge the gap 
            between skilled professionals and leading industries worldwide.
          </p>

          {/* 4. Action Buttons (Yellow Primary) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="h-14 px-10 bg-[#FFD700] hover:bg-[#e6c200] text-[#002D62] font-bold text-lg rounded-full shadow-xl shadow-yellow-900/20 group">
              Explore Vacancies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-14 px-10 border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full backdrop-blur-md">
              For Employers
            </Button>
          </div>

          {/* 5. Trust Bar (Replaced the search box with Credibility) */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Placements", value: "10K+", icon: Users },
              { label: "Countries", value: "25+", icon: Globe2 },
              { label: "Industries", value: "12+", icon: Building2 },
              { label: "Success Rate", value: "99%", icon: Trophy },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-6 h-6 text-[#FFD700] mb-2" />
                <span className="text-2xl font-bold text-white">{item.value}</span>
                <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Elegant Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
    </section>
  );
};

export default HeroSection;