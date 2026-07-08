"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PillTrace from '../PillTrace';
import styles from './Header.module.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear the timeout indicating scroll has stopped
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Hide if scrolling down and past the header, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;

      // When user stops scrolling for 150ms, show the header again
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={`${styles['header-wrapper']} ${!isVisible ? styles['header-hidden'] : ''}`}>
      {/* Top Bar */}
      <header className={styles['header-top-bar']}>
        <div className={styles['flare-bottom']}></div>
        <PillTrace borderRadius={20} />

        {/* Left: Logo (Restored to Original Asset Line Setup) */}
        <div className={styles['header-logo-section']}>
          <Link href="/" className={styles['logo-link']}>
            <div className={styles['logo-container']}>
              <img src="/logo.jpg" alt="Nayzora Logo" className={styles['logo-image']} />
            </div>
            <div className={styles['logo-text-group']}>
              <span className={`${styles['logo-title']} ${styles['font-serif']}`}>NAYZORA</span>
              <span className={styles['logo-subtitle']}>JEWELLERY</span>
              <div className={styles['logo-ornament']}>
                <svg width="70" height="9" viewBox="0 0 70 9" fill="none">
                  <path d="M 4,4.5 H 32 L 35,2 L 38,4.5 H 66" stroke="#E5C56A" strokeWidth="1" />
                  <path d="M 35,2 L 38,4.5 L 35,7 L 32,4.5 Z" fill="#E5C56A" />
                  <circle cx="4" cy="4.5" r="1" fill="#E5C56A" />
                  <circle cx="66" cy="4.5" r="1" fill="#E5C56A" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Middle: Navigation */}
        <nav className={styles['header-nav']}>
          <Link href="/" className={`${styles['nav-item']} ${styles['active']}`}>
            <div className={styles['nav-pill']}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              <span>Home</span>
              <div className={styles['nav-pill-highlight']}></div>
            </div>
            <div className={styles['nav-indicator']}>
              <span className={styles['indicator-line']}></span>
              <span className={styles['indicator-dot']}></span>
              <span className={styles['indicator-line']}></span>
            </div>
          </Link>
          <Link href="/categories" className={styles['nav-item']}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
            <span>Categories</span>
          </Link>
          <Link href="/products" className={styles['nav-item']}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            <span>Products</span>
          </Link>
          <Link href="/order" className={styles['nav-item']}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
            <span>My Order</span>
          </Link>
          <Link href="/contact" className={styles['nav-item']}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <span>Contact</span>
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className={styles['header-actions']}>
          <button className={styles['currency-btn']} aria-label="Select Currency">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>USD</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <div className={styles['icon-group']}>
            <button className={styles['icon-circle']} aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button className={styles['icon-circle']} aria-label="Wishlist">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className={styles['icon-badge']}>2</span>
            </button>
            <button className={styles['icon-circle']} aria-label="Cart">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className={styles['icon-badge']}>5</span>
            </button>
            <button className={styles['icon-circle']} aria-label="Profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
