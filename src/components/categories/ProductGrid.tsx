'use client';

import React from 'react';
import CategoryProductCard from './CategoryProductCard';
import styles from './ProductGrid.module.css';

const PRODUCTS = [
  {
    name: 'Emerald Royale Ring',
    price: '$1,299.00',
    oldPrice: '$1,799.00',
    img: '/arrival_1.png', // Fallback to existing image
    rating: '4.9 (124)',
    badge: 'BESTSELLER',
    discount: '30% OFF',
  },
  {
    name: 'Verdant Grace Ring',
    price: '$899.00',
    oldPrice: '$1,199.00',
    img: '/trending_1.png',
    rating: '4.8 (86)',
    badge: 'TRENDING',
    discount: '25% OFF',
  },
  {
    name: 'Diamond Leaf Ring',
    price: '$1,049.00',
    oldPrice: '$1,499.00',
    img: '/arrival_2.png',
    rating: '4.9 (102)',
    discount: '30% OFF',
  },
  {
    name: 'Luxe Halo Ring',
    price: '$1,599.00',
    oldPrice: '$2,199.00',
    img: '/trending_2.png',
    rating: '4.9 (88)',
    badge: 'NEW',
    discount: '27% OFF',
  },
  {
    name: 'Royal Green Ring',
    price: '$1,199.00',
    oldPrice: '$1,599.00',
    img: '/arrival_3.png',
    rating: '4.8 (112)',
    badge: 'BESTSELLER',
    discount: '25% OFF',
  },
  {
    name: 'Golden Ivy Ring',
    price: '$699.00',
    oldPrice: '$999.00',
    img: '/trending_3.png',
    rating: '4.7 (76)',
    badge: 'NEW',
    discount: '30% OFF',
  },
  {
    name: 'Vintage Blossom Ring',
    price: '$1,450.00',
    oldPrice: '$1,800.00',
    img: '/arrival_4.png',
    rating: '4.9 (54)',
    discount: '15% OFF',
  },
  {
    name: 'Sapphire Tear Ring',
    price: '$950.00',
    oldPrice: '$1,300.00',
    img: '/trending_4.png',
    rating: '4.8 (92)',
    badge: 'TRENDING',
    discount: '20% OFF',
  },
];

export default function ProductGrid() {
  return (
    <div className={styles['product-grid-container']}>
      {/* Header Bar */}
      <div className={styles['grid-header']}>
        <div className={styles['product-count']}>Showing 1-12 of 86 products</div>
        <button className={styles['tablet-filter-btn']}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
          Filters
        </button>
        
        <div className={styles['grid-actions']}>
          <div className={styles['sort-container']}>
            <span>Sort by:</span>
            <select className={styles['sort-select']}>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          <div className={styles['view-toggles']}>
            <button className={`${styles['view-btn']} ${styles['view-btn-active']}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
            <button className={styles['view-btn']}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter & Sort (Visible only on mobile) */}
      <div className={styles['mobile-filter-sort']}>
        <button className={styles['mobile-action-btn']}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
          Filters
        </button>
        <button className={styles['mobile-action-btn']}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 15l5 5 5-5"></path><path d="M7 9l5-5 5 5"></path><line x1="12" y1="4" x2="12" y2="20"></line></svg>
          Sort
        </button>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {PRODUCTS.map((product) => (
          <CategoryProductCard key={product.name} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={`${styles['page-btn']} ${styles['page-btn-active']}`}>1</button>
        <button className={styles['page-btn']}>2</button>
        <button className={styles['page-btn']}>3</button>
        <span className={styles['page-ellipsis']}>...</span>
        <button className={styles['page-btn']}>8</button>
        <button className={styles['page-btn']}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"></path></svg>
        </button>
      </div>
    </div>
  );
}
