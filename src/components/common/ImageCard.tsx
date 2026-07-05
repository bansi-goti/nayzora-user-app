import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ImageCard({ 
  src, 
  alt, 
  width = 300, 
  height = 300, 
  className = '', 
  priority = false 
}: ImageCardProps) {
  return (
    <div className={`w-full aspect-square border border-gold/15 rounded-xl p-1 bg-black/30 group transition-all duration-300 hover:border-gold/45 ${className}`}>
      <div className="w-full h-full border border-gold/10 rounded-lg overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
