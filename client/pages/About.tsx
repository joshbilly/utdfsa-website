import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const officers = [
    {
      name: "DJ Sagutaon",
      title: "President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0d1a100d1f021471c71de6978d1429c04b84153e?width=804"
    },
    {
      name: "Leo dos Remedios", 
      title: "Vice President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Genna Ibarra",
      title: "Secretary", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Renzo Artates",
      title: "Treasurer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Czar Nonot",
      title: "Board Advisor",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Livy Ker",
      title: "Event Coordinator",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Lance Martinez",
      title: "Historian",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Lauren Siacunco",
      title: "Marketing Chair",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Michael Dao",
      title: "Graphics Chair",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Josh Eromonsele",
      title: "Pamilya Chair, Webmaster",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Richard Aryata",
      title: "Sports Coordinator",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Phuc Tran",
      title: "Sports Coordinator",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Patrick Enerio",
      title: "Cultural Ambassador",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Tristan Casillan",
      title: "Cultural Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Cianna Rodriguez",
      title: "Modern Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Simon Choi",
      title: "Philanthropy Chair",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
    },
    {
      name: "Ariana Halili",
      title: "Fundraising Chair",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6fca64cea6f73d4ca5f1aa119eab3e68488125ce?width=804"
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
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/resources" onClick={() => setIsMobileMenuOpen(false)}>RESOURCES</Link>
                <Link className="text-white font-fugaz text-lg text-center py-3 hover:bg-[#3E562D] transition-colors" to="/sports" onClick={() => setIsMobileMenuOpen(false)}>SPORTS</Link>
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

      {/* Background Images */}
      <div className="relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f063c56b82dc8f84afe59c71505ca9db48067b84?width=3024"
          alt=""
          className="w-full h-[60px] md:h-[80px] lg:h-[100px] object-cover"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/58e9750f08d381de9d5148cf7b31aaf8a723ab2c?width=3024"
          alt=""
          className="w-full h-[60px] md:h-[80px] lg:h-[100px] object-cover"
        />
      </div>

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

      {/* Background Images */}
      <div className="relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/384f6997e1ad7ff70338db1c4399f05c6e1f6dc9?width=3024"
          alt=""
          className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
        />
      </div>

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

      {/* Background Images */}
      <div className="relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/05b2a4a0f6d4c11db4d9642b7c2a54f20c1c6870?width=3024"
          alt=""
          className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4635b20f4a8493a1428c82b3f6da054d94e898c6?width=3021"
          alt=""
          className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/30a187da7072c3b30228cb8f1b651abb17f21a95?width=3022"
          alt=""
          className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
        />
      </div>

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

      {/* Footer Credits */}
      <div className="w-full h-[21px] bg-[#42624D] flex items-center justify-center">
        <span className="text-white font-fugaz text-xs lg:text-sm text-center">
          2025-2026 UTD FSA PRESIDENT DJ SAGUTAON
        </span>
      </div>
    </div>
  );
}
