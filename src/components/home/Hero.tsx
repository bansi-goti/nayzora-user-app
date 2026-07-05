'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const SLIDES = [
  {
    tag: "PURELY HAND-CRAFTED",
    title: "TIMELESS ELEGANCE",
    subtitle: "Premium Collection",
    desc: "Experience luxury with our handcrafted jewelry pieces.\nEach piece is a masterpiece of artistry."
  },
  {
    tag: "EXQUISITE CRAFTSMANSHIP",
    title: "ROYAL SPLENDOR",
    subtitle: "Elite Masterpieces",
    desc: "Indulge in the finest collections designed for royalty.\nCrafted to make every moment unforgettable."
  },
  {
    tag: "TEMPTING BEAUTY",
    title: "GOLDEN HERITAGE",
    subtitle: "Signature Creations",
    desc: "Discover our heritage of pure gold and gemstone settings.\nThe ultimate expression of luxury."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles['hero']}>
      {/* Slides Background */}
      <div className={styles['slides-container']}>
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`${styles['slide-bg']} ${idx === current ? styles['active'] : ''}`}
            style={{ backgroundImage: `url('/hero.png')` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className={styles['hero-overlay']} />

      {/* Slide Content */}
      <div className={styles['hero-content']}>
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`${styles['slide-content-item']} ${idx === current ? styles['active-content'] : ''}`}
          >
            <span className={styles['hero-tag']}>{slide.tag}</span>
            <h1 className={`${styles['hero-title']} ${styles['font-serif']}`}>{slide.title}</h1>
            <div className={styles['hero-subtitle']}>
              <span className={styles['subtitle-line']}></span>
              <span className={styles['subtitle-diamond']}>♦</span>
              <span className={`${styles['subtitle-text']} ${styles['font-serif']}`}>{slide.subtitle}</span>
              <span className={styles['subtitle-diamond']}>♦</span>
              <span className={styles['subtitle-line']}></span>
            </div>
            <p className={styles['hero-desc']}>
              {slide.desc.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < slide.desc.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <button className={styles['btn-primary']}>
              Explore Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button className={`${styles['slider-arrow']} ${styles['arrow-left']}`} onClick={prevSlide} aria-label="Previous Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button className={`${styles['slider-arrow']} ${styles['arrow-right']}`} onClick={nextSlide} aria-label="Next Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
      </button>

      {/* Slider Indicators (Dots) */}
      <div className={styles['slider-dots']}>
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`${styles['slider-dot']} ${idx === current ? styles['active-dot'] : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
