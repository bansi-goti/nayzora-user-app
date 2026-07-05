import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <div className={`section-title-wrapper ${className}`}>
      <h2 className="section-title font-serif">{title}</h2>
      <div className="section-title-ornament">
        <svg width="250" height="15" viewBox="0 0 250 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.5h100M150 7.5h100" stroke="#dcb360" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M125 1L132 7.5L125 14L118 7.5L125 1Z" stroke="#dcb360" strokeWidth="1" />
          <circle cx="125" cy="7.5" r="2" fill="#dcb360" />
          <path d="M112 5 Q115 7.5 112 10" stroke="#dcb360" strokeWidth="1" fill="none" />
          <path d="M138 5 Q135 7.5 138 10" stroke="#dcb360" strokeWidth="1" fill="none" />
          <circle cx="106" cy="7.5" r="1.5" fill="#dcb360" />
          <circle cx="144" cy="7.5" r="1.5" fill="#dcb360" />
        </svg>
      </div>
    </div>
  );
}
