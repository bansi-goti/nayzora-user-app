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

  return (
    <section className={styles['featured-section']}>
      {/* BEST SELLERS SUB-SECTION */}
      <div className={styles['subsection-wrapper']}>
        <SectionTitle title="Best Sellers" subtitle="Handpicked favorites loved by our customers" />

        {/* Best Sellers Grid */}
        <div className={styles['product-grid']}>
          {BEST_SELLERS.map((product) => (
            <div key={product.name} className={styles['product-card']}>
              {/* Glowing Line matching the border accent */}
              <div className={styles['card-glow-line']} />
              <div className={styles['img-container']}>

                <div className={styles['fav-btn']}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </div>
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  width={260} 
                  height={240} 
                  className={styles['product-img']}
                  loading="lazy"
                />
              </div>

              <div className={styles['card-content']}>
                <div className={styles['title-row']}>
                  <h3 className={`${styles['product-title']} font-serif`}>{product.name}</h3>
                  <div className={styles['title-heart-btn']}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                </div>
                
                <div className={styles['rating-row']}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#dcb360"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <span>{product.rating}</span>
                </div>

                <div className={styles['discount-tag']}>25% OFF</div>

                <div className={styles['price-cart-row']}>
                  <div className={styles['price-group']}>
                    <span className={styles['current-price']}>{product.price}</span>
                    <span className={styles['old-price']}>{product.oldPrice}</span>
                  </div>
                  <button className={styles['cart-btn-circle']}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#010a07" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="2"></circle>
                      <circle cx="20" cy="21" r="2"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
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

              <div className={styles['trending-fav']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <Image 
                src={item.img} 
                alt={item.name} 
                width={240} 
                height={220} 
                className={styles['trending-card-img']}
                loading="lazy"
              />
              <div className={styles['trending-card-content']}>
                <h3 className={`${styles['trending-card-title']} font-serif`}>{item.name}</h3>
                <div className={styles['trending-prices']}>
                  <span className={styles['trending-price']}>{item.price}</span>
                  <span className={styles['trending-old-price']}>{item.oldPrice}</span>
                </div>
                <div className={styles['trending-bottom']}>
                  <div className={styles['trending-rating']}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#dcb360" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <span>{item.rating.split(' ')[0]}</span>
                  </div>
                  <button className={styles['trending-add-btn']}>
                    Add
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Designs Centered Button */}
        <div className="flex justify-center mt-10">
          <a href="#" className={`${styles['view-all-link']} border border-[#dcb360]/40 px-6 py-3 rounded-full hover:bg-[#dcb360]/10 transition-all duration-300`}>
            View All Designs
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
