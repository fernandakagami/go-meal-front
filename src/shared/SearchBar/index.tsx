import { SearchButton } from "../SearchButton";

import styles from "./styles.module.css";

export function SearchBar() {
  return (
    <div className={styles["search-bar-background"]}>
      <h1 className={styles["search-bar-title"]}>Buscar por categoria</h1>

      <div className={styles["search-bar-container"]}>
        <SearchButton />
        <SearchButton />
        <SearchButton />
        <SearchButton />
        <SearchButton />
        <SearchButton />
      </div>
    </div>
    
  )
}