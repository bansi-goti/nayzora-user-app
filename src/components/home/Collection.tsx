'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Collection.module.css';

export default function Collection() {
  return (
    <section className={styles['collection-section']}>
      {/* ---------- THE ROYAL PROMISE SUB-SECTION ---------- */}
      <div className={styles['rp-wrapper']}>
        <div className={styles['rp-banner']}>
          {/* Top Flourish */}
          <div className={styles['rp-banner-border-ornament']}>
            <svg viewBox="0 0 300 30" width="300" height="30">
              {/* Left Line */}
              <line x1="0" y1="15" x2="85" y2="15" stroke="#dcb360" strokeWidth="1.5" />
              
              {/* Left Small Loop */}
              <path d="M 85 15 C 90 5, 100 5, 100 15 C 100 25, 90 25, 85 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />
              
              {/* Left Eye */}
              <path d="M 100 15 Q 120 0 140 15 Q 120 30 100 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />
              <circle cx="120" cy="15" r="2.5" fill="#dcb360" />
              
              {/* Center Leaf */}
              <path d="M 150 2 C 160 10 160 15 160 15 C 160 15 160 20 150 28 C 140 20 140 15 140 15 C 140 15 140 10 150 2 Z" fill="none" stroke="#dcb360" strokeWidth="1.5" />
              <path d="M 150 7 L 153 15 L 150 23 L 147 15 Z" fill="#dcb360" />

              {/* Right Eye */}
              <path d="M 160 15 Q 180 0 200 15 Q 180 30 160 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />
              <circle cx="180" cy="15" r="2.5" fill="#dcb360" />

              {/* Right Small Loop */}
              <path d="M 200 15 C 200 5, 210 5, 215 15 C 210 25, 200 25, 200 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />

              {/* Right Line */}
              <line x1="215" y1="15" x2="300" y2="15" stroke="#dcb360" strokeWidth="1.5" />
            </svg>
          </div>

          <div className={styles['rp-content']}>
            <div className={styles['rp-crown']}>
              <svg viewBox="0 0 200 40" width="160" height="32">
                <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#dcb360" stopOpacity="0" />
                  <stop offset="100%" stopColor="#dcb360" stopOpacity="1" />
                </linearGradient>
                <line x1="10" y1="25" x2="75" y2="25" stroke="url(#fadeLeft)" strokeWidth="1" />
                
                <path d="M 75 25 Q 82 20 85 25 Q 82 30 75 25" fill="none" stroke="#dcb360" strokeWidth="1" />

                <path d="M 90 25 L 110 25 L 112 28 L 88 28 Z" fill="#dcb360" />
                <path d="M 90 23 L 85 12 L 93 18 L 100 8 L 107 18 L 115 12 L 110 23 Z" fill="none" stroke="#dcb360" strokeWidth="1.5" />
                <circle cx="85" cy="10" r="1.5" fill="#dcb360" />
                <circle cx="100" cy="6" r="1.5" fill="#dcb360" />
                <circle cx="115" cy="10" r="1.5" fill="#dcb360" />

                <path d="M 125 25 Q 118 20 115 25 Q 118 30 125 25" fill="none" stroke="#dcb360" strokeWidth="1" />

                <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#dcb360" stopOpacity="1" />
                  <stop offset="100%" stopColor="#dcb360" stopOpacity="0" />
                </linearGradient>
                <line x1="125" y1="25" x2="190" y2="25" stroke="url(#fadeRight)" strokeWidth="1" />
              </svg>
            </div>
            <div className={styles['rp-kicker']}>THE ROYAL PROMISE</div>
            <h2 className={`${styles['rp-heading']} font-serif`}>
              Enjoy all the benefits of<br /> The <span className={styles['text-primary']}>Royal Promise</span>
            </h2>
            <div className={styles['rp-heading-ornament']}>
              <svg viewBox="0 0 300 30" width="240" height="24">
                <linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#dcb360" stopOpacity="0" />
                  <stop offset="100%" stopColor="#dcb360" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="fadeR" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#dcb360" stopOpacity="1" />
                  <stop offset="100%" stopColor="#dcb360" stopOpacity="0" />
                </linearGradient>
                
                <line x1="0" y1="15" x2="85" y2="15" stroke="url(#fadeL)" strokeWidth="1.5" />
                
                <path d="M 85 15 C 90 5, 100 5, 100 15 C 100 25, 90 25, 85 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />
                <path d="M 100 15 Q 120 0 140 15 Q 120 30 100 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />
                <circle cx="120" cy="15" r="2.5" fill="#dcb360" />
                
                <path d="M 150 2 C 160 10 160 15 160 15 C 160 15 160 20 150 28 C 140 20 140 15 140 15 C 140 15 140 10 150 2 Z" fill="none" stroke="#dcb360" strokeWidth="1.5" />
                <path d="M 150 7 L 153 15 L 150 23 L 147 15 Z" fill="#dcb360" />

                <path d="M 160 15 Q 180 0 200 15 Q 180 30 160 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />
                <circle cx="180" cy="15" r="2.5" fill="#dcb360" />

                <path d="M 200 15 C 200 5, 210 5, 215 15 C 210 25, 200 25, 200 15" fill="none" stroke="#dcb360" strokeWidth="1.5" />

                <line x1="215" y1="15" x2="300" y2="15" stroke="url(#fadeR)" strokeWidth="1.5" />
              </svg>
            </div>
            <p className={styles['rp-desc']}>
              At Nayzora Jewellery, every piece comes with trust, quality, and a promise that lasts forever.
            </p>
          </div>

          {/* Optimized Next.js Image wrapper */}
          <div className={styles['rp-image-wrapper']}>
            <Image 
              src="/royal_promise_nayzora.png" 
              alt="The Royal Promise" 
              width={400} 
              height={450} 
              className={styles['rp-image']}
              loading="lazy"
            />
          </div>
        </div>

        {/* Promise Cards Grid */}
        <div className={styles['rp-features-grid']}>
          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="font-serif">Certificate</h3>
            <p>Get authentic BIS hallmarked jewellery backed with the trust of Royal Jewellers.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 15" width="60" height="10">
                <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="#dcb360" strokeWidth="1" />
                <polygon points="50,4 53,7.5 50,11 47,7.5" fill="#dcb360" />
              </svg>
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="font-serif">Customization Options</h3>
            <p>Buy jewellery that's customised and personalised to the smallest specifications.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 15" width="60" height="10">
                <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="#dcb360" strokeWidth="1" />
                <polygon points="50,4 53,7.5 50,11 47,7.5" fill="#dcb360" />
              </svg>
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </div>
            <h3 className="font-serif">100% Refund</h3>
            <p>You can return your jewellery easily within 15 days of purchase.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 15" width="60" height="10">
                <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="#dcb360" strokeWidth="1" />
                <polygon points="50,4 53,7.5 50,11 47,7.5" fill="#dcb360" />
              </svg>
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16 3 21 3 21 8" />
                <line x1="4" y1="20" x2="21" y2="3" />
                <polyline points="21 16 21 21 16 21" />
                <line x1="15" y1="15" x2="21" y2="21" />
                <line x1="4" y1="4" x2="9" y2="9" />
              </svg>
            </div>
            <h3 className="font-serif">Lifetime Exchange</h3>
            <p>Experience a relationship that will last a lifetime with our exchange policies.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 15" width="60" height="10">
                <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="#dcb360" strokeWidth="1" />
                <polygon points="50,4 53,7.5 50,11 47,7.5" fill="#dcb360" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- CUSTOM DESIGN SERVICE SUB-SECTION ---------- */}
      <div className={styles['cd-section-wrapper']}>
        <div className={styles['cd-main']}>
          {/* LEFT COLUMN: Custom Text & Core Features */}
          <div className={styles['cd-left']}>
            <div className={styles['cd-badge-container']}>
              <svg className={styles['cd-badge-bg']} preserveAspectRatio="none" viewBox="0 0 200 40">
                <polygon points="10,1 190,1 199,20 190,39 10,39 1,20" fill="none" stroke="#dcb360" strokeWidth="1.5" opacity="0.6" />
              </svg>
              <div className={styles['cd-badge-inner']}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span>CUSTOM DESIGN SERVICE</span>
              </div>
            </div>

            <h2 className={`${styles['cd-heading']} font-serif`}>
              Craft Your <br /> <span className={styles['text-primary']}>Unique Story</span>
            </h2>

            <div className={styles['cd-ornament']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>

            <p className={styles['cd-desc']}>
              Transform your vision into reality with our bespoke jewelry design service. Every piece is a reflection of your style, crafted to be treasured forever.
            </p>

            <div className={styles['cd-features-list']}>
              <div className={styles['cd-feature-card']}>
                <div className={styles['cd-feature-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 17V3" /><path d="M6 11l6 6 6-6" /><path d="M19 21H5" /></svg>
                </div>
                <div className={styles['cd-feature-text']}>
                  <h4>Expert Craftsmanship</h4>
                  <p>Premium materials with meticulous attention to detail</p>
                </div>
              </div>

              <div className={styles['cd-feature-card']}>
                <div className={styles['cd-feature-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                </div>
                <div className={styles['cd-feature-text']}>
                  <h4>Personalized Touch</h4>
                  <p>Custom engravings and handpicked gemstone selection</p>
                </div>
              </div>

              <div className={styles['cd-feature-card']}>
                <div className={styles['cd-feature-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><circle cx="18" cy="4" r="2" /></svg>
                </div>
                <div className={styles['cd-feature-text']}>
                  <h4>Master Designers</h4>
                  <p>One-on-one consultation with our expert artisans</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['cd-center-spacer']} />

          {/* RIGHT COLUMN: The Customization Process Timeline */}
          <div className={styles['cd-right']}>
            <div className={`${styles['cd-right-heading']} font-serif`}>
              Your Vision, Our Creation
            </div>
            <div className={styles['cd-right-ornament']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>

            <div className={styles['cd-timeline']}>
              {/* Dash Timeline Curve */}
              <svg className={styles['cd-timeline-curve']} width="100" height="320">
                <path d="M0,24 Q 45,69 0,114 T 0,204 T 0,294" stroke="#dcb360" strokeWidth="1.5" strokeDasharray="3 4" fill="none" opacity="0.6" />
              </svg>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="9" y1="12" x2="15" y2="12" /></svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Share Your Idea</h4>
                  <p>Tell us your inspiration and preferences</p>
                </div>
              </div>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Design & Approval</h4>
                  <p>We create a 3D design for your approval</p>
                </div>
              </div>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /><line x1="14" y1="7" x2="17" y2="10" /></svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Handcrafted</h4>
                  <p>Our artisans craft your piece with precision</p>
                </div>
              </div>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Delivered to You</h4>
                  <p>Your masterpiece, delivered with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION PANEL */}
        <div className={styles['cd-bottom-panel-wrapper']}>
          <div className={styles['cd-bottom-panel']}>
            <div className={styles['cd-bottom-left']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
              <div className={styles['cd-bottom-title']}>
                Let's Create Something <br />
                <span className={styles['text-primary']}>Extraordinary Together</span>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-bottom-middle']}>
              <div className={styles['cd-mini-feature']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                <div>
                  <h5>100% Confidential</h5>
                  <p>Your ideas are safe with us</p>
                </div>
              </div>
              <div className={styles['cd-mini-feature']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>Every piece meets standards</p>
                </div>
              </div>
              <div className={styles['cd-mini-feature']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <div>
                  <h5>Timeless Value</h5>
                  <p>Designed for generations</p>
                </div>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-bottom-right']}>
              <button className={styles['btn-cd-start']}>
                Start Your Custom Design
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
              <div className={styles['cd-free-consult']}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
