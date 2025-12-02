
import React from 'react';

export const StatsArcSection: React.FC = () => {
  return (
    <div className="w-full mt-24 relative">
      
      {/* Floating Buttons Container - Positioned to overlap the arc top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex gap-4 w-full justify-center px-4">
        <button className="rounded-md bg-[#EA580C] px-8 py-3 text-xs font-bold tracking-widest text-white shadow-lg hover:bg-[#c2410c] transition-colors uppercase">
          Get Started
        </button>
        <button className="rounded-md border border-neutral-700 bg-[#0d1117] px-8 py-3 text-xs font-bold tracking-widest text-white shadow-lg hover:bg-[#161b22] transition-colors uppercase hidden md:block">
          Find your subscription
        </button>
      </div>

      {/* Arc Background Container */}
      <div 
        className="w-full bg-gradient-to-b from-[#7c2d12] to-[#0d1117] pt-24 pb-32 px-4 md:px-8"
        style={{ 
          borderTopLeftRadius: '50% 100px', 
          borderTopRightRadius: '50% 100px' 
        }}
      >
        <div className="mx-auto max-w-6xl text-center">
          
          {/* Headline */}
          <h2 className="mb-20 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            We’re in the business of <br />
            growing businesses.
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-7xl font-bold text-[#fed7aa] tracking-tighter">
                90%
              </div>
              <p className="max-w-[200px] text-center text-sm font-medium leading-relaxed text-orange-100/80">
                of users say that Ragrift helps them to stay more connected<sup className="text-[10px]">1</sup>
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-7xl font-bold text-[#fed7aa] tracking-tighter">
                43
              </div>
              <p className="max-w-[200px] text-center text-sm font-medium leading-relaxed text-orange-100/80">
                The average number of apps used by teams in Ragrift<sup className="text-[10px]">2</sup>
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-7xl font-bold text-[#fed7aa] tracking-tighter">
                87%
              </div>
              <p className="max-w-[200px] text-center text-sm font-medium leading-relaxed text-orange-100/80">
                of users say that Ragrift helps them to collaborate more efficiently<sup className="text-[10px]">1</sup>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
