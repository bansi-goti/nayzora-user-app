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
