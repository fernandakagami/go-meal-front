import { Banner } from "@/shared/Banner";
import { PopularMeal } from "@/shared/PopularMeal";
import { Sale } from "@/shared/Sale";

export default function Home() {
  return (
    <>
      <Banner />
      <Sale />
      <PopularMeal />
    </>
  )
}
