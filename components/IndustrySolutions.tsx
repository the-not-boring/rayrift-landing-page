
import React, { useState } from 'react';

// Icons
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ChipIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 4 3.5 4 6.5a4.5 4.5 0 0 1-9 0 2.5 2.5 0 0 1 0-5" />
  </svg>
);

const BankIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21v-7" />
    <path d="M19 21v-7" />
    <path d="M10 9L3 21" />
    <path d="M14 9l7 12" />
    <rect width="12" height="6" x="6" y="3" rx="1" />
  </svg>
);

const ScaleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const AcademicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

// Types
interface DataItem {
  title: string;
  subtitle: string;
  meta: string;
  iconBg: string;
  iconColor: string;
}

interface IndustryData {
  id: string;
  label: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  cardTitle: string;
  items: DataItem[];
}

// Data
const INDUSTRIES: IndustryData[] = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: <HeartIcon />,
    heading: 'Instant patient insights',
    description: 'Empower medical professionals with RAG. Retrieve patient history, lab results, and relevant medical research in seconds to make informed decisions.',
    cardTitle: 'Patient Records',
    items: [
      { title: 'Dr. Sarah Smith', subtitle: 'Cardiology Report - #8821', meta: 'Just now', iconBg: 'bg-red-500/10', iconColor: 'text-red-500' },
      { title: 'Lab Results', subtitle: 'Blood Work Panel - Q3', meta: '2h ago', iconBg: 'bg-blue-500/10', iconColor: 'text-blue-500' },
      { title: 'Prescription', subtitle: 'Lisinopril 10mg Refill', meta: 'Yesterday', iconBg: 'bg-green-500/10', iconColor: 'text-green-500' },
      { title: 'MRI Scan', subtitle: 'Radiology Dept - Knee', meta: '2d ago', iconBg: 'bg-purple-500/10', iconColor: 'text-purple-500' },
    ]
  },
  {
    id: 'agents',
    label: 'AI Agents',
    icon: <ChipIcon />,
    heading: 'Long-term memory for Agents',
    description: 'Give your AI agents a persistent brain. Enable them to recall past interactions, user preferences, and tool outputs across unlimited sessions.',
    cardTitle: 'Agent Memory Log',
    items: [
      { title: 'User Preference', subtitle: 'Prefers dark mode, Python', meta: 'Updated', iconBg: 'bg-yellow-500/10', iconColor: 'text-yellow-500' },
      { title: 'Task History', subtitle: 'Completed: Data migration', meta: '10m ago', iconBg: 'bg-green-500/10', iconColor: 'text-green-500' },
      { title: 'Tool Context', subtitle: 'AWS CLI configuration', meta: 'Stored', iconBg: 'bg-orange-500/10', iconColor: 'text-orange-500' },
      { title: 'Goal Tracking', subtitle: 'Objective: Optimize DB', meta: 'Active', iconBg: 'bg-blue-500/10', iconColor: 'text-blue-500' },
    ]
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: <BankIcon />,
    heading: 'Market analysis at speed',
    description: 'Synthesize thousands of financial reports, earnings calls, and news articles to spot trends and risks before the market moves.',
    cardTitle: 'Financial Data',
    items: [
      { title: 'Q3 Earnings', subtitle: 'Tech Sector Analysis', meta: 'Processing', iconBg: 'bg-emerald-500/10', iconColor: 'text-emerald-500' },
      { title: 'Market Trends', subtitle: 'Crypto Volatility Report', meta: 'Indexed', iconBg: 'bg-indigo-500/10', iconColor: 'text-indigo-500' },
      { title: 'Risk Assess', subtitle: 'Portfolio #2291 Audit', meta: 'Complete', iconBg: 'bg-rose-500/10', iconColor: 'text-rose-500' },
      { title: 'Compliance', subtitle: 'SEC Filing 10-K', meta: 'Review', iconBg: 'bg-slate-500/10', iconColor: 'text-slate-500' },
    ]
  },
  {
    id: 'legal',
    label: 'Legal',
    icon: <ScaleIcon />,
    heading: 'Precision case research',
    description: 'Navigate complex case law and contracts with semantic search. Find relevant precedents and clauses with 100% accuracy and citation.',
    cardTitle: 'Case Files',
    items: [
      { title: 'Precedent #44', subtitle: 'Smith v. State of NY', meta: '98% match', iconBg: 'bg-amber-500/10', iconColor: 'text-amber-500' },
      { title: 'Contract Review', subtitle: 'NDA Clause 4.2', meta: 'Flagged', iconBg: 'bg-red-500/10', iconColor: 'text-red-500' },
      { title: 'Discovery', subtitle: 'Email Archive 2023', meta: 'Indexed', iconBg: 'bg-blue-500/10', iconColor: 'text-blue-500' },
      { title: 'Brief Draft', subtitle: 'Motion to Dismiss', meta: 'Drafting', iconBg: 'bg-gray-500/10', iconColor: 'text-gray-400' },
    ]
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: <CartIcon />,
    heading: 'Personalized shopping',
    description: 'Transform search into conversation. Let customers ask complex questions about products and get accurate recommendations based on your full catalog.',
    cardTitle: 'Product Catalog',
    items: [
      { title: 'Sneakers', subtitle: 'Air Jordan 1 High', meta: 'In Stock', iconBg: 'bg-orange-500/10', iconColor: 'text-orange-500' },
      { title: 'Customer Q', subtitle: '"Good for running?"', meta: 'Answered', iconBg: 'bg-cyan-500/10', iconColor: 'text-cyan-500' },
      { title: 'Recommendation', subtitle: 'Matched: Running Socks', meta: 'Upsell', iconBg: 'bg-green-500/10', iconColor: 'text-green-500' },
      { title: 'Support', subtitle: 'Return Policy Query', meta: 'Resolved', iconBg: 'bg-purple-500/10', iconColor: 'text-purple-500' },
    ]
  },
  {
    id: 'education',
    label: 'Education',
    icon: <AcademicIcon />,
    heading: 'Smart tutor assistant',
    description: 'Turn textbooks and course materials into an interactive tutor. Students can ask questions and get answers cited directly from the curriculum.',
    cardTitle: 'Course Material',
    items: [
      { title: 'Physics 101', subtitle: 'Chapter 4: Thermodynamics', meta: 'Active', iconBg: 'bg-violet-500/10', iconColor: 'text-violet-500' },
      { title: 'Student Query', subtitle: '"Explain Entropy"', meta: 'Processing', iconBg: 'bg-pink-500/10', iconColor: 'text-pink-500' },
      { title: 'Quiz Gen', subtitle: 'Week 4 Assessment', meta: 'Ready', iconBg: 'bg-teal-500/10', iconColor: 'text-teal-500' },
      { title: 'Gradebook', subtitle: 'Midterm Results', meta: 'Synced', iconBg: 'bg-blue-500/10', iconColor: 'text-blue-500' },
    ]
  },
];

