'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';
import styles from './FeaturedProducts.module.css';

const BEST_SELLERS = [
  { 
    name: 'Gold Diamond Ring', 
    price: '$15.59', 
    oldPrice: '$19.48', 
    img: '/arrival_1.png', 
    rating: '4.8 (50)', 
    likes: '128', 
    badge: 'BESTSELLER',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
      </svg>
    )
  },
  { 
    name: 'Pearl Chain', 
    price: '$10.79', 
    oldPrice: '$13.48', 
    img: '/arrival_2.png', 
    rating: '4.9 (25)', 
    likes: '96', 
    badge: 'BESTSELLER',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
      </svg>
    )
  },
  { 
    name: 'Silver Earrings', 
    price: '$7.19', 
    oldPrice: '$8.98', 
    img: '/arrival_3.png', 
    rating: '4.7 (21)', 
    likes: '76', 
    badge: 'TRENDING',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c0 0-5 6.5-5 11a5 5 0 0 0 10 0c0-4.5-5-11-5-11zm0 14.5a3.5 3.5 0 0 1-3.5-3.5c0-1.7 1.5-3.8 2.2-4.8.6 1.4 1.8 2.8 1.8 4.3 0 1.9-1.5 3.5-3.5 3.5z" />
      </svg>
    )
  },
  { 
    name: 'Rose Gold Bracelet', 
    price: '$9.59', 
    oldPrice: '$11.98', 
    img: '/arrival_4.png', 
    rating: '4.6 (12)', 
    likes: '64', 
    badge: 'NEW ARRIVAL',
    badgeIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
];

const TRENDING_DESIGNS = [
  { name: 'Radiant Solitaire Ring', price: '$899.00', oldPrice: '$1,199.00', rating: '4.8 (124)', badge: 'BESTSELLER', img: '/trending_1.png' },
  { name: 'Graceful Drop Earrings', price: '$749.00', oldPrice: '$999.00', rating: '4.9 (86)', badge: 'NEW ARRIVAL', img: '/trending_2.png' },
  { name: 'Classic Gold Chain', price: '$619.00', oldPrice: '$799.00', rating: '4.7 (58)', img: '/trending_3.png' },
  { name: 'Elegant Diamond Bracelet', price: '$1,349.00', oldPrice: '$1,799.00', rating: '4.9 (102)', img: '/trending_4.png' },
  { name: 'Royal Gemstone Ring', price: '$1,199.00', oldPrice: '$1,599.00', rating: '4.8 (74)', img: '/trending_5.png' }
];

