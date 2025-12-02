
import React, { useState } from 'react';

// Heroicon: ArrowLongRight
const ArrowLongRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

// Icons from svgl.app / Heroicons
const TypeScriptIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0H22.5C23.3284 0 24 0.671573 24 1.5V22.5C24 23.3284 23.3284 24 22.5 24H1.5C0.671573 24 0 23.3284 0 22.5V1.5C0 0.671573 0.671573 0 1.5 0Z" fill="#3178C6"/>
    <path d="M11.25 7.5H16.125V8.4375H14.1562V16.875H13.2188V8.4375H11.25V7.5Z" fill="white"/>
    <path d="M19.125 14.5312C19.125 15.0938 18.9141 15.5508 18.4922 15.9023C18.0703 16.2539 17.5254 16.4297 16.8574 16.4297C16.2305 16.4297 15.709 16.2891 15.293 16.0078V15.0234C15.7383 15.3984 16.2656 15.5859 16.875 15.5859C17.2266 15.5859 17.502 15.498 17.7012 15.3223C17.9004 15.1465 18 14.9238 18 14.6543C18 14.2207 17.6719 13.9219 17.0156 13.7578L16.5938 13.6523C15.6562 13.418 15.1875 12.9258 15.1875 12.1758C15.1875 11.666 15.3809 11.25 15.7676 10.9277C16.1543 10.6055 16.6699 10.4443 17.3145 10.4443C17.9062 10.4443 18.4219 10.5732 18.8613 10.8311L18.5273 11.7275C18.0938 11.458 17.6016 11.3232 17.0508 11.3232C16.7168 11.3232 16.459 11.3994 16.2773 11.5518C16.0957 11.7041 16.0049 11.8975 16.0049 12.1318C16.0049 12.4893 16.3213 12.7471 16.9531 12.9053L17.4727 13.0371C18.5742 13.3184 19.125 13.8164 19.125 14.5312Z" fill="white"/>
  </svg>
);

const PythonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.410156C6.4673 0.410156 5.6791 2.83313 5.6791 2.83313L5.67207 5.92883H11.0967V6.70227H2.8877C2.8877 6.70227 0.0537109 6.47727 0.0537109 11.239C0.0537109 16.0008 2.69785 16.4016 2.69785 16.4016H5.49629V14.2977C5.49629 14.2977 5.2502 10.8266 8.76582 10.8266H11.7225C11.7225 10.8266 14.6732 10.6508 14.6732 7.72141V3.92234C14.6732 3.92234 15.0248 0.410156 12 0.410156ZM8.9627 2.08789C9.49707 2.08789 9.92598 2.5168 9.92598 3.05117C9.92598 3.58555 9.49707 4.01445 8.9627 4.01445C8.42832 4.01445 7.99941 3.58555 7.99941 3.05117C7.99941 2.5168 8.42832 2.08789 8.9627 2.08789ZM12.0299 23.5969C17.5626 23.5969 18.3508 21.1739 18.3508 21.1739L18.3578 18.0782H12.9332V17.3048H21.1422C21.1422 17.3048 23.9762 17.5298 23.9762 12.7681C23.9762 8.00633 21.332 7.60555 21.332 7.60555H18.5336V9.70945C18.5336 9.70945 18.7797 13.1805 15.2641 13.1805H12.3074C12.3074 13.1805 9.35684 13.3563 9.35684 16.2856V20.0848C9.35684 20.0848 9.00527 23.5969 12.0299 23.5969ZM15.0672 21.9191C14.5328 21.9191 14.1039 21.4902 14.1039 20.9559C14.1039 20.4215 14.5328 19.9926 15.0672 19.9926C15.6016 19.9926 16.0305 20.4215 16.0305 20.9559C16.0305 21.4902 15.6016 21.9191 15.0672 21.9191Z" fill="url(#paint0_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="2.69785" y1="2.83313" x2="21.332" y2="21.1739" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3776AB"/>
        <stop offset="1" stopColor="#FFD43B"/>
      </linearGradient>
    </defs>
  </svg>
);

const CurlIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 hover:text-white transition-colors cursor-pointer">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