export const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);
  const activeData = INDUSTRIES.find(i => i.id === activeTab) || INDUSTRIES[0];

  return (
    <div className="w-full py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Navigation Tabs */}
        <div className="mb-16 flex w-full justify-center overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center gap-2 rounded-full border border-[#30363d] bg-[#0d1117] p-1.5 shadow-lg">
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === industry.id
                    ? 'bg-[#21262d] text-white shadow-md ring-1 ring-white/10'
                    : 'text-neutral-400 hover:text-white hover:bg-[#161b22]'
                }`}
              >
                {industry.icon}
                <span className="whitespace-nowrap">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="flex flex-col items-start opacity-0 animate-fade-in" key={`${activeTab}-text`}>
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#30363d] bg-[#161b22] px-3 py-1 text-xs font-medium text-[#CCF045]">
              {activeData.icon}
              {activeData.label}
            </div>
            
            <h2 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
              {activeData.heading}
            </h2>
            
            <p className="mb-10 text-lg leading-relaxed text-neutral-400">
              {activeData.description}
            </p>
            
            <button className="group flex items-center gap-2 rounded-full border border-[#30363d] bg-transparent px-6 py-3 text-sm font-bold text-white transition-all hover:border-neutral-500 hover:bg-[#21262d]">
              Learn more
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </button>
          </div>

          {/* Right: Visual Card */}
          <div className="relative w-full opacity-0 animate-fade-in" key={`${activeTab}-visual`} style={{ animationDelay: '0.1s' }}>
            
            {/* The Glass Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22] shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#30363d] bg-[#0d1117]/50 px-6 py-5 backdrop-blur-sm">
                <span className="text-sm font-semibold text-neutral-300">
                  {activeData.cardTitle}
                </span>
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                </div>
              </div>

              {/* Card Body (List Items) */}
              <div className="flex flex-col p-4">
                {activeData.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-[#21262d]"
                  >
                    <div className="flex items-center gap-4">
                      {/* Item Icon */}
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}>
                        <div className="h-2 w-2 rounded-full bg-current" />
                      </div>
                      
                      {/* Item Text */}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Meta / Action */}
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium text-neutral-500">
                        {item.meta}
                      </span>
                      <div className="text-neutral-600 group-hover:text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <path d="M22 6l-10 7L2 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Fade Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#161b22] to-transparent pointer-events-none" />
            </div>

            {/* Background Glow Effect */}
            <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 blur-3xl opacity-50" />
          </div>

        </div>
      </div>
    </div>
  );
};
