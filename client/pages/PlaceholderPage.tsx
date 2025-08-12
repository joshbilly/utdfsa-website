import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.slice(1).toUpperCase() || "PAGE";

  return (
    <div 
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(180deg, hsl(var(--fsa-green-medium)) 15.87%, hsl(var(--fsa-green-dark)) 100%)'
      }}
    >
      {/* Header/Navigation */}
      <Header />
      
      {/* Placeholder content */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-white font-fugaz text-3xl sm:text-4xl lg:text-6xl text-center drop-shadow-lg mb-8">
          {pageName}
        </h1>
        
        <p className="text-white font-gabarito text-lg sm:text-xl lg:text-2xl text-center max-w-2xl mb-8">
          This page is coming soon! We're working hard to bring you more content about UTD FSA.
        </p>
        
        <p className="text-white font-gabarito text-base sm:text-lg lg:text-xl text-center max-w-xl opacity-80">
          In the meantime, feel free to explore our other pages or reach out to us through our social media!
        </p>
      </div>
      
      {/* Footer with Quick Links and Social Media */}
      <Footer />
    </div>
  );
}
