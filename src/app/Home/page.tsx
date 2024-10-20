import { Banner } from "@/modules/Banner";
import { PopularMeal } from "@/modules/PopularMeal";
import { Sale } from "@/modules/Sale";
import { SearchBar } from "@/shared/SearchBar";

export default function Home() {
  return (
    <>
      <Banner />
      <SearchBar />
      <Sale />
      <PopularMeal />
    </>
  )
}
