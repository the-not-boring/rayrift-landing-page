import React from 'react';

// Icons
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-neutral-500">
    <path fillRule="evenodd" d="M12.78 6.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.22 7.28a.75.75 0 0 1 1.06-1.06L8 9.94l3.72-3.72a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>
);

const CircleCheck = ({ color = "text-[#9333ea]" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={color}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8L7 10L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TableRow = ({ 
  title, 
  area, 
  status, 
  assignee, 
  progress, 
  icon 
}: { 
  title: string, 
  area: { text: string, color: string }, 
  status: { text: string, color: string, iconColor: string }, 
  assignee: string, 
  progress: number,
  icon?: React.ReactNode 
}) => (
  <div className="group grid grid-cols-[1.5fr_0.8fr_0.8fr_1fr_1fr] items-center gap-4 border-b border-[#30363d] px-4 py-2.5 text-sm hover:bg-[#1c2128] transition-colors">
    <div className="flex items-center gap-3 overflow-hidden">
      <div className="flex-shrink-0">
         {icon || <CircleCheck />}
      </div>
      <span className="font-medium text-white truncate">{title}</span>
    </div>
    
    <div>
      <span className={`inline-flex items-center rounded-full border border-[#30363d] px-2.5 py-0.5 text-xs font-medium text-white ${area.color}`}>
        {area.text}
        <div className={`ml-1.5 h-2 w-2 rounded-full ${area.color.replace('bg-opacity-10', '').replace('bg-', 'bg-opacity-100 bg-')}`} style={{backgroundColor: 'currentColor'}} />
      </span>
    </div>

    <div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#30363d] px-2.5 py-0.5 text-xs font-medium text-white hover:bg-[#30363d] cursor-pointer transition-colors">
        {status.text}
        <div className={`h-2.5 w-2.5 rounded text-[${status.iconColor}] flex items-center justify-center`}>
            {/* Simple status icon */}
            <svg viewBox="0 0 16 16" width="12" height="12" fill={status.iconColor}><path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" /></svg>
        </div>
      </span>
    </div>

    <div className="flex items-center gap-2">
      <div className="h-5 w-5 flex-shrink-0 rounded-full bg-neutral-700 overflow-hidden">
         <img src={`https://ui-avatars.com/api/?name=${assignee}&background=random&color=fff&size=32`} alt={assignee} className="h-full w-full object-cover" />
      </div>
      <span className="text-neutral-400 truncate">{assignee}</span>
    </div>

    <div className="flex items-center gap-3">
       <div className="h-2 w-full rounded-full bg-[#30363d] overflow-hidden">
          <div className="h-full rounded-full bg-[#A371F7]" style={{ width: `${progress}%` }} />
       </div>
       <span className="text-xs text-neutral-500 w-8 text-right">{progress}%</span>
    </div>
  </div>
);

const GroupHeader = ({ title, count, icon, color = "text-neutral-400" }: { title: string, count: number, icon: React.ReactNode, color?: string }) => (
  <div className="flex items-center gap-2 bg-[#161b22] px-4 py-2 text-sm font-semibold text-white border-b border-[#30363d] mt-1">
    <ChevronDown />
    <span className={color}>{icon}</span>
    <span>{title}</span>
    <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#30363d] px-1.5 text-xs font-medium text-neutral-400">
      {count}
    </span>
  </div>
);

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export const WorkTogetherSection: React.FC = () => {
  return (
    <div className="relative w-full py-32 overflow-hidden">
      
      {/* Background Glow & Sparkles */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pointer-events-none">
         <div className="relative w-full max-w-4xl h-full">
            {/* Main Purple Glow */}
            <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7C3AED] opacity-20 blur-[100px] rounded-full mix-blend-screen" />
            {/* Pink Halo */}
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#DB2777] opacity-10 blur-[80px] rounded-full mix-blend-screen" />
            
            {/* Sparkles */}
            <Star className="absolute top-[180px] left-[20%] w-4 h-4 text-white/40 animate-pulse" />
            <Star className="absolute top-[140px] right-[25%] w-3 h-3 text-white/30 animate-pulse delay-75" />
            <Star className="absolute top-[220px] left-[35%] w-2 h-2 text-white/50 animate-pulse delay-150" />
            <Star className="absolute top-[160px] right-[40%] w-2.5 h-2.5 text-white/40 animate-pulse delay-300" />
         </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center">
        
       

        {/* Heading & Subtext */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Achieve more with RAG
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#7d8590] md:text-xl">
            From planning and discussion to code review, GitHub keeps your <br className="hidden md:block"/>
            team’s conversation and context next to your code.
          </p>
        </div>

        {/* UI Mockup Container */}
        <div className="relative w-full max-w-6xl rounded-xl border border-[#30363d] bg-[#161b22] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
           
           {/* Top Glow Edge */}
           <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A371F7] to-transparent opacity-50" />

           {/* Window Header */}
           <div className="flex items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="text-[#A371F7]">
                       <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 5.5A1.5 1.5 0 0 1 1.5 4h13A1.5 1.5 0 0 1 16 5.5v5A1.5 1.5 0 0 1 14.5 12h-13A1.5 1.5 0 0 1 0 10.5v-5ZM1.5 5.5a.5.5 0 0 0-.5.5v3.879l1.621-1.622c.293-.293.768-.293 1.06 0L5.341 9.94l3.129-3.13a.75.75 0 0 1 1.06 0l4.97 4.97V5.5a.5.5 0 0 0-.5-.5h-13Z" /></svg>
                    </span>
                    OctoArcade Invaders
                 </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                 <button className="hover:text-white"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3.75a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1-.75-.75ZM2.25 7a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H2.25Zm0 4.25a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H2.25Z" /></svg></button>
                 <button className="hover:text-white"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75ZM3.5 6.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" /></svg></button>
                 <button className="hover:text-white"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM14.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" /></svg></button>
              </div>
           </div>

           {/* Toolbar */}
           <div className="flex flex-wrap items-center gap-4 border-b border-[#30363d] bg-[#161b22] px-4 py-2">
              <div className="flex items-center gap-1 rounded bg-[#30363d] p-1 text-sm">
                 <button className="rounded bg-[#161b22] px-2 py-1 font-medium text-white shadow-sm flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75ZM3.5 6.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" /></svg>
                    Feature planning
                    <ChevronDown />
                 </button>
              </div>
              <div className="h-4 w-[1px] bg-[#30363d]" />
              <div className="flex items-center gap-4 text-sm font-medium text-neutral-400">
                 <button className="flex items-center gap-1 hover:text-white"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75ZM3.5 6.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" /></svg> By area</button>
                 <button className="flex items-center gap-1 hover:text-white"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H2.75ZM4.5 10.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0-3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0-3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z" /></svg> Current sprint</button>
                 <button className="flex items-center gap-1 text-white hover:text-neutral-300">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z" /></svg>
                    New view
                 </button>
              </div>
           </div>

           {/* Table Header */}
           <div className="grid grid-cols-[1.5fr_0.8fr_0.8fr_1fr_1fr] gap-4 border-b border-[#30363d] bg-[#161b22] px-4 py-2 text-xs font-semibold text-neutral-500">
              <div className="flex items-center gap-2">Title</div>
              <div className="flex items-center gap-2">Area <div className="text-white opacity-0 hover:opacity-100"><ChevronDown/></div></div>
              <div className="flex items-center gap-2">Status <div className="text-white opacity-0 hover:opacity-100"><ChevronDown/></div></div>
              <div className="flex items-center gap-2">Assignee <div className="text-white opacity-0 hover:opacity-100"><ChevronDown/></div></div>
              <div className="flex items-center gap-2">Sub-issue progress <div className="text-white opacity-0 hover:opacity-100"><ChevronDown/></div></div>
           </div>

           {/* Table Body */}
           <div className="bg-[#0d1117] overflow-x-auto">
              
              {/* Group: Prototype */}
              <GroupHeader 
                 title="Prototype" 
                 count={3} 
                 icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-neutral-500"><path d="M14.064 0a8.75 8.75 0 0 0-6.192 2.508C6.556 3.826 6.053 4.8 6.053 6.046c0 .85.253 1.55.572 2.062a.75.75 0 1 1-1.25.835A4.665 4.665 0 0 1 4.553 6.046c0-1.638.648-3.003 1.957-4.237C7.653.693 9.47 0 11.234 0h2.83ZM2.864 12.316l1.22.82 2.1-5.248a.75.75 0 0 0-1.393-.557l-1.927 4.985ZM6.53 11.85a.75.75 0 0 1 .15-1.05l6.75-5.25a.75.75 0 0 1 1.026.131l1.25 1.75a.75.75 0 0 1-.132 1.026l-6.75 5.25a.75.75 0 0 1-1.049-.132l-1.25-1.75Z" /></svg>} 
              />
              <TableRow 
                 title="Game brief and go-no-go" 
                 area={{text: "Producers", color: "text-[#D2A8FF]"}} 
                 status={{text: "Complete", color: "text-[#3FB950] border-[#3FB950]", iconColor: "#3FB950"}}
                 assignee="lucid-jellybean"
                 progress={85}
              />
              <TableRow 
                 title="Engine prototype (physics, rendering)" 
                 area={{text: "Engine", color: "text-[#A371F7]"}} 
                 status={{text: "Complete", color: "text-[#3FB950] border-[#3FB950]", iconColor: "#3FB950"}}
                 assignee="aidengarcia"
                 progress={24}
              />
              <TableRow 
                 title="Initial concept art" 
                 area={{text: "Art", color: "text-[#FF7B72]"}} 
                 status={{text: "Complete", color: "text-[#3FB950] border-[#3FB950]", iconColor: "#3FB950"}}
                 assignee="amerejess"
                 progress={100}
              />
               <div className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-500 hover:bg-[#1c2128] cursor-pointer">
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z" /></svg>
                 Add item
              </div>

              {/* Group: Beta */}
              <GroupHeader 
                 title="Beta" 
                 count={5} 
                 icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-[#3FB950]"><path d="M8 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.045 7.427a6.38 6.38 0 0 1 4.542-1.921 6.38 6.38 0 0 1 4.542 1.921l2.408 2.006A.75.75 0 0 1 14.15 10.6l-3.237-1.114a1.8 1.8 0 0 0-1.826.468l-1.285 1.527a.75.75 0 0 1-1.154.004l-1.309-1.57a1.8 1.8 0 0 0-1.84-.452L.304 10.485a.75.75 0 0 1-.502-1.365l3.243-1.693Z" /></svg>}
                 color="text-white" 
              />
              <TableRow 
                 title="Integrate with Leaderboard Service" 
                 area={{text: "Game Loop", color: "text-[#79c0ff]"}} 
                 status={{text: "Not Started", color: "text-neutral-400 border-neutral-600", iconColor: "#6e7681"}}
                 assignee="dareal-daryl"
                 progress={54}
                 icon={<CircleCheck color="text-[#3FB950]" />}
              />
               <TableRow 
                 title="Creative design update to aliens for variety" 
                 area={{text: "Art", color: "text-[#FF7B72]"}} 
                 status={{text: "Planning", color: "text-[#d2a8ff] border-[#d2a8ff]", iconColor: "#A371F7"}}
                 assignee="novablaster00"
                 progress={0}
                 icon={<CircleCheck color="text-[#3FB950]" />}
              />
              <TableRow 
                 title="Updates to alien, beam, bomb and cannon sprites" 
                 area={{text: "Art", color: "text-[#FF7B72]"}} 
                 status={{text: "Building", color: "text-[#f1e05a] border-[#f1e05a]", iconColor: "#d29922"}}
                 assignee="itsjessicabell"
                 progress={10}
                 icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-neutral-500"><path d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z" /></svg>}
              />
              <TableRow 
                 title="Update to colision logic" 
                 area={{text: "Engine", color: "text-[#A371F7]"}} 
                 status={{text: "Building", color: "text-[#f1e05a] border-[#f1e05a]", iconColor: "#d29922"}}
                 assignee="helios-ackmore"
                 progress={75}
                 icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-[#3FB950]"><path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5h-3.32Z" /></svg>}
              />
               <TableRow 
                 title="Improve alien respawn rate" 
                 area={{text: "Game Loop", color: "text-[#79c0ff]"}} 
                 status={{text: "Behind", color: "text-[#ff7b72] border-[#ff7b72]", iconColor: "#f85149"}}
                 assignee="aidengarcia"
                 progress={0}
                 icon={<CircleCheck color="text-[#3FB950]" />}
              />
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-500 hover:bg-[#1c2128] cursor-pointer">
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z" /></svg>
                 Add item
              </div>

               {/* Group: Launch */}
              <GroupHeader 
                 title="Launch" 
                 count={4} 
                 icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-[#F78166]"><path fillRule="evenodd" d="M10.374.366a.75.75 0 0 1 1.053.218c.245.39.462.802.646 1.232a8.6 8.6 0 0 1 2.378 2.053.75.75 0 1 1-1.171 1.956 7.1 7.1 0 0 0-1.425-1.503c-.636-.51-1.597-.905-2.735-1.026a7.1 7.1 0 0 0-1.493.003c-1.139.123-2.1.517-2.736 1.027a7.1 7.1 0 0 0-1.424 1.502.75.75 0 1 1-1.172-1.955 8.6 8.6 0 0 1 2.378-2.054A9.85 9.85 0 0 1 5.32 1.815.75.75 0 0 1 6.372.583a8.3 8.3 0 0 0 1.623-.556 8.3 8.3 0 0 0 1.63.556.75.75 0 0 1 .749-.217ZM2.518 7.375a.75.75 0 0 1 1.036-.269c.801.494 2.128.894 4.446.894 2.318 0 3.645-.4 4.446-.894a.75.75 0 0 1 .785 1.277c-.947.581-2.49 1.117-5.231 1.117-2.741 0-4.284-.536-5.23-1.117a.75.75 0 0 1-.252-1.008Z" clipRule="evenodd" /><path d="M1.75 12a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1-.75-.75ZM3 15.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z" /></svg>}
                 color="text-white" 
              />
              <TableRow 
                 title="Interviews with media outlets" 
                 area={{text: "Producers", color: "text-[#D2A8FF]"}} 
                 status={{text: "Not Started", color: "text-neutral-400 border-neutral-600", iconColor: "#6e7681"}}
                 assignee="exactlymyra"
                 progress={33}
              />
           </div>
        </div>
      </div>
    </div>
  );
};
