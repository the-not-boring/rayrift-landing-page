import React from 'react';
import { Badge } from './Badge';

interface StatCardProps {
  value: string;
  badgeText: string;
  description: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, badgeText, description }) => {
  return (
    <div className="relative flex flex-col justify-between rounded-[1rem] border border-[#30363d] bg-[#161b22] p-8 md:p-10">
      <div className="flex w-full items-start justify-between">
        <span className="font-manrope text-6xl font-medium tracking-tighter text-white md:text-7xl">
          {value}
        </span>
        <Badge className="bg-[#CFEAD1] opacity-90">{badgeText}</Badge>
      </div>
      
      <p className="mt-12 max-w-sm text-base font-medium leading-relaxed text-neutral-300 md:text-lg">
        {description}
      </p>
    </div>
  );
};