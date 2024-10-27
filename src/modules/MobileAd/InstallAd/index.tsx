import Image from "next/image";

import google from "@/assets/google-logo.svg";
import apple from "@/assets/apple-logo.svg";

import styles from './styles.module.css';

export function InstallAd() {
  return (
    <div className={styles["info-container"]}>
      <h3 className={styles.title}>Instale o app</h3>

      <p className={styles["info-text"]}>Nunca foi tão fácil pedir um delivery.</p>

      <span className={styles["download-container"]}>
        <div className={styles["download-wrapper"]}>
          <Image src={google} alt="google logo" width={22}/>

          <div className={styles["download-text"]}>
            Download no <b>Google Play</b>
          </div>
        </div>

        <div className={styles["download-wrapper"]}>
          <Image src={apple} alt="apple logo" width={22}/>

          <div className={styles["download-text"]}>
            Download no <b>Apple Store</b>
          </div>
        </div>
       
      </span>
    </div>
  )
}