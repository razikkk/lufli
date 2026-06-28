import { Shield, FileText, HeadphonesIcon, Globe, Briefcase, ShieldCheck, Layers, Eye } from "lucide-react";

const features = [
  
    {
      icon: Briefcase, // Changed to Briefcase to represent "Industry Experience"
      title: "5+ Years of Industry Experience",
      description: "A solid track record of connecting top-tier talent with global leaders, backed by half a decade of specialized recruitment expertise.",
    },
    {
      icon: ShieldCheck, // Changed to ShieldCheck to represent "Trust"
      title: "Trusted Globally for Manpower",
      description: "A premier choice for manpower, education, and travel services, relied upon by clients worldwide for consistent excellence.",
    },
    {
      icon: Layers, // Represents "End-to-End Solutions"
      title: "Multi-Sector Global Solutions",
      description: "Comprehensive end-to-end services across various industries, ensuring seamless transitions for both employers and candidates.",
    },
    {
      icon: Eye, // Represents "Transparency"
      title: "Ethical & Transparent Approach",
      description: "Committed to the highest professional standards with a transparent process that prioritizes integrity in every placement.",
    },

];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#002D62]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Why Lufli International?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-serif">
            What Sets Us Apart
          </h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            Experience excellence with our comprehensive services designed to make your 
            international journey smooth and successful
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative group"
            >
              <div className="bg-[#002D62]-foreground/5 hover:bg-[#002D62]-foreground/10 rounded-2xl p-8 h-full transition-all duration-300 border border-[#002D62]-foreground/10 hover:border-accent/50">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                
                {/* Number badge */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-white font-serif">
                  0{index + 1}
                </span>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