// Code Snippet (Manual Syntax Highlighting)
const CodeContent = () => (
  <div className="font-mono text-[13px] leading-relaxed">
    <div className="text-neutral-400">
      <span className="text-neutral-500 select-none">$ </span>
      <span className="text-[#d2a8ff]">npm</span> <span className="text-white">install</span> <span className="text-[#ff7b72]">supermemory</span>
    </div>
    <br />
    <div>
      <span className="text-[#ff7b72]">import</span> <span className="text-white">Supermemory</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">‘supermemory’</span><span className="text-white">;</span>
    </div>
    <br />
    <div>
      <span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">client</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">new</span> <span className="text-[#d2a8ff]">Supermemory</span><span className="text-white">();</span>
    </div>
    <br />
    <div>
      <span className="text-[#ff7b72]">await</span> <span className="text-[#d2a8ff]">client.memories.add</span><span className="text-white">({'{{'}</span>
    </div>
    <div className="pl-4">
      <span className="text-[#79c0ff]">containerTag</span><span className="text-white">: </span><span className="text-[#79c0ff]">userId</span><span className="text-white">,</span>
    </div>
    <div className="pl-4">
      <span className="text-[#79c0ff]">content</span><span className="text-white">: </span><span className="text-[#a5d6ff]">"user booked flight Frontier F91098"</span><span className="text-white">,</span>
    </div>
    <div>
      <span className="text-white">{'}}'});</span>
    </div>
    <br />
    <div>
      <span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">result</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#d2a8ff]">client.memories.search</span><span className="text-white">({'{{'}</span>
    </div>
    <div className="pl-4">
      <span className="text-[#79c0ff]">containerTag</span><span className="text-white">: </span><span className="text-[#79c0ff]">userId</span><span className="text-white">,</span>
    </div>
    <div className="pl-4">
      <span className="text-[#79c0ff]">q</span><span className="text-white">: </span><span className="text-[#a5d6ff]">"what are the flight preferences?"</span>
    </div>
    <div>
      <span className="text-white">{'}}'});</span>
    </div>
    <div className="text-[#7EE787] italic">
      {'// "User usually flies Frontier, prefers'}
    </div>
    <div className="text-[#7EE787] italic">
      {'// morning departures, ~$100 budget"'}
    </div>
  </div>
);

export const QuickstartSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ts' | 'py' | 'curl'>('ts');

  return (
    <div className="w-full py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
          <div className="mb-8 inline-block rounded border border-[#30363d] bg-[#161b22] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Quickstart
          </div>
          
          <h2 className="mb-6 max-w-lg text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
            Delighting your users is <br className="hidden lg:block"/>
            shockingly easy
          </h2>
          
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-400">
            Add long-term memory to your AI with just a few lines of code.
            Supermemory handles recall, ranking, and storage - so you can
            focus on creating great user experiences.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-105">
              Setup in 5 mins <ArrowLongRight />
            </button>
            <button className="rounded-full border border-[#30363d] bg-transparent px-8 py-3.5 text-sm font-bold text-white hover:bg-[#161b22] transition-colors">
              Explore Docs
            </button>
          </div>
        </div>

        {/* Right Column: Code Block */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] shadow-2xl">
            
            {/* Tabs Header */}
            <div className="flex items-center justify-between border-b border-[#30363d] bg-[#161b22] px-2">
              <div className="flex">
                <button 
                  onClick={() => setActiveTab('ts')}
                  className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'ts' ? 'border-blue-500 text-white' : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  <TypeScriptIcon />
                  TypeScript
                </button>
                <button 
                  onClick={() => setActiveTab('py')}
                  className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'py' ? 'border-blue-500 text-white' : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  <PythonIcon />
                  Python
                </button>
                <button 
                  onClick={() => setActiveTab('curl')}
                  className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'curl' ? 'border-blue-500 text-white' : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  <CurlIcon />
                  cURL
                </button>
              </div>
              <div className="pr-4">
                <CopyIcon />
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 md:p-8 bg-[#0d1117]">
              <CodeContent />
            </div>

          </div>
          
          {/* Subtle Glow behind the code block */}
          <div className="absolute -inset-4 -z-10 bg-blue-500/5 blur-3xl rounded-[2rem]" />
        </div>

      </div>
    </div>
  );
};
