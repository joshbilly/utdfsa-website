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
      name: "Cianna Rodriguez",
      title: "Modern Director",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc69a04683e834560a2043833f655482b%2F7ee213f34df042a68e68fc16f0ca3d26?format=webp&width=800"
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

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(180deg, #0D2718 0%, #478863 50%, #0D2718 100%)'
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
            <Link className="hover:opacity-80 transition-opacity" to="/">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6ea7386c97fadc05b66d667a7f75d98667ca01eb?width=120"
                alt="FSA Logo"
                className="w-[40px] h-[40px] drop-shadow-lg"
              />
            </Link>
            <button
              className="text-white font-fugaz text-2xl drop-shadow-lg z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#0D2718] border-t border-[#3E562D] z-40">
              <nav className="flex flex-col py-4">
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/dance" onClick={() => setIsMobileMenuOpen(false)}>DANCE</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/goodphil" onClick={() => setIsMobileMenuOpen(false)}>GOODPHIL</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/membership" onClick={() => setIsMobileMenuOpen(false)}>MEMBERSHIP</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/media" onClick={() => setIsMobileMenuOpen(false)}>MEDIA</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/events" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/pamilyas" onClick={() => setIsMobileMenuOpen(false)}>PAMILYAS</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              </nav>
            </div>
          )}
        </div>
        
        <div className="w-full h-[15px] bg-white"></div>
        <div className="w-full h-px bg-transparent shadow-[0_4px_6px_0_rgba(0,0,0,0.75)]"></div>
      </header>


      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-12 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="hidden lg:block w-[271px] h-px bg-white mb-4"></div>
            <h1
              className="text-white font-fugaz text-4xl md:text-5xl lg:text-6xl text-center"
              style={{
                textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              INTRODUCING
            </h1>
          </div>
          
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/95a0ca18a632eb13ec8e9adffc1d203030c24815?width=691"
            alt="FSA Logo"
            className="w-[200px] h-[182px] md:w-[250px] md:h-[227px] lg:w-[280px] lg:h-[255px] object-contain"
            style={{
              filter: 'drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
          
          <div className="hidden lg:block w-[271px] h-px bg-white"></div>
        </div>
      </section>

      {/* Description */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <p
          className="text-white font-gabarito text-lg md:text-xl lg:text-2xl text-center leading-relaxed"
          style={{
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Created in 2001, The Filipino Student Association 
          at the University of Texas at Dallas has the primary goal as a 
          cultural student organization to promote unity and inclusivity
          among students at UTD while enhancing awareness of Filipino culture 
          in the university and DFW community. We aim to foster goodwill and 
          to develop a working relationship with all students and members!
        </p>
      </section>


      {/* Officers Section */}
      <section className="py-12 px-4">
        <h2
          className="text-white font-fugaz text-3xl md:text-4xl lg:text-5xl text-center mb-12"
          style={{
            textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          MEET THE 2025-26 OFFICERS!
        </h2>

        {/* Officers Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {officers.map((officer, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-[220px] h-[275px] md:w-[260px] md:h-[325px] lg:w-[300px] lg:h-[375px] object-cover rounded-[32px] mb-4"
                />
                <div
                  className="text-white font-gabarito text-lg md:text-xl lg:text-2xl text-center leading-tight"
                  style={{
                    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <span className="font-bold">{officer.name}</span>
                  <br />
                  <span className="font-normal">{officer.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Past Officers Archive */}
      <section className="py-12 px-4 text-center">
        <button
          className="text-white font-fugaz text-xl md:text-2xl lg:text-3xl underline hover:opacity-80 transition-opacity"
          style={{
            textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          PAST OFFICERS ARCHIVE &gt;
        </button>
      </section>

    </div>
  );
}
