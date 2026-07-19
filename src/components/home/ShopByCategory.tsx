'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    image: '/categories/gemstones.png',
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
            <Link href={`/categories/${cat.name.toLowerCase()}`} key={cat.name} className={styles['category-card']} style={{ textDecoration: 'none' }}>
              {/* Corner Accents */}
              <img src="/card corner.png" alt="" className={`${styles['corner-ornament']} ${styles['corner-tl']}`} />
              <img src="/card corner.png" alt="" className={`${styles['corner-ornament']} ${styles['corner-tr']}`} />
              <img src="/card corner.png" alt="" className={`${styles['corner-ornament']} ${styles['corner-bl']}`} />
              <img src="/card corner.png" alt="" className={`${styles['corner-ornament']} ${styles['corner-br']}`} />

              {/* Image Area */}
              <div className={styles['card-image-wrapper']}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  priority
                  className={styles['category-img']}
                />
                <div className={styles['image-overlay']}></div>

                {/* Collection Tag Overlay */}
                <div className={styles['collection-tag']}>
                  <svg className={styles['tag-bg']} viewBox="0 0 120 24" fill="none" stroke="#C8A24A" strokeWidth="1">
                    <polygon points="10,1 110,1 119,12 110,23 10,23 1,12" fill="rgba(0,0,0,0.6)" />
                  </svg>
                  <span className={styles['tag-text']}>
                    <span className={styles['tag-star']}>✦</span>
                    COLLECTION
                    <span className={styles['tag-star']}>✦</span>
                  </span>
                </div>
              </div>

              {/* Separator */}
              <div className={styles['separator-line']}></div>

              {/* Bottom Info Section */}
              <div className={styles['card-footer']}>
                <div className={styles['icon-circle']}>
                  {cat.icon}
                </div>

                <div className={styles['text-container']}>
                  <h3 className={styles['category-title']}>{cat.name}</h3>
                  <p className={styles['category-subtitle']}>Timeless Beauty.<br />Naturally You</p>
                </div>

                <div className={styles['arrow-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>

              {/* Bottom Decor */}
              <div className={styles['bottom-decor']}>
                <div className={styles['decor-line']}></div>
                <div className={styles['decor-diamond']}></div>
                <div className={styles['decor-line']}></div>
              </div>
            </Link>
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
        {/* Glowing Line matching the border accent but centered/smaller */}
        <div className={styles['banner-glow-line']} />

        <div className={styles['feature-item']}>
          <div className={styles['feature-icon-circle']}>
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <path
                  key={i}
                  d="M 27 22 Q 32 8 32 4 Q 32 8 37 22"
                  transform={`rotate(${angle} 32 32)`}
                />
              ))}
              <circle cx="32" cy="32" r="12" />
              <circle cx="32" cy="34" r="3" />
              <path d="M32 27 V31" />
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
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Notched Shield */}
              <path d="M 32 8 C 38 10 44 12 48 16 C 40 24 40 34 48 42 C 40 50 32 58 32 58 C 32 58 24 50 16 42 C 24 34 24 24 16 16 C 20 12 26 10 32 8 Z" />
              {/* Center Target Dot */}
              <circle cx="32" cy="33" r="2" fill="currentColor" />
              {/* Broken Circle for Bullseye */}
              <path d="M 38 27 A 9 9 0 1 0 40 36" />
              {/* Dart/Arrow pointing top-right */}
              <path d="M 32 33 L 42 23" />
              <path d="M 36 23 H 42 V 29" />
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
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 12 22 C 12 20 14 18 16 18 H 36 C 38 18 40 20 40 22 V 44 H 12 Z" />
              <path d="M 40 26 H 46 C 48 26 50 28 52 32 L 54 36 V 44 H 40" />
              <path d="M 42 26 V 34 H 54" />
              <path d="M 18 28 L 26 24 L 30 28 L 22 32 Z" />
              <circle cx="22" cy="46" r="5" fill="#010a07" />
              <circle cx="44" cy="46" r="5" fill="#010a07" />
              <circle cx="22" cy="46" r="2" />
              <circle cx="44" cy="46" r="2" />
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
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 18 46 A 20 20 0 1 0 14 24" />
              <path d="M 24 18 L 14 24 L 20 32" />
              <circle cx="32" cy="32" r="8" />
              <circle cx="32" cy="32" r="3" fill="currentColor" />
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
