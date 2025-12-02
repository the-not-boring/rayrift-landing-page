import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md bg-lime-150 px-3 py-1.5 text-xs font-bold text-black uppercase tracking-wide leading-none ${className}`}
    >
      {children}
    </span>
  );
};