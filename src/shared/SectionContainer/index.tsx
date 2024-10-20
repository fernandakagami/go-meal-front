"use client";

import styles from "./styles.module.css";

export function SectionContainer({title, column, children}: {title: string, column: number, children: React.ReactNode}) {
  return (
    <div className={styles["section-container"]}>
      <h1 className={styles["section-title"]}>{ title }</h1>

      <div className={`${styles["section-wrapper"]} ${column === 5 ? styles["section-column-5"] : styles["section-column-4"]} `}>
        {children}
      </div>
    </ div>    
  )
}