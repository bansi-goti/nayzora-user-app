import React from 'react';
import styles from './ShiningLine.module.css';

interface ShiningLineProps {
  position?: 'top' | 'bottom';
  flarePosition?: number; // percentage, e.g. 30 or 65
}

export default function ShiningLine({ position = 'top', flarePosition = 50 }: ShiningLineProps) {
  const positioningStyle = position === 'top' ? { top: -3 } : { bottom: -3 };
  
  const backgroundImage = `
    radial-gradient(circle, #ffffff 0%, transparent 70%),
    radial-gradient(circle, #f3cf7d 0%, transparent 70%),
    linear-gradient(90deg, transparent 0%, rgba(220, 179, 96, 0.15) ${Math.max(0, flarePosition - 30)}%, #f3cf7d ${flarePosition}%, rgba(220, 179, 96, 0.15) ${Math.min(100, flarePosition + 30)}%, transparent 100%)
  `;

  const backgroundPosition = `
    ${flarePosition}% center,
    ${flarePosition}% center,
    center center
  `;

  return (
    <div 
      className={styles.shiningLine} 
      style={{
        ...positioningStyle,
        backgroundImage,
        backgroundPosition
      }}
    />
  );
}
