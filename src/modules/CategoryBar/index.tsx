"use client";

import { useEffect, useState } from "react";
import { fetchCategories } from "./action/category-action";
import { CategoryItem } from "./CategoryItem";

import styles from "./styles.module.css";
import { IGetCategories } from "./interfaces";

export function CategoryBar() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetchCategories();

    setCategories(response);
    console.log(response);
  }


  useEffect(() => {
    getCategories();
  },[])


  return (
    <div className={styles["search-bar-background"]}>
      <h1 className={styles["search-bar-title"]}>Buscar por categoria</h1>

      <div className={styles["search-bar-container"]}>
        {categories.map((category: IGetCategories) => <CategoryItem category={category} key={category.id} />)}                      
      </div>
    </div>
    
  )
}