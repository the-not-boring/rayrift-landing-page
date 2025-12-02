
import React from 'react';

const CheckIcon = () => (
  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0060f0] text-white">
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const ComparisonTable: React.FC = () => {
  const rows = [
    { area: "Workflow", before: "Manual steps", after: "One click" },
    { area: "Reporting", before: "Spreadsheets mess", after: "Live dashboards" },
    { area: "Communication", before: "Lost messages", after: "Synced updates" },
    { area: "Scaling", before: "More hires", after: "Smart systems" },
  ];

  return (
    <div className="w-full py-20 lg:py-32">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Implementing RAG from scratch <br className="hidden md:block" />
          vs. using Ragrift
        </h2>
      </div>

      <div className="overflow-hidden rounded-[1rem] border border-[#30363d] bg-[#0d1117] shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-3 items-center border-b border-[#30363d] bg-[#161b22] px-6 py-6 md:px-10">
          <div className="text-sm font-medium text-neutral-400">Area of Impact</div>
          <div className="text-sm font-medium text-neutral-400">Before</div>
          <div className="text-sm font-medium text-neutral-400">After</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#30363d]">
          {rows.map((row, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-3 items-center px-6 py-8 transition-colors hover:bg-[#161b22]/30 md:px-10"
            >
              <div className="text-base font-medium text-neutral-500">
                {row.area}
              </div>
              <div className="text-base font-medium text-neutral-500">
                {row.before}
              </div>
              <div className="flex items-center gap-3 text-base font-bold text-white">
                <CheckIcon />
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
