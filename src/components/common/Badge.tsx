import React from 'react';

interface BadgeProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Badge({ text, icon, className = '' }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 bg-[#d4af37] text-[#010a07] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded shadow-md ${className}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="uppercase">{text}</span>
    </div>
  );
}
