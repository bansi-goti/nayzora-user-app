import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  gold?: boolean;
}

export default function Heading({ children, level = 2, className = '', gold = false }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  
  const sizeClasses = {
    1: 'text-4xl md:text-6xl tracking-wide',
    2: 'text-3xl md:text-5xl tracking-wide',
    3: 'text-2xl md:text-3xl tracking-wide',
    4: 'text-xl md:text-2xl tracking-wider',
  };

  return (
    <Tag className={`font-serif font-normal ${sizeClasses[level]} ${gold ? 'text-gold' : 'text-white'} ${className}`}>
      {children}
    </Tag>
  );
}
