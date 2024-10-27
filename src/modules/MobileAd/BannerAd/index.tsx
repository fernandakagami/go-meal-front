import Image from "next/image";

import ad1 from "@/assets/ad1.svg";
import ad2 from "@/assets/ad2.svg";

import styles from "./styles.module.css";

export function BannerAd() {
  return (
    <div className={styles["banner-container"]}>
      <div className={styles.detail}>
        <Image src={ad1} alt="" width={100} height={100} />
        <p className={styles.title}>Descontos diários</p>
      </div>

      <div className={styles.detail}>
        <Image src={ad2} alt="" width={100} height={100} />
        <p className={styles.title}>Acompanhe o pedido</p>
      </div>
    </div>
  )
}