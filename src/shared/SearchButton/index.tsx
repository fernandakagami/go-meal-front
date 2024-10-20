import Image from "next/image";

import image from "@/assets/search_menu_1.svg";

import styles from "./styles.module.css";

export function SearchButton() {
  return (
    <div>
      <Image src={image} alt="Search Button" className={styles["image-container"]} />
      
      <p className={styles["search-title"]}>Pizza</p>
    </div>
  )
}