import Image from "next/image";

import sale from "@/assets/meal.svg";

import styles from "./styles.module.css";

export function SaleCard() {
  return (
    <div className={styles["item-container"]}>
        <Image src={sale} alt="" className={styles["sale-image"]}/>

        <small className={styles["discount-container"]}>15%</small>

        <p className={styles["title-sale"]}>Greys Vage</p>

        <p>R$ 10,00</p>
      </div>
  )
}