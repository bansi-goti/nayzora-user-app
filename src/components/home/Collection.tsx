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
              <svg viewBox="0 0 100 24" width="85" height="20">
                <line x1="0" y1="12" x2="15" y2="12" stroke="#C49A45" strokeWidth="1" />
                <path d="M 15 12 Q 30 4 45 12 Q 30 20 15 12 Z" fill="#021209" stroke="#C49A45" strokeWidth="1.2" />
                <circle cx="30" cy="12" r="1.5" fill="#C49A45" />
                <path d="M 50 1 Q 60 12 50 23 Q 40 12 50 1 Z" fill="#021209" stroke="#C49A45" strokeWidth="1.5" />
                <path d="M 50 6 Q 54 12 50 18 Q 46 12 50 6 Z" fill="#C49A45" />
                <path d="M 85 12 Q 70 4 55 12 Q 70 20 85 12 Z" fill="#021209" stroke="#C49A45" strokeWidth="1.2" />
                <circle cx="70" cy="12" r="1.5" fill="#C49A45" />
                <line x1="85" y1="12" x2="100" y2="12" stroke="#C49A45" strokeWidth="1" />
              </svg>
          </div>

          <div className={styles['rp-columns']}>
            {/* Left Column */}
            <div className={styles['rp-left']}>
              <div className={styles['rp-title-container']}>
                <div className={styles['rp-logo-block']}>
                  <div className={styles['rp-crown']}>
                    <svg viewBox="0 0 160 60" width="140" height="52">
                      <defs>
                        <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#C49A45" stopOpacity="0"/>
                          <stop offset="70%" stopColor="#C49A45" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#C49A45" stopOpacity="0"/>
                        </linearGradient>
                        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FFF2D8" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#C49A45" stopOpacity="0"/>
                        </radialGradient>
                      </defs>

                      {/* Glowing base line */}
                      <line x1="10" y1="45" x2="90" y2="45" stroke="url(#glowLine)" strokeWidth="1.5"/>

                      {/* Crown Base */}
                      <line x1="65" y1="42" x2="95" y2="42" stroke="#E2B659" strokeWidth="1.5"/>
                      <line x1="67" y1="38" x2="93" y2="38" stroke="#E2B659" strokeWidth="1"/>

                      {/* Crown Body */}
                      <path d="M 67 38 L 62 20 L 73 28 L 80 12 L 87 28 L 98 20 L 93 38 Z" fill="none" stroke="#E2B659" strokeWidth="1.5"/>
                      
                      {/* Crown Jewels/Dots */}
                      <circle cx="62" cy="18" r="1.5" fill="#E2B659" />
                      <circle cx="98" cy="18" r="1.5" fill="#E2B659" />

                      {/* Center Cross */}
                      <line x1="80" y1="4" x2="80" y2="10" stroke="#E2B659" strokeWidth="1.2"/>
                      <line x1="77" y1="7" x2="83" y2="7" stroke="#E2B659" strokeWidth="1.2"/>

                      {/* Center Glow Dot */}
                      <circle cx="80" cy="45" r="3" fill="url(#centerGlow)" />

                      {/* Elaborate Flourishes below base */}
                      {/* Left flourish */}
                      <path d="M 65 45 C 55 45, 55 52, 65 52 C 70 52, 70 48, 75 48" fill="none" stroke="#E2B659" strokeWidth="1"/>
                      {/* Right flourish */}
                      <path d="M 95 45 C 105 45, 105 52, 95 52 C 90 52, 90 48, 85 48" fill="none" stroke="#E2B659" strokeWidth="1"/>

                      {/* Little dots in flourishes */}
                      <circle cx="58" cy="49" r="1" fill="#E2B659" />
                      <circle cx="102" cy="49" r="1" fill="#E2B659" />
                    </svg>
                  </div>
                  <div className={styles['rp-kicker']}>THE ROYAL PROMISE</div>
                </div>

                <h2 className={styles['rp-heading']}>
                  Enjoy all the benefits of<br />
                  The <span className={styles['rp-heading-gold']}>Royal Promise</span>
                </h2>
                {/* Bottom Divider */}
                <div className={styles['rp-divider']}>
                  <svg viewBox="0 0 430 24" width="100%" height="24">
                    {/* Left End Dot */}
                    <circle cx="5" cy="12" r="1" fill="#C49A45" />
                    {/* Left Line */}
                    <line x1="8" y1="12" x2="195" y2="12" stroke="#C49A45" strokeWidth="1" />
                    
                    {/* Left Loop */}
                    <path d="M 211 12 C 190 2, 190 22, 211 12 Z" fill="none" stroke="#C49A45" strokeWidth="1.2" />
                    <circle cx="200" cy="12" r="1.2" fill="#C49A45" />
                    
                    {/* Center Oval */}
                    <ellipse cx="215" cy="12" rx="4" ry="7" fill="none" stroke="#C49A45" strokeWidth="1.5" />
                    <circle cx="215" cy="12" r="1.5" fill="#C49A45" />
                    
                    {/* Right Loop */}
                    <path d="M 219 12 C 240 2, 240 22, 219 12 Z" fill="none" stroke="#C49A45" strokeWidth="1.2" />
                    <circle cx="230" cy="12" r="1.2" fill="#C49A45" />
                    
                    {/* Right Line */}
                    <line x1="235" y1="12" x2="422" y2="12" stroke="#C49A45" strokeWidth="1" />
                    {/* Right End Dot */}
                    <circle cx="425" cy="12" r="1" fill="#C49A45" />
                  </svg>
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
