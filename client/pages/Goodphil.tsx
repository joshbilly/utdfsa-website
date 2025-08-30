import { useState } from "react";
import { Link } from "react-router-dom";

export default function Goodphil() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/6b0738c17be5c7713f563eeab91e891144176c3d?width=3024')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay */}
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e9d3361da642000f12b6143b43fe9ca1fc4b8c47?width=92"
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e9d3361da642000f12b6143b43fe9ca1fc4b8c47?width=92"
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

        <main className="flex flex-col items-center px-4 py-8 lg:py-16 gap-16 lg:gap-24">
          {/* Hero Section with GOODPHIL title */}
          <section className="w-full max-w-7xl">
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
                GOODPHIL
              </h1>
              
              {/* Right line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
            </div>
          </section>

          {/* What is Goodphil Section */}
          <section className="w-full max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4e74a48759890864d3b28a44e98933adcf9d356c?width=1098"
                  alt="Goodphil performance"
                  className="w-full max-w-[549px] h-auto aspect-square object-cover rounded-lg"
                  style={{
                    boxShadow: '16px 13px 7.8px 0 rgba(0, 0, 0, 0.25)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                <h2 
                  className="text-white font-fugaz text-2xl lg:text-[40px] underline leading-normal"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  WHAT IS GOODPHIL?
                </h2>
                <p 
                  className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  Goodphil is an annual event hosted by FSAs across Texas that brings together college students for a weekend of cultural celebration, sports, dance, and community. It's a great chance for different schools to showcase their talents, compete, and build connections within the Filipino and greater student community.
                </p>
                <p 
                  className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed font-bold underline"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  This year, Goodphil will be held at UT Austin from March 13-16!
                </p>
              </div>
            </div>
          </section>

          {/* What do we participate in Section */}
          <section className="w-full max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7e674be3ed4a62ffba39412c23b9c87f3d768e55?width=1098"
                  alt="Sports participation"
                  className="w-full max-w-[549px] h-auto aspect-square object-cover rounded-lg"
                  style={{
                    boxShadow: '16px 13px 7.8px 0 rgba(0, 0, 0, 0.25)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                <h2 
                  className="text-white font-fugaz text-2xl lg:text-[40px] underline leading-normal"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  WHAT DO WE PARTICIPATE IN?
                </h2>
                <p 
                  className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  UTD FSA competes in a multitude of sports and dance categories:
                </p>
                <div className="space-y-2">
                  <p 
                    className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span className="font-bold">Sports (Men's, Women's, Co-Ed):</span> Volleyball, Basketball, Flag Football, Soccer, Ultimate Frisbee, Pickleball (gag sport)
                  </p>
                  <p 
                    className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span className="font-bold">Dance Teams:</span> Modern, Cultural, Spirit
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How can I participate Section */}
          <section className="w-full max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2067b52d420b812cc8f6ba95407af5a02152b907?width=1098"
                  alt="Team group photo"
                  className="w-full max-w-[549px] h-auto aspect-square object-cover rounded-lg"
                  style={{
                    boxShadow: '16px 13px 7.8px 0 rgba(0, 0, 0, 0.25)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                <h2 
                  className="text-white font-fugaz text-2xl lg:text-[40px] underline leading-normal"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  HOW CAN I PARTICIPATE?
                </h2>
                <p 
                  className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  In order to represent UTD FSA at Goodphil, UTD FSA members must meet certain requirements.
                </p>
                <ul className="space-y-3 text-left">
                  <li 
                    className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    • Pay your dues for membership + purchase your Goodphil participant ticket!
                  </li>
                  <li 
                    className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    • Earn <span className="font-bold underline">six</span> Goodphil points by attending UTD FSA events!
                  </li>
                  <li 
                    className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    • Attend 3 General Meetings (one of which must be a Risk Management meeting)!
                  </li>
                  <li 
                    className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    • Complete and submit all of the necessary travel forms!
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="w-full max-w-5xl text-center">
            <div className="flex flex-col items-center gap-4 lg:gap-6">
              <div
                className="text-white font-fugaz text-xl lg:text-[40px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <span className="underline">GOODPHIL PARTICIPANT TICKET</span>: COMING SOON!
              </div>
              <div
                className="text-white font-fugaz text-xl lg:text-[40px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <span className="underline">GOODPHIL SPECTATOR TICKET</span>: COMING SOON!
              </div>
              <div
                className="text-white font-fugaz text-xl lg:text-[40px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <span className="underline">GOODPHIL TRAVEL & WAIVER FORMS</span>: COMING SOON!
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
