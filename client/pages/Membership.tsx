import { useState } from "react";
import { Link } from "react-router-dom";

export default function Membership() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/92aaff8133b2e407c97287ed8627e87020ef06a8?width=3024')`,
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/39d7e96fa119f2c3838fbb66555ad6f015dfd422?width=92"
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/39d7e96fa119f2c3838fbb66555ad6f015dfd422?width=92"
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
          {/* Hero Section with MEMBERSHIP title */}
          <section className="w-full max-w-7xl">
            <div className="flex items-center justify-center gap-4 lg:gap-8 mb-12 lg:mb-16">
              {/* Left line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
              
              {/* Title */}
              <h1 
                className="text-white font-fugaz text-4xl sm:text-5xl lg:text-[96px] text-center flex-shrink-0"
                style={{
                  textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                MEMBERSHIP
              </h1>
              
              {/* Right line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
            </div>
          </section>

          {/* Ready to become a member section */}
          <section className="w-full max-w-5xl text-center space-y-6">
            <h2 
              className="text-white font-fugaz text-2xl lg:text-[40px] underline leading-normal"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              READY TO BECOME A UTD FSA MEMBER?
            </h2>
            
            <p 
              className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed max-w-4xl mx-auto"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Joining the UTD FSA family is simple: Fill out the UTD FSA membership form and pay your dues!
            </p>

            <div 
              className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              <p>Early Fall Membership (until 9/18): $30</p>
              <p>Regular Membership Price: $35</p>
            </div>
          </section>

          {/* Membership Form Button */}
          <section className="w-full max-w-4xl flex justify-center">
            <a
              href="https://forms.utdfsa.com/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-[933px] h-[84px] rounded-[50px] flex items-center justify-center text-white font-fugaz text-2xl lg:text-[48px] hover:opacity-90 transition-opacity"
              style={{
                background: '#27688E',
                boxShadow: '3px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Membership Form
            </a>
          </section>

          {/* Member Benefits Section */}
          <section className="w-full max-w-5xl text-center space-y-8">
            <h2 
              className="text-white font-fugaz text-2xl lg:text-[32px] underline leading-normal"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              UTD FSA MEMBER BENEFITS:
            </h2>
            
            <div 
              className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed space-y-4 text-left max-w-4xl mx-auto"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl lg:text-2xl mt-1">1.</span>
                <p>Guaranteed this year's UTD FSA shirt (if membership was purchased in the Fall)</p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl lg:text-2xl mt-1">2.</span>
                <p>Eligibility to compete in Isang Mahal and Goodphil</p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl lg:text-2xl mt-1">3.</span>
                <p>Placement in a UTD FSA Pamilya</p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl lg:text-2xl mt-1">4.</span>
                <p>Intramural Team recognition & game promotion via the UTD FSA Instagram</p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl lg:text-2xl mt-1">5.</span>
                <p>Your very own digital card is here, ready to validate Goodphil Points and quicker entry to event. Plus, enjoy exclusive discounts to our awesome parties.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
