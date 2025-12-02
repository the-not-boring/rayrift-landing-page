
import React, { useState } from 'react';

// Bottom Grid Icons
const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const SyncIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21h5v-5" />
  </svg>
);

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

// Right Panel Icons
const PlugIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
    <path d="M12 22v-5" />
    <path d="M9 8V2" />
    <path d="M15 8V2" />
    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// Mockup Components
const MockupList = ({ items, icon: Icon }: { items: string[], icon: any }) => (
  <div className="flex flex-col items-center justify-center h-full w-full py-8 px-6">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 border border-green-500/20">
      <Icon />
    </div>
    
    <div className="w-full space-y-3">
      {items.map((text, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg border border-[#30363d] bg-[#161b22] p-3 text-sm text-neutral-300">
          <div className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-green-500 animate-pulse' : 'bg-neutral-600'}`} />
          <span className="font-mono text-xs opacity-50">LOG-{230 + i}</span>
          <span>{text}</span>
        </div>
      ))}
      <div className="flex flex-col gap-2 mt-2">
         <div className="h-2 w-full rounded-full bg-[#30363d]/30" />
         <div className="h-2 w-2/3 rounded-full bg-[#30363d]/30" />
         <div className="h-2 w-1/2 rounded-full bg-[#30363d]/30" />
      </div>
    </div>
  </div>
);

export const RagProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Connect Data Sources",
      description: "Instantly ingest data from Notion, Google Drive, GitHub, and more.",
      id: "ingest",
      mockup: (
        <MockupList 
          icon={PlugIcon}
          items={[
            "Syncing Notion workspace...",
            "Indexing 45 PDF documents",
            "Connected to GitHub repo: main"
          ]}
        />
      )
    },
    {
      title: "Process & Vectorize",
      description: "Automatically chunk, embed, and store data in a high-performance vector DB.",
      id: "process",
      mockup: (
        <MockupList 
          icon={SparklesIcon}
          items={[
            "Chunking strategy: Semantic",
            "Generating embeddings (OpenAI)",
            "Upserting 12,400 vectors"
          ]}
        />
      )
    },
    {
      title: "Contextual Retrieval",
      description: "Retrieve the most relevant context for your LLM with hybrid search.",
      id: "retrieve",
      mockup: (
        <MockupList 
          icon={MessageIcon}
          items={[
            "Query: 'How to reset API key?'",
            "Retrieved 3 relevant contexts",
            "Generating response with context"
          ]}
        />
      )
    }
  ];

  return (
    <div className="w-full py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Column: Controls */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-12 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Centralize and activate <br />
              your knowledge base
            </h2>

            <div className="flex flex-col">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`group relative flex flex-col items-start border-l-2 py-6 pl-8 transition-all duration-300 ${
                    activeStep === index 
                      ? 'border-[#28C840]' 
                      : 'border-[#30363d] hover:border-neutral-500'
                  }`}
                >
                  <h3 className={`text-xl font-semibold transition-colors ${
                    activeStep === index ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    {step.title}
                  </h3>
                  {activeStep === index && (
                     <p className="mt-2 text-base leading-relaxed text-neutral-400 animate-fade-in">
                        {step.description}
                     </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Mockup */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] shadow-2xl">
               
               {/* Mockup Header */}
               <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-4 py-3 text-xs text-neutral-500 font-mono">
                  <span className="text-neutral-300">Ragrift</span>
                  <span>/</span>
                  <span className="text-neutral-300">Workflows</span>
                  <span>/</span>
                  <span className="text-neutral-300">Pipeline</span>
                  <span className="ml-auto flex gap-1">
                     <div className="h-1.5 w-1.5 rounded-full bg-neutral-600"/>
                     <div className="h-1.5 w-1.5 rounded-full bg-neutral-600"/>
                  </span>
               </div>

               {/* Dynamic Content */}
               <div className="bg-[#0d1117] min-h-[360px] flex items-center">
                  <div key={activeStep} className="w-full animate-fade-in">
                     {steps[activeStep].mockup}
                  </div>
               </div>

            </div>
          </div>

        </div>

        {/* Bottom Feature Grid */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 border-t border-[#30363d] pt-12">
           
           <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                 <DatabaseIcon /> Vector Database
              </div>
              <p className="text-sm text-neutral-400">Built-in managed vector storage for millions of embeddings.</p>
           </div>

           <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                 <SyncIcon /> Auto-Sync
              </div>
              <p className="text-sm text-neutral-400">Keep your AI knowledge fresh with scheduled data syncing.</p>
           </div>

           <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                 <FilterIcon /> Metadata Filters
              </div>
              <p className="text-sm text-neutral-400">Refine retrieval with powerful metadata filtering capabilities.</p>
           </div>

           <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                 <ChartIcon /> Progress Insights
              </div>
              <p className="text-sm text-neutral-400">Track usage, latency, and retrieval quality metrics.</p>
           </div>

        </div>

      </div>
    </div>
  );
};
