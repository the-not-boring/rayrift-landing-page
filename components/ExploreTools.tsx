
import React from 'react';

// Icons
const BoltIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
  </svg>
);

const AgentsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="9" height="9" rx="1" />
    <rect x="13" y="2" width="9" height="9" rx="1" />
    <rect x="2" y="13" width="9" height="9" rx="1" />
    <rect x="13" y="13" width="9" height="9" rx="1" />
  </svg>
);

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
  </svg>
);

const CanvasIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="0" />
    <path d="M2 20V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M7 7L17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ToolCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="flex flex-col justify-between p-8 transition-colors hover:bg-[#1c2128]">
    <div>
      <div className="mb-6 text-[#CCF045]">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-white tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-400 mb-8">
        {description}
      </p>
    </div>
    
    <div>
      <a href="#" className="group inline-flex items-center text-sm font-bold text-white hover:text-[#CCF045] transition-colors">
        <span className="border-b border-white/30 pb-0.5 group-hover:border-[#CCF045]">Explore</span>
        <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
);

export const ExploreTools: React.FC = () => {
  return (
    <div className="w-full py-20 lg:py-32">
      <div className="overflow-hidden rounded-none border border-[#30363d] bg-[#0d1117]">
        
        {/* Top Header Bar */}
        <div className="flex w-full flex-col border-b border-[#30363d] md:flex-row">
          
          {/* Label Side */}
          <div className="flex items-center border-b border-[#30363d] md:border-b-0 md:border-r md:w-1/3 bg-[#161b22] px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-[#CCF045]" /> {/* Accent Square */}
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Explore AI Tools
              </span>
            </div>
          </div>

          {/* Pattern Side */}
          <div className="relative h-16 w-full md:h-auto md:w-2/3 bg-[#0d1117] overflow-hidden">
             {/* Diagonal Stripes Pattern */}
             <div 
               className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: 'repeating-linear-gradient(45deg, #30363d 0, #30363d 1px, transparent 0, transparent 10px)'
               }}
             />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 divide-y divide-[#30363d] md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
          <ToolCard 
            icon={<BoltIcon />}
            title="AI Workflows"
            description="Combine AI with your every-day apps"
          />
          <ToolCard 
            icon={<AgentsIcon />}
            title="AI Agents"
            description="Make custom AI that works across your stack"
          />
          <ToolCard 
            icon={<ChatIcon />}
            title="AI Chatbots"
            description="Answer customer questions instantly"
          />
          <ToolCard 
            icon={<CanvasIcon />}
            title="Canvas"
            description="Instantly turn your ideas into fully automated systems with AI"
          />
        </div>
      </div>
    </div>
  );
};
