"use client";

import { SectionContainer } from "@/shared/SectionContainer";
import { PopularItem } from "./PopularItem";

export function PopularMeal() {
  return (
    <SectionContainer title="Itens Populares" column={5}>      
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />      
    </ SectionContainer>
  );
}