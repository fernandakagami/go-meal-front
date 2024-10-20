import styles from "./styles.module.css";
import { SaleCard } from "./SaleCard";

export function Sale() {
  return (
    <div className={styles["sale-container"]}>

      <SaleCard />
      <SaleCard />
      <SaleCard />
      <SaleCard />

    </div>
  );
}