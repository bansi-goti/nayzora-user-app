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
                  src="/final_royal_promise.png" 
                  alt="The Royal Promise" 
                  width={800} 
                  height={600} 
                  className={styles['rp-image']}
                  loading="lazy"
                  unoptimized={true}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="34" height="34" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                <path d="M2 9h20" />
                <path d="M12 21l-4-12" />
                <path d="M12 21l4-12" />
                <path d="M6 3l2 6" />
                <path d="M18 3l-2 6" />
              </svg>
            </div>
            <h3>Master Craftsmanship</h3>
            <p>Every Nayzora creation is<br />handcrafted by master<br />artisans with precision.</p>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="34" height="34" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="16" r="1" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Fully Insured</h3>
            <p>Enjoy complimentary and<br />fully insured secure shipping<br />on all your orders.</p>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="34" height="34" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="21 8 21 21 3 21 3 8" />
                <rect x="1" y="5" width="22" height="3" />
                <line x1="12" y1="21" x2="12" y2="8" />
                <path d="M12 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
                <path d="M12 5V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
              </svg>
            </div>
            <h3>Elegant Packaging</h3>
            <p>Your jewellery arrives in<br />our signature luxury boxes<br />ready for gifting.</p>
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
              <span>THE NAYZORA EXPERIENCE</span>
            </div>

            <h2 className={`${styles['cd-heading']} font-serif`}>
              Experience <br /> <span className={styles['text-primary']}>True Luxury</span>
            </h2>

            <div className={styles['cd-ornament']}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7z" />
              </svg>
            </div>

            <p className={styles['cd-desc']}>
              Discover the elegance of Nayzora. Every piece is a reflection of timeless beauty, meticulously crafted to be treasured forever.
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
                  <h4>Master Artisans</h4>
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
                  <h4>Ethical Sourcing</h4>
                  <p>Conflict-free diamonds and sustainable materials</p>
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
                  <h4>Unmatched Quality</h4>
                  <p>Rigorous quality checks for lasting brilliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Spacer to let the background pendant illustration show through */}
          <div className={styles['cd-center']} />

          {/* RIGHT COLUMN: The Customization Process Timeline */}
          <div className={styles['cd-right']}>
            <div className={`${styles['cd-right-heading']} font-serif`}>
              The Buying Journey
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
                  <h4>Browse Collections</h4>
                  <p>Explore our exquisite <br /> range of jewelry</p>
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
                  <h4>Select Your Piece</h4>
                  <p>Find the perfect match <br /> for your unique style</p>
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
                  <h4>Secure Checkout</h4>
                  <p>Safe and encrypted <br /> payment processing</p>
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
                  <h4>Fast Delivery</h4>
                  <p>Insured shipping directly <br /> to your doorstep</p>
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
                Start Your Nayzora <br />
                <span className={styles['text-primary']}>Journey Today</span>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-mini-feature']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles['cd-mini-icon']}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div>
                <h5>Secure Transactions</h5>
                <p>Your data is safe with us</p>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-mini-feature']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles['cd-mini-icon']}>
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <div>
                <h5>Certified Authenticity</h5>
                <p>Every piece is certified authentic</p>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-mini-feature']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles['cd-mini-icon']}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div>
                <h5>Lifetime Support</h5>
                <p>We're here for you forever</p>
              </div>
            </div>

            <div className={styles['cd-bottom-divider']} />

            <div className={styles['cd-bottom-right']}>
              <button className={styles['btn-cd-start']}>
                Explore Collections
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
