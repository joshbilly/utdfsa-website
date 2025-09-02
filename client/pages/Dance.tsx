import { useState } from "react";
import { Link } from "react-router-dom";

interface DanceCarouselProps {
  images: string[];
}

function DanceCarousel({ images }: DanceCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const getPreviousImage = () => {
    return images[(currentSlide - 1 + images.length) % images.length];
  };

  const getNextImage = () => {
    return images[(currentSlide + 1) % images.length];
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
        {/* Desktop Layout - Exactly matching homepage */}
        <div className="hidden lg:flex items-center justify-center w-full relative">
          {/* Left image - shows previous slide */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-[355px] h-[421px] flex-shrink-0 opacity-60 hover:opacity-80 transition-all duration-300 cursor-pointer z-5 ${isTransitioning ? 'scale-95 opacity-40' : ''}`}
          >
            <img
              src={getPreviousImage()}
              alt="Dance team preview"
              className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />
          </button>

          {/* Center image - main focus */}
          <div className={`relative w-[725px] h-[421px] flex-shrink-0 z-10 transition-all duration-300 ${isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
            <img
              src={images[currentSlide]}
              alt="Dance team center"
              className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />
          </div>

          {/* Right image - shows next slide */}
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-[355px] h-[421px] flex-shrink-0 opacity-60 hover:opacity-80 transition-all duration-300 cursor-pointer z-5 ${isTransitioning ? 'scale-95 opacity-40' : ''}`}
          >
            <img
              src={getNextImage()}
              alt="Dance team preview"
              className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />
          </button>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex items-center justify-center w-full px-4">
          <div className={`relative w-full max-w-[500px] md:max-w-[600px] h-[300px] md:h-[400px] transition-all duration-300 ${isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
            <img
              src={images[currentSlide]}
              alt="Dance team center"
              className={`w-full h-full object-cover rounded-lg transition-all duration-300 ${isTransitioning ? 'blur-sm' : ''}`}
            />

            {/* Mobile navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 transition-opacity"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
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
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 lg:w-3 lg:h-3 rounded-full transition-all duration-300 transform ${
                index === currentSlide
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

export default function Dance() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample images for carousels
  const spiritImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F92624111092447a1a57c00c54bbd4839?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F934dc0dc689042e2a7be198d2eae530c?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F15b993d2ad0e4d26a5238f375e336968?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Faa06e521eb4e4974b091fc10320e2de9?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F7cc74684e0564f88980775e502f30c17?format=webp&width=800"
  ];

  const culturalImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F256bf3fc12e7406c831eda8ec18bbf52?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fa1eaac669dab452598785d5afc0119e7?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F5904f248d5be4031b542d93d4219f109?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F25d64c6e784d4728be76ebb5cec4bbf9?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F39504e2caa134aeea2a26fe3c30301a4?format=webp&width=800"
  ];

  const modernImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fb7bb5a48506d499eb880f886e7a8509a?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F116db6514a3d40d9ad474dcc5a7daa9a?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F1b085aafa3fa4917a8455a00f22195e7?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F670ba7e07ffb4d6aa1f1df040da757de?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fbdc00de098654f51aac837a17cc57757?format=webp&width=800"
  ];

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/999b9a31f71f65f30dbc7963b8909b87d9b796e9?width=3030')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay matching Pamilya page */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(13, 39, 24, 0.9) 0%, rgba(47, 141, 87, 0.8) 84.13%)',
          minHeight: '100%'
        }}
      />
      
      <div className="relative z-10 w-full">
        {/* Header - Same as other pages */}
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
              <Link to="/about" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">ABOUT</Link>
              <Link to="/dance" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">DANCE</Link>
              <Link to="/goodphil" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">GOODPHIL</Link>
              <Link to="/membership" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">MEMBERSHIP</Link>

              <Link to="/" className="mx-0.5 lg:mx-1 flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0b71d23b1df30b83ca0f8bcad5b1483f948303d5?width=92"
                  alt="FSA Logo"
                  className="w-[60px] h-[60px] drop-shadow-lg"
                />
              </Link>

              <Link to="/media" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">MEDIA</Link>
              <Link to="/events" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">EVENTS</Link>
              <Link to="/pamilyas" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">PAMILYAS</Link>
              <Link to="/faq" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">FAQ</Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center justify-between w-full px-4 h-[60px] relative">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0b71d23b1df30b83ca0f8bcad5b1483f948303d5?width=92"
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
                    <Link to="/about" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
                    <Link to="/dance" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>DANCE</Link>
                    <Link to="/goodphil" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>GOODPHIL</Link>
                    <Link to="/membership" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>MEMBERSHIP</Link>
                    <Link to="/media" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>MEDIA</Link>
                    <Link to="/events" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</Link>
                    <Link to="/pamilyas" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>PAMILYAS</Link>
                    <Link to="/faq" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
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

        <main className="flex flex-col items-center px-4 py-8 lg:py-16 gap-12 lg:gap-20">
          {/* Page Title */}
          <section className="w-full max-w-6xl">
            <div className="flex items-center justify-center gap-4 lg:gap-8 mb-12 lg:mb-16">
              {/* Left line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
              
              {/* Title */}
              <h1 
                className="text-white font-fugaz text-4xl sm:text-6xl lg:text-[96px] text-center flex-shrink-0"
                style={{
                  textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                DANCE
              </h1>
              
              {/* Right line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
            </div>
          </section>

          {/* Introduction */}
          <section className="w-full max-w-5xl text-center relative">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white border-opacity-20">
              <p
                className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                UTD FSA has three dance teams: <span className="font-bold text-yellow-300">Spirit</span>, <span className="font-bold text-blue-300">Cultural</span>, and <span className="font-bold text-pink-300">Modern</span>! Find out more about our teams and what it means to be a part of each one.
              </p>
            </div>
          </section>

          {/* SPIRIT Section */}
          <section className="w-full max-w-6xl space-y-8 lg:space-y-12 relative">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-3xl -z-10"></div>

            <div className="relative bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-yellow-300 border-opacity-30">
              <div className="text-center space-y-4 lg:space-y-6">
                <div className="relative inline-block">
                  <h2
                    className="text-white font-fugaz text-3xl lg:text-[48px] relative z-10"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span className="text-yellow-300">SPIRIT</span>
                  </h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </div>

                <p
                  className="text-white font-gabarito text-lg lg:text-[28px] leading-relaxed max-w-5xl mx-auto"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  Spirit is a performance category in Goodphil that combines school spirit, recent pop culture trends, & Filipino/FSA culture! Each school creates a performance that ranges from chants and skits while representing their FSA's heart and identity to ignite the crowd.
                </p>
              </div>

              <div className="mt-12">
                <DanceCarousel images={spiritImages} />
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-300 border-opacity-30">
                  <h3
                    className="text-white font-fugaz text-xl lg:text-[36px] mb-6"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    🎬 WATCH OUR GOODPHIL 2025 SPIRIT SET!
                  </h3>
                  <div className="w-full max-w-3xl mx-auto">
                    <div className="relative rounded-[28px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <iframe
                        src="https://www.youtube.com/embed/02wg-b1WghI?start=1"
                        title="UTD FSA Spirit Team - Goodphil 2025"
                        className="w-full h-[200px] md:h-[300px] lg:h-[408px]"
                        style={{
                          backgroundColor: '#1a1a1a'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Spirit Fun Fact */}
              <div className="text-center mt-12">
                <div className="relative bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-yellow-300 border-opacity-30 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 text-4xl">🥇</div>
                  <div className="absolute top-4 right-4 text-4xl">✨</div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl">🎉</div>

                  <div className="relative z-10">
                    <h3
                      className="text-white font-fugaz text-2xl lg:text-[40px] mb-4"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      🎊 SPIRIT CHAMPIONS 🎊
                    </h3>
                    <p
                      className="text-white font-gabarito text-xl lg:text-[36px] font-bold"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      We placed <span className="text-yellow-300 text-2xl lg:text-[42px]">1st</span> this year!
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CULTURAL Section */}
          <section className="w-full max-w-6xl space-y-8 lg:space-y-12 relative">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-3xl -z-10"></div>

            <div className="relative bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-blue-300 border-opacity-30">
              <div className="text-center space-y-4 lg:space-y-6">
                <div className="relative inline-block">
                  <h2
                    className="text-white font-fugaz text-3xl lg:text-[48px] relative z-10"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span className="text-blue-300">CULTURAL</span>
                  </h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                </div>

                <p
                  className="text-white font-gabarito text-lg lg:text-[28px] leading-relaxed max-w-5xl mx-auto"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  UTD FSA's Cultural team, also known as <span className="font-bold text-blue-300">UTD Pamana</span>, competes at Isang Mahal and Goodphil! Pamana aims to promote and celebrate Filipino heritage through dance by delivering impactful, storytelling performances.
                </p>

                {/* Instagram link with better styling */}
                <div className="mt-6">
                  <a
                    href="https://instagram.com/utdpamana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-fugaz text-lg lg:text-xl px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>📸</span>
                    <span>Follow @utdpamana</span>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <DanceCarousel images={culturalImages} />
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-2xl p-8 border border-blue-300 border-opacity-30">
                  <h3
                    className="text-white font-fugaz text-xl lg:text-[36px] mb-6"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    🎬 WATCH OUR GOODPHIL 2025 CULTURAL SET!
                  </h3>
                  <div className="w-full max-w-3xl mx-auto">
                    <div className="relative rounded-[28px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <iframe
                        src="https://www.youtube.com/embed/ru_9K8ygmRg"
                        title="UTD FSA Cultural Team - Goodphil 2025"
                        className="w-full h-[200px] md:h-[300px] lg:h-[408px]"
                        style={{
                          backgroundColor: '#1a1a1a'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MODERN Section */}
          <section className="w-full max-w-6xl space-y-8 lg:space-y-12 relative">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400/10 to-rose-500/10 rounded-3xl -z-10"></div>

            <div className="relative bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-pink-300 border-opacity-30">
              <div className="text-center space-y-4 lg:space-y-6">
                <div className="relative inline-block">
                  <h2
                    className="text-white font-fugaz text-3xl lg:text-[48px] relative z-10"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span className="text-pink-300">MODERN</span>
                  </h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
                </div>

                <p
                  className="text-white font-gabarito text-lg lg:text-[28px] leading-relaxed max-w-5xl mx-auto"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <span className="font-bold text-pink-300">UTD Maharlika</span> is UTD FSA's Modern team that competes at Isang Mahal and Goodphil! Maharlika aims to exemplify high performance quality within UTD FSA while specializing in hip hop and other styles of dance. The team also aims to foster community in dance and promote growth through shared exploration.
                </p>

                {/* Instagram link with better styling */}
                <div className="mt-6">
                  <a
                    href="https://instagram.com/utdmaharlika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-fugaz text-lg lg:text-xl px-6 py-3 rounded-full hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>📸</span>
                    <span>Follow @utdmaharlika</span>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <DanceCarousel images={modernImages} />
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-pink-400/20 to-rose-500/20 rounded-2xl p-8 border border-pink-300 border-opacity-30">
                  <h3
                    className="text-white font-fugaz text-xl lg:text-[36px] mb-6"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    🎬 WATCH OUR GOODPHIL 2025 MODERN SET!
                  </h3>
                  <div className="w-full max-w-3xl mx-auto">
                    <div className="relative rounded-[28px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <iframe
                        src="https://www.youtube.com/embed/ngXiLlF_lYY?start=1"
                        title="UTD FSA Modern Team - Goodphil 2025"
                        className="w-full h-[200px] md:h-[300px] lg:h-[408px]"
                        style={{
                          backgroundColor: '#1a1a1a'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Fact */}
          <section className="text-center py-8 lg:py-12">
            <div className="relative bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-20 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 text-4xl">🏆</div>
              <div className="absolute top-4 right-4 text-4xl">✨</div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl">🎉</div>

              <div className="relative z-10">
                <h3
                  className="text-white font-fugaz text-2xl lg:text-[40px] mb-4"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  🎊 FUN FACT 🎊
                </h3>
                <p
                  className="text-white font-gabarito text-xl lg:text-[36px] font-bold"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  We placed <span className="text-yellow-300 text-2xl lg:text-[42px]">3rd</span> this year!
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center py-12 lg:py-16">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-30 max-w-4xl mx-auto">
              <h3
                className="text-white font-fugaz text-2xl lg:text-[40px] mb-6"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                READY TO DANCE WITH US?
              </h3>
              <p
                className="text-white font-gabarito text-lg lg:text-[24px] mb-8 max-w-2xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Join UTD FSA and become part of our amazing dance family! Check out our events and see how you can get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>🗓️</span>
                  <span>View Events</span>
                </Link>
                <Link
                  to="/membership"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>✨</span>
                  <span>Join FSA</span>
                </Link>
              </div>
            </div>
          </section>

        </main>

        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </div>
    </div>
  );
}
