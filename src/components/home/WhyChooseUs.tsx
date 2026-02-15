import { Shield, FileText, HeadphonesIcon, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Employers",
    description: "We partner only with thoroughly vetted companies to ensure your safety and career growth.",
  },
  {
    icon: FileText,
    title: "Fast Documentation",
    description: "Our streamlined process ensures quick visa processing and hassle-free documentation.",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description: "From application to arrival, our team supports you at every step of your journey.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access opportunities in 50+ countries through our extensive network of employers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#002D62]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
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
