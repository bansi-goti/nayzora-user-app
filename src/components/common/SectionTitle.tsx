import React from 'react';
import Image from 'next/image';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  showCrown?: boolean;
  showOrnaments?: boolean;
  showDivider?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  className = '',
  showCrown = true,
  showOrnaments = true,
  showDivider = true,
}: SectionTitleProps) {
  // Split title dynamically so the last word is highlighted in gold gradient
  const words = title.trim().split(' ');
  let whiteText = '';
  let goldText = '';

  if (words.length > 1) {
    goldText = words[words.length - 1];
    whiteText = words.slice(0, -1).join(' ');
  } else {
    goldText = title;
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {/* Crown Icon Above */}
      {/* {showCrown && (
        <div className={styles.crownContainer}>
          <div className={styles.crownLineLeft}></div>
          <Image
            src="/sections/crown.png"
            alt="Crown Ornament"
            width={90}
            height={65}
            className={styles.crownImage}
            priority
          />
          <div className={styles.crownLineRight}></div>
        </div>
      )} */}

      {/* Main Title Row with Flanking Swirl Ornaments */}
      <div className={styles.titleRow}>
        {showOrnaments && (
          <div className={`${styles.ornamentLeft} hidden sm:block`}>
            <Image
              src="/sections/right-golden.png"
              alt="Left Swirl Ornament"
              width={110}
              height={35}
              className={styles.ornamentImage}
              priority
            />
          </div>
        )}

        <h2 className={styles.title}>
          {whiteText && <span className="text-white">{whiteText}</span>}
          <span className={styles.goldText}>{goldText}</span>
        </h2>

        {showOrnaments && (
          <div className={`${styles.ornamentRight} hidden sm:block`}>
            <Image
              src="/sections/left-golden.png"
              alt="Right Swirl Ornament"
              width={110}
              height={35}
              className={styles.ornamentImage}
              priority
            />
          </div>
        )}
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}

      {/* Bottom Divider ornament */}
      {showDivider && (
        <div className={styles.dividerContainer}>
          <Image
            src="/sections/bottom-divider.png"
            alt="Bottom Divider"
            width={280}
            height={14}
            className={styles.dividerImage}
            priority
          />
        </div>
      )}
    </div>
  );
}
