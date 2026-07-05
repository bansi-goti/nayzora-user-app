'use client';

import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    name: 'ELIZABETH SMITH',
    role: 'New York, USA',
    text: '"The craftsmanship of the Classic Diamond Necklace is absolutely breathtaking. It feels like wearing a piece of history. The service was impeccable!"',
    rating: 5,
  },
  {
    name: 'VICTORIA BENNETT',
    role: 'London, UK',
    text: '"Nayzora has redefined luxury for me. The customization options allowed me to design the perfect ring for my anniversary. Truly a masterpiece."',
    rating: 5,
  },
  {
    name: 'SOPHIA CHEN',
    role: 'Paris, France',
    text: '"Every piece of jewellery I have purchased here is BIS hallmarked and shines with unrivaled brilliance. Their customer service is world-class."',
    rating: 5,
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles['testimonials-section']}>
      <SectionTitle title="Client Testimonials" />

      <div className={styles['carousel-wrapper']}>
        {REVIEWS.map((review, idx) => (
          <div
            key={idx}
            className={`${styles['review-card']} ${idx === active ? styles['active'] : ''}`}
          >
            {/* Gold Star Ratings */}
            <div className={styles['stars-row']}>
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#dcb360" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            {/* Review text */}
            <p className={`${styles['review-text']} font-serif`}>{review.text}</p>

            {/* Divider */}
            <div className={styles['card-divider']}>
              <span className={styles['divider-line']}></span>
              <span className={styles['divider-sparkle']}>✦</span>
              <span className={styles['divider-line']}></span>
            </div>

            {/* Author */}
            <h4 className={styles['author-name']}>{review.name}</h4>
            <span className={styles['author-role']}>{review.role}</span>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className={styles['dots-container']}>
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              className={`${styles['dot']} ${idx === active ? styles['active-dot'] : ''}`}
              onClick={() => setActive(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
