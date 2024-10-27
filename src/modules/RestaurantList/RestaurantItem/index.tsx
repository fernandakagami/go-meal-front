import Image from "next/image";

import restaurant from "@/assets/restaurant1.svg";
import logo from "@/assets/restaurantlogo1.svg";

import styles from "./styles.module.css";
import { Star } from "lucide-react";

export function RestaurantItem() {
  return (
    <div className={styles["item-container"]}>
      <Image src={restaurant} alt="" className={styles["restaurant-image"]}/>

      <div className={styles["restaurant-wrapper"]}>
        <Image src={logo} alt="" className={styles.logo} />        

        <div className={styles["restaurant-title"]}>
          <p className={styles["restaurant-name"]}>Greys Vage</p>
          <p className={styles["restaurant-score"]}> <Star color="var(--yellow-400)" fill="var(--yellow-400)" size={16} />4</p>          
        </div>
      </div>
    </div>
  )
}