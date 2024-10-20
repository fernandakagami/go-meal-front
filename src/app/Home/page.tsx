import { Banner } from "@/modules/Banner";
import { PopularMeal } from "@/modules/PopularMeal";
import { Sale } from "@/modules/Sale";

export default function Home() {
  return (
    <>
      <Banner />
      <Sale />
      <PopularMeal />
    </>
  )
}
