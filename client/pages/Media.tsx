import { useState } from "react";
import { Link } from "react-router-dom";

interface MediaCarouselData {
  categories: {
    pamilyas: string[];
    sports: string[];
    modern: string[];
    cultural: string[];
  };
}

const mediaCarouselData: MediaCarouselData = {
  categories: {
    pamilyas: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F3c166aa73c0f4afdad64ba723b8d8ac2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F3c166aa73c0f4afdad64ba723b8d8ac2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F3c166aa73c0f4afdad64ba723b8d8ac2?format=webp&width=800"
    ],
    sports: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F60cda96a82564aa1a4292f3fa5030b1d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F60cda96a82564aa1a4292f3fa5030b1d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F60cda96a82564aa1a4292f3fa5030b1d?format=webp&width=800"
    ],
    modern: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F9a845faf404849059670ae655cc385c6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F9a845faf404849059670ae655cc385c6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F9a845faf404849059670ae655cc385c6?format=webp&width=800"
    ],
    cultural: [
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F3de2293ede294cf3bc88df434b7820df?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F3de2293ede294cf3bc88df434b7820df?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F3de2293ede294cf3bc88df434b7820df?format=webp&width=800"
    ]
  }
};

function MediaCarousel() {
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselNames = ["pamilyas", "sports", "modern", "cultural"] as const;

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
    return mediaCarouselData.categories[categoryName];
  };

  const getPreviousImages = () => {
    const prevIndex = currentCarousel === 0 ? carouselNames.length - 1 : currentCarousel - 1;
    const categoryName = carouselNames[prevIndex];
    return mediaCarouselData.categories[categoryName];
  };

  const getNextImages = () => {
    const nextIndex = currentCarousel === carouselNames.length - 1 ? 0 : currentCarousel + 1;
    const categoryName = carouselNames[nextIndex];
    return mediaCarouselData.categories[categoryName];
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

export default function Media() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(180deg, #2F8D57 15.87%, #0D2718 100%)'
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50">
        <div
          className="h-[80px] lg:h-[80px] w-full flex justify-center"
          style={{
            background: 'linear-gradient(180deg, #0D2718 27.4%, #3E562D 100%)',
            paddingTop: '20px'
          }}
        >
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-between flex-nowrap w-[1453px] h-[60px] px-8">
            <Link to="/about" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">ABOUT</Link>
            <Link to="/resources" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">RESOURCES</Link>
            <Link to="/sports" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">SPORTS</Link>
            <Link to="/dance" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">DANCE</Link>
            <Link to="/goodphil" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">GOODPHIL</Link>

            <Link to="/" className="mx-0.5 lg:mx-1 flex-shrink-0 hover:opacity-80 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6ea7386c97fadc05b66d667a7f75d98667ca01eb?width=120"
                alt="FSA Logo"
                className="w-[60px] h-[60px] drop-shadow-lg"
              />
            </Link>

            <Link to="/membership" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">MEMBERSHIP</Link>
            <Link to="/media" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">MEDIA</Link>
            <Link to="/events" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">EVENTS</Link>
            <Link to="/pamilyas" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">PAMILYAS</Link>
            <Link to="/faq" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">FAQ</Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full px-4 h-[60px] relative">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6ea7386c97fadc05b66d667a7f75d98667ca01eb?width=120"
                alt="FSA Logo"
                className="w-[40px] h-[40px] drop-shadow-lg"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white font-fugaz text-2xl drop-shadow-lg z-50 relative"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-[60px] left-0 right-0 bg-[#0D2718] border-t border-[#3E562D] shadow-lg z-40">
                <nav className="flex flex-col py-4">
                  <Link
                    to="/about"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="/resources"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    RESOURCES
                  </Link>
                  <Link
                    to="/sports"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SPORTS
                  </Link>
                  <Link
                    to="/dance"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    DANCE
                  </Link>
                  <Link
                    to="/goodphil"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    GOODPHIL
                  </Link>
                  <Link
                    to="/membership"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    MEMBERSHIP
                  </Link>
                  <Link
                    to="/media"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    MEDIA
                  </Link>
                  <Link
                    to="/events"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    EVENTS
                  </Link>
                  <Link
                    to="/pamilyas"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PAMILYAS
                  </Link>
                  <Link
                    to="/faq"
                    className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
        {/* White bar */}
        <div className="w-full h-[15px] bg-white" />
        {/* Header shadow */}
        <div className="w-full h-px bg-transparent shadow-[0_4px_6px_0_rgba(0,0,0,0.75)]" />
      </header>

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center h-[400px] md:h-[500px] lg:h-[400px] px-4 py-8"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/7849aa7b952c9570944767e5fbb48d9cc58d95cd?width=3024')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        <h1
          className="text-white font-fugaz text-6xl md:text-8xl lg:text-[80px] text-center"
          style={{
            textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          MEDIA
        </h1>
      </section>

      {/* Main Content Section */}
      <section
        className="relative w-full min-h-[600px] lg:min-h-[500px] flex flex-col items-center justify-center px-4 py-12 gap-6"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/525e88113bc5c939655d1a30aa187993a625fdd6?width=3024')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h2
          className="text-white font-fugaz text-2xl md:text-3xl lg:text-[32px] text-center max-w-[1114px]"
          style={{
            textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          INTERESTED IN PRODUCING CONTENT FOR FSA?
        </h2>

        <p
          className="text-white font-gabarito text-lg md:text-xl lg:text-[24px] text-center max-w-[1073px] leading-relaxed"
          style={{
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Led by our Historian and Marketing Chair, the UTD FSA Media Team is in charge of capturing picture perfect moments of socials, events, and memories throughout the year! Whether you're an experienced photographer/videographer/editor or a beginner stepping into the realm of photography, we welcome everybody in joining us create an archive of the beautiful memories made in FSA!
        </p>

        <button
          className="relative w-[300px] md:w-[400px] lg:w-[400px] h-[45px] md:h-[50px] lg:h-[50px] rounded-[50px] text-white font-fugaz text-lg md:text-xl lg:text-[24px] text-center hover:opacity-90 transition-opacity"
          style={{
            background: '#27688E',
            boxShadow: '3px 4px 4px 0 rgba(0, 0, 0, 0.25)',
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Join the Media Team!
        </button>

        <a
          href="https://docs.google.com/document/d/1lziZZL06YktACAXfUpGCUYVpTqC2DNK43FYqAtzzBx8/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-fugaz text-lg md:text-xl lg:text-[24px] text-center underline hover:opacity-80 transition-opacity"
          style={{
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          UTD FSA Photo Album &gt;
        </a>
      </section>

      {/* Media Carousel */}
      <MediaCarousel />

    </div>
  );
}
