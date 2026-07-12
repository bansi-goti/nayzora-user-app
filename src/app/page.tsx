import Hero from "@/components/home/Hero";
import ShopByCategory from "@/components/home/ShopByCategory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Collection from "@/components/home/Collection";

import HeaderBottomBar from "@/components/layout/HeaderBottomBar";

export default function Home() {
  return (
    <main className="bg-[#010a07] min-h-screen">
      <Hero />
      <div style={{width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', boxSizing: 'border-box', marginTop: '-32px', position: 'relative', zIndex: 20}}>
        <HeaderBottomBar />
      </div>
      <ShopByCategory />

      <FeaturedProducts />
      <Collection />
    </main>
  );
}
