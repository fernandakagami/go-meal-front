import { Banner } from "@/modules/Banner";
import { CategoryBar } from "@/modules/CategoryBar";
import { MobileAd } from "@/modules/MobileAd";
import { PopularMeal } from "@/modules/PopularMeal";
import { RestaurantList } from "@/modules/RestaurantList";
import { Sale } from "@/modules/Sale";

export default function Home() {
  return (
    <>
      <Banner />
      <CategoryBar />
      <Sale />
      <PopularMeal />
      <RestaurantList />
      <MobileAd />
    </>
  )
}
