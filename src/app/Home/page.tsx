import { Banner } from "@/modules/Banner";
import { MobileAd } from "@/modules/MobileAd";
import { PopularMeal } from "@/modules/PopularMeal";
import { RestaurantList } from "@/modules/RestaurantList";
import { Sale } from "@/modules/Sale";
import { SearchBar } from "@/shared/SearchBar";

export default function Home() {
  return (
    <>
      <Banner />
      <SearchBar />
      <Sale />
      <PopularMeal />
      <RestaurantList />
      <MobileAd />
    </>
  )
}
