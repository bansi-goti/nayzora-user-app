import Hero from "@/components/home/Hero";
import ShopByCategory from "@/components/home/ShopByCategory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Collection from "@/components/home/Collection";


export default function Home() {
  return (
    <main className="bg-[#010a07] min-h-screen">
      <Hero />

      <ShopByCategory />

      <FeaturedProducts />
      <Collection />
    </main>
  );
}
