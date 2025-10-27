import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const officers = [
    {
      name: "DJ Sagutaon",
      title: "President",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Ff2f068e88f214c65884f739bc97f51c5?format=webp&width=800"
    },
    {
      name: "Leo dos Remedios",
      title: "Vice President",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F9cc481f1892b4942a1577bda47d2d13e?format=webp&width=800"
    },
    {
      name: "Genna Ibarra",
      title: "Secretary",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fe3950049899a47a6a55c08364cde58f2?format=webp&width=800"
    },
    {
      name: "Renzo Artates",
      title: "Treasurer",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fdd601b0af5cb47acaaf2b65e26f5caaf?format=webp&width=800"
    },
    {
      name: "Czar Nonot",
      title: "Board Advisor",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fde36d888932c45ff8fd245553172a960?format=webp&width=800"
    },
    {
      name: "Livy Ker",
      title: "Event Coordinator",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F2477e76c1b0d479a93f45410d49a1eb1?format=webp&width=800"
    },
    {
      name: "Lance Martinez",
      title: "Historian",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fca68ec4b2a054f999a027a21a414d927?format=webp&width=800"
    },
    {
      name: "Lauren Siacunco",
      title: "Marketing Chair",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fdd9a95ac9ed347e3b96d5f215a8db037?format=webp&width=800"
    },
    {
      name: "Michael Dao",
      title: "Graphics Chair",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F82ef0d71d1c14ce5ae44f4bb96062654?format=webp&width=800"
    },
    {
      name: "Josh Eromonsele",
      title: "Pamilya Chair, Webmaster",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2Fbf0aa87a09ee4a1a90afcdcca6092630?format=webp&width=800"
    },
    {
      name: "Richard Aryata",
      title: "Sports Coordinator",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F000212edb6a7497db16eef65d8e9b52e?format=webp&width=800"
    },
    {
      name: "Phuc Tran",
      title: "Sports Coordinator",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F70ce64b70bb944dea3c20d1f326144bf?format=webp&width=800"
    },
    {
      name: "Patrick Enerio",
      title: "Cultural Ambassador",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F1adc67912e314e8a8c5e609f5cba5276?format=webp&width=800"
    },
    {
      name: "Tristan Casillan",
      title: "Cultural Director",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F8bce04fb12894e10a5dcbb620bdeb872?format=webp&width=800"
    },
    {
      name: "Simon Choi",
      title: "Philanthropy Chair",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F285c5947f165436d9ec3e50b23d12e2c?format=webp&width=800"
    },
    {
      name: "Ariana Halili",
      title: "Fundraising Chair",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F2dfaa3d5075641f2b7375d1645193fa1?format=webp&width=800"
    }
  ];

  const achievements = [
    { number: "24", label: "Years of Excellence", icon: "🏆" },
    { number: "500+", label: "Active Members", icon: "👥" },
    { number: "300+", label: "Volunteer Hours", icon: "🤝" },
    { number: "50+", label: "Events Per Year", icon: "🎉" }
  ];

  const values = [
    {
      title: "Unity & Inclusivity",
      description: "We bring together students from all backgrounds to celebrate Filipino culture and create lasting friendships.",
      icon: "🤝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cultural Preservation",
      description: "We honor and share the rich traditions, history, and values of Filipino heritage with our community.",
      icon: "🏛️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Academic Excellence",
      description: "We support our members' educational goals and foster leadership development throughout their journey.",
      icon: "📚",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Community Impact",
      description: "We actively engage in philanthropy and service to make a positive difference in our local community.",
      icon: "❤️",
      color: "from-pink-500 to-rose-500"
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

        <main className="flex flex-col items-center px-4 py-8 lg:py-16 gap-12 lg:gap-20">
          {/* Hero Section */}
          <section className="w-full max-w-6xl">
            <div className="flex items-center justify-center gap-4 lg:gap-8 mb-8">
              {/* Left line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
              
              {/* Title */}
              <h1 
                className="text-white font-fugaz text-4xl sm:text-6xl lg:text-[96px] text-center flex-shrink-0"
                style={{
                  textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                ABOUT FSA
              </h1>
              
              {/* Right line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
            </div>

            {/* Logo and mission statement */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-16">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/95a0ca18a632eb13ec8e9adffc1d203030c24815?width=691"
                  alt="FSA Logo"
                  className="w-[250px] h-[227px] lg:w-[350px] lg:h-[318px] object-contain transform hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: 'drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.25))'
                  }}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-xl -z-10"></div>
              </div>
              
              <div className="flex-1 max-w-2xl">
                <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <h2
                    className="text-white font-fugaz text-2xl lg:text-[36px] mb-4 text-center"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    Our Mission
                  </h2>
                  <p
                    className="text-white font-gabarito text-lg lg:text-[24px] leading-relaxed text-center"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    Since 2001, we've been promoting unity and inclusivity among students at UTD while enhancing awareness of Filipino culture in our university and DFW community. We foster goodwill and develop meaningful relationships with all students and members!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Stats */}
          <section className="w-full max-w-6xl">
            <h2
              className="text-white font-fugaz text-3xl lg:text-[48px] text-center mb-12"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Our Impact
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white border-opacity-20 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl mb-4">{achievement.icon}</div>
                  <div
                    className="text-white font-fugaz text-2xl lg:text-[36px] mb-2"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {achievement.number}
                  </div>
                  <div
                    className="text-white font-gabarito text-sm lg:text-lg"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Values */}
          <section className="w-full max-w-6xl">
            <h2
              className="text-white font-fugaz text-3xl lg:text-[48px] text-center mb-12"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-2xl`}>
                      {value.icon}
                    </div>
                    <h3
                      className="text-white font-fugaz text-xl lg:text-[28px]"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      {value.title}
                    </h3>
                  </div>
                  <p
                    className="text-white font-gabarito text-lg lg:text-[20px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Officers Section */}
          <section className="w-full max-w-7xl">
            <h2
              className="text-white font-fugaz text-3xl lg:text-[48px] text-center mb-4"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Meet Our 2025-26 Leadership Team
            </h2>
            <p
              className="text-white font-gabarito text-lg lg:text-[24px] text-center mb-12 max-w-3xl mx-auto"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Passionate student leaders dedicated to building community, preserving culture, and creating unforgettable experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {officers.map((officer, index) => (
                <div key={index}>
                  <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="w-[220px] h-[275px] md:w-[260px] md:h-[325px] lg:w-[300px] lg:h-[375px] object-cover rounded-[32px] mb-4 mx-auto"
                    />
                    <div className="text-center">
                      <h3
                        className="text-white font-fugaz text-lg lg:text-xl mb-1"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {officer.name}
                      </h3>
                      <p
                        className="text-white font-gabarito text-sm lg:text-base opacity-90"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {officer.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="w-full max-w-4xl text-center">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-30">
              <h2
                className="text-white font-fugaz text-2xl lg:text-[40px] mb-6"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Ready to Join Our Family?
              </h2>
              <p
                className="text-white font-gabarito text-lg lg:text-[24px] mb-8 max-w-2xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Whether you're Filipino or just passionate about our culture, there's a place for you in FSA. Come be part of something special!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/membership"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>✨</span>
                  <span>Join FSA Today</span>
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>🗓️</span>
                  <span>View Events</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Past Officers Archive */}
          <section className="w-full text-center">
            <Link
              to="/past-officers"
              className="inline-flex items-center gap-3 text-white font-fugaz text-xl lg:text-2xl hover:opacity-80 transition-all duration-300 transform hover:scale-105"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              <span>📚</span>
              <span>Explore Past Officers Archive</span>
              <span>→</span>
            </Link>
          </section>
        </main>

        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </div>
    </div>
  );
}
