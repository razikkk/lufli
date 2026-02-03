import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    title: "Recruitment Drive 2024",
    category: "Event",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    title: "Dubai Job Fair",
    category: "Event",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    title: "IT Professionals Hiring",
    category: "Jobs",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    title: "Healthcare Recruitment",
    category: "Jobs",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    title: "Team Building Session",
    category: "Event",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    title: "New Office Opening",
    category: "News",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    title: "Interview Preparation Workshop",
    category: "Event",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    title: "Successful Candidates 2024",
    category: "Success",
  },
];

const HiringGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, galleryImages.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-serif">
              Now Hiring Gallery
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Browse our recent job postings, events, and success stories
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

        {/* Desktop Slider */}
        <div className="hidden lg:block overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.5)}%)` }}
          >
            {galleryImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div className="min-w-[calc(25%-18px)] flex-shrink-0 cursor-pointer group">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn className="text-background h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                        <span className="text-xs text-accent font-medium uppercase">
                          {image.category}
                        </span>
                        <h3 className="text-background font-semibold mt-1">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.slice(0, 6).map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer group">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="text-background h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringGallery;
