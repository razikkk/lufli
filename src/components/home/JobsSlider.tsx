import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const jobsData = [
  {
    id: 1,
    country: "Dubai",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    id: 2,
    country: "Saudi",
    flag: "🇸🇦",
    image: "/saudi.jpg",
  },
  {
    id: 3,
    country: "Europe",
    flag: "🇪🇺",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
  },
  {
    id: 4,
    country: "Russia",
    flag: "🇷🇺",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
  },
];

const JobsGrid = () => {
  return (
    <section id="jobs-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Explore Opportunities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-serif">
            Jobs by Region
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Discover exciting career opportunities across the globe with verified employers
          </p>
        </div>

        {/* Clean Image Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobsData.map((job) => (
            <Card 
              key={job.id} 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-0"
            >
              {/* Background Image */}
              <img
                src={job.image}
                alt={`Jobs in ${job.country}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/90"></div>
              
              {/* Country & Text Info centered/positioned nicely at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{job.flag}</span>
                  <span className="text-white/70 text-xs font-semibold tracking-widest uppercase flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Featured Region
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white font-serif tracking-wide leading-tight">
                  Jobs in {job.country}
                </h3>
                
                {/* Micro-interaction line indicator */}
                <div className="w-0 h-[2px] bg-white mt-3 group-hover:w-12 transition-all duration-300 rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsGrid;