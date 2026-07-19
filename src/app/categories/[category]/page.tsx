import React from 'react';
import Link from 'next/link';
import ProductGrid from '@/components/categories/ProductGrid';
import styles from '../page.module.css';
import homeHeroStyles from '@/components/home/Hero.module.css';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryName = category.toUpperCase();
  const breadcrumbCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className={styles['category-page']}>
      {/* Hero Section */}
      <div className={homeHeroStyles['hero']} style={{ height: '500px' }}>
        <div
          className={`${homeHeroStyles['slide-bg']} ${homeHeroStyles['active']}`}
          style={{ backgroundImage: `url('/hero.png')`, backgroundPosition: 'center' }}
        />
        <div className={homeHeroStyles['hero-overlay']}></div>

        <div className={homeHeroStyles['hero-content']}>
          <div className={styles.breadcrumbs} style={{ zIndex: 20, marginBottom: '24px' }}>
            <Link href="/" className={styles['breadcrumb-link']}>Home</Link>
            <span className={styles['breadcrumb-separator']}>{'>'}</span>
            <Link href="/categories" className={styles['breadcrumb-link']}>Categories</Link>
            <span className={styles['breadcrumb-separator']}>{'>'}</span>
            <span className={styles['breadcrumb-current']}>{breadcrumbCategory}</span>
          </div>

          <div className={`${homeHeroStyles['slide-content-item']} ${homeHeroStyles['active-content']}`}>
            <h1 className={`${homeHeroStyles['hero-title']} ${homeHeroStyles['font-serif']}`}>{categoryName}</h1>
            <div className={homeHeroStyles['hero-subtitle']}>
              <span className={homeHeroStyles['subtitle-line']}></span>
              <span className={homeHeroStyles['subtitle-diamond']}>♦</span>
              <span className={`${homeHeroStyles['subtitle-text']} ${homeHeroStyles['font-serif']}`}>Premium Collection</span>
              <span className={homeHeroStyles['subtitle-diamond']}>♦</span>
              <span className={homeHeroStyles['subtitle-line']}></span>
            </div>
            <p className={homeHeroStyles['hero-desc']}>
              Discover our exclusive collection of designer {category.toLowerCase()} crafted with perfection and elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content (Grid) */}
      <div className={styles['main-content']}>
        <ProductGrid />
      </div>
    </div>
  );
}
