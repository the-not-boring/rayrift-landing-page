import React from 'react';
import { Badge } from './Badge';

// Graphic for the Integration Card (Bottom Left)
const IntegrationGraphic = () => {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center">
      {/* Outer Circle */}
      <div className="absolute h-64 w-64 rounded-full border border-[#30363d] opacity-50" />
      {/* Floating Icon Outer 1 */}
      <div className="absolute right-2 top-8 h-8 w-8 rounded-lg bg-[#21262d] p-2 shadow-lg border border-[#30363d]">
         <div className="h-full w-full rounded-sm bg-neutral-600" />
      </div>
      {/* Floating Icon Outer 2 */}
      <div className="absolute bottom-6 left-6 h-6 w-6 rounded-full bg-[#21262d] border border-[#30363d] p-1.5">
         <div className="h-full w-full rounded-full bg-neutral-500" />
      </div>

      {/* Middle Circle */}
      <div className="absolute h-40 w-40 rounded-full border border-[#30363d] opacity-80" />
      {/* Floating Icon Middle 1 */}
      <div className="absolute left-2 top-10 h-8 w-8 rounded bg-[#21262d] p-2 border border-[#30363d] shadow-lg">
         <div className="h-full w-full rotate-45 bg-neutral-300" />
      </div>
      {/* Floating Icon Middle 2 */}
      <div className="absolute bottom-4 right-8 h-2 w-2 rounded-full bg-neutral-500" />

      {/* Inner Circle */}
      <div className="absolute h-20 w-20 rounded-full border border-[#30363d]" />
      
      {/* Center Logo */}
      <div className="z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-[#CCF045] shadow-[0_0_20px_rgba(204,240,69,0.3)]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 0L24 0V12H12V0ZM0 12L12 12V24H0V12ZM12 12L24 12V24H12V12Z" fill="currentColor"/>
          <rect x="0" y="0" width="10" height="10" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Create with ease like <br />
          never before.
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
          Keep everyone aligned with one shared workspace built for intelligent teamwork. All
          your design files, feedback, and AI insights in one unified space.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        
        {/* Top Card: Interface Overview (Full Width on Grid) */}
        <div className="group relative overflow-hidden rounded-[1rem] border border-[#30363d] bg-[#161b22] lg:col-span-2 flex items-center min-h-[380px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2128]/40 to-[#0d1117]/80 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-start gap-12 p-8 py-0 md:p-14 lg:flex-row lg:items-center lg:gap-20 w-full">
            
            {/* Left Text Content */}
            <div className="flex-1 space-y-5 lg:pl-4 px-0">
               <div className="mb-4">
                <Badge className="bg-[#E7FBB3] text-black/80">Overview of Interface</Badge>
              </div>
              
              <h3 className="text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl">
                Designed with an <br className="hidden md:block" />
                intuitive experience that users love.
              </h3>
              
              <p className="max-w-md text-sm leading-relaxed text-neutral-400 font-medium">
                An intuitive interface means can quickly understand how to perform
                talks without the need for extensive training or guidance.
              </p>
            </div>

            {/* Right Graphic: UI Mockup */}
            <div className="w-full flex-1 lg:max-w-xl">
              <div className="relative translate-y-12">
                
                {/* Mockup Window */}
                <div className="relative overflow-hidden rounded-t-xl border-x border-t border-[#30363d] bg-[#0d1117] shadow-2xl">
                  
                  {/* Gradient Fade for Bottom Visibility */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-[#161b22] via-50%" />

                  {/* Window Controls */}
                  <div className="border-b border-[#30363d] bg-[#21262d] px-4 py-3">
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                    </div>
                  </div>
                  
                  {/* Window Body */}
                  <div className="flex p-4 pb-20"> {/* Extra padding bottom for fade area */}
                    {/* Sidebar */}
                    <div className="w-1/4 space-y-3 border-r border-[#30363d] pr-4">
                      <div className="h-1.5 w-full rounded-full bg-[#30363d]" />
                      <div className="h-1.5 w-3/4 rounded-full bg-[#30363d]" />
                      <div className="h-1.5 w-1/2 rounded-full bg-[#30363d]" />
                      <div className="mt-4 h-1.5 w-full rounded-full bg-[#30363d] opacity-50" />
                      <div className="h-1.5 w-full rounded-full bg-[#30363d] opacity-50" />
                      <div className="h-1.5 w-3/4 rounded-full bg-[#30363d] opacity-30" />
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 pl-4 space-y-5">
                       <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-[#30363d]" />
                          <div className="space-y-1.5 flex-1">
                             <div className="h-2 w-full rounded-full bg-[#30363d]" />
                             <div className="h-2 w-2/3 rounded-full bg-[#30363d]" />
                          </div>
                       </div>
                       
                       <div className="h-32 w-full rounded-lg border border-[#30363d] bg-[#21262d]/50" />
                       
                       <div className="grid grid-cols-2 gap-3">
                          <div className="h-24 rounded-lg bg-[#30363d]/30" />
                          <div className="h-24 rounded-lg bg-[#30363d]/30" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Card: Integration */}
        <div className="relative flex flex-col justify-end overflow-hidden rounded-[1rem] border border-[#30363d] bg-[#161b22] p-8 md:p-10 min-h-[420px]">
          <div className="absolute inset-0 flex items-center justify-center -translate-y-12">
            <IntegrationGraphic />
          </div>
          
          <div className="relative z-10">
            <h3 className="mb-2 text-xl font-bold text-white">Easy Integration</h3>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Integrates with other tools and systems streamlining their workflow.
            </p>
          </div>
        </div>

        {/* Bottom Right Card: Support */}
        <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1rem] border border-[#30363d] bg-[#161b22] p-8 md:p-10">
          {/* Background 24/7 Text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span className="translate-y-[-10%] select-none font-manrope text-[14rem] font-bold leading-none tracking-tighter text-[#0d1117] lg:text-[16rem]">
              24/7
            </span>
          </div>

          {/* Floating Support Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-[#CCF045] blur-xl opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
                <button className="relative flex items-center gap-2 rounded-full bg-[#CCF045] px-6 py-3 font-bold text-black transition-transform duration-300 hover:scale-105">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" stroke="none" />
                      <circle cx="9" cy="10" r="1.5" fill="black"/>
                      <circle cx="15" cy="10" r="1.5" fill="black"/>
                      <path d="M16.5 14.5c-.8.8-2 1.5-4.5 1.5s-3.7-.7-4.5-1.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 2a8 8 0 0 1 8 8v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3a8 8 0 0 1 8-8z" stroke="black" strokeWidth="2"/>
                      <path d="M12 2v2" stroke="black" strokeWidth="2"/>
                   </svg>
                   Support
                </button>
             </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="mb-2 text-xl font-bold text-white">Trusted Support Team</h3>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Recognized for responses and knowledge for quick solutions
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};