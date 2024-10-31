import styles from "./styles.module.css";
import { IGetCategories } from "../interfaces";

type TCategoryItemProps = {
  category: IGetCategories;
}

export function CategoryItem({ category }: TCategoryItemProps) {
  return (    
    <div>   
      <picture className={styles["picture-container"]}>
        <img src={`http://127.0.0.1:8000/${category.image_path}`} alt={category.name} className={styles["image-container"]}/>
      </picture>      
      
      <p className={styles["search-title"]}>{ category.name }</p>
    </div>
  )
}