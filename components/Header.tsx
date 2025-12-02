
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine visibility based on scroll direction
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false); // Scrolling down & past threshold
        } else {
          setIsVisible(true); // Scrolling up
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-2 left-1/2 -translate-x-1/2 w-[84%] z-50 transition-all duration-300 ease-in-out border border-white/10 rounded-xl backdrop-blur-lg border-white/10 !py-4 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/5 backdrop-blur-lg border-white/10 py-4 rounded-full' 
          : 'bg-transparent border-transparent py-6 rounded-full'
      }`}
    >
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 flex items-center justify-between">
            
            {/* Fake Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
                <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg italic">
                        S
                    </div>
                    {/* Shine effect */}
                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </div>
                <span className="font-bold text-white tracking-tight text-lg">Setrex</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {['Features', 'Solutions', 'Customers', 'Pricing'].map((item) => (
                    <a 
                        key={item} 
                        href="#" 
                        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                    </a>
                ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <button className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                    Log in
                </button>
                <button className="group relative rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-blue-50">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-0 transition-opacity group-hover:opacity-50" />
                </button>
            </div>
        </div>
    </header>
  );
};
