import { Link } from "react-router-dom";
import { useState } from "react";

export default function Newsletter() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex justify-center"
      style={{
        background: 'linear-gradient(180deg, #0D2718 0%, #478863 50%, #0D2718 100%)'
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
              <Link to="/about" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">ABOUT</Link>
              <Link to="/dance" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">DANCE</Link>
              <Link to="/goodphil" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">GOODPHIL</Link>
              <Link to="/membership" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">MEMBERSHIP</Link>

              <Link to="/" className="mx-0.5 lg:mx-1 flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5127f3344975c32df5c7e8bfeffc1bd946f716eb?width=120"
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

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-95px)] px-4 py-8">
          <div className="w-full max-w-6xl">
            <h1 className="text-white font-fugaz text-4xl sm:text-6xl lg:text-[96px] text-center flex-shrink-0 mb-8" style={{ textShadow: 'rgba(0, 0, 0, 0.25) 8px 4px 4px' }}>
              NEWSLETTER
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://cdn.builder.io/o/assets%2Fc69a04683e834560a2043833f655482b%2Fc02a4cb1dbd34210aac8b98e22e58b9c?alt=media&token=8a033842-be88-4d47-850f-6aadcc32a519&apiKey=c69a04683e834560a2043833f655482b"
                className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
                title="FSA Newsletter - September 2025"
                frameBorder="0"
              />
            </div>
            
            <div className="text-center mt-6">
              <a
                href="https://cdn.builder.io/o/assets%2Fc69a04683e834560a2043833f655482b%2Fc02a4cb1dbd34210aac8b98e22e58b9c?alt=media&token=8a033842-be88-4d47-850f-6aadcc32a519&apiKey=c69a04683e834560a2043833f655482b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#27688E] text-white font-fugaz text-lg px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Download PDF
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
