import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface CalendarEvent {
  title: string;
  organizer: string;
  color: string;
  textColor?: string;
}

interface CalendarDay {
  dateKey: string; // YYYY-MM-DD
  label: string; // e.g. "1", "30"
  day: number;
  event?: CalendarEvent;
  isCurrentMonth: boolean;
}

function pad(num: number) {
  return num.toString().padStart(2, "0");
}

function formatKey(y: number, m: number, d: number) {
  return `${y}-${pad(m + 1)}-${pad(d)}`;
}

function generateCalendar(year: number, monthIndex: number, events: Record<string, CalendarEvent>): CalendarDay[] {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const prevMonthDays = new Date(year, monthIndex, 0).getDate();

  const result: CalendarDay[] = [];

  for (let i = 0; i < 42; i++) {
    const dayNum = i - firstDay + 1;

    if (dayNum < 1) {
      const d = prevMonthDays + dayNum;
      const prevDate = new Date(year, monthIndex - 1, d);
      const key = formatKey(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate());
      result.push({
        dateKey: key,
        label: String(d),
        day: prevDate.getDate(),
        isCurrentMonth: false,
        event: events[key],
      });
    } else if (dayNum > daysInMonth) {
      const d = dayNum - daysInMonth;
      const nextDate = new Date(year, monthIndex + 1, d);
      const key = formatKey(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate());
      result.push({
        dateKey: key,
        label: String(d),
        day: nextDate.getDate(),
        isCurrentMonth: false,
        event: events[key],
      });
    } else {
      const currentDate = new Date(year, monthIndex, dayNum);
      const key = formatKey(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      result.push({
        dateKey: key,
        label: String(dayNum),
        day: dayNum,
        isCurrentMonth: true,
        event: events[key],
      });
    }
  }

  return result;
}

export default function Events() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const YEAR = 2025;
  const MONTH_INDEX = 9; // October (0-based)

  const events: Record<string, CalendarEvent> = {
    [formatKey(YEAR, MONTH_INDEX, 7)]: {
      title: "SECOND GENERAL MEETING",
      organizer: "DJ Sagutaon",
      color: "#9BA4AE",
    },
    [formatKey(YEAR, MONTH_INDEX, 10)]: {
      title: "PAINTING NIGHT",
      organizer: "Livy Ker",
      color: "#9B6B4F",
    },
    [formatKey(YEAR, MONTH_INDEX, 12)]: {
      title: "PAMILYA FIELD DAY",
      organizer: "Richard Aryata, Phuc Tran",
      color: "#D7A754",
    },
    [formatKey(YEAR, MONTH_INDEX, 19)]: {
      title: "FRIENDS AND FAMILY NIGHT",
      organizer: "Tristan Casillan",
      color: "#8C5A3E",
    },
    [formatKey(YEAR, MONTH_INDEX, 22)]: {
      title: "FSA BAKE SALE",
      organizer: "Ariana Halili",
      color: "#D8C4A5",
    },
    [formatKey(YEAR, MONTH_INDEX, 25)]: {
      title: "ISANG MAHAL",
      organizer: "Hosted by PHISA @ Texas A&M",
      color: "#7C8599",
    },
    [formatKey(YEAR, MONTH_INDEX, 27)]: {
      title: "ELEVATED COFFEE & TEA FUNDRAISER",
      organizer: "Ariana Halili",
      color: "#D8C4A5",
    },
  };

  const calendarData = useMemo(() => generateCalendar(YEAR, MONTH_INDEX, events), [YEAR, MONTH_INDEX]);

  const dayHeaders = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  const monthTitle = useMemo(() => {
    return new Date(YEAR, MONTH_INDEX, 1).toLocaleString(undefined, { month: "long" }).toUpperCase();
  }, []);

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
              <Link to="/about" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">ABOUT</Link>
              <Link to="/dance" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">DANCE</Link>
              <Link to="/goodphil" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">GOODPHIL</Link>
              <Link to="/membership" className="text-white font-fugaz text-[28px] text-center drop-shadow-lg whitespace-nowrap flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">MEMBERSHIP</Link>

              <Link to="/" className="mx-0.5 lg:mx-1 flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dd0aeb2e7f0fae37a66f3a024f979f3fe35eed8f?width=92"
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
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <p
                className="text-white font-gabarito text-xl lg:text-[28px] leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Your gateway to Filipino culture, friendship, and unforgettable experiences at UTD!
              </p>
              <p
                className="text-white font-gabarito text-lg lg:text-[20px] leading-relaxed opacity-90"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                From cultural workshops to epic parties, professional development to community service -
                there's something for everyone in our vibrant FSA family.
              </p>
            </div>
          </section>



          {/* Party Ticket Section */}
          <section className="w-full max-w-4xl text-center">
            <div className="bg-gradient-to-r from-pink-600/80 to-purple-600/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border-2 border-pink-400/50 shadow-xl">
              <h2
                className="text-white font-fugaz text-xl lg:text-[32px] mb-4"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                🎉 Swagapino Party - September 12th
              </h2>
              <p
                className="text-white font-gabarito text-base lg:text-[18px] mb-6 leading-relaxed"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                The biggest FSA party of the semester! Don't miss out on an unforgettable night of music, dancing, and amazing vibes.
              </p>
              <a
                href="https://party.utdfsa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>🎫</span>
                <span>Buy Party Tickets Now!</span>
              </a>
            </div>
          </section>

          {/* Calendar Section */}
          <section id="calendar" className="w-full max-w-7xl space-y-8">
            <div className="text-center space-y-4">
              <h2
                className="text-white font-fugaz text-2xl lg:text-[40px] leading-normal"
                style={{
                  textShadow: '8px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                📅 {monthTitle} EVENTS CALENDAR
              </h2>
              <p
                className="text-white font-gabarito text-lg lg:text-[20px] max-w-3xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Your complete guide to all FSA events this month. Click on any event for more details!
              </p>
            </div>


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
                        {dayData.label}
                      </div>
                      
                      {dayData.event && (
                        <div className="flex flex-col gap-1">
                          <div className="text-black font-inter text-sm font-bold leading-tight whitespace-pre-line">
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

          {/* Call to Action Section */}
          <section className="w-full max-w-4xl">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-30 text-center">
              <h2
                className="text-white font-fugaz text-2xl lg:text-[36px] mb-6"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Ready to Join the Fun?
              </h2>
              <p
                className="text-white font-gabarito text-lg lg:text-[20px] mb-8 max-w-2xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Don't miss out on any of these amazing events! Become an FSA member today and be part of every celebration, workshop, and unforgettable moment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/membership"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-fugaz text-lg px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>🚀</span>
                  <span>Join FSA Now</span>
                </Link>
                <a
                  href="https://party.utdfsa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-fugaz text-lg px-8 py-4 rounded-full hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span aria-hidden="true">🪩🎟️</span>
                  <span>Get Party Tickets</span>
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* Bottom spacing */}
        <div className="pb-16"></div>
      </div>
    </div>
  );
}
