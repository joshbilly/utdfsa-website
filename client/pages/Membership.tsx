import { useState } from "react";
import { Link } from "react-router-dom";

export default function Membership() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const benefits = [
    {
      icon: "👕",
      title: "Exclusive FSA Merch",
      description: "Get this year's official UTD FSA shirt (Fall membership required)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🏆",
      title: "Competition Eligibility",
      description: "Compete in Isang Mahal and Goodphil representing UTD FSA",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Pamilya Placement",
      description: "Join a close-knit family group within FSA for lifelong friendships",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📱",
      title: "Social Media Features",
      description: "Get your intramural teams promoted on our Instagram page",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "💳",
      title: "Digital Membership Card",
      description: "Track Goodphil points, quick event entry, and exclusive party discounts",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: "🎉",
      title: "Exclusive Events Access",
      description: "Priority access to parties, mixers, and special member-only events",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Early Bird",
      price: "$30",
      period: "Until September 18th",
      highlight: true,
      features: ["All member benefits", "FSA shirt guaranteed", "Discount pricing on events", "Premium membership card included"],
      badge: "Best Value!"
    },
    {
      name: "Regular",
      price: "$35",
      period: "After September 18th",
      highlight: false,
      features: ["All member benefits", "FSA shirt (while supplies last)", "Discount pricing on events", "Premium membership card included"],
      badge: null
    }
  ];

  const testimonials = [
    {
      name: "Hugo Nguyen",
      year: "Senior",
      quote: "FSA gave me a home away from home. The friendships I've made through my Pamilya are irreplaceable!",
      image: "👩‍🎓"
    },
    {
      name: "Cheynne Le",
      year: "Junior",
      quote: "Competing in Goodphil was the highlight of my college experience. The team spirit is unmatched!",
      image: "👨‍💼"
    },
    {
      name: "Alvin Bagaoisan",
      year: "Sophomore",
      quote: "From cultural events to sports, FSA helped me connect with my heritage and make lasting memories.",
      image: "👩‍🎨"
    }
  ];

  const faqs = [
    {
      question: "When does membership expire?",
      answer: "Membership is valid for the entire academic year (Fall and Spring semesters)."
    },
    {
      question: "Can I join mid-semester?",
      answer: "Yes! You can join anytime during the academic year, though some benefits like the FSA shirt may have limited availability."
    },
    {
      question: "Do I need to be Filipino to join?",
      answer: "Not at all! FSA welcomes students of all backgrounds who are interested in Filipino culture and community."
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
                MEMBERSHIP
              </h1>
              
              {/* Right line */}
              <div className="hidden sm:block flex-1 h-px bg-white max-w-[200px] lg:max-w-[405px]" />
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h2
                className="text-white font-fugaz text-2xl lg:text-[40px] mb-6"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Join the FSA Family Today!
              </h2>
              <p
                className="text-white font-gabarito text-lg lg:text-[24px] leading-relaxed mb-8"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Become part of a vibrant community that celebrates Filipino culture, builds lasting friendships, and creates unforgettable college memories. Your journey starts here!
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full max-w-6xl">
            <h2
              className="text-white font-fugaz text-3xl lg:text-[48px] text-center mb-12"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Membership Options
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative ${tier.highlight ? 'transform scale-105' : ''}`}>
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-fugaz text-sm px-4 py-1 rounded-full z-10">
                      {tier.badge}
                    </div>
                  )}
                  <div className={`relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                    tier.highlight ? 'border-yellow-400 border-opacity-60' : 'border-white border-opacity-20'
                  } text-center h-full`}>
                    <h3
                      className="text-white font-fugaz text-2xl lg:text-[32px] mb-4"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      {tier.name}
                    </h3>
                    <div className="mb-6">
                      <span
                        className="text-white font-fugaz text-4xl lg:text-[56px]"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {tier.price}
                      </span>
                      <p
                        className="text-white font-gabarito text-lg mt-2"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {tier.period}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="text-green-400 text-xl">✓</span>
                          <span
                            className="text-white font-gabarito text-base lg:text-lg text-left"
                            style={{
                              textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <section className="w-full max-w-4xl text-center">
            <a
              href="https://forms.utdfsa.com/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-fugaz text-xl lg:text-[32px] px-12 py-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              <span>🚀</span>
              <span>Join FSA Now!</span>
            </a>
            <p
              className="text-white font-gabarito text-lg mt-4 opacity-90"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Quick and easy - takes less than 5 minutes!
            </p>
          </section>

          {/* Member Benefits */}
          <section className="w-full max-w-6xl">
            <h2
              className="text-white font-fugaz text-3xl lg:text-[48px] text-center mb-4"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Why Join FSA?
            </h2>
            <p
              className="text-white font-gabarito text-lg lg:text-[24px] text-center mb-12 max-w-3xl mx-auto"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Membership unlocks a world of opportunities, connections, and experiences that will enrich your college journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center text-2xl lg:text-3xl`}>
                      {benefit.icon}
                    </div>
                    <h3
                      className="text-white font-fugaz text-lg lg:text-[24px] mb-3"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-white font-gabarito text-base lg:text-[18px] leading-relaxed"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full max-w-6xl">
            <h2
              className="text-white font-fugaz text-3xl lg:text-[48px] text-center mb-12"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              What Our Members Say
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{testimonial.image}</div>
                    <blockquote
                      className="text-white font-gabarito text-lg lg:text-[20px] leading-relaxed mb-4 italic"
                      style={{
                        textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p
                        className="text-white font-fugaz text-lg"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="text-white font-gabarito text-base opacity-90"
                        style={{
                          textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {testimonial.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full max-w-4xl">
            <h2
              className="text-white font-fugaz text-3xl lg:text-[48px] text-center mb-12"
              style={{
                textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
              }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white border-opacity-20">
                  <h3
                    className="text-white font-fugaz text-lg lg:text-[24px] mb-3"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    className="text-white font-gabarito text-base lg:text-[18px] leading-relaxed"
                    style={{
                      textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full max-w-4xl text-center">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-30">
              <h2
                className="text-white font-fugaz text-2xl lg:text-[40px] mb-6"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Ready to Start Your FSA Journey?
              </h2>
              <p
                className="text-white font-gabarito text-lg lg:text-[24px] mb-8 max-w-2xl mx-auto"
                style={{
                  textShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                Join hundreds of students who have found their home in FSA. Your Filipino family at UTD is waiting for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.utdfsa.com/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>📝</span>
                  <span>Complete Membership Form</span>
                </a>
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-fugaz text-lg lg:text-xl px-8 py-4 rounded-full hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>📅</span>
                  <span>See Upcoming Events</span>
                </Link>
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
