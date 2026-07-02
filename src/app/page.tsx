import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <span className="hero-tag">PURELY HAND-CRAFTED</span>
            <h1 className="hero-title font-serif">TIMELESS ELEGANCE</h1>
            <div className="hero-subtitle font-serif">
              <svg width="80" height="15" viewBox="0 0 80 15" fill="none">
                <path d="M0 7.5h65" stroke="#dcb360" strokeWidth="1"/>
                <path d="M70 4L75 7.5L70 11L65 7.5L70 4Z" stroke="#dcb360" strokeWidth="1"/>
                <circle cx="70" cy="7.5" r="1.5" fill="#dcb360"/>
              </svg>
              <span>Premium Collection</span>
              <svg width="80" height="15" viewBox="0 0 80 15" fill="none">
                <path d="M15 7.5h65" stroke="#dcb360" strokeWidth="1"/>
                <path d="M10 4L15 7.5L10 11L5 7.5L10 4Z" stroke="#dcb360" strokeWidth="1"/>
                <circle cx="10" cy="7.5" r="1.5" fill="#dcb360"/>
              </svg>
            </div>
            <p className="hero-desc">
              Experience luxury with our handcrafted jewelry pieces.<br/>Each piece is a masterpiece of artistry.
            </p>
            <button className="btn-primary">
              Explore Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="section container" style={{ paddingBottom: '2rem' }}>
          <div className="section-title-wrapper">
            <h2 className="section-title font-serif">Shop by Category</h2>
            <div className="section-title-ornament">
              <svg width="250" height="15" viewBox="0 0 250 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.5h100M150 7.5h100" stroke="#dcb360" strokeWidth="1" strokeOpacity="0.6"/>
                <path d="M125 1L132 7.5L125 14L118 7.5L125 1Z" stroke="#dcb360" strokeWidth="1"/>
                <circle cx="125" cy="7.5" r="2" fill="#dcb360"/>
                <path d="M112 5 Q115 7.5 112 10" stroke="#dcb360" strokeWidth="1" fill="none"/>
                <path d="M138 5 Q135 7.5 138 10" stroke="#dcb360" strokeWidth="1" fill="none"/>
                <circle cx="106" cy="7.5" r="1.5" fill="#dcb360"/>
                <circle cx="144" cy="7.5" r="1.5" fill="#dcb360"/>
              </svg>
            </div>
          </div>
          
          <div className="categories-slider">
            <button className="slider-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            
            <div className="category-list">
              {[
                { name: 'RINGS', icon: <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><g transform="translate(-4, 0)"><circle cx="28" cy="38" r="14"/><path d="M22 24h12l-2-6h-8z"/><path d="M20 24h16"/></g><g transform="translate(14, -6) rotate(20, 28, 38)"><circle cx="28" cy="38" r="14"/><path d="M22 24h12l-2-6h-8z"/><path d="M20 24h16"/></g></svg> },
                { name: 'BRACELETS', icon: <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M26 16 A 18 18 0 1 0 38 16"/><circle cx="26" cy="16" r="4"/><circle cx="38" cy="16" r="4"/><path d="M12 32l4-2 M52 32l-4-2 M32 50l0-4 M20 46l3-3 M44 46l-3-3 M16 22l4 2 M48 22l-4 2"/></svg> },
                { name: 'NECKLACES', icon: <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 20 Q 32 64 48 20" strokeDasharray="4 6" strokeWidth="6" strokeLinecap="round"/><circle cx="32" cy="45" r="3" fill="currentColor"/></svg> },
                { name: 'PENDANTS', icon: <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M32 16 C 16 32 16 52 32 56 C 48 52 48 32 32 16 Z"/><path d="M32 16 V 56 M 22 36 H 42 M 25 25 L 39 47 M 25 47 L 39 25"/><circle cx="32" cy="8" r="4"/></svg> },
                { name: 'CUFFLINKS', icon: <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="26" cy="30" r="10"/><path d="M22 28 A 2 2 0 0 1 26 26 A 2 2 0 0 1 30 28 Q 26 32 26 34 Q 22 32 22 28 Z" fill="currentColor"/><circle cx="44" cy="36" r="8"/><circle cx="44" cy="36" r="2"/><path d="M20 38 L 12 46 M 38 42 L 32 48"/></svg> },
                { name: 'EARRINGS', icon: <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 32 C 16 42 16 52 22 56 C 28 52 28 42 22 32 Z"/><path d="M42 32 C 36 42 36 52 42 56 C 48 52 48 42 42 32 Z"/><path d="M22 32 C 22 20 28 16 28 10"/><path d="M42 32 C 42 20 48 16 48 10"/><path d="M22 40 V 48 M 42 40 V 48"/></svg> },
                { name: 'GEMSTONES', icon: <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="32 12 12 28 32 56 52 28 32 12"/><polygon points="32 12 22 28 32 56 42 28 32 12"/><line x1="12" y1="28" x2="52" y2="28"/><line x1="22" y1="28" x2="28" y2="44"/><line x1="42" y1="28" x2="36" y2="44"/></svg> }
              ].map((cat, i) => (
                <div key={cat.name} className="category-card">
                  <div className="category-icon">
                    {cat.icon}
                  </div>
                  <span className="category-name">{cat.name}</span>
                  <div className="category-diamond">
                    <svg width="50" height="8" viewBox="0 0 50 8" fill="none">
                      <path d="M0 4h20M30 4h20" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                      <path d="M25 1L28 4L25 7L22 4L25 1Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="slider-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>

          <div className="features-banner">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 10 L37 18 L46 16 L44 25 L52 32 L44 39 L46 48 L37 46 L32 54 L27 46 L18 48 L20 39 L12 32 L20 25 L18 16 L27 18 Z" strokeLinejoin="round"/>
                  <circle cx="32" cy="32" r="8"/>
                  <path d="M32 28 L34 32 L32 36 L30 32 Z"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Certified Jewellery</h4>
                <p>100% Hallmarked</p>
              </div>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 10 L16 16 V32 C16 44 24 52 32 56 C40 52 48 44 48 32 V16 Z" />
                  <circle cx="32" cy="33" r="10" />
                  <path d="M28 33 L31 36 L37 30" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Secure Payments</h4>
                <p>100% Protected</p>
              </div>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="12" y="24" width="24" height="20" rx="2" />
                  <path d="M36 28 H46 L50 34 V44 H36" />
                  <circle cx="20" cy="46" r="4" />
                  <circle cx="44" cy="46" r="4" />
                  <path d="M24 30 L28 34 L24 38 L20 34 Z" />
                  <line x1="38" y1="36" x2="48" y2="36" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Free Shipping</h4>
                <p>On Orders Over $500</p>
              </div>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 12 A 20 20 0 1 1 12 32" />
                  <path d="M12 32 V24 M12 32 H20" />
                  <circle cx="32" cy="32" r="6" />
                  <circle cx="32" cy="32" r="2" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Easy Returns</h4>
                <p>15-Day Returns</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRENDING SECTION */}
        <section className="section container" style={{ paddingTop: '1rem' }}>
          <div className="section-title-wrapper">
            <h2 className="section-title font-serif">Trending Designs</h2>
            <div className="section-title-ornament">
              <svg width="250" height="15" viewBox="0 0 250 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.5h100M150 7.5h100" stroke="#dcb360" strokeWidth="1" strokeOpacity="0.6"/>
                <path d="M125 1L132 7.5L125 14L118 7.5L125 1Z" stroke="#dcb360" strokeWidth="1"/>
                <circle cx="125" cy="7.5" r="2" fill="#dcb360"/>
                <path d="M112 5 Q115 7.5 112 10" stroke="#dcb360" strokeWidth="1" fill="none"/>
                <path d="M138 5 Q135 7.5 138 10" stroke="#dcb360" strokeWidth="1" fill="none"/>
                <circle cx="106" cy="7.5" r="1.5" fill="#dcb360"/>
                <circle cx="144" cy="7.5" r="1.5" fill="#dcb360"/>
              </svg>
            </div>
          </div>
          
          <div className="products-grid">
            {[
              {name: 'Golden Teardrop Pendant', price: '$1,299.00', img: '/product1.png'},
              {name: 'Classic Diamond Necklace', price: '$2,599.00', img: '/product2.png'},
              {name: 'Luxury Diamond Ring', price: '$1,999.00', img: '/product3.png'},
              {name: 'Emerald Grace Bracelet', price: '$1,799.00', img: '/product4.png'}
            ].map((product) => (
              <div key={product.name} className="product-card">
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} className="product-img" />
                  <button className="wishlist-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </button>
                </div>
                <div className="product-info">
                  <h3 className="product-name font-serif">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <button className="btn-cart">
                    Add to Cart
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>

        {/* FOOTER SECTION */}
        {/* FOOTER SECTION */}
        <footer className="footer">
          <div className="footer-top">
            <div className="newsletter-text">
              <h3 className="font-serif">Join The Nayzora Family</h3>
              <p>Subscribe to get special offers, free giveaways,<br/>and once-in-a-lifetime deals.</p>
            </div>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email address" className="subscribe-input" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
          
          <div className="footer-main container">
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <div className="logo-icon-large">
                  <span style={{ fontSize: '30px' }}>N</span>
                </div>
                <div className="logo-text-large">
                  <span className="logo-brand font-serif">NAYZORA</span>
                  <span className="logo-sub">JEWELLERY</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="#" aria-label="Pinterest"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4-.1-1-.1-2.5 0-3.5l1.6-6.8s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.1 0 1.7.9 1.7 1.9 0 1.1-.7 2.8-1.1 4.4-.3 1.3.7 2.4 1.9 2.4 2.3 0 4.1-2.5 4.1-6 0-3.1-2.2-5.3-5.5-5.3-3.8 0-6 2.8-6 5.8 0 1.1.4 2.3 1 2.9.1.1.1.3.1.4-.1.4-.3 1.3-.3 1.5-.1.3-.2.3-.5.2-1.8-.8-2.9-3.4-2.9-5.4 0-4.4 3.2-8.4 9.2-8.4 5 0 8.8 3.5 8.8 8.2 0 4.9-3.1 8.9-7.4 8.9-1.4 0-2.8-.8-3.3-1.7l-1 3.8c-.3 1.4-1.2 3.1-1.8 4.1C9.6 21.8 10.8 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg></a>
                <a href="#" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.4c-.2-1-.9-1.7-1.9-1.9C18.9 4.1 12 4.1 12 4.1s-6.9 0-8.6.4C2.4 4.7 1.7 5.4 1.5 6.4 1 8.3 1 12 1 12s0 3.7.5 5.6c.2 1 .9 1.7 1.9 1.9 1.7.4 8.6.4 8.6.4s6.9 0 8.6-.4c1-.2 1.7-.9 1.9-1.9.5-1.9.5-5.6.5-5.6s0-3.7-.5-5.6zM9.8 15.3v-6.6l6 3.3-6 3.3z"/></svg></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Collection</a></li>
                <li><a href="#">Shipping & Delivery</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-col contact-col">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +1 (123) 456-7890
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  support@nayzora.com
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  123 Diamond Street,<br/>New York, NY 10001, USA
                </li>
              </ul>
            </div>

            <div className="footer-col payments-col">
              <h4>We Accept</h4>
              <div className="payment-icons">
                <div className="pay-box"><img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa"/></div>
                <div className="pay-box"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard"/></div>
                <div className="pay-box"><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex"/></div>
                <div className="pay-box"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal"/></div>
                <div className="pay-box"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay"/></div>
                <div className="pay-box"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay"/></div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom container">
            <p>© 2024 Nayzora Jewellery. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
