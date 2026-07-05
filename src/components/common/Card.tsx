import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden bg-gradient-to-br from-[#02150e] to-[#000201] border border-gold/25 rounded-2xl p-6 transition-all duration-300 hover:border-gold hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
