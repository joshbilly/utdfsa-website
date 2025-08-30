import { useState } from "react";
import { Link } from "react-router-dom";

interface CalendarEvent {
  title: string;
  organizer: string;
  color: string;
}

interface CalendarDay {
  date: string;
  day: number;
  event?: CalendarEvent;
  isCurrentMonth: boolean;
}

export default function Events() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // September 2025 calendar data
  const calendarData: CalendarDay[] = [
    { date: "30", day: 30, isCurrentMonth: false },
    { date: "Sept 1", day: 1, isCurrentMonth: true },
    { date: "2", day: 2, isCurrentMonth: true },
    { 
      date: "3", 
      day: 3, 
      isCurrentMonth: true,
      event: {
        title: "FIRST GENERAL MEETING",
        organizer: "DJ Sagutaon",
        color: "#459C79"
      }
    },
    { date: "4", day: 4, isCurrentMonth: true },
    { 
      date: "5", 
      day: 5, 
      isCurrentMonth: true,
      event: {
        title: "PAMANA WORKSHOP (3-5)",
        organizer: "Tristan Casillan",
        color: "#FFF3C7"
      }
    },
    { 
      date: "6", 
      day: 6, 
      isCurrentMonth: true,
      event: {
        title: "MODERN AUDITIONS (12-3)\n\nPAMANA WORKSHOP (3-5)",
        organizer: "Cianna R., Tristan C.",
        color: "#FFF3C7"
      }
    },
    { date: "7", day: 7, isCurrentMonth: true },
    { date: "8", day: 8, isCurrentMonth: true },
    { date: "9", day: 9, isCurrentMonth: true },
    { date: "10", day: 10, isCurrentMonth: true },
    { 
      date: "11", 
      day: 11, 
      isCurrentMonth: true,
      event: {
        title: "KUYA/ATE MEETING",
        organizer: "Josh Eromonsele",
        color: "#87A26C"
      }
    },
    { 
      date: "12", 
      day: 12, 
      isCurrentMonth: true,
      event: {
        title: "VISION BOARD NIGHT",
        organizer: "Lauren Siacunco",
        color: "#D8FFE3"
      }
    },
    { 
      date: "13", 
      day: 13, 
      isCurrentMonth: true,
      event: {
        title: "BACK-TO-SCHOOL SWAGAPINO BASH",
        organizer: "Buy tickets online!",
        color: "#FFDEE3"
      }
    },
    { date: "14", day: 14, isCurrentMonth: true },
    { 
      date: "15", 
      day: 15, 
      isCurrentMonth: true,
      event: {
        title: "PIE AN OFFICER FUNDRAISER",
        organizer: "Ariana Halili",
        color: "#D8FFE3"
      }
    },
    { date: "16", day: 16, isCurrentMonth: true },
    { 
      date: "17", 
      day: 17, 
      isCurrentMonth: true,
      event: {
        title: "FOOD FESTIVAL",
        organizer: "Patrick Enerio",
        color: "#D8FFE3"
      }
    },
    { date: "18", day: 18, isCurrentMonth: true },
    { 
      date: "19", 
      day: 19, 
      isCurrentMonth: true,
      event: {
        title: "SAWAYAN SHOWDOWN",
        organizer: "Cianna Rodriguez",
        color: "#FFF3C7"
      }
    },
    { date: "20", day: 20, isCurrentMonth: true },
    { date: "21", day: 21, isCurrentMonth: true },
    { date: "22", day: 22, isCurrentMonth: true },
    { date: "23", day: 23, isCurrentMonth: true },
    { date: "24", day: 24, isCurrentMonth: true },
    { date: "25", day: 25, isCurrentMonth: true },
    { 
      date: "26", 
      day: 26, 
      isCurrentMonth: true,
      event: {
        title: "SCAVENGER HUNT SOCIAL",
        organizer: "Lauren Siacunco",
        color: "#D8FFE3"
      }
    },
    { date: "27", day: 27, isCurrentMonth: true },
    { date: "28", day: 28, isCurrentMonth: true },
    { date: "29", day: 29, isCurrentMonth: true },
    { date: "30", day: 30, isCurrentMonth: true },
    { date: "Oct 1", day: 1, isCurrentMonth: false },
    { date: "Oct 2", day: 2, isCurrentMonth: false },
    { date: "Oct 3", day: 3, isCurrentMonth: false },
    { date: "Oct 4", day: 4, isCurrentMonth: false }
  ];

  const dayHeaders = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/649ed14a3aceb38ce60e73c140eedc12eb06fe88?width=3024')`,
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dd0aeb2e7f0fae37a66f3a024f979f3fe35eed8f?width=92"
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dd0aeb2e7f0fae37a66f3a024f979f3fe35eed8f?width=92"
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
          {/* Hero Section with EVENTS title */}
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
                EVENTS
              </h1>
              
              {/* Right line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
            </div>

            {/* Description Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32 max-w-6xl mx-auto">
              {/* Left text */}
              <div className="flex-1 text-center lg:text-left">
                <p 
                  className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                  style={{
                    textShadow: '7px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  Want to meet new people?<br />
                  Spend time with your pamilya?<br />
                  Make some new memories?
                </p>
              </div>

              {/* Divider line */}
              <div className="hidden lg:block w-px h-[218px] bg-white" />

              {/* Right text */}
              <div className="flex-1 text-center lg:text-left">
                <p 
                  className="text-white font-gabarito text-lg lg:text-[32px] leading-relaxed"
                  style={{
                    textShadow: '7px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  Check out what upcoming events UTD FSA has in store!
                </p>
              </div>
            </div>
          </section>

          {/* Important Links Section */}
          <section className="w-full max-w-5xl text-center space-y-8">
            <h2 
              className="text-white font-fugaz text-2xl lg:text-[40px] leading-normal"
              style={{
                textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              IMPORTANT LINKS
            </h2>
            
            <a
              href="https://party.utdfsa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white font-gabarito text-lg lg:text-[36px] underline hover:opacity-80 transition-opacity"
              style={{
                textShadow: '7px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              <span className="font-bold">September 13, 2025</span> | Back-to-School Bash - Ticket Purchase Form
            </a>
          </section>

          {/* Calendar Section */}
          <section className="w-full max-w-7xl space-y-8">
            <h2 
              className="text-white font-fugaz text-2xl lg:text-[40px] text-center leading-normal"
              style={{
                textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              SEPTEMBER EVENTS CALENDAR
            </h2>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Calendar Header */}
                <div className="grid grid-cols-7 bg-[#FAFAFA] border border-[#001209]">
                  {dayHeaders.map((day) => (
                    <div 
                      key={day}
                      className="p-3 border-r border-[#001209] last:border-r-0"
                    >
                      <span className="text-[#3D5742] font-inter text-base font-medium">
                        {day}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7">
                  {calendarData.map((dayData, index) => (
                    <div 
                      key={index}
                      className={`min-h-[120px] lg:min-h-[150px] p-3 border border-[#001209] flex flex-col justify-between ${
                        !dayData.isCurrentMonth 
                          ? 'bg-[#F8F8F8]' 
                          : dayData.event 
                            ? '' 
                            : 'bg-white'
                      }`}
                      style={{
                        backgroundColor: dayData.event ? dayData.event.color : undefined
                      }}
                    >
                      <div className={`text-black font-inter text-lg font-medium ${
                        !dayData.isCurrentMonth ? 'opacity-40' : ''
                      }`}>
                        {dayData.date}
                      </div>
                      
                      {dayData.event && (
                        <div className="flex flex-col gap-1">
                          <div className="text-black font-inter text-sm font-bold leading-tight">
                            {dayData.event.title}
                          </div>
                          <div className="text-black font-inter text-xs opacity-60">
                            {dayData.event.organizer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
