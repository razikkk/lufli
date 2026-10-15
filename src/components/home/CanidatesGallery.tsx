import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// Generates an array explicitly for images 33.JPG through 89.JPG
const flightedImages = Array.from({ length: 57 }, (_, index) => {
  const imageNumber = index + 33; // Starts at 33, ends at 89
  return {
    id: imageNumber,
    src: `/${imageNumber}.JPG`,          // Primary attempt (.JPG)
    fallbackSrc: `/${imageNumber}.jpeg`, // Fallback attempt (.jpeg)
    alt: `Flighted Candidate ${imageNumber}`,
  };
});

// Helper component to handle stateful image fallback (.JPG -> .jpeg)
const FallbackImage = ({
  src,
  fallbackSrc,
  alt,
  className,
  onLoadedSrcChange,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  onLoadedSrcChange?: (currentSrc: string) => void;
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
          if (onLoadedSrcChange) onLoadedSrcChange(fallbackSrc);
        }
      }}
    />
  );
};

// Helper function to bundle 4 images per slide section
const chunkArray = (array: typeof flightedImages, size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const CanidatesGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Store successfully loaded image paths by image ID
  const [activeSrcs, setActiveSrcs] = useState<Record<number, string>>({});

  const imageSlides = chunkArray(flightedImages, 4);
  const maxSlides = imageSlides.length;

  const goToPrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlides - 1, prev + 1));
  };

  const handleSrcChange = (id: number, resolvedSrc: string) => {
    setActiveSrcs((prev) => ({ ...prev, [id]: resolvedSrc }));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif">
              Flighted Candidates
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Browse our successfully placed and flighted professionals.
            </p>
          </div>
          
          {/* Navigation Action Buttons */}
          <div className="flex gap-2 self-end sm:self-auto">
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
                        <div className="relative rounded-lg overflow-hidden aspect-[4/5] max-h-[420px] w-full mx-auto shadow-sm bg-muted/10 border">
                          <FallbackImage
                            src={image.src}
                            fallbackSrc={image.fallbackSrc}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onLoadedSrcChange={(resolvedSrc) =>
                              handleSrcChange(image.id, resolvedSrc)
                            }
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn className="text-white h-6 w-6 transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    
                    {/* Fullscreen Modal Image View */}
                    <DialogContent className="max-w-md p-2 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center">
                      <FallbackImage
                        src={activeSrcs[image.id] || image.src}
                        fallbackSrc={image.fallbackSrc}
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
                      <FallbackImage
                        src={image.src}
                        fallbackSrc={image.fallbackSrc}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        onLoadedSrcChange={(resolvedSrc) =>
                          handleSrcChange(image.id, resolvedSrc)
                        }
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="text-white h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-xs p-1 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center">
                  <FallbackImage
                    src={activeSrcs[image.id] || image.src}
                    fallbackSrc={image.fallbackSrc}
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

export default CanidatesGallery;