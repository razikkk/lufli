import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Briefcase, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const jobsData = [
  {
    id: 1,
    country: "USA",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
    openPositions: 150,
    avgSalary: "$4,500 - $8,000",
    popularRoles: ["Software Engineer", "Nurse", "Construction"],
  },
  {
    id: 2,
    country: "Dubai",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    openPositions: 200,
    avgSalary: "$3,000 - $6,000",
    popularRoles: ["Hospitality", "Sales", "Engineering"],
  },
  {
    id: 3,
    country: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    openPositions: 120,
    avgSalary: "$4,000 - $7,000",
    popularRoles: ["Healthcare", "IT", "Skilled Trades"],
  },
  {
    id: 4,
    country: "UK",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    openPositions: 95,
    avgSalary: "£3,000 - £5,500",
    popularRoles: ["Healthcare", "Finance", "Education"],
  },
  {
    id: 5,
    country: "Germany",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    openPositions: 85,
    avgSalary: "€3,500 - €6,000",
    popularRoles: ["Engineering", "IT", "Healthcare"],
  },
  {
    id: 6,
    country: "Australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    openPositions: 110,
    avgSalary: "A$5,000 - $8,000",
    popularRoles: ["Mining", "Healthcare", "IT"],
  },
];

const JobsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, jobsData.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Explore Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-serif">
              Jobs by Country
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Discover exciting career opportunities across the globe with verified employers
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
          >
            {jobsData.map((job) => (
              <Card 
                key={job.id} 
                className="min-w-[calc(33.333%-16px)] flex-shrink-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-0"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={job.image}
                    alt={`Jobs in ${job.country}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-3xl">{job.flag}</span>
                    <h3 className="text-2xl font-bold text-background font-serif">
                      Jobs in {job.country}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-foreground">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{job.openPositions}+ Open Positions</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <DollarSign className="h-5 w-5 text-accent" />
                      <span>Avg. Salary: {job.avgSalary}/mo</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm">{job.popularRoles.join(", ")}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full mt-6 bg-primary hover:bg-royal-dark">
                    View All Jobs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile: Show as stacked cards */}
        <div className="lg:hidden mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobsData.slice(0, 4).map((job) => (
            <Card 
              key={job.id} 
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-0"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={job.image}
                  alt={`Jobs in ${job.country}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl">{job.flag}</span>
                  <h3 className="text-xl font-bold text-background font-serif">
                    {job.country}
                  </h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="font-semibold text-foreground">{job.openPositions}+ Positions</p>
                <Button className="w-full mt-4 bg-primary hover:bg-royal-dark" size="sm">
                  View Jobs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSlider;
