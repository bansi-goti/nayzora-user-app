import React from 'react';

interface IconCircleProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  style?: React.CSSProperties;
}

export default function IconCircle({
  children,
  size = 56,
  className = '',
  borderColor = 'linear-gradient(to top, rgba(220,179,96,0.25) 0%, rgba(220,179,96,0.5) 50%, #dcb360 100%)',
  bgColor = '#021108',
  textColor = '#dcb360',
  style = {},
}: IconCircleProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: borderColor,
        padding: '1px',
        flexShrink: 0,
        ...style,
      }}
    >
      <div 
        className="flex items-center justify-center w-full h-full rounded-full"
        style={{ background: bgColor, color: textColor }}
      >
        {children}
      </div>
    </div>
  );
}
