
import React from 'react';

// Icons
const TextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11c0-3.866 3.582-7 8-7s8 3.134 8 7" />
    <path d="M16.5 17.5a2.5 2.5 0 0 1-2.5-2.5V11h5v4a2.5 2.5 0 0 1-2.5 2.5z" />
    <path d="M7.5 17.5a2.5 2.5 0 0 0 2.5-2.5V11h-5v4a2.5 2.5 0 0 0 2.5 2.5z" />
    <path d="M14 11v4" />
    <path d="M10 11v4" />
    <path d="M21 12v3a6 6 0 0 1-6 6h-2" />
  </svg>
);

const SecureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 11h8" />
    <path d="M12 11v4" />
    <path d="M10 15h4" />
  </svg>
);

const AiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M8 11h.01" />
    <path d="M11 11h.01" />
    <path d="M14 11h.01" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col justify-start rounded-[1rem] border border-[#30363d] bg-[#161b22] p-8 transition-colors hover:border-[#30363d]/80">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#21262d] text-white ring-1 ring-[#30363d]">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-neutral-400">
      {description}
    </p>
  </div>
);

export const WorkflowFeatures: React.FC = () => {
  return (
    <div className="w-full py-24">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Features for a faster workflow
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
          A web developer who's passionate about performance, security, and great user
          experience. From concept to clean code passionate about performance
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        {/* Left Large Card (Phone Mockup) */}
        <div className="relative flex min-h-[500px] flex-col overflow-hidden rounded-[1rem] border border-[#30363d] bg-[#0d1117] lg:col-span-1">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#161b22]/50 to-[#5b21b6]/60 pointer-events-none" />
          
          {/* Phone Bezel Simulation */}
          <div className="absolute inset-x-8 top-8 bottom-0 rounded-t-[2rem] border-x border-t border-[#30363d] bg-[#0d1117] p-6 shadow-2xl pt-0">
             
             {/* Notch Area */}
             <div className="mx-auto mb-12 h-6 w-32 rounded-b-xl bg-[#161b22] border-b border-x border-[#30363d]" />

             {/* Floating Icon */}
             <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/20">
                <SparkleIcon />
             </div>

             {/* Content */}
             <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold leading-tight text-white">
                   Get started with building blocks for screening
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                   Build the system you need to minimize risk with modular anti-money laundering systems
                </p>

                <button className="mt-8 w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]">
                   TRY FOR FREE
                </button>
             </div>

             {/* Decoration Dots */}
             <div className="absolute inset-0 z-0 opacity-20" 
                  style={{
                     backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                     backgroundSize: '24px 24px',
                     maskImage: 'linear-gradient(to bottom, transparent, black)'
                  }} 
             />
          </div>
        </div>

        {/* Right Grid (2x2) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-2">
           <FeatureCard 
             icon={<TextIcon />}
             title="Reformat any text"
             description="Defend against both common and rare threats with our ready-to-use rules — be ready in real-time."
           />
           <FeatureCard 
             icon={<SupportIcon />}
             title="Onboarding support"
             description="Track cross-border payment senders and receivers, making real-time decisions across 150+ currencies."
           />
           <FeatureCard 
             icon={<SecureIcon />}
             title="100% Secure"
             description="Streamline international payroll, compliance, tax deductions and filings."
           />
           <FeatureCard 
             icon={<AiIcon />}
             title="Provide AI solutions"
             description="Launch quickly with institutional-grade AML software—without the lengthy setup or headache."
           />
        </div>

      </div>
    </div>
  );
};
