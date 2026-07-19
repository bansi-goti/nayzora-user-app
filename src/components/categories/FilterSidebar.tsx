'use client';

import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

const CATEGORIES = [
  { name: 'All Categories', count: null },
  { name: 'Rings', count: 86 },
  { name: 'Necklaces', count: 64 },
  { name: 'Pendants', count: 142 },
  { name: 'Earrings', count: 72 },
  { name: 'Bracelets', count: 34 },
  { name: 'Cufflinks', count: 18 },
];

const METALS = [
  { name: 'Yellow Gold', count: 42 },
  { name: 'White Gold', count: 28 },
  { name: 'Rose Gold', count: 16 },
  { name: 'Platinum', count: 10 },
];

export default function FilterSidebar() {
  const [activeCategory, setActiveCategory] = useState('Rings');
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  return (
    <aside className={styles.sidebar}>
      <div className={styles['sidebar-header']} onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isFiltersOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><path d="M6 9l6 6 6-6"></path></svg>
      </div>

      {isFiltersOpen && (
        <div className={styles['filters-container']}>
          <h3 className={styles['filters-title']}>FILTERS</h3>

          {/* Category Section */}
          <div className={styles['filter-section']}>
            <div className={styles['filter-section-title']}>
              CATEGORY
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"></path></svg>
            </div>
            <div className={styles['filter-list']}>
              {CATEGORIES.map((cat) => (
                <div 
                  key={cat.name} 
                  className={`${styles['filter-item']} ${activeCategory === cat.name ? styles['filter-item-active'] : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <div className={`${styles['filter-radio']} ${activeCategory === cat.name ? styles['filter-radio-active'] : ''}`}>
                    {activeCategory === cat.name && <div className={styles['filter-radio-inner']}></div>}
                  </div>
                  <span className={styles['filter-label']}>{cat.name}</span>
                  {cat.count && <span className={styles['filter-count']}>({cat.count})</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Section */}
          <div className={styles['filter-section']}>
            <div className={styles['filter-section-title']}>
              PRICE RANGE
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"></path></svg>
            </div>
            
            <div className={styles['price-range-slider']}>
              <div className={styles['price-range-progress']}></div>
              <div className={`${styles['price-range-thumb']} ${styles['thumb-left']}`}></div>
              <div className={`${styles['price-range-thumb']} ${styles['thumb-right']}`}></div>
            </div>
            
            <div className={styles['price-range-labels']}>
              <span>$200</span>
              <span>$25,000</span>
            </div>

            <div className={styles['price-inputs']}>
              <div className={styles['price-input-wrapper']}>
                <span className={styles['price-currency']}>$</span>
                <input type="text" className={styles['price-input']} defaultValue="200" />
              </div>
              <span className={styles['price-separator']}>-</span>
              <div className={styles['price-input-wrapper']}>
                <span className={styles['price-currency']}>$</span>
                <input type="text" className={styles['price-input']} defaultValue="25,000" />
              </div>
            </div>
          </div>

          {/* Metal Section */}
          <div className={styles['filter-section']}>
            <div className={styles['filter-section-title']}>
              METAL
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"></path></svg>
            </div>
            <div className={styles['filter-list']}>
              {METALS.map((metal) => (
                <div key={metal.name} className={styles['filter-item']}>
                  <div className={styles['filter-checkbox']}></div>
                  <span className={styles['filter-label']}>{metal.name}</span>
                  <span className={styles['filter-count']}>({metal.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gemstone (Collapsed) */}
          <div className={styles['filter-section']}>
            <div className={styles['filter-section-title']} style={{ color: '#a4b5aa' }}>
              GEMSTONE
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
            </div>
          </div>

          {/* Occasion (Collapsed) */}
          <div className={styles['filter-section']}>
            <div className={styles['filter-section-title']} style={{ color: '#a4b5aa' }}>
              OCCASION
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
            </div>
          </div>

          {/* Gender (Collapsed) */}
          <div className={styles['filter-section']}>
            <div className={styles['filter-section-title']} style={{ color: '#a4b5aa' }}>
              GENDER
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
            </div>
          </div>

          <button className={styles['clear-btn']}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
            Clear All Filters
          </button>
        </div>
      )}
    </aside>
  );
}
