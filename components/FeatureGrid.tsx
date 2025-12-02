
import React from 'react';

// Heroicons Solid
const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
  </svg>
);

const CpuChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
  </svg>
);

const ArrowPathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
  </svg>
);

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
  </svg>
);

// Bullet Point Check Icon
const CheckIcon = () => (
  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#CCF045] text-black">
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, features }) => (
  <div className="flex h-full flex-col rounded-[1rem] border border-[#30363d] bg-[#161b22] p-8 shadow-sm transition-all hover:shadow-md hover:border-[#CCF045]/30">
    <div className="mb-6 text-[#CCF045]">
      {icon}
    </div>
    
    <h3 className="mb-8 text-2xl font-semibold leading-tight tracking-tight text-white lg:text-[1.35rem]">
      {title}
    </h3>
    
    <ul className="mt-auto space-y-4">
      {features.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-neutral-300 leading-snug">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const FeatureGrid: React.FC = () => {
  const cards = [
    {
      icon: <BoltIcon />,
      title: "Quick event creation",
      features: [
        "Add events fast",
        "Drag & drop scheduling",
        "Color-coded entries"
      ]
    },
    {
      icon: <CpuChipIcon />,
      title: "Smart recurring reminders",
      features: [
        "Flexible repeat options",
        "Custom end dates",
        "Helpful notifications"
      ]
    },
    {
      icon: <ArrowPathIcon />,
      title: "Cross-device syncing",
      features: [
        "Works on all devices",
        "Instant calendar sync",
        "Always up to date"
      ]
    },
    {
      icon: <UserGroupIcon />,
      title: "Team and calendar sharing",
      features: [
        "Share with anyone",
        "Set access levels",
        "Coordinate easily"
      ]
    }
  ];

  return (
    <div className="w-full pb-32 pt-24">
       <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
           Everything you need to succeed.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <FeatureCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};
