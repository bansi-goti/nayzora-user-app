'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './PillTrace.module.css';

interface PillTraceProps {
  className?: string;
  borderRadius?: number;
}

export default function PillTrace({ className = '', borderRadius }: PillTraceProps) {
  const [pathD, setPathD] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) continue;
        const r = borderRadius !== undefined ? borderRadius : Math.min(height / 2, 50);
        
        // Exact pill shape path starting perfectly at the bottom center
        const d = `M ${width/2} ${height} 
                   L ${r} ${height} 
                   A ${r} ${r} 0 0 1 0 ${height - r} 
                   L 0 ${r} 
                   A ${r} ${r} 0 0 1 ${r} 0 
                   L ${width - r} 0 
                   A ${r} ${r} 0 0 1 ${width} ${r} 
                   L ${width} ${height - r} 
                   A ${r} ${r} 0 0 1 ${width - r} ${height} 
                   L ${width/2} ${height} Z`;
        setPathD(d);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [borderRadius]);

  return (
    <div className={`${styles.container} ${className}`} ref={containerRef}>
      <svg className={styles.svg} width="100%" height="100%">
        <defs>
          <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(220, 179, 96, 0)" />
            <stop offset="25%" stopColor="rgba(220, 179, 96, 0.4)" />
            <stop offset="45%" stopColor="#fbe09e" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#fbe09e" />
            <stop offset="75%" stopColor="rgba(220, 179, 96, 0.4)" />
            <stop offset="100%" stopColor="rgba(220, 179, 96, 0)" />
          </linearGradient>
        </defs>
        {pathD && <path d={pathD} pathLength="100" stroke="url(#trace-gradient)" />}
      </svg>
      <span className={styles.star}>✦</span>
    </div>
  );
}
