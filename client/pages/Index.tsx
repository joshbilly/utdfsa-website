import Carousel from "@/components/Carousel";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex justify-center"
      style={{
        background: 'linear-gradient(180deg, #2F8D57 15.87%, #0D2718 100%)'
      }}
    >
      <div className="w-full">
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
                src="https://api.builder.io/api/v1/image/assets/TEMP/5127f3344975c32df5c7e8bfeffc1bd946f716eb?width=120"
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
                src="https://api.builder.io/api/v1/image/assets/TEMP/5127f3344975c32df5c7e8bfeffc1bd946f716eb?width=120"
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
        className="relative flex flex-col justify-center items-center h-[400px] md:h-[600px] lg:h-[850px] px-4 py-8"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/f122bc18c674318d77853402b51df7cfcfa2c3dc?width=3024')`,
          backgroundSize: 'cover',
          backgroundPosition: '35% -10px',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6c659566d805b620adf05e201361ffabc2b036ea?width=1428"
          alt="FSA Logo"
          className="w-[250px] h-[227px] md:w-[400px] md:h-[364px] lg:w-[600px] lg:h-[546px] object-contain"
          style={{
            filter: 'drop-shadow(5px 9px 4px rgba(51, 43, 43, 0.73))'
          }}
        />
      </section>

      {/* Culture Banner */}
      <section
        className="relative w-full h-[83px] flex items-center overflow-hidden -mt-3"
        style={{
          background: 'linear-gradient(180deg, #3E562D 0%, #0D2718 74.52%)'
        }}
      >
        <div className="relative w-full h-[83px] flex items-center overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: 'scroll-continuous 15s linear infinite',
            }}
          >
            <div
              className="text-white text-3xl md:text-3xl lg:text-[52px] font-bold flex-shrink-0"
              style={{
                fontFamily: 'UnifrakturCook, serif',
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              PARA SA KULTURA. FOR THE CULTURE. PARA SA KULTURA. FOR THE CULTURE. PARA SA KULTURA. FOR THE CULTURE. PARA SA KULTURA. FOR THE CULTURE.
            </div>
            <div
              className="text-white text-3xl md:text-3xl lg:text-[52px] font-bold flex-shrink-0"
              style={{
                fontFamily: 'UnifrakturCook, serif',
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              PARA SA KULTURA. FOR THE CULTURE. PARA SA KULTURA. FOR THE CULTURE. PARA SA KULTURA. FOR THE CULTURE. PARA SA KULTURA. FOR THE CULTURE.
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section 
        className="relative w-full min-h-[600px] lg:h-[721px] flex flex-col items-center justify-center px-4 py-16 gap-8"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/5eb29b8b53e2b78cafd2ea0af3faa22cb5e317fb?width=3024')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        <h2 className="text-white font-fugaz text-3xl lg:text-[48px] text-center drop-shadow-lg">
          WHO ARE WE?
        </h2>
        
        <p className="text-white font-gabarito text-base lg:text-[24px] text-center max-w-[800px] leading-relaxed">
          <span style={{ textShadow: '7px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            UTD FSA is a student-led organization created to
            unite students who are interested in promoting 
            Filipino-American culture! Through many other aspects
            of student unity such as dance, sports, and families,
            FSA aims to promote Fil-Am culture as an organization.
          </span>
        </p>
        
        <a
          href="https://forms.utdfsa.com/membership"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[160px] h-[45px] rounded-[50px] text-white font-fugaz text-lg lg:text-[24px] text-center hover:opacity-90 transition-opacity flex items-center justify-center"
          style={{
            background: '#27688E',
            boxShadow: '3px 4px 4px 0 rgba(0, 0, 0, 0.25)',
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Join us!
        </a>
      </section>

      <Carousel />

      {/* Footer */}
      <footer className="relative w-full">
        {/* Star background - positioned behind content and defines the height */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3f6fa9480e49eb1d5658aa04b4c80b272c3f3961?width=2354"
            alt=""
            className="w-full max-w-[500px] lg:max-w-[750px] h-auto object-contain opacity-70 lg:opacity-60"
          />

          {/* Footer content - absolutely positioned over star */}
          <div className="absolute inset-0 z-10 w-full flex flex-col items-center justify-end gap-8 lg:gap-16 px-4 pb-8 lg:pb-12">
            <h3 className="text-white font-fugaz text-2xl lg:text-[36px] text-center drop-shadow-lg -mt-4 lg:-mt-8">
              QUICK LINKS
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-24">
              <span className="text-white font-fugaz text-lg lg:text-[20px] text-center underline drop-shadow-lg">
                NEWSLETTERS
              </span>
              <span className="text-white font-fugaz text-lg lg:text-[20px] text-center underline drop-shadow-lg">
                GEN MEETING SLIDES
              </span>
              <span className="text-white font-fugaz text-lg lg:text-[20px] text-center underline drop-shadow-lg">
                FAQ
              </span>
            </div>

            <div className="flex items-center gap-8 lg:gap-[66px]">
              <a
                href="https://www.tiktok.com/@utdfsa?_t=ZP-8yyCMP5s1Gw&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad96bfff17086cb0a84d4b3eb8eb419630db7aa4?width=187"
                  alt="TikTok"
                  className="w-[60px] h-[60px] lg:w-[93px] lg:h-[93px]"
                  style={{
                    filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/fsautd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/40c58be09ec528db9faa07abc6274e96372916eb?width=187"
                  alt="Instagram"
                  className="w-[60px] h-[60px] lg:w-[93px] lg:h-[93px]"
                  style={{
                    filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
                  }}
                />
              </a>
              <a
                href="https://www.youtube.com/@fsautd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f91b25a5495d599169f3d1a78ee55f6d9f4c1ec0?width=188"
                  alt="YouTube"
                  className="w-[60px] h-[68px] lg:w-[94px] lg:h-[106px]"
                  style={{
                    filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
                  }}
                />
              </a>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1a261b7bdcf9d0171ba217a4906374189e1ebe90?width=188"
                alt="Discord"
                className="w-[60px] h-[68px] lg:w-[94px] lg:h-[106px]"
                style={{
                  filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
                }}
              />
            </div>
          </div>
        </div>

        {/* Credits bar */}
        <div className="w-full h-[21px] bg-[#42624D] flex items-center justify-center">
          <span className="text-white font-fugaz text-xs lg:text-sm text-center">
            2025-2026 UTD FSA PRESIDENT DJ SAGUTAON
          </span>
        </div>
      </footer>
      </div>
    </div>
  );
}
