import React from 'react';

export const SetrexLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-lime-450"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0L24 0V12H12V0ZM0 12L12 12V24H0V12ZM12 12L24 12V24H12V12Z"
          fill="currentColor"
        />
        <rect x="0" y="0" width="10" height="10" fill="currentColor" />
      </svg>
      <span className="text-xl font-bold text-white tracking-tight">Setrex.</span>
    </div>
  );
};