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

        {/* Promise Cards Grid with Ornaments */}
        <div className={styles['rp-features-section']}>
          <div className={styles['rp-side-ornament-left']}>
            <Image 
              src="/the royal left.png" 
              alt="Left Ornament" 
              width={160} 
              height={280} 
              style={{ transform: 'scaleX(-1)' }}
              loading="lazy"
            />
          </div>

          <div className={styles['rp-features-grid']}>
            <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="34" height="34" strokeLinecap="round" strokeLinejoin="round">
                {/* Document outline */}
                <path d="M14.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8.5" />
                {/* Shield */}
                <path d="M9 7h6v3.5c0 2.5-3 4.5-3 4.5s-3-2-3-4.5V7z" />
                {/* Crown inside shield */}
                <path d="M10.5 11l.75-1.5L12 10.5l.75-1.5L13.5 11v1.5h-3V11z" fill="currentColor" stroke="none" />
                {/* Seal Outer */}
                <circle cx="17.5" cy="16.5" r="3.5" />
                {/* Seal Inner */}
                <circle cx="17.5" cy="16.5" r="1.5" />
                {/* Ribbons */}
                <path d="M15.5 19.5l-1.5 3.5 3.5-2 3.5 2-1.5-3.5" />
              </svg>
            </div>
            <h3>Certificate</h3>
            <p>Get authentic BIS hallmarked<br />jewellery backed with the trust<br />of Royal Jewellers.</p>
            <div className={styles['rp-card-ornament']}>
              <Image
                src="/new-divider-small.png"
                alt="Card Divider"
                width={160}
                height={24}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '160px' }}
              />
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="34" height="34" strokeLinecap="round" strokeLinejoin="round">
                {/* Wrench */}
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                {/* Screwdriver Handle */}
                <path d="M9 11l-3 3a2.83 2.83 0 0 0 0 4l0 0a2.83 2.83 0 0 0 4 0l3-3" />
                {/* Screwdriver Shaft */}
                <path d="M12 10l5-5" />
                {/* Screwdriver Tip */}
                <path d="M17 5l2-2" />
              </svg>
            </div>
            <h3>Customization Options</h3>
            <p>Buy jewellery that&apos;s customised<br />and personalised to the smallest<br />specifications.</p>
            <div className={styles['rp-card-ornament']}>
              <Image
                src="/new-divider-small.png"
                alt="Card Divider"
                width={160}
                height={24}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '160px' }}
              />
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="34" height="34" strokeLinecap="round" strokeLinejoin="round">
                {/* Top arrow (ends pointing right) */}
                <path d="M 7.05,16.95 A 7,7 0 0,1 12,5" />
                <polyline points="8,1 12,5 8,9" />
                {/* Bottom arrow (ends pointing left) */}
                <path d="M 16.95,7.05 A 7,7 0 0,1 12,19" />
                <polyline points="16,15 12,19 16,23" />
              </svg>
            </div>
            <h3>100% Refund</h3>
            <p>You can return your jewellery<br />easily within 15 days<br />of purchase.</p>
            <div className={styles['rp-card-ornament']}>
              <Image
                src="/new-divider-small.png"
                alt="Card Divider"
                width={160}
                height={24}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '160px' }}
              />
            </div>
          </div>

          <div className={styles['rp-feature-card']}>
            <div className={styles['rp-icon-circle']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="34" height="34" strokeLinecap="round" strokeLinejoin="round">
                {/* Top arrow (points right) */}
                <path d="M 6 9 L 18 9" />
                <polyline points="15 6 18 9 15 12" />
                {/* Bottom arrow (points left) */}
                <path d="M 18 15 L 6 15" />
                <polyline points="9 12 6 15 9 18" />
              </svg>
            </div>
            <h3>Lifetime Exchange</h3>
            <p>Experience a relationship<br />that will last a lifetime<br />with our exchange policies.</p>
            <div className={styles['rp-card-ornament']}>
              <Image
                src="/new-divider-small.png"
                alt="Card Divider"
                width={160}
                height={24}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '160px' }}
              />
            </div>
          </div>
        </div>

          <div className={styles['rp-side-ornament-right']}>
            <Image 
              src="/the royal left.png" 
              alt="Right Ornament" 
              width={160} 
              height={280} 
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ---------- CUSTOM DESIGN SERVICE SUB-SECTION ---------- */}
      <div className={styles['cd-section-wrapper']}>
        <div className={styles['cd-main']}>
          {/* LEFT COLUMN: Custom Text & Core Features */}
          <div className={styles['cd-left']}>
            <div className={styles['cd-badge-container']}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className={styles['cd-badge-icon']}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>CUSTOM DESIGN SERVICE</span>
            </div>

            <h2 className={`${styles['cd-heading']} font-serif`}>
              Craft Your <br /> <span className={styles['text-primary']}>Unique Story</span>
            </h2>

            <div className={styles['cd-ornament']}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7z" />
              </svg>
            </div>

            <p className={styles['cd-desc']}>
              Transform your vision into reality with our bespoke jewelry design service. Every piece is a reflection of your style, crafted to be treasured forever.
            </p>

            <div className={styles['cd-features-list']}>
              <div className={styles['cd-feature-card']}>
                <div className={styles['cd-feature-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l3 4-9 10-9-10 3-4z" />
                    <path d="M11 3L8 7l4 10 4-10-3-4" />
                    <path d="M3 14c2-1 4-1 6 1s4 1 6-1 4-1 6 1" />
                  </svg>
                </div>
                <div className={styles['cd-feature-text']}>
                  <h4>Expert Craftsmanship</h4>
                  <p>Premium materials with meticulous attention to detail</p>
                </div>
              </div>

              <div className={styles['cd-feature-card']}>
                <div className={styles['cd-feature-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M18.5 7.5a2.122 2.122 0 1 0-3-3L7 13v4h4L18.5 7.5z" />
                  </svg>
                </div>
                <div className={styles['cd-feature-text']}>
                  <h4>Personalized Touch</h4>
                  <p>Custom engravings and handpicked gemstone selection</p>
                </div>
              </div>

              <div className={styles['cd-feature-card']}>
                <div className={styles['cd-feature-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M19 3l3 3-5 5-3-3 5-5z" />
                    <circle cx="19" cy="3" r="1" />
                  </svg>
                </div>
                <div className={styles['cd-feature-text']}>
                  <h4>Master Designers</h4>
                  <p>One-on-one consultation with our expert artisans</p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Spacer to let the background pendant illustration show through */}
          <div className={styles['cd-center']} />

          {/* RIGHT COLUMN: The Customization Process Timeline */}
          <div className={styles['cd-right']}>
            <div className={`${styles['cd-right-heading']} font-serif`}>
              Your Vision, Our Creation
            </div>
            <div className={styles['cd-right-ornament']}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7z" />
              </svg>
            </div>

            <div className={styles['cd-timeline']}>
              {/* Dotted curved connectors */}
              <svg className={styles['cd-timeline-curve']} width="120" height="360" viewBox="0 0 120 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 60,30 A 50,50 0 0,0 60,130 A 50,50 0 0,1 60,230 A 50,50 0 0,0 60,330" stroke="#dcb360" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.55" />
              </svg>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <circle cx="8" cy="10" r="1" fill="currentColor" />
                    <circle cx="12" cy="10" r="1" fill="currentColor" />
                    <circle cx="16" cy="10" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Share Your Idea</h4>
                  <p>Tell us your inspiration <br /> and preferences</p>
                </div>
              </div>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="20" x2="20" y2="4" />
                    <path d="M20 4l-4 4 4 4" />
                    <path d="M4 20l4-4-4-4" />
                  </svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Design & Approval</h4>
                  <p>We create a 3D design <br /> for your approval</p>
                </div>
              </div>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2L22 9.5L13 18.5H5.5V11L14.5 2Z" />
                    <path d="M11 5.5L18.5 13" />
                  </svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Handcrafted</h4>
                  <p>Our artisans craft your <br /> piece with precision</p>
                </div>
              </div>

              <div className={styles['timeline-item']}>
                <div className={styles['timeline-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 22 22 2 22 2 12" />
                    <rect x="1" y="7" width="22" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <div className={styles['timeline-content']}>
                  <h4>Delivered to You</h4>
                  <p>Your masterpiece, <br /> delivered with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION PANEL */}
        <div className={styles['cd-bottom-panel-wrapper']}>
          <div className={styles['cd-bottom-panel']}>
            <div className={styles['cd-bottom-left']}>
              <div className={styles['cd-bottom-logo']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5">
                  <path d="M6 3h12l3 4-9 10-9-10 3-4z" />
                  <path d="M11 3L8 7l4 10 4-10-3-4" />
                </svg>
              </div>
              <div className={styles['cd-bottom-title']}>
                Let's Create Something <br />
                <span className={styles['text-primary']}>Extraordinary Together</span>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-mini-feature']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles['cd-mini-icon']}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div>
                <h5>100% Confidential</h5>
                <p>Your ideas are safe with us</p>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-mini-feature']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles['cd-mini-icon']}>
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <div>
                <h5>Quality Assurance</h5>
                <p>Every piece meets the highest standards</p>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-mini-feature']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles['cd-mini-icon']}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div>
                <h5>Timeless Value</h5>
                <p>Designed to be loved for generations</p>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-bottom-right']}>
              <button className={styles['btn-cd-start']}>
                Start Your Custom Design
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
              <div className={styles['cd-free-consult']}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
