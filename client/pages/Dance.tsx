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
    "https://api.builder.io/api/v1/image/assets/TEMP/8f52f831cf264ca5216937896516a54cd4f3dca5?width=722",
    "https://api.builder.io/api/v1/image/assets/TEMP/3cd28a84e38699c0160ae3470566eca18378aa21?width=1042",
    "https://api.builder.io/api/v1/image/assets/TEMP/168e3567e55db9944e568d8453a69781b1e5ec19?width=1042",
    "https://api.builder.io/api/v1/image/assets/TEMP/2a24daaaec56d08001af321995f5f96e8108a2fd?width=1362",
    "https://api.builder.io/api/v1/image/assets/TEMP/0dc2a94969ff632c429b75ccb2b4570029114e21?width=722"
  ];

  const culturalImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/31cf8dfd8a3d3a626bdb2fe07319589bdf1933ef?width=722",
    "https://api.builder.io/api/v1/image/assets/TEMP/5b8abccdc732263dab9cfde76d9689c2e7f028a3?width=1042",
    "https://api.builder.io/api/v1/image/assets/TEMP/39bf68a2106d77e03a4c5fd8931bbaeb47857569?width=1042",
    "https://api.builder.io/api/v1/image/assets/TEMP/68da459196193768fac1ad60297a649ad661f7a3?width=1362",
    "https://api.builder.io/api/v1/image/assets/TEMP/1d92b6b07b1cab4e520d6626d415bb0b47a2b009?width=722"
  ];

  const modernImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/41cab6e5b4a1bb9f7d4daf34e5554e8f234d6967?width=722",
    "https://api.builder.io/api/v1/image/assets/TEMP/8f56e12ac4a459deb20c62b8c620bd9cca95cfb3?width=1042",
    "https://api.builder.io/api/v1/image/assets/TEMP/9656e3cba6e2cb13a4d91c47e685d7e604253f36?width=1042",
    "https://api.builder.io/api/v1/image/assets/TEMP/9b2fdd5593ce385174b1359e356b0c9acbb3bc58?width=1362",
    "https://api.builder.io/api/v1/image/assets/TEMP/b68221eeccb4a6c4f8034afcd8189ae4af0b436b?width=722"
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
              <Link to="/about" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">ABOUT</Link>
              <Link to="/resources" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">RESOURCES</Link>
              <Link to="/sports" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">SPORTS</Link>
              <Link to="/dance" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">DANCE</Link>
              <Link to="/goodphil" className="text-white font-fugaz text-[24px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity">GOODPHIL</Link>

              <Link to="/" className="mx-0.5 lg:mx-1 flex-shrink-0 hover:opacity-80 transition-opacity">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0b71d23b1df30b83ca0f8bcad5b1483f948303d5?width=92"
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
                    <Link to="/resources" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>RESOURCES</Link>
                    <Link to="/sports" className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>SPORTS</Link>
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
          <section className="w-full max-w-5xl text-center">
            <p 
              className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              UTD FSA has three dance teams: Spirit, Cultural, and Modern! Find out more about our teams and what it means to be a part of each one.
            </p>
          </section>

          {/* SPIRIT Section */}
          <section className="w-full max-w-6xl space-y-8 lg:space-y-12">
            <div className="text-center space-y-4 lg:space-y-6">
              <h2 
                className="text-white font-fugaz text-2xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                SPIRIT
              </h2>
              <p 
                className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed max-w-5xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Spirit is a performance category in Goodphil that combines school spirit, recent pop culture trends, & Filipino/FSA culture! Each school creates a performance that ranges from chants and skits while representing their FSA's heart and identity to ignite the crowd.
              </p>
            </div>

            <DanceCarousel images={spiritImages} />

            <div className="text-center">
              <h3
                className="text-white font-fugaz text-xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                WATCH OUR GOODPHIL 2025 SPIRIT SET!
              </h3>
              <div className="w-full max-w-3xl mx-auto mt-6">
                <video
                  controls
                  className="w-full h-[200px] md:h-[300px] lg:h-[408px] rounded-[28px] object-cover"
                  style={{
                    backgroundColor: '#1a1a1a'
                  }}
                >
                  <source src="/spirit dance.mp4" type="video/mp4" />
                  <source src="/spirit dance.mov" type="video/quicktime" />
                  <source src="/spirit dance.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* CULTURAL Section */}
          <section className="w-full max-w-6xl space-y-8 lg:space-y-12">
            <div className="text-center space-y-4 lg:space-y-6">
              <h2 
                className="text-white font-fugaz text-2xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                CULTURAL
              </h2>
              <p 
                className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed max-w-5xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                UTD FSA's Cultural team, also known as UTD Pamana, competes at Isang Mahal and Goodphil! Pamana aims to promote and celebrate Filipino heritage through dance by delivering impactful, storytelling performances.
                <br />
                <br />
                Instagram: <span className="underline">@utdpamana</span>
              </p>
            </div>

            <DanceCarousel images={culturalImages} />

            <div className="text-center">
              <h3
                className="text-white font-fugaz text-xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                WATCH OUR GOODPHIL 2025 CULTURAL SET!
              </h3>
              <div className="w-full max-w-3xl mx-auto mt-6">
                <video
                  controls
                  className="w-full h-[200px] md:h-[300px] lg:h-[408px] rounded-[28px] object-cover"
                  style={{
                    backgroundColor: '#1a1a1a'
                  }}
                >
                  <source src="/culture dance.mp4" type="video/mp4" />
                  <source src="/culture dance.mov" type="video/quicktime" />
                  <source src="/culture dance.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* MODERN Section */}
          <section className="w-full max-w-6xl space-y-8 lg:space-y-12">
            <div className="text-center space-y-4 lg:space-y-6">
              <h2 
                className="text-white font-fugaz text-2xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                MODERN
              </h2>
              <p 
                className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed max-w-5xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                UTD Maharlika is UTD FSA's Modern team that competes at Isang Mahal and Goodphil! Maharlika aims to exemplify high performance quality within UTD FSA while specializing in hip hop and other styles of dance. The team also aims to foster community in dance and promote growth through shared exploration.
                <br />
                <br />
                Instagram: <span className="underline">@utdmaharlika</span>
              </p>
            </div>

            <DanceCarousel images={modernImages} />

            <div className="text-center">
              <h3
                className="text-white font-fugaz text-xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                WATCH OUR GOODPHIL 2025 MODERN SET!
              </h3>
              <div className="w-full max-w-3xl mx-auto mt-6">
                <video
                  controls
                  className="w-full h-[200px] md:h-[300px] lg:h-[408px] rounded-[28px] object-cover"
                  style={{
                    backgroundColor: '#1a1a1a'
                  }}
                >
                  <source src="/modern dance.mp4" type="video/mp4" />
                  <source src="/modern dance.mov" type="video/quicktime" />
                  <source src="/modern dance.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Fun Fact */}
          <section className="text-center py-8 lg:py-12">
            <p 
              className="text-white font-gabarito text-xl lg:text-[32px]"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Fun Fact: We placed 3rd this year!
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
