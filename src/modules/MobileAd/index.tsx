import { BannerAd } from "./BannerAd";
import { InstallAd } from "./InstallAd";

import styles from "./styles.module.css";

export function MobileAd() {
  return (
    <div className={styles["mobile-container"]}>
      <BannerAd />
      <InstallAd />
    </div>
  )
}