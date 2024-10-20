"use client";

import { PopularItem } from "./PopularItem";
import styles from "./styles.module.css";

export function PopularMeal() {
  return (
    <>
      <h1 className={styles["popular-title"]}>Itens Populares</h1>

      <div className={styles["popular-container"]}>
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
      </div>
    </>
    
  );
}