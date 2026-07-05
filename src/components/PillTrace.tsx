'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './PillTrace.module.css';

export default function PillTrace({ className = '' }: { className?: string }) {
  const [pathD, setPathD] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) continue;
        const r = Math.min(height / 2, 50);
        
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
  }, []);

  return (
    <div className={`${styles.container} ${className}`} ref={containerRef}>
      <svg className={styles.svg} width="100%" height="100%">
        {pathD && <path d={pathD} pathLength="100" />}
      </svg>
      <span className={styles.star}>✦</span>
    </div>
  );
}
