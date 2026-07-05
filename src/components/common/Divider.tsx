import React from 'react';

export default function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`}>
      <div className="w-[100px] h-[1px] bg-gradient-to-r from-transparent to-gold opacity-50" />
      <span className="mx-3 text-gold text-xs">♦</span>
      <div className="w-[100px] h-[1px] bg-gradient-to-l from-transparent to-gold opacity-50" />
    </div>
  );
}
