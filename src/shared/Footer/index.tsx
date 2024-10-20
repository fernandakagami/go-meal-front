import { Copyright } from "lucide-react";
import styles from "./styles.module.css";

export function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-wrapper"]}>
        <p className={styles.copyright}>All rights Reserved <Copyright size={16} /> Fernanda {currentDate} </p>

        <p>Feito com ❤️ por Fernanda </p>
      </div>
    </footer>
  )
}