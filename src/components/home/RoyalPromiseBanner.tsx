import React from 'react';
import Image from 'next/image';
import styles from './FeaturedProducts.module.css';

export default function RoyalPromiseBanner() {
  return (
    <section className={styles['featured-section']}>
      <div className={styles['subsection-wrapper']}>
        <div
          className="relative rounded-[20px] overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl"
          style={{
            background: 'linear-gradient(to right, #010604, #02120b)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          }}
        >
          {/* Top/Bottom Center Gold Ornaments (Approximation for the decorative borders) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-80">
            <div className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#dcb360] to-transparent"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-1" stroke="#dcb360" strokeWidth="1">
              <path d="M12 2L15 8L21 9L16 14L18 20L12 17L6 20L8 14L3 9L9 8L12 2Z" fill="rgba(220,179,96,0.1)" />
            </svg>
            <div className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#dcb360] to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-80">
            <div className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#dcb360] to-transparent"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-1" stroke="#dcb360" strokeWidth="1">
              <path d="M12 2L15 8L21 9L16 14L18 20L12 17L6 20L8 14L3 9L9 8L12 2Z" fill="rgba(220,179,96,0.1)" />
            </svg>
            <div className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#dcb360] to-transparent"></div>
          </div>

          {/* Corner gold borders */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-[#dcb360] opacity-50 rounded-tl-lg"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-[#dcb360] opacity-50 rounded-tr-lg"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-[#dcb360] opacity-50 rounded-bl-lg"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-[#dcb360] opacity-50 rounded-br-lg"></div>

          {/* Left Text Content */}
          <div
            className="flex-1 z-10 w-full flex flex-col items-center text-center md:items-start md:text-left px-6 py-12 md:pl-[8%] md:pr-[4%]"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dcb360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 17L3 6l4.5 4L12 2l4.5 8L21 6l1 11H2z" />
              </svg>
              <span className="text-[#dcb360] text-sm font-bold tracking-[0.2em] uppercase font-sans">
                The Royal Promise
              </span>
            </div>

            <h2 className="text-center md:text-left w-full text-4xl md:text-5xl lg:text-[56px] text-white font-serif font-normal leading-[1.1] mb-6">
              Enjoy all the benefits of <br className="hidden sm:block" />
              <span className="text-[#dcb360]">
                The Royal Promise
              </span>
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-8 opacity-80 w-full">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#dcb360]"></div>
              <div className="w-2 h-2 rotate-45 border border-[#dcb360]"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent md:bg-gradient-to-r md:from-[#dcb360] md:to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#dcb360]"></div>
            </div>

            <p className="text-center md:text-left w-full text-[#a4b5aa] text-[17px] max-w-md leading-relaxed font-sans mx-auto md:mx-0">
              At Nayzora Jewellery, every piece comes with trust, quality, and a promise that lasts forever.
            </p>
          </div>

          {/* Right Image Showcase */}
          <div
            className="flex-1 w-full relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] px-6 pb-10 md:pt-12 md:pb-12 md:pl-0 md:pr-[8%]"
          >
            <div className="w-full h-full relative rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src="/royal_promise_nayzora.png"
                alt="Nayzora Jewellery Royal Promise Showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
