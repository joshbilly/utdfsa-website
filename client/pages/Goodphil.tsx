import { useState } from "react";
import { Link } from "react-router-dom";

export default function Goodphil() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const sportsEvents = [
    { name: "Volleyball", icon: "🏐", divisions: ["Men's", "Women's", "Co-Ed"] },
    { name: "Basketball", icon: "🏀", divisions: ["Men's", "Women's"] },
    { name: "Flag Football", icon: "🏈", divisions: ["Men's", "Women's", "Co-Ed"] },
    { name: "Soccer", icon: "⚽", divisions: ["Co-Ed"] },
    { name: "Ultimate Frisbee", icon: "🥏", divisions: ["Co-Ed"] },
    { name: "Pickleball", icon: "🏓", divisions: ["TBD"] }
  ];

  const danceTeams = [
    { 
      name: "Spirit", 
      description: "School spirit meets Filipino culture in high-energy performances that ignite the crowd",
      color: "from-yellow-400 to-orange-500",
      icon: "⚡"
    },
    { 
      name: "Cultural", 
      description: "Traditional Filipino dances that tell stories of heritage and history",
      color: "from-blue-400 to-purple-500",
      icon: "🏛️"
    },
    { 
      name: "Modern", 
      description: "Hip-hop and contemporary styles that showcase technical excellence and creativity",
      color: "from-pink-400 to-rose-500",
      icon: "🎯"
    }
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
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(13, 39, 24, 0.9) 0%, rgba(47, 141, 87, 0.8) 84.13%)',
          minHeight: '100%'
        }}
      />
      
      <div className="relative z-10 w-full">
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

        <main className="flex flex-col items-center px-4 py-8 lg:py-16 gap-16 lg:gap-24">
          {/* Hero Section with Dynamic Background */}
          <section className="w-full max-w-7xl relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-32 right-16 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-300"></div>
              <div className="absolute bottom-16 left-1/4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse delay-500"></div>
              <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 text-center py-16 lg:py-24">
              <h1 
                className="text-white font-fugaz text-6xl sm:text-8xl lg:text-[120px] mb-8 animate-fade-in"
                style={{
                  textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)',
                  background: 'linear-gradient(45deg, #FFD700, #FF6B35, #F7931E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                GOODPHIL
              </h1>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <h2
                  className="text-white font-fugaz text-2xl lg:text-[40px]"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  March 13-16, 2025 • UT Austin
                </h2>
                
                <p
                  className="text-white font-gabarito text-xl lg:text-[32px] leading-relaxed"
                  style={{
                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  The ultimate Filipino intercollegiate experience where <span className="font-bold text-yellow-300">passion meets competition</span> and friendships are forged forever.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Navigation Tabs */}
          <section className="w-full max-w-6xl">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: "overview", label: "The Experience", icon: "🌟" },
                { id: "sports", label: "Sports Arena", icon: "🏆" },
                { id: "dance", label: "Dance Showcase", icon: "💃" },
                { id: "participate", label: "Join The Action", icon: "🚀" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-6 py-4 rounded-full font-fugaz text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Content Sections */}
            <div className="min-h-[600px]">
              {activeSection === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-fade-in">
                  <div className="order-2 lg:order-1">
                    <div className="space-y-8">
                      <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                        <h3
                          className="text-white font-fugaz text-2xl lg:text-[36px] mb-6"
                          style={{
                            textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          What Makes Goodphil Special?
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center text-xl">⚡</div>
                            <span className="text-white font-gabarito text-lg lg:text-xl">Intense competition across multiple sports and dance categories</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xl">🤝</div>
                            <span className="text-white font-gabarito text-lg lg:text-xl">Building connections between FSAs across Texas</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-xl">🎭</div>
                            <span className="text-white font-gabarito text-lg lg:text-xl">Celebrating Filipino culture through performance and tradition</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xl">✨</div>
                            <span className="text-white font-gabarito text-lg lg:text-xl">Creating memories that last a lifetime</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Ff48189b4dcc3416b87105f21f34d6738?format=webp&width=800"
                      alt="UTD FSA Goodphil 2025 Co-Ed Volleyball Team"
                      className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}

              {activeSection === "sports" && (
                <div className="animate-fade-in">
                  <div className="text-center mb-12">
                    <h3
                      className="text-white font-fugaz text-3xl lg:text-[48px] mb-6"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      🏟️ Sports Competition
                    </h3>
                    <p
                      className="text-white font-gabarito text-lg lg:text-[24px] max-w-3xl mx-auto"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      Battle it out on the field and court! Each sport features Men's, Women's, and Co-Ed divisions for maximum participation.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sportsEvents.map((sport, index) => (
                      <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl lg:text-5xl mb-4">{sport.icon}</div>
                        <h4
                          className="text-white font-fugaz text-xl lg:text-[24px] mb-3"
                          style={{
                            textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          {sport.name}
                        </h4>
                        <div className="space-y-1">
                          {sport.divisions.map((division, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-gabarito text-sm px-3 py-1 rounded-full">
                              {division}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "dance" && (
                <div className="animate-fade-in">
                  <div className="text-center mb-12">
                    <h3
                      className="text-white font-fugaz text-3xl lg:text-[48px] mb-6"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      🎭 Dance Showcase
                    </h3>
                    <p
                      className="text-white font-gabarito text-lg lg:text-[24px] max-w-3xl mx-auto"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      Where artistry meets competition! Our dance teams showcase the full spectrum of Filipino culture and modern expression.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {danceTeams.map((team, index) => (
                      <div key={index} className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${team.color} opacity-20 rounded-2xl blur-xl`}></div>
                        <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white border-opacity-20">
                          <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="text-center lg:text-left flex-1">
                              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                                <div className={`w-16 h-16 bg-gradient-to-r ${team.color} rounded-full flex items-center justify-center text-2xl`}>
                                  {team.icon}
                                </div>
                                <h4
                                  className="text-white font-fugaz text-2xl lg:text-[32px]"
                                  style={{
                                    textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                                  }}
                                >
                                  {team.name}
                                </h4>
                              </div>
                              <p
                                className="text-white font-gabarito text-lg lg:text-[20px] leading-relaxed"
                                style={{
                                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                                }}
                              >
                                {team.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <Link
                                to="/dance"
                                className={`inline-flex items-center gap-3 bg-gradient-to-r ${team.color} text-white font-fugaz text-lg px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg`}
                              >
                                <span>👀</span>
                                <span>Watch Our Team</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "participate" && (
                <div className="animate-fade-in">
                  <div className="text-center mb-12">
                    <h3
                      className="text-white font-fugaz text-3xl lg:text-[48px] mb-6"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      🚀 Ready to Compete?
                    </h3>
                    <p
                      className="text-white font-gabarito text-lg lg:text-[24px] max-w-3xl mx-auto"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      Join Team UTD FSA and represent our school at the biggest Filipino intercollegiate competition in Texas!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                      <h4
                        className="text-white font-fugaz text-2xl lg:text-[32px] text-center"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        Requirements Checklist
                      </h4>
                      {[
                        { icon: "💳", text: "Pay FSA dues + purchase Goodphil ticket", status: "required" },
                        { icon: "⭐", text: "Earn 6 points by attending FSA events", status: "required" },
                        { icon: "📋", text: "Attend 3 General Meetings (1 Risk Management)", status: "required" },
                        { icon: "📄", text: "Submit all travel and waiver forms", status: "required" }
                      ].map((req, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                          <div className="text-2xl">{req.icon}</div>
                          <span className="text-white font-gabarito text-lg">{req.text}</span>
                          <div className="ml-auto">
                            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <h4
                        className="text-white font-fugaz text-2xl lg:text-[32px] text-center"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        Coming Soon
                      </h4>
                      {[
                        { icon: "🎫", text: "Participant Tickets", status: "coming" },
                        { icon: "👥", text: "Spectator Tickets", status: "coming" },
                        { icon: "📋", text: "Travel & Waiver Forms", status: "coming" }
                      ].map((item, index) => (
                        <div key={index} className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-300 border-opacity-30 text-center">
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <span className="text-white font-gabarito text-lg font-bold">{item.text}</span>
                          <div className="mt-2 text-yellow-300 font-gabarito text-sm">Available Soon!</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/membership"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span>✨</span>
                        <span>Join FSA Now</span>
                      </Link>
                      <Link
                        to="/events"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span>📅</span>
                        <span>Attend Events</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

        </main>

        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
