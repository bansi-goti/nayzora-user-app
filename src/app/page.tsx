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

        {/* ROYAL PROMISE SECTION */}
        <section className="section container royal-promise-section" style={{ paddingTop: '2rem' }}>
          
          <div className="rp-banner">
            <div className="rp-banner-border-ornament">
              <svg viewBox="0 0 100 20" width="80" height="16">
                <path d="M0,10 Q25,10 45,5 Q50,0 55,5 Q75,10 100,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="5" r="3" fill="currentColor" />
                <circle cx="50" cy="15" r="1.5" fill="currentColor" />
              </svg>
            </div>
            
            <div className="rp-content">
              <div className="rp-crown">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
              </div>
              <div className="rp-kicker">THE ROYAL PROMISE</div>
              <h2 className="rp-heading font-serif">
                Enjoy all the benefits of<br/> The <span className="text-primary">Royal Promise</span>
              </h2>
              <div className="rp-heading-ornament">
                <svg viewBox="0 0 100 15" width="80" height="12">
                  <path d="M0,7.5 L40,7.5 M60,7.5 L100,7.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="7.5" r="3" fill="currentColor" />
                  <circle cx="45" cy="7.5" r="1.5" fill="currentColor" />
                  <circle cx="55" cy="7.5" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <p className="rp-desc">
                At Nayzora Jewellery, every piece comes with trust, quality, and a promise that lasts forever.
              </p>
            </div>
            
            <div className="rp-image-wrapper">
              <img src="/royal_promise.png" alt="The Royal Promise" className="rp-image" />
            </div>
          </div>

          <div className="rp-features-grid">
            <div className="rp-feature-card">
              <div className="rp-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M12 8v4l3 3"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="font-serif">Certificate</h3>
              <p>Get authentic BIS hallmarked jewellery backed with the trust of Royal Jewellers.</p>
              <div className="rp-card-ornament">
                <svg viewBox="0 0 100 15" width="60" height="10">
                  <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="currentColor" strokeWidth="1" />
                  <polygon points="50,4 53,7.5 50,11 47,7.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="rp-feature-card">
              <div className="rp-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="font-serif">Customization Options</h3>
              <p>Buy jewellery that's customised and personalised to the smallest specifications.</p>
              <div className="rp-card-ornament">
                <svg viewBox="0 0 100 15" width="60" height="10">
                  <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="currentColor" strokeWidth="1" />
                  <polygon points="50,4 53,7.5 50,11 47,7.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="rp-feature-card">
              <div className="rp-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                </svg>
              </div>
              <h3 className="font-serif">100% Refund</h3>
              <p>You can return your jewellery easily within 15 days of purchase.</p>
              <div className="rp-card-ornament">
                <svg viewBox="0 0 100 15" width="60" height="10">
                  <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="currentColor" strokeWidth="1" />
                  <polygon points="50,4 53,7.5 50,11 47,7.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="rp-feature-card">
              <div className="rp-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="16 3 21 3 21 8"/>
                  <line x1="4" y1="20" x2="21" y2="3"/>
                  <polyline points="21 16 21 21 16 21"/>
                  <line x1="15" y1="15" x2="21" y2="21"/>
                  <line x1="4" y1="4" x2="9" y2="9"/>
                </svg>
              </div>
              <h3 className="font-serif">Lifetime Exchange</h3>
              <p>Experience a relationship that will last a lifetime with our exchange policies.</p>
              <div className="rp-card-ornament">
                <svg viewBox="0 0 100 15" width="60" height="10">
                  <path d="M0,7.5 L45,7.5 M55,7.5 L100,7.5" stroke="currentColor" strokeWidth="1" />
                  <polygon points="50,4 53,7.5 50,11 47,7.5" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* BEST SELLERS SECTION */}
        <section className="section container" style={{ paddingTop: '2rem' }}>
          <div className="bs-header-wrapper">
            <div className="bs-crown">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
            </div>
            <h2 className="bs-section-title font-serif">
              <svg className="bs-swirl" viewBox="0 0 100 30"><path d="M10,15 Q30,5 50,15 T90,15" strokeWidth="1.5"/><path d="M25,20 L40,15 L25,10" strokeWidth="1" fill="none"/><line x1="10" y1="15" x2="25" y2="15" strokeWidth="1"/></svg>
              Best <span>Sellers</span>
              <svg className="bs-swirl" viewBox="0 0 100 30" style={{ transform: 'scaleX(-1)' }}><path d="M10,15 Q30,5 50,15 T90,15" strokeWidth="1.5"/><path d="M25,20 L40,15 L25,10" strokeWidth="1" fill="none"/><line x1="10" y1="15" x2="25" y2="15" strokeWidth="1"/></svg>
            </h2>
            <p className="bs-subtitle">Handpicked favorites loved by our customers</p>
          </div>
          
          <div className="bs-carousel">
            <button className="bs-nav-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m15 18-6-6 6-6"></path></svg>
            </button>

            <div className="bs-grid">
              {[
                {name: 'Gold Diamond Ring', price: '$15.59', oldPrice: '$19.48', img: '/arrival_1.png', rating: '4.8 (50)', likes: '128', badge: 'BESTSELLER', badgeIcon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>},
                {name: 'Pearl Chain', price: '$10.79', oldPrice: '$13.48', img: '/arrival_2.png', rating: '4.9 (25)', likes: '96', badge: 'BESTSELLER', badgeIcon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>},
                {name: 'Silver Earrings', price: '$7.19', oldPrice: '$8.98', img: '/arrival_3.png', rating: '4.7 (21)', likes: '76', badge: 'TRENDING', badgeIcon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c0 0-5 6.5-5 11a5 5 0 0 0 10 0c0-4.5-5-11-5-11zm0 14.5a3.5 3.5 0 0 1-3.5-3.5c0-1.7 1.5-3.8 2.2-4.8.6 1.4 1.8 2.8 1.8 4.3 0 1.9-1.5 3.5-3.5 3.5z"/></svg>},
                {name: 'Rose Gold Bracelet', price: '$9.59', oldPrice: '$11.98', img: '/arrival_4.png', rating: '4.6 (12)', likes: '64', badge: 'NEW ARRIVAL', badgeIcon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
              ].map((product) => (
                <div key={product.name} className="bs-card">
                  <div className="bs-img-container">
                    <div className="bs-badge">{product.badgeIcon} {product.badge}</div>
                    <div className="bs-fav"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
                    <img src={product.img} alt={product.name} className="bs-img" />
                    <svg className="bs-curve" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,20 L0,0 Q50,25 100,0 L100,20 Z" fill="#000" />
                      <path d="M0,0 Q50,25 100,0" fill="none" stroke="#dcb360" strokeWidth="0.8" opacity="0.8" />
                    </svg>
                    <div className="bs-curve-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M12 21l-4-12m8 0-4 12m-6-12 3-6m6 0 3 6"/></svg>
                    </div>
                    <div className="bs-discount">25% OFF</div>
                  </div>
                  
                  <div className="bs-content">
                    <h3 className="bs-title font-serif">{product.name}</h3>
                    <div className="bs-meta">
                      <div className="bs-meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        {product.rating}
                      </div>
                      <div className="bs-divider"></div>
                      <div className="bs-meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        {product.likes}
                      </div>
                    </div>
                    <div className="bs-prices">
                      <span className="bs-current-price">{product.price}</span>
                      <span className="bs-old-price">{product.oldPrice}</span>
                    </div>
                    
                    <div className="bs-action-bar">
                      <div className="bs-cart-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                      </div>
                      <div className="bs-add-text">Add to Cart</div>
                      <div className="bs-plus-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="bs-nav-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>
          
          <div className="carousel-dots" style={{ marginTop: '2rem' }}>
            <span className="dot active" style={{ background: '#dcb360' }}></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>

        {/* TRENDING DESIGNS SECTION */}
        <section className="section container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
          <div className="trending-header">
            <h2 className="trending-header-title font-serif">
              Trending <span className="text-primary">Designs</span>
            </h2>
            <a href="#" className="trending-header-link">
              View All Designs <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="trending-carousel-wrapper">
            <button className="trending-nav-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="trending-carousel">
              {[
                { name: 'Radiant Solitaire Ring', price: '$899.00', oldPrice: '$1,199.00', rating: '4.8 (124)', badge: 'BESTSELLER', img: '/trending_1.png' },
                { name: 'Graceful Drop Earrings', price: '$749.00', oldPrice: '$999.00', rating: '4.9 (86)', badge: 'NEW ARRIVAL', img: '/trending_2.png' },
                { name: 'Classic Gold Chain', price: '$619.00', oldPrice: '$799.00', rating: '4.7 (58)', img: '/trending_3.png' },
                { name: 'Elegant Diamond Bracelet', price: '$1,349.00', oldPrice: '$1,799.00', rating: '4.9 (102)', img: '/trending_4.png' },
                { name: 'Royal Gemstone Ring', price: '$1,199.00', oldPrice: '$1,599.00', rating: '4.8 (74)', img: '/trending_5.png' }
              ].map((item, index) => (
                <div key={index} className="trending-card">
                  {item.badge && <div className="trending-badge">{item.badge}</div>}
                  <div className="trending-fav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
                  <img src={item.img} alt={item.name} className="trending-card-img" />
                  <div className="trending-card-content">
                    <h3 className="trending-title">{item.name}</h3>
                    <div className="trending-prices">
                      <span className="trending-price">{item.price}</span>
                      <span className="trending-old-price">{item.oldPrice}</span>
                    </div>
                    <div className="trending-bottom">
                      <div className="trending-rating">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#dcb360" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        {item.rating}
                      </div>
                      <button className="trending-add-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="trending-nav-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <div className="trending-features">
            <div className="trending-feature-item">
              <div className="trending-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M12 21l-4-12m8 0-4 12m-6-12 3-6m6 0 3 6"/></svg>
              </div>
              <div className="trending-feature-text">
                <h5>Premium Quality</h5>
                <p>Finest materials crafted with perfection.</p>
              </div>
            </div>
            <div className="trending-feature-item">
              <div className="trending-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div className="trending-feature-text">
                <h5>Secure Packaging</h5>
                <p>Safe & secure packaging for every order.</p>
              </div>
            </div>
            <div className="trending-feature-item">
              <div className="trending-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
              </div>
              <div className="trending-feature-text">
                <h5>Perfect Gift</h5>
                <p>Beautifully crafted for your special moments.</p>
              </div>
            </div>
            <div className="trending-feature-item">
              <div className="trending-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <div className="trending-feature-text">
                <h5>Trusted by 10K+</h5>
                <p>Join thousands of happy customers.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
          <div className="cd-section-wrapper">
            
            <div className="cd-main">
              {/* LEFT COLUMN */}
              <div className="cd-left">
                <div className="cd-badge" style={{ position: 'relative', padding: '0.4rem 1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#dcb360', fontSize: '0.75rem', letterSpacing: '1.5px', fontWeight: 500, marginBottom: '1.5rem', background: 'transparent' }}>
                  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none" viewBox="0 0 200 40">
                    <polygon points="10,1 190,1 199,20 190,39 10,39 1,20" fill="none" stroke="#dcb360" strokeWidth="1.5" opacity="0.6"/>
                  </svg>
                  <svg style={{ zIndex: 1 }} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> 
                  <span style={{ zIndex: 1 }}>CUSTOM DESIGN SERVICE</span>
                </div>
                <h2 className="cd-heading font-serif">
                  Craft Your <br/> <span className="text-primary">Unique Story</span>
                </h2>
                <div className="cd-ornament">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <p className="cd-desc">
                  Transform your vision into reality with our bespoke jewelry design service. Every piece is a reflection of your style, crafted to be treasured forever.
                </p>
                
                <div className="cd-features-list">
                  <div className="cd-feature-card">
                    <div className="cd-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 17V3"/><path d="M6 11l6 6 6-6"/><path d="M19 21H5"/></svg>
                    </div>
                    <div className="cd-feature-text">
                      <h4>Expert Craftsmanship</h4>
                      <p>Premium materials with meticulous attention to detail</p>
                    </div>
                  </div>
                  <div className="cd-feature-card">
                    <div className="cd-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </div>
                    <div className="cd-feature-text">
                      <h4>Personalized Touch</h4>
                      <p>Custom engravings and handpicked gemstone selection</p>
                    </div>
                  </div>
                  <div className="cd-feature-card">
                    <div className="cd-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><circle cx="18" cy="4" r="2"/></svg>
                    </div>
                    <div className="cd-feature-text">
                      <h4>Master Designers</h4>
                      <p>One-on-one consultation with our expert artisans</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER SPACER */}
              <div className="cd-center-spacer"></div>

              {/* RIGHT COLUMN */}
              <div className="cd-right">
                <div className="cd-right-heading font-serif">
                  Your Vision, Our Creation
                </div>
                <div className="cd-right-ornament">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="cd-timeline">
                  <svg className="cd-timeline-curve" width="100" height="320" style={{ position: 'absolute', top: 0, left: 24, zIndex: 0, overflow: 'visible' }}>
                    <path d="M0,24 Q 45,69 0,114 T 0,204 T 0,294" stroke="#dcb360" strokeWidth="1.5" strokeDasharray="3 4" fill="none" opacity="0.6" />
                  </svg>
                  <div className="timeline-item">
                    <div className="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="12" x2="15" y2="12"/></svg></div>
                    <div className="timeline-content">
                      <h4>Share Your Idea</h4>
                      <p>Tell us your inspiration and preferences</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></div>
                    <div className="timeline-content">
                      <h4>Design & Approval</h4>
                      <p>We create a 3D design for your approval</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/><line x1="14" y1="7" x2="17" y2="10"/></svg></div>
                    <div className="timeline-content">
                      <h4>Handcrafted</h4>
                      <p>Our artisans craft your piece with precision</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg></div>
                    <div className="timeline-content">
                      <h4>Delivered to You</h4>
                      <p>Your masterpiece, delivered with care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* BOTTOM PANEL */}
            <div className="cd-bottom-panel-wrapper">
              <div className="cd-bottom-panel">
                <div className="cd-bottom-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  <div className="cd-bottom-title">
                    Let's Create Something <br/>
                    <span className="text-primary">Extraordinary Together</span>
                  </div>
                </div>
                
                <div className="cd-bottom-divider"></div>
                
                <div className="cd-bottom-middle">
                  <div className="cd-mini-feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <div>
                      <h5>100% Confidential</h5>
                      <p>Your ideas are safe with us</p>
                    </div>
                  </div>
                  <div className="cd-mini-feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    <div>
                      <h5>Quality Assurance</h5>
                      <p>Every piece meets the highest standards</p>
                    </div>
                  </div>
                  <div className="cd-mini-feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <div>
                      <h5>Timeless Value</h5>
                      <p>Designed to be loved for generations</p>
                    </div>
                  </div>
                </div>
                
                <div className="cd-bottom-divider"></div>
                
                <div className="cd-bottom-right">
                  <button className="btn-cd-start">
                    Start Your Custom Design <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </button>
                  <div className="cd-free-consult">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Free Consultation
                  </div>
                </div>
              </div>
            </div>
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
                <div className="pay-box">
                  <img src="https://img.icons8.com/color/96/000000/visa.png" alt="Visa" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </div>
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
