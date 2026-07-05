import React from 'react';

interface SectionSubtitleProps {
  text: string;
  className?: string;
}

export default function SectionSubtitle({ text, className = '' }: SectionSubtitleProps) {
  return (
    <p className={`font-sans text-sm md:text-base text-gray-300 tracking-wider text-center mt-2 ${className}`}>
      {text}
    </p>
  );
}
