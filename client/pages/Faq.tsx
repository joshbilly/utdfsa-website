import { useState } from "react";
import { Link } from "react-router-dom";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-t border-b border-[#CDCDCD]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 lg:py-[23px] px-4 hover:bg-white hover:bg-opacity-5 transition-colors"
      >
        <h3 
          className="text-white font-fugaz text-xl lg:text-[40px] text-left leading-normal"
          style={{
            letterSpacing: '-0.8px'
          }}
        >
          {title}
        </h3>
        
        <div className="flex-shrink-0 ml-4">
          <svg 
            width="27" 
            height="27" 
            viewBox="0 0 27 27" 
            fill="none" 
            className="w-[20px] h-[20px] lg:w-[26px] lg:h-[25px]"
          >
            {isOpen ? (
              // Minus icon
              <path 
                d="M23.8008 13.6897L2.645 13.6897" 
                stroke="white" 
                strokeWidth="4.6301" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            ) : (
              // Plus icon
              <>
                <path 
                  d="M13.7229 3.11182V24.2676" 
                  stroke="white" 
                  strokeWidth="4.6301" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M24.301 13.6897L3.14525 13.6897" 
                  stroke="white" 
                  strokeWidth="4.6301" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-4 pb-6 lg:pb-8">
          <div 
            className="text-white font-gabarito text-base lg:text-[24px] leading-normal"
            style={{
              letterSpacing: '-0.48px'
            }}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const generalInformationContent = (
    <div className="space-y-6">
      <div>
        <p className="font-bold underline mb-2">Who can join FSA? Do I have to be Filipino?</p>
        <p>You don't need to be Filipino to join! UTD FSA welcomes all individuals regardless of race, religion, sex, or handicap. As long as you are enrolled in a college university/institution or an Alumni (one-year post-grad), you can join UTD FSA!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How much are membership fees?</p>
        <p>Early Fall membership fees will start at $30, and will raise to $35 at a later date in the Fall. Membership will stay at $35 for the remainder of the year.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How do I join and become a member?</p>
        <p>You can sign up for membership AND pay our membership fee via the UTD FSA Membership form! You can find the form on our website located under <span className="underline">Membership</span>.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">What benefits do members get?</p>
        <p>Becoming a UTD FSA member comes with many benefits! Membership includes a UTD FSA shirt designed for the year (guaranteed for those who paid fees during Early Membership pricing, but not guaranteed after the price increase), a digital UTD FSA membership card, being placed in a Pamilya, discounted ticket pricing for large-scale FSA events, Goodphil participant eligibility, and more!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">Where and when are the General Meetings?</p>
        <p>UTD FSA General Meetings are held at SCI 1.220 at 8:00 PM! They will be held on the first Wednesday of every month. Be sure to refer to our Instagram when a General Meeting is happening soon for more details!</p>
      </div>
    </div>
  );

  const goodphilContent = (
    <div className="space-y-6">
      <div>
        <p className="font-bold underline mb-2">What is Goodphil?</p>
        <p>Goodphil is an annual event hosted by FSAs across Texas, bringing together college students for a three-day weekend of Filipino cultural celebration, sports, dances, and unity. It's a chance for students to represent their school pride whilst showing off their talents, and also build connections within the FSA community! Goodphil will typically be held in March.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">What Goodphil events can I participate in?</p>
        <p>At Goodphil, you can compete in a series of sports and dances.</p>
        <p className="mt-2">UTD FSA competes in six different sports, including Volleyball, Basketball, Soccer, Flag Football, Ultimate Frisbee, and a 'gag sport' that changes with every year! Each sport will consist of a Mens, Womens, and Co-Ed team. Be on the lookout for more updates on these events!</p>
        <p className="mt-2">UTD FSA also competes in three dance categories: Spirit, Cultural, and Modern.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How do I join a team for Goodphil?</p>
        <p>All sports teams will have tryouts led by our Sports Coordinators and Captains, and auditions for Modern will also be held by our Modern Director(s) as Goodphil approaches. On the contrary, you don't need to tryout for Spirit or Cultural, and simply show up to practice upon interest! Refer to our Instagram and General Meeting slides for updates on tryouts, audition, and practice dates!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">Does Goodphil cost money to attend and participate in?</p>
        <p>Participants must purchase a participation ticket starting at $65. The price will slowly increase as the date approaches. More information on purchasing a ticket for Goodphil will be released later this year!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How can I support if I don't want to compete?</p>
        <p>Spectating sports is free, while performances varies year to year from either being charged a small fee for entry or being completely free. We highly recommend coming out to support all of the competing teams' games/performances for the utmost entertainment and school spirit! UTD FSA will release the schedule for all games and performances we compete as Goodphil approaches.</p>
      </div>
    </div>
  );

  const sportsAndDanceContent = (
    <div className="space-y-6">
      <div>
        <p className="font-bold underline mb-2">What sports does FSA offer?</p>
        <p>UTD FSA has five different sports that compete in Intramural Games during Fall semester, and Goodphil during Spring: Basketball, Volleyball, Flag Football, Soccer, and Frisbee.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">When and where are sports tryouts/practices held?</p>
        <p>Tryout dates will be released via the UTD FSA Instagram! If you are chosen to be the on the team for your designated sport, you will be added to a group chat made by the sport captain. If you would like to know who captains are for each sport and their contact information, please refer to the <span className="underline">Sports</span> page on our website!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">What is UTD FSA's cultural dance team?</p>
        <p>UTD Pamana is UTD FSA's cultural dance team that competes at Isang Mahal and Goodphil! Pamana aims to promote and celebrate Filipino heritage through dance by delivering impactful, storytelling performances. You can keep up with Pamana via their Instagram: <span className="underline">@utdpamana</span></p>
      </div>

      <div>
        <p className="font-bold underline mb-2">Do I have to Filipino to join the cultural team and have prior dance experience?</p>
        <p>No to both! Pamana is open to all, and no prior dance experience is required to join the team.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How much time commitment is required in Pamana?</p>
        <p>UTD Pamana practices at ECSW Atrium two days a week. More practices are held during "hell week", the week leading to performance day. Days are subject to change depending on the Cultural Director's preference!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">What is UTD FSA's modern dance team?</p>
        <p>UTD Maharlika is UTD FSA's modern dance team that competes at Isang Mahal and Goodphil! Maharlika aims to exemplify high performance quality within UTD FSA while specializing in hip hop and other styles of dance through their routines. The team also aims to foster community in dance and promote growth through shared exploration.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">Can anyone join Maharlika or do I need to audition?</p>
        <p>In order to join the Maharlika family, you must attend the audition dates. We hold auditions for both Fall and Spring semesters!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How much time commitment is required in Maharlika?</p>
        <p>The team will usually practice at Founders 2nd Floor Atrium three days a week. More practices are held during "hell week", the week leading to performance day. Practice location and days are subject to change depending on the Modern Director(s)'s preference!</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">Do I need to have prior dance experience to audition and join?</p>
        <p>Not at all! All levels of dance, whether you're a beginner or experienced, is welcome to audition for the team. For those who would like to get a feel of the Maharlika style, we recommend coming out to "Weekly Workshops", dance classes every Friday that are open to anyone! You can find updates on auditions and workshop dates via the team's Instagram: <span className="underline">@utdmaharlika</span></p>
      </div>
    </div>
  );

  const leadershipContent = (
    <div className="space-y-6">
      <div>
        <p className="font-bold underline mb-2">How can I get involved in FSA beyond general membership?</p>
        <p>If you would like to see what it's like to work behind the scenes of UTD FSA, we open intern applications later in the year! Stay tuned on our Instagram for more updates.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How can I stay updated on FSA events?</p>
        <p>Instagram will be our main platform for releasing and promoting events.</p>
      </div>

      <div>
        <p className="font-bold underline mb-2">How do I contact the officers if I have more questions?</p>
        <p>Please refer to the <span className="underline">About</span> page on the website to find all of the officers, their respective role, and their social media!</p>
      </div>
    </div>
  );

  const pamilyaContent = (
    <div className="space-y-6">
      <div>
        <p className="font-bold underline mb-2">What is a Pamilya and how does it work?</p>
        <p>Pamilya is our mentorship and community system. New members (Adings) are matched with upperclassmen mentors (Kuyas/Ates) and a small group for the year.</p>
      </div>
      <div>
        <p className="font-bold underline mb-2">How do I join a Pamilya?</p>
        <p>First, become a paid member. Then complete the Ading or Kuya/Ate form on our website so we can place you based on interests and availability.</p>
      </div>
      <div>
        <p className="font-bold underline mb-2">When are placements?</p>
        <p>Placements begin early Fall and continue on a rolling basis. Submit your form as soon as possible for earlier matching.</p>
      </div>
      <div>
        <p className="font-bold underline mb-2">Can I switch Pamilys?</p>
        <p>A formal Pamilya transfer request form will be available at a later date.</p>
      </div>
    </div>
  );

  const eventsTicketsContent = (
    <div className="space-y-6">
      <div>
        <p className="font-bold underline mb-2">How do I buy party tickets?</p>
        <p>Purchase tickets online at <a href="https://party.utdfsa.com/" target="_blank" rel="noopener noreferrer" className="underline">party.utdfsa.com</a>. Buy early—popular events sell out.</p>
      </div>
      <div>
        <p className="font-bold underline mb-2">Do I need to register for events?</p>
        <p>Some events require advance registration or RSVP. Check the Events page calendar for details and links.</p>
      </div>
      <div>
        <p className="font-bold underline mb-2">Where are events held?</p>
        <p>Most events are on UTD campus. Off-campus locations will be clearly noted on the Events page and Instagram.</p>
      </div>
    </div>
  );

  const accordionItems = [
    { title: "GENERAL INFORMATION", content: generalInformationContent },
    { title: "PAMILYA & MENTORSHIP", content: pamilyaContent },
    { title: "EVENTS & TICKETS", content: eventsTicketsContent },
    { title: "GOODPHIL", content: goodphilContent },
    { title: "SPORTS & DANCE TEAMS", content: sportsAndDanceContent },
    { title: "LEADERSHIP, COMMUNICATION, AND UPDATES", content: leadershipContent },
  ];

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/9dfd59a9a030f8aba56ebc2e0b52fddf91fb6429?width=3024')`,
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cd5d167ba5c328493fcef14e116d7d564009dd0f?width=92"
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cd5d167ba5c328493fcef14e116d7d564009dd0f?width=92"
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
          {/* Page Header */}
          <section className="w-full max-w-5xl text-center space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-white font-fugaz text-3xl lg:text-[64px] leading-normal">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              
              {/* Underline */}
              <div className="flex justify-center">
                <div className="w-full max-w-[600px] lg:max-w-[1000px] h-[2px] lg:h-[4px] bg-white"></div>
              </div>
            </div>
            
            <p 
              className="text-white font-gabarito text-lg lg:text-[36px] leading-normal"
              style={{
                textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              For any other questions or important inquiries, please contact us via Instagram (<span className="font-bold underline">@fsautd</span>) or email (<span className="font-bold underline">fsautd@gmail.com</span>)!
            </p>
          </section>

          {/* Quick Links */}
          <section className="w-full max-w-5xl">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-2">
              <Link to="/membership" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-fugaz px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
                <span>💳</span>
                <span>Membership</span>
              </Link>
              <Link to="/pamilyas" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-fugaz px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
                <span>👨‍👩‍👧‍👦</span>
                <span>Pamilyas</span>
              </Link>
              <Link to="/events#calendar" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-fugaz px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
                <span>📅</span>
                <span>Events Calendar</span>
              </Link>
              <a href="https://party.utdfsa.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-fugaz px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
                <span>🎫</span>
                <span>Buy Party Tickets</span>
              </a>
            </div>
          </section>

          {/* FAQ Accordions */}
          <section className="w-full max-w-5xl space-y-0">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openAccordion === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
