import { SaleCard } from "./SaleCard";
import { SectionContainer } from "@/shared/SectionContainer";

export function Sale() {
  return (
    <SectionContainer title="Promoções" column={4}>      
      <SaleCard />
      <SaleCard />
      <SaleCard />
      <SaleCard />     
    </ SectionContainer>
  );
}