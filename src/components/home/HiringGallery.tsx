import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// Dynamically generated image list from /1.JPG to /32.JPG
const galleryImages = Array.from({ length: 32 }, (_, index) => ({
  id: index + 1,
  src: `/${index + 1}.JPG`,
  alt: `Gallery Image ${index + 1}`,
}));

// Helper function to bundle 4 images per slide section
const chunkArray = (array: typeof galleryImages, size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const HiringGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageSlides = chunkArray(galleryImages, 4);
  const maxSlides = imageSlides.length;

  const goToPrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlides - 1, prev + 1));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Navigation Action Buttons */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              disabled={currentSlide === 0}
              className="h-10 w-10 rounded-full border border-muted hover:bg-muted disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentSlide >= maxSlides - 1}
              className="h-10 w-10 rounded-full border border-muted hover:bg-muted disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Slide View Controller (2x2 Matrix Grid Config per page) */}
        <div className="hidden lg:block overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {imageSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="min-w-full flex-shrink-0 grid grid-cols-2 gap-4 px-1">
                {slide.map((image) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer group">
                        {/* Perfect desktop scale container tailored for 2047x2560 aspect tracks */}
                        <div className="relative rounded-lg overflow-hidden aspect-[4/5] max-h-[420px] w-full mx-auto shadow-sm bg-muted/10 border">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn className="text-white h-6 w-6 transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    
                    {/* Safe modal fullscreen layout adjustments */}
                    <DialogContent className="max-w-md p-2 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-[85vh] w-auto object-contain rounded-lg shadow-xl"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Viewport Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            {imageSlides[currentSlide]?.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-sm border">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="text-white h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-xs p-1 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[80vh] w-auto object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HiringGallery;