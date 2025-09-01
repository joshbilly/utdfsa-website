import { Link } from "react-router-dom";
import { useState } from "react";

interface Officer {
  position: string;
  name: string;
}

interface YearData {
  year: string;
  officers: Officer[];
}

export default function PastOfficers() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedYears, setExpandedYears] = useState<string[]>([]);

  const toggleYear = (year: string) => {
    setExpandedYears(prev =>
      prev.includes(year)
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const pastOfficersData: YearData[] = [
    {
      year: "2024-2025",
      officers: [
        { position: "President", name: "Alvin Bagaoisan" },
        { position: "Vice President", name: "DJ Sagutaon" },
        { position: "Secretary", name: "Vy Tran" },
        { position: "Treasurer", name: "Czar Nonot" },
        { position: "Event Coordinator", name: "Jennifer Chen" },
        { position: "Historian", name: "Russell Ha" },
        { position: "Marketing Chair", name: "Katherine Tran" },
        { position: "Graphics Chair", name: "DJ Sagutaon" },
        { position: "Pamilya Chair", name: "Leo dos Remedios" },
        { position: "Sports Coordinators", name: "Brian Luu, Keanu Lee" },
        { position: "Cultural Ambassador", name: "Nathan Bucasas" },
        { position: "Cultural Director", name: "Renzo Artates" },
        { position: "Modern Director", name: "Kaden Thephavong" },
        { position: "Spirit Directors", name: "Helena Ramning, Yuan Paulino" },
        { position: "Fundraising Chair", name: "Phat Phung" },
        { position: "Philanthropy Chair", name: "Christopher Chang" }
      ]
    },
    {
      year: "2023-2024",
      officers: [
        { position: "President", name: "Sabrina Uy Tesy" },
        { position: "Vice President", name: "Chris Chan" },
        { position: "Secretary", name: "Julia Nguyen" },
        { position: "Treasurer", name: "Yuan Paulino" },
        { position: "Event Coordinator", name: "Jennifer Chen" },
        { position: "Historian", name: "Adit Patel" },
        { position: "Graphics Chair", name: "Arianna Poblete" },
        { position: "Pamilya Chair", name: "Kevin Ly" },
        { position: "Sports Coordinators", name: "Maya Bhaidasna, Marshall Mao" },
        { position: "Cultural Ambassador", name: "Alvin Bagaoisan" },
        { position: "Cultural Director", name: "Helena Ramning" },
        { position: "Modern Directors", name: "DJ Sagutaon, Zamira Miranda" },
        { position: "Fundraising Chair", name: "Vy Tran" },
        { position: "Philanthropy Chair", name: "Weber Tsao" },
        { position: "Spirit Directors", name: "Christina Lam, Helena Ramning" }
      ]
    },
    {
      year: "2022-2023",
      officers: [
        { position: "President", name: "Lani Bergantin" },
        { position: "Vice President", name: "Eric Brian Roca" },
        { position: "Secretary", name: "Erica Nah" },
        { position: "Event Coordinator", name: "Leah Miranda" },
        { position: "Historian", name: "Kyle Zeng" },
        { position: "Graphics Chair", name: "Amber Bui" },
        { position: "Pamilya Chair", name: "Catalina Chang" },
        { position: "Sports Coordinators", name: "Thach Huynh, Sonny Ton" },
        { position: "Cultural Ambassador/Spirit Director", name: "Rafa Evangelista" },
        { position: "Cultural Director", name: "Sabrina Uy Tesy" },
        { position: "Modern Directors", name: "Christina Lam, Lynn Pham" },
        { position: "Philanthropy Chair", name: "Chris Chan" }
      ]
    },
    {
      year: "2021-2022",
      officers: [
        { position: "President", name: "Jamie Nillas" },
        { position: "Vice President", name: "Andrew Vu" },
        { position: "Secretary", name: "Jisu Kang" },
        { position: "Treasurer", name: "Zander Magsino" },
        { position: "Historian", name: "Amber Bui" },
        { position: "Graphics Chair", name: "Jessica Shen" },
        { position: "Pamilya Chair", name: "Mandy Nguyen" },
        { position: "Sports Coordinators", name: "Jimmy Le, Thach Huynh" },
        { position: "Cultural Ambassador", name: "Lani Bergantin" },
        { position: "Cultural Director", name: "Eric Brian Roca" },
        { position: "Modern Directors", name: "Kevin Ding, Thomas Pham" },
        { position: "Fundraising Chair", name: "Rida Khan" },
        { position: "Philanthropy Chair", name: "Anthony Hong" },
        { position: "Comet Chair", name: "Ian Ortin" }
      ]
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
            <Link to="/" className="hover:opacity-80 transition-opacity">
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
      <section className="relative flex flex-col items-center justify-center py-16 px-4">
        <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
          <h1
            className="text-white font-fugaz text-4xl md:text-5xl lg:text-6xl text-center"
            style={{
              textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            PAST OFFICERS ARCHIVE
          </h1>
          
          <p
            className="text-white font-gabarito text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-4xl"
            style={{
              textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            Honoring the dedicated leaders who have guided UTD FSA throughout the years. 
            These officers have shaped our organization and contributed to the growth of Filipino culture at UTD.
          </p>

          {/* Back to About link */}
          <Link
            to="/about"
            className="text-white font-fugaz text-lg md:text-xl underline hover:opacity-80 transition-opacity"
            style={{
              textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            ← Back to About
          </Link>
        </div>
      </section>

      {/* Officers Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {pastOfficersData.map((yearData, yearIndex) => {
            const isExpanded = expandedYears.includes(yearData.year);

            return (
              <div key={yearIndex} className="w-full bg-white bg-opacity-5 backdrop-blur-sm rounded-xl border border-white border-opacity-20 overflow-hidden">
                {/* Dropdown Header */}
                <button
                  onClick={() => toggleYear(yearData.year)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 hover:bg-white hover:bg-opacity-5 transition-all duration-300 group"
                >
                  <h2
                    className="text-white font-fugaz text-2xl md:text-3xl lg:text-4xl"
                    style={{
                      textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {yearData.year}
                  </h2>

                  {/* Dropdown Arrow */}
                  <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-opacity-80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Dropdown Content */}
                <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'} ${isExpanded ? 'overflow-visible' : 'overflow-hidden'}`}>
                  <div className="px-6 pb-8 lg:px-8">
                    <div className="w-full h-px bg-white opacity-20 mb-8"></div>

                    {/* Officers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                      {yearData.officers.map((officer, officerIndex) => (
                        <div
                          key={officerIndex}
                          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 min-h-[120px] flex items-center"
                        >
                          <div className="text-center w-full">
                            <h3
                              className="text-white font-fugaz text-base md:text-lg lg:text-xl mb-2 leading-tight"
                              style={{
                                textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
                              }}
                            >
                              {officer.position}
                            </h3>
                            <p
                              className="text-white font-gabarito text-sm md:text-base lg:text-lg leading-relaxed"
                              style={{
                                textShadow: '0 2px 2px rgba(0, 0, 0, 0.25)'
                              }}
                            >
                              {officer.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="pb-16"></div>
    </div>
  );
}
