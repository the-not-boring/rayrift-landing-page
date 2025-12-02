import React from 'react';

// Link Component with Arrow
const LinkArrow = ({ text }: { text: string }) => (
  <a href="#" className="inline-flex items-center text-[15px] font-semibold text-[#4493f8] hover:underline mt-4">
    {text}
    <svg className="ml-1 h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  </a>
);

export const SecuritySection: React.FC = () => {
  return (
    <div className="w-full pb-32 pt-20">
      {/* Top Grid: 3 Columns */}
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 border border-[#30363d] my-6">
        
        {/* Card 1: Code Security */}
        <div className="flex flex-col justify-between overflow-hidden rounded-0 border-r border-[#30363d]  bg-[#161b22]">
          <div className="p-8 pb-0">
            <h3 className="text-xl font-semibold text-white mb-2">
              <span className="font-bold">Security debt, solved.</span> <span className="font-medium text-neutral-400">Leverage security campaigns and Copilot Autofix to reduce application vulnerabilities.</span>
            </h3>
            <LinkArrow text="Learn about GitHub Code Security" />
          </div>
          
          <div className="mt-8 px-6 pb-0">
            <div className="overflow-hidden rounded-t-lg border border-[#30363d] bg-[#0d1117] shadow-xl">
               <div className="p-4 border-b border-[#30363d]">
                  <div className="text-sm font-semibold text-white mb-4">Prevent leaderboard exploits campaign</div>
                  <div className="text-xs text-neutral-400 mb-1">Campaign progress</div>
                  <div className="flex justify-between text-xs text-neutral-400 mb-2">
                     <span>97% (701 alerts)</span>
                     <span>23 alerts left</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#21262d] overflow-hidden">
                     <div className="h-full w-[97%] bg-[#A371F7]" />
                  </div>
                  <div className="mt-2 flex gap-3 text-[10px] text-neutral-400">
                     <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-[#A371F7]" /> 701 closed</div>
                     <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-[#3FB950]" /> 13 in progress</div>
                  </div>
                  <div className="mt-1 text-[10px] text-neutral-500">Campaign started 20 days ago</div>
               </div>
               <div className="p-4 bg-[#0d1117]">
                  <div className="text-xs text-neutral-400">Status</div>
                  <div className="text-xl font-medium text-white mt-1">7 days left</div>
                  <div className="text-[10px] text-neutral-500 mt-1">Due date is November 15, 2024</div>
               </div>
            </div>
          </div>
        </div>

        {/* Card 2: Dependabot */}
        <div className="flex flex-col justify-between overflow-hidden rounded-0 border-r border-[#30363d] bg-[#161b22]">
          <div className="p-8 pb-0">
             <h3 className="text-xl font-semibold text-white mb-2">
              <span className="font-bold">Dependencies you can depend on.</span> <span className="font-medium text-neutral-400">Update vulnerable dependencies with supported fixes for breaking changes.</span>
            </h3>
            <LinkArrow text="Learn about Dependabot" />
          </div>

          <div className="mt-8 px-6 pb-0">
             <div className="overflow-hidden rounded-t-lg border border-[#30363d] bg-[#0d1117] shadow-xl">
                <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-4 py-2 text-xs text-neutral-400">
                   <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M7.429 1.525a.75.75 0 0 1 .585 0l5.838 2.503a.75.75 0 0 1 .455.69v6.564a.75.75 0 0 1-.455.69l-5.838 2.503a.75.75 0 0 1-.585 0l-5.838-2.503a.75.75 0 0 1-.455-.69V4.718a.75.75 0 0 1 .455-.69L7.43 1.525Z" /></svg>
                   Dependencies defined in <span className="font-mono text-white">pypi/requirements.txt</span>
                </div>
                <div className="p-0">
                   {/* List Item 1 */}
                   <div className="flex items-center justify-between border-b border-[#30363d] p-3 hover:bg-[#161b22]">
                      <div className="flex items-center gap-3">
                         <div className="h-6 w-6 rounded-full bg-neutral-700 overflow-hidden relative">
                           <img src="https://ui-avatars.com/api/?name=D&background=random&color=fff" alt="" className="h-full w-full object-cover"/>
                         </div>
                         <div className="flex flex-col">
                           <span className="text-xs font-semibold text-white">diaphanousfrog / old-glamorous-stew</span>
                         </div>
                      </div>
                      <span className="text-[10px] text-neutral-500">Glamorous</span>
                   </div>
                   {/* List Item 2 */}
                   <div className="flex items-center justify-between border-b border-[#30363d] p-3 hover:bg-[#161b22]">
                      <div className="flex items-center gap-3">
                         <div className="h-6 w-6 rounded-full bg-neutral-700 overflow-hidden relative">
                           <img src="https://ui-avatars.com/api/?name=C&background=random&color=fff" alt="" className="h-full w-full object-cover"/>
                         </div>
                         <div className="flex flex-col">
                           <span className="text-xs font-semibold text-white">cypherscroll / cypherscroll</span>
                         </div>
                      </div>
                      <span className="text-[10px] text-neutral-500">CypherScroll</span>
                   </div>
                    {/* List Item 3 */}
                    <div className="flex items-center justify-between border-b border-[#30363d] p-3 hover:bg-[#161b22]">
                      <div className="flex items-center gap-3">
                         <div className="h-6 w-6 rounded-full bg-neutral-700 overflow-hidden flex items-center justify-center">
                           <span className="text-[10px] text-white font-bold">dj</span>
                         </div>
                         <div className="flex flex-col">
                           <span className="text-xs font-semibold text-white">django / django</span>
                         </div>
                      </div>
                   </div>
                    {/* List Item 4 */}
                    <div className="flex items-center justify-between p-3 hover:bg-[#161b22]">
                      <div className="flex items-center gap-3">
                         <div className="h-6 w-6 rounded-full bg-blue-900/40 overflow-hidden flex items-center justify-center border border-blue-800/50">
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="#4493f8"><path d="M7.429 1.525a.75.75 0 0 1 .585 0l5.838 2.503a.75.75 0 0 1 .455.69v6.564a.75.75 0 0 1-.455.69l-5.838 2.503a.75.75 0 0 1-.585 0l-5.838-2.503a.75.75 0 0 1-.455-.69V4.718a.75.75 0 0 1 .455-.69L7.43 1.525Z" /></svg>
                         </div>
                         <div className="flex flex-col">
                           <span className="text-xs font-semibold text-white">django-haystack / django-haystack</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Card 3: Secret Protection */}
        <div className="flex flex-col justify-between overflow-hidden rounded-0 bg-[#161b22]">
          <div className="p-8 pb-0">
             <h3 className="text-xl font-semibold text-white mb-2">
              <span className="font-bold">Your secrets, your business.</span> <span className="font-medium text-neutral-400">Detect, prevent, and remediate leaked secrets across your organization.</span>
            </h3>
            <LinkArrow text="Learn about GitHub Secret Protection" />
          </div>

          <div className="mt-8 px-6 pb-0">
             <div className="overflow-hidden rounded-t-lg border border-[#30363d] bg-[#0d1117] shadow-xl h-full font-mono text-[10px] leading-relaxed">
                <div className="p-4">
                   <div className="mb-2 text-neutral-400">
                      <span className="text-[#F78166]">→</span> <span className="text-[#7EE787]">~/octoinvaders</span> <span className="text-[#A371F7]">git:(<span className="text-[#F78166]">leaderboard-fetchPlayers</span>)</span> git push
                   </div>
                   <div className="mb-1 text-neutral-400">remote: <span className="text-[#F78166]">error GH009:</span> Secrets detected! This push failed.</div>
                   <div className="mb-1 text-neutral-400">remote:</div>
                   <div className="mb-1 text-neutral-400">remote:            GITHUB PUSH PROTECTION</div>
                   <div className="mb-1 text-neutral-400">remote: ——————————————————————————————————————</div>
                   <div className="mb-4 text-neutral-400">remote:  Resolve the following secrets before pushing:</div>
                   
                   <div className="rounded border border-[#30363d] bg-[#161b22] p-3">
                      <div className="mb-1 text-[#F78166]">Active secret</div>
                      <div className="mb-2 text-neutral-300">GitHub confirmed this secret is active.</div>
                      <div className="rounded bg-[#0d1117] p-2 text-neutral-400 border border-[#30363d]">
                         aio_EXAMPLE_KEY_PLACEHOLDER_12345
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: 2 Columns */}
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 border-1 border-[#30363d]">
         {/* Stat 1 */}
         <div className="rounded-0 border border-[#30363d] bg-[#161b22] p-10 md:p-14">
            <div className="text-5xl font-medium tracking-tighter text-white md:text-6xl mb-4">
               70% MTTR reduction
            </div>
            <div className="text-xl text-neutral-400">
               with Copilot Autofix <sup className="text-neutral-500">1</sup>
            </div>
         </div>

         {/* Stat 2 */}
         <div className="rounded-0 border broder-l-0 border-[#30363d] border-l-0 bg-[#161b22] p-10 md:p-14">
            <div className="text-5xl font-medium tracking-tighter text-white md:text-6xl mb-4">
               8.3M secret leaks stopped
            </div>
            <div className="text-xl text-neutral-400">
               in the past 12 months with push protection <sup className="text-neutral-500">1</sup>
            </div>
         </div>
      </div>
    </div>
  );
};