export default function FeaturedProducts() {
  const [bsIndex, setBsIndex] = useState(0);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const toggleLike = (productName: string) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productName)) {
        newSet.delete(productName);
      } else {
        newSet.add(productName);
      }
      return newSet;
    });
  };

  return (
    <section className={styles['featured-section']}>
      {/* BEST SELLERS SUB-SECTION */}
      <div className={styles['subsection-wrapper']}>
        <SectionTitle title="Best Sellers" subtitle="Handpicked favorites loved by our customers" />

        {/* Best Sellers Grid */}
        <div className={styles['product-grid']}>
          {BEST_SELLERS.map((product) => (
            <div key={product.name} className={styles['product-card']}>
              <div className={styles['img-container']}>
                {/* Top Left Badge */}
                <div className={styles['top-badge']}>
                  {product.badgeIcon}
                  <span>{product.badge}</span>
                </div>
                
                {/* Top Right Heart */}
                <div 
                  className={`${styles['fav-btn']} ${likedProducts.has(product.name) ? styles['fav-btn-active'] : ''}`}
                  onClick={() => toggleLike(product.name)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={likedProducts.has(product.name) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </div>

                <Image 
                  src={product.img} 
                  alt={product.name} 
                  width={260} 
                  height={240} 
                  className={styles['product-img']}
                  loading="lazy"
                />

                {/* SVG Overlay for bottom wave */}
                <div className={styles['img-wave-overlay']}>
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none" width="100%" height="100%" style={{ display: 'block' }}>
                    <defs>
                      <linearGradient id={`wave-stroke-grad-${product.name.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#dcb360" stopOpacity="0.1" />
                        <stop offset="35%" stopColor="#dcb360" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#ffeaad" stopOpacity="1" />
                        <stop offset="65%" stopColor="#dcb360" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#dcb360" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient id={`wave-fill-grad-${product.name.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1a1408" />
                        <stop offset="100%" stopColor="#080808" />
                      </linearGradient>
                    </defs>
                    <path d="M0,5 C 25,5 35,35 50,35 C 65,35 75,16 100,16 L100,55 L0,55 Z" fill={`url(#wave-fill-grad-${product.name.replace(/\s+/g, '-')})`} />
                    <path d="M0,5 C 25,5 35,35 50,35 C 65,35 75,16 100,16" fill="none" stroke={`url(#wave-stroke-grad-${product.name.replace(/\s+/g, '-')})`} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className={styles['diamond-badge']}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#080808" />
                      <path d="M12 16l-4-5h8zM8 11l4-5 4 5" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className={styles['card-content']}>
                <div className={styles['discount-tag']}>25% OFF</div>

                <h3 className={`${styles['product-title']} font-serif`}>{product.name}</h3>
                
                <div className={styles['rating-likes-row']}>
                  <div className={styles['rating']}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#dcb360"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    <span>{product.rating}</span>
                  </div>
                  <div className={styles['divider']}>|</div>
                  <div className={styles['likes']}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    <span>{product.likes}</span>
                  </div>
                </div>

                <div className={styles['price-row']}>
                  <span className={styles['current-price']}>{product.price}</span>
                  <span className={styles['old-price']}>{product.oldPrice}</span>
                </div>

                {/* Split Add to Cart Button */}
                <div className={styles['add-to-cart-split']}>
                  <div className={styles['cart-icon-part']}>
                    <svg className={styles['cart-icon-bg-svg']} viewBox="0 0 70 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#efc464" />
                          <stop offset="60%" stopColor="#c58f27" />
                          <stop offset="100%" stopColor="#966113" />
                        </linearGradient>
                        <linearGradient id="gold-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
                          <stop offset="12%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                      </defs>
                      <path d="M0,0 H70 C45,0 45,40 30,40 H0 Z" fill="url(#gold-grad)" />
                      <path d="M0,0 H70 C45,0 45,40 30,40 H0 Z" fill="url(#gold-highlight)" />
                    </svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#010a07" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{position: 'relative', zIndex: 2}}><circle cx="9" cy="21" r="2"></circle><circle cx="20" cy="21" r="2"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </div>
                  <div className={styles['text-part']}>
                    Add to Cart
                  </div>
                  <div className={styles['plus-part']}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E5B54A" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING DESIGNS SUB-SECTION */}
      <div className={styles['subsection-wrapper']}>
        <SectionTitle title="Trending Designs" subtitle="Explore our most popular and sought-after jewelry designs" />

        {/* Trending Grid */}
        <div className={styles['trending-grid']}>
          {TRENDING_DESIGNS.map((item) => (
            <div key={item.name} className={styles['trending-card']}>

              <div 
                  className={`${styles['fav-btn']} ${likedProducts.has(item.name) ? styles['fav-btn-active'] : ''}`}
                  onClick={() => toggleLike(item.name)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={likedProducts.has(item.name) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <div className={styles['trending-img-wrapper']}>
                <div className={styles['trending-badge']}>NEW ARRIVAL</div>
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  width={300} 
                  height={260} 
                  className={styles['trending-card-img']}
                  loading="lazy"
                />
              </div>
              <div className={styles['trending-card-content']}>
                <h3 className={styles['trending-card-title']}>{item.name}</h3>
                
                <div className={styles['trending-bottom-row']}>
                  <div className={styles['trending-bottom-left']}>
                    <div className={styles['trending-prices']}>
                      <span className={styles['trending-price']}>{item.price}</span>
                      <span className={styles['trending-old-price']}>{item.oldPrice}</span>
                    </div>
                    <div className={styles['trending-rating']}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#eebc6a" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <button className={styles['trending-cart-btn']}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path><path d="M10 10h6"></path><path d="M10 13h6"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
