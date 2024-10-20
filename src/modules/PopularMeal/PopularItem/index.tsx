import Image from "next/image";

import meal from "@/assets/meal2.svg";

import styles from "./styles.module.css";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PopularItem() {
  return (
    <div className={styles["item-container"]}>
      <Image src={meal} alt="" className={styles["popular-image"]}/>
      
      <div className={styles["info-container"]}>
        <p className={styles["popular-title"]}>Cheese Burger</p>

        <div className={styles["store-container"]}>
          <MapPin color="var(--yellow-400)" size={16} /> 
          <p>Burger Arena</p>
        </div>

        <p className={styles["price"]}>R$ 10,00</p>
      </div>

      <Button className={styles["button"]}>Adicionar</Button>
    </div>
  )
}
