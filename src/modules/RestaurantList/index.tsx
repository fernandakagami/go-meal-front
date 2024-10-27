import { SectionContainer } from "@/shared/SectionContainer";
import { RestaurantItem } from "./RestaurantItem";

export function RestaurantList() {
  return (
    <SectionContainer title="Restaurantes" column={4}>      
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
    </ SectionContainer>
  );
}