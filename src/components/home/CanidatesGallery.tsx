import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// Generates an array explicitly for 58 items starting from 33 (33 through 90)
const flightedImages = Array.from({ length: 58 }, (_, index) => {
  const mediaNumber = index + 33; // Starts at 33, ends at 90
  return {
    id: mediaNumber,
    src: `/${mediaNumber}.JPG`,          // Primary attempt (.JPG)
    fallbackSrc: `/${mediaNumber}.jpeg`, // Secondary attempt (.jpeg)
    videoSrc: `/${mediaNumber}.mp4`,     // Final fallback attempt (.mp4)
    alt: `Flighted Candidate ${mediaNumber}`,
  };
});

// Helper component that falls back: .JPG -> .jpeg -> .mp4
const MultiFormatMedia = ({
  item,
  activeSrc,
  isModal = false,
  onLoadedSrcChange,
}: {
  item: typeof flightedImages[number];
  activeSrc?: string;
  isModal?: boolean;
  onLoadedSrcChange?: (currentSrc: string, format: "image" | "video") => void;
}) => {
  const [mediaSrc, setMediaSrc] = useState(activeSrc || item.src);
  const [isVideo, setIsVideo] = useState(activeSrc?.endsWith(".mp4") || false);

  if (isVideo) {
    return (
      <video
        src={mediaSrc}
        className={
          isModal
            ? "max-h-[85vh] w-auto object-contain rounded-lg shadow-xl"
            : "w-full h-full object-cover"
        }
        autoPlay
        loop
        muted
        playsInline
        controls={isModal}
      />
    );
  }

  return (
    <img
      src={mediaSrc}
      alt={item.alt}
      className={
        isModal
          ? "max-h-[85vh] w-auto object-contain rounded-lg shadow-xl"
          : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      }
      onError={() => {
        if (mediaSrc === item.src) {
          // Attempt 2: Try .jpeg
          setMediaSrc(item.fallbackSrc);
          if (onLoadedSrcChange) onLoadedSrcChange(item.fallbackSrc, "image");
        } else if (mediaSrc === item.fallbackSrc) {
          // Attempt 3: Try .mp4 video
          setMediaSrc(item.videoSrc);
          setIsVideo(true);
          if (onLoadedSrcChange) onLoadedSrcChange(item.videoSrc, "video");
        }
      }}
    />
  );
};

// Helper function to bundle 4 items per slide section
const chunkArray = (array: typeof flightedImages, size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const CanidatesGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Store successfully loaded paths and formats by item ID
  const [activeMedia, setActiveMedia] = useState<
    Record<number, { src: string; type: "image" | "video" }>
  >({});

  const imageSlides = chunkArray(flightedImages, 4);
  const maxSlides = imageSlides.length;

  const goToPrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlides - 1, prev + 1));
  };

  const handleMediaChange = (
    id: number,
    resolvedSrc: string,
    type: "image" | "video"
  ) => {
    setActiveMedia((prev) => ({ ...prev, [id]: { src: resolvedSrc, type } }));
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
                {slide.map((image) => {
                  const mediaInfo = activeMedia[image.id];
                  const isVideo = mediaInfo?.type === "video";

                  return (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer group">
                          <div className="relative rounded-lg overflow-hidden aspect-[4/5] max-h-[420px] w-full mx-auto shadow-sm bg-muted/10 border">
                            <MultiFormatMedia
                              item={image}
                              activeSrc={mediaInfo?.src}
                              onLoadedSrcChange={(src, type) =>
                                handleMediaChange(image.id, src, type)
                              }
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              {isVideo ? (
                                <Play className="text-white h-7 w-7 fill-white transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                              ) : (
                                <ZoomIn className="text-white h-6 w-6 transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      
                      {/* Fullscreen Modal View */}
                      <DialogContent className="max-w-md p-2 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center">
                        <MultiFormatMedia
                          item={image}
                          activeSrc={mediaInfo?.src}
                          isModal
                        />
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Viewport Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            {imageSlides[currentSlide]?.map((image) => {
              const mediaInfo = activeMedia[image.id];
              const isVideo = mediaInfo?.type === "video";

              return (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer group">
                      <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-sm border">
                        <MultiFormatMedia
                          item={image}
                          activeSrc={mediaInfo?.src}
                          onLoadedSrcChange={(src, type) =>
                            handleMediaChange(image.id, src, type)
                          }
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          {isVideo ? (
                            <Play className="text-white h-6 w-6 fill-white" />
                          ) : (
                            <ZoomIn className="text-white h-5 w-5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-xs p-1 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center">
                    <MultiFormatMedia
                      item={image}
                      activeSrc={mediaInfo?.src}
                      isModal
                    />
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CanidatesGallery;