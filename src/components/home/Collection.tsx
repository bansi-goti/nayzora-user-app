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
          {/* Top Center Accent */}
          <div className={styles['rp-top-accent']}>
              <Image 
                src="/divider-original.png" 
                alt="Top Accent" 
                width={900} 
                height={90} 
                style={{ objectFit: 'cover', width: '100%', height: '90px' }} 
                loading="lazy" 
              />
          </div>

          <div className={styles['rp-columns']}>
            {/* Left Column */}
            <div className={styles['rp-left']}>
              <div className={styles['rp-title-container']}>
                <div className={styles['rp-logo-block']}>
                  <div className={styles['rp-crown']}>
                    <Image 
                      src="/crown-original.png" 
                      alt="Royal Crown" 
                      width={160} 
                      height={64} 
                      style={{ objectFit: 'contain', mixBlendMode: 'screen', filter: 'contrast(1.5)' }}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles['rp-kicker']}>THE ROYAL PROMISE</div>
                </div>

                <h2 className={styles['rp-heading']}>
                  Enjoy all the benefits&nbsp;of<br />
                  The <span className={styles['rp-heading-gold']}>Royal Promise</span>
                </h2>
                {/* Bottom Divider */}
                <div className={styles['rp-divider']}>
                  <Image 
                    src="/new-divider.png" 
                    alt="Divider" 
                    width={320} 
                    height={40} 
                    style={{ objectFit: 'cover', objectPosition: 'left center', width: '100%', height: '40px' }} 
                    loading="lazy" 
                  />
                </div>
              </div>

              <p className={styles['rp-desc']}>
                At Nayzora Jewellery, every piece comes with trust, quality, and a promise that lasts forever.
              </p>
            </div>

            {/* Right Column */}
            <div className={styles['rp-right']}>
              <div className={styles['rp-image-wrapper']}>
                <Image 
                  src="/final_royal_promise.webp" 
                  alt="The Royal Promise" 
                  width={800} 
                  height={600} 
                  className={styles['rp-image']}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Promise Cards Grid */}
        <div className={styles['rp-features-grid']}>
          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="28" height="28">
                <path d="M7 3h8a2 2 0 0 1 2 2v9" strokeLinecap="round" />
                <path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" strokeLinecap="round" />
                <path d="M11 7c-1.5 0-2.5.5-2.5.5v2.5c0 1.5 2.5 3 2.5 3s2.5-1.5 2.5-3v-2.5s-1-.5-2.5-.5z" />
                <circle cx="11" cy="9.5" r="1" fill="currentColor" stroke="none" />
                <circle cx="17" cy="17" r="3" />
                <path d="M15.5 19.5l-1 3.5 2.5-1 2.5 1 -1-3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Certificate</h3>
            <p>Get authentic BIS hallmarked jewellery backed with the trust of Royal Jewellers.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 20" width="80" height="16">
                <line x1="10" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M 43 10 C 43 6, 50 6, 50 10 C 50 14, 43 14, 43 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="10" r="1.5" fill="currentColor" stroke="none" />
                <path d="M 57 10 C 57 6, 50 6, 50 10 C 50 14, 57 14, 57 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="60" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="28" height="28">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                <path d="M15.5 9l-4.5 4.5-2-2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 4v2" strokeLinecap="round" />
                <path d="M12 18v2" strokeLinecap="round" />
                <path d="M4 12h2" strokeLinecap="round" />
                <path d="M18 12h2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Customization Options</h3>
            <p>Buy jewellery that's customised and personalised to the smallest specifications.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 20" width="80" height="16">
                <line x1="10" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M 43 10 C 43 6, 50 6, 50 10 C 50 14, 43 14, 43 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="10" r="1.5" fill="currentColor" stroke="none" />
                <path d="M 57 10 C 57 6, 50 6, 50 10 C 50 14, 57 14, 57 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="60" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="28" height="28">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="12" y="16" fontSize="8" textAnchor="middle" fill="currentColor" stroke="none" fontWeight="bold">100%</text>
              </svg>
            </div>
            <h3>100% Refund</h3>
            <p>You can return your jewellery easily within 15 days of purchase.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 20" width="80" height="16">
                <line x1="10" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M 43 10 C 43 6, 50 6, 50 10 C 50 14, 43 14, 43 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="10" r="1.5" fill="currentColor" stroke="none" />
                <path d="M 57 10 C 57 6, 50 6, 50 10 C 50 14, 57 14, 57 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="60" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="28" height="28">
                <path d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c2.146 0 4.095.845 5.542 2.22" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Lifetime Exchange</h3>
            <p>Experience a relationship that will last a lifetime with our exchange policies.</p>
            <div className={styles['rp-card-ornament']}>
              <svg viewBox="0 0 100 20" width="80" height="16">
                <line x1="10" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M 43 10 C 43 6, 50 6, 50 10 C 50 14, 43 14, 43 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="10" r="1.5" fill="currentColor" stroke="none" />
                <path d="M 57 10 C 57 6, 50 6, 50 10 C 50 14, 57 14, 57 10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="60" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
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
