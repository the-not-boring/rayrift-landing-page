import React from 'react';

const Card3D = ({ 
  title, 
  cta, 
  icon 
}: { 
  title: React.ReactNode; 
  cta: string; 
  icon: React.ReactNode; 
}) => {
  return (
    <div className="group relative h-[340px] w-full overflow-hidden rounded-[1rem] bg-[#0060f0] shadow-xl transition-transform duration-500 hover:scale-[1.01]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b89ff] to-[#0047b3]" />
      
      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col justify-between p-10">
        <h3 className="max-w-[80%] text-4xl font-bold leading-tight text-white tracking-tight">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-lg font-bold text-white cursor-pointer group-hover:underline">
          {cta}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="translate-y-[1px]">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* 3D Icon Container - Positioned Absolute Right */}
      <div className="absolute -right-12 bottom-0 top-0 w-80 perspective-[1000px] pointer-events-none">
        <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateY(-20deg)' }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

// 3D Shield Icon Construction
const Shield3D = () => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
      style={{ transformStyle: 'preserve-3d', transform: 'rotateX(35deg) rotateZ(35deg)' }}
    >
        {/* Long Shadow Beam */}
        <div 
          className="absolute left-0 top-1/2 h-[400px] w-[200px] -translate-x-[20%] -translate-y-1/2 origin-left bg-gradient-to-r from-blue-900/40 to-transparent blur-md"
          style={{ transform: 'rotateY(0deg) translateZ(-60px) rotateZ(-10deg) skewY(10deg)' }}
        />

        {/* Shield Body Layers for Thickness */}
        {/* We stack multiple layers to create extrusion */}
        <div className="relative h-64 w-52">
           {/* Base Layer Shadow */}
           <div className="absolute inset-0 z-0 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]" style={{ transform: 'translateZ(-20px)' }}>
             <ShieldShape color="#003d99" />
           </div>
           
           {/* Extrusion Layers */}
           {[...Array(8)].map((_, i) => (
             <div key={i} className="absolute inset-0" style={{ transform: `translateZ(${i * 2 - 16}px)` }}>
               <ShieldShape color="#1c6ef0" />
             </div>
           ))}

           {/* Top Face */}
           <div className="absolute inset-0" style={{ transform: 'translateZ(0px)' }}>
              <ShieldShape color="#3b82f6" /> {/* Front Face Color */}
              
              {/* Checkmark 3D */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
                  {/* Checkmark Shadow */}
                  <div className="absolute opacity-20 blur-[2px] translate-y-2 translate-x-2">
                     <Checkmark color="black" />
                  </div>
                  {/* Checkmark Extrusion */}
                   {[...Array(6)].map((_, i) => (
                     <div key={`c-${i}`} className="absolute" style={{ transform: `translateZ(${i * 1}px)` }}>
                        <Checkmark color="#1a7f37" />
                     </div>
                   ))}
                  {/* Checkmark Top */}
                  <div className="absolute" style={{ transform: 'translateZ(6px)' }}>
                     <Checkmark color="#2ea44f" />
                  </div>
              </div>
           </div>
        </div>
    </div>
  );
};

// 3D Code Block Icon Construction
const CodeBlock3D = () => {
    return (
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(35deg) rotateZ(35deg)' }}
      >
          {/* Long Shadow Beam */}
          <div 
            className="absolute left-0 top-1/2 h-[400px] w-[200px] -translate-x-[20%] -translate-y-1/2 origin-left bg-gradient-to-r from-blue-900/40 to-transparent blur-md"
            style={{ transform: 'rotateY(0deg) translateZ(-60px) rotateZ(-10deg) skewY(10deg)' }}
          />
  
          {/* Block Body Layers */}
          <div className="relative h-60 w-60">
             {/* Base Shadow */}
             <div className="absolute inset-0 z-0 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]" style={{ transform: 'translateZ(-20px)' }}>
               <div className="h-full w-full rounded-[2.5rem] bg-[#003d99]" />
             </div>
             
             {/* Extrusion */}
             {[...Array(8)].map((_, i) => (
               <div key={i} className="absolute inset-0" style={{ transform: `translateZ(${i * 2 - 16}px)` }}>
                 <div className="h-full w-full rounded-[2.5rem] bg-[#1c6ef0]" />
               </div>
             ))}
  
             {/* Top Face */}
             <div className="absolute inset-0" style={{ transform: 'translateZ(0px)' }}>
                <div className="h-full w-full rounded-[2.5rem] bg-[#3b82f6] shadow-inner border-t border-white/20" />
                
                {/* Brackets 3D */}
                <div className="absolute inset-0 flex items-center justify-center gap-1" style={{ transform: 'translateZ(20px)' }}>
                     <div className="relative h-24 w-32">
                        {/* Brackets Shadow */}
                        <div className="absolute inset-0 opacity-20 blur-[2px] translate-y-2 translate-x-2 flex items-center justify-center">
                           <CodeBrackets color="black" />
                        </div>
                        {/* Brackets Extrusion */}
                        {[...Array(6)].map((_, i) => (
                           <div key={`b-${i}`} className="absolute inset-0 flex items-center justify-center" style={{ transform: `translateZ(${i * 1}px)` }}>
                              <CodeBrackets color="#1a7f37" />
                           </div>
                        ))}
                         {/* Brackets Top */}
                        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(6px)' }}>
                           <CodeBrackets color="#2ea44f" />
                        </div>
                     </div>
                </div>
             </div>
          </div>
      </div>
    );
  };

// SVG Shapes
const ShieldShape = ({ color }: { color: string }) => (
    <svg width="100%" height="100%" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L95 20V60C95 85 75 110 50 120C25 110 5 85 5 60V20L50 0Z" fill={color}/>
    </svg>
);

const Checkmark = ({ color }: { color: string }) => (
    <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const CodeBrackets = ({ color }: { color: string }) => (
    <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

export const SecurityCards: React.FC = () => {
  return (
    <div className="w-full pb-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card3D 
                title={<span>Stop leaks before <br /> they start</span>}
                cta="Explore Secret Protection"
                icon={<Shield3D />}
            />
            <Card3D 
                title={<span>Fix vulnerabilities in <br /> your code</span>}
                cta="Explore Code Security"
                icon={<CodeBlock3D />}
            />
        </div>
    </div>
  );
};