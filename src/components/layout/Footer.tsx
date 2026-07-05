import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      {/* Newsletter */}
      <div className={styles['footer-top']}>
        <div className={styles['newsletter-text']}>
          <h3 className="font-serif">Join The Nayzora Family</h3>
          <p>Subscribe to get special offers, free giveaways,<br />and once-in-a-lifetime deals.</p>
        </div>
        <div className={styles['subscribe-form']}>
          <input type="email" placeholder="Enter your email address" className={styles['subscribe-input']} />
          <button className={styles['subscribe-btn']}>Subscribe</button>
        </div>
      </div>

      {/* Main Footer Links & Contacts */}
      <div className={`${styles['footer-main']} container`}>
        {/* Brand Column */}
        <div className={`${styles['footer-col']} ${styles['brand-col']}`}>
          <div className={styles['footer-logo']}>
            <div className={styles['logo-icon-large']}>
              <span>N</span>
            </div>
            <div className={styles['logo-text-large']}>
              <span className={`${styles['logo-brand']} font-serif`}>NAYZORA</span>
              <span className={styles['logo-sub']}>JEWELLERY</span>
            </div>
          </div>
          <div className={styles['social-links']}>
            <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" aria-label="Pinterest"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4-.1-1-.1-2.5 0-3.5l1.6-6.8s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.1 0 1.7.9 1.7 1.9 0 1.1-.7 2.8-1.1 4.4-.3 1.3.7 2.4 1.9 2.4 2.3 0 4.1-2.5 4.1-6 0-3.1-2.2-5.3-5.5-5.3-3.8 0-6 2.8-6 5.8 0 1.1.4 2.3 1 2.9.1.1.1.3.1.4-.1.4-.3 1.3-.3 1.5-.1.3-.2.3-.5.2-1.8-.8-2.9-3.4-2.9-5.4 0-4.4 3.2-8.4 9.2-8.4 5 0 8.8 3.5 8.8 8.2 0 4.9-3.1 8.9-7.4 8.9-1.4 0-2.8-.8-3.3-1.7l-1 3.8c-.3 1.4-1.2 3.1-1.8 4.1C9.6 21.8 10.8 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg></a>
            <a href="#" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.4c-.2-1-.9-1.7-1.9-1.9C18.9 4.1 12 4.1 12 4.1s-6.9 0-8.6.4C2.4 4.7 1.7 5.4 1.5 6.4 1 8.3 1 12 1 12s0 3.7.5 5.6c.2 1 .9 1.7 1.9 1.9 1.7.4 8.6.4 8.6.4s6.9 0 8.6-.4c1-.2 1.7-.9 1.9-1.9.5-1.9.5-5.6.5-5.6s0-3.7-.5-5.6zM9.8 15.3v-6.6l6 3.3-6 3.3z" /></svg></a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className={styles['footer-col']}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Collection</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className={styles['footer-col']}>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={`${styles['footer-col']} ${styles['contact-col']}`}>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+1 (123) 456-7890</span>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>support@nayzora.com</span>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>123 Diamond Street,<br />New York, NY 10001, USA</span>
            </li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div className={`${styles['footer-col']} ${styles['payments-col']}`}>
          <h4>We Accept</h4>
          <div className={styles['payment-icons']}>
            <div className={styles['pay-box']}>
              <img src="https://img.icons8.com/color/96/000000/visa.png" alt="Visa" />
            </div>
            <div className={styles['pay-box']}><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" /></div>
            <div className={styles['pay-box']}><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" /></div>
            <div className={styles['pay-box']}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" /></div>
            <div className={styles['pay-box']}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" /></div>
            <div className={styles['pay-box']}><img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" /></div>
          </div>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>© 2024 Nayzora Jewellery. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
