import { Copyright } from "lucide-react";
import styles from "./styles.module.css";

export function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer className={styles["footer-container"]}>

      <div className={styles["link-container"]}>
        <h4 className={styles["link-title"]}>Sobre a empresa</h4>
        <ul>
          <li className={styles["link"]}>Sobre nós</li>
          <li className={styles["link"]}>Termos e condições</li>
        </ul>
      </div>

      <div className={styles["footer-wrapper"]}>
        <p className={styles.copyright}>All rights Reserved <Copyright size={16} /> Fernanda {currentDate} </p>

        <p>Feito com ❤️ por Fernanda </p>
      </div>
    </footer>
  )
}