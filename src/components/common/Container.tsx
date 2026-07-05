import React from 'react';

export default function Container({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-6 md:px-8 box-border ${className}`}>
      {children}
    </div>
  );
}
