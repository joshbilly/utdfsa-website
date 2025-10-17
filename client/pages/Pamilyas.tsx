import { Link } from "react-router-dom";
import { useState } from "react";

export default function Pamilyas() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/3d9c9d28bffa71da580f6a56cdda5b4706c72a47?width=3016')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay matching original design */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(13, 39, 24, 0.9) 0%, rgba(47, 141, 87, 0.8) 84.13%)',
          minHeight: '100%'
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header - Same as home page */}
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
        
        <main className="flex-1 flex flex-col items-center px-4 py-8 lg:py-16 gap-12 lg:gap-24">
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
                PAMILYAS
              </h1>
              
              {/* Right line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
            </div>
          </section>

          {/* Main Content */}
          <section className="w-full max-w-5xl space-y-8 lg:space-y-12">
            {/* What are Pamilyas */}
            <div className="text-center space-y-4 lg:space-y-6">
              <h2 
                className="text-white font-fugaz text-2xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                WHAT ARE PAMILYAS?
              </h2>
              <p 
                className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                'Pamilya' is the word for 'family' in Tagalog. The Pamilya (pam for short) system at UTD FSA pays homage to the term, where adings are paired with a group of Kuyas and Ates (older brothers and sisters)!
              </p>
            </div>

            {/* Why should I join */}
            <div className="text-center space-y-4 lg:space-y-6">
              <h2
                className="text-white font-fugaz text-2xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                WHY SHOULD I JOIN A PAM?
              </h2>
              <p
                className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Whether you're a new or returning member, pams are a great way to meet new people that have the same interests as you and create friendships that enhance your college experience and afterward! We want to make sure that you feel at home and find a community within UTD FSA, and highly recommend joining a pam.
              </p>
            </div>

            {/* How It Works */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white border-opacity-20">
                <h3
                  className="text-white font-fugaz text-xl lg:text-[32px] text-center mb-6"
                  style={{ textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)' }}
                >
                  HOW IT WORKS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💳</div>
                    <h4 className="text-white font-fugaz text-lg mb-2" style={{ textShadow: '3px 4px 4px rgba(0,0,0,0.25)' }}>Become a Member</h4>
                    <p className="text-white font-gabarito opacity-90">Pay your UTD FSA membership dues to unlock Pamilya placement.</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <h4 className="text-white font-fugaz text-lg mb-2" style={{ textShadow: '3px 4px 4px rgba(0,0,0,0.25)' }}>Fill Out Your Form</h4>
                    <p className="text-white font-gabarito opacity-90">Tell us your interests so we can match you with the right Pamilya.</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    <h4 className="text-white font-fugaz text-lg mb-2" style={{ textShadow: '3px 4px 4px rgba(0,0,0,0.25)' }}>Get Matched</h4>
                    <p className="text-white font-gabarito opacity-90">Meet your Kuyas, Ates, and fellow Adings and start making memories.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Pamilys Do */}
            <div className="w-full max-w-6xl mx-auto">
              <h3
                className="text-white font-fugaz text-xl lg:text-[32px] text-center mb-6"
                style={{ textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                WHAT PAMILYA GROUPS DO
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🤝</div>
                  <p className="text-white font-gabarito">Mentorship and support from Kuyas and Ates throughout the year.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎊</div>
                  <p className="text-white font-gabarito">Socials, mixers, and bonding activities with your Pamilya.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🥟</div>
                  <p className="text-white font-gabarito">Cultural workshops and celebrations to connect with heritage.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏐</div>
                  <p className="text-white font-gabarito">Intramurals and friendly competitions with other Pamilya groups.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📚</div>
                  <p className="text-white font-gabarito">Study nights and accountability for classes and exams.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💖</div>
                  <p className="text-white font-gabarito">Community service and volunteering together across campus.</p>
                </div>
              </div>
            </div>

            {/* How can I be put into a PAM */}
            <div className="text-center space-y-4 lg:space-y-6">
              <h2 
                className="text-white font-fugaz text-2xl lg:text-[40px] underline"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                HOW CAN I BE PUT INTO A PAM?
              </h2>
              <p 
                className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                You must first pay your UTD FSA membership dues, and then fill out the Kuya/Ate (returning members only) or Ading (new & returning members) form.
              </p>
            </div>
          </section>

          {/* Form Buttons */}
          <section className="w-full max-w-4xl flex flex-col items-center gap-6 lg:gap-8">
            <a
              href="https://forms.utdfsa.com/kuyates"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[600px] lg:max-w-[933px] h-[60px] lg:h-[84px] rounded-[50px] flex items-center justify-center text-white font-fugaz text-2xl lg:text-[48px] hover:opacity-90 transition-opacity"
              style={{
                background: '#27688E',
                boxShadow: '3px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Kuya/Ate Form
            </a>

            <a
              href="https://forms.utdfsa.com/ading"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[600px] lg:max-w-[933px] h-[60px] lg:h-[84px] rounded-[50px] flex items-center justify-center text-white font-fugaz text-2xl lg:text-[48px] hover:opacity-90 transition-opacity"
              style={{
                background: '#27688E',
                boxShadow: '3px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Ading Form
            </a>

            <a
              href="https://forms.utdfsa.com/transfer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[600px] lg:max-w-[933px] h-[60px] lg:h-[84px] rounded-[50px] flex items-center justify-center text-white font-fugaz text-2xl lg:text-[48px] hover:opacity-90 transition-opacity"
              style={{
                background: '#27688E',
                boxShadow: '3px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Ading Transfer Form
            </a>

            {/* Extra CTA */}
            <div className="text-center mt-2">
              <p className="text-white font-gabarito opacity-90 mb-3" style={{ textShadow: '3px 4px 4px rgba(0,0,0,0.25)' }}>
                Not sure which form to fill out? Visit our FAQ or come to a general meeting and we'll help you out.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-fugaz px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition"
                >
                  <span>❓</span>
                  <span>Visit FAQ</span>
                </a>
                <a
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-fugaz px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition"
                >
                  <span>📅</span>
                  <span>See Events</span>
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
