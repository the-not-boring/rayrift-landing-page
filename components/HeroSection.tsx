
import React from 'react';

// Icons
const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025C10.295 6.839 11.145 6.8 11.995 6.8c.85 0 1.7.039 2.48.117 1.91-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

const NotionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.222 4.222v15.556h15.556V4.222H4.222zM18 18H6V6h12v12z" fillOpacity="0" />
    <path d="M9.008 3.522l.187.596L8.033 4.5l.233 13.978 1.144.522 7.556-3.878V4.5l-.933-.289.166-.589H9.008zm1.722 2.644h1.722l2.767 7.7v-7.7h1.233v9.3l-1.311.456-3.144-8.778v8.778l-1.267.433V6.166z" />
  </svg>
);

const PDFIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M10 13H8v5h2" />
    <path d="M16 13h-2.5v5" />
    <path d="M12 13v5" />
  </svg>
);

const DriveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.33 4H15.67L22 15H14.67L8.33 4Z" fill="#FFC107" fillOpacity="0.2"/>
    <path d="M15.67 4L8.33 17H2L9.33 4H15.67Z" fill="#4CAF50" fillOpacity="0.2"/>
    <path d="M22 15L14.67 15L7.33 2H14.67L22 15Z" fill="#1976D2" fillOpacity="0.2"/>
    <path d="M12 3L4 17H20L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

// Animated Components
const FloatingCard = ({ icon, color, label, delay, className }: { icon: React.ReactNode, color: string, label: string, delay: string, className?: string }) => (
  <div 
    className={`absolute flex flex-col items-center justify-center p-3 rounded-2xl border border-white/5 bg-[#0d1117]/80 backdrop-blur-md shadow-xl transition-transform hover:scale-110 ${className}`}
    style={{ animation: `float 6s ease-in-out infinite ${delay}` }}
  >
    <div className={`text-${color} mb-2 opacity-90`}>{icon}</div>
    <div className="text-[10px] font-medium text-neutral-400">{label}</div>
    {/* Inner Glow */}
    <div className={`absolute inset-0 rounded-2xl bg-${color}/5 pointer-events-none`} />
  </div>
);

