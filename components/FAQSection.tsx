
import React, { useState } from 'react';

// Heroicon: ArrowLongRight
const ArrowLongRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`overflow-hidden rounded-[1rem] border border-[#30363d] bg-[#161b22] transition-colors hover:border-[#30363d]/80 ${isOpen ? 'bg-[#1c2128]' : ''}`}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-6 text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-white pr-8">
          {question}
        </span>
        <span 
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center text-2xl font-light text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 text-base leading-relaxed text-neutral-400">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I install the snippet and get set up?",
      answer: "Installing is as simple as copying a single line of code into your website's header. Our setup wizard will guide you through connecting your data sources, and you'll be live in under 5 minutes."
    },
    {
      question: "How are overages calculated and charged?",
      answer: "Overages are calculated based on the number of extra API calls or data points processed beyond your plan limit. You'll be notified when you reach 80% and 100% of your usage, and overages are billed at a flat rate per 1,000 units at the end of the billing cycle."
    },
    {
      question: "Do you include any \"Powered by\" branding?",
      answer: "No. All paid plans are completely white-labeled. The \"Powered by\" branding is only displayed on the Free tier. You can customize the look and feel to match your brand identity perfectly."
    },
    {
      question: "Will I have to pay separately for multiple sites?",
      answer: "It depends on your plan. The Pro plan covers up to 3 distinct domains/sites. For more than 3 sites, or for agency usage managing multiple client accounts, please contact our sales team for an Enterprise license."
    },
    {
      question: "What's the uptime for Rayrift AI?",
      answer: "We maintain a 99.99% uptime SLA for all Enterprise customers and strive for the same reliability across all plans. Our status page provides real-time updates on system performance and maintenance schedules."
    }
  ];

  return (
    <div className="w-full py-24 lg:py-32 border-t border-[#30363d]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        
        {/* Left Header Column - Sticky */}
        <div className="h-fit lg:sticky lg:top-24">
          
          {/* Label */}
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-neutral-400">
             <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16825D] text-white text-[10px] font-bold">
               ?
             </div>
             FAQs
          </div>

          <h2 className="mb-8 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Frequently <br />
            asked questions
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <button className="flex items-center gap-2 rounded-[0.5rem] bg-[#0E775F] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0c6b54]">
              Start Free Trial <ArrowLongRight />
            </button>
            <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#0E775F] hover:text-white transition-colors">
              Contact Us <ArrowLongRight />
            </a>
          </div>
        </div>

        {/* Right Accordion Column - Boxed Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
