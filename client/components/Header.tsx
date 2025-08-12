import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main header background with navigation */}
      <div
        className="h-[60px] w-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #0D2718 27.4%, #3E562D 100%)'
        }}
      >
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 lg:gap-2 xl:gap-3 px-1 flex-nowrap w-full max-w-full overflow-hidden">
          <Link
            to="/about"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            ABOUT
          </Link>

          <Link
            to="/resources"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            RESOURCES
          </Link>

          <Link
            to="/sports"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            SPORTS
          </Link>

          <Link
            to="/dance"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            DANCE
          </Link>

          <Link
            to="/goodphil"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            GOODPHIL
          </Link>

          {/* FSA Logo */}
          <div className="mx-0.5 lg:mx-1 flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5127f3344975c32df5c7e8bfeffc1bd946f716eb?width=120"
              alt="FSA Logo"
              className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] drop-shadow-lg"
            />
          </div>

          <Link
            to="/membership"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            MEMBERSHIP
          </Link>

          <Link
            to="/media"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            MEDIA
          </Link>

          <Link
            to="/events"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            EVENTS
          </Link>

          <Link
            to="/pamilyas"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            PAMILYAS
          </Link>

          <Link
            to="/faq"
            className="text-white font-fugaz text-xs lg:text-sm xl:text-base text-center drop-shadow-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            FAQ
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between w-full px-4">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5127f3344975c32df5c7e8bfeffc1bd946f716eb?width=120"
              alt="FSA Logo"
              className="w-[35px] h-[35px] drop-shadow-lg"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white font-fugaz text-xl drop-shadow-lg"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 z-40 p-4 grid grid-cols-2 gap-4"
          style={{
            background: 'linear-gradient(180deg, #0D2718 27.4%, #3E562D 100%)'
          }}
        >
          <Link
            to="/about"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>

          <Link
            to="/resources"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            RESOURCES
          </Link>

          <Link
            to="/sports"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            SPORTS
          </Link>

          <Link
            to="/dance"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            DANCE
          </Link>

          <Link
            to="/goodphil"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            GOODPHIL
          </Link>

          <Link
            to="/membership"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            MEMBERSHIP
          </Link>

          <Link
            to="/media"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            MEDIA
          </Link>

          <Link
            to="/events"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            EVENTS
          </Link>

          <Link
            to="/pamilyas"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            PAMILYAS
          </Link>

          <Link
            to="/faq"
            className="text-white font-fugaz text-sm text-center drop-shadow-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </div>
      )}

      {/* Header shadow */}
      <div className="w-full h-1 shadow-[0_8px_4px_0_rgba(0,0,0,0.25)]" />
    </header>
  );
}
