import Link from 'next/link';
import PillTrace from '../PillTrace';
import styles from './Header.module.css';
import HeaderBottomBar from './HeaderBottomBar';

export default function Header() {
  return (
    <div className={styles['header-wrapper']}>
      {/* Top Bar */}
      <header className={styles['header-top-bar']}>
        <PillTrace borderRadius={14} />

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
                <svg width="90" height="10" viewBox="0 0 90 10" fill="none">
                  <path d="M 5,5 H 36 C 38,2 41,2 43,5 H 47 C 49,2 51,2 54,5 H 85" stroke="#dcb360" strokeWidth="1.2" />
                  <circle cx="45" cy="5" r="2" fill="#dcb360" />
                  <circle cx="5" cy="5" r="1.5" fill="#dcb360" />
                  <circle cx="85" cy="5" r="1.5" fill="#dcb360" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Middle: Navigation */}
        <nav className={styles['header-nav']}>
          <Link href="/" className={`${styles['nav-item']} ${styles['active']}`}>
            <div className={styles['nav-pill']}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              <span>Home</span>
            </div>
            {/* Symmetrical Triple Accent Line Setup */}
            <div className={styles['nav-indicator']}>
              <span className={styles['indicator-short']}></span>
              <span className={styles['indicator-long']}></span>
              <span className={styles['indicator-short']}></span>
            </div>
          </Link>
          <Link href="/categories" className={styles['nav-item']}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
            <span>Categories</span>
          </Link>
          <Link href="/products" className={styles['nav-item']}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            <span>Products</span>
          </Link>
          <Link href="/order" className={styles['nav-item']}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
            <span>My Order</span>
          </Link>
          <Link href="/contact" className={styles['nav-item']}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <span>Contact</span>
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className={styles['header-actions']}>
          <button className={styles['currency-btn']}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            <span>USD</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
          </button>

          <div className={styles['icon-group']}>
            <button className={styles['icon-circle']} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </button>
            <button className={styles['icon-circle']} aria-label="Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              <span className={styles['icon-badge']}>2</span>
            </button>
            <button className={styles['icon-circle']} aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
              <span className={styles['icon-badge']}>5</span>
            </button>
            <button className={styles['icon-circle']} aria-label="Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </button>
          </div>
        </div>
      </header>

      <HeaderBottomBar />
    </div>
  );
}
