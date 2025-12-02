
import React from 'react';

// Abstract Geometric Icons
const IconBurst = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
    <path d="M12 3V21M3 12H21M5.6 5.6L18.4 18.4M5.6 18.4L18.4 5.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="white" stroke="none"/>
  </svg>
);

const IconSparkle = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

const IconSplitCircle = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12H21" />
    <path d="M12 12V21" />
  </svg>
);

const IconLayers = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <rect x="3" y="3" width="14" height="14" rx="2" fill="white" fillOpacity="0.4"/>
    <rect x="7" y="7" width="14" height="14" rx="2" fill="white"/>
  </svg>
);

const IconSquareTilt = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
    <rect x="5" y="5" width="14" height="14" rx="3" transform="rotate(-10 12 12)" />
  </svg>
);

const IconStack = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12" />
    <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" />
    <path d="M3 12V5" />
    <path d="M21 5V12" />
  </svg>
);

const IconAsterisk = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
    <path d="M12 2V22" />
    <path d="M2 12H22" />
    <path d="M4.9 4.9L19.1 19.1" />
    <path d="M4.9 19.1L19.1 4.9" />
  </svg>
);

const IconPixel = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <rect x="4" y="4" width="6" height="6" />
    <rect x="14" y="4" width="6" height="6" />
    <rect x="4" y="14" width="6" height="6" />
    <rect x="14" y="14" width="6" height="6" fillOpacity="0.5"/>
    <rect x="9" y="9" width="6" height="6" fill="black"/> 
    <rect x="9" y="9" width="6" height="6" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

const IconFlower = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
    <circle cx="12" cy="12" r="3" fill="black"/>
  </svg>
);

export const IntegrationsHorizontal: React.FC = () => {
  const icons = [
    IconBurst,
    IconSparkle,
    IconSplitCircle,
    IconLayers,
    IconSquareTilt,
    IconStack,
    IconAsterisk,
    IconPixel,
    IconFlower,
  ];

  return (
    <div className="w-full pb-20 pt-10 mt-20">
      <div className="relative">
        
        {/* Content Header */}
        <div className="mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Seamless Integration
            </h2>
            <p className="text-lg leading-relaxed text-neutral-400">
              Connect effortlessly with your favorite tools and platforms — everything works
              together in real time.
            </p>
          </div>

          <div className="flex-shrink-0">
             <button className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-colors hover:bg-neutral-200">
               See All Integrations
             </button>
          </div>
        </div>

        {/* Icons Strip */}
        <div className="grid grid-cols-3 divide-x divide-y divide-[#30363d] border-y border-[#30363d] md:grid-cols-9 md:divide-y-0">
          {icons.map((Icon, idx) => (
            <div 
              key={idx} 
              className="flex h-32 items-center justify-center bg-[#0d1117] transition-colors hover:bg-[#161b22]"
            >
              <div className="opacity-70 transition-opacity hover:opacity-100">
                 <Icon />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
