import React, { useState } from 'react';

const REVIEWS = [
  {
    id: 1,
    image: "https://framerusercontent.com/images/SkcEvdAXpH2DYCETO5TQrD5AcE.png?scale-down-to=512",
    quote: "A web developer who’s passionate about performance, security, and great user experience. From concept to clean code passionate about Gilberto.",
    name: "Alex Korle",
    role: "CEO & CO-Founder at Gilberto"
  },
  {
    id: 2,
    image: "https://framerusercontent.com/images/SkcEvdAXpH2DYCETO5TQrD5AcE.png?scale-down-to=512", // Using same image for demo as requested, would typically vary
    quote: "The attention to detail and clean code practices have significantly improved our platform's performance and maintainability.",
    name: "Sarah Miller",
    role: "CTO at TechFlow"
  }
];

export const FounderTestimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const current = REVIEWS[activeIndex];

  return (
    <div className="w-full py-20 lg:py-32 flex items-center justify-center">
      <div className="relative w-full max-w-6xl">
        
        {/* Navigation Buttons (Outside) */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-x-16 -translate-y-1/2 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-[#1c2128] border border-[#30363d] text-neutral-400 hover:text-white hover:border-neutral-500 transition-all z-20"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 translate-x-16 -translate-y-1/2 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-[#1c2128] border border-[#30363d] text-neutral-400 hover:text-white hover:border-neutral-500 transition-all z-20"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Card Container */}
        <div className="relative overflow-hidden rounded-[1rem] border border-[#30363d] bg-[#0d1117] h-[400px] md:h-[450px]">
          
          {/* Background Gradient (Purple/Blue from bottom-left) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3b0764]/60 via-[#1e1b4b]/40 to-[#0d1117] pointer-events-none" />
          
          {/* Fading Vertical Lines */}
          <div className="absolute inset-0 flex justify-between px-12 pointer-events-none opacity-20">
             {/* We use mask-image to fade the lines out at the top */}
             <div className="w-full h-full flex justify-between" style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}>
                <div className="w-px h-full bg-purple-500/50" />
                <div className="w-px h-full bg-purple-500/50" />
                <div className="w-px h-full bg-purple-500/50" />
                <div className="w-px h-full bg-purple-500/50" />
                <div className="w-px h-full bg-purple-500/50" />
                <div className="w-px h-full bg-purple-500/50" />
             </div>
          </div>

          {/* Content Grid - Animated on Change */}
          <div 
            key={activeIndex}
            className="relative z-10 flex h-full flex-col md:flex-row items-center animate-fade-in"
          >
            
            {/* Image Side - Attached to Left, Large (40% width) */}
            <div className="relative h-full w-full md:w-[45%] flex items-end justify-start overflow-hidden">
               {/* Image anchored to bottom-left, scaled up */}
               <div className="relative w-full h-full flex items-end justify-start">
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="h-[92%] w-auto max-w-none object-contain object-bottom drop-shadow-2xl grayscale-[20%] -ml-12 md:-ml-8 mb-[-1px]" 
                  />
               </div>
            </div>

            {/* Text Side (60% width) */}
            <div className="flex flex-col justify-center w-full md:w-[55%] p-8 md:pr-16 md:pl-8 text-center md:text-left h-full">
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight text-white mb-8">
                {current.quote}
              </blockquote>
              
              <div>
                <div className="text-lg font-bold text-white">{current.name},</div>
                <div className="text-base text-neutral-400">{current.role}.</div>
              </div>
            </div>

          </div>

          {/* Mobile Navigation controls (visible only on small screens) */}
          <div className="absolute bottom-4 right-4 flex gap-2 lg:hidden z-20">
            <button onClick={handlePrev} className="p-2 rounded-full bg-[#1c2128] border border-[#30363d] text-white">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={handleNext} className="p-2 rounded-full bg-[#1c2128] border border-[#30363d] text-white">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};