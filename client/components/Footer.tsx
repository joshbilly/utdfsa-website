import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-12 gap-8">
      {/* QUICK LINKS title */}
      <h3 className="text-white font-fugaz text-3xl sm:text-4xl lg:text-[64px] text-center drop-shadow-lg">
        QUICK LINKS
      </h3>
      
      {/* Links section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-12">
        <Link 
          to="/newsletters"
          className="text-white font-fugaz text-xl sm:text-2xl lg:text-[36px] text-center underline drop-shadow-lg hover:opacity-80 transition-opacity"
        >
          NEWSLETTERS
        </Link>
        
        <a
          href="/FSA First General Meeting Presentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-fugaz text-xl sm:text-2xl lg:text-[36px] text-center underline drop-shadow-lg hover:opacity-80 transition-opacity"
        >
          GEN MEETING SLIDES
        </a>
        
        <Link 
          to="/faq"
          className="text-white font-fugaz text-xl sm:text-2xl lg:text-[36px] text-center underline drop-shadow-lg hover:opacity-80 transition-opacity"
        >
          FAQ
        </Link>
      </div>
      
      {/* Social media icons */}
      <div className="flex items-center gap-8 lg:gap-[66px] mt-4">
        <a 
          href="https://tiktok.com/@utdfsa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3cf79e93a5365436fd780373075b22bb0599d47a?width=187"
            alt="TikTok"
            className="w-[60px] h-[60px] lg:w-[93px] lg:h-[93px]"
            style={{
              filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
        </a>
        
        <a 
          href="https://instagram.com/utdfsa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d37180814eb33b348bd0de0acb7d87feb08769ec?width=187"
            alt="Instagram"
            className="w-[60px] h-[60px] lg:w-[93px] lg:h-[93px]"
            style={{
              filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
        </a>
        
        <a 
          href="https://youtube.com/@utdfsa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6d415e1a5d75af53589a285960ead562d5d82754?width=188"
            alt="YouTube"
            className="w-[60px] h-[68px] lg:w-[94px] lg:h-[106px]"
            style={{
              filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
        </a>
        
        <a 
          href="https://discord.gg/utdfsa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cd6e98c1bb225faf7c8f0b2f9f7779653efad7ef?width=188"
            alt="Discord"
            className="w-[60px] h-[68px] lg:w-[94px] lg:h-[106px]"
            style={{
              filter: 'drop-shadow(4px 5px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
        </a>
      </div>
    </footer>
  );
}
