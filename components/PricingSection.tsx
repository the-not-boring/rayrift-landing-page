import React from 'react';

const CheckIcon = () => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED] text-white">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#30363d] text-neutral-500">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  isPro?: boolean;
  features: { name: string; included: boolean }[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, isPro = false, features }) => {
  return (
    <div className={`relative flex flex-col justify-between rounded-[1rem] border border-[#30363d] bg-[#161b22] p-8 transition-transform duration-300 hover:scale-[1.01] ${isPro ? 'shadow-2xl shadow-purple-900/10' : ''}`}>
      {/* Pro Glow Effect */}
      {isPro && (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7C3AED]/20 via-transparent to-transparent opacity-60 pointer-events-none rounded-[1rem]" />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-neutral-400">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold tracking-tight text-white">{price}</span>
            <span className="text-sm font-medium text-neutral-400">/ per month</span>
          </div>
        </div>

        {/* Button */}
        <button
          className={`w-full rounded-full py-3 px-6 text-sm font-bold transition-all duration-200 
            ${isPro 
              ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]' 
              : 'bg-transparent border border-[#30363d] text-white hover:bg-[#21262d] hover:border-neutral-600'
            }`}
        >
          Get Started
        </button>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-[#30363d]" />

        {/* Features */}
        <div className="flex-1">
          <h4 className="mb-6 text-base font-bold text-white">Features</h4>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {feature.included ? <CheckIcon /> : <CrossIcon />}
                <span className={`text-sm ${feature.included ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "Free Plan",
      description: "For small teams billed monthly",
      price: "$0",
      features: [
        { name: "Task management", included: true },
        { name: "Data encryption", included: true },
        { name: "Timeline", included: true },
        { name: "Deadline Alerts", included: false },
        { name: "Custom workflows", included: false },
        { name: "Real-Time Sync", included: false },
      ]
    },
    {
      title: "Pro Plan",
      description: "For growing startups billed monthly",
      price: "$25",
      isPro: true,
      features: [
        { name: "Task management", included: true },
        { name: "Data encryption", included: true },
        { name: "Timeline", included: true },
        { name: "Deadline Alerts", included: true },
        { name: "Custom workflows", included: false },
        { name: "Real-Time Sync", included: false },
      ]
    },
    {
      title: "Advanced Plan",
      description: "For large companies billed monthly",
      price: "$40",
      features: [
        { name: "Task management", included: true },
        { name: "Data encryption", included: true },
        { name: "Timeline", included: true },
        { name: "Deadline Alerts", included: true },
        { name: "Custom workflows", included: true },
        { name: "Real-Time Sync", included: true },
      ]
    }
  ];

  return (
    <div className="w-full py-20 lg:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl tracking-tight">
          Choose the best plan for your needs.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>
    </div>
  );
};
