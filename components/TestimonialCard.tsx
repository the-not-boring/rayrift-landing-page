import React from 'react';
import { Badge } from './Badge';
import { SetrexLogo } from './SetrexLogo';

export const TestimonialCard: React.FC = () => {
  return (
    <div className="card-gradient relative flex h-full flex-col justify-between rounded-[1rem] border border-[#30363d] p-8 md:p-12 lg:p-14">
     

      <div className="relative z-10">
        <div className="mb-10">
          <Badge className="bg-[#E7FBB3]">CEO's Words</Badge>
        </div>
        
        <blockquote className="max-w-2xl text-2xl font-medium leading-[1.3] tracking-tight text-neutral-100 md:text-3xl lg:text-[2rem]">
          "Working with you was seamless from start to finish. The final design exceeded our expectations. Your attention to detail and ability to adaptable was outstanding throughout the entire process to the world."
        </blockquote>
      </div>

      <div className="relative z-10 mt-12 flex items-end justify-between">
        <div>
          <div className="text-xl font-bold text-white">Timofey Gr</div>
          <div className="text-sm font-medium text-neutral-400 mt-1">Co Founder of Metrilo</div>
        </div>
        <div>
          <SetrexLogo />
        </div>
      </div>
    </div>
  );
};