const DataFlowAnimation = () => {
  return (
    <div className="relative w-full max-w-6xl h-[320px] mx-auto mt-16 mb-8 hidden md:flex items-center justify-center">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes flow-dash {
          to { stroke-dashoffset: -100; }
        }
        @keyframes pulse-node {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 15px rgba(59,130,246,0.5); }
        }
        .path-flow {
          stroke-dasharray: 5, 5;
          animation: flow-dash 1.5s linear infinite;
        }
      `}</style>

      {/* SVG Connection Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
          <mask id="fadeMask">
             <linearGradient id="maskGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="white" stopOpacity="0" />
                <stop offset="0.2" stopColor="white" stopOpacity="1" />
                <stop offset="0.8" stopColor="white" stopOpacity="1" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
             </linearGradient>
             <rect x="0" y="0" width="100%" height="100%" fill="url(#maskGradient)" />
          </mask>
        </defs>

        {/* Input to Center Paths */}
        <g mask="url(#fadeMask)">
           <path d="M200 80 C 350 80, 400 160, 500 160" fill="none" stroke="url(#flowGradient)" strokeWidth="2" className="path-flow" />
           <path d="M200 160 C 350 160, 400 160, 500 160" fill="none" stroke="url(#flowGradient)" strokeWidth="2" className="path-flow" style={{ animationDelay: '0.2s' }} />
           <path d="M200 240 C 350 240, 400 160, 500 160" fill="none" stroke="url(#flowGradient)" strokeWidth="2" className="path-flow" style={{ animationDelay: '0.4s' }} />
        </g>

        {/* Center to Output Paths */}
        <g mask="url(#fadeMask)">
           <path d="M640 160 C 750 160, 800 100, 900 100" fill="none" stroke="url(#flowGradient)" strokeWidth="2" className="path-flow" style={{ animationDelay: '0.6s' }} />
           <path d="M640 160 C 750 160, 800 220, 900 220" fill="none" stroke="url(#flowGradient)" strokeWidth="2" className="path-flow" style={{ animationDelay: '0.8s' }} />
           <path d="M640 160 C 750 160, 850 160, 920 160" fill="none" stroke="url(#flowGradient)" strokeWidth="2" className="path-flow" style={{ animationDelay: '1s' }} />
        </g>
      </svg>

      {/* 1. Source Cluster (Left) */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[200px] z-10">
         <FloatingCard 
            icon={<NotionIcon />} 
            color="white" 
            label="Notion" 
            delay="0s" 
            className="left-0 top-[40px] bg-neutral-900"
         />
         <FloatingCard 
            icon={<PDFIcon />} 
            color="red-500" 
            label="Documents" 
            delay="1s" 
            className="left-[60px] top-[120px] z-20 bg-neutral-900 border-red-500/20"
         />
         <FloatingCard 
            icon={<GitHubIcon />} 
            color="white" 
            label="GitHub" 
            delay="2s" 
            className="left-[10px] top-[200px] bg-neutral-900"
         />
      </div>

      {/* 2. Central Core (Processing) */}
      <div className="relative z-20 h-32 w-32 rounded-3xl bg-[#0b0d11] border border-blue-500/30 shadow-[0_0_50px_-10px_rgba(59,130,246,0.4)] flex items-center justify-center group">
         {/* Inner Grid Texture */}
         <div 
            className="absolute inset-0 rounded-3xl opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '8px 8px' }}
         />
         {/* Pulse Ring */}
         <div className="absolute inset-0 rounded-3xl border border-blue-500/50 animate-ping opacity-20" />
         
         <div className="flex flex-col items-center gap-2 text-white">
            <div className="text-blue-400 filter drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">
               <SparkleIcon />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase">Engine</span>
         </div>
      </div>

      {/* 3. Output Knowledge Graph (Right) */}
      <div className="absolute right-[10%] top-0 bottom-0 w-[200px] z-10 flex items-center justify-center">
         <div className="relative w-full h-[200px]">
            {/* Graph Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
               <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="white" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="white" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="white" strokeWidth="1" />
               <line x1="80%" y1="20%" x2="90%" y2="50%" stroke="white" strokeWidth="1" />
            </svg>

            {/* Nodes */}
            <div className="absolute top-[20%] right-[20%] h-3 w-3 rounded-full bg-blue-400" style={{ animation: 'pulse-node 2s infinite 0.5s' }} />
            <div className="absolute bottom-[20%] right-[20%] h-3 w-3 rounded-full bg-indigo-400" style={{ animation: 'pulse-node 2s infinite 1s' }} />
            <div className="absolute top-[50%] right-[10%] h-4 w-4 rounded-full bg-purple-400" style={{ animation: 'pulse-node 2s infinite 1.5s' }} />
            
            {/* Data Chips Floating */}
            <div className="absolute top-[30%] right-[40%] px-2 py-1 rounded bg-blue-900/50 border border-blue-500/30 text-[10px] text-blue-200 backdrop-blur-sm animate-pulse">
               Vector
            </div>
            <div className="absolute bottom-[30%] right-[40%] px-2 py-1 rounded bg-indigo-900/50 border border-indigo-500/30 text-[10px] text-indigo-200 backdrop-blur-sm animate-pulse delay-700">
               Index
            </div>
         </div>
      </div>

    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#05080e]">
      
      {/* 
        Background Implementation
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#05080e]">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,27,75,0.5),rgba(2,4,8,0))]" />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(59,130,246,0.15),rgba(2,4,8,0))]" />
        </div>

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 100%',
            maskImage: 'radial-gradient(ellipse 100% 75% at 50% 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 75% at 50% 0%, black 50%, transparent 100%)'
          }}
        />
        
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Main Heading */}
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
          Ship faster. <br className="md:hidden" />
          <span className="relative inline-block mx-2 md:mx-4">
            <span className="absolute inset-0 bg-[#1e3a8a]/30 border border-[#3b82f6]/50 rounded-lg -skew-x-6 transform scale-105 backdrop-blur-sm" />
            <span className="relative z-10 text-white px-2">Build</span>
          </span>
          smarter.
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed">
          Ship faster with reliable pipelines, actionable insights, and enterprise-grade controls - all in one platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button className="px-8 py-4 rounded-lg bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg shadow-white/10">
            Start Building
          </button>
          <button className="px-8 py-4 rounded-lg bg-[#0F1115] text-white font-bold text-sm border border-[#30363d] hover:bg-[#1c1f26] hover:border-neutral-500 transition-all flex items-center gap-2">
            <GitHubIcon />
            Star on GitHub
          </button>
        </div>

        {/* New Animated Data Flow Section */}
        <DataFlowAnimation />

      </div>
    </div>
  );
};
