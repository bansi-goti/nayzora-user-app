'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CategoryProductCard.module.css';

interface CategoryProductCardProps {
  name: string;
  price: string;
  oldPrice: string;
  img: string;
  rating: string;
  badge?: string;
  discount?: string;
  likes?: string;
}

export default function CategoryProductCard({ name, price, oldPrice, img, rating, badge, discount, likes = '276' }: CategoryProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles['product-card']}>
      <div className={styles['img-container']}>
        {/* Top Left Badge */}
        {badge && (
          <div className={styles['top-badge']}>
            {badge}
          </div>
        )}
        
        {/* Top Right Heart */}
        <div 
          className={`${styles['fav-btn']} ${isLiked ? styles['fav-btn-active'] : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
        </div>

        <Image 
          src={img} 
          alt={name} 
          width={260} 
          height={200} 
          className={styles['product-img']}
          loading="lazy"
        />
      </div>

      <div className={styles['card-content']}>
        <h3 className={styles['product-title']}>{name}</h3>
        
        <div className={styles['rating-row']}>
          <div className={styles['rating-item']}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#dcb360" stroke="#dcb360" strokeWidth="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <span>{rating}</span>
          </div>
          <span className={styles['rating-divider']}>|</span>
          <div className={styles['rating-item']}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#dcb360" stroke="#dcb360" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <span>{likes}</span>
          </div>
        </div>

        <div className={styles['price-row']}>
          <div className={styles['price-container']}>
            <span className={styles['current-price']}>{price}</span>
            <span className={styles['old-price']}>{oldPrice}</span>
          </div>
          {discount && <div className={styles['discount-badge']}>{discount}</div>}
        </div>

        <button className={styles['add-to-cart-btn']}>
          <div className={styles['btn-center-content']}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a1408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="7" width="16" height="14" rx="3"></rect>
              <path d="M8 7V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"></path>
            </svg>
            <span>Add to Cart</span>
          </div>
          <div className={styles['btn-right-icon']}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1408" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </button>
      </div>
    </div>
  );
}
