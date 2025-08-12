import { useState } from "react";

interface CarouselData {
  categories: {
    pamilyas: string[];
    sports: string[];
    modern: string[];
    cultural: string[];
  };
}

const carouselData: CarouselData = {
  categories: {
    sports: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F8aacc90d889d484a8c22723f70bd6271?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F8aacc90d889d484a8c22723f70bd6271?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F8aacc90d889d484a8c22723f70bd6271?format=webp&width=800"
    ],
    modern: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F8d6a5569b1314b968221f3729dbb854e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F8d6a5569b1314b968221f3729dbb854e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F8d6a5569b1314b968221f3729dbb854e?format=webp&width=800"
    ],
    cultural: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F0751f758b44d4808a251c55686ebb4f6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F0751f758b44d4808a251c55686ebb4f6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F0751f758b44d4808a251c55686ebb4f6?format=webp&width=800"
    ],
    pamilyas: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F7e6d27b9141142b9a76431a0fcd2a713?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F7e6d27b9141142b9a76431a0fcd2a713?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F7e6d27b9141142b9a76431a0fcd2a713?format=webp&width=800"
    ]
  }
};

export default function Carousel() {
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselNames = ["sports", "modern", "cultural", "pamilyas"] as const;

  const goToCarousel = (index: number) => {
    if (index === currentCarousel || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCarousel(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      const prevIndex = currentCarousel === 0 ? carouselNames.length - 1 : currentCarousel - 1;
      setCurrentCarousel(prevIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      const nextIndex = currentCarousel === carouselNames.length - 1 ? 0 : currentCarousel + 1;
      setCurrentCarousel(nextIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const getCurrentImages = () => {
    const categoryName = carouselNames[currentCarousel];
    return carouselData.categories[categoryName];
  };

  const getPreviousImages = () => {
    const prevIndex = currentCarousel === 0 ? carouselNames.length - 1 : currentCarousel - 1;
    const categoryName = carouselNames[prevIndex];
    return carouselData.categories[categoryName];
  };

  const getNextImages = () => {
    const nextIndex = currentCarousel === carouselNames.length - 1 ? 0 : currentCarousel + 1;
    const categoryName = carouselNames[nextIndex];
    return carouselData.categories[categoryName];
  };

  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden bg-transparent"
      style={{
        boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
      }}
    >
      {/* Carousel container */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center w-full gap-[52px]">
          {/* Left image - shows previous slide */}
          <button
            onClick={goToPrevious}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-[355px] h-[421px] flex-shrink-0 opacity-60 hover:opacity-80 transition-all duration-300 cursor-pointer z-5 ${isTransitioning ? 'scale-95 opacity-40' : ''}`}
          >
            <img
              src={getPreviousImages()[1]}
              alt={`${carouselNames[currentCarousel === 0 ? carouselNames.length - 1 : currentCarousel - 1]} preview`}
              className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />
          </button>

          {/* Center image - main focus */}
          <div className={`relative w-[725px] h-[421px] flex-shrink-0 z-10 transition-all duration-300 ${isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
            <img
              src={getCurrentImages()[1]}
              alt={`${carouselNames[currentCarousel]} center`}
              className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />
          </div>

          {/* Right image - shows next slide */}
          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-[355px] h-[421px] flex-shrink-0 opacity-60 hover:opacity-80 transition-all duration-300 cursor-pointer z-5 ${isTransitioning ? 'scale-95 opacity-40' : ''}`}
          >
            <img
              src={getNextImages()[1]}
              alt={`${carouselNames[currentCarousel === carouselNames.length - 1 ? 0 : currentCarousel + 1]} preview`}
              className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />
          </button>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="flex lg:hidden items-center justify-center w-full px-4">
          <div className={`relative w-full max-w-[500px] md:max-w-[600px] h-[300px] md:h-[400px] transition-all duration-300 ${isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
            <img
              src={getCurrentImages()[1]}
              alt={`${carouselNames[currentCarousel]} center`}
              className={`w-full h-full object-cover rounded-lg transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />

            {/* Mobile navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 transition-opacity"
            >
              ‹
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 transition-opacity"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="relative mt-[10px] md:mt-[5px] lg:absolute lg:bottom-[15px] lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:z-20 flex items-center justify-center">
        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-6 bg-black bg-opacity-20 rounded-full px-6 py-3 md:px-8 md:py-4 lg:px-4 lg:py-2">
          {carouselNames.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCarousel(index)}
              className={`w-3 h-3 md:w-4 md:h-4 lg:w-3 lg:h-3 rounded-full transition-all duration-300 transform ${
                index === currentCarousel
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-60 hover:bg-opacity-80 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
