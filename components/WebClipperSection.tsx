
import React from 'react';

// Heroicons Outline (for thinner, crisper look matches reference)
const LightningBoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const DocumentTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
  </svg>
);

const DevicePhoneMobileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const WebClipperSection: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-32 mt-20">
      
      {/* 
        Background Arc & Glow 
        Constructed to look like a "sunrise" horizon using a massive masked circle 
      */}
      <div className="absolute top-0 left-1/2 w-[1200px] h-[500px] -translate-x-1/2 pointer-events-none">
        
        {/* The Glow Core */}
        <div className="absolute inset-0 top-[100px]">
           {/* The Dome Shape */}
           <div className="w-full h-full rounded-[50%_50%_0_0] bg-gradient-to-b from-[#6D28D9] via-[#4C1D95]/40 to-transparent opacity-80 blur-3xl" />
        </div>

        {/* The Sharp Rim & Dot Texture */}
        <div className="absolute inset-0 top-[120px] rounded-[50%_50%_0_0] overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#5b21b6]/20 to-transparent">
           {/* Inner Top Highlight */}
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
           
           {/* Dot Pattern */}
           <div 
             className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
               backgroundSize: '12px 12px',
               maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)'
             }}
           />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center pt-24">
          
          {/* Button */}
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1117]/80 px-4 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
            <span className="text-purple-400">
              <LightningBoltIcon />
            </span>
            How it works
          </div>

          {/* Heading */}
          <h2 className="mb-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            AiNest as Your Exceptional Web Clipper
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-400/80">
            Unleash unparalleled efficiency as AiNest transforms the mundane <br className="hidden md:block" />
            task of web clipping into an extraordinary journey.
          </p>
        </div>

        {/* Feature Row - 3 Columns with Short Dashes */}
        <div className="mt-28 grid grid-cols-1 gap-12 md:gap-8 md:grid-cols-3">
          
          {/* Column 1 */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-white/20" />
            <div className="mb-5 text-neutral-400">
              <DocumentTextIcon />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white tracking-tight">Newsletters</h3>
            <p className="text-sm leading-relaxed text-neutral-500 pr-4">
              Save newsletters effortlessly, no more forwarding messy emails.
            </p>
          </div>

          {/* Column 2 */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-white/20" />
            <div className="mb-5 text-neutral-400">
              <BookmarkIcon />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white tracking-tight">Kindle</h3>
            <p className="text-sm leading-relaxed text-neutral-500 pr-4">
              Automatically sync your highlights and notes from your Kindle.
            </p>
          </div>

          {/* Column 3 */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-white/20" />
            <div className="mb-5 text-neutral-400">
              <DevicePhoneMobileIcon />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white tracking-tight">Mobile</h3>
            <p className="text-sm leading-relaxed text-neutral-500 pr-4">
              Capture ideas the instant you get them, whether you are on a computer.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
