import React from 'react';
import PillTrace from '../PillTrace';
import styles from './Header.module.css';

export default function HeaderBottomBar() {
  return (
    <div className={styles['header-bottom-bar']}>
      <PillTrace borderRadius={14} />
      <span className={styles['bottom-sparkle']}>✦</span>
      <div className={styles['bottom-items']}>
        <div className={styles['bottom-item']}>
          <div className={styles['bottom-icon']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3h8l6 7-10 11L2 10Z" />
              <path d="M2 10h20" />
              <path d="M12 3v18" />
              <path d="M8 3l4 7" />
              <path d="M16 3l-4 7" />
              <path d="M8 10l4 11" />
              <path d="M16 10l-4 11" />
            </svg>
          </div>
          <span>BIS Hallmarked Gold</span>
        </div>
        <div className={styles['bottom-divider']}></div>
        <div className={styles['bottom-item']}>
          <div className={styles['bottom-icon']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="2 19 22 19 20 7 16 12 12 4 8 12 4 7 2 19" />
              <line x1="4" y1="22" x2="20" y2="22" />
            </svg>
          </div>
          <span>Luxury You Can Feel</span>
        </div>
        <div className={styles['bottom-divider']}></div>
        <div className={styles['bottom-item']}>
          <div className={styles['bottom-icon']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2c.2 4.6 4.4 8.8 9 9-4.6.2-8.8 4.4-9 9-.2-4.6-4.4-8.8-9-9 4.6-.2 8.8-4.4 9-9Z" />
              <path d="M20.5 4c.1 1.8 1.7 3.4 3.5 3.5-1.8.1-3.4 1.7-3.5 3.5-.1-1.8-1.7-3.4-3.5-3.5 1.8-.1 3.4-1.7 3.5-3.5Z" />
              <path d="M21 16c.1 1.3 1.2 2.4 2.5 2.5-1.3.1-2.4 1.2-2.5 2.5-.1-1.3-1.2-2.4-2.5-2.5 1.3-.1 2.4-1.2 2.5-2.5Z" />
            </svg>
          </div>
          <span>Elegance That Lasts Forever</span>
        </div>
        <div className={styles['bottom-divider']}></div>
        <div className={styles['bottom-item']}>
          <div className={styles['bottom-icon']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3h8l6 7-10 11L2 10Z" />
              <path d="M2 10h20" />
              <path d="M12 3v18" />
              <path d="M8 3l4 7" />
              <path d="M16 3l-4 7" />
              <path d="M8 10l4 11" />
              <path d="M16 10l-4 11" />
            </svg>
          </div>
          <span>Nayzora Jewellery Collection</span>
        </div>
        <div className={styles['bottom-divider']}></div>
        <div className={styles['bottom-item']}>
          <div className={styles['bottom-icon']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1.5" fill="#dcb360" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            </svg>
          </div>
          <span>Crafted in Pure Perfection</span>
        </div>
      </div>
      <span className={styles['bottom-sparkle']}>✦</span>
    </div>
  );
}
