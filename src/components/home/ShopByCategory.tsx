'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';
import PillTrace from '../PillTrace';
import styles from './ShopByCategory.module.css';

const CATEGORIES = [
  {
    name: 'RINGS',
    image: '/categories/ring.png',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(-4, 0)">
          <circle cx="28" cy="38" r="14" />
          <path d="M22 24h12l-2-6h-8z" />
          <path d="M20 24h16" />
        </g>
        <g transform="translate(14, -6) rotate(20, 28, 38)">
          <circle cx="28" cy="38" r="14" />
          <path d="M22 24h12l-2-6h-8z" />
          <path d="M20 24h16" />
        </g>
      </svg>
    )
  },
  {
    name: 'BRACELETS',
    image: '/categories/bracelet.png',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M26 16 A 18 18 0 1 0 38 16" />
        <circle cx="26" cy="16" r="4" />
        <circle cx="38" cy="16" r="4" />
        <path d="M12 32l4-2 M52 32l-4-2 M32 50l0-4 M20 46l3-3 M44 46l-3-3 M16 22l4 2 M48 22l-4 2" />
      </svg>
    )
  },
  {
    name: 'NECKLACES',
    image: '/categories/necklace.png',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 20 Q 32 64 48 20" strokeDasharray="4 6" strokeWidth="6" strokeLinecap="round" />
        <circle cx="32" cy="45" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'PENDANTS',
    image: '/categories/pendant.png',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 16 C 16 32 16 52 32 56 C 48 52 48 32 32 16 Z" />
        <path d="M32 16 V 56 M 22 36 H 42 M 25 25 L 39 47 M 25 47 L 39 25" />
        <circle cx="32" cy="8" r="4" />
      </svg>
    )
  },
  {
    name: 'CUFFLINKS',
    image: '/categories/cufflinks.png',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="26" cy="30" r="10" />
        <path d="M22 28 A 2 2 0 0 1 26 26 A 2 2 0 0 1 30 28 Q 26 32 26 34 Q 22 32 22 28 Z" fill="currentColor" />
        <circle cx="44" cy="36" r="8" />
        <circle cx="44" cy="36" r="2" />
        <path d="M20 38 L 12 46 M 38 42 L 32 48" />
      </svg>
    )
  },
  {
    name: 'EARRINGS',
    image: '/categories/earrings.png',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 32 C 16 42 16 52 22 56 C 28 52 28 42 22 32 Z" />
        <path d="M42 32 C 36 42 36 52 42 56 C 48 52 48 42 42 32 Z" />
        <path d="M22 32 C 22 20 28 16 28 10" />
        <path d="M42 32 C 42 20 48 16 48 10" />
        <path d="M22 40 V 48 M 42 40 V 48" />
      </svg>
    )
  },
  {
    name: 'GEMSTONES',
    image: '/categories/gemstones.png',
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="32 12 12 28 32 56 52 28 32 12" />
        <polygon points="32 12 22 28 32 56 42 28 32 12" />
        <line x1="12" y1="28" x2="52" y2="28" />
        <line x1="22" y1="28" x2="28" y2="44" />
        <line x1="42" y1="28" x2="36" y2="44" />
      </svg>
    )
  }
];

export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles['category-section']}>
      <SectionTitle title="Shop by Category" subtitle="Discover our exquisite categories of luxury jewelry" />

      {/* Categories Slider */}
      <div className={styles['slider-container']}>
        <button 
          className={`${styles['nav-btn']} ${styles['btn-left']}`} 
          onClick={() => scroll('left')} 
          aria-label="Scroll Left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        <div className={styles['category-list']} ref={scrollRef}>
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className={styles['category-card']}>
              {/* Double Gold-Border Image Wrapper */}
              <div className={styles['image-frame-outer']}>
                <div className={styles['image-frame-inner']}>
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    width={180} 
                    height={160} 
                    className={styles['category-img']}
                    priority
                  />
                </div>
              </div>

              {/* Gold Outline Icon */}
              <div className={styles['category-icon']}>
                {cat.icon}
              </div>

              {/* Category Name */}
              <span className={styles['category-name']}>{cat.name}</span>

              {/* Diamond Ribbon Decor */}
              <div className={styles['category-diamond']}>
                <svg width="50" height="8" viewBox="0 0 50 8" fill="none">
                  <path d="M0 4h18M32 4h18" stroke="#dcb360" strokeWidth="1" strokeOpacity="0.4" />
                  <path d="M25 1L28 4L25 7L22 4L25 1Z" fill="#dcb360" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`${styles['nav-btn']} ${styles['btn-right']}`} 
          onClick={() => scroll('right')} 
          aria-label="Scroll Right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      {/* Value Proposition Features Banner */}
      <div className={styles['features-banner']}>
        <PillTrace borderRadius={16} />

        <div className={styles['feature-item']}>
          <div className={styles['feature-icon-circle']}>
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="32" cy="26" r="14" />
              <path d="M22 43 L16 60 L26 54 L32 60 L38 54 L48 60 L42 43" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32 18 l2 4.5 5 0.5 -3.5 3.5 1 5 -4.5 -2.5 -4.5 2.5 1 -5 -3.5 -3.5 5 -0.5 Z" fill="#dcb360" stroke="none" />
            </svg>
          </div>
          <div className={styles['feature-text']}>
            <h4>Certified Jewellery</h4>
            <p>100% HALLMARKED</p>
          </div>
        </div>

        <div className={styles['feature-divider']} />

        <div className={styles['feature-item']}>
          <div className={styles['feature-icon-circle']}>
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M32 6 L12 14 V30 C12 44 20 54 32 60 C44 54 52 44 52 30 V14 Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 28 l6 6 l10 -10" stroke="#dcb360" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles['feature-text']}>
            <h4>Secure Payments</h4>
            <p>100% PROTECTED</p>
          </div>
        </div>

        <div className={styles['feature-divider']} />

        <div className={styles['feature-item']}>
          <div className={styles['feature-icon-circle']}>
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="6" y="16" width="34" height="26" rx="2" />
              <path d="M40 26 H48 L56 32 V42 H40 Z" fill="none" strokeLinejoin="round" />
              <circle cx="16" cy="46" r="6" />
              <circle cx="48" cy="46" r="6" />
            </svg>
          </div>
          <div className={styles['feature-text']}>
            <h4>Free Shipping</h4>
            <p>ON ORDERS OVER $500</p>
          </div>
        </div>

        <div className={styles['feature-divider']} />

        <div className={styles['feature-item']}>
          <div className={styles['feature-icon-circle']}>
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M32 6 A 26 26 0 1 1 12 16" strokeLinecap="round" />
              <path d="M12 4 V16 H24" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32 24 L42 34 L32 44" stroke="#dcb360" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles['feature-text']}>
            <h4>Easy Returns</h4>
            <p>15-DAY RETURNS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
