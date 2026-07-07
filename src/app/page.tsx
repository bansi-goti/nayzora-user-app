import Hero from "@/components/home/Hero";
import ShopByCategory from "@/components/home/ShopByCategory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Collection from "@/components/home/Collection";
import Testimonials from "@/components/home/Testimonials";
import HeaderBottomBar from "@/components/layout/HeaderBottomBar";

export default function Home() {
  return (
    <main className="bg-[#010a07] min-h-screen">
      <Hero />
      <div className="max-w-[1440px] mx-auto px-8 -mt-8 relative z-20">
        <HeaderBottomBar />
      </div>
      <ShopByCategory />
      <FeaturedProducts />
      <Collection />
      <Testimonials />
    </main>
  );
}
